import { projects } from "@/data/portofolioData";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-accent-cream uppercase">
          FEATURED PROJECTS
        </h2>
      </div>

      {/* Grid Projects: 1 Kolom (Mobile), 2 Kolom (Tablet), 3 Kolom (Desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}