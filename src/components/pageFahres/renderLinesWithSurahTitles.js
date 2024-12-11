import React from "react";
import { SurahTitle, Bismillah, Word } from "../quranVerses/QuranVerses.styled";

export const renderLinesWithSurahTitles = (lines, surahs, currentPage) => {
  const renderedLines = [];
  let currentSurahId = null;

  Object.entries(lines).forEach(([lineNumber, words]) => {
    const firstWord = words[0];

    if (firstWord?.verseKey) {
      const [surahId, verseNumber] = firstWord.verseKey.split(":");
      if (verseNumber === "1" && surahId !== currentSurahId) {
        currentSurahId = surahId;
        const surah = surahs?.find((s) => s.id === parseInt(surahId));

        if (surah) {
          renderedLines.push(
            <SurahTitle key={surahId}>{surah.name_arabic}</SurahTitle>
          );

          if (surah.bismillah_pre) {
            renderedLines.push(<Bismillah key={surahId}>﷽</Bismillah>);
          }
        }
      }
    }
    renderedLines.push(
      <div key={lineNumber}>
        {words.map((word, index) => (
          <Word key={index} currentPage={currentPage}>
            {word.text}
          </Word>
        ))}
      </div>
    );
  });

  return renderedLines;
};
