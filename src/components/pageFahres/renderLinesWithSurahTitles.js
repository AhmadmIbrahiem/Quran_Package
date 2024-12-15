import React from "react";
import { SurahTitle, Bismillah, Word } from "../quranVerses/QuranVerses.styled";

export const renderLinesWithSurahTitles = (lines, surahs, currentPage) => {
  const renderedLines = [];
  const renderedChapters = [];

  Object.entries(lines).forEach(([lineNumber, lineData]) => {
    const { words, surahNumBeforeLine } = lineData;

    if (surahNumBeforeLine && !renderedChapters.includes(surahNumBeforeLine)) {
      renderedChapters.push(surahNumBeforeLine);

      renderedLines.push(
        <SurahTitle key={`surah-${surahNumBeforeLine}`}>
          {String(surahNumBeforeLine).padStart(3, "0")}surah
        </SurahTitle>
      );

      if (surahNumBeforeLine !== "1" && surahNumBeforeLine !== "9") {
        renderedLines.push(
          <Bismillah key={`bismillah-${surahNumBeforeLine}`}>﷽</Bismillah>
        );
      }
    }

    renderedLines.push(
      <div key={lineNumber}>
        {words.map((word) => (
          <Word key={word.id} currentPage={currentPage}>
            {word.text}
          </Word>
        ))}
      </div>
    );
  });

  return renderedLines;
};
