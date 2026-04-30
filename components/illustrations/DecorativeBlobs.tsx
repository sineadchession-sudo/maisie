export default function DecorativeBlobs({ dark = false }: { dark?: boolean }) {
  const opacity = dark ? "0.25" : "0.12";
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      style={{ zIndex: 0 }}
    >
      {/* Large lilac blob top-right */}
      <ellipse cx="85%" cy="10%" rx="220" ry="160" fill="#A855F7" fillOpacity={opacity} />
      {/* Yellow blob bottom-left */}
      <ellipse cx="8%" cy="80%" rx="140" ry="100" fill="#FACC15" fillOpacity={opacity} />
      {/* Pink blob top-left */}
      <ellipse cx="12%" cy="20%" rx="90" ry="70" fill="#F472B6" fillOpacity={opacity} />
      {/* Mint blob bottom-right */}
      <ellipse cx="92%" cy="75%" rx="100" ry="80" fill="#34D399" fillOpacity={opacity} />
      {/* Orange dot mid-left */}
      <circle cx="3%" cy="50%" r="35" fill="#FB923C" fillOpacity={opacity} />
      {/* Blue dot top-centre */}
      <circle cx="50%" cy="5%" r="28" fill="#3B82F6" fillOpacity={opacity} />
      {/* Small confetti dots */}
      <circle cx="30%" cy="88%" r="12" fill="#A855F7" fillOpacity={dark ? "0.4" : "0.2"} />
      <circle cx="70%" cy="15%" r="10" fill="#FACC15" fillOpacity={dark ? "0.4" : "0.2"} />
      <circle cx="55%" cy="92%" r="8"  fill="#F472B6" fillOpacity={dark ? "0.4" : "0.2"} />
      <circle cx="18%" cy="45%" r="7"  fill="#34D399" fillOpacity={dark ? "0.4" : "0.2"} />
    </svg>
  );
}
