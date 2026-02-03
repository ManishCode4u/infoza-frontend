import React, { useState, useEffect } from 'react';

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
      title: 'NexGen Banking Platform',
      description:
        'A full-scale digital transformation for a tier-1 bank, integrating real-time AI fraud detection and microservices architecture.',
      category: 'fintech',
      tags: ['FinTech', '+40% Conversion'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBo1R7_Aw65lV90Ui-JUsBFJBCtu1QPp1ZQ_mKtKjKdXa556SuB2XHeWNUdjpUTTzz-J-aU5ZkkN9aZiSAxZNWWgqtFFMaa5RnKNbGGNd-ukEOZFofVxiChdm5MDEiE3utf8V5JI-Odx_qf-C_ubWiFMiKROPbWO1_cE7NBQRt4wPmPKRlTX-Wpe5ZGe21TYMsHJmrEO2YRU1WhNFUuvhCTpPWIOwKiGqvDO3ubvMDrnAEv2MxhJCdg22f_YpxsDR4_pzJc4y5Kg3rd',
    },
    {
      id: 2,
      title: 'Quantum Health AI',
      description:
        'Predictive diagnostic engine leveraging deep learning to assist radiologists in early-stage detection.',
      category: 'ai-ml',
      tags: ['HealthTech', '99.9% Accuracy'],
      imageUrl:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB8pE-WW8LrQ9TzDK-FpkON6ULex7MfXvsOK4bv_AbjyXB8u2yAo5i9rHzUfIaOk_eFgA8ixYIT6TTuccQoKWgKFSctw9toFW-OFiA4L1xLtdOJCz54jOJCCUqgL7NMUTZjDl_tKo4JtT4yBZixd9JNLlIc07eEr59w3eatecxjnRX6uC_RLzeoE2h9oZq32F53egaMoCM6OkDKzQiH7ZFAaCOTVtYTua_CAxwFVA-tkO4Fa83LGIWro2xH8K6oJzsXzs1ZyMmngiJH',
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Buildora didn't just write code; they redefined our entire digital strategy. The AI integration was seamless and outperformed all benchmarks.",
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
        <div className="mb-8 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
               <span style={{ color: "#000000" }}>Innovation in </span>
               <span style={{ color: "#2563EB" }}>Action.</span>
         </h1>

          <p className="text-gray-600 dark:text-gray-400">
            Showcasing technical excellence across industries.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 reveal opacity-0 translate-y-10 transition-all duration-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 reveal opacity-0 translate-y-10 transition-all duration-700">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div
                className="relative h-64 md:h-72 rounded-xl overflow-hidden mb-4 bg-cover bg-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.8) 100%), url(${project.imageUrl})`,
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 rounded text-xs font-bold uppercase ${
                          index === 0 ? 'bg-blue-600 text-white' : 'bg-green-500 text-white'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="mb-6 reveal opacity-0 translate-y-10 transition-all duration-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
           <h2 style={{ color: "#000000" }} className="text-2xl font-bold">
              What Our Clients Say
            </h2>

          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Building long-term partnerships through excellence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 reveal opacity-0 translate-y-10 transition-all duration-700">
  {testimonials.map((testimonial) => (
    <div
      key={testimonial.id}
      className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
    >
      <div className="mb-6">
        <span className="text-blue-600 text-4xl leading-none">“</span>
        <p className="text-gray-700 text-lg italic leading-relaxed">
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
          <h4 className="font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white shadow-xl shadow-blue-600/30 reveal opacity-0 translate-y-10 transition-all duration-700">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to scale your next big idea?
          </h3>
          <p className="text-blue-100 mb-6 max-w-md mx-auto">
            Join the 50+ enterprise clients who trust Buildora for technical excellence.
          </p>
          <a href="#contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center gap-2">
           Contact Our Experts
          </a>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;