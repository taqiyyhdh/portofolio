export const personalInfo = {
  name: "Taqiyyah Adha",
  role: "FRONTEND DEVELOPER",
  bio: "Halo! Saya Taqi, seorang Frontend Developer yang terus belajar dan berkembang. Saat ini berfokus pada ekosistem React untuk membangun aplikasi web yang cepat dan interaktif.",
  aboutBio: "Seorang Frontend Developer yang bersemangat mengubah desain statis menjadi aplikasi web yang rapi, fungsional, dan responsif. Seiring berkembangnya pemahaman saya dalam teknologi web modern, fokus utama saya saat ini adalah menguasai React, Next.js, dan Tailwind CSS. Saya selalu berusaha menulis kode yang bersih serta membangun antarmuka pengguna yang nyaman dan memberikan pengalaman terbaik.",
  email: "taqiyyahadha@gmail.com",
  github: "https://github.com/taqiyyhdh",
  location: "Padang, Indonesia",
};

export const techStack = [
  "HTML / CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "React / Next.js",
  "Git / VS Code",
];
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "MiniPOS - Dashboard Analitik & Stok",
    description: "Dashboard Point of Sale (POS) berbasis web. Dilengkapi statistik transaksi, grafik produk terlaris, dan pemantauan stok menipis.",
    image: "/projects/project-1.png",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Firebase", "Data Visualization"],
    demoLink: "https://minipos.vercel.app/",
    githubLink: "https://github.com/taqiyyhdh/mini-pos",
  },
  {
    id: "2",
    title: "Kopiqi - Coffee Shop Landing Page",
    description: "Landing page modern dan responsif untuk kedai kopi 'Kopiqi'. Menampilkan visual bernuansa hangat dengan navigasi menu.",
    image: "/projects/project-2.png",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    demoLink: "https://kopiqi.vercel.app/",
    githubLink: "https://github.com/taqiyyhdh/kopiqi",
  },
  {
    id: "3",
    title: "Qyufee - Sistem Kasir & Order Cafe",
    description: "Sistem kasir interaktif untuk Kafe 'Qyufee'. Memudahkan input pesanan ke keranjang, pencatatan nomor meja, dan data pelanggan.",
    image: "/projects/project-3.png",
    tags: ["React.js", "Vite", "TypeScript", "REST API", "Responsive Design"],
    demoLink: "https://qyufee.vercel.app/",
    githubLink: "https://github.com/taqiyyhdh/qyufee",
  },
];

export const contactInfo = {
  phone: "6282311259005",
  socials: [
    {
      name: "Email",
      url: "mailto:taqiyyahadha@gmail.com",
      svgPath: "M1.5 4.5a3 3 0 0 1 3-3h15a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3v-15Zm3-1.5a1.5 1.5 0 0 0-1.5 1.5v.425l9 5.4 9-5.4V4.5a1.5 1.5 0 0 0-1.5-1.5h-15Zm16.5 4.075-8.486 5.091a1 1 0 0 1-1.028 0L3 7.075V19.5a1.5 1.5 0 0 0 1.5 1.5h15a1.5 1.5 0 0 0 1.5-1.5V7.075Z",
    },
    {
      name: "GitHub",
      url: "https://github.com/taqiyyhdh",
      svgPath: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/taqiyyahadha",
      svgPath: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/taqiyyhdh/",
      svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ],
};