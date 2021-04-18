import React, { FC } from "react";

// styles
import { Container } from "./Spinner.styled";

interface SpinnerProps {
  tiny?: boolean;
  darkTheme?: boolean;
}

const Spinner: FC<SpinnerProps> = ({ tiny, darkTheme }) => {
  return <Container tiny={tiny} darkTheme={darkTheme} />;
};

export default Spinner;
