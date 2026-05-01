export default function PhoneMockup() {
  return (
    <div className="relative flex items-center justify-center select-none">
      {/* Decorative elements around phone */}
      {/* Star burst - yellow */}
      <svg
        aria-hidden="true"
        className="absolute -top-6 -right-4 animate-float"
        width="48" height="48" viewBox="0 0 48 48"
      >
        <text x="4" y="36" fontSize="32" fill="#FACC15">✦</text>
      </svg>

      {/* Heart - pink */}
      <svg
        aria-hidden="true"
        className="absolute top-12 -left-8 animate-float-slow"
        width="36" height="36" viewBox="0 0 36 36"
      >
        <path
          d="M18 30 C18 30 4 21 4 12 C4 7.5 7.5 4 12 4 C14.5 4 16.8 5.2 18 7.1 C19.2 5.2 21.5 4 24 4 C28.5 4 32 7.5 32 12 C32 21 18 30 18 30Z"
          fill="#F472B6"
        />
      </svg>

      {/* Flower - mint */}
      <svg
        aria-hidden="true"
        className="absolute -bottom-4 -left-6 animate-float"
        width="40" height="40" viewBox="0 0 40 40"
        style={{ animationDelay: "2s" }}
      >
        <circle cx="20" cy="10" r="6" fill="#34D399" />
        <circle cx="30" cy="20" r="6" fill="#34D399" />
        <circle cx="20" cy="30" r="6" fill="#34D399" />
        <circle cx="10" cy="20" r="6" fill="#34D399" />
        <circle cx="20" cy="20" r="5" fill="#FACC15" />
      </svg>

      {/* Annotation tag */}
      <div
        className="absolute -bottom-2 -right-8 bg-orange text-white text-xs font-normal px-2.5 py-1.5 rounded-xl shadow-md max-w-[130px]"
        style={{ transform: "rotate(3deg)", zIndex: 10 }}
        aria-hidden="true"
      >
        today she sat up 🎉
      </div>

      {/* Phone body */}
      <svg
        aria-hidden="true"
        width="220" height="440"
        viewBox="0 0 220 440"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-xl"
      >
        {/* Phone outer shell */}
        <rect x="2" y="2" width="216" height="436" rx="32" fill="#ffffff" stroke="#A855F7" strokeWidth="3" />

        {/* Status bar */}
        <rect x="2" y="2" width="216" height="48" rx="32" fill="#A855F7" />
        <rect x="2" y="30" width="216" height="20" fill="#A855F7" />
        {/* maisie label */}
        <text x="110" y="32" textAnchor="middle" fontSize="13" fontWeight="900" fill="white" fontFamily="sans-serif">
          maisie
        </text>
        {/* Camera pill */}
        <rect x="82" y="6" width="56" height="14" rx="7" fill="#7C3AED" />

        {/* Photo placeholder */}
        <rect x="18" y="68" width="184" height="180" rx="16" fill="#F3E8FF" />
        {/* Photo icon */}
        <circle cx="110" cy="148" r="28" fill="#A855F7" fillOpacity="0.2" />
        <circle cx="110" cy="148" r="18" fill="#A855F7" fillOpacity="0.35" />
        <path d="M100 148 L120 148 M110 138 L110 158" stroke="#A855F7" strokeWidth="3" strokeLinecap="round" />

        {/* Date stamp */}
        <rect x="18" y="260" width="120" height="16" rx="6" fill="#F3E8FF" />
        <rect x="18" y="284" width="184" height="12" rx="5" fill="#F3E8FF" />
        <rect x="18" y="304" width="140" height="12" rx="5" fill="#F3E8FF" />
        <rect x="18" y="324" width="100" height="12" rx="5" fill="#F3E8FF" />

        {/* Capture button */}
        <circle cx="110" cy="388" r="26" fill="#F3E8FF" />
        <circle cx="110" cy="388" r="20" fill="#A855F7" />
        <circle cx="110" cy="388" r="10" fill="white" />
      </svg>
    </div>
  );
}
