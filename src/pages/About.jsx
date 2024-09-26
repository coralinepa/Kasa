import styled from "styled-components";

import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import AboutBanner from "../assets/images/about-banner.png";
import aboutDatas from "../data/about";
import theme from "../theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.breakpoints.mobile} {
  }
`;

const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  flex-grow: 1;
`;

const Card = styled.div`
margin: 40px auto;    
      @media ${theme.breakpoints.mobile} {{
          margin: 20px auto;
      }
  `;

function About() {
  return (
    <Container>
      <Banner image={AboutBanner} title="" />
      <Main>
        {aboutDatas.map((data) => {
          return (
            <Card key={data.id}>
              <Collapse title={data.title} content={data.content} />
            </Card>
          );
        })}
      </Main>
    </Container>
  );
}

export default About;
