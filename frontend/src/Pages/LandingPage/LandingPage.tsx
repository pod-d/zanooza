import CarouselCards from "components/CarouselCards/CarouselCards";
import Collection from "components/Collection/Collection";
import Explore from "components/Explore/Explore";
import FindOut from "components/FindOut/FindOut";
import Footer1 from "components/Footer/Footer1";
import GameProducts from "components/GameProducts/GameProducts";
import Hero from "components/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import Services from "components/Services/Services";
import ShopAndRentals from "components/ShopAndRentals/ShopAndRentals";
import Trending from "components/Trending/Trending";
import VideoSection from "components/VideoSection/VideoSection";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CarouselCards />
      <Services />
      <VideoSection />
      <Explore />
      <Trending />
      <FindOut />
      <Collection />
      <ShopAndRentals />
      <GameProducts />
      <Footer1 />
    </div>
  );
};

export default LandingPage;
