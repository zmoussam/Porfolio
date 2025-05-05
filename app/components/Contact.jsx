import React from "react";
import { backgroundImage } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

const YOUR_ACCESS_KEY_HERE = "49fdde40-b7fd-409e-b3d7-adc894ece7fe";

const Contact = () => {
  // web3forms.com
  const [result, setResult] = useState("");
  const { theme, setTheme } = useTheme();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", YOUR_ACCESS_KEY_HERE);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-3 h-auto scroll-mt-20 bg-no-repeat bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `${
          theme === "dark" ? "none" : `url(${backgroundImage.bgImage})`
        }`,
        backgroundSize: "cover",
      }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-6 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Get in touch
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Contact me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-3 mb-4 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. If you have any questions or
        would like to get in touch, feel free to reach out to me via email or
        through my social media channels. I look forward to hearing from you!
      </motion.p>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-6">
          <motion.input
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            type="text"
            placeholder="Enter you name"
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white dark:bg-[#1f1f1f]"
            required
            name="name"
          />
          <motion.input
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white dark:bg-[#1f1f1f]"
            required
            name="email"
          />
        </div>
        <motion.textarea
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          rows={"6"}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#1f1f1f]"
        ></motion.textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center 
          justify-between gap-2 bg-black/80 text-white rounded-full
          mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-[#1e1e1e] cursor-pointer"
        >
          Send Now <Image src={assets.right_arrow} alt="" className="w-4" />
        </motion.button>
        <p className="mt-4 text-gray-500">
          {result} {}
        </p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
