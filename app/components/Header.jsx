import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center
    gap-4 "
    >
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-32 h-32"
        />
      </div>
      <h3
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Hi! I'm Zakaria Moussammi{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />{" "}
      </h3>
      <h1
        className="text-3xl sm:text-6xl lg:text-[66px]"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Software Developer based in Barcelona.
      </h1>
      <p className="max-w-2xl mx-auto" style={{ fontFamily: "var(--fontOvo)" }}>
        I am a software engineer with a passion for creating innovative
        solutions. I specialize in web and mobile development, and I am
        proficient in various programming languages and frameworks. I am
        dedicated to delivering high-quality work and continuously improving my
        skills.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "
        >
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
