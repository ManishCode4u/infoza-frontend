import React, { useEffect, useRef, useState } from 'react';

const Services = () => {
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

  const revealClass = (delay = "duration-700") => `
    transition-all ${delay} ease-out
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
  `;

  const services = [
    { 
      id: 1, 
      title: "AI Solutions", 
      description: "Cutting-edge neural networks and automation tailored for your business needs.", 
      icon: "psychology", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800", 
      color: "text-purple-600", 
      bgColor: "bg-purple-50" 
    },
    { 
      id: 2, 
      title: "Software Engineering", 
      description: "Scalable, robust, and custom-built software architectures for modern enterprises.", 
      icon: "code", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800", 
      color: "text-blue-600", 
      bgColor: "bg-blue-50" 
    },
    { 
      id: 3, 
      title: "Academic Excellence", 
      description: "High-impact research assistance and academic tool development for institutions.", 
      icon: "school", 
      // ✅ FIXED IMAGE LINK: Using a more stable Unsplash source for Education
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800", 
      color: "text-green-600", 
      bgColor: "bg-green-50" 
    }
  ];

  const features = [
    { icon: "speed", title: "Rapid Delivery", description: "Agile sprints for fast turnaround.", color: "text-blue-600", bgColor: "bg-blue-50" },
    { icon: "verified", title: "Expert Team", description: "Senior engineers and PhDs.", color: "text-green-600", bgColor: "bg-green-50" },
    { icon: "support_agent", title: "24/7 Support", description: "Always here when you need us.", color: "text-orange-600", bgColor: "bg-orange-50" },
    { icon: "shield_lock", title: "Top Security", description: "Enterprise-grade data safety.", color: "text-red-600", bgColor: "bg-red-50" },
    { icon: "trending_up", title: "Scalability", description: "Built to grow with your brand.", color: "text-purple-600", bgColor: "bg-purple-50" },
    { icon: "monitoring", title: "Deep Analytics", description: "Data-driven decision making.", color: "text-indigo-600", bgColor: "bg-indigo-50" }
  ];

  const processSteps = [
    { number: "01", title: "Discovery", description: "We dive deep into your requirements and business goals." },
    { number: "02", title: "Architecture", description: "Planning the blueprint for a scalable and secure system." },
    { number: "03", title: "Development", description: "Our experts build your solution using modern tech stacks." },
    { number: "04", title: "Launch", description: "Rigorous testing followed by seamless deployment." }
  ];

  const getIconComponent = (iconName, color = "text-blue-600", size = "w-6 h-6") => {
    const classes = `${size} ${color}`;
    switch(iconName) {
      case 'psychology': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'code': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
      case 'school': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
      case 'speed': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
      case 'verified': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
      case 'support_agent': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>;
      case 'shield_lock': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
      case 'trending_up': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;
      case 'monitoring': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
      case 'check': return <svg className={classes} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
      default: return null;
    }
  };

  return (
    <div
  id="services"
  ref={sectionRef}
  className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900 overflow-hidden pb-20"
>

      {/* Header */}
      <div className={`flex justify-center mt-12 ${revealClass("duration-500")}`}>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-full mb-6">
          ● Our Services
        </span>
      </div>

      <section className="px-4 py-10 max-w-7xl mx-auto">
        <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-gray-900 text-center ${revealClass("delay-200")}`}>
          Our Services
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              className={`bg-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-700 overflow-hidden group hover:shadow-xl hover:scale-105 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
            >
              <div className="h-48 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }} />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${service.bgColor} p-2 rounded-lg`}>{getIconComponent(service.icon, service.color, 'w-6 h-6')}</div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-12 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 text-center text-gray-900 ${revealClass("delay-200")}`}>Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                style={{ transitionDelay: `${index * 100}ms` }}
                className={`bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-700 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              >
                <div className={`${feature.bgColor} inline-flex p-3 rounded-lg mb-4`}>{getIconComponent(feature.icon, feature.color, 'w-6 h-6')}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-12 max-w-4xl mx-auto">
        <h2 className={`text-3xl font-bold mb-12 text-center text-gray-900 ${revealClass()}`}>Our Process</h2>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400"></div>
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={step.number} 
                style={{ transitionDelay: `${index * 200}ms` }}
                className={`relative pl-16 transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
              >
                <div className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${index === 3 ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-white border-2 border-blue-500'} shadow-lg`}>
                  {index === 3 ? getIconComponent('check', 'text-white w-6 h-6') : <span className="text-lg font-bold text-blue-600">{step.number}</span>}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;