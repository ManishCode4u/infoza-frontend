import React, { useEffect, useRef, useState } from 'react';
import buildingImg from "../assets/images/building.jpg";
import titleImage from "../assets/images/titleimage.jpg";
import missionImage from "../assets/images/HeroBanner.webp";

const AboutBuildoraPage = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Helper for Parent Sections
  const revealClass = (delay = "duration-700") => `
    transition-all ${delay} ease-out
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
  `;

  // Helper for elements inside Cards (Icons, Heading, Image)
  const innerEffect = (delay) => `
    transition-all duration-700 ease-out ${delay}
    ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}
  `;

  return (
    <div ref={sectionRef} className="min-h-screen bg-white">
      <div className="pt-10"></div>

      <div className={`flex justify-center ${revealClass("duration-500")}`}>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-full mb-6">
          ● About Buildora
        </span>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Hero Section */}
        <section className={`mb-12 ${revealClass("duration-700 delay-100")}`}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-700">
              <div className="absolute inset-0">
                <img src={buildingImg} alt="Building" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8">
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">Building the Future of Infrastructure</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="mb-16">
          <h2 className={`text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center ${revealClass("duration-700")}`}>
            Our Vision & Mission
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* --- VISION CARD --- */}
            <div className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${revealClass("delay-200")}`}>
              {/* Icon & Title Animation */}
              <div className={`flex items-start mb-6 ${innerEffect("delay-[400ms]")}`}>
                <div className="p-3 bg-blue-500 rounded-xl mr-4 shadow-lg shadow-blue-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              
              {/* Text Animation */}
              <p className={`text-gray-700 text-lg md:text-xl mb-6 ${innerEffect("delay-[600ms]")}`}>
                To lead the global transition toward smart, sustainable construction through innovation.
              </p>
              
              {/* Card Image Animation */}
              <div className={`rounded-xl h-48 overflow-hidden shadow-inner ${innerEffect("delay-[800ms]")}`}>
                <img src={titleImage} alt="Vision" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>

            {/* --- MISSION CARD --- */}
            <div className={`bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${revealClass("delay-300")}`}>
              {/* Icon & Title Animation */}
              <div className={`flex items-start mb-6 ${innerEffect("delay-[500ms]")}`}>
                <div className="p-3 bg-purple-500 rounded-xl mr-4 shadow-lg shadow-purple-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              
              {/* Text Animation */}
              <p className={`text-gray-700 text-lg md:text-xl mb-6 ${innerEffect("delay-[700ms]")}`}>
                Delivering excellence through cutting-edge technology and unparalleled integrity in every build.
              </p>
              
              {/* Card Image Animation */}
              <div className={`rounded-xl h-48 overflow-hidden shadow-inner ${innerEffect("delay-[900ms]")}`}>
                <img src={missionImage} alt="Mission" className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </div>

          </div>
        </section>

        {/* Core Values (Already Animated but refined) */}
        <section className={`bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 md:p-8 mb-16 ${revealClass("duration-1000")}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Integrity", desc: "Doing the right thing, every single time.", color: "bg-blue-100", text: "text-blue-600", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
              { title: "Innovation", desc: "Pushing boundaries with Buildora Tech.", color: "bg-purple-100", text: "text-purple-600", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
              { title: "Sustainability", desc: "Green solutions for a better tomorrow.", color: "bg-green-100", text: "text-green-600", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
              { title: "Trust", desc: "Your partner in every step of the build.", color: "bg-orange-100", text: "text-orange-600", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" }
            ].map((val, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${innerEffect(`delay-[${i*150}ms]`)}`}>
                <div className={`w-12 h-12 ${val.color} rounded-lg flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${val.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={val.icon} />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                <p className="text-gray-600">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default AboutBuildoraPage;