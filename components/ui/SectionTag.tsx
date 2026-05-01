interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionTag({ children, className = "", dark = false }: SectionTagProps) {
  const colours = dark
    ? "text-white bg-white/20"
    : "text-lilac bg-lilac-light";

  return (
    <span
      className={`inline-flex items-center gap-2 ${colours} text-sm font-semibold tracking-wide px-5 py-3 rounded-full ${className}`}
      style={{ transform: "rotate(-1.5deg)" }}
    >
      {children}
    </span>
  );
}
