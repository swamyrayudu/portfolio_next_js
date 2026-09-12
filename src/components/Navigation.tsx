"use client";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const navItems = [
    { href: "#about", label: "About", code: "About" },
    { href: "#skills", label: "Work", code: "Work" },
    { href: "#contact", label: "Contact", code: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "buildlog", "contact"];
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
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
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`h-[60px] flex justify-between items-center px-6 md:px-12 fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}>
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="text-base font-semibold text-foreground tracking-tight hover:opacity-70 transition-opacity"
        >
          RVV Swamy
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const sectionMap: Record<string, string> = {
              "#about": "about",
              "#skills": "skills",
              "#contact": "contact",
            };
            const isActive = activeSection === sectionMap[item.href];
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className={`px-3 py-1.5 rounded-md text-sm font-mono transition-all duration-200 ${
                  isActive
                    ? "text-foreground bg-foreground/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <span className="opacity-40">&lt;</span>
                {item.code}
                <span className="opacity-40"> /&gt;</span>
              </a>
            );
          })}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2 p-2 rounded-full border border-border hover:bg-secondary transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 text-foreground" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-foreground" />
              )}
            </button>
          )}
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full border border-border hover:bg-secondary transition-all"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5 text-foreground" />
              ) : (
                <Moon className="h-3.5 w-3.5 text-foreground" />
              )}
            </button>
          )}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-border hover:bg-secondary transition-all"
            aria-label="Toggle menu"
          >
            <div className="w-4 h-3.5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-foreground rounded transition-all ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 bg-foreground rounded transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-foreground rounded transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 md:hidden">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="text-2xl font-mono text-foreground"
            >
              <span className="opacity-40">&lt;</span>
              {item.code}
              <span className="opacity-40"> /&gt;</span>
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1BSzGPx1PAQdnfbw-MrGcaHuM1_NU6Cvr/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-semibold"
          >
            Resume
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
