import { useState, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import chevronLeft from "../assets/images/chevron_left.png";
import chevronRight from "../assets/images/chevron_right.png";
import theme from "../theme";

const Carousel = styled.section`
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  height: 415px;
  @media ${theme.breakpoints.mobile} {
    height: 255px;
  }
  @media ${theme.breakpoints.tablet} {
    height: 425px;
  }
`;

const CarouselInner = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

const Slide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity ease-in-out 0.6s;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Pagination = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  @media ${theme.breakpoints.mobile} {
    color: transparent;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;

  img {
    width: 48px;
    @media ${theme.breakpoints.mobile} {
      width: 30%;
    }
  }
`;

function Slideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images?.length - 1 ? 0 : prevIndex + 1
    );
  }, [images?.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images?.length - 1 : prevIndex - 1
    );
  }, [images?.length]);

  return (
    <Carousel>
      <CarouselInner>
        {images?.map((slider, index) => (
          <Slide key={`slider-${index}`} $isActive={index === currentIndex}>
            <Image src={slider} alt={`slide ${index + 1}`} />
          </Slide>
        ))}
      </CarouselInner>

      {images.length > 1 && (
        <>
          <Pagination>
            {currentIndex + 1}/{images.length}
          </Pagination>
          <Button onClick={prevSlide} style={{ left: "10px" }}>
            <img src={chevronLeft} alt="Previous slide" />
          </Button>
          <Button onClick={nextSlide} style={{ right: "10px" }}>
            <img src={chevronRight} alt="Next slide" />
          </Button>
        </>
      )}
    </Carousel>
  );
}

Slideshow.propTypes = {
  images: PropTypes.array.isRequired,
};

export default Slideshow;
