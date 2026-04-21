import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // ✅ Hide Navbar on this page
  useEffect(() => {
    const navbar = document.querySelector("header");
    if (navbar) navbar.style.display = "none";

    return () => {
      if (navbar) navbar.style.display = "block";
    };
  }, []);

  return (
    <section className="bg-white min-h-screen py-24 px-6 relative">
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="
          absolute top-6 left-6
          flex items-center gap-2
          bg-blue-600 text-white
          px-4 py-2 rounded-xl
          font-semibold
          shadow-lg
          hover:bg-blue-700 hover:scale-105
          transition
        "
      >
        ← Back
      </button>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-[700] text-[#0f172a] mb-4">
          Privacy Policy
        </h1>

        <p className="text-[#64748b] mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
            <p>
              InfozaTech ("we", "our", "us") respects your privacy and is committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your data.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Information We Collect
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Name, email address, and contact details</li>
              <li>Project or startup-related information</li>
              <li>Emails, messages, and support communications</li>
              <li>Technical data such as IP address and browser type</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. How We Use Your Information
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>To provide and improve services</li>
              <li>To communicate and offer support</li>
              <li>To maintain platform security</li>
              <li>For internal analytics and improvements</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Protection</h2>
            <p>
              We follow industry-standard security practices. Your ideas,
              project data, and personal information are confidential and never
              sold.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p>
              We may use trusted third-party tools for hosting, analytics, or
              communication. These providers follow strict confidentiality
              policies.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">6. Your Rights</h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Access your personal data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent anytime</li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
            <p>
              For privacy concerns, contact us at:
              <br />
              <strong>teaminfozatech@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
