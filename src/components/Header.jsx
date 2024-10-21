import styled from "styled-components";

import Logo from "../assets/images/logo.png";
import Navbar from "./NavBar";
import theme from "../theme";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  margin: 0 auto;
  padding-top: 40px;
  max-width: 1240px;
  padding-bottom: 20px;
  @media ${theme.breakpoints.smallScreen} {
    padding: 20px;
  }
`;

const LogoPage = styled.img`
  height: 60%;
  @media ${theme.breakpoints.mobile} {
    width: 145px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>
        <LogoPage src={Logo} alt="Kasa, location d'appartements" />
      </h1>
      <Navbar />
    </StyledHeader>
  );
}

export default Header;
