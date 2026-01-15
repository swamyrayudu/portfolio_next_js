"use client";
import { useRef, useEffect, useState, ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
  once?: boolean;
}

export const ScrollAnimation = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = false,
}: ScrollAnimationProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "-50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  const getTransformClass = () => {
    switch (direction) {
      case "up":
        return isVisible ? "translate-y-0" : "translate-y-16";
      case "down":
        return isVisible ? "translate-y-0" : "-translate-y-16";
      case "left":
        return isVisible ? "translate-x-0" : "translate-x-16";
      case "right":
        return isVisible ? "translate-x-0" : "-translate-x-16";
      case "fade":
        return "";
      default:
        return isVisible ? "translate-y-0" : "translate-y-16";
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getTransformClass()} ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        transitionDuration: `${duration}s`,
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
