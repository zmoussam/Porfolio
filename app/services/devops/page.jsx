"use client";

import React from "react";
import { FaCloud, FaCogs, FaCodeBranch } from "react-icons/fa";
import NetworkBackground from "@/app/components/Background";
import Navbar from "@/app/components/Navbar";
import { SiLinuxcontainers } from "react-icons/si";
import { TbHeartRateMonitor } from "react-icons/tb";
const services = [
  {
    icon: <FaCloud className="text-3xl text-blue-500" />,
    title: "Cloud Infrastructure",
    description:
      "Provision and manage scalable cloud resources on platforms like AWS and GCP.",
  },
  {
    icon: <FaCogs className="text-3xl text-purple-500" />,
    title: "Infrastructure as Code",
    description:
      "Automate infrastructure setup using tools like Terraform and Ansible.",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-green-500" />,
    title: "CI/CD Pipelines",
    description:
      "Streamline development with automated testing and deployment workflows.",
  },
  {
    icon: <SiLinuxcontainers className="text-3xl text-orange-500" />,
    title: "Containers & Orchestration",
    description:
      "Dockerize applications and manage them with tools like Kubernetes and Docker Compose.",
  },
  {
    icon: <TbHeartRateMonitor className="text-3xl text-red-500" />,
    title: "Monitoring & Logging",
    description:
      "Ensure reliability with tools like Prometheus, Grafana, and centralized logging.",
  },
];

export default function InfrastructurePage() {
  return (
    <div className="relative z-10">
      <Navbar />
      <NetworkBackground />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          Infrastructure & Operations
        </h1>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          I build and manage scalable, secure, and automated infrastructures
          using DevOps best practices.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="backdrop-blur-[2px] border-[0.5px] border-gray-300/30  dark:border-gray-500/20 shadow-md hover:shadow-2xl rounded-2xl p-5 sm:p-6 transition transform hover:scale-[1.02]"
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
