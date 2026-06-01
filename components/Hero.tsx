import { site } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0e0e10] px-6 pt-16">
      {/* subtle grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:64px_64px]"
      />
      {/* radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]"
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-5xl w-full">
        {/* hero brand image */}
        <div className="w-full max-w-3xl mx-auto">
          <Image
            src="/hero-vibe-anything.png"
            alt="VibeAnything"
            width={1400}
            height={630}
            priority
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* headline */}
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {site.tagline}
          </h1>
          <p className="text-lg sm:text-xl text-white/50 max-w-xl mx-auto leading-relaxed">
            AI tools, automation agents, and web apps — built fast, shipped for real.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#apps"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-white/90 transition-colors text-sm"
          >
            View Apps
          </a>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium px-6 py-3 rounded-lg transition-colors text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </Link>
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 text-xs">
        <span>scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
