import {
  VersesContainer,
  VerseText,
  PaginationContainer,
  SurahTitle,
  VerseAndPaginationWrapper,
  Bismillah,
} from "../quranVerses/QuranVerses.styled";
import { ArrowDown, ArrowUp } from "../../assets/icons";

const PageMode = ({
  currentPage,
  totalPages,
  verses,
  surahs,
  onPageChange,
}) => {
  const renderVersesWithTitles = () => {
    const surahNames = [];
    let currentSurah = null;
    /* How to add the font to the surah names like th */
    verses.forEach((verse) => {
      const [surahId, verseNumber] = verse.verse_key.split(":");
      const surah = surahs?.find((s) => s.id === parseInt(surahId));

      if (verseNumber === "1" && surah) {
        surahNames.push(
          <SurahTitle key={`title-${surahId}`}>{surah.name_arabic}</SurahTitle>
        );

        if (surah.bismillah_pre) {
          surahNames.push(
            <Bismillah key={`bismillah-${surahId}`}>﷽</Bismillah>
          );
        }

        currentSurah = surah;
      }

      surahNames.push(
        <span key={verse.verse_key}>
          {verse.text_uthmani} ({verseNumber}){" "}
        </span>
      );
    });

    return surahNames;
  };

  return (
    <>
      <VerseAndPaginationWrapper>
        <VerseText>{renderVersesWithTitles()}</VerseText>
        <PaginationContainer>
          <button
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(1)}
          >
            <ArrowUp />
          </button>
          <button disabled={currentPage === 1} onClick={() => onPageChange(-1)}>
            <ArrowDown />
          </button>
        </PaginationContainer>
      </VerseAndPaginationWrapper>
    </>
  );
};

export default PageMode;
