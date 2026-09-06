import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portofolioData";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-dark-bg/80 border-b border-dark-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight text-accent-cream hover:text-accent-amber transition-colors"
        >
          {personalInfo.name}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-base font-medium text-accent-muted">
          <Link href="#home" className="hover:text-accent-cream transition-colors">
            Home
          </Link>
          <Link href="#about" className="hover:text-accent-cream transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-accent-cream transition-colors">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-accent-cream transition-colors">
            Contact
          </Link>
        </nav>

        <div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-bold rounded-full bg-accent-cream text-dark-bg hover:bg-accent-amber transition-all duration-200 shadow-sm"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}