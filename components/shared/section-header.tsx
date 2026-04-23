import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2
        className="font-display text-3xl md:text-[2.5rem] font-extrabold leading-tight text-gray-900 mb-4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}{" "}
        {titleHighlight && <span className="gradient-text">{titleHighlight}</span>}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
