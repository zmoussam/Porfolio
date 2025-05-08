"use client";

import React from "react";
import {
  FaProjectDiagram,
  FaShieldAlt,
  FaChartLine,
  FaCubes,
  FaNetworkWired,
} from "react-icons/fa";
import NetworkBackground from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";

const services = [
  {
    icon: <FaProjectDiagram className="text-3xl text-indigo-500" />,
    title: "System Architecture",
    description:
      "Design scalable, modular architectures that ensure maintainability and high availability.",
  },
  {
    icon: <FaCubes className="text-3xl text-emerald-500" />,
    title: "Advanced API Design",
    description:
      "Craft RESTful and GraphQL APIs with versioning, validation, and proper error handling.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-red-500" />,
    title: "Security Best Practices",
    description:
      "Implement authentication, authorization, input sanitization, and secure storage techniques.",
  },
  {
    icon: <FaChartLine className="text-3xl text-yellow-500" />,
    title: "Performance Optimization",
    description:
      "Analyze bottlenecks and optimize both frontend and backend performance for speed and efficiency.",
  },
  {
    icon: <FaNetworkWired className="text-3xl text-blue-500" />,
    title: "Scalability Strategies",
    description:
      "Design systems that gracefully handle increased traffic through load balancing and horizontal scaling.",
  },
];

export default function AdvancedPage() {
  return (
    <div className="relative z-10">
      <Navbar />
      <NetworkBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Advanced Services
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          I provide specialized technical expertise for solving complex problems
          and elevating product capabilities.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="backdrop-blur-[2px] border-[0.5px] border-gray-300/30 dark:border-gray-500/20 shadow-md hover:shadow-2xl rounded-2xl p-5 sm:p-6 transition transform hover:scale-[1.02]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
