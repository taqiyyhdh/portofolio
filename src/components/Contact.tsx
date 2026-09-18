"use client";

import { useState, FormEvent } from "react";
import { Sparkles, MessageSquare, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/portofolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const phoneNumber = contactInfo.phone; 

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const textMessage = `Halo, saya *${formData.name}*.\n${formData.message}`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      
      {/* Section Header */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="w-5 h-5 text-accent-amber" />
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-accent-cream uppercase">
          GET IN TOUCH
        </h2>
      </div>

      <p className="text-accent-muted text-sm sm:text-base max-w-lg mx-auto mb-10">
        Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang kolaborasi.
      </p>

      {/* Main CTA Card */}
      <div className="p-6 sm:p-10 rounded-2xl border border-dark-border bg-dark-card/40 backdrop-blur-sm flex flex-col items-center gap-6 hover:border-accent-amber/40 transition-all duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-accent-cream">
          Punya ide menarik? Mari wujudkan bersama.
        </h3>

        {/* Form WhatsApp Area */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 text-left">
          <div>
            <label className="block text-xs font-semibold text-accent-cream uppercase tracking-wider mb-1.5">
              Nama
            </label>
            <input
              type="text"
              required
              placeholder="Masukkan nama kamu"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg/60 text-accent-cream placeholder:text-accent-muted/50 focus:outline-none focus:border-accent-amber transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-accent-cream uppercase tracking-wider mb-1.5">
              Pesan
            </label>
            <textarea
              required
              rows={4}
              placeholder="Tuliskan pesan kamu di sini..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg/60 text-accent-cream placeholder:text-accent-muted/50 focus:outline-none focus:border-accent-amber transition-colors text-sm resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-amber text-dark-bg font-semibold text-sm hover:bg-accent-cream transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] hover:-translate-y-0.5 mt-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Kirim via WhatsApp</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>

        {/* Separator Line */}
        <div className="w-full border-t border-dark-border/60" />

        {/* Socials (Clickable) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2">

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {contactInfo.socials.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-dark-border bg-dark-bg/60 text-accent-muted hover:text-accent-amber hover:border-accent-amber/50 transition-all duration-200"
                aria-label={social.name}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={social.svgPath} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}