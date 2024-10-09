import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../theme";

const CardLink = styled(Link)`
  position: relative;
  width: 30%;
  height: 340px;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.2s ease-in-out;

  @media ${theme.breakpoints.mobile} {
    height: 255px;
  }
  @media (max-width: 1100px) {
    width: 100%;
  }

  &::after {
    content: "";
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }
  &:hover {
    box-shadow: 0 2px 2px rgb(0, 0, 0);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.2s ease-in-out;
  will-change: transform;
  transform: scale(1);
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  z-index: 20;
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
`;

function Card({ id, title, cover }) {
  return (
    <CardLink to={`/accomodation/${id}`} className="thumb">
      <Image src={cover} alt={title} />
      <Title>{title}</Title>
    </CardLink>
  );
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
