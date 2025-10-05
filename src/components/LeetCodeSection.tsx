"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LeetCodeStats from "./LeetCodeStats";

const LeetCodeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="leetcode"
      className="bg-background px-4 sm:px-8 py-20 max-w-full mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            LeetCode <span className="text-primary">Journey</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Consistent problem-solving and algorithmic thinking
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Use your actual username */}
          <LeetCodeStats username="swamy__rayudu" />
        </motion.div>
      </div>
    </section>
  );
};

export default LeetCodeSection;
