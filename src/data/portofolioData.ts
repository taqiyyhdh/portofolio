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