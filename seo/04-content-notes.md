# Phase 4a — Page content: where it lives and how to approve it

## Where the content is

| Page | Source file |
|---|---|
| 8 department pages (intro, conditions, symptoms, tests, first visit, travel, FAQs, related) | `data/service-content.ts` |
| Department titles, meta descriptions, short summaries | `data/services.ts` (`seoTitle`, `metaDescription`, `shortDesc`) |
| 9 doctor pages — titles, descriptions, role | `data/doctors.ts` (`seoTitle`, `metaDescription`, `role`) |
| Doctor FAQs (generated from profile facts) | `data/doctor-faqs.ts` |
| Clinic FAQs (homepage shows first 8, /faq shows all 15) | `data/faq.ts` |
| Contact directions | `app/(marketing)/contact/page.tsx` (`DIRECTIONS`) |
| Medical review status | `data/content-review.ts` |

## Medical review workflow (required for E-E-A-T)

Each department page currently shows:
"Published by Sai Shree Polyclinic · medical review pending · Updated 27 October 2026".

1. Send each doctor their department page (live URL or `data/service-content.ts` section).
2. Make any corrections they ask for.
3. In `data/content-review.ts`, set `reviewedOn: "YYYY-MM-DD"` for that department.
4. The byline then changes to "Medically reviewed by Dr. … · <date>" automatically.

Never set a review date for a doctor who has not actually reviewed the page.

| Department | Reviewer |
|---|---|
| Endocrinology | Dr. Sandeep Kumar Sahu |
| Neurology | Dr. Manasi Das |
| Pulmonology | Dr. Asutosh Rout |
| Gastroenterology | Dr. Suryakanta Parida |
| Dental | Dr. Abhas Dash |
| Gynaecology | Dr. Pratha Apramita (with Dr. Niramaya Madhual for fertility content) |
| Urology | Dr. Soumya Ranjan Behera |
| Oncology | Dr. Nitya Nutan Misra |

## Content rules applied

- No cure promises ("cannot be promised a cure, but…" phrasing for diabetes, epilepsy, asthma, PCOS).
- No superlatives: removed "premier", "world-class", "best-in-class", "most trusted", "best clinic",
  "board-certified", "trained at reputed institutions", "minimal waiting time guaranteed".
- Only services already listed by the clinic are described; nothing new was added.
- Oncology is described as screening / evaluation / care planning with referral — not a cancer hospital.
- Emergency guidance on every department page (go to the nearest hospital emergency).
- No prices published (root canal / endoscopy cost FAQs explain what affects cost and that an estimate is
  given before treatment).
- No gendered claims about doctors ("lady doctor") until confirmed.

## [CONFIRM] items from Phase 4a

- Each doctor to review their department page (see table above).
- Dental: Dr. Abhas Dash also practises at First Smile Dentals — confirm the content about crowns, bridges and
  extractions matches what is offered at Sai Shree.
- Gynaecology: confirm what fertility services are provided on-site vs. by referral (FAQ currently says "evaluates
  couples… discuss the right next step" without claiming IVF is performed here).
- Contact page: Bhubaneswar distance stated as "about 25–30 km… around an hour depending on traffic" — confirm.
- Doctors' gender for "female gynaecologist / lady doctor" keyword targeting.

---

# Phase 4b — Location pages & Odia versions

## Location pages (`data/locations.ts` → `/locations/[slug]`)

Built: **Bhubaneswar, Jagatsinghpur (+ Paradip), Kendrapara, Jajpur (+ Jajpur Road, Kalinga Nagar), Dhenkanal, Angul (+ Talcher)**.

Each page is unique: its own road/rail route, travel tip, three departments chosen for a stated local reason,
a 4-step trip plan built around the real doctor days, and its own FAQs. Linked from the footer
("Patients from …") and the contact page.

**Skipped on purpose:** Puri and Balasore — they could not be made genuinely different from the others
without inventing facts (doorway-page risk). Add them only with real, area-specific information.

Distances in km are **not** stated (except Bhubaneswar, 25–30 km) — each page links to the live Google Maps route.

## Odia pages (`data/odia.ts` → `/or`, `/or/services/[slug]`)

Built: Odia homepage + Endocrinology (ମଧୁମେହ ଓ ଥାଇରଏଡ୍), Gynaecology (ସ୍ତ୍ରୀରୋଗ ଓ ପ୍ରସୂତି), Dental (ଦନ୍ତ ଚିକିତ୍ସା).

- `lang="or"`, Noto Sans Oriya web font, hreflang `en-IN` / `or-IN` / `x-default` on both language versions,
  sitemap alternates.
- Brand name, doctor names and phone number kept in Latin script so they match GBP and directories.
- "Read in English" / "ଓଡ଼ିଆରେ ପଢ଼ନ୍ତୁ" switches on each pair; Odia link in footer and homepage hero.

## [CONFIRM] items from Phase 4b

- **Native Odia speaker must review all Odia copy** (`data/odia.ts`) before launch — medical terms and tone.
- Route details per location page (road names, bus arrival at Badambadi, Jajpur Keonjhar Road rail link).
- Whether patients from Puri or Balasore are common enough to justify a page — and what is genuinely
  different about their trip.
