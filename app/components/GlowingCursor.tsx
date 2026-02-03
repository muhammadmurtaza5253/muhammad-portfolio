"use client";

import { useEffect, useState } from "react";

export function GlowingCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer glow */}
      <div
        className="pointer-events-none fixed z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 opacity-40 blur-xl transition-opacity duration-200"
        style={{
          left: position.x,
          top: position.y,
        }}
        aria-hidden
      />
      {/* Inner bright spot */}
      <div
        className="pointer-events-none fixed z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-fuchsia-400 shadow-[0_0_12px_rgba(139,92,246,0.8)] transition-opacity duration-200"
        style={{
          left: position.x,
          top: position.y,
        }}
        aria-hidden
      />
    </>
  );
}
