import Image from "next/image";

const SERVICE_CARDS = [
  {
    title: "Pathology",
    desc: "Advanced diagnostic tests, blood work, and lab investigations with rapid result turnaround for accurate diagnosis.",
    img: "/images/pathology.webp",
  },
  {
    title: "Endoscopy",
    desc: "State-of-the-art endoscopic procedures for gastrointestinal diagnosis and treatment by specialist gastroenterologists.",
    img: "/images/endoscopy.webp",
  },
  {
    title: "Medicine Shop",
    desc: "In-house pharmacy stocked with prescribed medications, supplements, and OTC products for your convenience.",
    img: "/images/medicine-shop.webp",
  },
];

/** Supporting facilities (diagnostics & pharmacy) shown alongside the departments. */
export function AboutServiceCards() {
  return (
    <div className="grid grid-cols-1 border-l border-t border-line-strong md:grid-cols-3">
      {SERVICE_CARDS.map((item, i) => (
        <article key={item.title} className="group border-b border-r border-line-strong bg-white">
          <div className="relative aspect-[16/10] overflow-hidden bg-surface-2">
            <Image
              src={item.img}
              alt={`${item.title} at Sai Shree Polyclinic Cuttack`}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          <div className="p-6 md:p-7">
            <div className="flex items-center justify-between label-mono text-[0.6875rem]">
              <span className="text-ink-400">F.{String(i + 1).padStart(2, "0")}</span>
              <span className="flex items-center gap-1.5 text-success">
                <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
                Available
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.035em]">{item.title}</h3>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-500">{item.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
