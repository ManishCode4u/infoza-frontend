import React, { useState, useEffect } from "react";
import API_URL from "../../config";
import { X, Loader2, CheckCircle2, Sparkles } from "lucide-react";

const EmailCapturePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const [scrollCount, setScrollCount] = useState(0);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("popupShown");
    if (hasSeenPopup === "true") return;

    let isScrolling = false;
    let scrollTimeout;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        setScrollCount(prev => prev + 1);
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 400); // 400ms pause defines a separate scroll gesture
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    console.log("Current Scroll Count:", scrollCount);
    if (scrollCount === 4) {
      console.log("Scroll requirement met. Showing popup in 1.5 seconds...");
      const timer = setTimeout(() => {
        const hasSeenPopup = localStorage.getItem("popupShown");
        if (hasSeenPopup !== "true") {
          setIsOpen(true);
          localStorage.setItem("popupShown", "true");
          console.log("Popup triggered!");
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [scrollCount]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("popupShown", "true");
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const apiUrl = API_URL;
      const response = await fetch(`${apiUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (data.success) {
        setIsSuccess(true);
        localStorage.setItem("popupShown", "true");
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch (err) {
      console.error("Lead capture error:", err);
      setError("Cannot connect to server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-4 sm:p-0 bg-gray-900/40 backdrop-blur-md transition-all duration-500"
      onClick={handleClose}
    >
      <div
        className="w-[90%] sm:w-full max-w-[28rem] bg-white rounded-3xl p-7 sm:p-10 relative mb-4 sm:mb-0 transform transition-all duration-500 ease-out scale-100 opacity-100 animate-in fade-in zoom-in-[0.96] border border-gray-200/60 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18)]"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #FAFAFA 100%)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Close"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="mb-6 sm:mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-b from-indigo-50 to-indigo-100 flex items-center justify-center mb-6 shadow-inner border border-indigo-200/50">
            <Sparkles className="text-indigo-600 w-7 h-7" strokeWidth={2} />
          </div>
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-gray-900 mb-3 tracking-tight leading-tight">
            Get Free Website Consultation
          </h2>
          <p className="text-gray-500 text-[15px] sm:text-base leading-relaxed">
            We build high-quality websites & apps for startups.
          </p>
        </div>

        {isSuccess ? (
          <div className="py-6 sm:py-8 text-center animate-in fade-in slide-in-from-bottom-2 duration-500 border border-green-100 bg-green-50/50 rounded-2xl">
            <div className="mx-auto w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Thanks!</h3>
            <p className="text-gray-600 text-sm">We’ll contact you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <input
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                disabled={isSubmitting}
                placeholder="name@startup.com"
                className={`w-full px-4 py-3.5 sm:py-4 bg-white border ${
                  error 
                    ? "border-red-400 focus:ring-red-500/20" 
                    : "border-gray-300 focus:border-indigo-500 focus:ring-[4px] focus:ring-indigo-500/15"
                } rounded-xl text-[15px] sm:text-base outline-none transition-all duration-300 placeholder:text-gray-400 shadow-sm`}
              />
              {error && (
                <p className="absolute -bottom-6 left-1 text-[13px] font-medium text-red-500 animate-in fade-in">
                  {error}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full relative flex items-center justify-center py-3.5 sm:py-4 px-4 bg-gradient-to-b from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-medium rounded-xl text-[15px] sm:text-base shadow-[0_2px_8px_-2px_rgba(79,70,229,0.4)] hover:shadow-[0_8px_20px_-4px_rgba(79,70,229,0.5)] hover:-translate-y-[1px] active:translate-y-[1px] active:shadow-none transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed border border-indigo-700/50 ${
                error ? "mt-6" : "mt-2"
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={20} className="animate-spin mr-2" />
                  Please wait...
                </>
              ) : (
                "Get Free Consultation"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EmailCapturePopup;
