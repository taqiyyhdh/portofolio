"use client";

import Image from "next/image";
import { Code2, ExternalLink } from "lucide-react";
import { Project } from "@/data/portofolioData";
import { motion, Variants } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

// Variant animasi masuk untuk tiap kartu (di-trigger oleh parent di Projects.tsx)
const cardItemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variant untuk animasi staggered badges (tags)
const badgeContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const badgeItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

export default function ProjectCard({ project }: ProjectCardProps) {
  // Memecah judul berdasarkan strip '-' jika ada
  const titleParts = project.title.split("-");
  const mainTitle = titleParts[0]?.trim();
  const subTitle = titleParts[1]?.trim();

  return (
    <motion.div
      variants={cardItemVariants}
      whileHover={{ scale: 1.025 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-2xl border border-dark-border bg-dark-card/40 backdrop-blur-sm overflow-hidden flex flex-col transition-colors duration-300 hover:border-accent-amber/50 hover:shadow-[0_0_25px_rgba(217,119,6,0.15)]"
    >
      {/* Thumbnail Container */}
      <div className="relative w-full h-52 sm:h-60 overflow-hidden bg-dark-bg/80 border-b border-dark-border/40 p-2">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-dark-bg/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
      </div>

      {/* Detail Proyek */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-2xl font-bold text-accent-cream group-hover:text-accent-amber transition-colors flex flex-col leading-snug">
          <span>{mainTitle}</span>
          {subTitle && (
            <span className="text-base font-medium text-accent-cream/80">
              {subTitle}
            </span>
          )}
        </h3>

        {/* Deskripsi: line-clamp-3 untuk mengunci maksimum 3 baris */}
        <p className="text-accent-muted text-sm leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack Badges dengan Staggered Animation */}
        <motion.div
          variants={badgeContainerVariants}
          className="flex flex-wrap gap-2 pt-2"
        >
          {project.tags.map((tag, idx) => (
            <motion.span
              key={idx}
              variants={badgeItemVariants}
              whileHover={{ scale: 1.05 }}
              className="px-2.5 py-1 rounded-md border border-dark-border bg-dark-bg/60 text-accent-cream text-xs font-medium cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-dark-border/60">
          {project.demoLink && (
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-cream hover:text-accent-amber transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}

          {project.githubLink && (
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-accent-muted hover:text-accent-cream transition-colors"
            >
              <Code2 className="w-4 h-4" />
              <span>Source Code</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}