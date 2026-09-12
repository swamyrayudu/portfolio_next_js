"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const meta = [
    { label: "LOCATION", value: "Draksharama, Andhra Pradesh" },
    { label: "EDUCATION", value: "B.Tech AI&DS — KIET" },
    { label: "ROLE", value: "Full-Stack Developer" },
    { label: "ALSO", value: "Open to Internships" },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="grid-background py-20 sm:py-28 px-4 sm:px-8 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_180px] gap-12 lg:gap-20">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
                A LITTLE ABOUT ME
              </p>
              <h2 className="serif-title text-6xl sm:text-7xl text-foreground leading-none">
                About
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-foreground/80 text-base sm:text-lg leading-relaxed"
            >
              <p>
                I&apos;m Rayudu Veera Venkata Swamy — a full-stack developer who cares about clean code,
                scalable systems, and building products that real users rely on. Currently working as a
                developer intern at{" "}
                <span className="text-foreground font-medium border-b border-foreground/30 pb-0.5">Innov2Grow</span>{" "}
                and building the{" "}
                <span className="text-foreground font-medium border-b border-foreground/30 pb-0.5">Local Hunt</span>{" "}
                project at K-HUB, KIET.
              </p>
              <p>
                I build production web apps end-to-end: REST APIs, PostgreSQL databases, real-time
                layers, and the frontends that tie them together. Recent work spans MERN applications,
                AI chatbots, e-commerce platforms, and job automation tools serving real users.
              </p>
              <p>
                Right now I&apos;m deepening my skills in system design, database internals, and scalable
                backend architecture — the stuff that makes systems survive traffic spikes, not just
                demo well.
              </p>
              <p>
                Long term: become the engineer who can design, build, and reason about complex systems
                from first principles — and ship things people actually love using.
              </p>
            </motion.div>

            {/* Metadata row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {meta.map((m) => (
                <div key={m.label}>
                  <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-1.5">
                    {m.label}
                  </p>
                  <p className="text-sm font-medium text-foreground leading-snug">{m.value}</p>
                </div>
              ))}
            </motion.div>

            {/* Resume button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mt-8"
            >
              <a
                href="https://drive.google.com/file/d/1BSzGPx1PAQdnfbw-MrGcaHuM1_NU6Cvr/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-xl text-sm font-semibold hover:opacity-80 active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </motion.div>
          </div>

          {/* Right: Decorative folder widget */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-16 gap-4">
            {/* macOS-style folder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative cursor-default select-none"
            >
              <div className="w-32 h-24 bg-yellow-100 dark:bg-yellow-900/40 border border-yellow-200 dark:border-yellow-700/50 rounded-lg flex items-center justify-center shadow-sm">
                <svg className="w-10 h-10 text-yellow-600/60 dark:text-yellow-400/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h6a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                </svg>
              </div>
              <p className="text-center text-xs font-mono text-muted-foreground mt-2">~/me</p>
            </motion.div>

            {/* Availability indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="widget-card px-4 py-3 text-center"
            >
              <div className="flex items-center gap-2 justify-center mb-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-green-600 dark:text-green-400 font-semibold">Available</span>
              </div>
              <p className="text-xs text-muted-foreground">Open to work</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
