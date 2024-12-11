import React, { useState } from "react";
import { BookIcon } from "../../assets/icons";
import {
  TableContainer,
  Table,
  ToggleButton,
  SearchInput,
} from "../surahFahres/SurahFahres.styled";

const SurahFahres = ({ surahs, onSurahSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const filteredSurahs = surahs.filter((surah) =>
    surah.name_simple.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <ToggleButton onClick={() => setIsVisible((prev) => !prev)}>
        <BookIcon />
      </ToggleButton>

      {isVisible && (
        <TableContainer>
          <SearchInput
            type="text"
            placeholder="Search Surah..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Surah</th>
                <th>Page</th>
              </tr>
            </thead>
            <tbody>
              {filteredSurahs.map((surah) => (
                <tr key={surah.id} onClick={() => onSurahSelect(surah.id)}>
                  <td>{surah.id}</td>
                  <td>
                    {surah.name_simple} /{surah.name_arabic}
                  </td>
                  <td>{surah.pages[0]}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default SurahFahres;
