import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import BottomNav from "./components/BottomNav";

// HOME SECTIONS
import Home from "./pages/Home";
import AboutBuildora from "./pages/AboutBuildora";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import PaidProjects from "./pages/PaidProjects";
import PortfolioPage from "./pages/PortfolioPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// OTHER PAGES
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

// LEGAL
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const [navVariant, setNavVariant] = useState("blue");

  useEffect(() => {
    const onScroll = () => {
      const services = document.getElementById("services");
      if (!services) return;

      const trigger =
        services.getBoundingClientRect().top + window.scrollY - 120;

      setNavVariant(window.scrollY >= trigger ? "light" : "blue");
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <Navbar variant={navVariant} />

      {/* ROUTES */}
      <Routes>

        {/* HOME (single-page layout) */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <AboutBuildora />
              <Services />
              <HowItWorks />
              <PaidProjects />
              <PortfolioPage />
              <FAQ />
              <Contact />
            </>
          }
        />

        {/* INDIVIDUAL PAGES */}
        <Route path="/about" element={<AboutBuildora />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/projects" element={<PaidProjects />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />

        {/* BLOG */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* LEGAL */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

      </Routes>

      {/* FOOTER & MOBILE NAV */}
      <Footer />
      <BottomNav />
    </>
  );
}

export default App;
