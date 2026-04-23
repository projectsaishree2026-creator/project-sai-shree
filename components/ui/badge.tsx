import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  color?: string;
  className?: string;
  dot?: boolean;
}

export function Badge({ children, color, className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold",
        !color && "bg-primary/10 text-primary",
        className
      )}
      style={
        color
          ? { background: `${color}14`, color, border: `1px solid ${color}25` }
          : undefined
      }
    >
      {dot && (
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: color || "currentColor" }}
        />
      )}
      {children}
    </span>
  );
}
