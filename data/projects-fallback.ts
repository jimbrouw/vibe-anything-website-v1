export interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  homepage: string | null;
  topics: string[];
  fork: boolean;
}

export const fallbackRepos: GithubRepo[] = [
  {
    name: "podcast-room-calculator",
    description: "Acoustic room calculator for podcast studios",
    language: "JavaScript",
    stargazers_count: 1,
    html_url: "https://github.com/jimbrouw/podcast-room-calculator",
    homepage: null,
    topics: ["audio", "acoustics", "podcast"],
    fork: false,
  },
  {
    name: "radio-gig-gopher",
    description: "Automated radio gig discovery agent",
    language: "TypeScript",
    stargazers_count: 0,
    html_url: "https://github.com/jimbrouw/radio-gig-gopher",
    homepage: null,
    topics: ["music", "automation"],
    fork: false,
  },
  {
    name: "notts-intel-engine",
    description: "Nottingham-focused data intelligence engine",
    language: "Python",
    stargazers_count: 0,
    html_url: "https://github.com/jimbrouw/notts-intel-engine",
    homepage: null,
    topics: ["python", "data"],
    fork: false,
  },
  {
    name: "ebay-helper-pro",
    description: "Python eBay listing and research assistant",
    language: "Python",
    stargazers_count: 0,
    html_url: "https://github.com/jimbrouw/ebay-helper-pro",
    homepage: null,
    topics: ["python", "ebay", "automation"],
    fork: false,
  },
  {
    name: "creative-ai-assessment",
    description: "AI-powered creative assessment tools",
    language: "HTML",
    stargazers_count: 0,
    html_url: "https://github.com/jimbrouw/creative-ai-assessment",
    homepage: null,
    topics: ["ai", "creative"],
    fork: false,
  },
];
