import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetail";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import DHAMultan from "./pages/DHAMultan";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AreaUnitConverter from "./pages/AreaUnitConverter";


import NotFound from "./pages/NotFound";
import "./App.css"; // Global CSS
import "./components/Header.css"; // Header CSS
import "./components/Footer.css"; // Footer CSS
import "./components/TrustedAdvisors.css"; // Trusted Advisors CSS
import "./components/ScrollToTop.css"; // CSS for Scroll to Top Button
import "./components/Team.css"; // CSS for Team
import "./components/Reit.css"; // CSS for Reit

import RedirectHandler from "./components/RedirectHandler";

// This component will handle scrolling to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Ensures animation runs only once per scroll
    });

    // Scroll event listener
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router style={{ cursor: 'url(/logo-cursor.png) 0 0, auto' }}>
      <div className="app-container">
        <Header />
        <ScrollToTop /> {/* This will handle scrolling to top on route change */}
        <div className="routes-container">
         <RedirectHandler/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Projects/:projectSlug" element={<ProjectDetails />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services/:serviceSlug" element={<ServiceDetails />} />
            <Route path="/DHAMultan" element={<DHAMultan />} />
            <Route path="/Team" element={<Team />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/AreaUnitConverter" element={<AreaUnitConverter />} />
          </Routes>
        </div>
        <Footer />

        {/* Scroll to Top Button */}
        {showScroll && (
          <button className="scroll-to-top" onClick={scrollToTop}>
            <FaArrowUp size={20} />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;