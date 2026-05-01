// placeholder — replace with Neve's actual portrait when available
export default function NevePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      width="340" height="420"
      viewBox="0 0 340 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs mx-auto"
    >
      {/* ── Ground shadow ── */}
      <ellipse cx="170" cy="412" rx="110" ry="8" fill="#D4A373" fillOpacity="0.18" />

      {/* ═══ NEVE (left figure) ═══ */}

      {/* Legs */}
      <rect x="116" y="310" width="28" height="85" rx="12" fill="#3B82F6" />
      <rect x="156" y="310" width="28" height="85" rx="12" fill="#3B82F6" />
      {/* Shoes */}
      <ellipse cx="130" cy="394" rx="18" ry="8" fill="#1D4ED8" />
      <ellipse cx="170" cy="394" rx="18" ry="8" fill="#1D4ED8" />

      {/* Body */}
      <path
        d="M92 200 C88 250 90 290 96 320 L204 320 C210 290 212 250 208 200 C198 190 172 184 150 184 C128 184 102 190 92 200Z"
        fill="#34D399"
      />
      {/* Collar accent */}
      <path d="M138 184 C142 196 158 196 162 184" stroke="#6EE7B7" strokeWidth="3" fill="none" />

      {/* Left arm (side, free) */}
      <path
        d="M92 215 C76 226 68 245 72 262 C76 274 88 272 96 258 C102 244 98 228 92 215Z"
        fill="#F5CBA7"
      />

      {/* Right arm (holding boy's hand) — arm reaching right/downward */}
      <path
        d="M208 215 C224 228 236 248 238 265 C240 278 228 282 220 268 C212 254 208 234 208 215Z"
        fill="#F5CBA7"
      />
      {/* Right hand reaching down to boy */}
      <circle cx="236" cy="272" r="11" fill="#F5CBA7" />

      {/* Neck */}
      <rect x="141" y="170" width="18" height="20" rx="7" fill="#F5CBA7" />

      {/* Head */}
      <ellipse cx="150" cy="142" rx="48" ry="52" fill="#F5CBA7" />

      {/* Light brown hair */}
      <ellipse cx="150" cy="110" rx="50" ry="36" fill="#C4956A" />
      <path d="M102 122 C96 148 100 172 108 188" stroke="#C4956A" strokeWidth="15" fill="none" strokeLinecap="round" />
      <path d="M198 122 C204 148 200 172 192 188" stroke="#C4956A" strokeWidth="14" fill="none" strokeLinecap="round" />
      <ellipse cx="150" cy="96" rx="42" ry="24" fill="#D4A373" />
      <path d="M140 91 C145 97 155 97 160 91" stroke="#E8C49A" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Face */}
      <circle cx="136" cy="144" r="4.5" fill="#2d1b0e" />
      <circle cx="164" cy="144" r="4.5" fill="#2d1b0e" />
      <circle cx="137.5" cy="142.5" r="1.5" fill="white" />
      <circle cx="165.5" cy="142.5" r="1.5" fill="white" />
      <path d="M138 160 C144 169 158 169 164 160" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="128" cy="155" r="8" fill="#F472B6" fillOpacity="0.28" />
      <circle cx="172" cy="155" r="8" fill="#F472B6" fillOpacity="0.28" />
      <path d="M147 152 C146 156 154 156 153 152" stroke="#D4A373" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* ═══ BOY (right figure) ═══ */}

      {/* Boy legs */}
      <rect x="254" y="330" width="20" height="65" rx="9" fill="#FB923C" />
      <rect x="280" y="330" width="20" height="65" rx="9" fill="#FB923C" />
      {/* Boy shoes */}
      <ellipse cx="264" cy="393" rx="14" ry="7" fill="#EA580C" />
      <ellipse cx="290" cy="393" rx="14" ry="7" fill="#EA580C" />

      {/* Boy body */}
      <path
        d="M244 262 C242 290 244 316 248 334 L306 334 C310 316 312 290 310 262 C302 254 286 250 277 250 C268 250 252 254 244 262Z"
        fill="#FACC15"
      />

      {/* Boy left arm — holding Neve's hand */}
      <path
        d="M244 270 C232 278 228 294 232 306 C236 316 248 312 252 300 C256 288 252 276 244 270Z"
        fill="#F5CBA7"
      />
      <circle cx="229" cy="310" r="10" fill="#F5CBA7" />

      {/* Boy right arm — holding truck */}
      <path
        d="M310 270 C322 280 328 295 325 308 C322 318 312 314 308 302 C304 290 306 278 310 270Z"
        fill="#F5CBA7"
      />
      <circle cx="326" cy="310" r="9" fill="#F5CBA7" />

      {/* Toy truck in boy's right hand */}
      {/* Truck body */}
      <rect x="318" y="300" width="34" height="20" rx="5" fill="#EF4444" />
      {/* Truck cab */}
      <rect x="338" y="292" width="14" height="14" rx="4" fill="#EF4444" />
      {/* Cab window */}
      <rect x="340" y="294" width="10" height="8" rx="2" fill="#93C5FD" />
      {/* Wheels */}
      <circle cx="326" cy="321" r="6" fill="#1f2937" />
      <circle cx="346" cy="321" r="6" fill="#1f2937" />
      <circle cx="326" cy="321" r="2.5" fill="#6b7280" />
      <circle cx="346" cy="321" r="2.5" fill="#6b7280" />
      {/* Truck stripe */}
      <rect x="318" y="308" width="34" height="4" rx="1" fill="#FB923C" />

      {/* Boy neck */}
      <rect x="269" y="240" width="16" height="16" rx="6" fill="#F5CBA7" />

      {/* Boy head */}
      <ellipse cx="277" cy="218" rx="36" ry="38" fill="#F5CBA7" />

      {/* Boy hair (short, warm brown) */}
      <ellipse cx="277" cy="194" rx="38" ry="26" fill="#A0522D" />
      <path d="M241 210 C239 224 242 235 248 240" stroke="#A0522D" strokeWidth="12" fill="none" strokeLinecap="round" />
      <path d="M313 210 C315 224 312 235 306 240" stroke="#A0522D" strokeWidth="10" fill="none" strokeLinecap="round" />

      {/* Boy face */}
      <circle cx="266" cy="220" r="4" fill="#2d1b0e" />
      <circle cx="288" cy="220" r="4" fill="#2d1b0e" />
      <circle cx="267.5" cy="218.5" r="1.4" fill="white" />
      <circle cx="289.5" cy="218.5" r="1.4" fill="white" />
      <path d="M268 230 C273 237 283 237 288 230" stroke="#2d1b0e" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="260" cy="226" r="7" fill="#F472B6" fillOpacity="0.28" />
      <circle cx="294" cy="226" r="7" fill="#F472B6" fillOpacity="0.28" />

      {/* Joined hands between Neve and boy */}
      <ellipse cx="232" cy="291" rx="14" ry="10" fill="#F5CBA7" />

      {/* ── Decorative accents ── */}
      <text x="290" y="148" fontSize="20" fill="#34D399" aria-hidden="true">✦</text>
      <text x="65"  y="142" fontSize="14" fill="#3B82F6" aria-hidden="true">✦</text>
      <circle cx="314" cy="95"  r="10" fill="#34D399" fillOpacity="0.55" />
      <circle cx="58"  cy="360" r="7"  fill="#FACC15" fillOpacity="0.45" />
      <circle cx="318" cy="380" r="8"  fill="#A855F7"  fillOpacity="0.3" />
    </svg>
  );
}
