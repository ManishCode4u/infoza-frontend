import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import useScroll from "../../hooks/useScroll";
import logo from "../../assets/images/logo/infozatech-logo.png";

const Navbar = () => {
  const scrolled = useScroll(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Projects", path: "/projects" },
    { title: "Services", path: "/services" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[100001] pointer-events-none">
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
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-300 ${location.pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
            >
              {link.title}
            </Link>
          ))}
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
          className="md:hidden w-10 h-10 flex items-center justify-center text-2xl text-gray-900"
          aria-label="Toggle Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ fontFamily: "'Outfit', 'Inter', sans-serif" }}
            className="fixed top-[74px] left-0 right-0 mx-auto w-[92vw] max-w-sm rounded-[2rem] p-6 flex flex-col gap-4 md:hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 pointer-events-auto"
          >
            <div className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-[16px] font-bold text-gray-900 hover:text-blue-600 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            
            <div className="h-px bg-gray-100/80 w-10 mx-auto my-0.5" />
            
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="text-center text-[16px] font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Let's Talk
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;