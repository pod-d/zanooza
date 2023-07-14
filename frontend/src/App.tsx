import React from "react";
import "./App.css";
import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Hero from "components/Hero/Hero";
import CarouselCards from "components/CarouselCards/CarouselCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CarouselCards />
      <Footer />
    </div>
  );
}

export default App;
