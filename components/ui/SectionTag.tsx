interface SectionTagProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionTag({ children, className = "" }: SectionTagProps) {
  return (
    <span
      className={`inline-flex items-center gap-2 text-lilac bg-lilac-light text-sm font-semibold tracking-wide px-5 py-3 rounded-full ${className}`}
      style={{ transform: "rotate(-1.5deg)" }}
    >
      {children}
    </span>
  );
}
