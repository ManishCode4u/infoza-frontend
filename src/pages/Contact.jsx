import React from "react";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch("https://buildoracraft.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Message sent successfully!");
        e.target.reset();
      } else {
        alert("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server error. Try again later.");
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
            <h2 className="text-4xl font-extrabold mb-4">
              Let’s Connect
            </h2>

            <p className="text-blue-100 max-w-sm mb-12">
              Have an idea? We combine design, AI and engineering to craft
              meaningful digital experiences.
            </p>

            <div className="space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-blue-200">
                  Founder
                </p>
                <p className="text-lg font-semibold">
                  Manish Gupta
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-blue-200">
                  Call
                </p>
                <p className="text-blue-100">
                  +91 9155596712 <br /> +91 9263119717
                </p>
              </div>

              <div>
                <p className="text-xs tracking-widest uppercase text-blue-200">
                  Email
                </p>
                <p className="text-blue-100">
                  teambuildora1@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT FORM (COMPACT) */}
        <div className="p-8 bg-white">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Send a Message
          </h3>

          <p className="text-slate-500 mb-6 text-sm">
            We usually reply within a few hours.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-slate-900 placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-slate-900 placeholder-slate-400
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <textarea
              name="message"
              required
              rows="3"
              placeholder="Describe your project..."
              className="w-full px-4 py-3 rounded-xl bg-white
              border border-slate-200 text-slate-900 placeholder-slate-400 resize-none
              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-xl font-bold text-white
              bg-blue-600 hover:bg-blue-700
              shadow-md hover:shadow-lg transition"
            >
              SEND MESSAGE →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
