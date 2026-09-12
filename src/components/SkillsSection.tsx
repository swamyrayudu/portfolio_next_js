"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const skillCategories = [
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "SQL"],
    },
    {
      name: "Frontend",
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "WebSockets"],
    },
    {
      name: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Supabase", "Drizzle ORM"],
    },
    {
      name: "Tools & Infra",
      skills: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code"],
    },
    {
      name: "AI & Data",
      skills: ["OpenAI API", "LangChain basics", "Pandas", "NumPy", "Machine Learning"],
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="grid-background py-20 sm:py-28 px-4 sm:px-8 border-t border-border/50 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            TOOLS I BUILD WITH
          </p>
          <h2 className="serif-title text-5xl sm:text-6xl text-foreground leading-none">
            Tech Stack
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <div className="w-28 flex-shrink-0">
                <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase pt-1">
                  {cat.name}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIdx * 0.08 + skillIdx * 0.04 }}
                    className="capsule-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently learning */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row sm:items-center gap-4"
        >
          <div className="w-28 flex-shrink-0">
            <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase">
              LEARNING
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["Docker", "Kubernetes", "System Design", "Redis", "BetterAuth"].map((skill) => (
              <span
                key={skill}
                className="capsule-tag border-dashed"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
