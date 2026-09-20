"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { personalInfo } from "@/data/portofolioData";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-bg/80 border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo / Name */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-accent-cream hover:text-accent-amber transition-colors"
        >
          {personalInfo.name}
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-accent-muted">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-accent-cream transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Side: Resume & Hamburger Button */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full bg-accent-cream text-dark-bg hover:bg-accent-amber transition-all duration-200 shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

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
      {isOpen && (
        <nav className="md:hidden bg-dark-bg/95 border-b border-dark-border px-6 py-4 flex flex-col gap-4 text-base font-medium text-accent-muted">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // Menutup dropdown saat link diklik
              className="hover:text-accent-cream transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}