"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home } from "lucide-react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center mesh-bg px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="font-display font-bold text-2xl text-gray-900 mb-3" style={{ fontFamily: "var(--font-display)" }}>
          Something went wrong
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          We encountered an unexpected error. Please try again or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn-primary">
            <RefreshCw size={16} /> Try Again
          </button>
          <Link href="/" className="btn-outline">
            <Home size={16} /> Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
