"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Users, Award, Building2 } from "lucide-react";
import { useInView } from "framer-motion";

function Counter({ target, suffix = "", decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(parseFloat(current.toFixed(decimals)));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: Star,
    iconBg: "#FEF3C7",
    iconColor: "#D97706",
    value: 4.9,
    suffix: "★",
    decimals: 1,
    label: "Google Rating",
    sublabel: "Verified Reviews",
  },
  {
    icon: Users,
    iconBg: "#DBEAFE",
    iconColor: "#2563EB",
    value: 5000,
    suffix: "+",
    decimals: 0,
    label: "Patients Served",
    sublabel: "And Counting",
  },
  {
    icon: Building2,
    iconBg: "#D1FAE5",
    iconColor: "#059669",
    value: 8,
    suffix: "+",
    decimals: 0,
    label: "Specialties",
    sublabel: "Under One Roof",
  },
  {
    icon: Award,
    iconBg: "#EDE9FE",
    iconColor: "#7C3AED",
    value: 10,
    suffix: "+",
    decimals: 0,
    label: "Years Experience",
    sublabel: "Trusted Since 2014",
  },
];

export function TrustBar() {
  return (
    <section className="relative -mt-8 z-20 section-container">
      <div className="bg-white rounded-3xl shadow-xl border border-blue-50 p-6 md:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 divide-x-0 md:divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center px-4"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3"
                style={{ background: stat.iconBg }}
              >
                <stat.icon size={22} style={{ color: stat.iconColor }} />
              </div>
              <p
                className="text-3xl font-extrabold text-gray-900 leading-none mb-1"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Counter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-sm font-semibold text-gray-700">{stat.label}</p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
