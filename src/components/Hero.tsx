"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";
import { BookText, Sparkles } from "lucide-react";
import { personalInfo } from "@/data/portofolioData";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.22,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const lottieVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-6">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">

        {/* Kolom Kiri: Teks & Action */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start gap-6 pl-4 md:pl-8"
        >
          {/* Badge Status */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50 text-sm font-medium text-accent-amber"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="animate-pulse">Ready to innovate</span>
          </motion.div>

          {/* Headline Utama */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-none text-left"
          >
            <span className="text-accent-cream block mb-2">Frontend</span>
            <span className="text-accent-amber block">Developer</span>
          </motion.h1>

          {/* Bio / Deskripsi */}
          <motion.p 
            variants={itemVariants}
            className="max-w-xl text-base sm:text-lg text-accent-muted leading-relaxed text-left"
          >
            {personalInfo.bio}
          </motion.p>

          {/* Area Tombol Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-cream text-dark-bg font-bold text-sm hover:bg-accent-amber transition-colors shadow-md"
            >
              <BookText className="w-4 h-4" />
              <span>Projects</span>
            </motion.a>

            <motion.a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-dark-border text-accent-cream font-semibold text-sm hover:border-accent-amber hover:text-accent-amber transition-colors bg-dark-card/30"
            >
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Lottie + Floating Loop Effect */}
        <motion.div 
          variants={lottieVariants}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-center w-full mt-8 md:mt-0"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-[400px] h-[400px] max-w-full"
          >
            <DotLottiePlayer
              src="/hero-animation.lottie"
              autoplay
              loop
              className="w-full h-full object-contain"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}