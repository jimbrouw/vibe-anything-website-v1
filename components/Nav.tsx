"use client";
import { site } from "@/data/site";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0b]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-white">
          {site.brand}
        </span>
        <nav className="flex items-center gap-6 text-sm text-white/60">
          <a href="#apps" className="hover:text-white transition-colors">
            Apps
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white transition-colors border border-white/20 hover:border-white/40 rounded-md px-3 py-1.5"
          >
            GitHub
          </Link>
        </nav>
      </div>
    </header>
  );
}
