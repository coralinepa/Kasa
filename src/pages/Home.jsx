import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import Header from "../components/Header";
import homeBanner from "../assets/images/home-banner.png";

function Home() {
  return (
    <div>
      <Header />
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
