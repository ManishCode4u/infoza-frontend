import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../ui/scroll-reveal';

// Import local assets
import app1 from '../../assets/images/demo/app1.png';
import app2 from '../../assets/images/demo/app2.png';
import app3 from '../../assets/images/demo/app3.png';

const DEMO_APPS = [
  {
    id: 1,
    title: "Fintech Dash",
    subtitle: "Smart Banking Solution",
    image: app1,
    color: "from-blue-600 to-indigo-700"
  },
  {
    id: 2,
    title: "Health Tracker",
    subtitle: "Personal Wellness Assistant",
    image: app2,
    color: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Glamour Store",
    subtitle: "Premium Fashion E-commerce",
    image: app3,
    color: "from-rose-500 to-pink-600"
  },
  {
    id: 4,
    title: "EduPulse",
    subtitle: "Interactive Learning Platform",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
    color: "from-amber-500 to-orange-600"
  },
  {
    id: 5,
    title: "SecureGuard",
    subtitle: "Enterprise Security Monitor",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    color: "from-slate-700 to-slate-900"
  },
  {
    id: 6,
    title: "EcoConnect",
    subtitle: "Sustainable Lifestyle App",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800",
    color: "from-green-500 to-emerald-700"
  }
];

const AppShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      startIndex: Math.floor(DEMO_APPS.length / 2),
    },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const [tweenValues, setTweenValues] = useState([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopPoint) => {
          const target = loopPoint.target();
          if (index === loopPoint.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }

      const tweenValue = 1 - Math.abs(diffToTarget * 3); // Adjust multiplier for sensitivity
      return Math.max(0, Math.min(1, tweenValue));
    });

    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('scroll', onScroll);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onScroll);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onScroll, onSelect]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16 px-4">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 bg-blue-100 px-6 py-2 rounded-full mb-6">
              ● Social Media
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-4 tracking-tight">
              See Our Work on Social Media
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#64748b] max-w-2xl mx-auto font-medium">
              Real content, real results — explore our latest Instagram videos
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Slider Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-4 md:-ml-8">
              {DEMO_APPS.map((app, index) => {
                const tweenValue = tweenValues[index] || 0;
                const scale = 0.85 + (tweenValue * 0.2); // Scales from 0.85 to 1.05
                const opacity = 0.5 + (tweenValue * 0.5); // Opacity from 0.5 to 1
                const blur = (1 - tweenValue) * 4; // Blur from 4px to 0px

                return (
                  <div
                    key={app.id}
                    className="flex-[0_0_70%] sm:flex-[0_0_35%] md:flex-[0_0_25%] lg:flex-[0_0_20%] pl-4 md:pl-8 py-6 select-none"
                  >
                    <motion.div
                      style={{
                        scale,
                        opacity,
                        filter: `blur(${blur}px)`,
                      }}
                      className="relative grow aspect-[9/16] rounded-[2rem] overflow-hidden shadow-xl bg-slate-100 group max-w-[280px] mx-auto transition-shadow duration-300"
                    >
                      {/* App Mockup Background (Support for video later) */}
                      {app.video ? (
                        <video
                          src={app.video}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <img
                          src={app.image}
                          alt={app.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      )}

                      {/* Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300`} style={{ opacity: 0.6 + (tweenValue * 0.4) }} />

                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                        <motion.div
                          style={{ y: (1 - tweenValue) * 10, opacity: tweenValue }}
                        >
                          <h3 className="text-2xl font-bold mb-1 tracking-tight">{app.title}</h3>
                          <p className="text-sm text-white/80 font-medium">{app.subtitle}</p>
                        </motion.div>
                      </div>

                      {/* Phone Border Decoration */}
                      <div className="absolute inset-0 border-[8px] border-black/5 rounded-[2.5rem] pointer-events-none" />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={scrollNext}
              className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:scale-110 active:scale-95 transition-all z-20"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${selectedIndex === index ? 'w-8 bg-blue-600' : 'bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scrolling Marquee Section */}
      <div className="relative w-full overflow-hidden bg-black border-t border-slate-900 py-6 mt-16">
        <div className="flex animate-marquee-left w-max items-center">
          <div className="flex items-center">
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Develop it from Best</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Develop it Once</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">InfozaTech</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Startup Solutions</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center" aria-hidden="true">
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Develop it from Best</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Develop it Once</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">InfozaTech</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
            <span className="text-xl md:text-2xl font-bold uppercase tracking-wider text-white mx-8">Startup Solutions</span>
            <span className="text-blue-500 mx-4 md:mx-8 text-xl">•</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
