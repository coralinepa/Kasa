import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.$image});
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-position: center;
  background-size: cover;
  height: 223px;
  padding: 20px;
  margin-bottom: 20px;
  @media ${theme.breakpoints.smallScreen} {
    height: 120px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  color: #ffff;
  font-size: 48px;
  font-weight: 500;
  box-sizing: border-box;
  @media ${theme.breakpoints.smallScreen} {
    font-size: 24px;
    overflow-wrap: break-word;
    width: 218px;
  }
`;

const Banner = ({ image, title }) => {
  return (
    <BannerContainer $image={image}>
      <Title>{title}</Title>
    </BannerContainer>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
