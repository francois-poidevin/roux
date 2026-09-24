import { useEffect, useRef } from "react";

/**
 * Maps page scroll progress (0..1) directly to a <video>'s currentTime.
 * Scrubs forward/backward in real time as the user scrolls — no autoplay loop.
 * Seeks are rAF-throttled and coalesced so a fast flick never queues a seek
 * while the decoder is still busy (avoids the classic scroll-video freeze).
 */
export function useScrollVideo() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let duration = 0;
    let targetTime = 0;
    let seeking = false;
    let rafId = null;

    const scrollProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      return max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
    };

    const doSeek = () => {
      seeking = true;
      video.currentTime = targetTime;
    };

    const requestSeek = () => {
      if (!duration) return;
      targetTime = scrollProgress() * duration;
      if (!seeking) doSeek();
    };

    const onLoadedMetadata = () => {
      duration = video.duration || 0;
      requestSeek();
    };
    const onSeeked = () => {
      seeking = false;
      if (Math.abs(video.currentTime - targetTime) > 0.05) doSeek();
    };
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        requestSeek();
      });
    };

    video.addEventListener("loadedmetadata", onLoadedMetadata);
    video.addEventListener("seeked", onSeeked);

    if (reduceMotion) {
      video.currentTime = 0;
    } else {
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", requestSeek, { passive: true });
    }

    return () => {
      video.removeEventListener("loadedmetadata", onLoadedMetadata);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", requestSeek);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return videoRef;
}
