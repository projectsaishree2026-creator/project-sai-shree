import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionIndex } from "@/components/shared/section-index";
import { FadeUp } from "@/components/animations";

export function Manifesto() {
  return (
    <section className="frame section bg-white">
      <div className="container-x">
        <SectionIndex index={1} label="Our approach" meta="Listen → Diagnose → Treat → Follow up" />

        <FadeUp>
          <p className="display-lg mt-14 md:mt-20 max-w-6xl text-ink-900">
            Good medicine starts with listening. We bring Cuttack&apos;s specialists together so you spend
            less time travelling and <span className="text-brand-500">more time getting better.</span>
          </p>
        </FadeUp>

        <div className="mt-14 md:mt-20 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div />
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-ink-500">
              Every patient is unique. Our MD, MS, DM and MCh qualified doctors take time to explain your
              condition, create a personalised treatment plan, and stay with you through follow-up — with
              diagnostics and a pharmacy in the same building.
            </p>
            <Link href="/about" className="link-arrow mt-8">
              Our story <ArrowRight size={14} />
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
