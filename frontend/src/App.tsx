import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import LandingPage from "Pages/LandingPage/LandingPage";
import AboutUs from "Pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
