import apiInstance from "./axiosInterceptor";

export const fetchQuranPage = async (page) => {
  try {
    const response = await apiInstance.get(
      `/verses/by_page/${page}?words=true&fields=text_uthmani&word_fields=text_uthmani,code_v1,line_number`
    );

    const { verses } = response.data;
    const meta = response.data.meta;

    const lines = {};

    verses.forEach((verse) => {
      const [surahId, verseNumber] = verse.verse_key.split(":");

      verse.words.forEach((word) => {
        const lineNumber = word.line_number;

        if (!lines[lineNumber]) {
          lines[lineNumber] = {
            surahNumBeforeLine: null,
            surahTitle: null,
            words: [],
          };
        }

        if (verseNumber === "1") {
          lines[lineNumber].surahNumBeforeLine = surahId;
          lines[lineNumber].surahTitle = "ﱡﱟ";
        }

        lines[lineNumber].words.push({
          text: word.code_v1,
          verseKey: verse.verse_key,
          id: word.id,
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
    const response = await apiInstance.get(`/chapters`);
    return response.data.chapters;
  } catch (error) {
    console.error("Error fetching Surahs:", error);
    throw error;
  }
};
