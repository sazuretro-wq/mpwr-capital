"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

interface ThemeToggleProps {
  onDark?: boolean; // true when over a dark background
}

export default function ThemeToggle({ onDark = false }: ThemeToggleProps) {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mpwr-theme");
    setIsDark(saved === "dark");
  }, []);

  const toggle = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    localStorage.setItem("mpwr-theme", newDark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", newDark ? "dark" : "light");
  };

  if (isDark === null) return <div className="h-9 w-9" />;

  const borderColor = onDark ? "border-white/25 hover:border-white/50" : "border-mpwr-border hover:border-mpwr-gray-200";
  const bgColor = onDark ? "bg-white/8 hover:bg-white/15" : "bg-transparent hover:bg-mpwr-off-white";
  const textColor = onDark ? "text-white/70 hover:text-white" : "text-mpwr-text-muted hover:text-mpwr-text";

  return (
    <motion.button
      onClick={toggle}
      whileTap={{ scale: 0.9 }}
      className={`relative flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${borderColor} ${bgColor} ${textColor}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isDark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="flex items-center justify-center"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
