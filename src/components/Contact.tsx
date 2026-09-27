"use client";

import { useState, FormEvent } from "react";
import { MessageSquare, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/data/portofolioData";
import { motion, Variants } from "framer-motion";

// Variant untuk Header & Subtitle
const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

// Variant untuk Card Utamanya
const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

// Variant untuk Staggered Social Icons
const socialContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const socialItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
};

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
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide text-accent-cream uppercase">
            GET IN TOUCH!
          </h2>
        </div>

        <p className="text-accent-muted text-sm sm:text-base max-w-2xl mx-auto mb-8">
          Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau peluang kolaborasi.
        </p>
      </motion.div>

      {/* Main CTA Card */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="p-6 sm:p-10 rounded-2xl border border-dark-border bg-dark-card/40 backdrop-blur-sm flex flex-col items-center gap-4 hover:border-accent-amber/40 transition-colors duration-300 shadow-xl"
      >
        
        {/* Socials (Clickable) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-2">
          
          {/* Social Icons dengan Staggered Animation */}
          <motion.div
            variants={socialContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {contactInfo.socials.map((social, idx) => (
              <motion.a
                key={idx}
                variants={socialItemVariants}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-dark-border bg-dark-bg/60 text-accent-muted hover:text-accent-amber hover:border-accent-amber/50 transition-colors duration-200"
                aria-label={social.name}
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d={social.svgPath} />
                </svg>
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Separator Line */}
        <div className="w-full border-t border-dark-border/60 my-2" />

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
              rows={3}
              placeholder="Tuliskan pesan kamu di sini..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg/60 text-accent-cream placeholder:text-accent-muted/50 focus:outline-none focus:border-accent-amber transition-colors text-sm resize-none"
            />
          </div>

          {/* Tombol Submit */}
          <motion.button
            type="submit"
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            initial="rest"
            animate="rest"
            className="group w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-accent-amber text-dark-bg font-semibold text-sm hover:bg-accent-cream transition-colors duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] mt-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Kirim via WhatsApp</span>
            <motion.div
              variants={{
                rest: { x: 0, y: 0 },
                hover: { x: 3, y: -3 },
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowUpRight className="w-4 h-4" />
            </motion.div>
          </motion.button>
        </form>

      </motion.div>
    </section>
  );
}