export default function FounderPortrait() {
  return (
    <svg
      aria-hidden="true"
      width="320" height="420"
      viewBox="0 0 320 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs mx-auto"
    >
      {/* ── Ground shadow ── */}
      <ellipse cx="160" cy="412" rx="90" ry="8" fill="#D4A373" fillOpacity="0.18" />

      {/* ── Legs ── */}
      <rect x="126" y="310" width="28" height="85" rx="12" fill="#A855F7" />
      <rect x="166" y="310" width="28" height="85" rx="12" fill="#A855F7" />
      {/* Shoes */}
      <ellipse cx="140" cy="394" rx="18" ry="8" fill="#7C3AED" />
      <ellipse cx="180" cy="394" rx="18" ry="8" fill="#7C3AED" />

      {/* ── Body / dress ── */}
      <path
        d="M100 200 C96 250 98 290 104 320 L216 320 C222 290 224 250 220 200 C210 190 180 184 160 184 C140 184 110 190 100 200Z"
        fill="#F472B6"
      />
      {/* Dress collar accent */}
      <path d="M148 184 C152 196 168 196 172 184" stroke="#F9A8D4" strokeWidth="3" fill="none" />

      {/* ── Left arm (holding baby) ── */}
      <path
        d="M100 210 C80 220 66 240 62 268 C58 286 68 292 78 282 C88 272 94 248 104 232Z"
        fill="#F5CBA7"
      />
      {/* Forearm cradle */}
      <path
        d="M62 268 C56 280 60 296 72 296 C84 296 98 280 104 264"
        stroke="#F5CBA7" strokeWidth="18" fill="none" strokeLinecap="round"
      />

      {/* ── Right arm ── */}
      <path
        d="M220 210 C238 220 248 235 245 255 C242 270 228 268 222 252 C216 236 214 222 220 210Z"
        fill="#F5CBA7"
      />
      {/* Right hand resting on baby */}
      <circle cx="238" cy="260" r="12" fill="#F5CBA7" />

      {/* ── Baby (cradled in left arm) ── */}
      {/* Baby body wrapped in blanket */}
      <ellipse cx="70" cy="295" rx="32" ry="22" fill="#FACC15" />
      {/* Baby blanket fold */}
      <path d="M50 288 C58 278 82 278 90 288" stroke="#FB923C" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Baby head */}
      <circle cx="60" cy="270" r="20" fill="#F5CBA7" />
      {/* Baby blonde wisp hair */}
      <path d="M48 260 C52 252 68 250 72 258" stroke="#F0D060" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Baby face */}
      <circle cx="56" cy="268" r="2.5" fill="#2d1b0e" />
      <circle cx="64" cy="268" r="2.5" fill="#2d1b0e" />
      <path d="M55 274 C58 278 63 278 66 274" stroke="#2d1b0e" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Baby cheeks */}
      <circle cx="52" cy="272" r="5" fill="#F472B6" fillOpacity="0.3" />
      <circle cx="68" cy="272" r="5" fill="#F472B6" fillOpacity="0.3" />
      {/* Rattle in baby hand */}
      <circle cx="88" cy="302" r="7" fill="#34D399" />
      <line x1="88" y1="309" x2="88" y2="320" stroke="#34D399" strokeWidth="3" strokeLinecap="round" />
      <circle cx="88" cy="322" r="4" fill="#34D399" />
      {/* Rattle dots */}
      <circle cx="85" cy="300" r="1.5" fill="white" />
      <circle cx="91" cy="304" r="1.5" fill="white" />

      {/* ── Neck ── */}
      <rect x="150" y="168" width="20" height="22" rx="8" fill="#F5CBA7" />

      {/* ── Head ── */}
      <ellipse cx="160" cy="140" rx="50" ry="54" fill="#F5CBA7" />

      {/* ── Blonde hair ── */}
      {/* Back hair */}
      <ellipse cx="160" cy="108" rx="52" ry="38" fill="#F0D060" />
      {/* Side hair left */}
      <path d="M110 120 C104 148 108 175 116 190" stroke="#F0D060" strokeWidth="16" fill="none" strokeLinecap="round" />
      {/* Side hair right */}
      <path d="M210 120 C216 148 212 175 204 190" stroke="#F0D060" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Top hair highlight */}
      <ellipse cx="160" cy="96" rx="44" ry="26" fill="#F5DC5A" />
      {/* Hair parting shine */}
      <path d="M150 90 C155 96 165 96 170 90" stroke="#FFF4A0" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ── Face ── */}
      {/* Eyes */}
      <circle cx="144" cy="144" r="5" fill="#2d1b0e" />
      <circle cx="176" cy="144" r="5" fill="#2d1b0e" />
      {/* Eye shine */}
      <circle cx="146" cy="142" r="1.8" fill="white" />
      <circle cx="178" cy="142" r="1.8" fill="white" />
      {/* Smile */}
      <path d="M148 160 C154 170 170 170 176 160" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="136" cy="156" r="9" fill="#F472B6" fillOpacity="0.3" />
      <circle cx="184" cy="156" r="9" fill="#F472B6" fillOpacity="0.3" />
      {/* Nose */}
      <path d="M158 152 C157 156 163 156 162 152" stroke="#D4A373" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ── Decorative accents ── */}
      <text x="262" y="180" fontSize="22" fill="#FACC15" aria-hidden="true">✦</text>
      <text x="30" y="165" fontSize="16" fill="#34D399" aria-hidden="true">✦</text>
      <circle cx="285" cy="110" r="10" fill="#A855F7" fillOpacity="0.35" />
      <circle cx="44" cy="350" r="7" fill="#FACC15" fillOpacity="0.45" />
    </svg>
  );
}
