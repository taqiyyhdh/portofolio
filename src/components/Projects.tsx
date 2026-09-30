"use client";

import { projects } from "@/data/portofolioData";
import ProjectCard from "@/components/ProjectCard";
import { motion, Variants } from "framer-motion";

// Variant untuk Judul Header
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variant untuk Grid Container (Staggered Children)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda muncul antar kartu
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex items-center gap-2 mb-12"
      >
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-light-text dark:text-accent-cream uppercase">
          FEATURED PROJECTS
        </h2>
      </motion.div>

      {/* Grid Projects */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}