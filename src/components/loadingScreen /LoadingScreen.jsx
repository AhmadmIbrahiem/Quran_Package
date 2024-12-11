import React from "react";
import DotLoader from "react-spinners/DotLoader";
import { ContainerSpinner } from "./loadingScreen.styled";

const LoadingScreen = () => {
  return (
    <ContainerSpinner>
      <DotLoader color="#3498db" size={50} />
    </ContainerSpinner>
  );
};

export default LoadingScreen;
