"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <p className="eyebrow mb-4 justify-center">Something went wrong</p>
        <h1 className="text-3xl md:text-4xl font-bold">We couldn&apos;t load this page</h1>
        <p className="mt-4 text-ink-500">
          Please try again. If the problem continues, call us at{" "}
          <a href={`tel:+91${clinic.phone}`} className="fx-phone font-semibold text-ink-900 hover:text-brand-600">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className="btn-primary">
            <RefreshCw size={16} /> Try again
          </button>
          <Link href="/" className="btn-secondary">
            <Home size={16} /> Go home
          </Link>
          <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-secondary sm:hidden">
            <Phone size={16} /> Call
          </a>
        </div>
      </div>
    </section>
  );
}
