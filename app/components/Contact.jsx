import React from "react";
import { backgroundImage } from "@/assets/assets";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useState } from "react";

const YOUR_ACCESS_KEY_HERE = "49fdde40-b7fd-409e-b3d7-adc894ece7fe";

const Contact = () => {
  
  // web3forms.com
  const [result, setResult] = useState("");

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
    <div
      id="contact"
      className="w-full px-[12%] py-10 h-screen scroll-mt-20 bg-no-repeat bg-center bg-cover bg-fixed"
      style={{
        backgroundImage: `url(${backgroundImage.bgImage})`,
        backgroundSize: "cover",
      }}
    >
      <h4
        className="text-center mb-2 text-lg"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Get in touch
      </h4>
      <h2
        className="text-center text-5xl"
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        Contact me
      </h2>
      <p
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
        style={{ fontFamily: "var(--fontOvo)" }}
      >
        I am always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. If you have any questions or
        would like to get in touch, feel free to reach out to me via email or
        through my social media channels. I look forward to hearing from you!
      </p>
      <form action="" className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter you name"
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white"
            required
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 p-3 outline-none border-[0.5px]
          border-gray-400 rounded-md bg-white"
            required
            name="email"
          />
        </div>
        <textarea
          rows={"6"}
          placeholder="Enter your message"
          required
          name="message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center 
          justify-between gap-2 bg-black/80 text-white rounded-full
          mx-auto hover:bg-black duration-500"
        >
          Send Now <Image src={assets.right_arrow} alt="" className="w-4" />
        </button>
        <p className="- mt-4 text-gray-500">
          {result} {}
        </p>
      </form>
    </div>
  );
};

export default Contact;
