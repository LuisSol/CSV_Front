import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.lightGray};
  top: 0;
  width: 100%;
  height: 30px;
  position: fixed;
  z-index: 1;
  padding-left: 20px;
`;

export const NavItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 0 20px;
`;

export const HomeLogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
  svg {
    height: 16px;
    width: 16px;
  }
`;
