"use client";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import BuildLogSection from "@/components/BuildLogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans transition-colors duration-300 relative">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <BuildLogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
