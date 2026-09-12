"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const months = [
  {
    id: "jun2026",
    label: "Jun 2026",
    entries: [
      {
        num: "#01",
        challenge: "Portfolio had no clear narrative or visual identity",
        solution: "Rebuilt from scratch with a developer-centric design inspired by avinasha.vercel.app",
        outcome: "Launched redesigned portfolio with bento hero, IDE workspace, and terminal build log",
      },
      {
        num: "#02",
        challenge: "TalentPath needed a better code editor UX",
        solution: "Integrated Monaco Editor with custom themes and language support",
        outcome: "Users can now code, run, and get AI feedback in a single interface",
      },
      {
        num: "#03",
        challenge: "PostgreSQL queries slowing down on large datasets in LocalHunt",
        solution: "Added composite indexes on frequently joined columns + pagination",
        outcome: "Query time dropped from ~400ms to under 50ms on 10k+ row tables",
      },
    ],
  },
  {
    id: "may2026",
    label: "May 2026",
    entries: [
      {
        num: "#01",
        challenge: "Auth state wasn't persisting across page reloads in LocalHunt",
        solution: "Replaced JWT local storage with BetterAuth session cookies + middleware",
        outcome: "Secure, persistent auth across all routes — no more random logouts",
      },
      {
        num: "#02",
        challenge: "TalentPath needed real-time contest leaderboard updates",
        solution: "Implemented Server-Sent Events (SSE) for live score streaming",
        outcome: "Leaderboard updates in under 1s without WebSocket complexity",
      },
      {
        num: "#03",
        challenge: "Innkaro app had slow initial page loads (8+ seconds)",
        solution: "Added Next.js dynamic imports, image optimization, and code splitting",
        outcome: "LCP dropped to under 2.5 seconds — passed Core Web Vitals",
      },
    ],
  },
  {
    id: "apr2026",
    label: "Apr 2026",
    entries: [
      {
        num: "#01",
        challenge: "eCommerce cart state was lost on page refresh",
        solution: "Implemented Redux Persist with localStorage for cart state hydration",
        outcome: "Cart persists across sessions — 30% improvement in checkout completion",
      },
      {
        num: "#02",
        challenge: "Movie revenue ML model had poor accuracy (62% R²)",
        solution: "Feature engineering on release date, studio history, and genre combos",
        outcome: "Improved model accuracy to 79% R² on the test dataset",
      },
      {
        num: "#03",
        challenge: "API rate limiting needed for the AI chatbot",
        solution: "Added token bucket rate limiting in Express middleware",
        outcome: "Protected OpenAI API budget while keeping UX smooth",
      },
    ],
  },
  {
    id: "mar2026",
    label: "Mar 2026",
    entries: [
      {
        num: "#01",
        challenge: "LocalHunt location search returned irrelevant stores",
        solution: "Switched from text search to PostGIS distance queries with haversine formula",
        outcome: "Stores within 2km returned accurately in under 100ms",
      },
      {
        num: "#02",
        challenge: "React app re-rendering too often causing jank in lists",
        solution: "Added React.memo, useMemo, and virtualization for long lists",
        outcome: "FPS improved from ~24 to ~60 on product listing pages",
      },
    ],
  },
];

const BuildLogSection = () => {
  const [activeMonth, setActiveMonth] = useState(months[0].id);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const currentMonth = months.find((m) => m.id === activeMonth)!;

  return (
    <section
      ref={ref}
      id="buildlog"
      className="grid-background py-20 sm:py-28 px-4 sm:px-8 border-t border-border/50 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-2">
            NOTES
          </p>
          <h2 className="serif-title text-5xl sm:text-6xl text-foreground leading-none mb-2">
            Build Log
          </h2>
          <p className="text-muted-foreground text-sm font-mono">
            Engineering journal — challenge → solution → outcome.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="macos-window"
        >
          {/* Title Bar */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-secondary/30">
            <div className="flex items-center gap-1.5">
              <div className="traffic-light bg-red-400 dark:bg-red-500" />
              <div className="traffic-light bg-yellow-400 dark:bg-yellow-500" />
              <div className="traffic-light bg-green-400 dark:bg-green-500" />
            </div>
            <span className="text-xs font-mono text-muted-foreground mx-auto">
              ~/notes/build.log
            </span>
          </div>

          <div className="flex min-h-[420px]">
            {/* Month Sidebar */}
            <div className="w-36 sm:w-44 border-r border-border p-4 flex-shrink-0 bg-secondary/10">
              <div className="space-y-0.5">
                {months.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setActiveMonth(m.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm font-mono transition-all ${
                      activeMonth === m.id
                        ? "bg-foreground text-background font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Log Content */}
            <div className="flex-1 p-6 font-mono text-sm overflow-auto ide-panel">
              <p className="text-muted-foreground/60 mb-5 text-xs uppercase tracking-widest">
                $ TAIL -F BUILD.LOG — {currentMonth.label.toUpperCase()}
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMonth}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {currentMonth.entries.map((entry) => (
                    <div key={entry.num} className="space-y-0.5">
                      <p className="text-muted-foreground/70">{entry.num}</p>
                      <p>
                        <span className="text-muted-foreground">challenge: </span>
                        <span className="text-foreground/80">{entry.challenge}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">solution: </span>
                        <span className="text-foreground/80">{entry.solution}</span>
                      </p>
                      <p>
                        <span className="text-green-500 dark:text-green-400">→ </span>
                        <span className="text-green-700 dark:text-green-300 font-medium">{entry.outcome}</span>
                      </p>
                    </div>
                  ))}

                  {/* Blinking cursor */}
                  <div className="flex items-center gap-1 text-muted-foreground/40 pt-2">
                    <span>$</span>
                    <span className="animate-blink">▌</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BuildLogSection;
