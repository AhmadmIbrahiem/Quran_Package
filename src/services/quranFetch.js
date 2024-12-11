import axios from "axios";

const api = process.env.REACT_APP_QURAN_API;

export const fetchQuran = async (chapter) => {
  try {
    const surahResponse = await axios.get(`${api}/chapters/${chapter}`);
    const versesResponse = await axios.get(`${api}/quran/verses/uthmani`, {
      params: { chapter_number: chapter },
    });
    console.log(surahResponse.data);
    console.log(versesResponse.data);

    const surahName = surahResponse.data.chapter.name_simple;
    const bismillah = surahResponse.data.chapter.bismillah_pre || "";
    const verses = versesResponse.data.verses;

    return { surahName, bismillah, verses };
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchQuranPage = async (page) => {
  const apiUrl = `https://api.quran.com/api/v4/verses/by_page/${page}?words=true&fields=text_uthmani&word_fields=text_uthmani,code_v1,line_number`;

  try {
    const response = await axios.get(apiUrl);

    const { verses } = response.data;
    const meta = response.data.meta;

    const lines = {};
    verses.forEach((verse) => {
      verse.words.forEach((word) => {
        const lineNumber = word.line_number;
        if (!lines[lineNumber]) lines[lineNumber] = [];
        lines[lineNumber].push({
          text: word.code_v1,
          verseKey: verse.verse_key,
        });
      });
    });

    return { lines, meta };
  } catch (error) {
    console.error("Error fetching Quran page data:", error);
    throw error;
  }
};

export const fetchSurahs = async () => {
  try {
    const response = await axios.get(`${api}/chapters`);
    console.log(response);

    return response.data.chapters;
  } catch (error) {
    console.error("Error fetching Surahs:", error);
    throw error;
  }
};
