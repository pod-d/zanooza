import CarouselCards from "components/CarouselCards/CarouselCards";
import Explore from "components/Explore/Explore";
import FindOut from "components/FindOut/FindOut";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import Navbar from "components/Navbar/Navbar";
import Services from "components/Services/Services";
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
      <Footer />
    </div>
  );
};

export default LandingPage;