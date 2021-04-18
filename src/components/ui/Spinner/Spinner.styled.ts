import styled, { keyframes } from "styled-components";

interface ContainerProps {
  tiny?: boolean;
  darkTheme?: boolean;
}

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div<ContainerProps>`
  display: inline-block;
  width: ${({ tiny }) => (tiny ? "20px" : "40px")};
  height: ${({ tiny }) => (tiny ? "20px" : "40px")};
  &::after {
    content: " ";
    display: block;
    width: ${({ tiny }) => (tiny ? "14px" : "24px")};
    height: ${({ tiny }) => (tiny ? "14px" : "24px")};
    margin: 8px;
    border-radius: 50%;
    border: ${({ tiny }) => (tiny ? "2px" : "3px")} solid
      ${({ theme: { colors }, darkTheme }) =>
        darkTheme ? colors.white : colors.aquaBlue};
    border-color: ${({ theme: { colors }, darkTheme }) =>
        darkTheme ? colors.white : colors.aquaBlue}
      transparent
      ${({ theme: { colors }, darkTheme }) =>
        darkTheme ? colors.white : colors.aquaBlue}
      transparent;
    animation: ${animation} 1.2s linear infinite;
  }
`;
