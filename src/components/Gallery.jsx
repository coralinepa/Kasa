import Card from "./Card";
import styled from "styled-components";
import datas from "../data/data";

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;
  background-color: #f7f7f7;
  padding: 50px;
  border-radius: 25px;
  width: 95%;
  margin: 0 auto;
  @media screen and (max-width: 1230px) {
    gap: 25px;
    padding: 25px 15px;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

function Gallery() {
  return (
    <Main>
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
    </Main>
  );
}

export default Gallery;
