import React, { useState, useEffect, useRef } from 'react';
import { Logos3 } from '../components/blocks/logos3';
import { GridPattern } from '../components/ui/grid-pattern';
import manishGuptaImg from '../assets/manish_gupta.png';
import { ScrollReveal } from '../components/ui/scroll-reveal';

const Home = () => {
  const [activeNav, setActiveNav] = useState('services');
  const [email, setEmail] = useState('');


  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'insights', label: 'Insights' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'careers', label: 'Careers' }
  ];

  const services = [
    {
      id: 1,
      icon: 'cloud_done',
      title: 'Startup Development',
      description: 'We build MVPs and scalable products for startups.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      id: 2,
      icon: 'psychology',
      title: 'Web & App Development',
      description: 'Modern web and mobile apps with clean UI.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      id: 3,
      icon: 'shield_lock',
      title: 'AI & Automation',
      description: 'Smart solutions using AI and automation.',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/30'
    }
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <main>
        {/* Hero Section */}
        <ScrollReveal direction="up" delay={0.1}>
        <section
          className="relative w-full overflow-hidden pt-28 pb-12 md:pt-24 md:pb-20"
        >
          {/* Background Grid Pattern */}
          <GridPattern
            squares={[
              [4, 4], [5, 1], [8, 2], [6, 4], [5, 5], [10, 10], [12, 15], 
              [15, 10], [9, 12], [8, 8], [2, 10], [3, 14]
            ]}
            className="[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] inset-x-0 inset-y-[-10%] h-[120%] skew-y-12"
            width={40}
            height={40}
          />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative flex flex-col items-center justify-center text-center">

            {/* Top Image */}
            <div className="relative mb-2 w-64 md:w-80 lg:w-[28rem] flex justify-center z-10">
              {/* Strong ambient white glow to recreate the studio lighting effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] bg-white rounded-full blur-[50px] opacity-100 z-0 pointer-events-none"></div>
              
              <img
                src={manishGuptaImg}
                alt="Manish Gupta"
                className="w-full h-auto object-contain relative z-10 drop-shadow-xl contrast-[1.05] saturate-[1.1] brightness-[1.02]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>

            {/* Headline */}
            <h1 className="relative z-20 -mt-2 md:-mt-10 text-4xl md:text-5xl lg:text-7xl font-[600] text-slate-800 tracking-tight leading-[1.1] mb-8 font-sans drop-shadow-md">
              Build your Startup <br />
              <span className="text-slate-900">with InfozaTech</span>
            </h1>

            {/* Buttons */}
            <div className="relative z-20 flex flex-row flex-wrap items-center justify-center gap-4 mt-2">
              <button
                onClick={() => {
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-3 bg-black hover:bg-gray-900 text-white text-[15px] font-medium rounded-[2rem] shadow-md transition-all duration-300"
              >
                Let's Explore
              </button>

              <button
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="px-8 py-3 bg-white hover:bg-gray-50 text-black text-[15px] font-medium rounded-[2rem] border border-gray-200 shadow-sm transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

          </div>

          {/* External Auto-Scrolling Trusted By Component */}
          <Logos3 />

          {/* Marquee Section */}
          <div className="relative w-full overflow-hidden bg-[linear-gradient(90deg,#000000,#111111)] border-t border-[#1a1a1a] py-5 sm:py-6 mt-6 md:mt-8">
            {/* Fade effect edges */}
            <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#111111] to-transparent z-10 pointer-events-none"></div>

            <div className="flex animate-marquee-right w-max items-center">
              <div className="flex items-center">
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Develop it from Best</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Develop it Once</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">InfozaTech</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Futuredesks</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Startup Solutions</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Scalable Tech</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
              </div>
              <div className="flex items-center" aria-hidden="true">
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Develop it from Best</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Develop it Once</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">InfozaTech</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Futuredesks</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Startup Solutions</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
                <span className="text-xl md:text-2xl font-[700] uppercase tracking-[0.1em] text-white mx-8">Scalable Tech</span>
                <span className="text-[#e5e7eb] mx-4 md:mx-8 text-xl">•</span>
              </div>
            </div>
          </div>
        </section>
        </ScrollReveal>




        {/* Services Section */}
        <section className="relative w-full py-24 md:py-32 bg-[#f8fafc]">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 z-10">
            <ScrollReveal direction="up" delay={0.1}>
            <div
              className="flex flex-col items-center justify-center mb-20 text-center"
            >
              <h3 className="text-5xl md:text-6xl font-[700] text-[#0f172a] tracking-tight mb-6">What We Build</h3>
              <p className="text-xl md:text-2xl text-[#64748b] font-medium max-w-2xl">Everything you need to launch and scale</p>
            </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => (
                <ScrollReveal key={service.id} direction="up" delay={index * 0.1}>
                <div
                  className="group relative p-10 bg-gradient-to-b from-white to-slate-50/50 border border-[#e2e8f0] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 hover:border-blue-300 transition-all duration-500 overflow-hidden cursor-pointer will-change-transform"
                >
                  {/* Top colored line accent */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glow border on hover (internal) */}
                  <div className="absolute inset-0 rounded-[24px] shadow-[inset_0_0_0_1px_rgba(59,130,246,0)] group-hover:shadow-[inset_0_0_0_2px_rgba(59,130,246,0.3)] transition-shadow duration-500 pointer-events-none"></div>

                  {/* Icon Container */}
                  <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-blue-50 border border-blue-100 shadow-sm group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300">
                    {service.icon === 'cloud_done' && (
                      <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    )}
                    {service.icon === 'psychology' && (
                      <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {service.icon === 'shield_lock' && (
                      <svg className="w-8 h-8 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>

                  <h4 className="relative z-10 text-2xl font-[700] text-[#0f172a] mb-4 tracking-tight group-hover:text-[#2563eb] transition-colors duration-300">{service.title}</h4>
                  <p className="relative z-10 text-[#64748b] leading-relaxed text-lg transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating Icons (WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-[9999] group animate-float-icon">
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(37,211,102,0.6)] transition-all duration-300"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* Floating Icons (Instagram) */}
      <div className="fixed bottom-6 left-6 z-[9999] group animate-float-icon" style={{ animationDelay: '1.5s' }}>
        <a
          href="https://www.instagram.com/infozatech/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 text-white rounded-full shadow-[0_4px_14px_rgba(225,48,108,0.3)] group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(225,48,108,0.5)] transition-all duration-300"
          aria-label="Instagram"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Home;
