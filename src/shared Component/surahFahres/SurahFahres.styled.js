import styled from "@emotion/styled";
export const TableContainer = styled.div`
  position: relative;
  bottom: 80px;
  left: 90px;
  width: 90%;
  max-width: 300px;
  max-height: 300px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  overflow-y: auto;
  z-index: 1000;

  @media (max-width: 768px) {
    bottom: 50px;
    left: 60px;
    max-width: 50%;
  }

  @media (max-width: 480px) {
    bottom: 30px;
    left: 50px;
    padding: 5px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid #ddd;
    font-size: 0.8rem;
  }

  th {
    background-color: #f5f5f5;
    font-size: 0.9rem;
    color: #333;
  }

  tr:hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    th,
    td {
      font-size: 0.7rem;
      padding: 8px;
    }
  }

  @media (max-width: 480px) {
    th,
    td {
      font-size: 0.6rem;
      padding: 6px;
    }
  }
`;

export const ToggleButton = styled.button`
  position: relative;
  bottom: 20px;
  left: 20px;
  background-color: #00000099;
  color: white;
  border: none;
  border-radius: 10%;
  padding: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 10px;
    bottom: 15px;
    left: 15px;
  }

  @media (max-width: 480px) {
    padding: 8px;
    bottom: 10px;
    left: 10px;
  }
`;
