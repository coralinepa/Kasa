import PropTypes from "prop-types";
import styled from "styled-components";

const Part = styled.span`
  font-size: 18px;
  padding-right: 2px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

// Composant qui gère l'affichage du nom de l'hôte
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
