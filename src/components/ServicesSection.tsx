"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: "Full-Stack Web Development",
      description:
        "Building scalable web applications using MERN Stack, Next.js, and PostgreSQL. From concept to deployment with clean, maintainable code.",
      highlights: ["MERN Stack", "Next.js", "RESTful APIs", "PostgreSQL"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
      title: "Modern UI/UX Design",
      description:
        "Creating responsive, pixel-perfect interfaces with React, TypeScript, Tailwind CSS, and Shadcn UI. Mobile-first design that works seamlessly.",
      highlights: ["Tailwind CSS", "Responsive", "TypeScript", "Shadcn UI"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      title: "Database Design & Management",
      description:
        "Designing efficient database schemas with MongoDB, MySQL, and PostgreSQL. Type-safe database operations using Drizzle ORM.",
      highlights: ["MongoDB", "PostgreSQL", "MySQL", "Drizzle ORM"],
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Performance Optimization",
      description:
        "Optimizing applications for speed and efficiency using DSA (Binary Search, Dynamic Programming, Trees) and efficient algorithms.",
      highlights: ["DSA", "Code Optimization", "Fast APIs", "Caching"],
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
      className="bg-background px-4 py-16 sm:py-20 max-w-full mx-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        {/* Services Grid - 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 mb-4 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {service.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm mb-4">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Let's Work Together</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 relative z-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
