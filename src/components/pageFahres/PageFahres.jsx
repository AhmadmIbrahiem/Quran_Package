import React, { useEffect, useState } from "react";
import "./style.css";
import {
  VerseAndPaginationWrapper,
  VerseText,
  PaginationContainer,
} from "../quranVerses/QuranVerses.styled";
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from "../../assets/icons";
import { renderLinesWithSurahTitles } from "./renderLinesWithSurahTitles";
import LoadingScreen from "../loadingScreen /LoadingScreen";

const PageMode = ({ currentPage, totalPages, lines, surahs, onPageChange }) => {
  const [isMidScreen, setIsMidScreen] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMidScreen(window.innerWidth <= 768);
    };

    const loadFonts = async () => {
      if (document.fonts) {
        await document.fonts.ready;
        setFontsLoaded(true);
      } else {
        setFontsLoaded(true);
      }
    };

    handleResize();
    loadFonts();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!fontsLoaded) {
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
          {isMidScreen ? <ArrowLeft /> : <ArrowUp />}
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          {isMidScreen ? <ArrowRight /> : <ArrowDown />}
        </button>
      </PaginationContainer>
    </VerseAndPaginationWrapper>
  );
};

export default PageMode;
