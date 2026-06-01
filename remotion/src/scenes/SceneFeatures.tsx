import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

const FEATURES = [
  {
    icon: "⚡",
    title: "Instant generation",
    desc: "Upload once, get your avatar in seconds. No waiting, no queue.",
    gradient: "linear-gradient(135deg,#7c3aed,#5b21b6)",
  },
  {
    icon: "🎨",
    title: "Multiple styles",
    desc: "From animated to photorealistic — pick the look that fits you.",
    gradient: "linear-gradient(135deg,#0891b2,#0e7490)",
  },
  {
    icon: "📱",
    title: "Download anywhere",
    desc: "High-res files ready for LinkedIn, Slack, socials, or anywhere.",
    gradient: "linear-gradient(135deg,#7c3aed,#06b6d4)",
  },
];

const STAGGER = 30;

export const SceneFeatures: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headingOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const headingY = interpolate(frame, [0, 20], [20, 0], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 100% 60% at 50% 0%, #130824 0%, #080810 70%)",
        padding: "0 80px",
        gap: 52,
      }}
    >
      {/* heading */}
      <div
        style={{
          opacity: headingOpacity,
          transform: `translateY(${headingY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: "rgba(167,139,250,0.7)",
            marginBottom: 12,
          }}
        >
          Why KitFace
        </div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1.1,
          }}
        >
          Built for creators.
        </div>
      </div>

      {/* feature cards */}
      <div
        style={{
          display: "flex",
          gap: 28,
          width: "100%",
          maxWidth: 1200,
        }}
      >
        {FEATURES.map((feat, i) => {
          const delay = 20 + i * STAGGER;
          const cardOpacity = interpolate(frame, [delay, delay + 25], [0, 1], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });
          const cardY = interpolate(frame, [delay, delay + 25], [36, 0], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          });

          return (
            <div
              key={i}
              style={{
                flex: 1,
                background: "#141420",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 20,
                padding: 36,
                opacity: cardOpacity,
                transform: `translateY(${cardY}px)`,
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: feat.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 26,
                }}
              >
                {feat.icon}
              </div>
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "white",
                  letterSpacing: -0.5,
                }}
              >
                {feat.title}
              </div>
              <div
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.6,
                }}
              >
                {feat.desc}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
