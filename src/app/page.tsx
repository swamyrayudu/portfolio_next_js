"use client";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { Button } from "@/components/ui/moving-border";
import { motion } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import {
  FaFileDownload,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const words = [
    {
      text: "Hi,",
    },
    {
      text: "I'm",
    },
    {
      text: "R.V.V",
      className: "text-blue-500 dark:text-green-500",
    },
    {
      text: "Swamy.",
      className: "text-blue-500 dark:text-green-500",
    },
    {
      text: "Mern",
    },
    {
      text: "Developer.",
    },
  ];
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Navigation */}
      <nav className="h-[64px] flex justify-between items-center px-4 md:px-8 bg-black dark:bg-black fixed top-0 left-0 w-full z-30 border-b border-gray-900/80">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home">
            <span className="text-green-500 text-3xl font-semibold hover:text-green-700 cursor-pointer">
              swamy
            </span>
          </a>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          <ul className="flex items-center gap-8 text-muted-foreground font-sans">
            <li>
              <a
                href="#about"
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                Contact Me
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li className="flex items-center">
              <ThemeToggle />
            </li>
            <li>
              <a
                href="#"
                className="px-5 py-2 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-500 transition-colors duration-300 hover:scale-105 flex items-center gap-1"
              >
                Resume
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
        {/* Mobile Nav: Sheet Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-xl border border-gray-600 bg-black/60 p-3 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400 flex items-center transition-all"
              >
                <IoMdMenu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="bg-gray-950/95 backdrop-blur-sm border-r border-gray-800 p-6 w-72 flex flex-col"
            >
              <SheetHeader className="text-left mb-8">
                <SheetTitle className="text-2xl font-bold text-white">
                  Navigation
                </SheetTitle>
                <SheetDescription className="text-gray-400">
                  Explore different sections of my portfolio
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-3">
                <a
                  href="#about"
                  className="text-lg text-white font-medium py-3 px-4 rounded-lg hover:bg-green-900/20 transition-all flex items-center gap-3 group"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                  About Me
                </a>
                <a
                  href="#skills"
                  className="text-lg text-white font-medium py-3 px-4 rounded-lg hover:bg-green-900/20 transition-all flex items-center gap-3 group"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                  Skills
                </a>
                <a
                  href="#projects"
                  className="text-lg text-white font-medium py-3 px-4 rounded-lg hover:bg-green-900/20 transition-all flex items-center gap-3 group"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-lg text-white font-medium py-3 px-4 rounded-lg hover:bg-green-900/20 transition-all flex items-center gap-3 group"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                  Contact
                </a>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <a
                    href="#"
                    className="text-lg font-semibold py-3 px-4 rounded-lg bg-green-400 text-black hover:bg-green-500 transition-all flex items-center justify-center gap-2"
                    onClick={() => setSheetOpen(false)}
                  >
                    <FaFileDownload size={18} />
                    Download Resume
                  </a>
                </div>
              </nav>
              <div className="mt-auto pt-6 text-sm text-gray-500">
                © {new Date().getFullYear()} My Portfolio
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
      {/* Home Section with Animated Background Beams */}

      <section
        id="home"
        className="relative w-full min-h-[500px] h-[100vh] flex items-center justify-center overflow-hidden p-0 m-0"
      >
        <BackgroundBeamsWithCollision className="absolute inset-0 w-full h-full bg-black z-0">
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4">
            <ContainerTextFlip
              words={[
                "hiring-ready",
                "full-stack",
                "problem-solver",
                "innovative",
                "collaborative",
              ]}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg border-2 border-green-700 text-white text-base font-semibold tracking-wide flex items-center justify-center min-w-[180px] max-w-full"
              textClassName="text-white text-base font-bold tracking-tight"
              animationDuration={600}
              interval={1800}
            />

            <TypewriterEffect words={words} />
            <div className="text-xl md:text-2xl font-medium text-gray-300 text-center max-w-3xl mx-auto leading-snug">
              <span className=" text-[20px] font-extrabold text-white">
                Full-stack developer
              </span>
              <span className="text-[20px] text-gray-400 font-normal">
                {" "}
                focused on{" "}
              </span>
              <span className="text-[20px] font-extrabold text-white">
                MERN
              </span>
              <span className="text-[20px] text-gray-400 font-normal">
                {" "}
                Stack,{" "}
              </span>
              <span className="text-[20px] font-extrabold text-white">
                Next.js
              </span>
              <span className="text-[20px] text-gray-400 font-normal">
                , TypeScript, and scalable systems &amp;{" "}
              </span>
              <span className="text-[20px] font-extrabold text-white">
                Problem Solver.
              </span>
            </div>
            <div className="w-60 flex justify-between">
              <a
                href="https://wa.me/7288819391"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-green-500 hover:bg-black dark:hover:bg-white hover:text-green-700 transition-colors duration-200 rounded-full p-2 shadow-md hover:scale-110"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/swamy__rayudu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-pink-500 hover:bg-black dark:hover:bg-white hover:text-pink-700 transition-colors duration-200 rounded-full p-2 shadow-md hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/swamyrayudu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors duration-200 rounded-full p-2 shadow-md hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rayudu-veera-venkata-swamy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-blue-600 hover:bg-black dark:hover:bg-white hover:text-blue-800 transition-colors duration-200 rounded-full p-2 shadow-md hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </BackgroundBeamsWithCollision>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="w-full min-h-[600px] h-auto py-10 px-2 sm:px-4 bg-black text-white scroll-mt-16"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Profile Image */}
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-green-500 shadow-md mb-6 lg:mb-0 flex-shrink-0">
              <img
                src="/images/IMG_20250626_072109.jpg"
                alt="RVV Swamy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* About Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 mb-2">
                  About Me
                </h2>
                <div className="h-1 w-16 sm:w-20 bg-green-500 rounded-full mx-auto lg:mx-0"></div>
              </div>
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
             
                Hi, I'm <span className="font-bold text-white">RVV Swamy</span>,
                a Full-Stack Developer specializing in building modern web
                applications.
              </p>
              <div className="space-y-3 sm:space-y-4 text-gray-300">
                <div className="flex items-start justify-center lg:justify-start text-left">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <p>
                    Experienced in{" "}
                    <span className="font-semibold text-white">MERN Stack</span>
                    , <span className="font-semibold text-white">Next.js</span>,
                    and{" "}
                    <span className="font-semibold text-white">TypeScript</span>
                    , with a focus on clean, maintainable code and scalable
                    architecture.
                  </p>
                </div>
                <div className="flex items-start justify-center lg:justify-start text-left">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <p>
                    Developed various applications including{" "}
                    <span className="font-semibold text-white">
                      eCommerce platforms
                    </span>
                    , nutrition tracking systems, and secure content management
                    solutions.
                  </p>
                </div>
                <div className="flex items-start justify-center lg:justify-start text-left">
                  <span className="text-green-500 mr-2 mt-1">•</span>
                  <p>
                    Passionate about creating{" "}
                    <span className="font-semibold text-white">
                      intuitive user experiences
                    </span>{" "}
                    and solving complex technical challenges through innovative
                    solutions.
                  </p>
                </div>
              </div>
              <div className="w-full mt-6 sm:mt-8">
                <div className="relative w-full flex items-center justify-center mt-4">
                  <div className="relative w-full">
                    {/* Moving Border SVG */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none z-10"
                      width="100%"
                      height="100%"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                    >
                      <rect
                        x="1"
                        y="1"
                        width="98"
                        height="98"
                        rx="24"
                        ry="24"
                        fill="none"
                        stroke="#22c55e"
                        strokeWidth="2"
                        strokeDasharray="400"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;400"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </svg>
                    <div className="relative bg-gray-900 rounded-[1.5rem] p-6 sm:p-8 w-full border border-green-600/60 min-h-[220px] z-20">
                      <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 sm:mb-6">
                        Education
                      </h3>
                      <ul className="text-gray-200 space-y-4 sm:space-y-5 text-left">
                        <li className="pb-4 sm:pb-5 border-b border-gray-700">
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            B.Tech in Computer Science
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            XYZ University, 2021 - 2025
                          </div>
                        </li>
                        <li className="pb-4 sm:pb-5 border-b border-gray-700">
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            Intermediate (MPC)
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            ABC Junior College, 2019 - 2021
                          </div>
                        </li>
                        <li>
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            SSC
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            DEF High School, 2018 - 2019
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="bg-black relative px-2 sm:px-4 py-10 max-w-full mx-auto min-h-[600px] flex flex-col justify-center overflow-hidden"
      >
        {/* <Spotlight></Spotlight> */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-gray-800 dark:text-white">
            My{" "}
            <span className="text-green-500 dark:text-emerald-400">
              Skills
            </span>
          </h2>
        <div className="relative z-10 animate-fade-in-up flex justify-center w-full">
          <div className="bg-emerald-50 dark:bg-black p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-emerald-100 dark:border-gray-700 mx-auto w-full max-w-3xl flex justify-center">
     
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-lg mr-3">
                      <svg
                        className="w-5 h-5 text-emerald-600 dark:text-emerald-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-11">
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="React"
                      />
                      React.js
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="Next.js"
                      />
                      Next.js
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
                        className="w-4 h-4 mr-2"
                        alt="Tailwind"
                      />
                      Tailwind CSS
                    </li>
                    <li className="flex items-center">
                      <div className="flex items-center mr-2">
                        <img
                          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                          className="w-4 h-4"
                          alt="JavaScript"
                        />
                      </div>
                      JS
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mr-3">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                    </div>
                    Backend & DB
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-11">
                    <li className="flex items-center">
                      <img
                        src="https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png"
                        className="w-4 h-4 mr-2"
                        alt="Node.js"
                      />
                      My Sql
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://img.icons8.com/color/512/express-js.png"
                        className="w-4 h-4 mr-2"
                        alt="Express"
                      />
                      Express.js
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="MongoDB"
                      />
                      MongoDB
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg mr-3">
                      <svg
                        className="w-5 h-5 text-orange-600 dark:text-orange-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    Tools
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-11">
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="Git"
                      />
                      Git & GitHub
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="VS Code"
                      />
                      VS Code
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="Postman"
                      />
                      Postman
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="Figma"
                      />
                      Figma (Basics)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg mr-3">
                      <svg
                        className="w-5 h-5 text-purple-600 dark:text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    Programming languages
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 pl-11">
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="Python"
                      />
                      Python
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        className="w-4 h-4 mr-2"
                        alt="ML"
                      />
                      java script
                    </li>
                    <li className="flex items-center">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZWkwcHK_g5_g3yZpEu9W-4bWwpX4wzzWBA&s"
                        className="w-4 h-4 mr-2"
                        alt="Data"
                      />
                      java
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section
        id="projects"
        className="px-4 sm:px-8 bg-black py-16 max-w-7xl mx-auto animate-fade-in-up min-h-[620px]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img src="/images/ecommerce.jpg" alt="eCommerce Website" className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">eCommerce Website 🛒</h3>
            <p className="text-gray-300 text-sm mb-4 text-center">A full-featured online store with user authentication, product management, and a shopping cart.</p>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/swamyrayudu/ecommerce" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">GitHub</a>
              <a href="https://ecommerce-demo.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">Live Demo</a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img src="/images/calorie.jpg" alt="Calorie Calculator" className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">Food Search Calorie Calculator 🍎</h3>
            <p className="text-gray-300 text-sm mb-4 text-center">Search foods and get calorie information using a simple, user-friendly interface.</p>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/swamyrayudu/calorie-tracker" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">GitHub</a>
              <a href="https://calorie-demo.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">Live Demo</a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img src="/images/blog.jpg" alt="Blog Platform" className="w-full h-40 object-cover rounded-xl mb-4" />
            <h3 className="font-semibold text-lg mb-2 text-white">Blog Platform ✍️</h3>
            <p className="text-gray-300 text-sm mb-4 text-center">A simple blog platform to write, edit, and share posts with others.</p>
            <div className="flex gap-3 mt-auto">
              <a href="https://github.com/swamyrayudu/blog-platform" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition">GitHub</a>
              <a href="https://blog-demo.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition">Live Demo</a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog */}
      {/* <section
        id="blog"
        className="px-8 py-16 max-w-5xl mx-auto animate-fade-in-up"
      >
        <h2 className="text-2xl font-bold mb-6">Blog</h2>
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-gray-700 dark:text-gray-300">
          <p>
            Coming soon: I’ll share articles about web development, AI, and my
            learning journey here!
          </p>
        </div>
      </section> */}
      {/* Contact */}
      <section
        id="contact"
        className="bg-black px-4 sm:px-8 py-16 max-w-4xl mx-auto animate-fade-in-up rounded-2xl shadow-lg border border-gray-800 mt-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <form className="bg-gray-900 rounded-2xl shadow-md p-8 flex flex-col gap-5 border border-gray-800">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-gray-100"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-gray-100"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-700 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-800 text-gray-100"
              rows={5}
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 text-white rounded px-6 py-3 font-semibold hover:bg-green-600 transition"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col gap-6 justify-center bg-gray-900 rounded-2xl shadow-md p-8 border border-gray-800">
            <div>
              <span className="font-semibold text-white">Email:</span>{" "}
              <a
                href="mailto:swamy@email.com"
                className="text-green-400 hover:underline"
              >
                swamy@email.com
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">Phone:</span>{" "}
              <a
                href="tel:+911234567890"
                className="text-green-400 hover:underline"
              >
                +91 12345 67890
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">Location:</span>{" "}
              <span className="text-gray-300">Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-center text-gray-500 dark:text-gray-400 py-6 ">
        &copy; {new Date().getFullYear()} RVV Swamy. All rights reserved.
      </footer>
    </main>
  );
}
