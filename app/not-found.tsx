import Link from "next/link";
import { Home, CalendarCheck, ArrowRight } from "lucide-react";
import { services } from "@/data/services";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-7xl md:text-8xl font-extrabold tracking-tight text-brand-100">404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold">Page not found</h1>
        <p className="mt-4 max-w-md text-ink-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home size={16} /> Go home
          </Link>
          <Link href="/contact#appointment" className="btn-secondary">
            <CalendarCheck size={16} /> Book appointment
          </Link>
        </div>
        <div className="mt-14 w-full max-w-2xl">
          <p className="mb-4 text-sm font-medium text-ink-500">Or browse a department</p>
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <Link key={s.id} href={`/services/${s.slug}`} className="chip hover:border-brand-200 hover:text-brand-700">
                {s.name} <ArrowRight size={13} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
