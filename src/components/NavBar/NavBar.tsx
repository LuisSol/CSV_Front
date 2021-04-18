import React, { FC } from "react";
import { useHistory } from "react-router-dom";

// styles
import {
  NavBarContainer,
  HomeLogoContainer,
  NavItemContainer,
} from "./NavBar.styled";

const NavBar: FC = () => {
  const history = useHistory();

  const handleGoTo = (path: string) => (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    history.push(path);
  };

  return (
    <NavBarContainer>
      <HomeLogoContainer onClick={handleGoTo("/")}>Home</HomeLogoContainer>|
      <NavItemContainer onClick={handleGoTo("/providers")}>
        Providers
      </NavItemContainer>
    </NavBarContainer>
  );
};

export default NavBar;
