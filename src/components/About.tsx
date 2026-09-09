import { User, Terminal, Code2, Boxes } from "lucide-react";
import Image from "next/image";
import { personalInfo, techStack } from "@/data/portofolioData";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 max-w-6xl mx-auto">

      <div className="flex items-center gap-2 mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-accent-cream uppercase">
          Bridging Desain and Code
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Kolom Kiri: Deskripsi & Tech Stack (7 Kolom) */}
        <div className="lg:col-span-7 flex flex-col gap-4">

          <div className="p-8 rounded-2xl border border-dark-border bg-dark-card/40 backdrop-blur-sm flex flex-col gap-6">
            <div className="flex items-center gap-3 text-accent-amber">
              <User className="w-6 h-6" />
              <h3 className="text-xl font-bold">Getting to know me</h3>
            </div>
            
            <p className="text-accent-muted text-base leading-relaxed">
              {personalInfo.aboutBio || personalInfo.bio}
            </p>

            <div className=" flex flex-col gap-4">
              <div className="flex items-center gap-3 text-accent-amber">
                <Boxes className="w-6 h-6" />
                <h3 className="text-xl font-bold text-accent-amber">Tech Stack</h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {techStack.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full border border-dark-border bg-dark-bg/60 text-accent-cream text-sm font-medium hover:border-accent-amber/60 hover:text-accent-amber transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Foto Bulat & Core Values (5 Kolom) */}
        <div className="lg:col-span-5 flex flex-col items-center gap-4">

          <div className="gap-2 relative w-66 h-66 rounded-full p-1 border-2 border-accent-amber/50 bg-dark-card/40 overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 hover:-rotate-3 hover:border-accent-cream hover:shadow-[0_0_30px_rgba(254,240,138,0.5)] group cursor-pointer">
            <Image
              src="/profile.jpeg"
              alt={personalInfo.name}
              fill
              className="object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <div className="flex flex-row gap-2">
            <div className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50 text-sm font-medium text-accent-amber hover:border-accent-amber/50 transition-colors">
              <Code2 className="w-6 h-6 text-accent-amber shrink-0  animate-pulse" />
              <h4 className="font-bold text-accent-cream text-sm  animate-pulse">Frontend Focus</h4>
            </div>

            <div className="inline-flex gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card/50 text-sm font-medium text-accent-amber hover:border-accent-amber/50 transition-colors">
              <Terminal className="w-6 h-6 text-accent-amber shrink-0 animate-pulse" />
              <h4 className="font-bold text-accent-cream text-sm animate-pulse">Clean Code & UI</h4>
            </div>
          </div>

          <div className=" w-full p-4 rounded-xl border border-dark-border bg-dark-card/30 backdrop-blur-sm flex items-center hover:border-accent-amber/40 transition-colors">
            <p className="text-base sm:text-base text-center italic text-accent-cream/90 font-medium leading-relaxed">
              "Code is the foundation, but intuitive user experience is the true destination."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}