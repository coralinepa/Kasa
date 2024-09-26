import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`;

const NotFoundTitle = styled.h3`
  font-size: 288px;
  color: ${({ theme }) => theme.colors.secondary};

  @media ${theme.breakpoints.smallScreen} {
    font-size: 96px;
  }
`;

const NotFoundContent = styled.div`
  font-size: 36px;
  font-weight: 300;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};

  @media ${theme.breakpointssmallScreen} {
    font-size: 18px;
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  display: block;
  width: fit-content;
  padding-bottom: 70px;

  &:hover::after {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: ;
    transition: width 0.2s ease-in-out;
  }

  @media ${theme.breakpoints.smallScreen} {
    font-size: 18px;
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundContent>
        Oups ! La page que vous demandez n&rsquo;existe pas.
      </NotFoundContent>

      <StyledLink to="/">Retourner sur la page d&rsquo;accueil</StyledLink>
    </NotFoundContainer>
  );
}

export default NotFound;
