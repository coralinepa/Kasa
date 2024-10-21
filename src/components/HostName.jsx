import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../theme";

const Part = styled.span`
  font-size: ${({ theme }) => theme.size.content};
  padding-right: 2px;
  @media ${theme.breakpoints.mobile} {
    font-size: ${({ theme }) => theme.size.mobile};
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

function Host({ name }) {
  if (!name) return null;

  const splitName = name.split(" ");
  return (
    <Container>
      {splitName.map((part, index) => (
        <Part key={index}>
          {part}
          <br />
        </Part>
      ))}
    </Container>
  );
}

// Déclaration des PropTypes pour vérifier que `name` est une chaîne de caractères
Host.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Host;
