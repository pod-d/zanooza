import CarouselCards from "components/Landing/CarouselCards/CarouselCards";
import Collection from "components/Landing/Collection/Collection";
import Explore from "components/Landing/Explore/Explore";
import FindOut from "components/Landing/FindOut/FindOut";
import Footer1 from "components/Footer/Footer1";
import GameProducts from "components/Landing/GameProducts/GameProducts";
import Hero from "components/Landing/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import Services from "components/Landing/Services/Services";
import ShopAndRentals from "components/Landing/ShopAndRentals/ShopAndRentals";
import Trending from "components/Landing/Trending/Trending";
import VideoSection from "components/Landing/VideoSection/VideoSection";

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
