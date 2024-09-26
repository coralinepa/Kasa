import Gallery from "../components/Gallery";
import Banner from "../components/Banner";
import homeBanner from "../assets/images/home-banner.png";

function Home() {
  return (
    <div>
      <Banner image={homeBanner} title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
