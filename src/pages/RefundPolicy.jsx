import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RefundPolicy = () => {
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
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">
          Refund Policy
        </h1>

        <p className="text-slate-500 mb-10">
          Last updated: {new Date().toDateString()}
        </p>

        <div className="space-y-10 text-slate-700 leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Overview</h2>
            <p>
              Buildora is committed to delivering high-quality services. This
              Refund Policy explains the conditions under which refunds may be
              approved or denied.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Eligible Refunds
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Duplicate payments made accidentally</li>
              <li>Payment completed but service not initiated</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Non-Refundable Cases
            </h2>
            <ul className="list-decimal ml-6 space-y-2">
              <li>Work already started or partially delivered</li>
              <li>Completed or ongoing training sessions</li>
              <li>Customized or personalized project development</li>
              <li>Consultation or mentorship services already provided</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Refund Process
            </h2>
            <p>
              If a refund is approved, it will be processed within
              <strong> 7–10 business days</strong> and credited to the original
              payment method used during the transaction.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Contact Information
            </h2>
            <p>
              For refund-related queries, please contact us at:
              <br />
              <strong>teambuildora1@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RefundPolicy;
