import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import EmailCapturePopup from "./components/common/EmailCapturePopup";
import ScrollToTop from "./components/common/ScrollToTop";

// ADMIN
import ProtectedRoute from "./components/admin/ProtectedRoute";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLeads from "./pages/admin/AdminLeads";
import AdminMessages from "./pages/admin/AdminMessages";
import AdminNotes from "./pages/admin/AdminNotes";

// HOME SECTIONS
import Home from "./pages/Home";
import AboutInfozaTech from "./pages/AboutInfozaTech";
import Services from "./pages/Services";
import HowItWorks from "./pages/HowItWorks";
import AppShowcase from "./components/sections/AppShowcase";
import Projects from "./pages/Projects";
import PortfolioPage from "./pages/PortfolioPage";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

// OTHER PAGES
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import ProjectDetail from "./pages/ProjectDetail";
import Careers from "./pages/Careers"; // NEW CAREERS PAGE

// LEGAL
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <ScrollToTop />
      {/* NAVBAR */}
      {!isAdminRoute && <Navbar />}

      {/* GLOBAL POPUPS */}
      {!isAdminRoute && <EmailCapturePopup />}

      {/* ROUTES */}
      <Routes>
        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN ROUTES */}
        <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
          <Route index element={<AdminDashboard />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="notes" element={<AdminNotes />} />
        </Route>

        {/* HOME (single-page layout) */}
        <Route
          path="/"
          element={
            <>
              {/* 1. Hero Section (inside Home) */}
              <Home />
              
              {/* 3. Services Section */}
              <Services />

              {/* 4. App Showcase Section (Below Our Process) */}
              <AppShowcase />
              
              {/* 5. Other Sections */}
              <HowItWorks />
              
              {/* 5. Projects Section (newly added) */}
              <Projects />
              
              <PortfolioPage />
              <FAQ />
              <Contact />
            </>
          }
        />

        {/* INDIVIDUAL PAGES */}
        <Route path="/about" element={<AboutInfozaTech />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/projects" element={<Projects page={true} />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/careers" element={<Careers />} />

        {/* PROJECTS & BLOG */}
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />

        {/* LEGAL */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />

      </Routes>

      {/* GLOBAL OVERLAYS */}

      {/* FOOTER */}
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
