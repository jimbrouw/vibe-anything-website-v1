import { site } from "@/data/site";

const stack = [
  "Python", "TypeScript", "JavaScript",
  "Next.js", "AI / LLMs", "Automation",
  "Web Scraping", "APIs", "CLI Tools",
];

export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0b] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-xs font-semibold tracking-widest text-white/30 uppercase">
            About
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Building ideas
            <br />
            <span className="text-violet-400">into shipped products.</span>
          </h2>
          <p className="mt-6 text-white/50 text-base leading-relaxed">
            I&apos;m Jim — a UK-based developer and founder of{" "}
            <span className="text-white/80 font-medium">VibeAnything</span>.
            I build fast, ship real software, and work across AI tooling,
            automation, and web apps. From eBay listing assistants to podcast
            studio calculators — if there&apos;s a problem worth solving, there&apos;s a
            tool being built for it.
          </p>
          <p className="mt-4 text-white/40 text-base leading-relaxed">
            VibeAnything is also a digital agency — available for custom builds,
            AI integration work, and rapid prototyping.
          </p>
          <div className="mt-8">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 bg-white/8 hover:bg-white/12 border border-white/10 text-white/70 hover:text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all"
            >
              {site.contactCTA} →
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-white/30 uppercase mb-4">
            Tech &amp; Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="text-sm text-white/60 bg-white/5 border border-white/8 px-3 py-1.5 rounded-full hover:border-white/20 hover:text-white/80 transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
