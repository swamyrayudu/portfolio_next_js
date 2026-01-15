"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { fetchLeetCodeProfile } from "../actions/leetcode";

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
  submissionCalendar: Record<string, number>;
  totalActiveDays: number;
  streak: number;
}

// LeetCode exact bright colors from the website
const LEETCODE_EASY = "#00b8a3";    // Bright Teal
const LEETCODE_MEDIUM = "#ffc01e";  // Bright Yellow/Orange
const LEETCODE_HARD = "#ff375f";    // Bright Red/Pink
const LEETCODE_BG = "#3e3e3e";      // Gray background

// Multi-segment Donut Chart - Exact LeetCode Style  
const LeetCodeDonutChart = ({
  easy,
  medium,
  hard,
  total,
  size = 180,
}: {
  easy: number;
  medium: number;
  hard: number;
  total: number;
  size?: number;
}) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2 - 5;
  const circumference = 2 * Math.PI * radius;
  
  // Total problems in LeetCode for each difficulty
  const totalEasy = 921;
  const totalMedium = 1982;
  const totalHard = 898;
  const totalProblems = totalEasy + totalMedium + totalHard; // 3801
  
  const totalSolved = easy + medium + hard;
  
  // Each segment length proportional to the SOLVED count (not percentage)
  // This shows how much of the total solved comes from each difficulty
  const easyLength = totalSolved > 0 ? (easy / totalSolved) * circumference * 0.85 : 0;
  const mediumLength = totalSolved > 0 ? (medium / totalSolved) * circumference * 0.85 : 0;
  const hardLength = totalSolved > 0 ? (hard / totalSolved) * circumference * 0.85 : 0;
  
  // Calculate rotation for each segment (starting from top, going clockwise)
  const easyRotation = 0;
  const mediumRotation = (easy / totalSolved) * 360 * 0.85;
  const hardRotation = ((easy + medium) / totalSolved) * 360 * 0.85;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background circle (gray) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={LEETCODE_BG}
          strokeWidth={strokeWidth}
          opacity={0.4}
        />
        
        {/* Easy segment (Teal) */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={LEETCODE_EASY}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${easyLength} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${easyLength} ${circumference}` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        
        {/* Medium segment (Yellow) */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={LEETCODE_MEDIUM}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${mediumLength} ${circumference}`}
          transform={`rotate(${-90 + mediumRotation} ${size / 2} ${size / 2})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${mediumLength} ${circumference}` }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
        
        {/* Hard segment (Red) */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={LEETCODE_HARD}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${hardLength} ${circumference}`}
          transform={`rotate(${-90 + hardRotation} ${size / 2} ${size / 2})`}
          initial={{ strokeDasharray: `0 ${circumference}` }}
          animate={{ strokeDasharray: `${hardLength} ${circumference}` }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <span className="text-3xl font-bold text-foreground">{total}</span>
          <span className="text-base text-muted-foreground">/{totalProblems}</span>
        </motion.div>
        <div className="flex items-center gap-1 mt-1">
          <svg className="w-4 h-4" style={{ color: LEETCODE_EASY }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
          <span className="text-sm text-muted-foreground">Solved</span>
        </div>
      </div>
    </div>
  );
};

// Difficulty Card Component - LeetCode Style
const DifficultyCard = ({
  label,
  solved,
  total,
  color,
  delay = 0,
}: {
  label: string;
  solved: number;
  total: number;
  color: string;
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="bg-muted/50 dark:bg-zinc-900/80 rounded-lg p-4 text-center"
    >
      <p className="text-sm font-medium mb-1" style={{ color }}>
        {label}
      </p>
      <p className="text-lg font-bold text-foreground">
        {solved}<span className="text-muted-foreground font-normal">/{total}</span>
      </p>
    </motion.div>
  );
};

// Submission Heatmap Component - LeetCode Style
const SubmissionHeatmap = ({
  calendar,
  totalActiveDays,
  streak,
  isDark,
}: {
  calendar: Record<string, number>;
  totalActiveDays: number;
  streak: number;
  isDark: boolean;
}) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Get available years from calendar data
  const getAvailableYears = () => {
    const years = new Set<number>();
    const currentYear = new Date().getFullYear();
    years.add(currentYear); // Always include current year
    
    Object.keys(calendar).forEach((timestamp) => {
      const date = new Date(parseInt(timestamp) * 1000);
      years.add(date.getFullYear());
    });
    
    return Array.from(years).sort((a, b) => b - a); // Sort descending
  };
  
  const availableYears = getAvailableYears();
  const [selectedYear, setSelectedYear] = useState<'current' | number>('current');
  const [showYearDropdown, setShowYearDropdown] = useState(false);
  
  // Generate calendar data based on selected year
  const generateCalendarData = () => {
    const today = new Date();
    
    // Get all timestamps from calendar and create a date-based lookup
    const calendarByDate: Record<string, number> = {};
    Object.entries(calendar).forEach(([timestamp, count]) => {
      const date = new Date(parseInt(timestamp) * 1000);
      const dateKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
      calendarByDate[dateKey] = (calendarByDate[dateKey] || 0) + count;
    });
    
    // Generate 12 months of data based on selection
    const monthsData: { 
      month: string; 
      year: number;
      weeks: { date: Date; count: number }[][] 
    }[] = [];
    
    let startDate: Date;
    let endDate: Date;
    
    if (selectedYear === 'current') {
      // Last 12 months from today
      startDate = new Date(today);
      startDate.setMonth(startDate.getMonth() - 11);
      startDate.setDate(1);
      endDate = today;
    } else {
      // Full calendar year
      startDate = new Date(selectedYear, 0, 1);
      endDate = new Date(selectedYear, 11, 31);
    }
    
    const monthCount = selectedYear === 'current' ? 12 : 12;
    
    for (let m = 0; m < monthCount; m++) {
      const monthDate = new Date(startDate);
      monthDate.setMonth(startDate.getMonth() + m);
      
      const monthIndex = monthDate.getMonth();
      const year = monthDate.getFullYear();
      
      // Skip if this month is beyond our end date
      if (selectedYear !== 'current' && year > selectedYear) break;
      
      const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
      
      // Get first day of month and calculate padding
      const firstDay = new Date(year, monthIndex, 1);
      const startDayOfWeek = firstDay.getDay(); // 0 = Sunday
      
      const weeks: { date: Date; count: number }[][] = [];
      let currentWeek: { date: Date; count: number }[] = [];
      
      // Add empty cells for days before the 1st
      for (let i = 0; i < startDayOfWeek; i++) {
        currentWeek.push({ date: new Date(0), count: -1 }); // -1 means empty
      }
      
      // Add all days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, monthIndex, day);
        const dateKey = `${year}-${monthIndex}-${day}`;
        const count = calendarByDate[dateKey] || 0;
        
        currentWeek.push({ date, count });
        
        if (currentWeek.length === 7) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      }
      
      // Add remaining days to last week
      if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
          currentWeek.push({ date: new Date(0), count: -1 }); // -1 means empty
        }
        weeks.push(currentWeek);
      }
      
      monthsData.push({
        month: months[monthIndex],
        year,
        weeks
      });
    }
    
    return { monthsData, calendarByDate };
  };

  const { monthsData, calendarByDate } = generateCalendarData();
  
  // Calculate total submissions for selected period
  const totalSubmissions = monthsData.reduce((sum, month) => {
    return sum + month.weeks.reduce((weekSum, week) => {
      return weekSum + week.reduce((daySum, day) => {
        return daySum + (day.count > 0 ? day.count : 0);
      }, 0);
    }, 0);
  }, 0);
  
  // Get color based on submission count - LeetCode style greens
  const getColorStyle = (count: number): React.CSSProperties => {
    if (count === -1) return { backgroundColor: 'transparent' }; // Empty cell
    
    if (isDark) {
      // Dark mode colors - Pure black base with vibrant greens
      if (count === 0) return { backgroundColor: '#0d1117' }; // Pure dark/black
      if (count <= 1) return { backgroundColor: '#0e4429' }; // Dark green
      if (count <= 3) return { backgroundColor: '#006d32' }; // Medium green
      if (count <= 5) return { backgroundColor: '#26a641' }; // Bright green
      return { backgroundColor: '#39d353' }; // Brightest green
    } else {
      // Light mode colors - LeetCode exact colors
      if (count === 0) return { backgroundColor: '#ebedf0' }; // Light gray
      if (count <= 1) return { backgroundColor: '#9be9a8' }; // Light green
      if (count <= 3) return { backgroundColor: '#40c463' }; // Medium green
      if (count <= 5) return { backgroundColor: '#30a14e' }; // Darker green
      return { backgroundColor: '#216e39' }; // Darkest green
    }
  };

  const [hoveredDay, setHoveredDay] = useState<{ date: Date; count: number; x: number; y: number } | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-6 bg-card dark:bg-black rounded-2xl border border-border dark:border-zinc-800 p-6 shadow-lg"
    >
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">{totalSubmissions}</span>
          <span className="text-muted-foreground">
            submissions in {selectedYear === 'current' ? 'the past one year' : selectedYear}
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <div>
            <span className="text-muted-foreground">Total active days: </span>
            <span className="font-semibold text-foreground">{totalActiveDays}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Max streak: </span>
            <span className="font-semibold text-foreground">{streak}</span>
          </div>
          
          {/* Year Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowYearDropdown(!showYearDropdown)}
              className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium text-foreground border border-border rounded-full bg-transparent hover:border-primary hover:text-primary transition-all duration-300"
            >
              {selectedYear === 'current' ? 'Current' : selectedYear}
              <svg 
                className={`w-4 h-4 transition-transform ${showYearDropdown ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {showYearDropdown && (
              <div className="absolute right-0 top-full mt-1 bg-card dark:bg-black border border-border dark:border-zinc-800 rounded-lg shadow-lg z-10 min-w-[100px] overflow-hidden">
                <button
                  onClick={() => {
                    setSelectedYear('current');
                    setShowYearDropdown(false);
                  }}
                  className={`w-full px-4 py-2 text-left text-sm hover:bg-muted dark:hover:bg-zinc-900 transition-colors ${
                    selectedYear === 'current' ? 'bg-muted dark:bg-zinc-900 font-semibold' : ''
                  }`}
                >
                  Current
                </button>
                {availableYears.map((year) => (
                  <button
                    key={year}
                    onClick={() => {
                      setSelectedYear(year);
                      setShowYearDropdown(false);
                    }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-muted dark:hover:bg-zinc-900 transition-colors ${
                      selectedYear === year ? 'bg-muted dark:bg-zinc-900 font-semibold' : ''
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Heatmap Grid - Month wise */}
      <div className="overflow-x-auto">
        <div className="flex gap-4">
          {monthsData.map((monthData, monthIndex) => (
            <div key={monthIndex} className="flex flex-col items-center min-w-fit">
              {/* Month label */}
              <span className="text-xs text-muted-foreground mb-2">{monthData.month}</span>
              
              {/* Weeks grid for this month */}
              <div className="flex gap-[3px]">
                {monthData.weeks.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-[3px]">
                    {week.map((day, dayIndex) => (
                      <div
                        key={dayIndex}
                        className={`w-[11px] h-[11px] rounded-sm ${day.count >= 0 ? 'cursor-pointer hover:ring-1 hover:ring-black/30 dark:hover:ring-white/50' : ''} transition-all`}
                        style={getColorStyle(day.count)}
                        onMouseEnter={(e) => {
                          if (day.count >= 0) {
                            const rect = e.currentTarget.getBoundingClientRect();
                            setHoveredDay({ 
                              date: day.date, 
                              count: day.count, 
                              x: rect.left + rect.width / 2,
                              y: rect.top - 10
                            });
                          }
                        }}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div 
          className="fixed z-50 px-3 py-2 text-sm bg-zinc-800 text-white rounded-lg shadow-lg pointer-events-none"
          style={{
            left: hoveredDay.x,
            top: hoveredDay.y,
            transform: 'translate(-50%, -100%)',
          }}
        >
          {hoveredDay.count} submission{hoveredDay.count !== 1 ? 's' : ''} on {hoveredDay.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </div>
      )}
    </motion.div>
  );
};

export default function LeetCodeStats({ username }: { username: string }) {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

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
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-muted" />
          <div 
            className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin"
            style={{ borderColor: LEETCODE_EASY, borderTopColor: "transparent" }}
          />
        </div>
        <p className="text-muted-foreground mt-4">Loading LeetCode stats...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-12 bg-card rounded-2xl border border-border">
        <div className="text-5xl mb-4">😕</div>
        <p className="text-destructive text-lg mb-2">{error || "Failed to load LeetCode stats"}</p>
        <p className="text-muted-foreground text-sm">
          Please check your username or try again later
        </p>
      </div>
    );
  }

  const easyTotal = 921;
  const mediumTotal = 1982;
  const hardTotal = 898;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-6xl mx-auto"
    >
      {/* Profile Info Card - NOW AT TOP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-6 bg-card dark:bg-black rounded-2xl border border-border dark:border-zinc-800 p-6 shadow-lg"
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative">
            <div 
              className="w-16 h-16 rounded-full overflow-hidden border-4"
              style={{ borderColor: LEETCODE_EASY }}
            >
              <img
                src={data.avatar || "/default-avatar.png"}
                alt={data.username}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center sm:text-left flex-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <h3 className="text-xl font-bold text-foreground">{data.username}</h3>
              <a
                href={`https://leetcode.com/u/${data.username}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: LEETCODE_EASY }}
                className="hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <p className="text-muted-foreground">
              {data.realName && <span>{data.realName} • </span>}
              <span style={{ color: LEETCODE_MEDIUM }} className="font-semibold">
                Rank #{data.ranking.toLocaleString()}
              </span>
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="flex gap-4">
            <div className="text-center px-4 py-2 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold text-foreground">{data.totalSolved}</p>
              <p className="text-xs text-muted-foreground">Solved</p>
            </div>
            <div className="text-center px-4 py-2 bg-muted/30 rounded-lg">
              <p className="text-2xl font-bold" style={{ color: LEETCODE_EASY }}>
                {((data.totalSolved / 3801) * 100).toFixed(1)}%
              </p>
              <p className="text-xs text-muted-foreground">Progress</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Card - Donut Chart & Stats */}
        <div className="bg-card dark:bg-black rounded-2xl border border-border dark:border-zinc-800 p-6 shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Donut Chart */}
            <div className="flex-shrink-0">
              <LeetCodeDonutChart
                easy={data.easySolved}
                medium={data.mediumSolved}
                hard={data.hardSolved}
                total={data.totalSolved}
                size={180}
              />
            </div>
            
            {/* Difficulty Stats */}
            <div className="flex-1 w-full space-y-3">
              <DifficultyCard
                label="Easy"
                solved={data.easySolved}
                total={easyTotal}
                color={LEETCODE_EASY}
                delay={0.2}
              />
              <DifficultyCard
                label="Med."
                solved={data.mediumSolved}
                total={mediumTotal}
                color={LEETCODE_MEDIUM}
                delay={0.4}
              />
              <DifficultyCard
                label="Hard"
                solved={data.hardSolved}
                total={hardTotal}
                color={LEETCODE_HARD}
                delay={0.6}
              />
            </div>
          </div>
        </div>

        {/* Right Card - Badges */}
        <div className="bg-card dark:bg-black rounded-2xl border border-border dark:border-zinc-800 p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-muted-foreground text-sm">Badges</p>
              <p className="text-3xl font-bold text-foreground">{data.badges?.length || 0}</p>
            </div>
            <a
              href={`https://leetcode.com/u/${data.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          
          {/* Badges Display */}
          {data.badges && data.badges.length > 0 && (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 justify-center">
                {data.badges.slice(0, 3).map((badge, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center p-2">
                      <img
                        src={badge.icon}
                        alt={badge.displayName}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {data.badges.length > 0 && (
                <div className="text-center pt-2 border-t border-border">
                  <p className="text-xs text-muted-foreground">Most Recent Badge</p>
                  <p className="text-sm font-semibold text-foreground mt-1">
                    {data.badges[0].displayName}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Submission Heatmap */}
      {data.submissionCalendar && (
        <SubmissionHeatmap
          calendar={data.submissionCalendar}
          totalActiveDays={data.totalActiveDays}
          streak={data.streak}
          isDark={isDark}
        />
      )}
    </motion.div>
  );
}
