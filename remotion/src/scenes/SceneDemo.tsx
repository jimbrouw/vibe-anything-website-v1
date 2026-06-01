import {
  useCurrentFrame,
  spring,
  interpolate,
  useVideoConfig,
  Img,
  staticFile,
} from "remotion";

// Replace these filenames with your actual screenshots in remotion/public/
const SCREENSHOTS = [
  { file: "screenshot-upload.jpg", label: "Upload your photo" },
  { file: "screenshot-processing.jpg", label: "AI generates your kit face" },
  { file: "screenshot-result.jpg", label: "Download your avatar" },
];

const STEP_DURATION = 100; // frames per screenshot step
const TRANSITION = 20;

function StepIndicator({ current, total }: { current: number; total: number }) {
  return (
    <div style={{ display: "flex", gap: 8, marginTop: 24 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === current ? 28 : 8,
            height: 8,
            borderRadius: 4,
            background:
              i === current
                ? "linear-gradient(90deg,#7c3aed,#06b6d4)"
                : "rgba(255,255,255,0.15)",
            transition: "width 0.3s",
          }}
        />
      ))}
    </div>
  );
}

export const SceneDemo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const sceneIn = spring({ frame, fps, config: { damping: 18, stiffness: 100 } });
  const browserOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const browserY = interpolate(frame, [0, 25], [40, 0], { extrapolateRight: "clamp" });

  const currentStep = Math.min(
    Math.floor(frame / STEP_DURATION),
    SCREENSHOTS.length - 1
  );
  const stepFrame = frame - currentStep * STEP_DURATION;
  const imgOpacity = interpolate(stepFrame, [0, TRANSITION], [0, 1], {
    extrapolateRight: "clamp",
  });

  const labelOpacity = interpolate(stepFrame, [10, TRANSITION + 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const step = SCREENSHOTS[currentStep];

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
          "radial-gradient(ellipse 70% 70% at 50% 50%, #10051f 0%, #080810 100%)",
      }}
    >
      {/* section label */}
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 5,
          textTransform: "uppercase",
          color: "rgba(167,139,250,0.7)",
          marginBottom: 24,
          opacity: browserOpacity,
        }}
      >
        How it works
      </div>

      {/* browser chrome mockup */}
      <div
        style={{
          width: 980,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow:
            "0 32px 120px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
          opacity: browserOpacity,
          transform: `translateY(${browserY}px) scale(${0.85 + sceneIn * 0.15})`,
        }}
      >
        {/* browser bar */}
        <div
          style={{
            background: "#1c1c24",
            padding: "12px 20px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", gap: 7 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div key={c} style={{ width: 12, height: 12, borderRadius: "50%", background: c }} />
            ))}
          </div>
          <div
            style={{
              flex: 1,
              background: "#111118",
              borderRadius: 6,
              padding: "6px 14px",
              fontSize: 13,
              color: "rgba(255,255,255,0.35)",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 11 }}>🔒</span>
            kitface.app
          </div>
        </div>

        {/* screenshot area */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            position: "relative",
            background: "#12121a",
            overflow: "hidden",
          }}
        >
          <Img
            src={staticFile(step.file)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: imgOpacity,
            }}
          />
          {/* overlay gradient at bottom */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 120,
              background:
                "linear-gradient(transparent, rgba(8,8,16,0.6))",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      {/* step label */}
      <div
        style={{
          marginTop: 28,
          opacity: labelOpacity,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: -0.5,
          }}
        >
          {`Step ${currentStep + 1} — ${step.label}`}
        </div>
        <StepIndicator current={currentStep} total={SCREENSHOTS.length} />
      </div>
    </div>
  );
};
