"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ColorTheme = "emerald" | "blue" | "purple" | "orange" | "red" | "pink" | "cyan" | "yellow";

interface ColorThemeContextType {
  colorTheme: ColorTheme;
  setColorTheme: (theme: ColorTheme) => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(undefined);

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [colorTheme, setColorThemeState] = useState<ColorTheme>("emerald");

  useEffect(() => {
    // Load saved theme from localStorage
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme;
    if (savedTheme) {
      setColorThemeState(savedTheme);
      applyColorTheme(savedTheme);
    }
  }, []);

  const setColorTheme = (theme: ColorTheme) => {
    setColorThemeState(theme);
    localStorage.setItem("color-theme", theme);
    applyColorTheme(theme);
  };

  const applyColorTheme = (theme: ColorTheme) => {
    const root = document.documentElement;
    
    // Color mappings for each theme - VIBRANT colors
    const colors: Record<ColorTheme, { 
      light: { primary: string; primaryForeground: string; ring: string }; 
      dark: { primary: string; primaryForeground: string; ring: string } 
    }> = {
      emerald: {
        light: { primary: 'oklch(0.648 0.2 145)', primaryForeground: 'oklch(0.98 0.02 145)', ring: 'oklch(0.648 0.2 145)' },
        dark: { primary: 'oklch(0.648 0.2 145)', primaryForeground: 'oklch(0.15 0.03 145)', ring: 'oklch(0.55 0.18 145)' }
      },
      blue: {
        light: { primary: 'oklch(0.546 0.245 262)', primaryForeground: 'oklch(0.98 0.02 262)', ring: 'oklch(0.546 0.245 262)' },
        dark: { primary: 'oklch(0.546 0.245 262)', primaryForeground: 'oklch(0.98 0.02 262)', ring: 'oklch(0.47 0.22 262)' }
      },
      purple: {
        light: { primary: 'oklch(0.558 0.288 302)', primaryForeground: 'oklch(0.98 0.02 302)', ring: 'oklch(0.558 0.288 302)' },
        dark: { primary: 'oklch(0.558 0.288 302)', primaryForeground: 'oklch(0.98 0.02 302)', ring: 'oklch(0.48 0.25 302)' }
      },
      orange: {
        light: { primary: 'oklch(0.705 0.213 47.604)', primaryForeground: 'oklch(0.21 0.034 45)', ring: 'oklch(0.705 0.213 47.604)' },
        dark: { primary: 'oklch(0.75 0.183 55.934)', primaryForeground: 'oklch(0.21 0.034 50)', ring: 'oklch(0.5 0.17 50)' }
      },
      red: {
        light: { primary: 'oklch(0.577 0.245 27.325)', primaryForeground: 'oklch(0.98 0.02 27)', ring: 'oklch(0.577 0.245 27.325)' },
        dark: { primary: 'oklch(0.577 0.245 27.325)', primaryForeground: 'oklch(0.98 0.02 27)', ring: 'oklch(0.5 0.22 27)' }
      },
      pink: {
        light: { primary: 'oklch(0.592 0.249 0)', primaryForeground: 'oklch(0.98 0.02 0)', ring: 'oklch(0.592 0.249 0)' },
        dark: { primary: 'oklch(0.592 0.249 0)', primaryForeground: 'oklch(0.98 0.02 0)', ring: 'oklch(0.5 0.23 0)' }
      },
      cyan: {
        light: { primary: 'oklch(0.628 0.185 205)', primaryForeground: 'oklch(0.15 0.03 205)', ring: 'oklch(0.628 0.185 205)' },
        dark: { primary: 'oklch(0.628 0.185 205)', primaryForeground: 'oklch(0.15 0.03 205)', ring: 'oklch(0.54 0.17 205)' }
      },
      yellow: {
        light: { primary: 'oklch(0.852 0.199 91.936)', primaryForeground: 'oklch(0.421 0.095 57.708)', ring: 'oklch(0.852 0.199 91.936)' },
        dark: { primary: 'oklch(0.795 0.184 86.047)', primaryForeground: 'oklch(0.421 0.095 57.708)', ring: 'oklch(0.421 0.095 57.708)' }
      },
    };

    const selectedColors = colors[theme];
    const isDark = root.classList.contains("dark");
    const themeColors = isDark ? selectedColors.dark : selectedColors.light;
    
    // Apply to CSS variables
    root.style.setProperty("--primary", themeColors.primary);
    root.style.setProperty("--primary-foreground", themeColors.primaryForeground);
    root.style.setProperty("--ring", themeColors.ring);
    root.style.setProperty("--chart-1", themeColors.primary);
    root.style.setProperty("--sidebar-primary", themeColors.primary);
    root.style.setProperty("--sidebar-ring", themeColors.ring);
    root.style.setProperty("--sidebar-primary-foreground", themeColors.primaryForeground);
  };

  return (
    <ColorThemeContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export function useColorTheme() {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
}
