import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import ideaAnim from "../assets/animations/idea.json";
import matchAnim from "../assets/animations/matching.json";
import successAnim from "../assets/animations/success.json";

const steps = [
  {
    step: "1",
    title: "Share Your Requirement",
    subtitle: "Enter Your Idea",
    desc: "Tell us what you want to build — app, website, project, or training.",
    anim: ideaAnim,
  },
  {
    step: "2",
    title: "Get Solution & Guidance",
    subtitle: "Instant Match",
    desc: "We analyze your requirement and suggest the best solution & roadmap.",
    anim: matchAnim,
  },
  {
    step: "3",
    title: "Build, Deliver & Support",
    subtitle: "Best Outcome",
    desc: "We build, guide, and support you until your goal is achieved.",
    anim: successAnim,
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-32 px-6 overflow-hidden">
      {/* HEADER */}
      <div
        className={`
          text-center max-w-5xl mx-auto mb-24
          transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
        `}
      >
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-full mb-6">
          ● How It Works
        </span>

        {/* ✅ ONE LINE HEADING */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight whitespace-nowrap">
          From idea to funding in{" "}
          <span className="text-blue-600">3 simple steps</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-600">
          No complex setup. Just share your idea and let Buildora do the heavy lifting.
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14">
        {steps.map((item, index) => (
          <div key={index} className="group">
            {/* CARD (ANIMATION ONLY) */}
            <div
              style={{ transitionDelay: `${index * 150}ms` }}
              className={`
                transition-all duration-700 ease-out
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"}
                bg-gradient-to-br from-blue-600 to-blue-500
                rounded-3xl p-6
                shadow-xl
                hover:shadow-2xl hover:shadow-blue-500/40
                hover:-translate-y-3 hover:scale-[1.04]
              `}
            >
              <div className="bg-white/15 rounded-2xl p-5 backdrop-blur-md border border-white/20">
                <Lottie animationData={item.anim} loop className="h-44 w-full" />
              </div>
            </div>

            {/* TEXT OUTSIDE CARD */}
            <div className="mt-8 transition-all duration-300 group-hover:translate-x-1">
              <div className="flex items-center gap-4 mb-3">
                {/* ✅ STEP NUMBER HOVER EFFECT */}
                <span
                  className="
                    flex items-center justify-center w-10 h-10 rounded-lg
                    bg-blue-100 text-blue-600 font-bold
                    transition-all duration-300
                    group-hover:bg-blue-600 group-hover:text-white
                  "
                >
                  {item.step}
                </span>

                {/* ✅ TITLE HOVER COLOR */}
                <h3 className="text-xl font-semibold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                  {item.title}
                </h3>
              </div>

              <p className="text-blue-600 font-medium mb-2">
                {item.subtitle}
              </p>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
