import React, { useEffect, useRef, useState } from 'react';

const AboutInfozaTechPage = () => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    // Trigger animation short delay after mount
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white text-slate-900" id="about">
      
      {/* SECTION 1: HERO */}
      <section 
        className="relative w-full pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden" 
        ref={heroRef}
      >
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            About InfozaTech
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            We design and build powerful websites, applications, and startup solutions that help businesses grow faster.
          </p>
        </div>
      </section>

      {/* MOVING STRIP */}
      <div className="relative w-full overflow-hidden bg-[#0f172a] py-4 md:py-5 border-y border-neutral-900 z-10">
        <div className="flex animate-marquee-left w-max items-center">
          {[...Array(2)].map((_, i) => (
             <div key={i} className="flex items-center" aria-hidden={i === 1}>
               <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white mx-8 whitespace-nowrap">Develop it from Best</span>
               <span className="text-neutral-600 mx-4 whitespace-nowrap">•</span>
               <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white mx-8 whitespace-nowrap">Build Smart</span>
               <span className="text-neutral-600 mx-4 whitespace-nowrap">•</span>
               <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white mx-8 whitespace-nowrap">Launch Fast</span>
               <span className="text-neutral-600 mx-4 whitespace-nowrap">•</span>
               <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-white mx-8 whitespace-nowrap">Scale Easily</span>
               <span className="text-neutral-600 mx-4 whitespace-nowrap">•</span>
             </div>
          ))}
        </div>
      </div>

      {/* SECTION 2: ABOUT CONTENT */}
      <section className="pt-12 md:pt-16 pb-6 md:pb-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Building Digital Products That Matter</h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
            <p>
              At InfozaTech, we focus on building high-quality digital products for startups and businesses. From idea validation to final launch, we handle everything with precision and modern design thinking.
            </p>
            <p>
              Whether it's a website, mobile application, or a complete startup solution, our goal is to deliver scalable, fast, and user-friendly products.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHO WE ARE */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">Who We Are</h2>
          <div className="space-y-6 text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
            <p>
              We are a growing team focused on helping startups and businesses turn ideas into real products. We combine design, development, and strategy to create impactful digital solutions.
            </p>
            <p>
              Our core strength lies in simplicity, performance, and clean execution.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: TEAM SECTION */}
      <section className="pt-6 md:pt-8 pb-20 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 mb-3 text-xs font-semibold tracking-wider uppercase">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Team Behind InfozaTech</h2>
          </div>
          
          {/* Scalable Grid Layout: 1 col mobile, 2 tablet, 4 desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            
            {/* Team Card (Overlay Style) */}
            <div className="relative group rounded-2xl overflow-hidden h-[280px] w-full border border-slate-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              {/* Abstract Full Card Image */}
              <img 
                src="/images/founder_left.jpg" 
                alt="Manish Gupta" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Bottom Overlay Info Box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] text-center group-hover:bg-white transition-colors duration-300">
                <h3 className="text-base font-bold text-slate-900 leading-tight">Manish Gupta</h3>
                <p className="text-[13px] font-medium text-slate-500 mt-0.5">Founder</p>
              </div>
              
            </div>

            {/* Team Card 2 (Lead Generation) */}
            <div className="relative group rounded-2xl overflow-hidden h-[280px] w-full border border-slate-100/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              
              {/* Abstract Full Card Image */}
              <img 
                src="/images/satyam_singh.jpg" 
                alt="Satyam Singh" 
                className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Bottom Overlay Info Box */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] text-center group-hover:bg-white transition-colors duration-300">
                <h3 className="text-base font-bold text-slate-900 leading-tight">Satyam Singh</h3>
                <p className="text-[13px] font-medium text-slate-500 mt-0.5">Lead Generation Executive</p>
              </div>
              
            </div>

            {/* Empty slots for scalable future members seamlessly fit here */}
            
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutInfozaTechPage;