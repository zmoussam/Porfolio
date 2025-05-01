import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="">
      <div className="text-center">
        <Image
          src={theme === "dark" ? assets.logo_dark : assets.logo}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          zakariamoussammi.pro07@gmail.com
        </div>
      </div>
      <div
        className="text-center sm:flex items-center
       justify-between border-t border-gray-400 mx-[10%] mt-12 py-6"
      >
        <p>© 2025 Zakaria Moussammi. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/zmoussam">
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zakaria-moussammi/"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a target="_blank" href="https://wa.me/34674091081">
              Whatssap
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.instagram.com/zakaria_moussammi/"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
