import React from "react";
import API_URL from "../config";

const Contact = () => {
  const [status, setStatus] = React.useState({ type: "", message: "" });
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      _subject: e.target.subject.value, // honeypot
    };

    try {
      const apiUrl = API_URL;
      
      const controller = new AbortController();
      // Use 15s timeout
      const timeoutId = setTimeout(() => controller.abort(), 15000); 

      console.log(`🚀 [Frontend] Sending request to: ${apiUrl}/api/contacts`);

      const response = await fetch(`${apiUrl}/api/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      console.log("📥 [Frontend] Response received status:", response.status);

      // Check if response is JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response.text();
        console.error("❌ [Frontend] Non-JSON response:", text);
        throw new Error("Server returned non-JSON response");
      }

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: "Your message has been sent successfully." });
        e.target.reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Failed to send message. Please try again."
        });
      }
    } catch (error) {
      console.error("❌ [Frontend] Submission error:", error);
      if (error.name === "AbortError") {
        setStatus({ type: "error", message: "Connection timed out. Please try again." });
      } else {
        setStatus({ type: "error", message: `Error: ${error.message || "Server connection failed"}` });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 py-28 bg-white"
    >
      {/* SOFT BACKGROUND GLOWS */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-200/40 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-sky-200/40 blur-[140px]" />

      {/* PAGE LABEL (FORM KE BAHAR) */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20">
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-full shadow-sm">
          ● Contact
        </span>
      </div>

      {/* MAIN CARD */}
      <div
        className="relative z-10 max-w-5xl w-full grid md:grid-cols-2
        rounded-[26px] overflow-hidden border border-blue-100 shadow-xl bg-white"
      >
        {/* LEFT PANEL (BLUE) */}
        <div className="p-12 bg-blue-600 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-[700] mb-4">
              Let’s Connect
            </h2>

            <p className="text-blue-100 max-w-sm mb-12">
              Have an idea? We combine design, AI and engineering to craft
              meaningful digital experiences.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-white opacity-80">
                  Founder
                </p>
                <p className="text-lg font-semibold text-white">
                  Manish Gupta
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-white opacity-80">
                  Call
                </p>
                <p className="text-white">
                  +91 9155596712 <br /> +91 9263119717
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-white opacity-80">
                  Email
                </p>
                <p className="text-white">
                  teaminfozatech@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (COMPACT) */}
        <div className="p-8 bg-white">
          <h3 className="text-2xl font-[700] text-[#0f172a] mb-2">
            Send a Message
          </h3>

          <p className="text-[#64748b] mb-6 text-sm">
            We usually reply within a few hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot field for spam protection */}
            <input
              type="text"
              name="subject"
              className="hidden"
              autoComplete="off"
            />
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-[#0f172a] placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-[#0f172a] placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <textarea
              name="message"
              required
              rows="3"
              placeholder="Describe your project..."
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-[#0f172a] placeholder-slate-400 resize-none
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            {status.message && (
              <div className={`p-3 rounded-lg text-sm font-medium ${
                status.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}>
                {status.type === "success" ? "✅ " : "❌ "}
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-xl font-[700] text-white
              ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}
              shadow-md hover:shadow-lg transition flex items-center justify-center gap-2`}
            >
              {loading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                  SENDING...
                </>
              ) : (
                "SEND MESSAGE →"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
