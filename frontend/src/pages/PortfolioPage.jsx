import React, { useState } from 'react';
import { ScrollReveal } from '../components/ui/scroll-reveal';
import projectImage1 from '../assets/images/project_image1.png';
import projectImage2 from '../assets/images/project_image2.png';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);


  const categories = ['all', 'fintech', 'ai-ml', 'cloud', 'cyber'];
  const categoryLabels = {
    all: 'All Projects',
    fintech: 'FinTech',
    'ai-ml': 'AI/ML',
    cloud: 'Cloud',
    cyber: 'Cyber',
  };

  const projects = [
    {
      id: 1,
      title: 'InfozaTech',
      description:
        'Building intelligent digital solutions for the future. Partnering with global enterprises to drive scalable impact.',
      category: 'fintech',
      tags: ['Website', 'Digital Solutions'],
      imageUrl: projectImage1,
    },
    {
      id: 2,
      title: 'Techmorph AI',
      description:
        'Building the Future of AI. Empowering businesses with intelligent automation and predictive analytics.',
      category: 'ai-ml',
      tags: ['AI/ML', 'AI Innovators'],
      imageUrl: projectImage2,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "InfozaTech didn't just write code; they redefined our entire digital strategy. The AI integration was seamless and outperformed all benchmarks.",
      name: 'Marcus Sterling',
      role: 'CTO, Global Finance Inc.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuD5HPKFXfHDJglw45AKhGcU1kuMCX4_bzyhIFG1VS3QAzjJhwZpwXykmFUtoeGZb32S3bOs30WbvppEr0NoKwrQx-nz6WLrzTRQTOzN2RpZkmSpls3Qg6_G-1GYJOeFyAV8IKEmA_s7zy8N2XSgN0ehFJgsl2UG1B9yC9ZAreiJTq1gVFSpbbB7Y6Oj9eYzLIk_Oo0EkSgkl2OUMojbHQP8t6-MwO7mKE-9Tu9hhxaQgFPKW5nXwUBSC9S7WUZK5XSf4SqBIMxe6QiY',
    },
    {
      id: 2,
      quote:
        "The most professional team we've ever worked with. Their cloud infrastructure migration saved us thousands in monthly overhead.",
      name: 'Elena Rodriguez',
      role: 'Director of IT, SkyLink',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA7jfgebOMv6i_bjsXjC-behY0JwmGxV_SDm4bcnheBXXg2j_Jooi0xrqqtBTR4XPeMWYMMN9iKWPybyAZ1EtPMnPPdkgUpvlHpIc24gKlOx81DsmG-hadMasJWHAHkZhvRoPcvrhZW5rNqDmWOEcQPAQpe7wmxQg-CEPZ58O8jkcSvsm2pni5of2j1Kvnd6nIv50flFPt0_xCh9pslk22jHKamTnUs8ljdyyVfO33L2ZETZ8AUJflWayHUp2MJnmq_3UuLnR86KMmD',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <main className="max-w-7xl mx-auto px-4 pt-24 pb-20">
        {/* Header Section */}
        <ScrollReveal direction="up" delay={0.1}>
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-[700] mb-2">
               <span style={{ color: "#000000" }}>Innovation in </span>
               <span style={{ color: "#2563EB" }}>Action.</span>
         </h1>

          <p className="text-[#64748b] dark:text-gray-400">
            Showcasing technical excellence across industries.
          </p>
        </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal direction="up" delay={0.2}>
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white dark:bg-gray-800 text-[#64748b] dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
            <div className="group cursor-pointer">
              <div
                className="relative w-full rounded-xl overflow-hidden mb-4 bg-white flex items-center justify-center border border-gray-100"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded text-xs font-[700] uppercase ${
                          tagIndex === 0 ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-[700] text-white">{project.title}</h3>
                </div>
              </div>
              <p className="text-[#64748b] dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials Header */}
        <ScrollReveal direction="up" delay={0.1}>
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
           <h2 style={{ color: "#000000" }} className="text-2xl font-[700]">
              What Our Clients Say
            </h2>

          </div>
          <p className="text-[#64748b] dark:text-gray-400 text-sm">
            Building long-term partnerships through excellence.
          </p>
        </div>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
  {testimonials.map((testimonial, index) => (
    <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.1}>
    <div
      className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 h-full"
    >
      <div className="mb-6">
        <span className="text-blue-600 text-4xl leading-none">“</span>
        <p className="text-[#64748b] text-lg italic leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-[#0f172a]">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
    </ScrollReveal>
  ))}
</div>

        {/* CTA Section */}
        <ScrollReveal direction="up" delay={0.2}>
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl shadow-blue-600/30">
          <h3 className="text-2xl md:text-3xl font-[700] mb-4">
            Ready to scale your next big idea?
          </h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Join the 50+ enterprise clients who trust InfozaTech for technical excellence.
          </p>
          <a href="#contact" className="bg-white text-blue-600 font-[700] px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
           Contact Our Experts
          </a>
        </div>
        </ScrollReveal>
      </main>
    </div>
  );
};

export default PortfolioPage;