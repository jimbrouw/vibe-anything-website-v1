import { featured } from "@/data/featured";
import AppCard from "./AppCard";

export default function FeaturedApps() {
  return (
    <section id="apps" className="bg-[#0a0a0b] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">
            Featured
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Apps
          </h2>
          <p className="mt-3 text-white/40 text-base max-w-lg">
            Hand-picked projects — each one solving a real problem.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((app, i) => (
            <AppCard key={app.slug} app={app} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
