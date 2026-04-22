import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent_status');
    if (!consent) {
      // Delay appearing for better UX
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (status) => {
    localStorage.setItem('cookie_consent_status', status);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-[99999] w-[calc(100%-3rem)] max-w-sm md:w-[400px]"
        >
          <div className="relative bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-[2rem] p-6 overflow-hidden">
            {/* Background Decorative Gradient */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-tight">Privacy Preference</h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                We use cookies to improve your experience and analyze traffic. By clicking "Accept", you agree to our use of cookies as described in our <Link to="/privacy-policy" className="text-blue-600 font-semibold hover:underline">Privacy Policy</Link>.
              </p>

              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => handleConsent('accepted')}
                  className="flex-grow bg-[#0f172a] text-white py-3 px-6 rounded-xl text-sm font-bold shadow-lg shadow-black/10 hover:bg-black hover:-translate-y-0.5 transition-all duration-300"
                >
                  Accept All
                </button>
                <button
                  onClick={() => handleConsent('rejected')}
                  className="flex-grow bg-slate-100 text-slate-700 py-3 px-6 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all duration-300"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
