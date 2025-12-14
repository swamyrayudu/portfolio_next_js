"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { IoMdMenu } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { ColorThemeToggle } from "@/components/ui/color-theme-toggle";

const Navigation = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { scrollY } = useScroll();
  const navBackgroundOpacity = useTransform(scrollY, [0, 100], [0.8, 0.98]);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#leetcode", label: "LeetCode" },
    { href: "#projects", label: "Projects" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Me" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.substring(1));
      sections.unshift("home");

      let current = "home";
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`h-[64px] flex justify-between items-center px-4 md:px-8 fixed top-0 left-0 w-full z-30 transition-all duration-300 bg-background/80 backdrop-blur-md ${
        isScrolled
          ? "border-b border-border shadow-lg shadow-black/10"
          : "border-b border-border"
      }`}
    >
      <div className="flex items-center gap-2">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
        >
          <img
            src="/images/rs.jpg"
            alt="SWAMY"
            className={`w-10 h-10 rounded-full object-cover border-2 shadow-md transition-all duration-300 ${
              isScrolled
                ? "border-border shadow-black/20"
                : "border-border"
            }`}
            style={{ objectPosition: "center top" }}
          />
        </a>
        <div
          className={`ml-1 transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-foreground font-bold text-base">RVV Swamy</p>
          <p className="text-muted-foreground text-xs">Full Stack Developer</p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <ul className="flex items-center gap-5 font-sans">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`text-sm font-medium transition-all duration-300 relative group ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  
                  {isActive && (
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full" />
                  )}
                </a>
              </li>
            );
          })}
          
          {/* Color Theme Toggle - Desktop */}
          {mounted && (
            <li>
              <ColorThemeToggle />
            </li>
          )}

          {/* Theme Toggle Button - Desktop */}
          {mounted && (
            <li>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4 text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-foreground" />
                )}
              </button>
            </li>
          )}

          <li>
            <a
              href="https://drive.google.com/file/d/1vVzYcIq625ZKG277oOP_ohtjsMiNANiU/view?usp=drivesdk"
              className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-1.5 shadow-md"
              target="_blank"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className="flex md:hidden items-center gap-3">
        {/* Color Theme Toggle - Mobile */}
        {mounted && <ColorThemeToggle />}

        {/* Theme Toggle Button - Mobile */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-foreground" />
            ) : (
              <Moon className="h-4 w-4 text-foreground" />
            )}
          </button>
        )}

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className={`rounded-lg border p-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary flex items-center transition-all ${
                isScrolled
                  ? "border-primary/50 bg-primary/10"
                  : "border-border bg-background/60"
              }`}
            >
              <IoMdMenu size={22} />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-background/98 backdrop-blur-md border-r border-border p-5 w-64 flex flex-col"
          >
            <SheetHeader className="text-left mb-6">
              <SheetTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Menu
              </SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm">
                Navigate portfolio sections
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`text-base font-medium py-2.5 px-3 rounded-lg transition-all flex items-center gap-2 ${
                      isActive
                        ? "bg-primary/10 text-primary border border-primary/30"
                        : "text-foreground hover:bg-primary/5"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                      setSheetOpen(false);
                    }}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                    {item.label}
                  </a>
                );
              })}
              <div className="mt-4 pt-3 border-t border-border">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1vVzYcIq625ZKG277oOP_ohtjsMiNANiU/view?usp=drivesdk"
                  className="text-sm font-semibold py-2.5 px-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                  onClick={() => setSheetOpen(false)}
                >
                  <FaFileDownload size={14} />
                  Resume
                </a>
              </div>
            </nav>
            <div className="mt-auto pt-4 text-xs text-muted-foreground text-center border-t border-border">
              © {new Date().getFullYear()} RVV Swamy
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
