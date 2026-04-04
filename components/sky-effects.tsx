"use client";

// Delays are tuned so each cloud starts at a different x position across the viewport.
// position ≈ (|delay| / duration) * totalTravel - 320px
const CLOUDS = [
  { top: "3%",  scale: 1.3,  duration: "60s", delay: "-9s"  }, // ~0px
  { top: "14%", scale: 0.75, duration: "75s", delay: "-20s" }, // ~240px
  { top: "7%",  scale: 1.0,  duration: "50s", delay: "-19s" }, // ~480px
  { top: "20%", scale: 0.9,  duration: "68s", delay: "-34s" }, // ~720px
  { top: "11%", scale: 1.15, duration: "85s", delay: "-52s" }, // ~960px
  { top: "1%",  scale: 0.65, duration: "45s", delay: "-33s" }, // ~1200px
];

const STARS = [
  { x: 4,  y: 10, s: 2,   d: "0s"    },
  { x: 11, y: 5,  s: 1.5, d: "0.6s"  },
  { x: 19, y: 18, s: 1,   d: "1.3s"  },
  { x: 27, y: 7,  s: 2.5, d: "0.3s"  },
  { x: 35, y: 14, s: 1,   d: "2.1s"  },
  { x: 42, y: 3,  s: 1.5, d: "0.9s"  },
  { x: 50, y: 20, s: 2,   d: "1.7s"  },
  { x: 58, y: 8,  s: 1,   d: "0.4s"  },
  { x: 65, y: 15, s: 2.5, d: "2.4s"  },
  { x: 72, y: 4,  s: 1.5, d: "1.1s"  },
  { x: 80, y: 22, s: 1,   d: "0.7s"  },
  { x: 87, y: 9,  s: 2,   d: "1.9s"  },
  { x: 93, y: 17, s: 1.5, d: "0.2s"  },
  { x: 8,  y: 28, s: 1,   d: "1.5s"  },
  { x: 23, y: 32, s: 2,   d: "2.8s"  },
  { x: 38, y: 26, s: 1.5, d: "0.5s"  },
  { x: 54, y: 35, s: 1,   d: "3.1s"  },
  { x: 69, y: 30, s: 2.5, d: "1.2s"  },
  { x: 83, y: 38, s: 1,   d: "2.6s"  },
  { x: 96, y: 25, s: 2,   d: "0.8s"  },
  { x: 15, y: 42, s: 1.5, d: "1.8s"  },
  { x: 31, y: 48, s: 1,   d: "3.4s"  },
  { x: 47, y: 44, s: 2,   d: "0.1s"  },
  { x: 62, y: 50, s: 1.5, d: "2.3s"  },
  { x: 77, y: 45, s: 1,   d: "1.6s"  },
  { x: 91, y: 52, s: 2.5, d: "3.7s"  },
  { x: 3,  y: 55, s: 1,   d: "0.9s"  },
  { x: 45, y: 58, s: 2,   d: "2.0s"  },
  { x: 74, y: 60, s: 1.5, d: "1.4s"  },
  { x: 88, y: 63, s: 1,   d: "3.0s"  },
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
      <div className="relative h-20 w-72">
        {/* Base body */}
        <div className="absolute bottom-0 left-0 h-12 w-72 rounded-full bg-white/95 blur-[3px]" />
        {/* Left puff */}
        <div className="absolute bottom-6 left-4  h-14 w-20 rounded-full bg-white/95 blur-[2px]" />
        {/* Left-center puff */}
        <div className="absolute bottom-8 left-16 h-18 w-24 rounded-full bg-white    blur-[2px]" />
        {/* Center puff — tallest */}
        <div className="absolute bottom-9 left-28 h-20 w-22 rounded-full bg-white    blur-[1px]" />
        {/* Right-center puff */}
        <div className="absolute bottom-7 left-44 h-16 w-20 rounded-full bg-white/95 blur-[2px]" />
        {/* Right puff */}
        <div className="absolute bottom-4 left-56 h-12 w-16 rounded-full bg-white/90 blur-[3px]" />
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
        animation: `twinkle ${2.5 + (x % 3)}s ease-in-out ${d} infinite`,
        boxShadow: s >= 2 ? `0 0 ${s + 2}px ${s}px rgba(255,255,255,0.4)` : "none",
      }}
    />
  );
}

export default function SkyEffects() {
  return (
    <>
      {/* Clouds — light mode only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden z-0" style={{ contain: "paint" }}>
        {CLOUDS.map((c, i) => <Cloud key={i} {...c} />)}
      </div>

      {/* Stars — dark mode only */}
      <div className="absolute top-0 left-0 right-0 h-[65%] pointer-events-none hidden dark:block z-0">
        {STARS.map((s, i) => <Star key={i} {...s} />)}
      </div>
    </>
  );
}
