import styled from "@emotion/styled";
import "../pageFahres/style.css";

export const QuranContainer = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: "Amiri", serif;
  color: black;
  border-radius: 10px;
  background: white;

  @media (max-width: 768px) {
    max-width: 80%;
    padding: 15px;
  }

  @media (max-width: 494px) {
    margin: 10px auto;
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 494px) {
    font-size: 1.5rem;
  }
`;

export const VerseAndPaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const VerseText = styled.p`
  font-size: 1.8rem;
  color: black;
  text-align: center;
  direction: rtl;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 494px) {
    font-size: 1rem;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  gap: 10px;

  button {
    padding: 10px 15px;
    font-size: 1rem;
    background-color: gold;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }

    &:disabled {
      background-color: #555;
      cursor: not-allowed;
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 5px;
    justify-content: space-between;
    button {
      font-size: 0.8rem;
      padding: 8px 12px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 3px;

    button {
      font-size: 0.7rem;
      padding: 6px 8px;
    }
  }
`;

export const SurahTitle = styled.h2`
  font-size: 2.5rem;
  color: black;
  font-family: "Amiri", serif;
  text-align: center;
  margin: 20px 0;
  display: block;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Bismillah = styled.p`
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const Word = styled.span`
  font-family: ${({ currentPage }) => `p${currentPage}`};
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 494px) {
    font-size: 1rem;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
  }
`;
