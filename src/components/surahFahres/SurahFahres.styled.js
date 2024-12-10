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
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  font-size: 1rem;
  box-sizing: border-box;
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
`;
