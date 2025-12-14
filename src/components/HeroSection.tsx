"use client";
import { motion } from "framer-motion";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const HeroSection = () => {
  const words = [
    { text: "Hi," },
    { text: "I'm" },
    { text: "RVV", className: "text-primary" },
    { text: "Swamy.", className: "text-primary" },
    { text: "Full-Stack" },
    { text: "Developer." },
  ];

  const socialLinks = [
    {
      href: "https://wa.me/7288819391",
      icon: FaWhatsapp,
      color: "bg-emerald-600 hover:bg-emerald-700",
      label: "WhatsApp",
    },
    {
      href: "https://www.instagram.com/swamy__rayudu/",
      icon: FaInstagram,
      color: "bg-pink-500 hover:bg-pink-600",
      label: "Instagram",
    },
    {
      href: "https://github.com/swamyrayudu",
      icon: FaGithub,
      color: "bg-gray-700 hover:bg-gray-800",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/rayudu-veera-venkata-swamy/",
      icon: FaLinkedin,
      color: "bg-blue-600 hover:bg-blue-700",
      label: "LinkedIn",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-background"
    >

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 sm:px-6 lg:px-8 gap-4 md:gap-5">
        {/* Rotating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContainerTextFlip
            words={[
              "Available",
              "Full-Stack",
              "MERN Expert",
              "Problem Solver",
              "Innovative",
            ]}
            className="px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] sm:text-xs font-medium tracking-wide inline-flex items-center justify-center"
            textClassName="text-primary text-[10px] sm:text-xs font-semibold uppercase text-center whitespace-nowrap"
            animationDuration={500}
            interval={2000}
          />
        </motion.div>

        {/* Main Heading with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <TypewriterEffect words={words} />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-2xl leading-relaxed px-4"
        >
          Specializing in{" "}
          <span className="text-foreground font-semibold">MERN Stack</span>,{" "}
          <span className="text-foreground font-semibold">Next.js</span>, and{" "}
          <span className="text-foreground font-semibold">TypeScript</span>.
          Building scalable web applications with clean code and modern design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-row items-center gap-3 mt-2 w-full justify-center px-4 max-w-md"
        >
          <motion.a
            href="#contact"
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-primary text-primary-foreground text-xs sm:text-sm font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/20 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            href="#projects"
            className="px-4 py-2 sm:px-6 sm:py-2.5 bg-transparent border border-border text-foreground text-xs sm:text-sm font-semibold rounded-lg hover:border-primary hover:text-primary transition-all duration-300 whitespace-nowrap"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </motion.a>
        </motion.div>

        {/* Social Links - Better Design */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center gap-5 mt-3"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-300 group"
              aria-label={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-lg blur transition-all duration-300"></div>
                <link.icon className="w-5 h-5 sm:w-6 sm:h-6 relative z-10" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-muted-foreground text-[10px] font-medium uppercase tracking-wider">
              Scroll Down
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
