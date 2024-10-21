import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

const Star = styled.span`
  color: ${(props) => (props.$active ? "#FF6060" : "#E3E3E3")};
  font-size: ${({ theme }) => theme.size.title};
  padding-right: 5px;
  @media ${theme.breakpoints.mobile} {
    font-size: 18px;
  }
`;

function Rating({ rating }) {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} $active={index + 1 <= rating}>
          ★
        </Star>
      ))}
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.string,
};

export default Rating;
