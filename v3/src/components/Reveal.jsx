import { useEffect, useRef, useState } from "react";

/**
 * Scroll-reveal wrapper: fades + lifts children into place the first time
 * they enter the viewport. Pure CSS transition, IntersectionObserver trigger.
 */
export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${active ? "reveal-active" : ""} ${className}`}
      style={{ transitionDelay: active ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
