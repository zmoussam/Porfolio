"use client";

import React from "react";
import {
  FaRocket,
  FaTachometerAlt,
  FaUniversalAccess,
  FaSearch,
} from "react-icons/fa";
import NetworkBackground from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";

const services = [
  {
    icon: <FaRocket className="text-3xl text-indigo-500" />,
    title: "Product Thinking",
    description:
      "Focusing on user needs and delivering features that truly matter with thoughtful UX/UI decisions.",
  },
  {
    icon: <FaTachometerAlt className="text-3xl text-emerald-500" />,
    title: "Performance Optimization",
    description:
      "Improving speed and responsiveness with Core Web Vitals, lazy loading, caching, and image optimization.",
  },
  {
    icon: <FaUniversalAccess className="text-3xl text-pink-500" />,
    title: "Accessibility",
    description:
      "Ensuring all users, including those with disabilities, can navigate and interact with the application.",
  },
  {
    icon: <FaSearch className="text-3xl text-yellow-500" />,
    title: "SEO Optimization",
    description:
      "Implementing best practices for meta tags, Open Graph, and structured data to improve search visibility.",
  },
];

export default function PerformancePage() {
  return (
    <div className="relative z-10">
      <Navbar />
      <NetworkBackground />

      <div className="max-w-6xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Product & Performance Services
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Building products that perform beautifully, think smart, and reach
          your audience effectively.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="backdrop-blur-[2px] border-[0.5px] border-gray-300/30 dark:border-gray-500/20 shadow-lg rounded-2xl p-6 transition hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
