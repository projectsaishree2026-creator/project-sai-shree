import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { DepartmentRow } from "@/components/sections/services/department-row";

export function ServicesSection() {
  return (
    <section className="frame section bg-paper">
      <div className="container-x">
        <SectionHeader
          index={2}
          eyebrow="Departments"
          meta={<Link href="/services" className="hover:text-ink-900">All services →</Link>}
          title={`${services.length} specialties,`}
          titleHighlight="one front desk."
          action={
            <Link href="/services" className="btn-outline">
              Explore departments <ArrowRight size={15} />
            </Link>
          }
        />

        <ol className="mt-14 md:mt-20 border-t border-line-strong">
          {services.map((service, i) => (
            <DepartmentRow key={service.id} service={service} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
