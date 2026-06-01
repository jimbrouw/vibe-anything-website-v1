import { useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";

export const SceneOutro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 100 }, delay: 5 });
  const logoOpacity = interpolate(frame, [5, 25], [0, 1], { extrapolateRight: "clamp" });

  const headingOpacity = interpolate(frame, [25, 50], [0, 1], { extrapolateRight: "clamp" });
  const headingY = interpolate(frame, [25, 50], [20, 0], { extrapolateRight: "clamp" });

  const ctaScale = spring({ frame, fps, config: { damping: 12, stiffness: 120 }, delay: 55 });
  const ctaOpacity = interpolate(frame, [55, 75], [0, 1], { extrapolateRight: "clamp" });

  const urlOpacity = interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" });

  // fade out near the end
  const endFade = interpolate(frame, [130, 150], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
          "radial-gradient(ellipse 80% 80% at 50% 50%, #1e0b3e 0%, #080810 100%)",
        opacity: bgOpacity * endFade,
        gap: 32,
      }}
    >
      {/* logo */}
      <div
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          boxShadow: "0 0 80px rgba(124,58,237,0.5), 0 0 160px rgba(6,182,212,0.2)",
        }}
      >
        <span style={{ fontSize: 40, fontWeight: 900, color: "white", letterSpacing: -1 }}>
          KF
        </span>
      </div>

      {/* heading */}
      <div
        style={{
          opacity: headingOpacity,
          transform: `translateY(${headingY}px)`,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            letterSpacing: -3,
            lineHeight: 1,
            background: "linear-gradient(90deg, #a78bfa, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            color: "transparent",
          }}
        >
          Your face. Any style.
        </div>
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.4)",
            fontWeight: 400,
            letterSpacing: 0.5,
          }}
        >
          Create your avatar in seconds.
        </div>
      </div>

      {/* CTA button */}
      <div
        style={{
          transform: `scale(${ctaScale})`,
          opacity: ctaOpacity,
        }}
      >
        <div
          style={{
            background: "linear-gradient(90deg, #7c3aed, #06b6d4)",
            borderRadius: 16,
            padding: "20px 52px",
            fontSize: 22,
            fontWeight: 700,
            color: "white",
            letterSpacing: -0.5,
            boxShadow: "0 8px 40px rgba(124,58,237,0.5)",
          }}
        >
          Try KitFace free →
        </div>
      </div>

      {/* URL */}
      <div
        style={{
          opacity: urlOpacity,
          fontSize: 18,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: 1,
        }}
      >
        kitface.app
      </div>
    </div>
  );
};
