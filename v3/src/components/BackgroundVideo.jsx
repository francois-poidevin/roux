import { useScrollVideo } from "../hooks/useScrollVideo";

/**
 * Fixed full-bleed video whose playhead is driven by scroll position
 * (see useScrollVideo). Kept as the site's one continuous motion layer.
 */
export default function BackgroundVideo() {
  const videoRef = useScrollVideo();

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        ref={videoRef}
        src={`${import.meta.env.BASE_URL}video/fixed_shot_Commercial_purpose.mp4`}
        muted
        playsInline
        preload="auto"
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/20 via-ink-950/35 to-ink-950/70" />
    </div>
  );
}
