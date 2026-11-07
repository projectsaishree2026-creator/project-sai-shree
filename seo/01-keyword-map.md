# Sai Shree Polyclinic — Keyword Map (Phase 2)

Prepared: 27 Oct 2026 · Domain: https://www.saishreepolyclinic.com

## How priority was set

No search-volume tool was available, so priority is a judgement from three inputs, scored together:

1. **Intent** — is the searcher ready to book a consultation (high), comparing (medium) or reading (low)?
2. **Competition** — who holds page 1 today (see SERP notes below).
3. **Closeness to winning** — does the clinic already have a strong asset (a named specialist, a matching page, the Mangalabag location)?

| Priority | Meaning | Typical time to move |
|---|---|---|
| **P1** | High intent and realistically winnable — build first | 1–3 months |
| **P2** | High value but contested by directories / large hospitals | 3–6 months |
| **P3** | Long-term, informational, or dominated by chains | 6–12 months |

Validate after launch: Google Search Console (impressions per query), Google Keyword Planner (Odisha location), and GBP Insights (search terms).

## What ranks today (top-term SERP check)

Searches run 27 Oct 2026. The search tool is US-based, so the Cuttack **Map pack is not visible** — re-check from a Cuttack phone or a rank tracker set to Cuttack.

| Query type | Who holds page 1 | Gap we can beat |
|---|---|---|
| "[specialist] in Cuttack" (diabetologist, neurologist, urologist, gastroenterologist, pulmonologist) | Aggregator directories: Apollo 24/7, Practo, HexaHealth, Credihealth, Bajaj Finserv Health, ThreeBestRated. **Manipal Clinic Cuttack** has a page per specialty. | Directory pages are thin lists with no local or medical depth. Only Manipal has real specialty pages. A deep, doctor-reviewed specialty page + a strong GBP listing can outrank directories in the Map pack and organic. Also: get *listed on* those same directories (they rank — be on them). |
| "Sai Shree Polyclinic Cuttack" (brand) | **Clinic not found at all.** Similar names appear instead (Sai Hospital, Sai Memorial Hospital, "Sai Jeevan Hospital, Kathagola, Mangala Bag"). | Brand entity is missing. GBP verification + citations with identical NAP is the single highest-leverage task. Name-confusion risk with "Sai Jeevan Hospital" on the same road — consistent naming matters. |
| "IVF in Cuttack", "IVF centre Cuttack" | Chains: Birla Fertility, Indira IVF, Oasis, Kishori IVF, Keya Fertility | Unwinnable short term for head term. Target doctor-name, "infertility specialist", "laparoscopic gynaecologist" instead. |
| "oncologist / cancer hospital Cuttack" | HCG Panda Cancer Hospital, Manipal Clinic | Clinic offers **screening, evaluation, care planning and referral** — not a cancer hospital. Target "cancer screening Cuttack" and symptom-led queries, not "cancer hospital". |
| "root canal cost in Cuttack" | Clove Dental cost pages, aggregators, generic national guides | Almost no Cuttack-specific clinic page answers cost honestly. A transparent guide with ranges [CONFIRM: clinic's own prices] can win. |
| "pulmonologist Cuttack" | ThreeBestRated, Credihealth, independent chest clinics | Fragmented, few strong sites — winnable. |
| "multispecialty / polyclinic in Cuttack" | Weak directories (Bajaj, Lybrate, Explurger), Kalinga Clinic | **Very winnable.** No strong owner. |

## URL plan used in this map

- `/` home · `/services/{endocrinology|neurology|pulmonology|gastroenterology|dental|gynecology|urology|oncology}` (existing, keep)
- `/doctors/{slug}` — **slugs to be lower-cased in Phase 3** with 301s: `dr-manasi-das`, `dr-asutosh-rout`, `dr-abhas-dash`
- `/about`, `/contact`, `/faq`
- New: `/locations/{bhubaneswar|jagatsinghpur|kendrapara|jajpur|dhenkanal|puri|angul|balasore}` (only if each can be made genuinely unique)
- New: `/or` (Odia home) + `/or/services/{endocrinology|gynecology|dental}` — top 3 by Odia-query relevance (sugar, pregnancy, teeth)
- New: `/blog/{slug}`

---

## 1. Brand & clinic-level head terms

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| sai shree polyclinic | Navigational | / | **P1** | Own brand; currently not indexed as an entity. Must win. |
| sai shree polyclinic cuttack | Navigational | / | **P1** | As above. |
| sai shree poly clinic mangalabag | Navigational | /contact | **P1** | Common spacing variant; capture via GBP + citations. |
| polyclinic in cuttack | Commercial | / | **P1** | No strong owner on page 1. |
| multispecialty clinic in cuttack | Commercial | / | **P1** | Same weak SERP; exact match for the clinic's model. |
| multi speciality polyclinic cuttack | Commercial | / | **P1** | Indian spelling "speciality" — use naturally in copy. |
| clinic in mangalabag cuttack | Local | / | **P1** | Hyper-local; few competitors optimise for it. |
| multispecialty clinic mangalabag | Local | / | **P1** | As above. |
| clinic near shreema hospital cuttack | Local / navigational | /contact | **P1** | Landmark-based; people give directions this way. |
| clinic on kathagola road cuttack | Local | /contact | **P1** | Street-level; directions and GBP. |
| clinic near SCB medical college cuttack | Local | /contact | **P2** | Huge footfall landmark nearby [CONFIRM: distance / walking time from SCB]. |
| specialist doctors in cuttack | Commercial | /doctors | **P2** | Directories hold it; doctor directory page can compete. |
| best clinic in cuttack | Commercial | / | **P3** | "Best" queries — answer with facts, never claim "best". |
| doctor near me (Cuttack) | Local | GBP / / | **P2** | Won in Maps, not organic — GBP-driven. |
| clinic open today cuttack / sunday | Local | /contact | **P2** | Hours clarity (Sunday closed) — prevents wasted trips, wins "open now" filter via GBP hours. |
| polyclinic in bhubaneswar cuttack | Commercial | /locations/bhubaneswar | **P3** | Twin-city intent; Bhubaneswar clinics dominate. |

## 2. Endocrinology (diabetes, thyroid, hormones)

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| endocrinologist in cuttack | Commercial | /services/endocrinology | **P1** | DM Endocrinology specialist is a strong, rare credential; directories dominate but thin. |
| diabetes doctor in cuttack | Commercial | /services/endocrinology | **P1** | High volume, high intent. |
| diabetologist in cuttack | Commercial | /services/endocrinology | **P2** | Apollo 24/7 holds many variants; still winnable with depth. |
| thyroid doctor in cuttack | Commercial | /services/endocrinology | **P1** | Less contested than diabetes. |
| thyroid specialist cuttack | Commercial | /services/endocrinology | **P1** | |
| hormone specialist cuttack | Commercial | /services/endocrinology | **P2** | |
| PCOS doctor in cuttack | Commercial | /services/endocrinology + /services/gynecology | **P2** | Shared intent — endocrine page links to gynaecology. |
| sugar doctor cuttack | Commercial (colloquial) | /services/endocrinology | **P1** | How many patients actually phrase it. |
| endocrinologist near me | Local | GBP / /services/endocrinology | **P1** | Maps-driven. |
| endocrinologist bhubaneswar cuttack | Commercial | /locations/bhubaneswar | **P3** | |
| dr sandeep kumar sahu endocrinologist | Navigational | /doctors/dr-sandeep-kumar-sahu | **P1** | Doctor-name; his own site exists (drsandeepkumarsahu.com) — cross-link. |
| HbA1c test cuttack | Transactional | /services/endocrinology | **P2** | Diagnostic lab is on site. |
| thyroid test cuttack | Transactional | /services/endocrinology | **P2** | |
| what is normal sugar level | Informational | /blog | **P3** | Blog feeder. |
| which doctor to see for thyroid | Informational | /blog → /services/endocrinology | **P2** | Question keyword; FAQ + blog. |
| diabetes diet chart odia food | Informational | /blog | **P2** | Local angle (pakhala, rice portions) — little competition. |

## 3. Neurology

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| neurologist in cuttack | Commercial | /services/neurology | **P1** | DM Neurology, 15 yrs; Manipal + directories compete. |
| neurology clinic cuttack | Commercial | /services/neurology | **P1** | |
| lady neurologist cuttack / female neurologist | Commercial | /doctors/dr-manasi-das | **P1** | Apollo has "female neurologists in Cuttack" listing → proven demand; clinic has one. |
| migraine doctor in cuttack | Commercial | /services/neurology | **P1** | Condition-led, less contested. |
| headache specialist cuttack | Commercial | /services/neurology | **P1** | |
| epilepsy doctor cuttack | Commercial | /services/neurology | **P2** | Must avoid cure claims (DMRA). |
| stroke follow up clinic cuttack | Commercial | /services/neurology | **P2** | Clinic does follow-up/rehab, not acute stroke — say so clearly. |
| parkinson's doctor cuttack | Commercial | /services/neurology | **P2** | |
| nerve specialist cuttack | Commercial | /services/neurology | **P2** | Colloquial term. |
| EEG test cuttack | Transactional | /services/neurology | **P2** | Listed feature. [CONFIRM: EEG done in-house?] |
| nerve conduction study cuttack | Transactional | /services/neurology | **P2** | [CONFIRM: NCS in-house?] |
| dr manasi das neurologist | Navigational | /doctors/dr-manasi-das | **P1** | Own site exists (drmanasidas.com). |
| when to see a neurologist for headache | Informational | /blog | **P2** | |

## 4. Pulmonology

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| pulmonologist in cuttack | Commercial | /services/pulmonology | **P1** | Fragmented SERP. |
| chest specialist in cuttack | Commercial | /services/pulmonology | **P1** | Colloquial Indian term — often more used than "pulmonologist". |
| chest doctor cuttack | Commercial | /services/pulmonology | **P1** | |
| asthma doctor cuttack | Commercial | /services/pulmonology | **P1** | |
| COPD treatment cuttack | Commercial | /services/pulmonology | **P2** | |
| spirometry test cuttack / PFT test | Transactional | /services/pulmonology | **P1** | Spirometry confirmed on site; transactional, low competition. |
| breathing problem doctor cuttack | Commercial | /services/pulmonology | **P2** | |
| sleep apnea doctor cuttack | Commercial | /services/pulmonology | **P3** | [CONFIRM: sleep study offered? If not, phrase as evaluation + referral.] |
| dr asutosh rout pulmonologist | Navigational | /doctors/dr-asutosh-rout | **P1** | Own site exists (drasutoshrout.com). |
| asthma in winter odisha tips | Informational | /blog | **P3** | Seasonal. |

## 5. Gastroenterology

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| gastroenterologist in cuttack | Commercial | /services/gastroenterology | **P1** | DM Gastro, 14 yrs. |
| stomach specialist cuttack | Commercial | /services/gastroenterology | **P1** | Colloquial. |
| gastric problem doctor cuttack | Commercial | /services/gastroenterology | **P1** | "Gastric" = how acidity is described in Odisha. |
| liver specialist cuttack | Commercial | /services/gastroenterology | **P2** | |
| fatty liver treatment cuttack | Commercial | /services/gastroenterology | **P2** | Rising concern; mention diet. |
| endoscopy in cuttack | Transactional | /services/gastroenterology | **P1** | Endoscopy is an in-house service. |
| colonoscopy cuttack | Transactional | /services/gastroenterology | **P2** | [CONFIRM: colonoscopy performed in-house?] |
| GERD / acidity doctor cuttack | Commercial | /services/gastroenterology | **P2** | |
| IBS doctor cuttack | Commercial | /services/gastroenterology | **P2** | |
| endoscopy cost in cuttack | Transactional | /services/gastroenterology | **P2** | [CONFIRM: price range] |
| dr suryakanta parida gastroenterologist | Navigational | /doctors/dr-suryakanta-parida | **P1** | Own site exists. |
| acidity home remedies vs doctor | Informational | /blog | **P3** | |

## 6. Dental

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| dentist in cuttack | Commercial | /services/dental | **P2** | Many dental clinics; Map pack decides. |
| dental clinic in cuttack | Commercial | /services/dental | **P2** | |
| dental clinic mangalabag | Local | /services/dental | **P1** | Hyper-local, winnable. |
| root canal treatment cuttack | Commercial | /services/dental | **P1** | MDS Conservative Dentistry = RCT specialist. Strong match. |
| root canal cost in cuttack | Transactional | /blog → /services/dental | **P1** | No Cuttack clinic answers this well. [CONFIRM: price range] |
| teeth cleaning cuttack | Transactional | /services/dental | **P2** | |
| teeth whitening cuttack | Transactional | /services/dental | **P2** | |
| braces in cuttack | Transactional | /services/dental | **P3** | Listed on site; usually orthodontist-led. [CONFIRM: who provides braces?] |
| dental implants cuttack | Transactional | /services/dental | **P3** | **[CONFIRM: are implants offered?]** — not in current service list; do not target until confirmed. |
| tooth pain doctor cuttack | Commercial | /services/dental | **P1** | Urgent intent. |
| dr abhas dash dentist | Navigational | /doctors/dr-abhas-dash | **P1** | Practises at First Smile Dentals (own site) — cross-link. |

## 7. Gynaecology & fertility

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| gynecologist in cuttack | Commercial | /services/gynecology | **P2** | Many competitors; two specialists here help. |
| gynaecologist in cuttack (UK spelling) | Commercial | /services/gynecology | **P2** | Common Indian spelling — use both naturally. |
| lady doctor in cuttack | Commercial | /services/gynecology | **P1** | Extremely common real-world query; weakly optimised. |
| female gynecologist cuttack | Commercial | /services/gynecology | **P1** | |
| pregnancy doctor cuttack | Commercial | /services/gynecology | **P1** | Antenatal care offered. |
| PCOS treatment cuttack | Commercial | /services/gynecology | **P2** | |
| infertility specialist cuttack | Commercial | /services/gynecology + /doctors/dr-niramaya-madhual | **P2** | Fellowship in reproductive medicine is real differentiation. |
| laparoscopic gynecologist cuttack | Commercial | /doctors/dr-niramaya-madhual | **P2** | Less contested than IVF. |
| IVF in cuttack | Commercial | /doctors/dr-niramaya-madhual | **P3** | Chains dominate. [CONFIRM: is IVF performed at this clinic, or consultation + referral?] |
| menopause clinic cuttack | Commercial | /services/gynecology | **P2** | |
| dr pratha apramita gynecologist | Navigational | /doctors/dr-pratha-apramita | **P1** | |
| dr niramaya madhual | Navigational | /doctors/dr-niramaya-madhual | **P1** | |
| first pregnancy checkup what to expect | Informational | /blog | **P2** | |

## 8. Urology

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| urologist in cuttack | Commercial | /services/urology | **P2** | HexaHealth + Manipal strong; MCh, 16 yrs is a strong profile. |
| kidney stone doctor cuttack | Commercial | /services/urology | **P1** | Condition-led; high intent. |
| kidney stone treatment cuttack | Commercial | /services/urology | **P1** | |
| prostate doctor cuttack | Commercial | /services/urology | **P1** | |
| UTI doctor cuttack | Commercial | /services/urology | **P2** | |
| urine infection treatment cuttack | Commercial | /services/urology | **P2** | Colloquial phrasing. |
| uroflowmetry test cuttack | Transactional | /services/urology | **P2** | Listed feature. [CONFIRM: in-house?] |
| dr soumya ranjan behera urologist | Navigational | /doctors/dr-soumya-ranjan-behera | **P1** | |
| kidney stone diet odisha | Informational | /blog | **P2** | Local water / diet angle. |

## 9. Oncology (screening & evaluation)

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| cancer screening in cuttack | Transactional | /services/oncology | **P1** | Matches what the clinic actually does; hospitals target treatment terms instead. |
| oncologist in cuttack | Commercial | /services/oncology | **P2** | HCG + Manipal dominate. |
| cancer specialist cuttack | Commercial | /services/oncology | **P2** | |
| breast cancer screening cuttack | Transactional | /services/oncology | **P2** | |
| cervical cancer screening / pap smear cuttack | Transactional | /services/oncology + /services/gynecology | **P2** | [CONFIRM: Pap smear done in-house?] |
| oral cancer check cuttack | Transactional | /services/oncology | **P2** | High relevance in Odisha (tobacco/gutkha use). |
| second opinion cancer cuttack | Commercial | /services/oncology | **P2** | Site already offers second opinions. |
| dr nitya nutan misra | Navigational | /doctors/dr-nitya-nutan-misra | **P1** | |
| cancer hospital cuttack | Commercial | — | **Do not target** | Not a cancer hospital — would mislead and fail. |

## 10. Doctor-name searches (all P1)

These are the fastest wins: no directory can out-rank a doctor's own detailed profile with Physician schema.

| Keyword | Target page |
|---|---|
| dr sandeep kumar sahu / dr sandeep sahu cuttack | /doctors/dr-sandeep-kumar-sahu |
| dr manasi das neurologist cuttack | /doctors/dr-manasi-das |
| dr asutosh rout cuttack | /doctors/dr-asutosh-rout |
| dr suryakanta parida gastro | /doctors/dr-suryakanta-parida |
| dr abhas dash / dr abhash dash dentist | /doctors/dr-abhas-dash |
| dr pratha apramita | /doctors/dr-pratha-apramita |
| dr niramaya madhual | /doctors/dr-niramaya-madhual |
| dr soumya ranjan behera urologist | /doctors/dr-soumya-ranjan-behera |
| dr nitya nutan misra oncologist | /doctors/dr-nitya-nutan-misra |

Variants ("dr" vs "doctor", "cuttack" appended, misspellings such as "abhash") are covered by name + specialty + city in title, H1 and schema `alternateName`.

## 11. Twin-city & Odisha district terms

Patients from these districts commonly travel to Cuttack (SCB Medical College area) for specialist care. Each location page must be **genuinely unique**: real route, travel time, the specialties people from there most need, and "book ahead so you don't waste a trip". Pages that cannot meet this bar are skipped.

| Keyword | Intent | Target page | Priority | Reasoning |
|---|---|---|---|---|
| specialist doctor cuttack from bhubaneswar | Commercial | /locations/bhubaneswar | **P2** | Twin-city overlap; Bhubaneswar has many hospitals, so pitch shorter waits / specific doctors. |
| [specialty] doctor near bhubaneswar | Commercial | /locations/bhubaneswar | **P3** | Bhubaneswar hospitals dominate. |
| specialist doctor for jagatsinghpur patients | Commercial | /locations/jagatsinghpur | **P2** | Close, strong Cuttack dependency, low competition. |
| doctor in cuttack from kendrapara | Commercial | /locations/kendrapara | **P2** | Same. One testimonial is from Kendrapara (real demand signal). |
| specialist doctor cuttack from jajpur | Commercial | /locations/jajpur | **P2** | |
| specialist doctor cuttack from dhenkanal | Commercial | /locations/dhenkanal | **P2** | |
| specialist doctor cuttack from puri | Commercial | /locations/puri | **P3** | Puri patients often stop at Bhubaneswar. |
| specialist doctor cuttack from angul | Commercial | /locations/angul | **P3** | |
| specialist doctor cuttack from balasore | Commercial | /locations/balasore | **P3** | Longer trip; needs strong "book ahead" angle. |
| khordha | — | merged into /locations/bhubaneswar | — | Bhubaneswar is in Khordha district; a separate page would duplicate it. |

## 12. Odia-language, Romanized Odia & Hindi queries

Odia-script searches are lower volume than English but almost uncontested; Romanized Odia and Hinglish are how many patients actually type on phones. **Volumes unverified — validate in Search Console after launch.** Odia terms below to be reviewed by a native speaker on staff [CONFIRM: reviewer name].

| Keyword | Script | Meaning | Target page | Priority |
|---|---|---|---|---|
| କଟକ ଡାକ୍ତରଖାନା / କଟକ କ୍ଲିନିକ | Odia | Cuttack clinic | /or | **P2** |
| ମଧୁମେହ ଡାକ୍ତର କଟକ | Odia | Diabetes doctor Cuttack | /or/services/endocrinology | **P2** |
| sugar rogara daktara cuttack | Romanized Odia | Sugar (diabetes) doctor | /or/services/endocrinology | **P2** |
| ଥାଇରଏଡ ଡାକ୍ତର କଟକ | Odia | Thyroid doctor | /or/services/endocrinology | **P2** |
| ଗର୍ଭାବସ୍ଥା ଡାକ୍ତର / ସ୍ତ୍ରୀରୋଗ ବିଶେଷଜ୍ଞ କଟକ | Odia | Pregnancy doctor / gynaecologist | /or/services/gynecology | **P2** |
| mahila daktara cuttack | Romanized Odia | Lady doctor | /or/services/gynecology | **P2** |
| ଦାନ୍ତ ଡାକ୍ତର କଟକ | Odia | Dentist Cuttack | /or/services/dental | **P2** |
| danta daktara cuttack | Romanized Odia | Dentist | /or/services/dental | **P2** |
| ମୃଗୀ ରୋଗ ଡାକ୍ତର | Odia | Epilepsy doctor | /services/neurology (Odia FAQ) | **P3** |
| ପକ୍ଷାଘାତ ଚିକିତ୍ସା କଟକ | Odia | Paralysis/stroke care | /services/neurology (Odia FAQ) | **P3** |
| କିଡନୀ ପଥର ଚିକିତ୍ସା | Odia | Kidney stone treatment | /services/urology (Odia FAQ) | **P3** |
| sugar ka doctor cuttack | Hindi (Romanized) | Diabetes doctor | /services/endocrinology | **P2** |
| pathri ka ilaj cuttack | Hindi (Romanized) | Kidney stone treatment | /services/urology | **P3** |
| dant ka doctor cuttack | Hindi (Romanized) | Dentist | /services/dental | **P3** |
| mahila doctor cuttack | Hindi (Romanized) | Lady doctor | /services/gynecology | **P2** |

## 13. Question keywords (FAQ sections + blog)

| Keyword | Intent | Target | Priority |
|---|---|---|---|
| which doctor to consult for thyroid | Informational | /blog + endocrinology FAQ | **P2** |
| is diabetes curable | Informational | /blog (careful: "manageable", never "curable") | **P2** |
| how much does root canal cost in cuttack | Transactional-info | /blog + dental FAQ | **P1** |
| is root canal painful | Informational | dental FAQ | **P2** |
| what is the difference between gynecologist and obstetrician | Informational | gynecology FAQ | **P3** |
| when should i see a neurologist for migraine | Informational | /blog | **P2** |
| what does a pulmonologist treat | Informational | pulmonology FAQ | **P2** |
| what is spirometry test and why is it done | Informational | /blog | **P2** |
| can kidney stones pass on their own | Informational | /blog | **P2** |
| what is endoscopy and is it painful | Informational | /blog + gastro FAQ | **P2** |
| how to prepare for endoscopy | Informational | gastro FAQ | **P2** |
| who should get cancer screening | Informational | /blog | **P2** |
| first pregnancy visit what tests | Informational | /blog | **P2** |
| do i need appointment at sai shree polyclinic | Navigational-info | /faq | **P1** |
| sai shree polyclinic timings / sunday open | Navigational-info | /faq + GBP | **P1** |
| clinic near cuttack railway station | Local-info | /contact | **P2** |

---

## Top 20 targets (build order)

1. sai shree polyclinic (brand, + Cuttack / Mangalabag variants)
2. polyclinic in cuttack
3. multispecialty clinic in cuttack
4. All 9 doctor-name searches (one item — fastest wins)
5. endocrinologist in cuttack
6. diabetes doctor in cuttack
7. thyroid doctor in cuttack
8. neurologist in cuttack
9. lady neurologist cuttack
10. pulmonologist / chest specialist in cuttack
11. spirometry test cuttack
12. gastroenterologist in cuttack
13. endoscopy in cuttack
14. root canal treatment cuttack
15. root canal cost in cuttack
16. lady doctor / female gynecologist in cuttack
17. pregnancy doctor cuttack
18. kidney stone treatment cuttack
19. cancer screening in cuttack
20. clinic in mangalabag cuttack / clinic near shreema hospital

## [CONFIRM] items raised in this phase

- Distance / walking time from **SCB Medical College** (landmark use)
- Is **EEG** and **nerve conduction study** done in-house?
- Is **colonoscopy** done in-house?
- **Sleep study** offered, or evaluation + referral?
- Are **dental implants** offered? Who provides **braces**?
- Is **IVF** performed here, or consultation + referral?
- Is **Pap smear** done in-house? Is **uroflowmetry** in-house?
- **Price ranges** for root canal and endoscopy (for cost-intent pages) — or confirm we should not publish prices
- A **native Odia speaker** on staff to review Odia copy
