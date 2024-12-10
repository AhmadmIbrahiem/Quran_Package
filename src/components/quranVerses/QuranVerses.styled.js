import styled from "@emotion/styled";

export const QuranContainer = styled.div`
  max-width: 900px;
  margin: 20px auto;
  padding: 20px;
  font-family: "Amiri", serif;
  color: black;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  background: white;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 15px;
  color: black;
  text-align: center;
`;

export const VerseAndPaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
`;

export const VerseText = styled.p`
  font-size: 1.8rem;
  color: black;
  text-align: center;
  direction: rtl;
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  margin-left: 40px;
  gap: 10px;

  button {
    padding: 10px 15px;
    font-size: rem;
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
`;

export const SurahTitle = styled.h2`
  font-size: 2.5rem;
  color: black;
  font-family:
  text-align: center;
  font-family: "Amiri", serif;
  margin: 20px 0;
  display: block;
`;

export const Bismillah = styled.p`
  font-size: 2rem;
  color: black;
  text-align: center;
  margin: 20px 0;
`;
