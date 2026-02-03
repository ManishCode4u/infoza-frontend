import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [activeNav, setActiveNav] = useState('services');
  const [email, setEmail] = useState('');

  const animatedRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    animatedRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
      title: 'Cloud Solutions',
      description: 'Scale with confidence using our cloud-native architectures and seamless migration strategies.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/30'
    },
    {
      id: 2,
      icon: 'psychology',
      title: 'AI & Data Science',
      description: 'Harness the power of machine learning and predictive analytics to drive business intelligence.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/30'
    },
    {
      id: 3,
      icon: 'shield_lock',
      title: 'Cybersecurity',
      description: 'Protecting your digital assets with cutting-edge defense systems and proactive monitoring.',
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <main>
        {/* Hero Section */}
        <section
          ref={(el) => (animatedRefs.current[0] = el)}
          className="relative w-full overflow-hidden fade-up"
        >
          <div 
            className="relative min-h-[600px] md:min-h-[700px] flex items-end bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(to top, rgba(16, 25, 34, 0.9) 0%, rgba(16, 25, 34, 0.4) 50%, rgba(16, 25, 34, 0.1) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqXShpP9ZolvzyW5_m-eNQKF4YSaLOzcu4OvKYEcxpXdx8wTXBwh4rkwWh2C9cyW3Edh3n-jHe8c9v2f1-aw_AAJ--xq5yOJpCs54iMX74kZHUBgRwGJ2nTX1h2yhKkXrUIi-lpvGZ704smmuTxTy32_CZ8jEK-UjzsWEnbSrJ-WoQaswbcXQtXxy9TTEc8Jz5vcoswls8svJYhYv3d7cFzHjKpVSu62eAQ_eReLa2pUAD4ZVBTFV_jvdk1uHTjBW8yCSoYInhmB4')`
            }}
          >
            <div className="max-w-7xl mx-auto w-full px-4 py-12 md:py-20">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Buildora Craft
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                  Building intelligent digital solutions for the future. Partnering with global enterprises to drive scalable impact.
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      document.getElementById("services")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
                  >
                    Explore Services
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                    className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/30 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="flex gap-3 mt-16">
                <div className="h-2 w-10 rounded-full bg-blue-600"></div>
                <div className="h-2 w-6 rounded-full bg-white/30"></div>
                <div className="h-2 w-6 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          ref={(el) => (animatedRefs.current[1] = el)}
          className="py-16 px-4 max-w-7xl mx-auto fade-up"
        >
          <div className="mb-12">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold uppercase tracking-wider">
              About Buildora
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
              Leading Digital Transformation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed">
              Buildora Craft delivers enterprise-grade IT solutions tailored for global scalability and security. 
              We bridge the gap between complex legacy systems and future-ready innovation.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-gray-100 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div
              ref={(el) => (animatedRefs.current[2] = el)}
              className="flex justify-between items-center mb-12 fade-up"
            >
              <h3 className="text-3xl font-bold">Our Core Services</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  ref={(el) => (animatedRefs.current[index + 3] = el)}
                  className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition-all duration-300 hover:border-blue-200 dark:hover:border-blue-800 fade-up"
                >
                  <div className={`${service.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mb-6`}>
                    {service.icon === 'cloud_done' && (
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                      </svg>
                    )}
                    {service.icon === 'psychology' && (
                      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {service.icon === 'shield_lock' && (
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
