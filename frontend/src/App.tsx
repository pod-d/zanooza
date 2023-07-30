import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "components/Navbar/Navbar";
import LandingPage from "Pages/LandingPage/LandingPage";
import BlogPage from "Pages/BlogPage/BlogPage";
import EventPage from "Pages/EventPage/EventPage";
import ShopPage from "Pages/ShopPage/ShopPage";
import AboutPage from "Pages/AboutPage/AboutPage";
import Footer from "components/Footer/Footer";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
