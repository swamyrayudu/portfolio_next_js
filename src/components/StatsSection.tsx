"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const stats = [
    { value: "6+", label: "Projects Shipped", sub: "Full-stack to prod" },
    { value: "500+", label: "GitHub Commits", sub: "2025 contributions" },
    { value: "200+", label: "LeetCode Problems", sub: "DSA & algorithms" },
    { value: "2", label: "Internships", sub: "Real product dev" },
    { value: "3+", label: "APIs Built", sub: "Production grade" },
    { value: "∞", label: "Things Learned", sub: "And counting" },
  ];

  return (
    <section
      ref={ref}
      id="stats"
      className="grid-background border-t border-b border-border/50 py-14 px-4 sm:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-1">BY THE NUMBERS</p>
          <h2 className="serif-title text-4xl sm:text-5xl text-foreground">
            Engineering Snapshot
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border/50">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="bg-background p-6 sm:p-8 group hover:bg-secondary/30 transition-colors"
            >
              <p className="text-4xl sm:text-5xl font-bold font-mono text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-foreground mb-0.5">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
