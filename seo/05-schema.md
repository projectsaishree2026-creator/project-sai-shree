# Phase 5 — Structured data (JSON-LD)

Builders: `lib/schema.ts` · Renderer: `components/shared/json-ld.tsx`

## What is on each page

| Page(s) | Schema |
|---|---|
| Every page (root layout) | `MedicalClinic` (`/#clinic`) + `WebSite` (`/#website`) |
| `/` | `WebPage` + `FAQPage` (8) |
| `/services`, `/doctors` | `CollectionPage` + `BreadcrumbList` |
| `/about` · `/contact` | `AboutPage` · `ContactPage` + `BreadcrumbList` |
| `/faq` | `FAQPage` (15) + `BreadcrumbList` |
| `/services/[slug]` (8) | `MedicalWebPage` (specialty, conditions as `MedicalCondition`) + `FAQPage` + `BreadcrumbList` |
| `/doctors/[slug]` (9) | `Physician` + `ProfilePage` (mainEntity → physician) + `FAQPage` + `BreadcrumbList` |
| `/locations/[slug]` (6) | `WebPage` + `FAQPage` + `BreadcrumbList` |
| `/or`, `/or/services/[slug]` (3) | `WebPage` / `MedicalWebPage` with `inLanguage: or-IN` + `FAQPage` + `BreadcrumbList` |

The clinic is defined once; pages reference it by `@id`. The clinic lists its doctors with `member`
(schema.org models `Physician` as an Organization, so `employee` — which expects a Person — would be invalid).

## Validation

All 33 pages validated against the official schema.org vocabulary (`schemaorg-current-https.jsonld`):
types, properties (domain), nested types (range), enumeration values, `@id` references, and FAQ schema
vs. visible questions. **Result: 0 errors.**

After deploying, also run a few URLs through Google's Rich Results Test and the Schema Markup Validator.

## Behaviour to know

- `lastReviewed` and `reviewedBy` appear on a department page **only** after `reviewedOn` is set in
  `data/content-review.ts` — never before the doctor has actually reviewed it.
- FAQ schema is generated from the same data as the visible accordions, so they can never drift apart.
- Google currently shows FAQ rich results mainly for well-known government and health sites; the markup is
  still valid and helps Google understand the pages, but don't expect FAQ dropdowns in results immediately.
- `aggregateRating` (4.9 / 500) is kept as instructed. It must keep matching the live Google rating.

## [CONFIRM] items from Phase 5

- **Clinic coordinates** (latitude/longitude from the Google Business Profile pin) → add `geo` to the clinic.
- **Google Business Profile, Facebook and Instagram URLs** → add `sameAs` to the clinic.
- Keep `aggregateRating` in sync with the live Google rating whenever it changes.

## Research results for `geo` and `sameAs` (28 Oct 2026)

Searched the web, the live site, all four doctor websites and OpenStreetMap.

- **No public profiles exist for the clinic yet** — no Google Business Profile listing surfaced in search,
  and no Facebook, Instagram, Justdial, Practo or Lybrate page. `sameAs` stays empty until these are created
  in Phase 7 (they are the highest-priority off-site task).
- **No reliable coordinates.** The clinic, Shreema Hospital and Mangalabag are not mapped in OpenStreetMap,
  and no listing publishes a pin. `geo` stays out rather than using an approximate city-centre point, which
  would mislead the local map pack. Take the exact pin from the GBP once it is verified.
- Directories spell the neighbouring hospital **"Shreemaa Hospital, Ring Road, Mangalabag"**. The clinic
  writes "Shreema". Keep the clinic's own spelling consistent everywhere; just be aware patients may search
  "Shreemaa".

### NAP / fact conflicts found on the doctors' own websites (fix on those sites)

| Site | Conflict |
|---|---|
| drsandeepkumarsahu.com | Consultation hours "Mon–Sat 10AM–8PM" vs. clinic site Mon/Wed/Fri, clinic 9 AM–7 PM |
| drmanasidas.com | Second phone +91 96925 79904; "10+ years experience" vs. 15 years on the clinic site |
| drasutoshrout.com | "Sunday: By Appointment" vs. clinic closed on Sunday |
| drmanasidas.com, drasutoshrout.com | Address written "near shreema Hospital … , Sai Shree Poly Clinic" — use the exact NAP |

Exact NAP to use everywhere:
Sai Shree Polyclinic · Kathagola Rd, near Shreema Hospital, Mangalabag, Cuttack, Odisha 753001 · +91 70085 12773
