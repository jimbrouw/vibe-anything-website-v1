import { GithubRepo, fallbackRepos } from "@/data/projects-fallback";

export type { GithubRepo };

export async function fetchRepos(username: string): Promise<{
  repos: GithubRepo[];
  fromFallback: boolean;
  error?: string;
}> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error(`GitHub API returned ${res.status}`);
    }

    const data: GithubRepo[] = await res.json();
    const repos = data
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count);

    return { repos, fromFallback: false };
  } catch (err) {
    return {
      repos: fallbackRepos,
      fromFallback: true,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}
