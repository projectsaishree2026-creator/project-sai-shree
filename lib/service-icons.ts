import {
  Activity,
  Brain,
  Wind,
  Zap,
  Smile,
  Heart,
  Droplets,
  Shield,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  Brain,
  Wind,
  Zap,
  Smile,
  Heart,
  Droplets,
  Shield,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICONS[name] ?? Activity;
}
