import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { doctors, type Doctor } from "@/data/doctors";
import { clinic } from "@/data/clinic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { SectionHeader } from "@/components/shared/section-header";
import { DoctorSpotlight } from "@/components/sections/doctors/doctor-spotlight";
import { VisitWebsiteButton } from "@/components/ui/visit-website-button";

export function DoctorsSection() {
  return (
    <section className="dark-scope frame section bg-ink-900">
      <div className="container-x">
        <SectionHeader
          tone="dark"
          index={3}
          eyebrow="Specialists"
          meta={`All ${doctors.length} doctors`}
          title="Meet the doctors"
          titleHighlight="behind your care."
          action={
            <Link href="/doctors" className="btn-ghost-light">
              All doctors <ArrowRight size={15} />
            </Link>
          }
        />
        <div className="mt-14 md:mt-20">
          <DoctorSpotlight />
        </div>
      </div>
    </section>
  );
}

export function DoctorCard({ doctor, showBio = false }: { doctor: Doctor; showBio?: boolean }) {
  const waUrl = getWhatsAppUrl(
    `Hello ${clinic.name}, I'd like to book an appointment with ${doctor.name} (${doctor.specialty}).`
  );

  return (
    <article className="group card flex h-full flex-col overflow-hidden transition-colors hover:border-ink-900">
      <Link
        href={`/doctors/${doctor.slug}`}
        className="relative block aspect-[4/5] overflow-hidden bg-surface-2"
        aria-label={`View profile of ${doctor.name}`}
      >
        <Image
          src={doctor.image}
          alt={`${doctor.name}, ${doctor.specialty} specialist at Sai Shree Polyclinic`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span className="absolute left-0 top-0 bg-ink-900 px-3 py-2 label-mono text-[0.625rem] text-white">
          {doctor.specialty}
        </span>
        <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink-900 opacity-0 transition-opacity group-hover:opacity-100">
          <ArrowUpRight size={16} />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.035em]">
          <Link href={`/doctors/${doctor.slug}`} className="hover:text-brand-600 transition-colors">
            {doctor.name}
          </Link>
        </h3>
        {/* Fixed heights (2 lines / 3 lines) keep every card in a row aligned */}
        <p className="mt-2 line-clamp-2 min-h-[3.25em] label-mono text-[0.6875rem] leading-relaxed text-ink-500">
          {doctor.qualification ?? doctor.role}
        </p>
        {showBio && (
          <p className="mt-4 line-clamp-3 min-h-[4.875em] text-[0.9375rem] leading-relaxed text-ink-600">{doctor.bio}</p>
        )}

        <dl className="mt-5 grid grid-cols-2 border-y border-line text-sm">
          <div className="flex flex-col-reverse py-3">
            <dt className="mt-1 label-mono text-[0.625rem] text-ink-400">{doctor.experience ? "Experience" : "Specialty"}</dt>
            <dd className="font-semibold text-ink-900">{doctor.experience ?? doctor.specialty}</dd>
          </div>
          <div className="flex flex-col-reverse border-l border-line py-3 pl-4">
            <dt className="mt-1 label-mono text-[0.625rem] text-ink-400">Available</dt>
            <dd className="font-semibold text-ink-900">{doctor.available}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm min-w-[8.5rem] flex-1 px-3"
            aria-label={`Book an appointment with ${doctor.name}`}
          >
            Book visit
          </a>
          <Link href={`/doctors/${doctor.slug}`} className="btn-secondary btn-sm min-w-[6rem] flex-1 px-3 sm:flex-none">
            Profile
          </Link>
          <VisitWebsiteButton url={doctor.website} doctorName={doctor.name} compact />
        </div>
      </div>
    </article>
  );
}
