import { useEffect, useRef, useState } from "react";

export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const frame = useRef(null);
  const [style, setStyle] = useState({ transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)" });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let tx = 0,
      ty = 0,
      x = 0,
      y = 0;

    function update() {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      setStyle({ transform: `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg)` });
      frame.current = null;
    }

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      tx = (px - 0.5) * max;
      ty = (0.5 - py) * max;
      if (!frame.current) frame.current = requestAnimationFrame(update);
    }

    function onLeave() {
      tx = 0;
      ty = 0;
      if (!frame.current) frame.current = requestAnimationFrame(() => {
        x += (tx - x) * 0.2;
        y += (ty - y) * 0.2;
        setStyle({ transform: `perspective(1000px) rotateX(0deg) rotateY(0deg)` });
        frame.current = null;
      });
    }

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointercancel", onLeave);

    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointercancel", onLeave);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [max]);

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-transform will-change-transform ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
