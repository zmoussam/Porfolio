"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import NetworkBackground from "@/app/components/Background";

const filters = ["All", "Web Projects", "DevOps Projects", "C/C++"];

const projects = [
  {
    type: "Web Projects",
    title: "Mobtwin – Platform for Mobile App Developers & Creatives",
    description:
      " Mobtwin is an innovative platform designed to support mobile app developers, entrepreneurs, and creatives. It combines real-time market analytics, AI-powered tools, and no-code features to help users better understand the mobile app ecosystem, create simple apps effortlessly, and stay ahead of market trends. Still under development, this all-in-one solution already provides powerful capabilities for app analysis, creation, and optimization.",
    image: "/work-1.png",
  },
  {
    type: "Web Projects",
    title: "Personal Web Showcase",
    description:
      "A custom-built portfolio website to showcase my skills, projects, and achievements. The website is designed with a clean, modern UI, highlighting my experience in web development. It includes sections for project details, a contact form, and my resume, providing potential clients and employers an interactive way to learn more about me.",
    image: "/work-2.png",
  },
  {
    type: "Web Projects",
    title: "Multiplayer Pong Game with Real-Time Chat",
    description:
      "FT_Transcendence is a real-time multiplayer Pong game platform with user authentication, profiles, and chat. Players can engage in matches, track stats, and interact in public or private chat rooms. Built with NestJS, TypeScript, and PostgreSQL, the platform offers secure, real-time gameplay and social features like friend requests and two-factor authentication.",
    image: "/work-3.png",
  },
  {
    type: "C/C++",
    title: "Minishell – A Custom Shell in C",
    description:
      "A Unix shell built from scratch using C, mimicking essential functionalities of a shell environment. It supports command execution, piping, redirection, environment variable management, and handling of signals, providing a lightweight alternative to the standard shell",
    image: "/work-4.png",
  },
  {
    type: "C/C++",
    title: "CUB3D – A 3D Raycasting Engine",
    description:
      " A simple 3D game engine built using C, showcasing raycasting techniques for rendering a 3D environment. The project includes basic gameplay mechanics like movement, collision detection, and the ability to navigate through a 3D space, all optimized for performance in a minimalistic design.",
    image: "/work-5.png",
  },
  {
    type: "DevOps Projects",
    title: "Inception – Automated Server Setup",
    description:
      "An automation project that creates a fully configured Server environment using Docker and Vagrant. It simplifies the process of setting up development environments by automatically installing required tools, services, and dependencies, ensuring consistency across different systems.",
    image: "/work-6.png",
  },
  {
    type: "DevOps Projects",
    title: "Linux System Setup and Administration",
    description:
      "Born2beroot is a project focused on automating the setup and configuration of a Linux system. It involves building a fully functional environment from scratch, including configuring system services, users, and security settings. The project highlights proficiency in Linux administration, shell scripting, and system management.",
    image: "/work-7.png",
  },
  {
    type: "C/C++",
    title: "Custom Nginx-like Server",
    description:
      "This project consists of building a custom web server similar to Nginx, capable of handling multiple HTTP requests concurrently. It processes requests, serves static files, and supports reverse proxy functionalities. The server is optimized for performance and scalability, showcasing skills in network programming, HTTP protocols, and efficient multithreading techniques.",
    image: "/work-8.png",
  },
  {
    type: "C/C++",
    title: "2D Pac-Man Game",
    description:
      "Solong is a 2D Pac-Man game developed in C, where players navigate a maze, collect dots, and avoid ghosts. This project showcases knowledge of game logic, memory management, and real-time interaction using the C programming language. It also emphasizes implementing core game mechanics and handling user input efficiently.",
    image: "/work-9.png",
  },
  {
    type: "Web Projects",
    title: "Blogging Platform - Community",
    description:
      "Medium Community is a platform where users can share their blogs on various topics, discover content, and filter blogs based on categories. The platform allows users to write, publish, and interact with others' posts. With features like content filtering, user recommendations, and personalized feeds, this project focuses on creating a dynamic, interactive, and user-friendly blogging community.",
    image: "/work-10.png",
  },
  {
    type: "C/C++",
    title: "Real-Time Communication with C",
    description:
      "MiniTalk is a real-time communication project where users can send and receive messages through a custom chat system built in C. It uses socket programming to establish a client-server architecture, allowing multiple users to communicate in real time. The project focuses on network programming and handling various communication protocols to ensure efficient and secure message delivery.",
    image: "/work-11.jpg",
  },
  {
    type: "Web Projects",
    title: "Football Match Prediction Platform for FIFA World Cup Qatar 2022",
    description:
      "Contributed to the development of a platform predicting football match outcomes for the FIFA World Cup Qatar 2022 using the MERN stack. Focused on creating a user-friendly and dynamic interface that allowed users to interact with predictions and view match outcomes. The project integrated real-time data processing and enhanced user engagement, combining front-end and back-end technologies to deliver a seamless experience.",
    image: "/work-12.jpg",
  },
  {
    type: "Web Projects",
    title: "Game Clone Website with API Integration",
    description:
      "Developed a game clone website where users can play a replica of a classic game. Integrated an API to manage game data, user statistics, and real-time interactions. The platform supports user authentication, personalized settings, and dynamic gameplay features, delivering an engaging and interactive experience. Focused on creating a smooth user interface and backend performance for a seamless gaming experience.",
    image: "/work-13.jpg",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <div className="relative z-10">
      <Navbar />
      <NetworkBackground />

      <section className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4 text-center">My Work</h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Explore a selection of projects I've worked on across web development,
          DevOps, and system-level programming.
        </p>

        {/* Filter Bar */}
        <div className="flex justify-center gap-4 flex-wrap mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-5 py-2 rounded-full border border-gray-500 transition font-medium ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white"
                  : " text-gray-700 border-gray-300  dark:text-gray-300"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="rounded-xl shadow-md hover:shadow-xl transition overflow-hidden bg-white dark:bg-gray-900"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{project.type}</p>
                <p className="text-sm text-gray-600 leading-snug ">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
