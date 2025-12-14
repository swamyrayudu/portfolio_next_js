"use client";

import { Palette } from "lucide-react";
import { useColorTheme, ColorTheme } from "@/contexts/ColorThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ColorThemeToggle() {
  const { colorTheme, setColorTheme } = useColorTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes: { name: ColorTheme; label: string; color: string }[] = [
    { name: "yellow", label: "Yellow", color: "bg-yellow-500" },
    { name: "blue", label: "Blue", color: "bg-blue-500" },
    { name: "red", label: "Red", color: "bg-red-500" },
    { name: "emerald", label: "Green", color: "bg-emerald-500" },
    { name: "purple", label: "Purple", color: "bg-purple-500" },
    { name: "orange", label: "Orange", color: "bg-orange-500" },
    { name: "pink", label: "Pink", color: "bg-pink-500" },
    { name: "cyan", label: "Cyan", color: "bg-cyan-500" },
  ];

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Choose color theme"
      >
        <Palette className="h-4 w-4 text-foreground" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden"
            >
              <div className="p-3 border-b border-border">
                <h3 className="text-sm font-semibold text-foreground">Choose Color Theme</h3>
              </div>
              <div className="p-2">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.name}
                    onClick={() => {
                      setColorTheme(theme.name);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all duration-200 ${
                      colorTheme === theme.name
                        ? "bg-secondary"
                        : "hover:bg-secondary/50"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-5 h-5 rounded-full ${theme.color}`} />
                    <span className="text-sm font-medium text-foreground flex-1 text-left">
                      {theme.label}
                    </span>
                    {colorTheme === theme.name && (
                      <motion.svg
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </motion.svg>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
