import React, { useEffect, useState } from "react";
import "./style.css";
import {
  VerseAndPaginationWrapper,
  VerseText,
  PaginationContainer,
} from "../quranVerses/QuranVerses.styled";
import { ArrowUp, ArrowDown } from "../../assets/icons";
import { renderLinesWithSurahTitles } from "./renderLinesWithSurahTitles";
import LoadingScreen from "../loadingScreen /LoadingScreen";

const PageMode = ({ currentPage, totalPages, lines, surahs, onPageChange }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => setFontsLoaded(true));
    } else {
      setFontsLoaded(false);
    }
  }, []);

  if (!lines || !surahs.length || !fontsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <VerseAndPaginationWrapper>
      <VerseText>
        {renderLinesWithSurahTitles(lines, surahs, currentPage)}
      </VerseText>

      <PaginationContainer>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ArrowUp />
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ArrowDown />
        </button>
      </PaginationContainer>
    </VerseAndPaginationWrapper>
  );
};

export default PageMode;
