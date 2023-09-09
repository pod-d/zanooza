import CarouselCards from "components/CarouselCards/CarouselCards";
import Collection from "components/Collection/Collection";
import Explore from "components/Explore/Explore";
import FindOut from "components/FindOut/FindOut";
import Hero from "components/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import Services from "components/Services/Services";
import ShopSection2 from "components/Shop/ShopSection2";
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
      <ShopSection2 />
    </div>
  );
};

export default LandingPage;
