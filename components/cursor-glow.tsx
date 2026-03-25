"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!blobRef.current) return;
      blobRef.current.style.left = `${e.clientX}px`;
      blobRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={blobRef}
      className="pointer-events-none fixed z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-25 bg-sky-300 dark:opacity-20 dark:bg-teal-500 transition-[left,top] duration-300 ease-out"
    />
  );
}
