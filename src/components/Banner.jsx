import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

const BannerContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${(props) => props.image});
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-position: center;
  background-size: cover;
  height: 223px;
  width: 100%;
  padding: 20px;
  max-width: 95%;
  margin: 43px auto;

  @media ${theme.breakpoints.mobile} {
    margin: 20px auto;
    height: 120px;
  }
`;

const Title = styled.h2`
  color: #ffff;
  font-size: clamp(24px, 4vw, 48px);
  font-weight: 500;
  box-sizing: border-box;
`;

const Banner = ({ image, title }) => {
  return (
    <BannerContainer image={image}>
      <Title>{title}</Title>
    </BannerContainer>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
