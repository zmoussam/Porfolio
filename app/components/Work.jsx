import { workData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Work = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 5 }}
        className="text-center mb-2 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I have worked on a variety of projects, ranging from web applications to
        mobile apps. Here are some of my latest works that showcase my skills
        and expertise in software development. Click on the links to view the
        projects
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
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
          </motion.div>
        ))}
      </motion.div>
      <Link
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="/work"
        className="w-max cursor-pointer flex items-center gap-2 justify-center text-gray-700 dark:text-white border-[0.5px]
      border-gray-700 dark:border-gray-400 py-3 rounded-full y-3 px-10 mx-auto my-20 hover:bg-[#f6eefa] duration-500
      dark:hover:bg-[#1e1e1e] "
      >
        show more{" "}
        <Image
          src={
            theme === "dark"
              ? assets.right_arrow_bold_dark
              : assets.right_arrow_bold
          }
          alt="right arrow"
          className="w-4"
        />
      </Link>
    </motion.div>
  );
};

export default Work;
