import { useState } from "react";
import { Link } from "react-router-dom";
import useScroll from "../../hooks/useScroll";
import logo from "../../assets/images/logo/buildoratech-logo.svg";

const Navbar = ({ variant = "blue" }) => {
  const scrolled = useScroll(20);
  const [open, setOpen] = useState(false);

  const variants = {
    blue: `
      bg-blue-600/90 text-white
      ${scrolled ? "backdrop-blur-xl shadow-xl shadow-black/20" : ""}
    `,
    light: `
      bg-white/95 text-slate-900
      border border-slate-200
      shadow-lg shadow-black/10
    `,
  };

  return (
    <header className="fixed top-4 inset-x-0 z-[9999] flex justify-center px-3">
      <div
        className={`${variants[variant]} transition-all duration-300 w-full max-w-7xl rounded-full px-5 py-3 flex items-center justify-between`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Buildora" className="h-8 w-auto" />
          <span className="text-lg font-semibold">Buildora</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:opacity-80">Home</Link>
          <Link to="/paid-projects" className="hover:opacity-80">Projects</Link>
          <a href="#services" className="hover:opacity-80">Services</a>
          <Link to="/blog" className="hover:opacity-80">Blog</Link>
        </nav>

        {/* Contact */}
        <a
          href="#contact"
          className={`hidden md:block px-5 py-2 rounded-full text-sm font-semibold ${
            variant === "blue"
              ? "bg-white text-blue-600"
              : "bg-blue-600 text-white"
          }`}
        >
          Contact
        </a>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className={`absolute top-[78px] left-1/2 -translate-x-1/2 w-[92vw] max-w-sm rounded-2xl px-6 py-6 flex flex-col gap-5 text-sm font-medium md:hidden ${
            variant === "blue"
              ? "bg-blue-600 text-white shadow-2xl"
              : "bg-white text-slate-900 border shadow-xl"
          }`}
        >
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/paid-projects" onClick={() => setOpen(false)}>Projects</Link>
          <a href="#services" onClick={() => setOpen(false)}>Services</a>

          <Link to="/blog" onClick={() => setOpen(false)}>Blog</Link>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`mt-2 px-4 py-2 rounded-full text-center font-semibold ${
              variant === "blue"
                ? "bg-white text-blue-600"
                : "bg-blue-600 text-white"
            }`}
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
