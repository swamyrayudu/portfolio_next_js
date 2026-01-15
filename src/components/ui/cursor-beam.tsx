"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useColorTheme, ColorTheme } from "@/contexts/ColorThemeContext";

interface CursorPosition {
  x: number;
  y: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
}

// Color mappings for cursor based on theme
const cursorColors: Record<ColorTheme, { main: string; glow: string; trail: string }> = {
  emerald: { main: "#10b981", glow: "rgba(16, 185, 129, 0.4)", trail: "rgba(16, 185, 129, 0.6)" },
  blue: { main: "#3b82f6", glow: "rgba(59, 130, 246, 0.4)", trail: "rgba(59, 130, 246, 0.6)" },
  purple: { main: "#a855f7", glow: "rgba(168, 85, 247, 0.4)", trail: "rgba(168, 85, 247, 0.6)" },
  orange: { main: "#f97316", glow: "rgba(249, 115, 22, 0.4)", trail: "rgba(249, 115, 22, 0.6)" },
  red: { main: "#ef4444", glow: "rgba(239, 68, 68, 0.4)", trail: "rgba(239, 68, 68, 0.6)" },
  pink: { main: "#ec4899", glow: "rgba(236, 72, 153, 0.4)", trail: "rgba(236, 72, 153, 0.6)" },
  cyan: { main: "#06b6d4", glow: "rgba(6, 182, 212, 0.4)", trail: "rgba(6, 182, 212, 0.6)" },
  yellow: { main: "#eab308", glow: "rgba(234, 179, 8, 0.4)", trail: "rgba(234, 179, 8, 0.6)" },
};

export const CursorBeam = () => {
  const { colorTheme } = useColorTheme();
  const [mousePosition, setMousePosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const trailIdRef = useRef(0);

  const colors = cursorColors[colorTheme];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Add new trail dot
      const newDot: TrailDot = {
        id: trailIdRef.current++,
        x: e.clientX,
        y: e.clientY,
      };

      setTrail((prev) => [...prev.slice(-5), newDot]);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Remove old trail dots
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.slice(1));
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Animated ring pulse effect */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 400,
          mass: 0.2,
        }}
      >
        <motion.div
          className="w-6 h-6 rounded-full border"
          style={{
            borderColor: colors.main,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.2, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Main cursor dot - small and follows cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 1000,
          mass: 0.1,
        }}
      >
        <motion.div 
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: colors.main,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorBeam;
