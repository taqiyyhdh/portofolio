export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t bg-[#0F0D0B] border-dark-border/40 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-accent-muted">
        <p>© {new Date().getFullYear()} Taqiyyah Adha. All rights reserved.</p>
      </div>
    </footer>
  );
}