"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  title: string;
  emoji: string;
  color: string;
  description: string;
  problem: string;
  tech: string[];
  github: string;
  live?: string;
};

type Experience = {
  role: string;
  company: string;
  duration: string;
  location: string;
  type: string;
  responsibilities: string[];
  tech: string[];
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<"projects" | "experience">("projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "talentpath",
      title: "TalentPath",
      emoji: "🎯",
      color: "bg-blue-100 dark:bg-blue-900/30",
      description: "Comprehensive platform for mastering your tech career with problem-solving, contests, interview prep, and jobs.",
      problem: "Developers had to juggle multiple platforms (LeetCode, HackerRank, LinkedIn, job boards) to prepare for interviews. TalentPath unifies it all.",
      tech: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM", "Tailwind"],
      github: "https://github.com/swamyrayudu/TalentPath",
      live: "https://talentpath.vercel.app/",
    },
    {
      id: "ecommerce",
      title: "eCommerce",
      emoji: "🛍️",
      color: "bg-green-100 dark:bg-green-900/30",
      description: "Full-featured online store with user authentication, product management, cart, and payment integration.",
      problem: "Needed a complete MERN stack e-commerce solution with secure auth, real-time cart, and payment processing from scratch.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      github: "https://github.com/swamyrayudu/Ecom_Mern",
      live: "https://ecom-mern-3.onrender.com/auth/login",
    },
    {
      id: "localHunt",
      title: "Local Hunt",
      emoji: "🗺️",
      color: "bg-orange-100 dark:bg-orange-900/30",
      description: "Full-stack web app connecting offline stores with local customers via location-based search.",
      problem: "Offline small businesses were invisible online — Local Hunt bridges the gap with product catalog, location search, and order management.",
      tech: ["Next.js", "Express.js", "PostgreSQL", "Drizzle ORM", "BetterAuth"],
      github: "https://github.com/swamyrayudu",
    },
    {
      id: "chatbot",
      title: "AI Chat Bot",
      emoji: "🤖",
      color: "bg-purple-100 dark:bg-purple-900/30",
      description: "Interactive AI-powered chatbot for answering questions and real-time assistance using natural language.",
      problem: "Built a conversational AI interface to explore LLM API integration, streaming responses, and real-time chat UX patterns.",
      tech: ["React", "OpenAI API", "Node.js", "CSS"],
      github: "https://github.com/swamyrayudu/chat_bot_react",
      live: "https://chat-bot-ai-git-main-swamyrayudus-projects.vercel.app/",
    },
    {
      id: "calorie",
      title: "Calorie Calc",
      emoji: "🥗",
      color: "bg-yellow-100 dark:bg-yellow-900/30",
      description: "Search foods and get detailed calorie and nutritional information through a clean, simple interface.",
      problem: "Built as an API integration exercise, consuming a nutrition data API to deliver instant food search and calorie display.",
      tech: ["React", "REST API", "CSS"],
      github: "https://github.com/swamyrayudu/FITNESS_AND_BLOG_FRONTEND",
    },
    {
      id: "movie",
      title: "Movie Revenue",
      emoji: "🎬",
      color: "bg-red-100 dark:bg-red-900/30",
      description: "Predicts box office revenue using machine learning and data analysis on various movie features.",
      problem: "Applied supervised ML to a regression problem — movie revenue prediction based on budget, genre, cast, and release window.",
      tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
      github: "https://github.com/swamyrayudu/Movie-Revenue-prediction",
    },
  ];

  const experiences: Experience[] = [
    {
      role: "Full Stack Developer Intern",
      company: "Innov2Grow LLP",
      duration: "Dec 2025 – Present",
      location: "Bengaluru, Karnataka (Remote)",
      type: "Internship",
      responsibilities: [
        "Building real product features within the Innkaro ecosystem using React, Tailwind CSS, and Express.js",
        "Integrated backend APIs with PostgreSQL/Supabase ensuring smooth data flow across the application",
        "Collaborated with teams on UI development, debugging, and code optimization for production readiness",
        "Gained experience in startup-level workflows, deployment pipelines, and writing maintainable full-stack code",
      ],
      tech: ["React", "Tailwind", "Express.js", "PostgreSQL", "Supabase"],
    },
    {
      role: "Full-Stack Developer",
      company: "K-HUB (KIET)",
      duration: "Aug 2025 – Present",
      location: "Kakinada",
      type: "Project Role",
      responsibilities: [
        "Working on Local Hunt — a full-stack web app connecting offline stores with customers via location-based search",
        "Focused on backend development with Next.js, Express.js, PostgreSQL, Drizzle ORM, and BetterAuth",
        "Built and optimized RESTful APIs for product catalog, orders, and location-based search features",
        "Designed scalable database schemas in PostgreSQL for efficient multi-tenant data management",
      ],
      tech: ["Next.js", "Express.js", "PostgreSQL", "Drizzle ORM", "BetterAuth"],
    },
  ];

  return (
    <section
      id="projects"
      className="grid-background py-20 sm:py-28 px-4 sm:px-8 border-t border-border/50 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-8">
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            WORK
          </p>
          <h2 className="serif-title text-5xl sm:text-6xl text-foreground leading-none mb-2">
            Projects & experience
          </h2>
          <p className="text-muted-foreground text-sm">
            Less feature lists — more problems, systems, tradeoffs, and impact.
          </p>
        </div>

        {/* macOS Window */}
        <div className="macos-window">
          {/* Title Bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-1.5">
              <div className="traffic-light bg-red-400 dark:bg-red-500" />
              <div className="traffic-light bg-yellow-400 dark:bg-yellow-500" />
              <div className="traffic-light bg-green-400 dark:bg-green-500" />
            </div>
            <span className="text-xs font-mono text-muted-foreground mx-auto">
              ~/swamy/workspace
            </span>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-green-600 dark:text-green-400">Live</span>
            </div>
          </div>

          <div className="flex min-h-[520px]">
            {/* Sidebar */}
            <div className="w-44 sm:w-52 border-r border-border bg-secondary/10 p-4 flex-shrink-0">
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-3 px-1">
                FAVORITES
              </p>
              <div className="space-y-0.5">
                <button
                  onClick={() => { setActiveTab("projects"); setSelectedProject(null); }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "projects"
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => { setActiveTab("experience"); setSelectedProject(null); }}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "experience"
                      ? "bg-foreground text-background"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  Experience
                </button>
              </div>
            </div>

            {/* Main Panel */}
            <div className="flex-1 p-6 overflow-auto ide-panel">
              <AnimatePresence mode="wait">
                {activeTab === "projects" && !selectedProject && (
                  <motion.div
                    key="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                  >
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-secondary/50 transition-all active:scale-95 group"
                      >
                        <div className={`w-16 h-14 ${project.color} border border-border/50 rounded-xl flex items-center justify-center text-2xl shadow-sm group-hover:shadow-md transition-shadow`}>
                          {project.emoji}
                        </div>
                        <span className="text-xs text-foreground font-medium text-center leading-tight italic font-serif">
                          {project.title}
                        </span>
                      </button>
                    ))}
                  </motion.div>
                )}

                {activeTab === "projects" && selectedProject && (
                  <motion.div
                    key="project-detail"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground mb-5 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to projects
                    </button>

                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-10 ${selectedProject.color} border border-border/50 rounded-lg flex items-center justify-center text-xl flex-shrink-0`}>
                        {selectedProject.emoji}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{selectedProject.title}</h3>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">WHAT IT IS</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{selectedProject.description}</p>
                      </div>

                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1.5">THE PROBLEM</p>
                        <p className="text-sm text-foreground/80 leading-relaxed">{selectedProject.problem}</p>
                      </div>

                      <div>
                        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">BUILT WITH</p>
                        <div className="flex flex-wrap gap-1.5">
                          {selectedProject.tech.map((t) => (
                            <span key={t} className="capsule-tag text-xs">{t}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-xs font-medium text-foreground hover:bg-secondary active:scale-95 transition-all"
                        >
                          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                          View Code
                        </a>
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-xs font-medium hover:opacity-80 active:scale-95 transition-all"
                          >
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "experience" && (
                  <motion.div
                    key="experience"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    {experiences.map((exp, i) => (
                      <div key={i} className="border border-border rounded-xl p-5">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                          <div>
                            <h3 className="text-base font-bold text-foreground">{exp.role}</h3>
                            <p className="text-sm text-muted-foreground">{exp.company} · {exp.location}</p>
                          </div>
                          <div className="flex flex-col sm:items-end gap-1 flex-shrink-0">
                            <span className="text-xs font-mono text-muted-foreground">{exp.duration}</span>
                            <span className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground w-fit">{exp.type}</span>
                          </div>
                        </div>
                        <ul className="space-y-1.5 mb-4">
                          {exp.responsibilities.map((r, idx) => (
                            <li key={idx} className="flex gap-2 text-sm text-muted-foreground">
                              <span className="text-foreground/40 mt-0.5 flex-shrink-0">→</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tech.map((t) => (
                            <span key={t} className="capsule-tag text-xs">{t}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
