import Card from "./Card";
import styled from "styled-components";
import datas from "../data/data";
import theme from "../theme";

const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  background-color: #f7f7f7;
  padding: 50px;
  border-radius: 25px;
  @media ${theme.breakpoints.tablet} {
    padding: 25px;
    flex-direction: column;
    gap: 15px;
  }
`;

function Gallery() {
  return (
    <CardList>
      {datas.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        );
      })}
    </CardList>
  );
}

export default Gallery;
