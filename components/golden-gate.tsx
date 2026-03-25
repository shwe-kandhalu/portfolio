"use client";

import { useEffect, useRef } from "react";

const W = 1440;
const H = 500;
const DECK_Y = 380;
const TOWER_TOP_Y = 18;
const T1_X = 420;
const T2_X = 1020;
const CABLE_MID_Y = 352;

function getCableY(x: number) {
  const t = (x - T1_X) / (T2_X - T1_X);
  return TOWER_TOP_Y + (CABLE_MID_Y - TOWER_TOP_Y) * 4 * t * (1 - t);
}

function Tower({ cx }: { cx: number }) {
  const lw = 14;
  const gap = 13;
  const lx = cx - lw - gap / 2;
  const rx = cx + gap / 2;
  const tw = lw * 2 + gap;
  const bars = [58, 100, 144, 190, 238, 286, 334];
  return (
    <g>
      {/* Top cap */}
      <rect x={lx - 5} y={TOWER_TOP_Y} width={tw + 10} height={12} rx={2} />
      {/* Left leg */}
      <rect x={lx} y={TOWER_TOP_Y + 12} width={lw} height={DECK_Y - TOWER_TOP_Y - 12} />
      {/* Right leg */}
      <rect x={rx} y={TOWER_TOP_Y + 12} width={lw} height={DECK_Y - TOWER_TOP_Y - 12} />
      {/* Cross bars */}
      {bars.map((y) => (
        <rect key={y} x={lx} y={y} width={tw} height={9} rx={1} />
      ))}
    </g>
  );
}

function MainCable() {
  return (
    <path
      d={`M ${T1_X - lw(T1_X)},${TOWER_TOP_Y + 12} Q ${(T1_X + T2_X) / 2},${CABLE_MID_Y} ${T2_X + lw(T2_X)},${TOWER_TOP_Y + 12}`}
      fill="none"
      strokeWidth={5}
    />
  );
}

// helper — just returns the leg offset from center
function lw(_cx: number) { return 14 + 13 / 2; }

function Suspenders() {
  const els = [];
  for (let x = T1_X + 22; x < T2_X; x += 18) {
    const cy = getCableY(x);
    els.push(<line key={x} x1={x} y1={cy} x2={x} y2={DECK_Y} strokeWidth={1} />);
  }
  return <>{els}</>;
}

export default function GoldenGate() {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t1off = lw(T1_X);
  const t2off = lw(T2_X);
  const cablePath = `M ${T1_X - t1off},${TOWER_TOP_Y + 12} Q ${(T1_X + T2_X) / 2},${CABLE_MID_Y} ${T2_X + t2off},${TOWER_TOP_Y + 12}`;
  // mirrored cable for reflection
  const reflY = (y: number) => DECK_Y + (DECK_Y - y);
  const reflCablePath = `M ${T1_X - t1off},${reflY(TOWER_TOP_Y + 12)} Q ${(T1_X + T2_X) / 2},${reflY(CABLE_MID_Y)} ${T2_X + t2off},${reflY(TOWER_TOP_Y + 12)}`;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="absolute bottom-0 left-0 right-0 w-screen pointer-events-none will-change-transform"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden
    >
      <defs>
        {/* Fog gradient at base */}
        <linearGradient id="gg-fog" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c2410c" stopOpacity="0" />
          <stop offset="100%" stopColor="#c2410c" stopOpacity="0.12" />
        </linearGradient>
        {/* Water gradient */}
        <linearGradient id="gg-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ea580c" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#ea580c" stopOpacity="0.02" />
        </linearGradient>
        {/* Reflection fade */}
        <linearGradient id="gg-refl" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#000" stopOpacity="1" />
        </linearGradient>
        <mask id="refl-mask">
          <rect x="0" y={DECK_Y} width={W} height={H - DECK_Y} fill="url(#gg-refl)" />
        </mask>
        {/* Dark mode glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Fog layer */}
      <rect x={0} y={DECK_Y - 90} width={W} height={110} fill="url(#gg-fog)" stroke="none" />

      {/* ── Main bridge ── */}
      <g fill="#ea580c" stroke="#ea580c" opacity="0.28" className="dark:opacity-[0.38] dark:[filter:url(#glow)]">
        {/* Approach cables */}
        <line x1={-60} y1={295} x2={T1_X - t1off} y2={TOWER_TOP_Y + 12} strokeWidth={4.5} fill="none" />
        <line x1={T2_X + t2off} y1={TOWER_TOP_Y + 12} x2={W + 60} y2={295} strokeWidth={4.5} fill="none" />
        {/* Main span cable */}
        <path d={cablePath} fill="none" strokeWidth={4.5} />
        {/* Suspenders */}
        <g fill="none" opacity="0.85"><Suspenders /></g>
        {/* Deck */}
        <rect x={0} y={DECK_Y} width={W} height={8} stroke="none" />
        <rect x={0} y={DECK_Y + 8} width={W} height={3} opacity={0.5} stroke="none" />
        {/* Towers */}
        <g stroke="none">
          <Tower cx={T1_X} />
          <Tower cx={T2_X} />
        </g>
      </g>

      {/* ── Water ── */}
      <rect x={0} y={DECK_Y + 12} width={W} height={H - DECK_Y - 12} fill="url(#gg-water)" stroke="none" />
      {[20, 32, 46, 62, 80].map((offset, i) => (
        <line
          key={offset}
          x1={0} y1={DECK_Y + offset}
          x2={W} y2={DECK_Y + offset}
          stroke="#ea580c"
          strokeWidth={1.5}
          opacity={0.1 - i * 0.015}
        />
      ))}

      {/* ── Reflection ── */}
      <g mask="url(#refl-mask)" fill="#ea580c" stroke="#ea580c" opacity="0.12">
        <path d={reflCablePath} fill="none" strokeWidth={4.5} />
        <line x1={-60} y1={reflY(295)} x2={T1_X - t1off} y2={reflY(TOWER_TOP_Y + 12)} strokeWidth={4.5} fill="none" />
        <line x1={T2_X + t2off} y1={reflY(TOWER_TOP_Y + 12)} x2={W + 60} y2={reflY(295)} strokeWidth={4.5} fill="none" />
        <g fill="#ea580c" stroke="none">
          <Tower cx={T1_X} />
          <Tower cx={T2_X} />
        </g>
      </g>
    </svg>
  );
}
