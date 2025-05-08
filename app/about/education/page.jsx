"use client";
import React from "react";
import { Si42 } from "react-icons/si";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import NetworkBackground from "@/app/components/Background";

const educationData = [
  {
    title: "42 Network, Barcelona – 1337 Coding School",
    subtitle: "Member Rank: Level 13.62",
    description:
      "After completing the Common Core at the 42 Network's Moroccan campus (1337), where I gained a strong foundation in C programming, algorithms, Web Developement, and system architecture, I transferred to 42 Barcelona to pursue the advanced curriculum. My focus here includes DevOps, web development, cybersecurity, and software architecture through hands-on, project-based learning.",
    photo: "/42-banner.png", // ✅ Path to your big image
    links: [
      {
        href: "https://www.42network.org",
        text: "Visit 42 Network Website",
      },
      {
        href: "https://www.1337.ma",
        text: "Visit 1337 Coding School Website",
      },
      {
        href: "https://www.42barcelona.com",
        text: "Visit 42 Barcelona Website",
      },
    ],
    logos: [
      {
        type: "icon",
        component: <Si42 className="w-10 h-10 text-black dark:text-white" />,
        label: "Network",
      },
      {
        type: "img",
        src: "/school-logo.png",
        alt: "1337",
        label: "Coding school",
      },
    ],
  },
  {
    title: "Bachelor's Degree in Computer Engineering",
    subtitle: "Hassan I University, FSTS, Settat, Morocco",
    description:
      "I completed my Bachelor's degree in Computer Engineering at Hassan I University, Settat, where I gained theoretical and practical knowledge in computer science, programming, and engineering fundamentals.",
    links: [
      {
        href: "https://www.fsts.ac.ma",
        text: "Visit Hassan I University Website",
      },
    ],
    logos: [
      {
        type: "img",
        src: "/fst-logo.png",
        alt: "FSTS",
        label: "FST Settat",
      },
      {
        type: "img",
        src: "/hassan-logo.png",
        alt: "FSTS",
        label: "University Hassan 1er",
      },
    ],
  },
  {
    title: "Learning Spanish",
    subtitle: "BCNLIP Language School, Barcelona, Spain",
    description:
      "Currently, I am immersed in learning Spanish at the BCNLIP Language School in Barcelona. Through immersive courses, I am expanding my language skills and enhancing my cultural experience in Spain.",
    links: [
      {
        href: "https://www.bcnlip.com",
        text: "Visit BCNLIP Language School Website",
      },
    ],
    logos: [
      {
        type: "img",
        src: "/bcnlip-logo.png",
        alt: "BCNLIP",
        label: "BCNLIP Language School",
      },
    ],
  },
];

const Education = () => {
  return (
    <>
      <NetworkBackground />
      <Navbar />

      <div className="max-w-7xl mx-auto py-10 px-5 pt-30">
        <h2
          className="text-4xl font-bold text-center mb-3 dark:text-white"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          My Education
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          Here's a quick look at my educational journey, from coding bootcamps
          to formal university studies and language immersion programs.
        </p>

        {educationData.map((item, index) => (
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
            key={index}
            className=" p-6 rounded-xl mb-6 backdrop-blur-[2px] border-gray-300/30 dark:border-gray-500/20 border-[0.5px]"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Left: Text Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-4">
                    {item.logos.map((logo, i) =>
                      logo.type === "icon" ? (
                        <div key={i} className="flex gap-2 items-center">
                          {logo.component}
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {logo.label}
                          </span>
                        </div>
                      ) : (
                        <div key={i} className="flex gap-2 items-center">
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            className="w-10 h-10 object-contain"
                          />
                          {logo.label && (
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {logo.label}
                            </span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.subtitle}
                  </p>
                  <p className="text-gray-500 dark:text-gray-300 mb-4">
                    {item.description}
                  </p>
                  <div className="mt-2">
                    {item.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 dark:text-blue-400 block mb-1 hover:underline"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Photo (if available) */}
              {item.photo && (
                <div className="w-full lg:w-[400px] flex-shrink-0">
                  <img
                    src={item.photo}
                    alt={`${item.title} banner`}
                    className="w-full h-auto rounded-xl object-cover max-h-[400px]"
                  />
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Education;
