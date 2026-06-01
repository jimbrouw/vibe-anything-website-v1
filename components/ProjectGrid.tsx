"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GithubRepo } from "@/lib/github";
import { featured } from "@/data/featured";
import { fallbackRepos } from "@/data/projects-fallback";
import ProjectVisual, { langColor } from "./ProjectVisual";

const FEATURED_SLUGS = new Set(featured.map((f) => f.slug));

function RepoCard({ repo, index }: { repo: GithubRepo; index: number }) {
  return (
    <article className="group flex flex-col bg-[#141416] border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
      <div className="relative h-24 bg-[#1a1a1c]">
        <ProjectVisual name={repo.name} index={index} size="sm" lang={repo.language} />
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-sm text-white leading-snug min-w-0 truncate">
            {repo.name}
          </h3>
          {repo.stargazers_count > 0 && (
            <span className="flex items-center gap-1 text-white/30 text-xs shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {repo.stargazers_count}
            </span>
          )}
        </div>

        {repo.description && (
          <p className="text-white/40 text-xs leading-relaxed line-clamp-2 flex-1">
            {repo.description}
          </p>
        )}

        <div className="flex items-center justify-between gap-2 pt-1">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-xs text-white/40">
              <span className={`w-2 h-2 rounded-full ${langColor(repo.language)}`} />
              {repo.language}
            </span>
          )}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 hover:text-white/70 transition-colors"
            >
              Repo →
            </Link>
            {repo.homepage && (
              <Link
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-violet-400/70 hover:text-violet-300 transition-colors"
              >
                Live →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function SkeletonCard() {
  return (
    <div className="flex flex-col bg-[#141416] border border-white/8 rounded-xl overflow-hidden animate-pulse">
      <div className="h-24 bg-white/4" />
      <div className="p-4 flex flex-col gap-2">
        <div className="h-3.5 w-2/3 bg-white/8 rounded" />
        <div className="h-3 w-full bg-white/5 rounded" />
        <div className="h-3 w-4/5 bg-white/5 rounded" />
      </div>
    </div>
  );
}

export default function ProjectGrid({ username }: { username: string }) {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [fromFallback, setFromFallback] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers: { Accept: "application/vnd.github+json" } }
    )
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API ${res.status}`);
        return res.json();
      })
      .then((data: GithubRepo[]) => {
        const filtered = data
          .filter((r) => !r.fork && !FEATURED_SLUGS.has(r.name))
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        setRepos(filtered);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setRepos(fallbackRepos.filter((r) => !FEATURED_SLUGS.has(r.name)));
        setFromFallback(true);
        setLoading(false);
      });
  }, [username]);

  const visibleRepos = repos.filter((r) => !FEATURED_SLUGS.has(r.name));

  return (
    <section id="projects" className="bg-[#0c0c0e] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
              Open source
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              All Projects
            </h2>
            <p className="mt-3 text-white/40 text-base max-w-lg">
              Every public repo — live from GitHub.
            </p>
          </div>
          {fromFallback && (
            <p className="sm:ml-auto text-xs text-white/25 max-w-xs text-right">
              GitHub API unavailable — showing cached data.
              {error && ` (${error})`}
            </p>
          )}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : visibleRepos.length === 0 ? (
          <div className="text-center py-20 text-white/20 text-sm">
            No public projects yet — check back soon.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleRepos.map((repo, i) => (
              <RepoCard key={repo.name} repo={repo} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
