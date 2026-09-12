"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

export default function AntigravityCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);
  
  // Cursor motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Detect scroll position to hide particles near footer
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide particles when within 400px of bottom
      const distanceFromBottom = documentHeight - scrollTop - windowHeight;
      setIsNearFooter(distanceFromBottom < 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouse = { x: -1000, y: -1000 };

    // Resize handling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Mouse movement tracking for both cursor and particles
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button';
      
      setIsHovering(!!isClickable);
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Particle System - balanced opacity for light/dark mode
    const colors = [
      "rgba(66, 133, 244, 0.65)",   // Google Blue
      "rgba(219, 68, 55, 0.65)",    // Google Red
      "rgba(244, 180, 0, 0.7)",     // Google Yellow
      "rgba(15, 157, 88, 0.65)",    // Google Green
      "rgba(140, 100, 255, 0.6)",   // Purple
    ];

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100, // Start below screen
        size: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 1.5 - 0.5, // Float upwards
        life: 0,
        maxLife: Math.random() * 200 + 100,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    // Initialize some particles
    for (let i = 0; i < 100; i++) {
        const p = createParticle();
        p.y = Math.random() * canvas.height; // Distribute initially
        particles.push(p);
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particle occasionally
      if (particles.length < 150) {
        if (Math.random() < 0.1) {
          particles.push(createParticle());
        }
      }

      particles.forEach((p, index) => {
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Mouse interaction (Repulsion / Swirl)
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const angle = Math.atan2(dy, dx);
          
          // Push away
          p.vx -= Math.cos(angle) * force * 0.5;
          p.vy -= Math.sin(angle) * force * 0.5;
        }

        // Damping to return to normal
        p.vx *= 0.98;
        // Keep upward momentum
        if (p.vy > -0.5) p.vy -= 0.01; 


        // Draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Reset if out of bounds or dead
        if (p.y < -50 || p.life > p.maxLife || p.x < -50 || p.x > canvas.width + 50) {
          particles[index] = createParticle();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Particle Canvas Layer */}
      <canvas
        ref={canvasRef}
        className={`fixed inset-0 pointer-events-none z-10 transition-opacity duration-500 ${isNearFooter ? 'opacity-0' : 'opacity-55'}`}
      />

      {/* Custom Cursor - instant follow */}
      <motion.div
        className="fixed top-0 left-0 w-5 h-5 pointer-events-none z-50 rounded-full border border-gray-500/50 mix-blend-difference"
        style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%", 
        }}
      >
        <motion.div 
            className="w-full h-full bg-white rounded-full opacity-20"
            animate={{
                scale: isHovering ? 2 : 1,
            }}
            transition={{ duration: 0.1 }}
        />
      </motion.div>
      
      {/* Small dot in center */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
            x: cursorX,
            y: cursorY,
            translateX: "-50%",
            translateY: "-50%",
        }}
      />
    </>
  );
}
