"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Menggunakan requestAnimationFrame untuk menghindari peringatan linter
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-light-card/50 dark:bg-light-card" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-dark-card dark:bg-light-card  border border-light-border dark:border-light-border  text-light-text dark:text-light-text hover:opacity-80 transition-opacity focus:outline-none"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-light-text" />
        ) : (
          <Moon className="w-5 h-5 text-light-bg" />
        )}
      </motion.div>
    </button>
  );
}