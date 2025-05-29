import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import footer_bg_color from "./footer-bg-color.png";
import docker from "./docker.jpg";
import next from "./nextjs.png";
import nestjs from "./nestjs.png";
import javascript from "./javascript.jpg";
import html from "./html.png";
import css from "./css.png";
import python from "./python.png";
import java from "./java.png";
import postgresql from "./postgresql.png";
import c from "./c.png";
import graphql from "./graphql.png";
import mysql from "./mysql.png";
import linux from "./linux.png";
import nodejs from "./nodejs.png";
import { FaCode, FaCloud, FaCogs, FaTachometerAlt } from "react-icons/fa";
import tailwindcss from "./tailwindcss.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  footer_bg_color,
  docker,
  next,
  javascript,
  nestjs,
  html,
  css,
  python,
  java,
  postgresql,
  c,
  graphql,
  mysql,
  linux,
  nodejs,
  tailwindcss,
};

export const backgroundImage = {
  bgImage: "/footer-bg-color.png",
};

export const workData = [
  {
    title: "Personal Web Showcase",
    description:
      "A custom-built portfolio website to showcase my skills, projects, and achievements. The website is designed with a clean, modern UI, highlighting my experience in web development. It includes sections for project details, a contact form, and my resume, providing potential clients and employers an interactive way to learn more about me.",
    image: "/work-2.png",
    type: "Web Application",
  },
  {
    type: "Full stack Web Application",
    title: "Multiplayer Pong Game with Real-Time Chat",
    description:
      "FT_Transcendence is a real-time multiplayer Pong game platform with user authentication, profiles, and chat. Players can engage in matches, track stats, and interact in public or private chat rooms. Built with NestJS, TypeScript, and PostgreSQL, the platform offers secure, real-time gameplay and social features like friend requests and two-factor authentication.",
    image: "/work-3.png",
  },
  {
    title: "Mobtwin – Platform for Mobile App Developers & Creatives",
    description:
      " Mobtwin is an innovative platform designed to support mobile app developers, entrepreneurs, and creatives. It combines real-time market analytics, AI-powered tools, and no-code features to help users better understand the mobile app ecosystem, create simple apps effortlessly, and stay ahead of market trends. Still under development, this all-in-one solution already provides powerful capabilities for app analysis, creation, and optimization.",
    image: "/work-1.png",
    type: "Full stack Web Application",
  },
  {
    type: "Linux - C/C++",
    title: "Minishell – A Custom Shell in C",
    description:
      "A Unix shell built from scratch using C, mimicking essential functionalities of a shell environment. It supports command execution, piping, redirection, environment variable management, and handling of signals, providing a lightweight alternative to the standard shell",
    image: "/work-4.png",
  },
  {
    type: "C/C++ - Makefile",
    title: "CUB3D – A 3D Raycasting Engine",
    description:
      " A simple 3D game engine built using C, showcasing raycasting techniques for rendering a 3D environment. The project includes basic gameplay mechanics like movement, collision detection, and the ability to navigate through a 3D space, all optimized for performance in a minimalistic design.",
    image: "/work-5.png",
  },
  {
    type: "Administration - Docker - Docker-compose",
    title: "Inception – Automated Server Setup",
    description:
      "An automation project that creates a fully configured Server environment using Docker and Vagrant. It simplifies the process of setting up development environments by automatically installing required tools, services, and dependencies, ensuring consistency across different systems.",
    image: "/work-6.png",
  },
];

export const serviceData = [
  {
    icon: <FaCode />,
    title: "Development Services",
    description:
      "I offer a broad range of development services, including web, mobile, and backend development, creating scalable and reliable solutions for your business needs.",
    link: "/services/development",
  },
  {
    icon: <FaCloud />,
    title: "Infrastructure & Operations",
    description:
      "I design and optimize infrastructure, ensuring reliable, secure, and scalable systems, from cloud setups to server management and performance optimization.",
    link: "/services/devops",
  },
  {
    icon: <FaCogs />,
    title: "Advanced Services",
    description:
      "I integrate AI, build real-time apps, and develop GraphQL APIs, while also providing secure authentication, authorization systems, and security optimizations.",
    link: "/services/advanced-service",
  },
  {
    icon: <FaTachometerAlt />,
    title: "Product & Performance",
    description:
      "I improve product performance with optimized UI/UX design, ensuring both high performance and exceptional user experiences.",
    link: "/services/performance",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Skills",
    description: "Typescript, Java, Python3, C/C++, Docker...",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "education",
    description: "B.Tech in Computer Science, and 42 Network member",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Experience",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.mongodb,
  assets.figma,
  assets.git,
  assets.docker,
  assets.html,
  assets.next,
  assets.nestjs,
  assets.javascript,
  assets.css,
  assets.python,
  assets.java,
  assets.postgresql,
  assets.c,
  assets.graphql,
  assets.mysql,
  assets.linux,
  assets.nodejs,
  assets.tailwindcss,
];
