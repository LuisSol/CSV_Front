import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme: { colors } }) => colors.white};
  margin: 15px 0;
  width: 320px;
  cursor: pointer;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background-color: ${({ theme: { colors } }) => colors.aquaBlue};
  border-radius: 20px;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.darkAquaBlue};
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
  }
`;
