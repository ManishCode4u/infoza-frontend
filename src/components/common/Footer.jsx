import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "../../assets/images/logo/buildoratech-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="BuildoraCraft" className="h-9 w-auto" />
              <span className="text-xl font-bold text-slate-900">
                BuildoraCraft
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-6 max-w-xs">
              AI-powered development, training, and startup solutions for
              students, founders, and institutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/buildoracraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition">
                  <Instagram className="w-5 h-5 text-slate-600" />
                </span>
              </a>

              <a
                href="https://www.linkedin.com/company/buildoracraft"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition">
                  <Linkedin className="w-5 h-5 text-slate-600" />
                </span>
              </a>

              <a href="mailto:teambuildora1@gmail.com">
                <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 hover:bg-slate-200 transition">
                  <Mail className="w-5 h-5 text-slate-600" />
                </span>
              </a>
            </div>
          </div>

          {/* PLATFORM + LEGAL */}
          <div className="grid grid-cols-2 gap-10 md:col-span-2">

            {/* PLATFORM */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link to="/about" className="block hover:text-blue-600 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="block hover:text-blue-600 transition">
                    How it Works
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="block hover:text-blue-600 transition">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="block hover:text-blue-600 transition">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <Link to="/privacy-policy" className="block hover:text-blue-600 transition">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="block hover:text-blue-600 transition">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/refund-policy" className="block hover:text-blue-600 transition">
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Contact</h4>
            <p className="text-sm text-slate-600 mb-3">
              teambuildora1@gmail.com
            </p>

            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-700">
              ● Available for Projects
            </span>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} BuildoraCraft. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
