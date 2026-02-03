import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Hospital Management System",
    price: 499,
    features: [
      "Complete Source Code",
      "PDF Setup & Explanation",
      "How to Run Project",
      "Database Included",
      "Basic Support",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    price: 999,
    features: [
      "Frontend + Backend Code",
      "Admin Panel",
      "Payment Flow Explained",
      "PDF Guidance",
      "Hosting Guide",
    ],
  },
  {
    id: 3,
    title: "Portfolio Website",
    price: 249,
    features: [
      "Modern UI Design",
      "Resume Section",
      "Fully Responsive",
      "Deploy on Netlify",
      "Customization Guide",
    ],
  },
];

const PaidProjects = ({ page = false }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const navigate = useNavigate();

  return (
    <section
      className={`relative ${
        page ? "bg-blue-600 pt-32 pb-20" : "bg-white py-20"
      } px-6`}
    >
      {/* ⬅️ TOP LEFT ARROW (HEADER KE NICHE) */}
      {page && (
        <button
          onClick={() => navigate(-1)}
          className="
            fixed 
            top-24 
            left-6 
            bg-white 
            text-blue-600 
            w-14 
            h-14 
            rounded-full 
            flex 
            items-center 
            justify-center 
            text-2xl 
            font-extrabold
            shadow-2xl 
            hover:bg-blue-100 
            hover:scale-110 
            transition-all 
            duration-300 
            z-50
          "
        >
          ←
        </button>
      )}

      {/* 🔵 TOP PILL */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center gap-2 bg-blue-100 text-blue-600 px-5 py-2 rounded-full text-sm font-medium shadow">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Project Store
        </div>
      </div>

      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className={`text-4xl font-bold ${page ? "text-white" : "text-gray-900"}`}>
          Buy Ready-Made <span className="text-blue-300">Projects</span>
        </h2>
        <p className={`mt-3 text-sm ${page ? "text-blue-100" : "text-gray-500"}`}>
          One-time payment • Lifetime access • Source code + PDF guidance
        </p>
      </div>

      {/* Cards */}
      <div
        className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        onMouseLeave={() => setActiveIndex(1)}
      >
        {projects.map((project, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={project.id}
              onMouseEnter={() => setActiveIndex(index)}
              className={`rounded-xl p-6 border transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-white text-blue-600 border-white shadow-2xl scale-105"
                  : "bg-blue-50 text-gray-900 border-gray-200 shadow-sm"
              }`}
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-3xl font-bold mt-3">₹{project.price}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {project.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => alert("Coming Soon")}
                className="mt-6 w-full py-2 rounded-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Buy Project
              </button>
            </div>
          );
        })}
      </div>

      {/* More Projects → ONLY HOME */}
      {!page && (
        <div className="flex justify-center mt-16">
          <Link
            to="/paid-projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition"
          >
            More Projects →
          </Link>
        </div>
      )}
    </section>
  );
};

export default PaidProjects;
