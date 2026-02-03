import React from "react";
import logo from "../../assets/images/logo/buildoratech-logo.svg";
import { Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Buildora" className="h-9 w-auto" />
              <span className="text-xl font-bold text-slate-900">
                Buildora Craft
              </span>
            </div>

            <p className="text-slate-600 text-sm mb-6 max-w-xs">
              AI-powered development, training, and startup solutions
              for students, founders, and institutions.
            </p>

            <div className="flex gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100">
                <Instagram className="w-5 h-5 text-slate-600" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100">
                <Linkedin className="w-5 h-5 text-slate-600" />
              </span>
              <span className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100">
                <Mail className="w-5 h-5 text-slate-600" />
              </span>
            </div>
          </div>

          {/* 🔥 PLATFORM + LEGAL WRAPPER (THIS IS THE FIX) */}
          <div className="grid grid-cols-2 gap-10 md:col-span-2">

            {/* PLATFORM */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">
                Platform
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>How it Works</li>
                <li>Services</li>
                <li>Projects</li>
                <li>Training</li>
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">
                Legal
              </h4>
              <ul className="space-y-3 text-sm text-slate-600">
                 <li><a href="/privacy-policy" className="hover:text-blue-600">Privacy Policy</a></li>
                 <li><a href="/terms" className="hover:text-blue-600">Terms of Service</a></li>
                 <li><a href="/refund-policy" className="hover:text-blue-600">Refund Policy</a></li>
              </ul>
            </div>

          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-slate-900 mb-3">
              Contact
            </h4>

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
        © {new Date().getFullYear()} Buildora Tech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
