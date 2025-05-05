import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center pt-20 [@media(max-height:750px)]:pt-20 [@media(max-height:750px)]:gap-1 mx-auto min-h-screen flex flex-col  items-center justify-center gap-4">
      <motion.div
        className=""
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full [@media(max-height:750px)]:w-28 [@media(max-height:750px)]:h-28 w-32 h-32"
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Hi! I'm Zakaria Moussammi{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[55px]"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Software Developer based in Barcelona.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-3xl mx-auto"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I'm a dynamic software developer with a passion for solving real-world
        IT problems. Whether it's optimizing performance, building scalable
        systems, or creating intuitive user interfaces — I'm here to help. I
        bring a hands-on, adaptable mindset to every project and focus on
        delivering clean, efficient, and effective solutions. If there's a
        technical challenge to overcome — I'm here to solve it.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black dark:bg-transparent text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/zakaria_moussammi_resume.pdf"
          download
          className="px-10 py-3 border rounded-full dark:text-black dark:bg-white border-gray-500 flex items-center gap-2 "
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
