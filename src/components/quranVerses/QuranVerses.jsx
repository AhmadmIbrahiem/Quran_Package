import React, { useEffect, useState } from "react";
import { fetchQuranPage, fetchSurahs } from "../../services/quranFetch";
import { QuranContainer } from "./QuranVerses.styled";
import PageMode from "../pageFahres/PageFahres";
import SurahFahres from "../../shared Component/surahFahres/SurahFahres";
import LoadingScreen from "../loadingScreen /LoadingScreen";

const QuranVerses = () => {
  const [lines, setLines] = useState(null);
  const [surahs, setSurahs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(604);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setIsLoading(true);

        const surahsList = await fetchSurahs();
        const { lines, meta } = await fetchQuranPage(currentPage);

        setSurahs(surahsList);
        setLines(lines);
        setTotalPages(meta.last_page || 604);
      } catch (error) {
        console.error("Error fetching Quran data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();
  }, [currentPage]);

  const handleSurahSelect = (surahId) => {
    const surah = surahs.find((s) => s.id === surahId);
    if (surah && surah.pages?.length > 0) {
      setCurrentPage(surah.pages[0]);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <QuranContainer>
      <PageMode
        currentPage={currentPage}
        totalPages={totalPages}
        lines={lines}
        surahs={surahs}
        onPageChange={setCurrentPage}
      />

      <SurahFahres surahs={surahs} onSurahSelect={handleSurahSelect} />
    </QuranContainer>
  );
};

export default QuranVerses;
