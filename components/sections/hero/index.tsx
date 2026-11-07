import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Star } from "lucide-react";
import { clinic } from "@/data/clinic";
import { doctors } from "@/data/doctors";
import { services } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/icons";
import { ECGLine } from "@/components/shared/ecg-line";
import { OpenStatus } from "@/components/shared/open-status";
import { LanguageSwitch } from "@/components/shared/language-switch";

const STATS = [
  { value: clinic.stats.rating, unit: "/5", label: "Google rating" },
  { value: clinic.stats.patients, label: "Patients treated" },
  { value: String(services.length), label: "Specialist departments" },
  { value: clinic.stats.experience, unit: " yrs", label: "Serving Cuttack" },
];

export function Hero() {
  /** Movement-only entrance (CSS) — text is visible in the server HTML from the first frame. */
  const rise = (delay: number) => ({ style: { animationDelay: `${delay}s` } });

  return (
    <section className="dark-scope frame relative overflow-hidden bg-ink-900 text-ink-300">
      <div
        className="absolute inset-0 grid-lines [--grid-line:rgb(255_255_255/0.035)] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-48 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-brand-500/25 blur-[140px]"
        aria-hidden="true"
      />

      {/* First screen — fills the viewport below the 5rem navbar; type scales with height so nothing is cut off */}
      <div className="relative flex min-h-[calc(100svh-5rem)] flex-col">
        <div className="container-x pt-5 md:pt-8">
          <div className="flex flex-wrap items-center justify-between gap-4 label-mono">
            {/* Location is already in the subtitle — mobile keeps only status + language */}
            <p className="hidden md:flex items-center gap-2 text-brand-300">
              <span className="h-[7px] w-[7px] bg-brand-400" aria-hidden="true" />
              Mangalabag · Cuttack, Odisha
            </p>
            <div className="flex w-full flex-wrap items-center justify-between gap-3 md:w-auto md:flex-wrap md:justify-start md:gap-4">
              <OpenStatus className="max-md:rounded-full max-md:border max-md:border-white/10 max-md:bg-white/[0.04] max-md:px-3 max-md:py-[0.4375rem] max-md:text-[0.6875rem]" />
              <LanguageSwitch
                href="/or"
                to="or"
                tone="dark"
                className="normal-case tracking-normal font-sans max-md:border-white/10 max-md:bg-white/[0.04] max-md:px-3 max-md:text-[0.8125rem]"
              />
            </div>
          </div>
        </div>

        <div className="container-x flex flex-1 flex-col justify-center py-7 md:py-8">
          <h1 {...rise(0.05)} className="rise text-white">
            <span className="mb-5 block font-display text-[0.8125rem] md:mb-5 md:text-2xl font-medium tracking-[-0.02em] text-brand-300 max-md:flex max-md:w-fit max-md:items-center max-md:gap-2 max-md:rounded-full max-md:border max-md:border-brand-400/25 max-md:bg-brand-500/10 max-md:px-3.5 max-md:py-1.5 max-md:tracking-normal">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400 md:hidden" aria-hidden="true" />
              Multispecialty polyclinic in Cuttack
            </span>{" "}
            <span className="display-xl block text-[clamp(2.5rem,13vw,4.5rem)] md:text-[clamp(2.75rem,min(8.5vw,15svh),7.75rem)]">
              Specialist care,
              <br />
              <span className="text-brand-400">close to home.</span>
            </span>
          </h1>

          <p
            {...rise(0.18)}
            className="rise mt-5 md:mt-7 max-w-4xl font-display text-[1.1875rem] leading-[1.4] tracking-[-0.02em] md:text-[clamp(1.375rem,min(3vw,4.8svh),2.75rem)] font-medium md:leading-[1.12] md:tracking-[-0.035em] text-ink-400"
          >
            {services.length} departments. {doctors.length} specialists. One roof in Mangalabag, Cuttack.
            <span className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-brand-400 animate-blink" aria-hidden="true" />
          </p>

          {/* Mobile only — trust card and actions inside the first screen (desktop shows these below the fold) */}
          <div {...rise(0.3)} className="rise mt-7 md:hidden">
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-sm">
              <div className="flex -space-x-2.5 shrink-0">
                {doctors.slice(0, 3).map((d) => (
                  <span
                    key={d.id}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-ink-900 bg-ink-800"
                  >
                    <Image src={d.image} alt="" fill sizes="40px" className="object-cover object-top" />
                  </span>
                ))}
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-900 bg-brand-500 font-mono text-[0.6875rem] font-semibold text-white">
                  +{doctors.length - 3}
                </span>
              </div>
              <div className="min-w-0">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-white">
                  <Star size={14} className="fill-amber-400 text-amber-400" aria-hidden="true" />
                  {clinic.stats.rating} on Google
                </p>
                <p className="mt-0.5 text-[0.8125rem] leading-snug text-ink-400">MD, MS, DM &amp; MCh specialists</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Link href="/contact#appointment" className="btn-primary btn-lg col-span-2 w-full">
                Book appointment <ArrowRight size={16} />
              </Link>
              <a
                href={getWhatsAppUrl(`Hello ${clinic.name}, I'd like to book an appointment.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light h-12 w-full px-3"
              >
                <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp
              </a>
              <a href={`tel:${clinic.phoneE164}`} className="btn-ghost-light h-12 w-full px-3">
                <Phone size={15} aria-hidden="true" /> Call
              </a>
            </div>
          </div>
        </div>

        {/* Heartbeat */}
        <div className="relative h-14 shrink-0 text-brand-400 md:h-[clamp(3.5rem,9svh,8rem)]" aria-hidden="true">
          <ECGLine />
        </div>
      </div>

      <div className="container-x relative">
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 py-10 md:py-14 lg:grid-cols-[1.2fr_minmax(0,1fr)] lg:items-center">
          <div {...rise(0.3)} className="rise flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="max-md:hidden flex -space-x-3 shrink-0">
              {doctors.slice(0, 5).map((d) => (
                <span
                  key={d.id}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-ink-900 bg-ink-800"
                >
                  <Image src={d.image} alt="" fill sizes="48px" className="object-cover object-top" />
                </span>
              ))}
              <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink-900 bg-brand-500 font-mono text-xs font-semibold text-white">
                +{doctors.length - 5}
              </span>
            </div>
            <p className="max-w-xl text-lg leading-relaxed">
              MD, MS, DM and MCh qualified doctors, in-house diagnostics and a pharmacy — so you can see the
              right specialist without travelling across the city.
            </p>
          </div>

          <div {...rise(0.38)} className="rise max-md:hidden flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact#appointment" className="btn-primary btn-lg">
              Book appointment <ArrowRight size={16} />
            </Link>
            <a
              href={getWhatsAppUrl(`Hello ${clinic.name}, I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light btn-lg"
            >
              <WhatsAppIcon className="w-4 h-4 text-pulse" /> WhatsApp
            </a>
          </div>
        </div>

        <dl className="grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col-reverse py-8 md:py-10 pr-4",
                i % 2 === 1 ? "border-l border-white/10 pl-6" : "",
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
                i === 2 ? "lg:border-l lg:pl-6" : "",
              ].join(" ")}
            >
              <dt className="mt-3 label-mono text-[0.6875rem] text-ink-400">{s.label}</dt>
              <dd className="font-display text-4xl md:text-5xl font-semibold tracking-[-0.05em] text-white">
                {s.value}
                {s.unit && <span className="text-ink-500">{s.unit}</span>}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
