import styled from "styled-components";
import PropTypes from "prop-types";
import theme from "../theme";

const StyledTag = styled.span`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  color: white;
  font-size: 14px;
  padding: 5px 15px;
  margin-right: 10px;
  @media ${theme.breakpoints.mobile} {
    font-size: 10px;
  }
`;

function Tag({ tag }) {
  return <StyledTag>{tag}</StyledTag>;
}

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
