"use client";
import { motion } from "framer-motion";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const socialLinks = [
    {
      href: "https://wa.me/7288819391",
      icon: FaWhatsapp,
      color: "bg-emerald-600 hover:bg-emerald-700",
      label: "WhatsApp",
    },
    {
      href: "https://www.instagram.com/swamyrayudu/",
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
      ref={ref}
      id="home"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-background/95"
    >
      <BackgroundRippleEffect />

      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 lg:px-8 gap-6 md:gap-8 max-w-7xl mx-auto">
        {/* Rotating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
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
            className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs sm:text-sm font-medium tracking-wider inline-flex items-center justify-center shadow-sm"
            textClassName="text-primary text-xs sm:text-sm font-semibold uppercase text-center whitespace-nowrap"
            animationDuration={500}
            interval={2000}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight max-w-5xl"
        >
          hi, i'm <span className="text-primary" style={{ fontVariant: 'small-caps', letterSpacing: '0.02em' }}>rvv swamy</span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline"> </span>
          <span style={{ fontVariant: 'small-caps', letterSpacing: '0.02em' }}>fullstack developer.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground text-center max-w-3xl leading-relaxed"
        >
          Specializing in{" "}
          <span className="text-foreground font-semibold">MERN Stack</span>,{" "}
          <span className="text-foreground font-semibold">Next.js</span>, and{" "}
          <span className="text-foreground font-semibold">TypeScript</span>.
          Building scalable web applications with clean code and modern design.
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
