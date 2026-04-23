import Link from "next/link";
import { Home, CalendarCheck } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center mesh-bg px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold gradient-text mb-4" style={{ fontFamily: "var(--font-display)" }}>
          404
        </div>
        <h1 className="font-display font-bold text-2xl text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Page Not Found
        </h1>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go Home
          </Link>
          <Link href="/contact#appointment" className="btn-outline">
            <CalendarCheck size={16} /> Book Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
