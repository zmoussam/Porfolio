"use client";
import { motion } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaJs,
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaCode,
} from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiSocketdotio,
  SiNestjs,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { PiFileSqlFill } from "react-icons/pi";
import { DiLinux } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiAmazonapigateway } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import Navbar from "../../components/Navbar";
import NetworkBackground from "@/app/components/Background";

const categories = {
  Languages: [
    {
      name: "Java",
      description:
        "Object-oriented language widely used in enterprise-level backends.",
      icon: <FaJava className="inline-block mr-2 text-yellow-600" />,
    },
    {
      name: "JavaScript",
      description: "Core language for building interactive web applications.",
      icon: <FaJs className="inline-block mr-2 text-yellow-400" />,
    },
    {
      name: "TypeScript",
      description:
        "A typed superset of JavaScript that improves code quality and readability.",
      icon: <SiTypescript className="inline-block mr-2 text-blue-600" />,
    },
    {
      name: "Python3",
      description:
        "Versatile language known for simplicity and data science applications.",
      icon: <FaPython className="inline-block mr-2 text-blue-500" />,
    },
    {
      name: "C/C++",
      description:
        "Powerful languages used for system-level programming and performance-critical apps.",
      icon: <FaCode className="inline-block mr-2 text-gray-800" />,
    },
    {
      name: "SQL",
      description:
        "Standard language for relational database querying and manipulation.",
      icon: <PiFileSqlFill className="inline-block mr-2 text-red-500" />,
    },
    {
      name: "PL/SQL",
      description:
        "Oracle’s procedural extension to SQL for writing stored procedures and triggers.",
      icon: <FaDatabase className="inline-block mr-2 text-orange-600" />,
    },
  ],
  "Frameworks & Libraries": [
    {
      name: "NodeJS",
      description:
        "JavaScript runtime for building fast and scalable server-side applications.",
      icon: <FaNodeJs className="inline-block mr-2 text-green-500" />,
    },
    {
      name: "Express",
      description:
        "Minimal Node.js web framework for APIs and backend services.",
      icon: <SiExpress className="inline-block mr-2 text-gray-600" />,
    },
    {
      name: "NestJS",
      description:
        "A progressive Node.js framework for building efficient, scalable server-side applications using TypeScript.",
      icon: <SiNestjs className="inline-block mr-2 text-red-600" />,
    },
    {
      name: "ReactJS",
      description: "A front-end library for building reusable UI components.",
      icon: <FaReact className="inline-block mr-2 text-blue-400" />,
    },
    {
      name: "NextJS",
      description:
        "React framework with server-side rendering and static site generation.",
      icon: <RiNextjsLine className="inline-block mr-2 text-black" />,
    },
    {
      name: "Socket.IO",
      description:
        "Library for real-time, bidirectional communication between clients and servers.",
      icon: <SiSocketdotio className="inline-block mr-2 text-yellow-600" />,
    },
  ],
  "Web Technologies": [
    {
      name: "HTML",
      description: "The standard markup language for building web pages.",
      icon: <FaHtml5 className="inline-block mr-2 text-orange-600" />,
    },
    {
      name: "CSS",
      description:
        "Stylesheet language for designing and laying out web pages.",
      icon: <FaCss3Alt className="inline-block mr-2 text-blue-500" />,
    },
    {
      name: "Tailwind CSS",
      description:
        "Utility-first CSS framework for rapidly building custom user interfaces.",
      icon: <SiTailwindcss className="inline-block mr-2 text-teal-600" />,
    },
    {
      name: "REST API",
      description:
        "Architectural style for building scalable web services with HTTP.",
      icon: (
        <SiAmazonapigateway className="inline-block mr-2 text-orange-600" />
      ),
    },
    {
      name: "GraphQL",
      description:
        "A flexible query language for APIs that gives clients control over data.",
      icon: <SiGraphql className="inline-block mr-2 text-pink-600" />,
    },
  ],
  Databases: [
    {
      name: "PostgreSQL",
      description: "Open-source, powerful relational database system.",
      icon: <SiPostgresql className="inline-block mr-2 text-blue-600" />,
    },
    {
      name: "MongoDB",
      description:
        "Document-oriented NoSQL database for high-volume data storage.",
      icon: <SiMongodb className="inline-block mr-2 text-green-500" />,
    },
  ],
  "Tools & Platforms": [
    {
      name: "Git & GitHub",
      description:
        "Version control system and cloud-based code hosting platform.",
      icon: <FaGitAlt className="inline-block mr-2 text-gray-700" />,
    },
    {
      name: "Docker",
      description:
        "Tool for containerizing applications to ensure consistent environments.",
      icon: <FaDocker className="inline-block mr-2 text-cyan-600" />,
    },
    {
      name: "Linux",
      description:
        "Operating system commonly used for development and deployment servers.",
      icon: <DiLinux className="inline-block mr-2 text-black" />,
    },
    {
      name: "Visual Studio Code",
      description:
        "VS Code is a lightweight, powerful code editor with support for debugging, syntax highlighting, and extensions.",
      icon: <VscVscodeInsiders className="inline-block mr-2 text-blue-600" />,
    },
  ],
  Design: [
    {
      name: "Figma",
      description:
        "Collaborative interface design tool for building and sharing UI/UX.",
      icon: <FaFigma className="inline-block mr-2 text-purple-600" />,
    },
  ],
};

export default function LanguagesPage() {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-16 pt-30">
        <h1
          className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          My Tech Stack
        </h1>
        <p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          Here's an overview of the technologies I use regularly to build
          full-stack, scalable, and modern applications.
        </p>
        <div className="space-y-10">
          {Object.entries(categories).map(([category, tools], index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              className=" p-6 rounded-xl mb-6 backdrop-blur-[2px] border-gray-300/30 dark:border-gray-500/20 border-[0.5px]"
            >
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">
                {category}
              </h2>
              <ul className="space-y-4">
                {tools.map(({ name, description, icon }) => (
                  <li key={name} className="flex items-center">
                    {/* Technology Icon */}
                    {icon}
                    {/* Technology Name */}
                    <span className="font-bold text-blue-500 dark:text-blue-400 text-lg tracking-wide hover:text-blue-700 dark:hover:text-blue-300 transition">
                      {name}
                    </span>
                    {"   "}
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      – {description}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
