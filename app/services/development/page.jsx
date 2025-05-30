"use client";

import React from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaClipboardCheck,
  FaTools,
} from "react-icons/fa";
import NetworkBackground from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";

const services = [
  {
    icon: <FaCode className="text-3xl text-indigo-500" />,
    title: "Frontend Development",
    description:
      "Responsive, accessible, and pixel-perfect UIs using modern frameworks.",
  },
  {
    icon: <FaServer className="text-3xl text-green-500" />,
    title: "Backend Development",
    description:
      "Robust APIs and server-side logic with secure and scalable architecture.",
  },
  {
    icon: <FaDatabase className="text-3xl text-yellow-500" />,
    title: "Database Integration",
    description:
      "Efficient data modeling, queries, and optimization with MongoDB and SQL.",
  },
  {
    icon: <FaClipboardCheck className="text-3xl text-pink-500" />,
    title: "Clean Code & Testing",
    description: "Maintainable codebase with unit and integration testing.",
  },
  {
    icon: <FaTools className="text-3xl text-red-500" />,
    title: "Dev Tools & Version Control",
    description:
      "Efficient workflows with Git, CI/CD, and modern development tools.",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="relative z-10">
      <Navbar />
      <NetworkBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Development Services
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          I offer a full-stack development experience, combining clean code with
          solid architecture and modern dev workflows.
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
