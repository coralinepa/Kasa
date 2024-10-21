import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./theme";

const Main = styled.main`
  margin: 0 auto;
  max-width: 1240px;
  @media ${theme.breakpoints.smallScreen} {
    padding: 20px;
  }
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
}

export default App;
