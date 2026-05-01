// Filled day cells (zero-indexed, out of 35 total cells in 5×7 grid)
const FILLED: Set<number> = new Set([0, 2, 3, 6, 7, 9, 11, 14, 15, 17, 19, 21, 22, 24, 26, 28, 32]);

function CalendarCell({ x, y, w, h, filled }: { x: number; y: number; w: number; h: number; filled: boolean }) {
  if (!filled) return <rect x={x} y={y} width={w} height={h} rx="2" fill="white" stroke="#E5D9F0" strokeWidth="0.8" />;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="2" fill="#F3E8FF" stroke="#C4B5FD" strokeWidth="0.8" />
      {/* gestural scribble lines */}
      <path
        d={`M${x + 3} ${y + h * 0.35} C${x + w * 0.4} ${y + h * 0.28} ${x + w * 0.6} ${y + h * 0.42} ${x + w - 3} ${y + h * 0.35}`}
        stroke="#A855F7"
        strokeWidth="1.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d={`M${x + 4} ${y + h * 0.6} C${x + w * 0.3} ${y + h * 0.55} ${x + w * 0.65} ${y + h * 0.68} ${x + w - 4} ${y + h * 0.6}`}
        stroke="#A855F7"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </g>
  );
}

export default function TableScene() {
  // Calendar grid layout
  const cols = 7;
  const rows = 5;
  const pageLeft  = 180;  // right page x start
  const pageTop   = 62;   // calendar grid y start (below header)
  const pageW     = 196;  // right page width
  const pageH     = 262;  // right page height
  const headerH   = 42;
  const dayLabelH = 22;
  const gridTop   = pageTop + headerH + dayLabelH;
  const gridH     = pageH - headerH - dayLabelH;
  const cellW     = pageW / cols;
  const cellH     = gridH / rows;

  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <svg
      aria-hidden="true"
      width="400" height="360"
      viewBox="0 0 400 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto"
    >
      {/* ── Table surface ── */}
      <rect x="0" y="0" width="400" height="360" rx="16" fill="#F0E6D3" />
      {/* Subtle wood grain suggestion */}
      <line x1="0" y1="90"  x2="400" y2="92"  stroke="#E8D9C4" strokeWidth="0.8" opacity="0.6" />
      <line x1="0" y1="200" x2="400" y2="202" stroke="#E8D9C4" strokeWidth="0.8" opacity="0.4" />
      <line x1="0" y1="300" x2="400" y2="298" stroke="#E8D9C4" strokeWidth="0.8" opacity="0.5" />

      {/* ── Open journal / calendar ── */}
      {/* Drop shadow */}
      <rect x="24" y="34" width="370" height="292" rx="6" fill="#C4A882" fillOpacity="0.25" />
      {/* Journal outer */}
      <rect x="20" y="30" width="370" height="292" rx="6" fill="#FAFAF8" />
      {/* Left page */}
      <rect x="20" y="30" width="155" height="292" rx="6" fill="#FFFFF8" />
      {/* Left page title area */}
      <rect x="32" y="45" width="110" height="16" rx="3" fill="#F3E8FF" />
      <text x="87" y="57" textAnchor="middle" fontSize="9" fontWeight="700" fill="#A855F7" fontFamily="sans-serif">
        GRATITUDE JOURNAL
      </text>
      {/* Left page ruled lines */}
      {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
        <line key={i}
          x1="32" y1={78 + i * 22}
          x2="162" y2={78 + i * 22}
          stroke="#EDE0F0" strokeWidth="0.8"
        />
      ))}
      {/* A few filled lines suggesting writing */}
      <path d="M32 78 C55 74 90 80 132 77" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.55" />
      <path d="M32 100 C60 97 105 102 128 99" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45" />
      <path d="M32 122 C50 119 80 124 110 121" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
      <path d="M32 144 C62 141 100 146 130 143" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.35" />
      {/* Small lilac heart doodle on left page */}
      <path
        d="M140 240 C140 240 128 230 128 222 C128 216 133 212 140 218 C147 212 152 216 152 222 C152 230 140 240 140 240Z"
        fill="#F472B6" fillOpacity="0.45"
      />

      {/* Binding spine */}
      <rect x="172" y="30" width="10" height="292" fill="#E8DCCC" />
      <line x1="177" y1="30" x2="177" y2="322" stroke="#D4C4B0" strokeWidth="1" />

      {/* Right page — calendar */}
      <rect x="182" y="30" width="208" height="292" rx="6" fill="#FEFEFE" />

      {/* Month header */}
      <rect x="182" y="30" width="208" height={headerH} rx="6" fill="#A855F7" />
      <rect x="182" y={30 + headerH - 6} width="208" height="6" fill="#A855F7" />
      <text x="286" y="57" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="sans-serif" letterSpacing="2">
        MAY 2025
      </text>

      {/* Day labels */}
      {dayLabels.map((d, i) => (
        <text
          key={i}
          x={pageLeft + i * cellW + cellW / 2}
          y={pageTop + headerH + 15}
          textAnchor="middle"
          fontSize="8"
          fontWeight="600"
          fill="#A855F7"
          fontFamily="sans-serif"
        >
          {d}
        </text>
      ))}

      {/* Calendar grid */}
      {Array.from({ length: rows * cols }, (_, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const x = pageLeft + col * cellW + 1;
        const y = gridTop + row * cellH + 1;
        const w = cellW - 2;
        const h = cellH - 2;
        return <CalendarCell key={idx} x={x} y={y} w={w} h={h} filled={FILLED.has(idx)} />;
      })}

      {/* ── Tea cup (bird's eye view, top-left corner) ── */}
      {/* Saucer */}
      <circle cx="66" cy="290" r="52" fill="#E8D9C8" />
      <circle cx="66" cy="290" r="46" fill="#E8D9C8" stroke="#D4C4B0" strokeWidth="1" />
      {/* Mug body (top-down ring) */}
      <circle cx="66" cy="290" r="36" fill="white" stroke="#D4BFA0" strokeWidth="2" />
      {/* Handle (to the right) */}
      <path
        d="M100 279 C118 279 118 301 100 301"
        stroke="#D4BFA0" strokeWidth="5" fill="none" strokeLinecap="round"
      />
      {/* Tea surface */}
      <circle cx="66" cy="290" r="28" fill="#C2782A" />
      {/* Tea surface highlight / ripple */}
      <ellipse cx="59" cy="284" rx="9" ry="5" fill="#D4903A" fillOpacity="0.6" transform="rotate(-20,59,284)" />
      <ellipse cx="74" cy="297" rx="6" ry="3" fill="#B56820" fillOpacity="0.4" />
      {/* Steam wisps */}
      <path d="M56 255 C54 244 60 238 57 228" stroke="#D4BFA0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M66 250 C64 240 70 234 67 224" stroke="#D4BFA0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55" />
      <path d="M76 254 C74 243 80 237 77 227" stroke="#D4BFA0" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.6" />

      {/* ── Pen beside the cup ── */}
      <rect
        x="108" y="280" width="6" height="56" rx="3"
        fill="#7C3AED"
        transform="rotate(-18, 111, 308)"
      />
      <polygon
        points="108,335 114,335 111,344"
        fill="#F5CBA7"
        transform="rotate(-18, 111, 308)"
      />
      <rect
        x="108" y="278" width="6" height="8" rx="2"
        fill="#FACC15"
        transform="rotate(-18, 111, 308)"
      />

      {/* ── Decorative floating shapes (same global shape treatment) ── */}
      {/* Yellow star top-right corner */}
      <path
        d="M372 18 L374 26 L382 26 L376 31 L378 39 L372 34 L366 39 L368 31 L362 26 L370 26Z"
        fill="#FACC15" fillOpacity="0.7"
        style={{ animation: "float 6s ease-in-out infinite", animationDelay: "0s" }}
      />
      {/* Pink heart bottom-right */}
      <path
        d="M368 318 C368 318 356 308 356 300 C356 294 361 290 368 296 C375 290 380 294 380 300 C380 308 368 318 368 318Z"
        fill="#F472B6" fillOpacity="0.6"
        style={{ animation: "float 8s ease-in-out infinite", animationDelay: "1.5s" }}
      />
      {/* Mint blob top-left */}
      <path
        d="M18 20 C24 14 34 16 36 24 C38 32 30 40 22 38 C14 36 10 28 18 20Z"
        fill="#34D399" fillOpacity="0.55"
        style={{ animation: "float 7s ease-in-out infinite", animationDelay: "0.8s" }}
      />
      {/* Orange teardrop */}
      <path
        d="M15 170 C13 160 20 150 22 165 C24 178 18 183 15 170Z"
        fill="#FB923C" fillOpacity="0.55"
        style={{ animation: "float 9s ease-in-out infinite", animationDelay: "2s" }}
      />
    </svg>
  );
}
