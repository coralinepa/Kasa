import styled from "styled-components";
import theme from "../theme";
import logo from "../assets/images/logo-footer.png";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  background-color: #000;
`;

const FooterCopyright = styled.p`
  font-size: ${({ theme }) => theme.size.title};
  color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 73px;
  @media ${theme.breakpoints.smallScreen} {
    font-size: 12px;
  }
`;

function Footer() {
  return (
    <StyledFooter>
      <img
        src={logo}
        alt="Kasa - agence de location d'appartements entre particuliers"
        style={{ width: "122x", paddingTop: "88px" }}
      />
      <FooterCopyright>© 2020 Kasa. All rights reserved</FooterCopyright>
    </StyledFooter>
  );
}

export default Footer;
