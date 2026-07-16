"use client";

// Delays are tuned so each cloud starts at a different x position across the viewport.
// position ≈ (|delay| / duration) * totalTravel - 320px
const CLOUDS = [
  { top: "5%",  scale: 0.9, duration: "90s",  delay: "-9s"  },
  { top: "16%", scale: 0.6, duration: "110s", delay: "-40s" },
  { top: "10%", scale: 0.75, duration: "100s", delay: "-70s" },
];

const STARS = [
  { x: 4,  y: 10, s: 1.5, d: "0s"    },
  { x: 19, y: 18, s: 1,   d: "1.3s"  },
  { x: 35, y: 14, s: 1,   d: "2.1s"  },
  { x: 50, y: 20, s: 1.5, d: "1.7s"  },
  { x: 65, y: 15, s: 1,   d: "2.4s"  },
  { x: 80, y: 22, s: 1,   d: "0.7s"  },
  { x: 93, y: 17, s: 1.5, d: "0.2s"  },
  { x: 8,  y: 28, s: 1,   d: "1.5s"  },
  { x: 38, y: 26, s: 1,   d: "0.5s"  },
  { x: 69, y: 30, s: 1.5, d: "1.2s"  },
  { x: 91, y: 52, s: 1,   d: "3.7s"  },
  { x: 45, y: 58, s: 1,   d: "2.0s"  },
];

function Cloud({ top, scale, duration, delay }: (typeof CLOUDS)[number]) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top,
        animation: `drift ${duration} linear ${delay} infinite`,
        transform: `scale(${scale})`,
        transformOrigin: "left center",
      }}
    >
      <div className="relative h-16 w-96">
        {/* Long wispy base */}
        <div className="absolute bottom-0 left-0 h-6 w-96 rounded-full bg-white/30 blur-[10px]" />
        {/* Mid layer: slightly narrower, more opaque */}
        <div className="absolute bottom-2 left-8 h-8 w-80 rounded-full bg-white/35 blur-[8px]" />
        {/* Upper wisp left */}
        <div className="absolute bottom-5 left-12 h-7 w-44 rounded-full bg-white/25 blur-[12px]" />
        {/* Upper wisp right */}
        <div className="absolute bottom-4 left-48 h-6 w-36 rounded-full bg-white/20 blur-[14px]" />
        {/* Bright core */}
        <div className="absolute bottom-3 left-24 h-9 w-52 rounded-full bg-white/40 blur-[6px]" />
        {/* Trailing edge fade */}
        <div className="absolute bottom-1 left-72 h-4 w-28 rounded-full bg-white/15 blur-[16px]" />
      </div>
    </div>
  );
}

function Star({ x, y, s, d }: (typeof STARS)[number]) {
  return (
    <div
      className="absolute rounded-full bg-white"
      style={{
        left: `${x}%`,
        top:  `${y}%`,
        width:  s,
        height: s,
        animation: `twinkle ${3.5 + (x % 3)}s ease-in-out ${d} infinite`,
      }}
    />
  );
}

export default function SkyEffects() {
  return (
    <>
      {/* Clouds: light mode only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden z-0" style={{ contain: "paint" }}>
        {CLOUDS.map((c, i) => <Cloud key={i} {...c} />)}
      </div>

      {/* Stars: dark mode only */}
      <div className="absolute top-0 left-0 right-0 h-[65%] pointer-events-none hidden dark:block z-0">
        {STARS.map((s, i) => <Star key={i} {...s} />)}
      </div>
    </>
  );
}
