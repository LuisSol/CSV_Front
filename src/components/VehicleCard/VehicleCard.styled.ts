import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  background-color: ${({ theme: { colors } }) => colors.aquaBlue};
  width: 310px;
  padding: 10px;
  margin: 20px;
  p {
    display: inline-block;
    margin: 5px;
  }
`;
