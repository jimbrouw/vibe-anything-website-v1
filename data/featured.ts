export interface FeaturedApp {
  name: string;
  slug: string;
  description: string;
  tags: string[];
  repo: string;
  demo?: string;
  appStore?: string;
  screenshot?: string; // path in /public/screenshots/
}

export const featured: FeaturedApp[] = [
  {
    name: "Podcast Room Calculator",
    slug: "podcast-room-calculator",
    description:
      "Acoustic analysis tool for podcasters. Input your room dimensions and get treatment recommendations to achieve broadcast-quality audio.",
    tags: ["JavaScript", "Audio", "Acoustics"],
    repo: "https://github.com/jimbrouw/podcast-room-calculator",
  },
  {
    name: "Radio Gig Gopher",
    slug: "radio-gig-gopher",
    description:
      "TypeScript agent that scouts and aggregates radio gig listings — automated discovery for musicians and bookers.",
    tags: ["TypeScript", "Automation", "Music"],
    repo: "https://github.com/jimbrouw/radio-gig-gopher",
  },
  {
    name: "eBay Helper Pro",
    slug: "ebay-helper-pro",
    description:
      "Python-powered eBay listing assistant — automates research, pricing, and listing workflows to sell faster.",
    tags: ["Python", "eBay API", "Automation"],
    repo: "https://github.com/jimbrouw/ebay-helper-pro",
  },
];
