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
import { useState, useRef, useEffect } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Home() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const toastRef = useRef<HTMLDivElement>(null);
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

  // Enable smooth scroll for anchor links
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    // Fast scroll-to-top effect on refresh
    if (performance && performance.navigation && performance.navigation.type === 1) {
      // Only on reload, not on normal navigation
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if (performance && performance.getEntriesByType) {
      // For browsers using Navigation Timing Level 2
      const navEntries = performance.getEntriesByType("navigation");
      if (
        navEntries.length &&
        'type' in navEntries[0] &&
        (navEntries[0] as PerformanceNavigationTiming).type === "reload"
      ) {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    }
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);
   
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      {/* Smooth scroll polyfill for browsers that do not support it */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
              anchor.addEventListener('click', function(e) {
                const hash = this.getAttribute('href');
                if (hash && hash.startsWith('#')) {
                  const target = document.querySelector(hash);
                  if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              });
            });
          });
        `
      }} />
      {/* Navigation */}
      <nav className="h-[64px] flex justify-between items-center px-4 md:px-8 bg-black dark:bg-black fixed top-0 left-0 w-full z-30 border-b border-gray-900/80">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="#home">
            <span className="text-green-500 text-3xl font-semibold hover:text-green-700 cursor-pointer">
              <img 
                src="/images/rs.jpg" 
                alt="SWAMY" 
                className="w-12 h-12 md:w-13 md:h-13 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-green-500 shadow-md transition-all duration-300 hover:scale-105"
                style={{ objectPosition: 'center top' }}
              />
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
                href="#services"
                className="text-white hover:text-green-400 transition-colors duration-300 relative group"
              >
                Services
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
            {/* <li className="flex items-center">
              <ThemeToggle />
            </li> */}
            <li>
              <a
                href="https://drive.google.com/file/d/1G9orw8uI82Mf5nyWmaNyAy1Bs5O6LOsx/view?usp=drive_link"
                className="px-5 py-2 rounded-lg bg-green-400 text-black font-semibold hover:bg-green-500 transition-colors duration-300 hover:scale-105 flex items-center gap-1"
                 target="_blank"
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
          {/* <ThemeToggle /> */}
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
                  href="#services"
                  className="text-lg text-white font-medium py-3 px-4 rounded-lg hover:bg-green-900/20 transition-all flex items-center gap-3 group"
                  onClick={() => setSheetOpen(false)}
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 opacity-0 group-hover:opacity-100 transition"></span>
                  Services
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
                   target="_blank"
                     href="https://drive.google.com/file/d/1G9orw8uI82Mf5nyWmaNyAy1Bs5O6LOsx/view?usp=drive_link"
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
                    <div className="relative bg-black rounded-[1.5rem] p-6 sm:p-8 w-full border border-green-600/60 min-h-[220px] z-20">
                      <h3 className="text-2xl sm:text-3xl font-bold text-green-400 mb-4 sm:mb-6">
                        Education
                      </h3>
                      <ul className="text-gray-200 space-y-4 sm:space-y-5 text-left">
                        <li className="pb-4 sm:pb-5 border-b border-gray-700">
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            B.Tech in Computer Science and Engineering (AI & DS)
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            Kakinada Institute of Engineering and Technology,
                            2023 – 2027
                          </div>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            CGPA: 7.12 (current)
                          </div>
                        </li>
                        <li className="pb-4 sm:pb-5 border-b border-gray-700">
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            Intermediate (MPC)
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            Modern GRC Junior College, 2021 – 2023
                          </div>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            Percentage: 84%
                          </div>
                        </li>
                        <li>
                          <span className="font-semibold text-white text-lg sm:text-xl">
                            SSC
                          </span>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            Z.P.P. High School, Ithapudi, 2020 – 2021
                          </div>
                          <div className="text-sm sm:text-base text-gray-400 mt-1">
                            Percentage: 90%
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
  className="bg-black from-gray-900 to-black relative px-4 py-16 sm:py-20 max-w-full mx-auto overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
        My <span className="text-emerald-400">Skills</span>
      </h2>
      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        Technologies I've worked with and mastered over time
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Frontend Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-emerald-400 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/10">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-emerald-900/50 rounded-lg mr-4">
            <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Frontend</h3>
        </div>
        <ul className="space-y-3">
          {[
            { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" }
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <img src={skill.icon} className="w-5 h-5 mr-3" alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Backend & DB Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/10">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-blue-900/50 rounded-lg mr-4">
            <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Backend & DB</h3>
        </div>
        <ul className="space-y-3">
          {[
            { name: "MySQL", icon: "https://download.logo.wine/logo/MySQL/MySQL-Logo.wine.png" },
            { name: "Express.js", icon: "https://img.icons8.com/color/512/express-js.png" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" }
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <img src={skill.icon} className="w-5 h-5 mr-3" alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Tools Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-orange-400 transition-all duration-300 hover:shadow-lg hover:shadow-orange-400/10">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-orange-900/50 rounded-lg mr-4">
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Tools</h3>
        </div>
        <ul className="space-y-3">
          {[
            { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
            { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "Figma (Basics)", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" }
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <img src={skill.icon} className="w-5 h-5 mr-3" alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Languages Card */}
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-400 transition-all duration-300 hover:shadow-lg hover:shadow-purple-400/10">
        <div className="flex items-center mb-5">
          <div className="p-3 bg-purple-900/50 rounded-lg mr-4">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white">Languages</h3>
        </div>
        <ul className="space-y-3">
          {[
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "Java", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZWkwcHK_g5_g3yZpEu9W-4bWwpX4wzzWBA&s" }
          ].map((skill, index) => (
            <li key={index} className="flex items-center text-gray-300 hover:text-white transition-colors">
              <img src={skill.icon} className="w-5 h-5 mr-3" alt={skill.name} />
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>
      {/* Projects */}
      <section
        id="projects"
        className="px-4 sm:px-8 bg-black py-16 max-w-7xl mx-auto animate-fade-in-up min-h-[620px]"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-white">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img
              src="/images/ecom.png.png"
              alt="eCommerce Website"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-white">
              eCommerce Website 🛒
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              A full-featured online store with user authentication, product
              management, and a shopping cart.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/swamyrayudu/Ecom_Mern"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://ecom-mern-3.onrender.com/auth/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Project 2 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img
              src="/images/blog.png.png"
              alt="Calorie Calculator"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Food Search Calorie Calculator 🍎
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              Search foods and get calorie information using a simple,
              user-friendly interface.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/swamyrayudu/FITNESS_AND_BLOG_FRONTEND.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>
          {/* Project 3 */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img
              src="/images/fitness.png.png"
              alt="Blog Platform"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Blog Platform ✍️
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              A simple blog platform to write, edit, and share posts with
              others.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/swamyrayudu/FITNESS_AND_BLOG_BACKEND.git"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        {/* Additional Projects Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {/* Project 4: Movie Revenue Prediction */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img
              src="/images/movie.png"
              alt="Movie Revenue Prediction"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-white">
              Movie Revenue Prediction 🎬
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              Predicts box office revenue for movies using machine learning and
              data analysis on movie features.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/swamyrayudu/Movie-Revenue-prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                GitHub
              </a>
            </div>
          </div>
          {/* Project 5: AI Chat Bot */}
          <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col items-center border border-gray-800 hover:shadow-2xl transition-all">
            <img
              src="/images/ai.png"
              alt="AI Chat Bot"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <h3 className="font-semibold text-lg mb-2 text-white">
              AI Chat Bot 🤖
            </h3>
            <p className="text-gray-300 text-sm mb-4 text-center">
              An interactive AI-powered chat bot for answering questions and
              assisting users in real time.
            </p>
            <div className="flex gap-3 mt-auto">
              <a
                href="https://github.com/swamyrayudu/chat_bot_react"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-700 transition"
              >
                GitHub
              </a>
              <a
                href="https://chat-bot-ai-git-main-swamyrayudus-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 transition"
              >
                Live Demo
              </a>
            </div>
          </div>
          {/* Empty for grid alignment on desktop if needed */}
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-black px-4 sm:px-8 py-20 max-w-full mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            What I <span className="text-green-500">Offer</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your digital needs, from concept
            to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Service 1 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 transition-all hover:border-green-400/30 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 mb-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                End-to-end web development with MERN stack (MongoDB, Express,
                React, Node.js). I craft responsive, scalable applications that
                drive business growth with clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 transition-all hover:border-green-400/30 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 mb-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Modern UI/UX Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intuitive interfaces built with Tailwind CSS, Framer Motion, and
                Shadcn/UI. I focus on creating delightful user experiences that
                convert visitors into customers.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 transition-all hover:border-green-400/30 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 mb-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AI & Data Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Smart features like search, recommendations, and predictive
                analytics powered by AI. I integrate machine learning models to
                make your applications more intelligent.
              </p>
            </div>
          </div>

          {/* Service 4 */}
          <div className="group relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-8 transition-all hover:border-green-400/30 hover:shadow-lg hover:-translate-y-1">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 mb-6 rounded-lg bg-green-500/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 17l-4-4-4 4m8-8l-4 4-4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Problem Solving & Coding Skills
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Strong problem-solving abilities demonstrated through consistent
                practice on platforms like{" "}
                <a
                  href="https://leetcode.com/u/6Ilcv238HN/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 underline hover:text-green-600"
                >
                  LeetCode
                </a>{" "}
                and coding competitions. I enjoy tackling algorithmic challenges
                and applying efficient solutions to real-world problems,
                ensuring robust and scalable code in every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-black from-gray-900 to-black px-4 sm:px-8 py-20 max-w-full mx-auto rounded-3xl shadow-2xl border border-gray-800"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text bg-gradient-to-r text-green-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Drop me a message and
            I'll get back to you soon.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (toastRef.current) {
                toastRef.current.classList.remove("hidden");
                setTimeout(() => {
                  toastRef.current && toastRef.current.classList.add("hidden");
                }, 2000);
              }
              const form = e.target as HTMLFormElement;
              if (typeof form.reset === "function") {
                form.reset();
              }
            }}
          >
            <div className="space-y-1">
              <label htmlFor="name" className="text-gray-300 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all text-gray-200 placeholder-gray-500"
                placeholder="Enter name..."
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-gray-300 font-medium">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all text-gray-200 placeholder-gray-500"
                placeholder="john@example.com"
                required
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-gray-300 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/30 transition-all text-gray-200 placeholder-gray-500 min-h-[150px]"
                placeholder="Hello, I'd like to talk about..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r bg-green-500 text-white font-semibold py-3 px-6 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/30"
            >
              Send Message
              <span className="ml-2">→</span>
            </button>
            {/* Toast message */}
            <div
              ref={toastRef}
              className="hidden fixed left-1/2 bottom-10 z-50 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-xl shadow-lg text-lg font-semibold transition-all animate-fade-in-up"
              style={{ minWidth: 220, textAlign: "center" }}
            >
              Sent successfully!
            </div>
          </form>

          <div className="flex flex-col justify-center">
            <div className="bg-gray-800/50 border border-gray-800 rounded-2xl p-8 h-full backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Email</h4>
                    <a
                      href="mailto:swamy@email.com"
                      className="text-white hover:text-green-400 transition-colors text-lg"
                    >
                      swamyrayudu7288@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Phone</h4>
                    <a
                      href="tel:+911234567890"
                      className="text-white hover:text-green-400 transition-colors text-lg"
                    >
                      +917288819391
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800 rounded-lg text-green-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-400 font-medium">Location</h4>
                    <p className="text-white text-lg">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-800">
                <h4 className="text-gray-400 font-medium mb-4">
                  Connect with me
                </h4>
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
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black text-center text-gray-500 dark:text-gray-400 py-6 ">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-green-500"> RVV Swamy.</span> All rights reserved.
      </footer>
    </main>
  );
}
