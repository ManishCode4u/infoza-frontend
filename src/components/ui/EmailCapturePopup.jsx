import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Loader2, CheckCircle2 } from 'lucide-react';

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  useEffect(() => {
    // Check if already seen
    const hasSeenPopup = localStorage.getItem('infoza_email_popup_seen');
    if (hasSeenPopup) return;

    let scrollCount = 0;
    let lastScrollY = window.scrollY;
    let scrollTimeout;

    const handleScroll = () => {
      // Debounce the scroll to count distinct scroll events
      clearTimeout(scrollTimeout);
      
      const currentScrollY = window.scrollY;
      const delta = Math.abs(currentScrollY - lastScrollY);
      
      // If scrolled a meaningful amount
      if (delta > 50) {
        scrollTimeout = setTimeout(() => {
          scrollCount++;
          lastScrollY = window.scrollY;
          
          if (scrollCount >= 2) {
            // Trigger 1s delay before showing
            setTimeout(() => {
              setIsOpen(true);
            }, 1000);
            
            // Cleanup listener
            window.removeEventListener('scroll', handleScroll);
          }
        }, 150); // 150ms pause constitutes a distinct scroll
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Prevent background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('infoza_email_popup_seen', 'true');
  };

  const validateEmail = (email) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      localStorage.setItem('infoza_email_popup_seen', 'true');
      
      // Auto close after 3 seconds of success
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[99999] bg-black/60 backdrop-blur-sm flex items-center md:items-center justify-center p-4 md:p-6"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          >
            {/* Modal */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[90%] md:max-w-md bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8 md:p-10 text-center">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex flex-col items-center justify-center py-6"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Thanks!</h3>
                    <p className="text-gray-500 text-lg">We’ll contact you soon.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full mb-6">
                      Special Offer
                    </div>
                    
                    <h2 className="text-3xl font-[800] text-gray-900 tracking-tight leading-tight mb-4">
                      Get Free Website Consultation <span className="inline-block origin-bottom-right hover:animate-pulse">🚀</span>
                    </h2>
                    
                    <p className="text-gray-500 text-[15px] md:text-base leading-relaxed mb-8">
                      We build websites & apps — Let’s discuss your idea.
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setError('');
                          }}
                          placeholder="Enter your email"
                          disabled={status === 'loading'}
                          className={`w-full px-5 py-4 bg-gray-50 border ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200 focus:border-black focus:ring-black'} rounded-2xl text-base text-gray-900 placeholder-gray-400 outline-none transition-all duration-300 focus:ring-4 focus:bg-white disabled:opacity-50 disabled:cursor-not-allowed`}
                        />
                        {error && (
                          <motion.p 
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-6 left-2 text-sm text-red-500 font-medium text-left w-full"
                          >
                            {error}
                          </motion.p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full relative flex items-center justify-center gap-2 px-6 py-4 bg-[#0a0a0a] hover:bg-[#1a1a1a] active:scale-[0.98] text-white text-[16px] font-[600] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Get Free Consultation</span>
                        )}
                      </button>
                    </form>
                    
                    <p className="text-xs text-gray-400 mt-6 font-medium">
                      100% free. No spam. Unsubscribe anytime.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EmailCapturePopup;
