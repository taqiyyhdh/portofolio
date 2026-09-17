"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { BookText, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portofolioData";

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center">

        <div className="flex flex-col items-start gap-6 pl-4 md:pl-8">

          <div className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50 text-sm font-medium text-accent-amber">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className=" animate-pulse">Ready to innovate</span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none text-left">
            <span className="text-accent-cream block mb-2">Frontend</span>
            <span className="text-accent-amber block">Developer</span>
          </h1>

          <p className="max-w-xl text-base sm:text-lg text-accent-muted leading-relaxed text-left">
            {personalInfo.bio}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cream text-dark-bg font-bold text-sm hover:bg-accent-amber transition-all duration-200 shadow-md"
            >
              <BookText className="w-4 h-4" />
              <span>Projects</span>
              </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border text-accent-cream font-semibold text-sm hover:border-accent-amber hover:text-accent-amber transition-all duration-200 bg-dark-card/30"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
          </div>

        </div>

        {/* Kolom Animasi Lottie */}
        <div className="flex justify-center md:justify-center w-full">
          <div className="w-[400px] h-[400px] max-w-full">
            <DotLottiePlayer
              src="/hero-animation.lottie"
              autoplay
              loop
              className="w-full h-full object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}