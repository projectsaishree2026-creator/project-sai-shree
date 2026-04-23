import { Activity } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-14 h-14">
          <div className="absolute inset-0 rounded-full border-4 border-primary/20 animate-ping" />
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
            <Activity className="w-7 h-7 text-white" />
          </div>
        </div>
        <div className="text-center">
          <p className="font-display font-bold text-gray-900 text-sm" style={{ fontFamily: "var(--font-display)" }}>
            Sai Shree Polyclinic
          </p>
          <p className="text-xs text-gray-400 mt-0.5">Loading...</p>
        </div>
      </div>
    </div>
  );
}
