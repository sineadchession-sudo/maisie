interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-lilac bg-lilac-light text-xs font-normal tracking-wide px-3 py-1.5 rounded-full ${className}`}
      style={{ transform: "rotate(-1.5deg)" }}
    >
      {children}
    </span>
  );
}
