interface PillTagProps {
  children: React.ReactNode;
  color?: "yellow" | "lilac" | "pink" | "mint" | "orange" | "blue";
  className?: string;
}

const colorMap: Record<string, string> = {
  yellow: "bg-yellow/20 text-yellow-600 border-yellow",
  lilac:  "bg-lilac-light text-lilac border-lilac",
  pink:   "bg-pink/20 text-pink-600 border-pink",
  mint:   "bg-mint/20 text-emerald-700 border-mint",
  orange: "bg-orange/20 text-orange-600 border-orange",
  blue:   "bg-blue/20 text-blue-600 border-blue",
};

export default function PillTag({ children, color = "lilac", className = "" }: PillTagProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-normal px-3 py-1 rounded-full border ${colorMap[color]} ${className}`}
    >
      {children}
    </span>
  );
}
