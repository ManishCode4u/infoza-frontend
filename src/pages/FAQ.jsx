import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "How does Buildora work?",
    a: "You share your project or startup requirement, and Buildora provides the right technical solution, guidance, and execution support — from idea to delivery.",
  },
  {
    q: "Do you provide real projects and internships?",
    a: "Yes. We work on real-world projects and provide genuine internship guidance, project mentoring, and hands-on development support.",
  },
  {
    q: "Is my idea and data safe with Buildora?",
    a: "Absolutely. Your idea, code, and data remain completely confidential. We follow strict privacy and security practices.",
  },
  {
    q: "What services does Buildora offer?",
    a: "We offer AI/ML development, web & app development, institutional training, hackathon solutions, data analytics, chatbots, and startup incubation support.",
  },
  {
    q: "Who can use Buildora?",
    a: "Students, developers, startups, founders, and institutions — anyone looking for reliable technical solutions or guidance.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // ✅ ONE-TIME SCROLL ANIMATION
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-white py-20 px-6 overflow-hidden"
    >
      {/* HEADER */}
      <div
        className={`
          text-center max-w-3xl mx-auto mb-14
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 bg-blue-100 px-6 py-2 rounded-full mb-6">
          ● FAQ
        </span>

        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-500">
          Everything you need to know about working with Buildora
        </p>
      </div>

      {/* FAQ BOX */}
      <div
        className={`
          max-w-4xl mx-auto bg-white rounded-3xl
          border border-slate-200 shadow-sm overflow-hidden
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="border-b last:border-b-0">
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full flex items-center justify-between px-8 py-6 text-left group"
              >
                <span className="text-lg font-medium text-slate-900 group-hover:text-blue-600 transition">
                  {item.q}
                </span>

                {/* PLUS ICON */}
                <span
                  className={`
                    text-2xl font-light text-blue-600
                    transition-transform duration-300
                    ${isOpen ? "rotate-45" : "rotate-0"}
                  `}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                className={`
                  px-8 overflow-hidden transition-all duration-300
                  ${isOpen ? "max-h-40 pb-6" : "max-h-0"}
                `}
              >
                <p className="text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
