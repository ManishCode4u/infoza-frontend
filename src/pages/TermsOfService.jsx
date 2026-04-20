import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsOfService = () => {
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
          Terms of Service
        </h1>

        <p className="text-[#64748b] mb-10">
          Effective date: {new Date().toDateString()}
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using InfozaTech’s website, services, or products,
              you agree to comply with and be bound by these Terms of Service.
              If you do not agree, you must not use our services.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Services Offered
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>AI / ML development solutions</li>
              <li>Web and application development</li>
              <li>Technical training and mentorship</li>
              <li>Startup, internship, and project guidance</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. User Responsibilities
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Provide accurate and complete information</li>
              <li>Use services only for lawful purposes</li>
              <li>Avoid misuse, hacking, or exploitation of systems</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, code, designs, branding, and materials provided by
              InfozaTech are the intellectual property of InfozaTech unless stated
              otherwise. Unauthorized reproduction or distribution is prohibited.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              InfozaTech shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use or inability to
              use our services.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Termination of Services
            </h2>
            <p>
              We reserve the right to suspend or terminate access to our services
              if these terms are violated or misuse is detected.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Contact Information
            </h2>
            <p>
              If you have questions regarding these Terms of Service, please
              contact us at:
              <br />
              <strong>teaminfozatech@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfService;
