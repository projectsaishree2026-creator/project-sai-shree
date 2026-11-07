import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { clinic, directionsUrl } from "@/data/clinic";
import { navigation } from "@/config/navigation";
import { locations } from "@/data/locations";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { OpenStatus } from "@/components/shared/open-status";

const HOURS = [
  { day: "Monday – Saturday", time: "9:00 AM – 7:00 PM" },
  { day: "Sunday", time: "Closed" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dark-scope frame bg-ink-950 text-ink-400 pb-24 md:pb-0">
      <div className="container-x pt-20 pb-14 lg:pt-28">
        {/* Statement + hours */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_minmax(0,1fr)] lg:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Sai Shree Polyclinic — Home">
              <Image src="/logo.png" alt="Sai Shree Polyclinic logo" width={52} height={52} />
              <span className="font-display text-xl font-semibold tracking-[-0.03em] text-white">
                Sai Shree Polyclinic
              </span>
            </Link>
            <p className="mt-10 display-md text-white">
              Specialist care for Cuttack, <span className="text-brand-400">under one roof.</span>
            </p>
          </div>

          <div className="panel-dark p-5 sm:p-7 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
              <p className="font-semibold text-white">Clinic hours</p>
              <OpenStatus />
            </div>
            <dl className="mt-6 divide-y divide-white/[0.07] border-y border-white/[0.07]">
              {HOURS.map((h) => (
                <div key={h.day} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-3 text-sm">
                  <dt>{h.day}</dt>
                  <dd className="font-mono text-white">{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href={`tel:+91${clinic.phone}`} className="fx-phone btn-primary px-4">
                Call {clinic.phoneDisplay}
              </a>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-ghost-light">
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-white/[0.07] pt-12 sm:grid-cols-2 lg:grid-cols-[2fr_minmax(0,1fr)_1.3fr]">
          <FooterColumn title="Departments">
            <ul className="grid grid-cols-1 gap-x-8 gap-y-3 text-[0.9375rem] sm:grid-cols-2">
              {navigation.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Clinic">
            <ul className="space-y-3 text-[0.9375rem]">
              {navigation.main.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Health articles
                </Link>
              </li>
            </ul>
          </FooterColumn>

          <FooterColumn title="Visit us">
            <address className="not-italic space-y-3 text-[0.9375rem] leading-relaxed">
              <p>{clinic.address}</p>
              <p>
                <a href={`tel:+91${clinic.phone}`} className="fx-phone text-white hover:text-brand-300">
                  {clinic.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${clinic.email}`} className="break-all hover:text-white">
                  {clinic.email}
                </a>
              </p>
            </address>
            <a
              href={directionsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1 text-[0.9375rem] font-medium text-brand-300 hover:text-white"
            >
              Get directions <ArrowUpRight size={15} />
            </a>
          </FooterColumn>
        </div>
      </div>

      {/* Patients travelling in + Odia site */}
      <div className="border-t border-white/[0.07]">
        <div className="container-x flex flex-col gap-4 py-6 text-[0.9375rem] lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Patients from other areas" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="label-mono text-[0.6875rem] text-brand-300">Patients from</span>
            {locations.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="hover:text-white transition-colors">
                {l.name}
              </Link>
            ))}
          </nav>
          <Link href="/or" hrefLang="or" lang="or" className="text-white hover:text-brand-300 transition-colors">
            ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ →
          </Link>
        </div>
      </div>

      <div className="border-t border-white/[0.07]">
        <div className="container-x flex flex-col gap-2 py-6 label-mono text-[0.6875rem] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinic.name} · Cuttack, Odisha
          </p>
          <p>In an emergency, visit the nearest hospital emergency department.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 flex items-center gap-2 label-mono text-brand-300">
        <span className="h-[6px] w-[6px] bg-brand-400" aria-hidden="true" />
        {title}
      </h3>
      {children}
    </div>
  );
}
