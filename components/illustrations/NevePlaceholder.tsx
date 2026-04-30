// placeholder — replace with Neve's actual portrait when available
export default function NevePlaceholder() {
  return (
    <svg
      aria-hidden="true"
      width="320" height="360"
      viewBox="0 0 320 360"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-xs mx-auto"
    >
      {/* Background shape */}
      <ellipse cx="160" cy="240" rx="130" ry="110" fill="#E0FDF4" />

      {/* Body / torso */}
      <rect x="100" y="220" width="120" height="100" rx="30" fill="#34D399" />
      {/* Blue accent detail */}
      <path d="M118 225 C145 238 178 235 205 225 L205 242 C178 255 145 252 118 242Z" fill="#3B82F6" />

      {/* Neck */}
      <rect x="148" y="192" width="36" height="36" rx="9" fill="#F5CBA7" />

      {/* Head */}
      <ellipse cx="166" cy="168" rx="54" ry="58" fill="#F5CBA7" />

      {/* Light hair */}
      <ellipse cx="166" cy="132" rx="56" ry="38" fill="#c9a96e" />
      <path d="M112 150 C108 185 112 210 120 222" stroke="#c9a96e" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M220 150 C225 178 222 202 215 215" stroke="#c9a96e" strokeWidth="14" fill="none" strokeLinecap="round" />
      <ellipse cx="166" cy="118" rx="50" ry="26" fill="#d4aa78" />

      {/* Face */}
      <circle cx="150" cy="172" r="4.5" fill="#2d1b0e" />
      <circle cx="182" cy="172" r="4.5" fill="#2d1b0e" />
      <circle cx="151.5" cy="170.5" r="1.5" fill="white" />
      <circle cx="183.5" cy="170.5" r="1.5" fill="white" />
      {/* Smile */}
      <path d="M152 188 C159 197 176 197 184 188" stroke="#2d1b0e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="140" cy="185" r="8" fill="#F472B6" fillOpacity="0.3" />
      <circle cx="192" cy="185" r="8" fill="#F472B6" fillOpacity="0.3" />

      {/* Laptop / device hint */}
      <rect x="68" y="310" width="184" height="40" rx="6" fill="#3B82F6" fillOpacity="0.2" />
      <rect x="72" y="314" width="176" height="32" rx="4" fill="#3B82F6" fillOpacity="0.15" />

      {/* Decorative mint dot */}
      <circle cx="292" cy="90" r="12" fill="#34D399" fillOpacity="0.6" />
      <text x="22" y="90" fontSize="18" fill="#3B82F6" aria-hidden="true">✦</text>
      <circle cx="38" cy="300" r="7" fill="#34D399" fillOpacity="0.4" />
      <circle cx="295" cy="270" r="9" fill="#A855F7" fillOpacity="0.3" />
    </svg>
  );
}
