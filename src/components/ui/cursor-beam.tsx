"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

      setTrail((prev) => [...prev.slice(-12), newDot]);
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
      {/* Beam line effect connecting trail */}
      <svg
        className="fixed inset-0 pointer-events-none z-[9996] w-full h-full"
        style={{ opacity: isVisible ? 1 : 0 }}
      >
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="100%" stopColor={colors.trail} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {trail.length > 1 && (
          <path
            d={`M ${trail.map((dot) => `${dot.x} ${dot.y}`).join(" L ")}`}
            fill="none"
            stroke="url(#beamGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#glow)"
            opacity="0.7"
          />
        )}
      </svg>

      {/* Trail dots */}
      <AnimatePresence>
        {trail.map((dot, index) => (
          <motion.div
            key={dot.id}
            className="fixed pointer-events-none z-[9997] rounded-full"
            style={{
              width: 4,
              height: 4,
              backgroundColor: colors.main,
              boxShadow: `0 0 6px ${colors.glow}`,
            }}
            initial={{ 
              x: dot.x - 2, 
              y: dot.y - 2, 
              opacity: 0.6,
              scale: 1 
            }}
            animate={{ 
              opacity: 0,
              scale: 0.3,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>

      {/* Outer glow ring - follows with lag */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          opacity: isVisible ? 0.5 : 0,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 100,
          mass: 0.8,
        }}
      >
        <div 
          className="w-6 h-6 rounded-full blur-sm"
          style={{
            backgroundColor: colors.glow,
            boxShadow: `0 0 12px ${colors.glow}`,
          }}
        />
      </motion.div>

      {/* Main cursor dot - smaller and follows with slight lag */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.2,
        }}
      >
        <div 
          className="w-1.5 h-1.5 rounded-full"
          style={{
            backgroundColor: colors.main,
            boxShadow: `0 0 8px ${colors.main}`,
          }}
        />
      </motion.div>
    </>
  );
};

export default CursorBeam;
