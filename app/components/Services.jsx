import { serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4
        className="text-center mb-2 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        What I offer
      </h4>
      <h2
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        My Services
      </h2>
      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I offer a range of services to help you achieve your goals. Whether you
        need a new website, a mobile app, or custom software development, I am
        here to help. My services include:
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-4 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 
                cursor-pointer hover:bg-[#f6eefa] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0px_#000] "
          >
            <Image src={icon} alt={title} className="w-7 mt-3" />
            <h3 className="my-4 text-lg font-semibold text-gray-700 dark:text-gray-400">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {description}
            </p>
            <a
              href={link}
              className="text-sm mt-5 flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
