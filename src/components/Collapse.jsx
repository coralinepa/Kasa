import { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import arrow from "../assets/images/arrow.png";
import theme from "../theme";

const CollapseContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary};
  max-width: 1100px;
  border-radius: 0 0 5px 5px;
  margin: 0 auto;
  font-size: inherit;
`;

const CollapseTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  font-weight: ${({ theme }) => theme.weight.normal};
  font-size: ${({ theme }) => theme.size.title};
  padding: 10px 15px;
  cursor: pointer;
  @media ${theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.size.titleMobile};
  }
`;

const Arrow = styled.img`
  transition: all 0.2s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(0deg)" : "rotate(180deg)")};
  @media ${theme.breakpoints.mobile} {
    width: 16px;
  }
`;

const CollapseContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  letter-spacing: 1px;
  font-size: ${({ theme }) => theme.size.content};
  padding: ${({ open }) => (open ? "10px" : "0")};
  height: ${({ open }) => (open ? "auto" : "0")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: height 0.4s ease-in-out, opacity 0.4s 0.4s ease-in-out;
  @media ${theme.breakpoints.mobile} {
    font-size: 12px;
  }
`;

function Collapse({ title, content }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <CollapseContainer>
      <CollapseTitle onClick={handleToggle}>
        {title}
        <Arrow src={arrow} alt="show content" open={toggle} />
      </CollapseTitle>
      <CollapseContent open={toggle}>
        {Array.isArray(content) ? (
          content.map((item, index) => <p key={index}>{item}</p>)
        ) : (
          <p>{content}</p>
        )}
      </CollapseContent>
    </CollapseContainer>
  );
}
Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
};

export default Collapse;
