"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("portfolio-likes");
    const liked = localStorage.getItem("portfolio-has-liked");
    if (stored) setLikes(parseInt(stored));
    if (liked === "true") setHasLiked(true);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newCount = likes + 1;
      setLikes(newCount);
      setHasLiked(true);
      localStorage.setItem("portfolio-likes", String(newCount));
      localStorage.setItem("portfolio-has-liked", "true");
    }
  };

  const categories = [
    { icon: "⌨️", label: "DEVELOPMENT" },
    { icon: "⚙️", label: "SYSTEMS" },
    { icon: "🤖", label: "AI PRODUCTS" },
    { icon: "🏗️", label: "ARCHITECTURE" },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen grid-background flex items-center justify-center overflow-hidden px-4 pt-20 pb-12"
    >

      <div className="relative w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_220px] gap-6 items-center">

          {/* ── Left column: Profile card + code card ── */}
          <div className="hidden lg:flex flex-col gap-4 animate-float">
            {/* Profile card */}
            <div className="widget-card p-4 flex flex-col items-start gap-3">
              <div className="w-full aspect-[4/5] bg-foreground rounded-xl overflow-hidden relative flex items-end">
                <div className="absolute top-3 left-3 w-10 h-10 bg-background rounded-lg flex items-center justify-center">
                  <span className="font-bold text-foreground text-sm font-mono">RS</span>
                </div>
                <img
                  src="/images/IMG_20250626_072109.jpg"
                  alt="RVV Swamy"
                  className="w-full h-full object-cover object-top opacity-90"
                />
              </div>
              <p className="text-xs text-muted-foreground italic leading-relaxed">
                Love exploring, building, and shipping things people use.
              </p>
            </div>

            {/* Code block */}
            <div className="code-widget">
              <div className="space-y-0.5">
                <p><span className="kw">async</span> <span className="fn">function</span> <span className="var">buildCareer</span>() {"{"}</p>
                <p className="pl-3"><span className="kw">const</span> <span className="var">idea</span> = <span className="kw">await</span> <span className="fn">learn</span>();</p>
                <p className="pl-3"><span className="kw">const</span> <span className="var">product</span> = <span className="kw">await</span> <span className="fn">build</span>(<span className="var">idea</span>);</p>
                <p className="pl-3"><span className="kw">await</span> <span className="fn">ship</span>(<span className="var">product</span>);</p>
                <p className="pl-3"><span className="kw">return</span> <span className="var">growth</span>;</p>
                <p>{"}"}</p>
              </div>
            </div>
          </div>

          {/* ── Center: Main content ── */}
          <div className="flex flex-col items-center text-center gap-5">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-sm tracking-widest font-mono"
            >
              hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="serif-title text-6xl sm:text-7xl md:text-8xl text-foreground leading-none tracking-tight"
            >
              rvv swamy
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground font-mono text-sm tracking-wide"
            >
              [ full-stack developer · MERN expert · AI Engineer ]
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-foreground/80 text-base sm:text-lg max-w-xl leading-relaxed font-medium"
            >
              Full-stack developer building production systems for real users — clean code, scalable
              architectures, and AI-powered products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-muted-foreground text-sm max-w-lg leading-relaxed"
            >
              TypeScript, Next.js, Node.js, PostgreSQL, MongoDB, and AI integrations
            </motion.p>

            {/* Category pills */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-3 mt-1"
            >
              {categories.map((cat) => (
                <div
                  key={cat.label}
                  className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground tracking-widest"
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 mt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold hover:opacity-80 active:scale-95 transition-all"
              >
                View Work
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-6 py-2.5 border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary active:scale-95 transition-all"
              >
                Contact
              </a>
            </motion.div>

            {/* Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="marquee-wrapper w-full max-w-sm mt-4 border-t border-b border-border/50 py-2"
            >
              <div className="marquee-content text-xs font-mono text-muted-foreground/60 tracking-widest uppercase">
                KEEP BUILDING. &nbsp; KEEP LEVELING UP. &nbsp; KEEP BUILDING. &nbsp; KEEP LEVELING UP. &nbsp; KEEP BUILDING. &nbsp; KEEP LEVELING UP. &nbsp;
              </div>
            </motion.div>
          </div>

          {/* ── Right column: Like card + stats card ── */}
          <div className="hidden lg:flex flex-col gap-4 animate-float-delay">
            {/* Like / Hola card */}
            <div className="widget-card p-5">
              <p className="font-semibold text-foreground text-base mb-1">
                hola 👋
              </p>
              <p className="text-muted-foreground text-xs mb-4">
                impressed? tap once — it counts
              </p>
              <div className="flex items-center justify-between">
                <button
                  onClick={handleLike}
                  className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all active:scale-90 ${
                    hasLiked
                      ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-800"
                      : "border-border hover:border-red-300 hover:bg-red-50 dark:hover:bg-red-950/20"
                  }`}
                  aria-label="Like"
                >
                  <svg
                    className={`w-5 h-5 transition-colors ${hasLiked ? "fill-red-500 stroke-red-500" : "fill-none stroke-foreground"}`}
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
                {mounted && (
                  <span className="text-2xl font-bold text-foreground font-mono">
                    {likes} <span className="text-sm font-normal text-muted-foreground">hearts</span>
                  </span>
                )}
              </div>
            </div>

            {/* GitHub/LinkedIn stats */}
            <div className="widget-card p-4">
              <p className="text-xs font-mono text-muted-foreground mb-3 uppercase tracking-widest">GitHub</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Repositories</span>
                  <span className="text-sm font-bold text-foreground font-mono">20+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Commits (2025)</span>
                  <span className="text-sm font-bold text-foreground font-mono">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">LeetCode</span>
                  <span className="text-sm font-bold text-foreground font-mono">200+</span>
                </div>
              </div>
            </div>

            {/* Resume quick link */}
            <a
              href="https://drive.google.com/file/d/1BSzGPx1PAQdnfbw-MrGcaHuM1_NU6Cvr/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="widget-card p-4 flex items-center gap-3 hover:bg-secondary transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg bg-foreground flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-background" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground group-hover:underline">Resume</p>
                <p className="text-xs text-muted-foreground">View / Download</p>
              </div>
              <svg className="w-4 h-4 text-muted-foreground ml-auto group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
