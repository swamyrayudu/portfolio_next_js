"use client";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import LeetCodeSection from "@/components/LeetCodeSection"; // NEW
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
    if (performance && performance.navigation && performance.navigation.type === 1) {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if (performance && performance.getEntriesByType) {
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
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LeetCodeSection /> {/* NEW SECTION */}
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
