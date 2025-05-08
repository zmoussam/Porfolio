import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { assets, infoList, toolsData } from "@/assets/assets";
import { motion } from "motion/react";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-5 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center  md:items-start justify-center gap-20 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-none mt-10 max-w-[30%] sm:flex items-center sm:mx-auto rounded-3xl"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-80 rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full flex-grow"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mb-10 max-w-2xl"
            style={{ fontFamily: "var(--fontOvo)" }}
          >
            Transform your ideas into reality with a software developer who’s
            driven by innovation and results. I specialize in creating seamless,
            high-performing applications that not only meet but exceed
            expectations. With expertise in cutting-edge technologies, I turn
            complex challenges into simple, scalable solutions. Let’s build
            something extraordinary together!
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <Link href={`/about/${title}`} className="block" key={index}>
                <motion.li
                  whileHover={{ scale: 1.05 }}
                  className="relative min-h-[250px] border-[0.5px] border-gray-400 rounded-xl p-6 
                cursor-pointer hover:backdrop-blur-[5px]  hover:-translate-y-1 duration-500 
                hover:shadow-[4px_4px_0px_#000] dark:border-white dark:hover:shadow-white  backdrop-blur-[2px]  dark:hover:backdrop-blur-[5px] "
                >
                  <Image
                    src={theme === "dark" ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {description}
                  </p>

                  {/* "More" and icon */}
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">
                      More
                    </span>
                    <HiArrowNarrowRight className="text-gray-600 dark:text-gray-400 text-lg" />
                  </div>
                </motion.li>
              </Link>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="mt-4 mb-2 text-gray-700 dark:text-white"
            style={{ fontFamily: "var(--fontOvo)" }}
          >
            Tools I use
          </motion.h4>

          <div className="w-full max-w-2xl mx-auto overflow-hidden">
            {[0, 1].map((row) => (
              <motion.ul
                key={row}
                className="flex w-[600%] lg:w-[350%] gap-4 my-2"
                animate={{ x: row === 0 ? ["0%", "-50%"] : ["-50%", "0%"] }} // move in two direction
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                  // offset second row for variation
                }}
              >
                {[...toolsData, ...toolsData].map((tool, index) => (
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    key={`${row}-${index}`}
                    className="flex items-center justify-center w-12 sm:w-14  aspect-square border border-gray-400 rounded-lg cursor-pointer hover:bg-[#f6eefa] hover:-translate-y-1 duration-500"
                  >
                    <Image src={tool} alt="" className="w-5 sm:w-7" />
                  </motion.li>
                ))}
              </motion.ul>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
