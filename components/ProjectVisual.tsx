const GRADIENTS = [
  "from-violet-600 to-cyan-500",
  "from-fuchsia-600 to-violet-500",
  "from-cyan-600 to-blue-500",
  "from-emerald-600 to-cyan-500",
  "from-orange-500 to-pink-600",
  "from-blue-600 to-indigo-500",
];

function langColor(lang: string | null): string {
  const map: Record<string, string> = {
    TypeScript: "bg-blue-400",
    JavaScript: "bg-yellow-400",
    Python: "bg-green-400",
    HTML: "bg-orange-400",
    CSS: "bg-pink-400",
  };
  return map[lang ?? ""] ?? "bg-white/30";
}

export default function ProjectVisual({
  name,
  index,
  lang,
  size = "md",
}: {
  name: string;
  index: number;
  lang?: string | null;
  size?: "sm" | "md" | "lg";
}) {
  const initials = name
    .split(/[-_\s]/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  const gradient = GRADIENTS[index % GRADIENTS.length];
  const textSize =
    size === "lg" ? "text-4xl" : size === "sm" ? "text-lg" : "text-2xl";

  return (
    <div
      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${gradient} rounded-lg select-none`}
      aria-hidden
    >
      <span className={`font-black ${textSize} text-white/90 tracking-tight`}>
        {initials || "VA"}
      </span>
    </div>
  );
}

export { langColor };
