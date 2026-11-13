import {
  Activity,
  Brain,
  Wind,
  Zap,
  Smile,
  Heart,
  Droplets,
  Shield,
  Droplet,
  Bone,
  BrainCircuit,
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
  Droplet,
  Bone,
  BrainCircuit,
};

export function getServiceIcon(name: string): LucideIcon {
  return ICONS[name] ?? Activity;
}
