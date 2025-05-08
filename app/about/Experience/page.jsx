"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/app/components/Navbar";
import NetworkBackground from "@/app/components/Background";

const experienceData = [
  {
    title: "FullStack Developer & DevOps Engineer",
    company: "AI Wolves",
    logo: "/ai-wolves-logo.jpg",
    website: "https://www.aiwolves.net",
    location: "Tanger, Morocco",
    period: "Dec 2023 – Aug 2024",
    description:
      "Built and optimized backend services using Nest.js and MongoDB. Designed RESTful APIs and microservices. Managed Docker-based deployments with Docker Compose and CI/CD pipelines using GitHub Actions. Configured Nginx as a reverse proxy for load balancing. Worked on frontend integration using Next.js and GraphQL. Integrated AI APIs to automate icon generation and perform real-time translation tasks. Collaborated in an Agile environment, participating in regular sprints and team meetings to ensure fast, iterative delivery.",
    tags: [
      "Nest.js",
      "MongoDB",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Nginx",
      "Next.js",
      "GraphQL",
      "Nodejs",
      "AI APIs",
      "Icon Generation",
      "Translation",
      "Agile",
    ],
    links: [
      {
        href: "https://www.mobtwin.com",
        text: "View Deployed Project",
      },
    ],
  },
  {
    title: "Web Developer Intern",
    company: "OCP Solution",
    logo: "/ocp-solution-logo.jpg",
    website: "https://www.ocpgroup.ma/",
    location: "Casablanca, Morocco",
    period: "Mar 2022 – Aug 2022",
    description:
      "Contributed to a final-year Bachelor's project in web development using the MERN stack. Developed a platform to predict football match outcomes for the FIFA World Cup Qatar 2022. Applied full-stack skills to create a user-friendly and dynamic interface.",
    tags: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Prediction Models",
      "UI/UX",
    ],
    links: [],
  },
  {
    title: "Freelancer",
    company: "Various Clients",
    logo: "/freelance-logo.jpg",
    website: "",
    location: "Remote",
    period: "Ongoing",
    description:
      "Developed and deployed multiple full-stack applications and websites for clients. Handled everything from UI design to backend deployment, offering scalable and responsive solutions tailored to client needs.",
    tags: [
      "Python3",
      "Java",
      "Docker",
      "C/C++",
      "HTML",
      "CSS",
      "Git - Github",
      "Javascript",
      "Typescript",
      "Next.js",
      "React",
      "Node.js",
      "Tailwind",
      "MongoDB",
      "Deployment",
    ],
    links: [],
  },
];

const Experience = () => {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <div
        className="max-w-7xl mx-auto py-10 px-5 pt-30"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        <h2
          className="text-4xl font-bold text-center mb-3 dark:text-white"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          My Experience
        </h2>
        <p
          className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10"
          style={{ fontFamily: "var(--fontOvo)" }}
        >
          A glimpse into my hands-on experience across development and DevOps
          roles.
        </p>

        {experienceData.map((item, index) => (
          <motion.div
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 12px 25px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
            key={index}
            className=" backdrop-blur-[2px] border-[0.5px] border-gray-300/30 dark:border-gray-500/20  p-6 rounded-xl mb-6 flex flex-col gap-4"
          >
            <div className="flex justify-between items-start flex-wrap">
              <div className="flex items-center gap-4">
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={`${item.company} logo`}
                    className="w-12 h-12 object-contain rounded"
                  />
                )}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.company} – {item.location}
                    </p>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 dark:text-blue-400 hover:underline"
                      >
                        [Website]
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {item.period}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-500 dark:text-gray-300">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {item.links.length > 0 && (
              <div className="mt-4">
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
            )}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
