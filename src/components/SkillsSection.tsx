"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const skills = [
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      needsWhiteBg: false,
      color: "#E34F26",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      needsWhiteBg: false,
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      needsWhiteBg: false,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      needsWhiteBg: false,
      color: "#3178C6",
    },
    {
      name: "Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      needsWhiteBg: false,
      color: "#06B6D4",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      needsWhiteBg: false,
      color: "#339933",
    },
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      needsWhiteBg: false,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      needsWhiteBg: true,
      color: "#000000",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      needsWhiteBg: true,
      color: "#000000",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      needsWhiteBg: false,
      color: "#47A248",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      needsWhiteBg: false,
      color: "#4479A1",
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      needsWhiteBg: false,
      color: "#336791",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      needsWhiteBg: false,
      color: "#3776AB",
    },
  ];

  return (
    <section
      ref={ref}
      id="skills"
      className="bg-background px-4 py-16 sm:py-20 max-w-full mx-auto"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            Skills & <span className="text-primary">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-base">
            Showcasing My Expertise And Technical Proficiencies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}40, transparent)`,
                }}
              ></div>

              <div className="relative bg-card border border-border rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-full group-hover:border-primary/50 transition-all duration-300 overflow-hidden">
                {/* Background color overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)`,
                  }}
                ></div>

                {/* Icon with rotation and optional white background */}
                <motion.div
                  className={`w-12 h-12 flex items-center justify-center relative z-10 ${
                    skill.needsWhiteBg ? "bg-white dark:bg-white rounded-lg p-2" : ""
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-full h-full object-contain ${
                      skill.needsWhiteBg ? "dark:invert-0" : ""
                    }`}
                  />
                </motion.div>

                {/* Name */}
                <p className="text-card-foreground font-medium text-sm text-center group-hover:text-primary transition-colors duration-300 relative z-10">
                  {skill.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
