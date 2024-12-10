import React, { useEffect, useState } from "react";
import { fetchQuranPage, fetchSurahs } from "../../services/quranFetch";
import { QuranContainer, Title } from "./QuranVerses.styled";
import SurahFahres from "../surahFahres/SurahFahres";
import PageFahres from "../pageFahres/PageFahres";

const QuranVerses = () => {
  const [verses, setVerses] = useState([]);
  const [surahs, setSurahs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(604);

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
        const { verses, meta } = await fetchQuranPage(currentPage);
        setVerses(verses);
        setTotalPages(meta.last_page || 604);
      } catch (error) {
        console.error(error);
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

  const handlePageChange = (direction) => {
    setCurrentPage((prev) => prev + direction);
  };

  return (
    <QuranContainer>
      <PageFahres
        currentPage={currentPage}
        totalPages={totalPages}
        verses={verses}
        surahs={surahs}
        onPageChange={handlePageChange}
      />
      <SurahFahres surahs={surahs} onSurahSelect={handleSurahSelect} />

      <Title>{currentPage}</Title>
    </QuranContainer>
  );
};

export default QuranVerses;
