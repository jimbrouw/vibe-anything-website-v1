import { site } from "@/data/site";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "GitHub", href: site.github },
    { label: "Email", href: `mailto:${site.email}` },
    ...(site.linkedin ? [{ label: "LinkedIn", href: site.linkedin }] : []),
    ...(site.twitter ? [{ label: "X / Twitter", href: site.twitter }] : []),
  ];

  return (
    <footer className="bg-[#070708] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="font-bold text-white/80">{site.brand}</span>
          <span className="text-xs text-white/20">© {year} · {site.website}</span>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center" aria-label="Footer links">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-white/30 hover:text-white/70 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="shrink-0 text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
        >
          {site.contactCTA} →
        </a>
      </div>
    </footer>
  );
}
