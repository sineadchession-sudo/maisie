"use client";

import Link from "next/link";

interface CTAButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-lilac text-white px-7 py-3.5 hover:bg-lilac-dark hover:scale-[1.03] shadow-sm",
    secondary:
      "bg-transparent text-lilac px-7 py-3.5 hover:underline underline-offset-4",
  };

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
