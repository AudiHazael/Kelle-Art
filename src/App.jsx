import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import ContactPage from "./Pages/Contact-Page";
import AboutPage from "./Pages/About-Page";
import ServicePage from "./Pages/Service-Page";
import ShopPage from "./Pages/Shop-Page";
import Gallery from "./Pages/Gallery";

// import Error from "./Pages/Error";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-in-out", once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-page" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
