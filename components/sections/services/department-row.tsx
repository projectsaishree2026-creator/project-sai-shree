import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";
import { getDoctorsForService } from "@/data/doctors";

/** Numbered editorial row: index · name (photo reveals on hover) · summary · arrow. */
export function DepartmentRow({ service, index }: { service: Service; index: number }) {
  const specialists = getDoctorsForService(service.slug);

  return (
    <li className="border-b border-line-strong">
      <Link
        href={`/services/${service.slug}`}
        className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[4rem_1.15fr_minmax(0,1fr)_2.5rem] md:items-start md:gap-6 md:py-10"
      >
        <span className="label-mono pt-2 text-ink-400 md:pt-3">{String(index + 1).padStart(2, "0")}</span>

        <span className="flex items-center gap-0 md:group-hover:gap-5 transition-[gap] duration-500">
          <span className="relative hidden h-16 w-0 shrink-0 overflow-hidden rounded bg-surface-2 transition-[width] duration-500 ease-out md:block md:group-hover:w-24">
            <Image
              src={`/images/specialties/${service.slug}.webp`}
              alt=""
              fill
              sizes="96px"
              className="object-cover"
            />
          </span>
          <span className="font-display text-3xl md:text-[2.75rem] font-semibold leading-none tracking-[-0.045em] text-ink-900 transition-colors group-hover:text-brand-600">
            {service.name}
          </span>
        </span>

        <span className="block">
          <span className="block text-[1.0625rem] leading-relaxed text-ink-600">{service.shortDesc}</span>
          <span className="mt-3 block label-mono text-[0.6875rem] text-ink-400">
            {service.conditions.slice(0, 3).join(" · ")}
          </span>
          {specialists.length > 0 && (
            <span className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-500">
              <CheckCircle2 size={14} className="text-success" />
              {specialists.map((d) => d.name).join(", ")}
            </span>
          )}
        </span>

        <span className="hidden md:flex justify-end pt-2">
          <ArrowRight
            size={24}
            className="text-ink-400 transition-all duration-300 group-hover:-rotate-45 group-hover:text-brand-600"
          />
        </span>
      </Link>
    </li>
  );
}
