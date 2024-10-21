import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

const StyledTag = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  color: white;
  font-size: 14px;
  width: 365px;
  height: 25px;
  padding: 5px 25px;
  margin-right: 10px;
  @media ${theme.breakpoints.mobile} {
    font-size: 10px;
    width: 84px;
    height: 18px;
    padding: 5px 15px;
  }
`;

function Tag({ tag }) {
  return <StyledTag>{tag}</StyledTag>;
}

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
