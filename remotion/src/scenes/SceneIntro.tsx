import {
  useCurrentFrame,
  useVideoConfig,
  spring,
  interpolate,
} from "remotion";

export const SceneIntro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 14, stiffness: 120 }, delay: 5 });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const ringScale = spring({ frame, fps, config: { damping: 10, stiffness: 80 }, delay: 20 });
  const ringOpacity = interpolate(frame, [20, 40, 65, 75], [0, 0.5, 0.3, 0], { extrapolateRight: "clamp" });

  const textOpacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [30, 50], [20, 0], { extrapolateRight: "clamp" });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse 60% 60% at 50% 50%, #1a0a2e 0%, #080810 100%)",
        position: "relative",
      }}
    >
      {/* pulsing ring */}
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          border: "2px solid rgba(139,92,246,0.5)",
          transform: `scale(${ringScale * 1.8})`,
          opacity: ringOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 340,
          height: 340,
          borderRadius: "50%",
          border: "1px solid rgba(99,210,255,0.3)",
          transform: `scale(${ringScale * 2.4})`,
          opacity: ringOpacity * 0.6,
        }}
      />

      {/* logo circle */}
      <div
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          boxShadow: "0 0 60px rgba(124,58,237,0.4), 0 0 120px rgba(6,182,212,0.2)",
          marginBottom: 32,
        }}
      >
        <span
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          KF
        </span>
      </div>

      {/* wordmark */}
      <div
        style={{
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 800,
            color: "white",
            letterSpacing: -2,
            lineHeight: 1,
          }}
        >
          KitFace
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.4)",
            marginTop: 8,
            letterSpacing: 4,
            textTransform: "uppercase",
            fontWeight: 400,
          }}
        >
          .app
        </div>
      </div>
    </div>
  );
};
