export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t bg-light-bg dark:bg-dark-bg border-light-border dark:border-dark-border/40 text-center">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm color-light-text dark:text-accent-muted">
        <p>© {new Date().getFullYear()} Taqiyyah Adha. All rights reserved.</p>
      </div>
    </footer>
  );
}