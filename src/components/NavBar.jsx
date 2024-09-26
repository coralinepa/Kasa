import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../theme";

const NavList = styled.ul`
  display: flex;
  gap: 50px;
  color: ${(props) => props.theme.colors.dark};
  font-size: clamp(12px, 2.5vw, 24px);

  @media ${theme.breakpoints.mobile} {
    gap: 20px;
  }
`;

const NavListItem = styled.li`
  position: relative;

  @media ${theme.breakpoints.mobile} {
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &.active {
      text-decoration: ${(props) =>
        `underline solid ${props.theme.colors.dark}`};
      transition: all 0.2s ease-in-out;
    }

    &:hover {
      color: ${(props) => props.theme.colors.dark};
      text-decoration: underline solid ${(props) => props.theme.colors.dark};
    }
  }
`;

function Navbar() {
  return (
    <NavList>
      <NavListItem>
        <NavLink to="/">Accueil</NavLink>
      </NavListItem>
      <NavListItem>
        <NavLink to="/about">À propos</NavLink>
      </NavListItem>
    </NavList>
  );
}

export default Navbar;
