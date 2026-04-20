import minitpeMock from '../assets/images/minitpe-mock.png';
import projectImage1 from '../assets/images/project_image1.png';
import projectImage2 from '../assets/images/project_image2.png';
import projectImage3 from '../assets/images/project_image3.png';

export const projectsData = [
  // =====================
  // WEBSITES
  // =====================
  {
    id: "infozatech",
    category: "Websites",
    type: "Digital Solutions",
    title: "InfozaTech",
    logo: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
    image: projectImage1,
    description: "Building intelligent digital solutions for the future. Partnering with global enterprises to drive scalable impact.",
    liveLink: "https://infozatech.com/",
    features: [
      "End-to-end intelligent digital transformation and scalable architecture designed for global future-ready enterprises.",
      "Enterprise-grade cloud infrastructure with high-performance API optimization for seamless global partnership impact.",
      "Custom-designed UI/UX component libraries that ensure consistent brand identity and superior user engagement.",
      "Advanced real-time data synchronization pipelines for mission-critical business intelligence and scalable operations."
    ]
  },
  {
    id: "techmorph",
    category: "Websites",
    type: "AI Innovators",
    title: "Techmorph",
    logo: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    image: projectImage2,
    description: "Building the Future of AI. Empowering businesses with intelligent automation and predictive analytics.",
    liveLink: "https://techmorph.netlify.app/",
    features: [
      "Specialized AI/ML implementation strategy with a focus on neural network optimization for modern startups.",
      "Complex Natural Language Processing (NLP) models integrated with automated decision engines for high efficiency.",
      "Secure vector database storage solutions enabling fast and reliable predictive analytics for global enterprises.",
      "Comprehensive AI professional training and innovation roadmaps tailored for enterprise-scale digital automation."
    ]
  },
  {
    id: "notevy",
    category: "Websites",
    type: "Education & Study",
    title: "Notevy",
    logo: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    image: projectImage3,
    description: "Notevy helps students access comprehensive study materials, practice questions, and project ideas - all in one place.",
    liveLink: "https://manishcode4u.github.io/Notevy/",
    features: [
      "Hierarchical organized study notes integrated with automated progress tracking to streamline student learning.",
      "Interactive MCQ practice modules and collaborative study groups designed for enhanced exam preparation analytics.",
      "Curated library of mini projects and hand-picked academic resources available in a single centralized platform.",
      "Comprehensive academic roadmaps and personalized coaching triggers based on individual study performance data."
    ]
  },

  // =====================
  // APPLICATIONS
  // =====================
  {
    id: "minitpe-app",
    category: "Applications",
    type: "Logistics & Delivery UI",
    title: "MinitPe: Food Taxi and Grocery",
    logo: "M12 2l9 4.9V17L12 22l-9-4.9V6.9z",
    image: minitpeMock,
    description: "An ultra-fast multi-service delivery app routing food, groceries, and taxis efficiently in real-time.",
    liveLink: "https://example.com/minitpe",
    features: [
      "Ultra-fast multi-service delivery framework with full real-time GPS map tracking and merchant analytics.",
      "Unified multi-vendor cart system supported by intelligent routing algorithms for maximum delivery efficiency.",
      "Instant micro-transaction processing via UPI with integrated merchant dashboards and automated loyalty programs.",
      "Live concurrent driver dispatch and AI-powered route optimization for food, grocery, and taxi services."
    ]
  },
  {
    id: "fintrack-mobile",
    category: "Applications",
    type: "iOS / Android App",
    title: "FinTrack Mobile",
    logo: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Personal finance tracker built natively for iOS with GraphQL synchronization.",
    liveLink: "https://example.com/fintrack",
    features: [
      "Bank-grade API integrations with full cross-platform GraphQL synchronization for secure personal financial data.",
      "Interactive spending analytics and automated tax forecasting pipelines for advanced portfolio performance tracking.",
      "Secure biometric authentication and multi-currency support for a global user base across iOS and Android.",
      "Integrated budgeting tools and personalized saving goals synced across all your mobile devices in real-time."
    ]
  },
  {
    id: "ai-health",
    category: "Applications",
    type: "Health Tech Platform",
    title: "Lumina Health App",
    logo: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&h=800&q=80",
    description: "Smart continuous health tracking interfaces using strict TensorFlow models.",
    liveLink: "https://example.com/ai-health",
    features: [
      "Wearable device biometrics ingestion integrated with ML-driven health anomaly detection and 24/7 routing alerts.",
      "Fully HIPAA compliant data architecture for secure virtual doctor consultations and prescription management.",
      "Personalized wellness coaching platforms built on top of community-driven health goals and progress tracking.",
      "Strict TensorFlow model integration for continuous predictive health metrics and automated wellness alerts."
    ]
  }
];
