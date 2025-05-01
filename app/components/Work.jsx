import { workData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4
        className="text-center mb-2 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My Portfolio
      </h4>
      <h2
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My latest work
      </h2>
      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I have worked on a variety of projects, ranging from web applications to
        mobile apps. Here are some of my latest works that showcase my skills
        and expertise in software development. Click on the links to view the
        projects
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10 ">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{
              backgroundImage: `url(${project.bgImage})`,
            }}
          >
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2
             -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div
                className="border rounded-full border-black w-9 aspect-square 
              flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        href=""
        className="w-max flex items-center gap-2 justify-center text-gray-700 dark:text-gray-400 border-[0.5px]
      border-gray-700 dark:border-gray-400 py-3 rounded-full y-3 px-10 mx-auto my-20 hover:bg-[#f6eefa] duration-500"
      >
        show more{" "}
        <Image
          src={assets.right_arrow_bold}
          alt="right arrow"
          className="w-4"
        />
      </a>
    </div>
  );
};

export default Work;
