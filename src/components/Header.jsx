import styled from "styled-components";

import Logo from "../assets/images/logo.png";
import Navbar from "./NavBar";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  margin: 0 auto;
  padding-top: 40px;
  max-width: 1240px;
  width: 100%;
  padding-bottom: 20px;
`;

const LogoPage = styled.img`
  height: 60%;

  @media screen and (max-width: 700px) {
    height: 40px;
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
