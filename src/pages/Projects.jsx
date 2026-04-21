import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import { ScrollReveal } from "../components/ui/scroll-reveal";

const Projects = ({ page = false }) => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Websites");

  const filteredProjects = projectsData.filter(p => p.category === activeCategory);



  return (
    <section 
      style={{ fontFamily: "'Inter', 'Poppins', sans-serif" }}
      className={`relative w-full overflow-hidden ${page ? "bg-[#f8fafc] pt-24 pb-20" : "bg-gradient-to-r from-[#f8fafc] to-[#f1f5f9] py-12 lg:py-14"} px-4 md:px-6`}
    >
      {/* 6. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9Ii43NSIgZmlsbD0iI2NlZTRlNiIvPjwvc3ZnPg==')] opacity-20 z-0 pointer-events-none"></div>

      {/* 7. Soft abstract shapes (hidden on mobile to prevent overflow) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#60a5fa] rounded-full mix-blend-multiply opacity-20 blur-[60px] pointer-events-none hidden md:block"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#a78bfa] rounded-full mix-blend-multiply opacity-20 blur-[60px] pointer-events-none hidden md:block"></div>

      {/* Return Button for Standalone Page */}
      {page && (
        <button
          onClick={() => navigate(-1)}
          className="fixed top-20 md:top-24 left-4 md:left-6 bg-white text-[#0f172a] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-xl font-[700] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 z-50 border border-[#e2e8f0]"
        >
          ←
        </button>
      )}

      {/* Unified Section Header */}
      <ScrollReveal direction="up" delay={0.1}>
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center mb-10">
        <div className="text-center flex flex-col items-center">
          
          {/* 1. Badge */}
          <div 
            className="inline-block font-medium mb-2"
            style={{
              fontSize: '12px',
              padding: '6px 14px',
              borderRadius: '999px',
              background: '#f1f5f9',
              color: '#111',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
            }}
          >
            Projects
          </div>

          {/* 2. Heading */}
          <h2 
            className="text-[#0f172a] tracking-tight text-3xl md:text-[38px]"
            style={{
              fontWeight: 600,
              marginTop: '10px',
              marginBottom: '20px'
            }}
          >
            Our Top Projects
          </h2>

          {/* 3. Toggle Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button
              onClick={() => setActiveCategory("Websites")}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                background: activeCategory === "Websites" ? '#000' : '#f1f1f1',
                color: activeCategory === "Websites" ? '#fff' : '#333',
                transition: 'all 0.3s ease'
              }}
            >
              Websites
            </button>
            <button
              onClick={() => setActiveCategory("Applications")}
              style={{
                padding: '10px 22px',
                borderRadius: '12px',
                border: 'none',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                background: activeCategory === "Applications" ? '#000' : '#f1f1f1',
                color: activeCategory === "Applications" ? '#fff' : '#333',
                transition: 'all 0.3s ease'
              }}
            >
              Applications
            </button>
          </div>

        </div>
      </div>
      </ScrollReveal>

      {/* Zig-Zag Stacked Layout */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        {filteredProjects.map((project, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
            <div 
              className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 group relative`}
            >
              {/* IMAGE COLUMN (Sticky Scroll preserved) */}
              <div className="w-full lg:w-1/2 lg:sticky lg:top-32 flex items-center justify-center">
                <div className="w-full h-[320px] md:h-[400px] lg:h-[450px] rounded-[48px] bg-[#f8fafc] flex items-center justify-center p-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white hover:shadow-lg transition-shadow duration-500 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain rounded-[44px] shadow-[0_4px_25px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="w-full lg:w-1/2 flex flex-col items-start px-2 lg:pl-12 lg:pr-6 py-2">
                
                {/* 5. Top Control / Label */}
                <div 
                   className="inline-block rounded-full bg-[#f1f5f9] text-[#0f172a] font-medium"
                   style={{ fontSize: '13px', padding: '8px 18px' }}
                >
                  🚀 {project.category === "Applications" ? "Our App" : "Our Work"}
                </div>

                <h3 
                  className="font-[600] text-[#0f172a] leading-[1.1] text-2xl md:text-[34px]"
                  style={{ 
                    letterSpacing: '-0.8px',
                    marginTop: '16px',
                    marginBottom: '18px'
                  }}
                >
                  {project.title}
                </h3>

                {/* 1. Paragraph Formatting & 2. Spacing Fix & 4. Content Width */}
                <p 
                  className="text-[#475569]/90 leading-[1.6]"
                  style={{ 
                    fontSize: '16px', 
                    marginBottom: '12px', 
                    maxWidth: '600px'
                  }}
                >
                  {project.description}
                </p>

                {/* Feature List */}
                {/* 2. Reduce gap between bullet/points: gap: 10px-12px */}
                <div className="flex flex-col w-full max-w-[600px] mt-6 mb-8" style={{ gap: '16px' }}>
                  {project.features.slice(0, 4).map((feature, i) => (
                    <div key={i} className="flex items-start gap-6">
                      {/* Numbered Style */}
                      <div className="shrink-0 rounded-[10px] bg-[#f1f5f9] text-[#0f172a] font-[700] text-[12px] flex items-center justify-center mt-0.5" style={{ width: '26px', height: '26px' }}>
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <span className="text-[#475569] font-[400] leading-[1.5]" style={{ fontSize: '15.5px' }}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 8. Button Refinement */}
                <div className="mt-2">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#0a0a0a] text-white rounded-[14px] font-[600] hover:bg-black shadow-xl shadow-black/10 hover:shadow-black/20 hover:-translate-y-0.5 transition-all duration-300"
                    style={{ 
                      fontSize: '15px',
                      padding: '12px 28px'
                    }}
                  >
                    View {project.category === "Applications" ? "App" : "Website"}
                  </a>
                </div>
              </div>
            </div>
            </ScrollReveal>
          );
        })}
      </div>

      {filteredProjects.length === 0 && (
        <ScrollReveal direction="up">
          <div className="text-center text-[#64748b] font-[500] py-12 relative z-10">
            No projects found in this category.
          </div>
        </ScrollReveal>
      )}

      {/* View All Button - Only on Home Page */}
      {!page && (
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex justify-center mt-16 md:mt-24 relative z-10">
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 bg-[#0f172a] hover:bg-black text-white px-10 py-5 rounded-2xl font-semibold shadow-xl shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all duration-300"
            >
              <span>View All Projects</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      )}
    </section>
  );
};

export default Projects;
