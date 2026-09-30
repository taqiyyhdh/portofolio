"use client";

import { User, Terminal, Code2, Boxes } from "lucide-react";
import Image from "next/image";
import { personalInfo, techStack } from "@/data/portofolioData";
import { motion, Variants } from "framer-motion";

// Variant untuk Section Header (Judul "Bridging Design and Code")
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variant untuk Container Utama (Grid Kiri & Kanan)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar kolom kiri dan kanan
    },
  },
};

// Variant untuk Kartu Utama (Fade In Slide Up)
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variant khusus untuk Tech Stack Badges (Stagger Children)
const badgeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda munculnya tiap badge skill
    },
  },
};

const badgeItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

      {/* Header Section */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-2 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-light-text dark:text-accent-cream uppercase">
          Bridging Design and Code
        </h2>
      </motion.div>

      {/* Grid Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
      >
        
        {/* Kolom Kiri: Deskripsi & Tech Stack (7 Kolom) */}
        <motion.div variants={cardVariants} className="lg:col-span-7 flex flex-col gap-4">
          <div className="p-8 rounded-2xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card/40 backdrop-blur-sm flex flex-col gap-6">
            
            {/* Getting to know me */}
            <div className="flex items-center gap-3 text-accent-amber">
              <User className="w-6 h-6" />
              <h3 className="text-xl font-bold">Getting to know me</h3>
            </div>
            
            <p className="color-light-text dark:text-accent-muted text-base leading-relaxed">
              {personalInfo.aboutBio || personalInfo.bio}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent-amber">
                <Boxes className="w-6 h-6" />
                <h3 className="text-xl font-bold text-accent-amber">Tech Stack</h3>
              </div>

              {/* Badges dengan animasi Staggered */}
              <motion.div 
                variants={badgeContainerVariants}
                className="flex flex-wrap gap-2 pt-2"
              >
                {techStack.map((skill, index) => (
                  <motion.span
                    key={index}
                    variants={badgeItemVariants}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg/60 text-light-text dark:text-accent-cream text-sm font-medium hover:border-accent-amber/60 hover:text-accent-amber transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Kolom Kanan: Foto Bulat & Core Values (5 Kolom) */}
        <motion.div variants={cardVariants} className="lg:col-span-5 flex flex-col items-center gap-4">

          {/* Foto Profil dengan Hover Animation */}
          <div 
            className="relative w-64 h-64 rounded-full p-1 border-2 border-accent-amber/50 bg-light-card dark:bg-dark-card/40 overflow-hidden shadow-xl group cursor-pointer"
          >
            <Image
              src="/profile.jpeg"
              alt={personalInfo.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Badges Highlight */}
          <div className="flex flex-row gap-2">
            <motion.div 
              whileHover={{ y: -3 }}
              className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card/50 text-sm font-medium text-accent-amber hover:border-accent-amber/50 transition-colors"
            >
              <Code2 className="w-6 h-6 text-accent-amber shrink-0 animate-pulse" />
              <h4 className="font-bold text-light-text dark:text-accent-cream text-sm animate-pulse">Frontend Focus</h4>
            </motion.div>

            <motion.div 
              whileHover={{ y: -3 }}
              className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card/50 text-sm font-medium text-accent-amber hover:border-accent-amber/50 transition-colors"
            >
              <Terminal className="w-6 h-6 text-accent-amber shrink-0 animate-pulse" />
              <h4 className="font-bold text-light-text dark:text-accent-cream text-sm animate-pulse">Clean Code & UI</h4>
            </motion.div>
          </div>

          {/* Quote Box */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="w-full p-4 rounded-xl border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-card/30 backdrop-blur-sm flex items-center hover:border-accent-amber/40 transition-colors"
          >
            <p className="text-base sm:text-base text-center italic text-light-text dark:text-accent-cream/90 font-medium leading-relaxed">
              &quot;Code is the foundation, but intuitive user experience is the true destination.&quot;
            </p>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}