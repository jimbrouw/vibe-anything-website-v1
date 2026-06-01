import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const words = ["Turn", "your", "face", "into", "anything."];

export const SceneTagline: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const subOpacity = interpolate(frame, [50, 70], [0, 1], { extrapolateRight: "clamp" });
  const subY = interpolate(frame, [50, 70], [16, 0], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse 80% 50% at 50% 100%, #1a0a2e 0%, #080810 60%)",
      }}
    >
      {/* animated word-by-word headline */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0 18px",
          maxWidth: 900,
          marginBottom: 40,
        }}
      >
        {words.map((word, i) => {
          const wordOpacity = interpolate(frame, [i * 8, i * 8 + 18], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });
          const wordY = interpolate(frame, [i * 8, i * 8 + 18], [30, 0], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });
          const isAnything = word === "anything.";
          return (
            <span
              key={i}
              style={{
                fontSize: 88,
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: -4,
                opacity: wordOpacity,
                transform: `translateY(${wordY}px)`,
                background: isAnything
                  ? "linear-gradient(90deg, #a78bfa, #22d3ee)"
                  : undefined,
                WebkitBackgroundClip: isAnything ? "text" : undefined,
                WebkitTextFillColor: isAnything ? "transparent" : "white",
                color: isAnything ? "transparent" : "white",
                display: "inline-block",
              }}
            >
              {word}
            </span>
          );
        })}
      </div>

      {/* sub-headline */}
      <p
        style={{
          fontSize: 24,
          color: "rgba(255,255,255,0.45)",
          opacity: subOpacity,
          transform: `translateY(${subY}px)`,
          fontWeight: 400,
          letterSpacing: 0.5,
          textAlign: "center",
          maxWidth: 560,
          lineHeight: 1.5,
        }}
      >
        AI-generated avatars from a single photo. Instant, beautiful, yours.
      </p>
    </div>
  );
};
