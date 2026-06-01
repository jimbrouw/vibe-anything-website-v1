import { Composition } from "remotion";
import { KitFacePromo, DURATION_FRAMES, FPS, WIDTH, HEIGHT } from "./KitFaceVideo";

export const Root: React.FC = () => {
  return (
    <Composition
      id="KitFacePromo"
      component={KitFacePromo}
      durationInFrames={DURATION_FRAMES}
      fps={FPS}
      width={WIDTH}
      height={HEIGHT}
      defaultProps={{}}
    />
  );
};
