import styled from "styled-components";

import Logo from "../assets/images/logo.png";
import Navbar from "./NavBar";

const HeaderPage = styled.header`
  display: flex;
  justify-content: space-between;
  height: 68px;
  max-width: 95%;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 900px) {
    height: 40px;
  }
`;

const LogoPage = styled.img`
  height: 60%;

  @media screen and (max-width: 700px) {
    height: 40px;
  }
`;

function Header() {
  return (
    <HeaderPage>
      <h1>
        <LogoPage src={Logo} alt="Kasa, location d'appartements" />
      </h1>
      <Navbar />
    </HeaderPage>
  );
}

export default Header;
