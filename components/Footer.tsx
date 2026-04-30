import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <span className="text-3xl font-black text-lilac">maisie</span>
          <p className="text-sm font-light text-white/70 italic">future you will thank you.</p>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-normal text-white/50 uppercase tracking-widest">follow along</p>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/maisieapp_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-white/80 hover:text-lilac transition-colors"
            >
              Instagram — @maisieapp_
            </a>
            <a
              href="https://tiktok.com/@maisie.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-white/80 hover:text-lilac transition-colors"
            >
              TikTok — @maisie.app
            </a>
            <a
              href="https://linkedin.com/company/maisie-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light text-white/80 hover:text-lilac transition-colors"
            >
              LinkedIn — maisie-app
            </a>
          </div>
        </div>

        {/* Nav */}
        <div className="flex flex-col gap-3">
          <p className="text-xs font-normal text-white/50 uppercase tracking-widest">pages</p>
          <div className="flex flex-col gap-2">
            <Link href="/#what-is-maisie" className="text-sm font-light text-white/80 hover:text-lilac transition-colors">
              what is maisie
            </Link>
            <Link href="/our-story" className="text-sm font-light text-white/80 hover:text-lilac transition-colors">
              our story
            </Link>
            <Link href="/waitlist" className="text-sm font-light text-white/80 hover:text-lilac transition-colors">
              join the waitlist
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10">
        <p className="text-xs font-light text-white/40 text-center">
          © 2025 maisie. Built with love in Ireland. 🇮🇪
        </p>
      </div>
    </footer>
  );
}
