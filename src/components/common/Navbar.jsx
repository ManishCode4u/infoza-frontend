import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import logo from "../../assets/images/logo/infozatech-logo.png";

const Navbar = () => {
  const scrolled = useScroll(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
      <div
        className={`fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-[95%] md:max-w-4xl rounded-full px-4 md:px-8 h-[64px] md:h-[76px] flex items-center justify-between bg-[#F3F4F4]/90 backdrop-blur-xl border border-gray-100 transition-[box-shadow,background-color] duration-500 hover:shadow-lg pointer-events-auto ${scrolled
            ? "shadow-md"
            : "shadow-sm"
          }`}
      >
        <Link to="/" className="flex items-center">
          <img src={logo} alt="InfozaTech Logo" className="h-[40px] md:h-[56px] w-auto object-contain" />
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            className={`transition-colors duration-300 ${location.pathname === "/" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`transition-colors duration-300 ${location.pathname === "/about" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`transition-colors duration-300 ${location.pathname === "/projects" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
          >
            Projects
          </Link>
          <Link
            to="/services"
            className={`transition-colors duration-300 ${location.pathname === "/services" ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
          >
            Services
          </Link>
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden md:block px-6 py-2.5 rounded-full text-sm font-semibold bg-gray-900 text-white hover:bg-black transition"
        >
          Let's Talk
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-900"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[92vw] max-w-sm rounded-2xl p-6 flex flex-col gap-4 text-sm font-medium md:hidden bg-white shadow-xl border border-gray-100">
          <Link to="/" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">About</Link>
          <Link to="/projects" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link to="/services" onClick={() => setOpen(false)} className="hover:text-blue-600 transition-colors">Services</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;