export default function FounderPortrait() {
  return (
    <svg
      aria-hidden="true"
      width="380" height="420"
      viewBox="0 0 380 420"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-sm mx-auto"
    >
      {/* Kitchen counter / table */}
      <rect x="0" y="300" width="380" height="120" rx="0" fill="#2a2a2a" />
      <rect x="0" y="295" width="380" height="18" rx="4" fill="#3a3a3a" />

      {/* Cup of tea */}
      <rect x="60" y="250" width="50" height="45" rx="8" fill="#F472B6" />
      <path d="M110 265 C125 265 125 285 110 285" stroke="#F472B6" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Steam */}
      <path d="M75 245 C75 235 85 230 80 218" stroke="#FB923C" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M90 248 C90 238 98 233 95 222" stroke="#FB923C" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Calendar / journal */}
      <rect x="140" y="240" width="160" height="55" rx="8" fill="#F3E8FF" />
      <rect x="140" y="240" width="160" height="18" rx="8" fill="#A855F7" />
      <rect x="140" y="258" width="160" height="10" rx="0" fill="#A855F7" />
      <line x1="156" y1="268" x2="284" y2="268" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="156" y1="276" x2="260" y2="276" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />
      <line x1="156" y1="284" x2="230" y2="284" stroke="#A855F7" strokeWidth="1" strokeOpacity="0.4" />

      {/* Body / torso */}
      <rect x="130" y="200" width="120" height="110" rx="30" fill="#F472B6" />
      {/* Lilac scarf accent */}
      <path d="M150 205 C175 220 205 215 230 205 L230 225 C205 240 175 235 150 225Z" fill="#A855F7" />

      {/* Neck */}
      <rect x="170" y="170" width="40" height="40" rx="10" fill="#D4A373" />

      {/* Head */}
      <ellipse cx="190" cy="145" rx="58" ry="62" fill="#D4A373" />

      {/* Dark hair */}
      <ellipse cx="190" cy="110" rx="60" ry="40" fill="#2d1b0e" />
      <path d="M132 130 C130 170 135 195 145 205" stroke="#2d1b0e" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M248 130 C250 155 248 180 242 195" stroke="#2d1b0e" strokeWidth="14" fill="none" strokeLinecap="round" />
      {/* Hair detail */}
      <ellipse cx="190" cy="95" rx="55" ry="30" fill="#3d2510" />

      {/* Face */}
      {/* Eyes */}
      <circle cx="170" cy="148" r="5" fill="#2d1b0e" />
      <circle cx="210" cy="148" r="5" fill="#2d1b0e" />
      {/* Eye shine */}
      <circle cx="172" cy="146" r="1.5" fill="white" />
      <circle cx="212" cy="146" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M175 165 C182 175 202 175 210 165" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="162" cy="162" r="9" fill="#F472B6" fillOpacity="0.35" />
      <circle cx="218" cy="162" r="9" fill="#F472B6" fillOpacity="0.35" />

      {/* Decorative star */}
      <text x="310" y="230" fontSize="22" fill="#FACC15" aria-hidden="true">✦</text>
      <text x="30" y="190" fontSize="16" fill="#34D399" aria-hidden="true">✦</text>
      <circle cx="340" cy="130" r="10" fill="#A855F7" fillOpacity="0.4" />
      <circle cx="52" cy="280" r="8" fill="#FACC15" fillOpacity="0.5" />
    </svg>
  );
}
