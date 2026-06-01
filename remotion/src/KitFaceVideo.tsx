import { Series } from "remotion";
import { SceneIntro } from "./scenes/SceneIntro";
import { SceneTagline } from "./scenes/SceneTagline";
import { SceneDemo } from "./scenes/SceneDemo";
import { SceneFeatures } from "./scenes/SceneFeatures";
import { SceneOutro } from "./scenes/SceneOutro";

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

// Scene durations in frames
const D_INTRO = 75;     // 2.5s — brand reveal
const D_TAGLINE = 90;   // 3s  — headline
const D_DEMO = 360;     // 12s — app demo
const D_FEATURES = 180; // 6s  — feature callouts
const D_OUTRO = 150;    // 5s  — CTA

export const DURATION_FRAMES = D_INTRO + D_TAGLINE + D_DEMO + D_FEATURES + D_OUTRO; // 855 ≈ 28.5s

export const KitFacePromo: React.FC = () => {
  return (
    <div
      style={{
        width: WIDTH,
        height: HEIGHT,
        background: "#080810",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Series>
        <Series.Sequence durationInFrames={D_INTRO}>
          <SceneIntro />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D_TAGLINE}>
          <SceneTagline />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D_DEMO}>
          <SceneDemo />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D_FEATURES}>
          <SceneFeatures />
        </Series.Sequence>
        <Series.Sequence durationInFrames={D_OUTRO}>
          <SceneOutro />
        </Series.Sequence>
      </Series>
    </div>
  );
};
