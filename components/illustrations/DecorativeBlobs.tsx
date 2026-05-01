type ShapeColor = string;

interface Shape {
  x: string;
  y: string;
  delay: string;
  duration: string;
  color: ShapeColor;
  type: "star4" | "star6" | "heart" | "flower" | "blob" | "teardrop" | "wave" | "circle";
  size: number;
  opacity: string;
  rotate?: string;
}

function Star4({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  const q = size / 4;
  return (
    <path
      d={`M${h} 0 L${h + q * 0.4} ${h - q * 0.4} L${size} ${h} L${h + q * 0.4} ${h + q * 0.4} L${h} ${size} L${h - q * 0.4} ${h + q * 0.4} L0 ${h} L${h - q * 0.4} ${h - q * 0.4}Z`}
      fill={color}
      fillOpacity={opacity}
    />
  );
}

function Star6({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  const r = h * 0.85;
  const points = Array.from({ length: 6 }, (_, i) => {
    const angle = (i * 60 - 90) * (Math.PI / 180);
    const rInner = r * 0.45;
    const outerX = h + r * Math.cos(angle);
    const outerY = h + r * Math.sin(angle);
    const innerAngle = angle + 30 * (Math.PI / 180);
    const innerX = h + rInner * Math.cos(innerAngle);
    const innerY = h + rInner * Math.sin(innerAngle);
    return `${outerX},${outerY} ${innerX},${innerY}`;
  }).join(" ");
  return <polygon points={points} fill={color} fillOpacity={opacity} />;
}

function Heart({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  return (
    <path
      d={`M${h} ${size * 0.78} C${h} ${size * 0.78} ${size * 0.1} ${size * 0.55} ${size * 0.1} ${size * 0.32} C${size * 0.1} ${size * 0.1} ${size * 0.38} ${size * 0.02} ${h} ${size * 0.28} C${size * 0.62} ${size * 0.02} ${size * 0.9} ${size * 0.1} ${size * 0.9} ${size * 0.32} C${size * 0.9} ${size * 0.55} ${h} ${size * 0.78} ${h} ${size * 0.78}Z`}
      fill={color}
      fillOpacity={opacity}
    />
  );
}

function Flower({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  const pr = size * 0.28;
  return (
    <>
      {[0, 72, 144, 216, 288].map((deg, i) => {
        const rad = (deg - 90) * (Math.PI / 180);
        const cx = h + pr * Math.cos(rad);
        const cy = h + pr * Math.sin(rad);
        return <ellipse key={i} cx={cx} cy={cy} rx={size * 0.22} ry={size * 0.14} fill={color} fillOpacity={opacity} transform={`rotate(${deg}, ${cx}, ${cy})`} />;
      })}
      <circle cx={h} cy={h} r={size * 0.16} fill={color} fillOpacity={String(Math.min(1, parseFloat(opacity) + 0.15))} />
    </>
  );
}

function Blob({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  const s = size;
  return (
    <path
      d={`M${s * 0.72} ${s * 0.18} C${s * 0.9} ${s * 0.1} ${s * 1.05} ${s * 0.42} ${s * 0.88} ${s * 0.62} C${s * 0.76} ${s * 0.82} ${s * 0.44} ${s * 0.98} ${s * 0.26} ${s * 0.84} C${s * 0.06} ${s * 0.7} ${-s * 0.04} ${s * 0.44} ${s * 0.1} ${s * 0.26} C${s * 0.22} ${s * 0.06} ${s * 0.52} ${s * 0.28} ${s * 0.72} ${s * 0.18}Z`}
      fill={color}
      fillOpacity={opacity}
      transform={`translate(${-h * 0.05}, ${-h * 0.05})`}
    />
  );
}

function Teardrop({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size / 2;
  return (
    <path
      d={`M${h} 0 C${size * 0.78} ${size * 0.28} ${size} ${size * 0.55} ${size * 0.82} ${size * 0.75} C${size * 0.64} ${size} ${size * 0.36} ${size} ${size * 0.18} ${size * 0.75} C0 ${size * 0.55} ${size * 0.22} ${size * 0.28} ${h} 0Z`}
      fill={color}
      fillOpacity={opacity}
    />
  );
}

function Wave({ size, color, opacity }: { size: number; color: string; opacity: string }) {
  const h = size * 0.5;
  return (
    <path
      d={`M0 ${h} C${size * 0.15} ${h * 0.3} ${size * 0.35} ${h * 1.7} ${size * 0.5} ${h} C${size * 0.65} ${h * 0.3} ${size * 0.85} ${h * 1.7} ${size} ${h}`}
      stroke={color}
      strokeOpacity={opacity}
      strokeWidth={size * 0.12}
      fill="none"
      strokeLinecap="round"
    />
  );
}

function ShapeEl({ shape }: { shape: Shape }) {
  const svgProps = {
    width: shape.size,
    height: shape.size,
    viewBox: `0 0 ${shape.size} ${shape.size}`,
    style: {
      position: "absolute" as const,
      left: shape.x,
      top: shape.y,
      animation: `float ${shape.duration} ease-in-out infinite`,
      animationDelay: shape.delay,
      transform: shape.rotate ? `rotate(${shape.rotate})` : undefined,
    },
    "aria-hidden": true as const,
  };

  return (
    <svg {...svgProps}>
      {shape.type === "star4"    && <Star4    size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "star6"    && <Star6    size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "heart"    && <Heart    size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "flower"   && <Flower   size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "blob"     && <Blob     size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "teardrop" && <Teardrop size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "wave"     && <Wave     size={shape.size} color={shape.color} opacity={shape.opacity} />}
      {shape.type === "circle"   && <circle cx={shape.size/2} cy={shape.size/2} r={shape.size * 0.42} fill={shape.color} fillOpacity={shape.opacity} />}
    </svg>
  );
}

const LIGHT_SHAPES: Shape[] = [
  { x: "3%",  y: "8%",  type: "star4",    size: 40, color: "#FACC15", opacity: "0.55", delay: "0s",    duration: "6s"  },
  { x: "88%", y: "5%",  type: "blob",     size: 72, color: "#A855F7", opacity: "0.22", delay: "1.2s",  duration: "8s"  },
  { x: "12%", y: "72%", type: "heart",    size: 36, color: "#F472B6", opacity: "0.55", delay: "0.4s",  duration: "7s"  },
  { x: "78%", y: "78%", type: "flower",   size: 48, color: "#34D399", opacity: "0.45", delay: "2s",    duration: "9s"  },
  { x: "55%", y: "6%",  type: "teardrop", size: 32, color: "#FB923C", opacity: "0.45", delay: "3s",    duration: "7.5s"},
  { x: "92%", y: "40%", type: "star6",    size: 38, color: "#FACC15", opacity: "0.5",  delay: "0.8s",  duration: "6.5s"},
  { x: "35%", y: "85%", type: "wave",     size: 56, color: "#3B82F6", opacity: "0.35", delay: "1.6s",  duration: "8.5s"},
  { x: "6%",  y: "38%", type: "circle",   size: 28, color: "#F472B6", opacity: "0.35", delay: "2.4s",  duration: "7s"  },
  { x: "68%", y: "18%", type: "star4",    size: 28, color: "#34D399", opacity: "0.45", delay: "3.5s",  duration: "9.5s"},
  { x: "22%", y: "18%", type: "blob",     size: 55, color: "#FB923C", opacity: "0.18", delay: "0.6s",  duration: "10s" },
  { x: "48%", y: "88%", type: "heart",    size: 24, color: "#A855F7", opacity: "0.45", delay: "4s",    duration: "6s"  },
  { x: "82%", y: "58%", type: "teardrop", size: 26, color: "#FACC15", opacity: "0.4",  delay: "1s",    duration: "7.5s"},
];

const DARK_SHAPES: Shape[] = [
  { x: "4%",  y: "10%", type: "star4",    size: 38, color: "#ffffff", opacity: "0.25", delay: "0s",    duration: "6s"  },
  { x: "85%", y: "8%",  type: "blob",     size: 64, color: "#ffffff", opacity: "0.12", delay: "1.2s",  duration: "8s"  },
  { x: "10%", y: "68%", type: "heart",    size: 32, color: "#ffffff", opacity: "0.2",  delay: "0.5s",  duration: "7s"  },
  { x: "76%", y: "72%", type: "flower",   size: 44, color: "#ffffff", opacity: "0.18", delay: "2s",    duration: "9s"  },
  { x: "52%", y: "5%",  type: "teardrop", size: 28, color: "#ffffff", opacity: "0.2",  delay: "3s",    duration: "7.5s"},
  { x: "90%", y: "42%", type: "star6",    size: 34, color: "#ffffff", opacity: "0.22", delay: "0.8s",  duration: "6.5s"},
  { x: "32%", y: "82%", type: "wave",     size: 50, color: "#ffffff", opacity: "0.18", delay: "1.6s",  duration: "8.5s"},
  { x: "5%",  y: "40%", type: "circle",   size: 22, color: "#ffffff", opacity: "0.16", delay: "2.4s",  duration: "7s"  },
];

export default function DecorativeBlobs({ dark = false }: { dark?: boolean }) {
  const shapes = dark ? DARK_SHAPES : LIGHT_SHAPES;

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {shapes.map((shape, i) => (
        <ShapeEl key={i} shape={shape} />
      ))}
    </div>
  );
}
