"use client";
import { useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tag: string;
  badge?: "NEW" | "FEATURED";
  gradient: string;
  glow: string;
  accentText: string;
  image: string;
  domain: string;
  icon: ReactNode;
  description: string;
  problem: string;
  highlights?: string[];
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const projects: Project[] = [
    {
      id: "rsdeducation",
      title: "RSD Education",
      subtitle: "AP DSC SGT Exam Preparation Platform",
      category: "CBT Simulation Engine",
      tag: "CBT",
      badge: "NEW",
      image: "/images/rsdeducation.png",
      domain: "rsdeducation.vercel.app",
      gradient: "from-indigo-600 via-indigo-700 to-violet-800",
      glow: "group-hover:shadow-indigo-500/25",
      accentText: "text-indigo-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <rect x="2" y="3" width="20" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4M7 8l3 3 7-7" />
        </svg>
      ),
      description: "A high-concurrency Computer-Based Test (CBT) exam preparation platform featuring adaptive practice, 160-question timed mock tests, granular performance analytics, subscription tiers, and dedicated English/Telugu bilingual learning tracks.",
      problem: "Candidates preparing for competitive state teacher exams (AP DSC SGT) needed a real-time, low-latency CBT exam simulator with instant ranking analytics, bilingual question delivery, and intelligent adaptive practice instead of static or repetitive mock tests.",
      highlights: [
        "Built a high-concurrency CBT exam preparation platform with adaptive practice, 160-question mock tests, performance analytics, subscriptions, and dedicated English/Telugu learning tracks.",
        "Developed an intelligent question-selection engine using attempt history, weak-topic detection, priority scoring, and topic-balanced selection instead of inefficient random SQL queries.",
        "Optimized question delivery using PostgreSQL filtering, two-pass data loading, Redis caching, cache warming, versioned invalidation, and cache-stampede prevention.",
        "Implemented distributed rate limiting, secure answer-key handling, and role-based admin controls for question management, mock generation, bulk CSV updates, and payment reconciliation.",
      ],
      tech: ["Next.js", "React.js", "TypeScript", "PostgreSQL", "Redis", "Tailwind CSS", "Distributed Rate Limiting", "RBAC"],
      github: "https://github.com/swamyrayudu/platform",
      live: "https://rsdeducation.vercel.app/",
    },
    {
      id: "talentpath",
      title: "TalentPath",
      subtitle: "Full-Stack EdTech & Career Preparation Platform",
      category: "Compiler & Career Ecosystem",
      tag: "DEV",
      badge: "FEATURED",
      image: "/images/talentpath.png",
      domain: "talentpath.vercel.app",
      gradient: "from-blue-600 via-cyan-600 to-teal-700",
      glow: "group-hover:shadow-blue-500/25",
      accentText: "text-blue-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" />
        </svg>
      ),
      description: "A unified full-stack career preparation ecosystem integrating DSA practice, real-time coding contests, aptitude assessments, tech roadmaps, job boards, and automated ATS resume matching.",
      problem: "Aspiring software engineers had to juggle multiple disconnected platforms (LeetCode, HackerRank, LinkedIn, job portals, ATS scanners) with scattered progress tracking. TalentPath consolidates the entire technical interview journey into a unified platform.",
      highlights: [
        "Built a full-stack career preparation platform combining DSA practice, coding contests, aptitude tests, jobs, roadmaps, and progress tracking in a unified platform.",
        "Developed an online coding compiler supporting Python, JavaScript, Java, C, and C++, with automated evaluation and contest functionality.",
        "Implemented an ATS Resume Checker with job-description matching, resume scoring, targeted improvement suggestions, and activity-based dashboard recommendations.",
        "Improved backend performance using Redis caching, API rate limiting, pagination, and infinite scrolling for efficient handling of user requests and large datasets.",
      ],
      tech: ["Next.js", "React.js", "TypeScript", "PostgreSQL", "Redis", "Drizzle ORM", "Monaco Editor", "Tailwind CSS"],
      github: "https://github.com/swamyrayudu/TalentPath",
      live: "https://talentpath.vercel.app/",
    },
    {
      id: "handshooter",
      title: "Hand Shooter",
      subtitle: "Real-Time Hand Gesture Arcade Game",
      category: "Computer Vision & Gaming",
      tag: "CV",
      badge: "NEW",
      image: "/images/handshooter.png",
      domain: "opencvgame.vercel.app",
      gradient: "from-cyan-600 via-blue-600 to-indigo-800",
      glow: "group-hover:shadow-cyan-500/25",
      accentText: "text-cyan-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m-9-9h3m12 0h3" />
        </svg>
      ),
      description: "A browser-based arcade shooter controlled through real-time hand gestures using MediaPipe Hand Landmarker, processing 21 hand landmarks directly on the client at 60 FPS.",
      problem: "Traditional web arcade games rely on mouse/keyboard inputs. Hand Shooter eliminates physical controllers, transforming webcam video into responsive zero-latency hand tracking directly in the browser while preserving client-side privacy.",
      highlights: [
        "Built a browser-based arcade shooter controlled through real-time hand gestures using MediaPipe Hand Landmarker, processing 21 hand landmarks directly on the client.",
        "Implemented index-finger aiming and thumb–index pinch detection with adaptive EMA smoothing and hysteresis to provide stable, responsive gesture controls.",
        "Developed a 60 FPS HTML5 Canvas game engine with drone spawning, multiple enemy types, progressive difficulty, collision detection, health/lives, scoring, particles, and firing effects.",
        "Added an A* solver for a 3×3 sliding puzzle using Manhattan distance and linear-conflict heuristics, along with solvability detection and difficulty-based board generation.",
        "Designed the application with mouse, keyboard, touch, and gesture fallbacks, responsive layouts, fullscreen mode, live camera visualization, and client-side processing for privacy.",
        "Added automated game/solver tests and deployed the production application on Vercel.",
      ],
      tech: ["Next.js", "TypeScript", "MediaPipe", "HTML5 Canvas", "Tailwind CSS", "A* Algorithm"],
      github: "https://github.com/swamyrayudu/opencvgame",
      live: "https://opencvgame.vercel.app/",
    },
    {
      id: "c4gthub",
      title: "C4GT KIET HUB",
      subtitle: "Learning & Performance Management System",
      category: "EdTech & Cohort Management",
      tag: "LMS",
      badge: "FEATURED",
      image: "/images/c4gthub.png",
      domain: "c4gt-team6.vercel.app",
      gradient: "from-teal-600 via-emerald-600 to-cyan-800",
      glow: "group-hover:shadow-emerald-500/25",
      accentText: "text-emerald-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "A full-stack Learning & Performance Management System for managing student cohorts, squads, technical resources, project tasks, submissions, and progress across Admin, Team Lead, and Student roles.",
      problem: "Coordinating multi-tier open-source student teams across fragmented channels made milestone deliverables and pull-request verification difficult to manage. C4GT KIET HUB centralizes cohorts, assignments, and resource delivery into a unified portal.",
      highlights: [
        "Developed a full-stack Learning & Performance Management System for managing student cohorts, teams, learning resources, tasks, submissions, and progress across Admin, Team Lead, and Student roles.",
        "Implemented secure JWT-based authentication and role-based access control (RBAC) with protected routes, HTTP-only cookie support, password hashing using bcrypt, and account-status validation.",
        "Built REST APIs with Node.js and Express.js for team management, task assignment, resource management, student activities, notifications, and performance tracking using MongoDB/Mongoose.",
        "Designed database schemas and indexes for users, teams, tasks, resources, assignments, and progress tracking, including compound indexes for efficient batch/team queries.",
        "Integrated Cloudinary-based file/resource uploads and email services for platform notifications and user communication.",
        "Developed responsive role-specific dashboards in React + Vite + Tailwind CSS, including task workflows, resource access, submissions, team administration, and progress views.",
      ],
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT", "Cloudinary"],
      github: "https://github.com/PalaniRahulDravid/C4GT-KIET-HUB",
      live: "https://c4gt-team6.vercel.app/",
    },
    {
      id: "localHunt",
      title: "Local Hunt",
      subtitle: "Hyperlocal Commerce Platform (C4GT)",
      category: "Hyperlocal Discovery",
      tag: "GEO",
      image: "/images/localhunt.png",
      domain: "localhunt.c4gt.org",
      gradient: "from-amber-500 via-orange-600 to-red-600",
      glow: "group-hover:shadow-orange-500/25",
      accentText: "text-orange-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: "A collaborative full-stack platform connecting offline retail shops with local consumers through location-based search, dynamic store inventories, and direct ordering.",
      problem: "Offline small businesses were invisible online — Local Hunt bridges the gap with digital product catalogs, geolocation-based discoverability, and streamlined order coordination.",
      highlights: [
        "Contributed to Local Hunt, a collaborative full-stack project, through feature development, API integration, and testing.",
        "Built application features using Next.js, TypeScript, REST APIs, and Supabase.",
        "Designed PostgreSQL relational schemas and built optimized RESTful endpoints for store inventory search.",
      ],
      tech: ["Next.js", "TypeScript", "REST APIs", "Supabase", "PostgreSQL", "Tailwind CSS"],
      github: "https://github.com/swamyrayudu",
    },
    {
      id: "ecommerce",
      title: "eCommerce",
      subtitle: "Full-Stack MERN Storefront",
      category: "E-Commerce",
      tag: "MERN",
      image: "/images/ecom.png.png",
      domain: "ecom-mern-3.onrender.com",
      gradient: "from-emerald-600 via-teal-600 to-cyan-700",
      glow: "group-hover:shadow-emerald-500/25",
      accentText: "text-emerald-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      description: "Full-featured online store with user authentication, catalog management, shopping cart state, and payment integration.",
      problem: "Engineered a production-ready MERN stack commerce solution with secure JWT authentication, real-time cart persistence, and order workflows.",
      highlights: [
        "Built comprehensive REST APIs using Express.js and MongoDB for multi-category catalog search and order state.",
        "Integrated JWT-based authentication workflows with token refresh and route middleware protection.",
        "Implemented responsive shopping cart and checkout UI with instant state synchronization.",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "JWT", "Tailwind CSS"],
      github: "https://github.com/swamyrayudu/Ecom_Mern",
      live: "https://ecom-mern-3.onrender.com/auth/login",
    },
    {
      id: "chatbot",
      title: "AI Chat Bot",
      subtitle: "Conversational AI Assistant",
      category: "Generative AI",
      tag: "LLM",
      image: "/images/ai.png",
      domain: "chat-bot-ai.vercel.app",
      gradient: "from-purple-600 via-fuchsia-600 to-pink-600",
      glow: "group-hover:shadow-purple-500/25",
      accentText: "text-purple-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      description: "Interactive AI-powered conversational assistant for answering technical queries and providing real-time natural language assistance.",
      problem: "Built an intuitive conversational AI application to explore streaming LLM responses, prompt chaining, and real-time chat UX patterns.",
      highlights: [
        "Constructed streaming conversational UI with markdown code syntax highlighting.",
        "Implemented prompt design and context window handling with OpenAI APIs.",
        "Engineered responsive chat layouts with session history and instant feedback.",
      ],
      tech: ["React.js", "OpenAI API", "Node.js", "CSS3"],
      github: "https://github.com/swamyrayudu/chat_bot_react",
      live: "https://chat-bot-ai-git-main-swamyrayudus-projects.vercel.app/",
    },
    {
      id: "movie",
      title: "Movie Revenue",
      subtitle: "ML Regression Model",
      category: "Machine Learning",
      tag: "ML",
      image: "/images/movie.png",
      domain: "movie-prediction.github.io",
      gradient: "from-rose-600 via-red-600 to-amber-700",
      glow: "group-hover:shadow-rose-500/25",
      accentText: "text-rose-400",
      icon: (
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M3 4h18v16H3V4zm4 0v16m10-16v16" />
        </svg>
      ),
      description: "Predicts global theatrical box office revenue using supervised machine learning algorithms trained on movie metadata and historical box-office returns.",
      problem: "Applied feature engineering, data imputation, and regression modeling to predict movie financial success from pre-release features.",
      highlights: [
        "Cleaned and engineered predictive signals from historical box office datasets.",
        "Evaluated multivariate regression models with RMSE and R2 scoring metrics.",
        "Built visualization dashboards for correlation matrix and feature importance.",
      ],
      tech: ["Python", "Pandas", "Scikit-learn", "NumPy"],
      github: "https://github.com/swamyrayudu/Movie-Revenue-prediction",
    },
  ];

  const experiences: Experience[] = [
    {
      role: "Software Engineer Intern",
      company: "Innov2Grow",
      duration: "Dec 2025 – Mar 2026",
      location: "Bengaluru, Karnataka (Remote)",
      type: "Internship",
      responsibilities: [
        "Developed client-facing web applications using Next.js, React.js, Node.js, Express.js, PostgreSQL, and Supabase.",
        "Designed and integrated RESTful APIs, authentication workflows, and database operations using Node.js and Express.js.",
        "Built reusable frontend components and integrated backend services to support application features.",
        "Implemented Redis caching, API rate limiting, and a message queue-based notification system to improve backend performance and asynchronous processing.",
      ],
      tech: ["Next.js", "React.js", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Redis", "Message Queues", "Rate Limiting"],
    },
    {
      role: "Full-Stack Developer",
      company: "C4GT",
      duration: "Aug 2025 – Present",
      location: "Collaborative / Remote",
      type: "Contributor",
      responsibilities: [
        "Contributed to Local Hunt, a collaborative full-stack project, through feature development, API integration, and testing.",
        "Built application features using Next.js, TypeScript, REST APIs, and Supabase.",
        "Collaborated with open-source contributors on code reviews, database schema design, and API endpoint performance.",
      ],
      tech: ["Next.js", "TypeScript", "REST APIs", "Supabase", "PostgreSQL"],
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
          <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-1.5">
              <div className="traffic-light bg-red-400 dark:bg-red-500" />
              <div className="traffic-light bg-yellow-400 dark:bg-yellow-500" />
              <div className="traffic-light bg-green-400 dark:bg-green-500" />
            </div>

            <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
              ~/swamy/workspace
            </span>

            <div className="flex items-center gap-2">
              {activeTab === "projects" && !selectedProject && (
                <div className="flex items-center bg-secondary/80 border border-border/60 rounded-md p-0.5">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1 rounded text-xs transition-colors ${
                      viewMode === "grid"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="Grid Showcase View"
                    aria-label="Grid View"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1 rounded text-xs transition-colors ${
                      viewMode === "list"
                        ? "bg-foreground text-background shadow-xs"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    title="List Table View"
                    aria-label="List View"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              )}
              <div className="flex items-center gap-1.5 pl-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-mono text-green-600 dark:text-green-400">Live</span>
              </div>
            </div>
          </div>

          <div className="flex min-h-[540px]">
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

              {activeTab === "projects" && (
                <div className="mt-6 pt-6 border-t border-border/60">
                  <p className="text-[11px] font-mono text-muted-foreground tracking-widest uppercase mb-2 px-1">
                    DEPLOYMENTS
                  </p>
                  <div className="space-y-1.5 text-xs text-muted-foreground px-1">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{projects.length} Active Sites</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span>Vercel & Render</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Main Panel */}
            <div className="flex-1 p-5 sm:p-6 overflow-auto ide-panel">
              <AnimatePresence mode="wait">
                {activeTab === "projects" && !selectedProject && viewMode === "grid" && (
                  <motion.div
                    key="projects-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  >
                    {projects.map((project) => (
                      <button
                        key={project.id}
                        onClick={() => setSelectedProject(project)}
                        className="flex flex-col text-left rounded-2xl bg-secondary/20 hover:bg-secondary/40 border border-border/70 hover:border-foreground/30 transition-all duration-300 group overflow-hidden shadow-xs hover:shadow-lg active:scale-[0.98]"
                      >
                        {/* macOS Browser Mockup Card Header */}
                        <div className="w-full bg-secondary/60 border-b border-border/60 px-3 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-red-400/80" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
                            <div className="w-2 h-2 rounded-full bg-green-400/80" />
                          </div>
                          <span className="text-[10px] font-mono text-muted-foreground truncate max-w-[140px]">
                            {project.domain}
                          </span>
                          <span className="text-[8px] font-mono font-bold px-1.5 py-0.5 rounded bg-secondary text-muted-foreground border border-border/60">
                            {project.tag}
                          </span>
                        </div>

                        {/* Real Landing Page Photo Frame */}
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-background/50 border-b border-border/40">
                          <img
                            src={project.image}
                            alt={`${project.title} landing page`}
                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />

                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                            <span className="text-xs font-mono font-medium text-foreground bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border shadow-sm flex items-center gap-1.5">
                              View Project →
                            </span>
                          </div>

                          {/* Status Badge */}
                          {project.badge && (
                            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[9px] font-mono font-bold bg-background/90 backdrop-blur-sm text-foreground border border-border/80 rounded-full shadow-sm flex items-center gap-1">
                              <span
                                className={`w-1.5 h-1.5 rounded-full ${
                                  project.badge === "NEW"
                                    ? "bg-emerald-500 animate-pulse"
                                    : "bg-blue-500"
                                }`}
                              />
                              {project.badge}
                            </span>
                          )}
                        </div>

                        {/* Card Info Footer */}
                        <div className="p-3.5 flex flex-col gap-1.5 flex-1 justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white flex-shrink-0 shadow-xs ring-1 ring-white/20`}>
                                <div className="scale-75">{project.icon}</div>
                              </div>
                              <h3 className="text-sm font-bold text-foreground tracking-tight group-hover:text-foreground">
                                {project.title}
                              </h3>
                            </div>
                            <p className="text-xs text-muted-foreground line-clamp-1 mt-1 pl-8">
                              {project.subtitle}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-1 pt-1 pl-8">
                            {project.tech.slice(0, 3).map((t) => (
                              <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-secondary border border-border/50 rounded text-foreground/80">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}

                {activeTab === "projects" && !selectedProject && viewMode === "list" && (
                  <motion.div
                    key="projects-list"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-x-auto"
                  >
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="border-b border-border/60 text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                          <th className="pb-2.5 font-medium">Application Preview</th>
                          <th className="pb-2.5 font-medium hidden sm:table-cell">Category</th>
                          <th className="pb-2.5 font-medium hidden md:table-cell">Key Tech</th>
                          <th className="pb-2.5 font-medium text-right">Action</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/40">
                        {projects.map((project) => (
                          <tr
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className="group hover:bg-secondary/40 transition-colors cursor-pointer"
                          >
                            <td className="py-3 pr-3">
                              <div className="flex items-center gap-3">
                                {/* Screenshot preview thumbnail */}
                                <div className="w-16 h-10 rounded-lg overflow-hidden border border-border bg-secondary flex-shrink-0 relative group-hover:border-foreground/40 transition-colors">
                                  <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover object-top"
                                    loading="lazy"
                                  />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-foreground group-hover:underline">
                                      {project.title}
                                    </span>
                                    {project.badge && (
                                      <span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-secondary border border-border rounded text-foreground">
                                        {project.badge}
                                      </span>
                                    )}
                                  </div>
                                  <span className="text-xs text-muted-foreground line-clamp-1 font-mono">
                                    {project.domain}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="py-3 px-2 text-xs text-muted-foreground hidden sm:table-cell">
                              {project.category}
                            </td>
                            <td className="py-3 px-2 hidden md:table-cell">
                              <div className="flex flex-wrap gap-1">
                                {project.tech.slice(0, 3).map((t) => (
                                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-secondary/80 border border-border/50 rounded-md text-foreground/80">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="py-3 pl-2 text-right">
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedProject(project);
                                }}
                                className="text-xs font-mono px-3 py-1 bg-foreground text-background rounded-md font-medium hover:opacity-85 transition-opacity"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                      className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground mb-4 transition-colors"
                    >
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to projects
                    </button>

                    {/* Prominent Landing Page Browser Window Preview */}
                    <div className="rounded-xl overflow-hidden border border-border bg-secondary/30 shadow-md mb-6">
                      <div className="px-3.5 py-2.5 bg-secondary/80 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                        </div>
                        {selectedProject.live ? (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-0.5 rounded-md bg-background border border-border text-[11px] font-mono text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors shadow-2xs"
                          >
                            <svg className="w-3 h-3 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            {selectedProject.domain}
                            <span className="text-[10px] opacity-60">↗</span>
                          </a>
                        ) : (
                          <span className="text-[11px] font-mono text-muted-foreground">{selectedProject.domain}</span>
                        )}
                        <span className="text-[10px] font-mono text-muted-foreground">{selectedProject.tag}</span>
                      </div>

                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-background">
                        <img
                          src={selectedProject.image}
                          alt={`${selectedProject.title} landing page screenshot`}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center text-white ring-1 ring-white/20 shadow-md flex-shrink-0 relative`}
                      >
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
                        <div className="mt-0.5">{selectedProject.icon}</div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-xl font-bold text-foreground">{selectedProject.title}</h3>
                          {selectedProject.badge && (
                            <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-foreground text-background rounded-full">
                              {selectedProject.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5 font-mono">{selectedProject.subtitle}</p>
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

                      {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                        <div>
                          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">KEY HIGHLIGHTS & ARCHITECTURE</p>
                          <ul className="space-y-2">
                            {selectedProject.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm text-foreground/85 leading-relaxed">
                                <span className="text-foreground/40 mt-1 flex-shrink-0">→</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

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
