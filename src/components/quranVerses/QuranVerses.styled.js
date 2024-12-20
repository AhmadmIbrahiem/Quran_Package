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
    padding: 10px 20px;
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
    justify-content: space-between;
    margin: 30px auto;
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    margin: 10px 0;

    button {
      font-size: 0.8rem;
      padding: 6px 12px;
    }
  }
`;

export const SurahTitle = styled.h2`
  font-family: "surah names", sans-serif; /* Explicitly apply the surah names font */
  font-size: ${(props) => (props.isMobile ? "8vw" : "5rem")};
  text-align: center;
  margin: 1.5rem 0;
  color: black;
  line-height: 1.2;
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

export const Bismillah = styled.p`
  font-size: 2.5rem;
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
  font-size: 3.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 494px) {
    font-size: 1rem;
  }
  @media (max-width: 300px) {
    font-size: 0.6rem;
  }
`;

export const Suraname = styled.div`
  font-family: "surah names", sans-serif;
  font-size: ${(props) => (props.isMobile ? "10vw" : "min(10vw, 8rem)")};
  color: #000;
  text-align: center;
  margin: 1rem 0;
`;
