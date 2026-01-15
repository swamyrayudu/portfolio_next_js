"use client";
import { Download } from "lucide-react";
import { ScrollAnimation } from "@/components/ui/scroll-animation";

const Footer = () => {
  const nameLetters = "RVV SWAMY".split("");
  
  // Predefined values to avoid hydration mismatch
  const particles = [
    { left: 10, delay: 0, duration: 4 },
    { left: 25, delay: 1.5, duration: 5 },
    { left: 40, delay: 2, duration: 6 },
    { left: 55, delay: 0.5, duration: 4.5 },
    { left: 70, delay: 3, duration: 5.5 },
    { left: 85, delay: 1, duration: 6.5 },
    { left: 15, delay: 2.5, duration: 4 },
    { left: 30, delay: 4, duration: 5 },
    { left: 50, delay: 1.2, duration: 6 },
    { left: 65, delay: 3.5, duration: 4.5 },
    { left: 80, delay: 0.8, duration: 5.5 },
    { left: 20, delay: 2.8, duration: 6.5 },
    { left: 45, delay: 1.8, duration: 4.2 },
    { left: 60, delay: 4.5, duration: 5.2 },
    { left: 90, delay: 0.3, duration: 6.2 },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-background via-background to-transparent border-t border-border overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 py-8 px-6">
        {/* Main Name Section */}
        <div className="flex flex-col items-center justify-end mb-4">
          {/* Decorative Line */}
          <ScrollAnimation direction="up" duration={0.6}>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-4" />
          </ScrollAnimation>

          {/* Animated Name */}
          <div className="flex items-center justify-center gap-1 md:gap-2">
            {nameLetters.map((letter, index) => (
              <ScrollAnimation
                key={index}
                direction="up"
                delay={index * 0.08}
                duration={0.7}
              >
                <span
                  className={`text-3xl md:text-5xl lg:text-6xl font-black tracking-tight
                    ${letter === " " ? "w-2 md:w-4" : ""}
                    ${letter !== " " ? "bg-gradient-to-b from-foreground via-foreground to-muted-foreground bg-clip-text text-transparent hover:text-primary" : ""}
                    transition-colors duration-300 cursor-default
                  `}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              </ScrollAnimation>
            ))}
          </div>

          {/* Subtitle */}
          <ScrollAnimation direction="up" delay={0.8} duration={0.6}>
            <div className="mt-3 text-muted-foreground">
              <span className="text-xs md:text-sm tracking-widest uppercase">
                Full Stack Developer
              </span>
            </div>
          </ScrollAnimation>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border/50">
          {/* Copyright - Left Side */}
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Resume Button - Right Side */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-foreground border border-border rounded-full bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
          >
            <span>Resume</span>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(100vh);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
