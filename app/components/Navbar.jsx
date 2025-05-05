import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { useRef } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
const Navbar = () => {
  const [isSroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();
  const { theme, setTheme } = useTheme();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
    console.log("open");
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-ful" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
          ${
            isSroll
              ? "bg-[rgba(255,255,255,0.62)] backdrop-blur-lg shadow-sm dark:bg-transparent dark:shadow-white/20"
              : ""
          }`}
      >
        <Link href="/#top">
          <Image
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14 "
          />
        </Link>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 
        rounded-full px-12 py-3 ${
          isSroll
            ? ""
            : "shadow-sm bg-[rgba(255,255,255,0.62)] dark:border dark:border-white/50 dark:bg-transparent"
        }`}
        >
          <li>
            <Link
              href="/#top"
              className=""
              style={{
                fontFamily: "var(--fontOvo)",
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
            >
              My work
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
            >
              Contact me
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button
            className="cursor-pointer"
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Image
              src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <Link
            href="/#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5
            border border-gray-500 rounded-full ml-4 dark:text-gray-400"
            style={{
              fontFamily: "var(--fontOvo)",
            }}
          >
            Contact
            <Image
              src={
                theme === "dark" ? assets.arrow_icon_dark : assets.arrow_icon
              }
              alt="Arrow"
              className="w-3"
            />
          </Link>
          <button
            className="block md:hidden ml-3 cursor-pointer"
            onClick={openMenu}
          >
            <Image
              src={theme === "dark" ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
         w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-[#212121]"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={theme === "dark" ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <Link
              href="/#top"
              className=""
              style={{
                fontFamily: "var(--fontOvo)",
              }}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/#about"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
              onClick={closeMenu}
            >
              About me
            </Link>
          </li>
          <li>
            <Link
              href="/#services"
              style={{
                fontFamily: "var(--fontOvo)",
              }}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/#work"
              style={{ fontFamily: "var(--fontOvo)" }}
              onClick={closeMenu}
            >
              {" "}
              My work{" "}
            </Link>
          </li>
          <li>
            <Link
              href="/#contact"
              style={{ fontFamily: "var(--fontOvo)" }}
              onClick={closeMenu}
            >
              {" "}
              Contact me{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
