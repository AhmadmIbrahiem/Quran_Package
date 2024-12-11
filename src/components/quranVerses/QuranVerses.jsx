import React, { useEffect, useState } from "react";
import { fetchQuranPage, fetchSurahs } from "../../services/quranFetch";
import { QuranContainer } from "./QuranVerses.styled";
import PageMode from "../pageFahres/PageFahres";
import SurahFahres from "../../shared Component/surahFahres/SurahFahres";
import LoadingScreen from "../loadingScreen /LoadingScreen";

const QuranVerses = () => {
  const [lines, setLines] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(604);
  const [surahs, setSurahs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllSurahs = async () => {
      try {
        const surahsList = await fetchSurahs();
        setSurahs(surahsList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllSurahs();
  }, []);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setIsLoading(true); // Loading starts
        const { lines, meta } = await fetchQuranPage(currentPage);
        setLines(lines);
        setTotalPages(meta.last_page || 604);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Loading ends
      }
    };

    fetchPageData();
  }, [currentPage]);

  const handleSurahSelect = (surahId) => {
    const surah = surahs.find((s) => s.id === surahId);
    if (surah) {
      setCurrentPage(surah.pages[0]);
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      {!isLoading && (
        <QuranContainer>
          <PageMode
            currentPage={currentPage}
            totalPages={totalPages}
            lines={lines}
            onPageChange={setCurrentPage}
            surahs={surahs}
          />
          <SurahFahres surahs={surahs} onSurahSelect={handleSurahSelect} />
        </QuranContainer>
      )}
    </>
  );
};

export default QuranVerses;
