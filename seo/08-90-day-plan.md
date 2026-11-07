# Phase 8 — 90-day action plan & measurement

Plan window: **29 Oct 2026 → 26 Jan 2027**. Owner column: **Dev** = website developer,
**Clinic** = front desk / management, **Doctor** = the named specialist.

SEO results build over months, not days. These targets track *direction* and *effort*; no specific ranking
can be promised, and no number below is a guarantee.

---

## Before day 1 — launch the new site (blocking)

| # | Task | Owner |
|---|---|---|
| 1 | Deploy the new site to Vercel | Dev |
| 2 | Vercel → Domains: change the apex → www redirect from **307 to 308 (permanent)** | Dev |
| 3 | Install analytics (choose one: **Vercel Web Analytics** — no ID needed; or **Google Analytics 4** — needs a Measurement ID) and track clicks on WhatsApp, phone and booking buttons | Dev |
| 4 | Google Search Console: add the **Domain property** (saishreepolyclinic.com), submit `https://www.saishreepolyclinic.com/sitemap.xml` | Dev |
| 5 | Bing Webmaster Tools: import from Search Console | Dev |
| 6 | Start a **booking log** (Google Sheet): date · channel (WhatsApp / phone / walk-in / website form) · "How did you find us?" (Google search / Google Maps / website / friend / doctor's website / other) · department | Clinic |

---

## Days 1–30 (29 Oct – 27 Nov): foundations

| Week | Task | Owner |
|---|---|---|
| 1 | Claim or create the **Google Business Profile**; complete video verification (seo/07 §1.1) | Clinic |
| 1 | Search Console → URL Inspection → "Request indexing" for: home, 8 department pages, /doctors, /contact | Dev |
| 1 | Send each doctor their department page and blog post for **medical review** (seo/04) | Clinic → Doctor |
| 1 | Native Odia speaker reviews `/or` pages and the Odia review message | Clinic |
| 2 | GBP: categories, services, description, hours, 25+ photos, appointment link (seo/07 §1.2–1.6) | Clinic |
| 2 | Send GBP pin coordinates + GBP URL → add `geo` and `sameAs` to the website schema | Clinic → Dev |
| 2 | Start WhatsApp **review requests** after every visit (seo/07 §1.9) — every patient, no incentives | Clinic |
| 2–3 | Citations 2–8: Bing Places, Apple Business Connect, Mappls, OpenStreetMap, Practo (clinic + doctors), Justdial, Lybrate | Clinic |
| 2–3 | Facebook Page + Instagram business profile with the exact NAP → add to `sameAs` | Clinic → Dev |
| 3 | Doctors' own websites: fix NAP conflicts and add a link back to their clinic profile (seo/07 §3) | Doctor |
| 3 | **World Diabetes Day (14 Nov)**: screening camp + GBP post + press note to Odia dailies (seo/07 §4.1) | Clinic |
| 1–4 | Publish blog posts **5–8** (seo/06), one GBP post per week (seo/07 §1.7) | Dev + Clinic |
| 4 | As doctors approve pages, set `reviewedOn` in `data/content-review.ts` | Dev |

**Day-30 checkpoint:** GBP verified and complete · all 33+ pages indexed in Search Console (Pages report) ·
8+ citations live with identical NAP · review requests running · baseline numbers recorded (see below).

---

## Days 31–60 (28 Nov – 27 Dec): build authority

| Week | Task | Owner |
|---|---|---|
| 5 | Citations 9–17: Apollo 24/7, Bajaj Finserv Health, Credihealth, Sulekha, IndiaMART, YouTube, ABDM Health Facility Registry (if eligible) | Clinic |
| 5 | Ask insurers/TPAs you work with to list the clinic in their online network locators (seo/07 §4.5) | Clinic |
| 6 | Pitch a monthly **Odia newspaper health column** by your doctors (seo/07 §4.3) | Clinic |
| 6–7 | First **school/college health talk** (dental hygiene, asthma or menstrual health) (seo/07 §4.2) | Doctor |
| 5–8 | Publish blog posts **9–16**; weekly GBP posts; add 2–4 new GBP photos | Dev + Clinic |
| 7 | Search Console review: fix any "Crawled – not indexed" or "Duplicate" pages; for pages with many impressions but low click-through, rewrite the title/description | Dev |
| 8 | Reply to every Google review within 2 days (templates in seo/07 §1.9) — ongoing | Clinic |

**Day-60 checkpoint:** 15+ citations · first press/link mention · reviews arriving steadily ·
Search Console shows impressions for department + doctor-name queries.

---

## Days 61–90 (28 Dec – 26 Jan): expand what works

| Week | Task | Owner |
|---|---|---|
| 9 | Apply for **employer / PSU empanelment** where eligible (seo/07 §4.4) | Clinic |
| 9–12 | Publish blog posts **17–24**; weekly GBP posts | Dev + Clinic |
| 10 | Check Search Console for Odia queries → if they appear, add Odia versions of Neurology and Pulmonology | Dev |
| 10 | Decide on Puri / Balasore location pages — only if real, area-specific detail exists | Clinic + Dev |
| 11 | Second health talk or a Rotary/Lions health camp | Doctor |
| 12 | **90-day review**: compare every metric with the baseline; plan the next quarter | All |

---

## What to measure

Record a **baseline in week 1**, then check on the schedule below. Keep one row per month in a sheet.

| Metric | Where to find it | How often | What "good" looks like |
|---|---|---|---|
| GBP **calls** | GBP → Performance | Weekly | Rising month on month |
| GBP **direction requests** | GBP → Performance | Weekly | Rising — strongest signal of walk-in intent |
| GBP **website clicks** | GBP → Performance (+ `utm_campaign=gbp` in analytics) | Weekly | Rising |
| GBP **searches showing the listing**, incl. which search terms | GBP → Performance | Monthly | Department terms appearing, not only the brand |
| Google **reviews**: count and average | GBP | Weekly | Steady new reviews; reply rate 100% |
| **WhatsApp bookings** | Booking log (channel = WhatsApp) + analytics WhatsApp-click events | Weekly | Rising; note which source patients report |
| **Phone calls** from the website | Analytics tel-click events | Weekly | Rising |
| **Search Console clicks & impressions** | Performance report | Weekly | Rising; more non-brand queries over time |
| **Rankings for the top 20 keywords** (seo/01 "Top 20 targets") | Search Console average position by query, filtered to India; or a rank tracker set to **Cuttack** | Every 2 weeks | Moving up; doctor-name and brand terms first |
| **Indexed pages** | Search Console → Pages | Monthly | All sitemap URLs indexed |
| **Core Web Vitals** | Search Console → Core Web Vitals (needs traffic) | Monthly | All URLs "Good" |
| **Citations live** with exact NAP | Your citation sheet | Monthly | 17 by day 60 |
| **Patients by source** | Booking log "How did you find us?" | Monthly | Share from Google search/Maps growing |

Note: rankings in the **Google Maps pack** depend heavily on the GBP (reviews, categories, photos, activity)
and on distance from the searcher — check them from a phone in Cuttack, not only from a desk tool.

---

# Every open [CONFIRM] item

Answer these and the matching placeholders and notes can be closed. Grouped by who can answer them.

## Clinic management

1. **Rating schema** — remove `aggregateRating` (4.9 / 500) from the website schema? *Recommended:* yes —
   Google's rules forbid marking up ratings copied from Google or other platforms, and no public listing
   backing it was found. The visible "4.9 Google rating" text can stay if it is true. *(Currently kept, as
   instructed.)*
2. **Analytics choice** — Vercel Web Analytics or Google Analytics 4 (and the Measurement ID).
3. **GBP pin coordinates** and the **GBP, Facebook and Instagram URLs** (for `geo` and `sameAs`).
4. **Year the clinic opened** (GBP opening date; the site says "over a decade").
5. **Accessibility & parking** — wheelchair-accessible entrance, toilet, parking type (GBP attributes).
6. **Insurers / TPAs accepted** — for network-locator listings.
7. **OPD days for the "Everyday" doctors** — Dr. Das, Rout, Misra, Parida, Behera, Madhual (currently shown
   as every clinic day, Mon–Sat).
8. **Prices** — keep not publishing prices (current approach), or provide ranges for root canal and endoscopy.
9. **Native Odia reviewer** — name of the person who will check all Odia text (`data/odia.ts`, review message).
10. **Puri / Balasore** — are patients from there common, and what is different about their trip?
11. **SCB Medical College** — distance/walking time, if you want it used as a landmark.
12. **Bhubaneswar distance** — "about 25–30 km, around an hour" (contact page and location page).
13. **Location page routes** — road names, buses arriving at Badambadi, the Jajpur Keonjhar Road rail link.
14. **Doctors' gender** — needed before targeting "lady gynaecologist / female doctor" searches.

## Each doctor

15. **Medical review** of their department page and blog post — then set `reviewedOn` (seo/04).
16. **Dr. Sandeep Kumar Sahu** — real consultation days and hours at Sai Shree (his own site says Mon–Sat
    10 AM–8 PM; the clinic site says Mon/Wed/Fri).
17. **Dr. Manasi Das** — 15 years or 10+ years of experience? Should +91 96925 79904 be public?
18. **Dr. Asutosh Rout** — his site says "Sunday: by appointment"; the clinic is closed Sunday. Which is right?
19. **Dr. Abhas Dash** — are crowns, bridges and extractions provided at Sai Shree (not only at First Smile
    Dentals)? Who provides braces? Are dental implants offered?
20. **Dr. Niramaya Madhual / Dr. Pratha Apramita** — which fertility services happen on-site, and which are
    referred? Is IVF performed here?
21. **Dr. Manasi Das** — are EEG and nerve conduction studies done in-house?
22. **Dr. Suryakanta Parida** — is colonoscopy done in-house?
23. **Dr. Asutosh Rout** — is a sleep study offered, or evaluation and referral?
24. **Dr. Soumya Ranjan Behera** — is uroflowmetry done in-house?
25. **Dr. Nitya Nutan Misra / gynaecology** — is Pap smear screening done in-house?

---

## UPDATE 28 Oct 2026 — resolved

- **Google Business Profile found** (5.0 from 7 reviews). Fixes needed inside the listing: name, hours
  (currently shows open Sunday 7–7), missing phone, website link — see seo/07 "UPDATE".
- **Rating fixed** on the website and in the schema: 5.0 from 7 reviews (was "4.9 / 500+").
- **Map coordinates** added to the schema: 20.4770033, 85.8854868.
- **Google Analytics 4 is built in** (`@next/third-parties`) with click tracking for WhatsApp, phone,
  directions and booking links, plus a `generate_lead` event on appointment-form submissions. It switches on
  when you set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel → Settings → Environment Variables and redeploy.
  In GA4, mark `generate_lead`, `whatsapp_click` and `phone_click` as **key events**.
- Doctors' medical review: approved to proceed. OPD days: to be confirmed later.
