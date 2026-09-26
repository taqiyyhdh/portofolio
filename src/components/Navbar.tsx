"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portofolioData";
import { motion, AnimatePresence } from "framer-motion";

// Dipindahkan ke luar komponen agar nilainya konstan
const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("#home");

  // Deteksi section aktif saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-bg/80 border-b border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-accent-cream hover:text-accent-amber transition-colors"
        >
          {personalInfo.name}
        </Link>

        {/* Desktop Navigation Links */}
        <nav 
          className="hidden md:flex items-center gap-2 text-base font-medium text-accent-muted"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {NAV_LINKS.map((link) => {
            const isHighlighted = (hoveredPath || activeSection) === link.href;

            return (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setActiveSection(link.href)}
                onMouseEnter={() => setHoveredPath(link.href)}
                className="relative px-4 py-2 text-sm transition-colors"
              >
                {/* Efek Sorotan Latar Belakang */}
                {isHighlighted && (
                  <motion.div
                    layoutId="navbar-highlight"
                    className="absolute inset-0 bg-dark-border/70 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
                
                <span className={isHighlighted ? "text-accent-cream font-semibold" : "text-accent-muted"}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Resume & Hamburger Button */}
        <div className="flex items-center gap-3">
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full bg-accent-cream text-dark-bg hover:bg-accent-amber transition-colors shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.a>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-accent-cream hover:text-accent-amber md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-dark-bg/95 border-b border-dark-border px-6 py-4 flex flex-col gap-4 text-base font-medium text-accent-muted overflow-hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setIsOpen(false);
                }}
                className={`py-1 transition-colors ${
                  activeSection === link.href ? "text-accent-cream font-bold" : "text-accent-muted hover:text-accent-cream"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}