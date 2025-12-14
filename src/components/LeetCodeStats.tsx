"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchLeetCodeProfile } from "../actions/leetcode";
import { useColorTheme } from "@/contexts/ColorThemeContext";

interface LeetCodeData {
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  acceptanceRate: number;
  contributionPoints: number;
  reputation: number;
  username: string;
  avatar: string;
  realName: string;
  countryName: string;
  skillTags: string[];
  badges: Array<{
    displayName: string;
    icon: string;
  }>;
  recentSubmissions: Array<{
    title: string;
    timestamp: string;
    statusDisplay: string;
    lang: string;
  }>;
}

export default function LeetCodeStats({ username }: { username: string }) {
  const { colorTheme } = useColorTheme();
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Dynamic color mapping based on theme
  const themeColors: Record<string, { easy: string; medium: string; hard: string; easyBg: string; mediumBg: string; hardBg: string }> = {
    emerald: { easy: "text-emerald-600", medium: "text-yellow-500", hard: "text-red-500", easyBg: "bg-emerald-600", mediumBg: "bg-yellow-500", hardBg: "bg-red-500" },
    blue: { easy: "text-blue-500", medium: "text-cyan-500", hard: "text-indigo-600", easyBg: "bg-blue-500", mediumBg: "bg-cyan-500", hardBg: "bg-indigo-600" },
    purple: { easy: "text-purple-500", medium: "text-fuchsia-500", hard: "text-violet-600", easyBg: "bg-purple-500", mediumBg: "bg-fuchsia-500", hardBg: "bg-violet-600" },
    orange: { easy: "text-orange-400", medium: "text-amber-500", hard: "text-orange-600", easyBg: "bg-orange-400", mediumBg: "bg-amber-500", hardBg: "bg-orange-600" },
    red: { easy: "text-rose-400", medium: "text-red-500", hard: "text-red-700", easyBg: "bg-rose-400", mediumBg: "bg-red-500", hardBg: "bg-red-700" },
    pink: { easy: "text-pink-400", medium: "text-pink-500", hard: "text-pink-600", easyBg: "bg-pink-400", mediumBg: "bg-pink-500", hardBg: "bg-pink-600" },
    cyan: { easy: "text-cyan-400", medium: "text-teal-500", hard: "text-cyan-600", easyBg: "bg-cyan-400", mediumBg: "bg-teal-500", hardBg: "bg-cyan-600" },
    yellow: { easy: "text-lime-400", medium: "text-yellow-500", hard: "text-amber-600", easyBg: "bg-lime-400", mediumBg: "bg-yellow-500", hardBg: "bg-amber-600" },
  };

  const colors = themeColors[colorTheme] || themeColors.emerald;

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true);
        setError(null);
        const result = await fetchLeetCodeProfile(username);
        if (result) {
          setData(result);
        } else {
          setError("Failed to load LeetCode stats");
        }
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mb-4"></div>
        <p className="text-muted-foreground">Loading LeetCode stats...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-8 bg-card rounded-xl border border-border">
        <p className="text-destructive mb-4">{error || "Failed to load LeetCode stats"}</p>
        <p className="text-muted-foreground text-sm">
          Please check your username or try again later
        </p>
      </div>
    );
  }

  const easyPercentage = Math.min((data.easySolved / 800) * 100, 100);
  const mediumPercentage = Math.min((data.mediumSolved / 1600) * 100, 100);
  const hardPercentage = Math.min((data.hardSolved / 600) * 100, 100);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full max-w-6xl mx-auto p-2 sm:p-4"
    >
      {/* Header Section */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-3 sm:gap-4 mb-4 bg-card rounded-xl p-4 border border-border"
      >
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-3 border-primary flex-shrink-0">
            <img
              src={data.avatar || "/default-avatar.png"}
              alt={data.username}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center gap-2 justify-center sm:justify-start">
              {data.username}
              <a
                href={`https://leetcode.com/u/${data.username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {data.realName && `${data.realName} • `}
              Rank: <span className="text-primary font-semibold">#{data.ranking.toLocaleString()}</span>
            </p>
          </div>
        </div>
        
        {/* Badges on the right */}
        {data.badges && data.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end max-w-xs">
            {data.badges.slice(0, 3).map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-1.5 bg-secondary/50 rounded-lg p-1.5 hover:bg-secondary transition-colors"
                title={badge.displayName}
              >
                <img
                  src={badge.icon}
                  alt={badge.displayName}
                  className="w-5 h-5"
                />
                <span className="text-card-foreground text-xs hidden sm:inline">
                  {badge.displayName}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Stats Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-4">
        {[
          {
            label: "Total Solved",
            value: data.totalSolved,
            color: "text-primary",
            bg: "bg-primary/10",
          },
          {
            label: "Easy",
            value: data.easySolved,
            color: colors.easy,
            bg: `${colors.easyBg}/10`,
          },
          {
            label: "Medium",
            value: data.mediumSolved,
            color: colors.medium,
            bg: `${colors.mediumBg}/10`,
          },
          {
            label: "Hard",
            value: data.hardSolved,
            color: colors.hard,
            bg: `${colors.hardBg}/10`,
          },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className={`${stat.bg} rounded-lg p-3 sm:p-4 border border-border`}
          >
            <p className="text-muted-foreground text-xs mb-1">{stat.label}</p>
            <p className={`text-xl sm:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Progress Bars */}
      <motion.div variants={itemVariants} className="space-y-3 mb-4">
        {[
          {
            label: "Easy",
            solved: data.easySolved,
            total: 800,
            color: colors.easyBg,
            percentage: easyPercentage,
          },
          {
            label: "Medium",
            solved: data.mediumSolved,
            total: 1600,
            color: colors.mediumBg,
            percentage: mediumPercentage,
          },
          {
            label: "Hard",
            solved: data.hardSolved,
            total: 600,
            color: colors.hardBg,
            percentage: hardPercentage,
          },
        ].map((item) => (
          <div
            key={item.label}
            className="bg-card rounded-lg p-3 border border-border"
          >
            <div className="flex justify-between mb-1.5">
              <span className="text-card-foreground font-medium text-xs sm:text-sm">
                {item.label}
              </span>
              <span className="text-muted-foreground text-xs sm:text-sm">
                {item.solved} / {item.total}
              </span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${item.percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
                className={`h-full ${item.color} rounded-full`}
              />
            </div>
          </div>
        ))}
      </motion.div>

      {/* Recent Submissions */}
      {data.recentSubmissions && data.recentSubmissions.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-xl p-3 sm:p-4 border border-border"
        >
          <h4 className="text-base sm:text-lg font-bold text-foreground mb-3">
            Recent Submissions
          </h4>
          <div className="space-y-2">
            {data.recentSubmissions.slice(0, 5).map((submission, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
              >
                <div className="flex-1">
                  <p className="text-foreground font-medium text-xs sm:text-sm">
                    {submission.title}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{submission.lang}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold self-start sm:self-auto ${
                    submission.statusDisplay === "Accepted"
                      ? `${colors.easyBg}/20 ${colors.easy}`
                      : "bg-red-500/20 text-red-500"
                  }`}
                >
                  {submission.statusDisplay}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Badges */}
      {data.badges && data.badges.length > 0 && (
        <motion.div
          variants={itemVariants}
          className="bg-card rounded-xl p-3 sm:p-4 border border-border mt-4"
        >
          <h4 className="text-base sm:text-lg font-bold text-foreground mb-3">Badges</h4>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {data.badges.slice(0, 6).map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-secondary/50 rounded-lg p-2 hover:bg-secondary transition-colors"
              >
                <img
                  src={badge.icon}
                  alt={badge.displayName}
                  className="w-5 h-5 sm:w-6 sm:h-6"
                />
                <span className="text-card-foreground text-xs sm:text-sm">
                  {badge.displayName}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
