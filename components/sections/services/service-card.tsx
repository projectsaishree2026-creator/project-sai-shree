import { createElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { getServiceIcon } from "@/lib/service-icons";

export function ServiceCard({ service, headingLevel = "h3" }: { service: Service; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card card-hover flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
        <Image
          src={`/images/specialties/${service.slug}.webp`}
          alt={`${service.name} at Sai Shree Polyclinic, Cuttack`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="relative flex flex-1 flex-col px-5 pb-5">
        <span className="-mt-6 mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-4 border-white bg-brand-600 text-white">
          {createElement(getServiceIcon(service.icon), { size: 20 })}
        </span>
        <Heading className="text-lg font-bold">{service.name}</Heading>
        <p className="mt-2 text-sm leading-relaxed text-ink-500">{service.shortDesc}</p>
        <p className="mt-4 text-[0.8125rem] text-ink-400 line-clamp-1">
          {service.conditions.slice(0, 3).join(" · ")}
        </p>
        <span className="link-arrow mt-auto pt-5">
          Learn more <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
