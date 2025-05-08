import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Link from "next/link";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center mb-2 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I offer a range of services to help you achieve your goals. Whether you
        need a new website, a mobile app, or custom software development, I am
        here to help. My services include:
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10 "
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <Link href={link} key={index} rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="border border-gray-400 rounded-lg px-8 py-12 
                cursor-pointer hover:backdrop-blur-[5px]  hover:-translate-y-1 duration-500 
                hover:shadow-[4px_4px_0px_#000] dark:hover:backdrop-blur-[5px]  dark:hover:shadow-white
                w-full h-full flex flex-col justify-between  backdrop-blur-[2px] " // Added flex and full width/height
            >
              <div className="flex justify-start text-4xl text-indigo-600 mb-4">
                {icon}
              </div>
              <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {description}
              </p>
              <div className="text-sm mt-5 flex items-center gap-2">
                <span>Read more </span>
                <Image src={assets.right_arrow} alt="" className="w-4" />
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
