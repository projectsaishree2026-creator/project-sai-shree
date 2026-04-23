import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  children,
  className,
  glass = false,
  hover = false,
  padding = "md",
}: CardProps) {
  return (
    <div
      className={cn(
        glass
          ? "glass-card"
          : "bg-white border border-gray-100 rounded-2xl shadow-sm",
        hover &&
          "transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        paddingMap[padding],
        className
      )}
    >
      {children}
    </div>
  );
}

export function GlassContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass-card p-6 md:p-8", className)}>{children}</div>
  );
}
