# Phase 6 — Blog calendar (Nov 2026 – Jan 2027)

24 posts · 2 per week · each supports one department page and ends with a CTA to it.
Posts live in `data/blog.ts` and render at `/blog/[slug]`. Every post goes to the department doctor for
review before `reviewedOn` is set in `data/content-review.ts` (`blogReview`).

Rules for every post: no cure promises, no prices, no unverifiable claims, Odisha-specific context,
emergency guidance where relevant, 1,200–1,800 words, a short FAQ, and a link to the department page.

| # | Week of | Title | Target keyword | Supports | Status |
|---|---|---|---|---|---|
| 1 | 2 Nov | Root canal treatment in Cuttack: sittings, pain and what affects the cost | root canal cost in cuttack | /services/dental | **Written** |
| 2 | 2 Nov | Diabetes diet with Odia food: rice, pakhala, dalma and sweets | diabetes diet odia food | /services/endocrinology | **Written** |
| 3 | 9 Nov | When should you see a neurologist for headache or migraine? | when to see a neurologist for headache | /services/neurology | **Written** |
| 4 | 9 Nov | Spirometry test: what it is, why it's done, and how to prepare | spirometry test cuttack | /services/pulmonology | **Written** |
| 5 | 16 Nov | Fasting in Kartika month with diabetes: how to stay safe | kartika fasting diabetes | /services/endocrinology | Planned |
| 6 | 16 Nov | Smoke, dust and festival fireworks: protecting your lungs this season | air pollution asthma cuttack | /services/pulmonology | Planned |
| 7 | 23 Nov | Which doctor should I see for thyroid problems? | which doctor for thyroid | /services/endocrinology | Planned |
| 8 | 23 Nov | Acidity or something more? When gastric pain needs a gastroenterologist | gastric problem doctor cuttack | /services/gastroenterology | Planned |
| 9 | 30 Nov | Your first pregnancy visit: what tests to expect and when | first pregnancy checkup | /services/gynecology | Planned |
| 10 | 30 Nov | Kidney stones: can they pass on their own, and how to prevent them | kidney stone treatment cuttack | /services/urology | Planned |
| 11 | 7 Dec | Winter and COPD: preventing flare-ups when it gets cold | copd treatment cuttack | /services/pulmonology | Planned |
| 12 | 7 Dec | Oral cancer and gutkha: the early signs to check your mouth for | oral cancer check cuttack | /services/oncology | Planned |
| 13 | 14 Dec | PCOS explained: periods, weight and fertility | pcos treatment cuttack | /services/gynecology | Planned |
| 14 | 14 Dec | What is an endoscopy, and is it painful? | endoscopy in cuttack | /services/gastroenterology | Planned |
| 15 | 21 Dec | Tingling in the feet: diabetic neuropathy and when to get tested | nerve specialist cuttack | /services/neurology | Planned |
| 16 | 21 Dec | Teeth cleaning vs. whitening: which do you need? | teeth cleaning cuttack | /services/dental | Planned |
| 17 | 28 Dec | Prostate problems after 50: symptoms men shouldn't ignore | prostate doctor cuttack | /services/urology | Planned |
| 18 | 28 Dec | HbA1c explained: the one number that shows your sugar control | hba1c test cuttack | /services/endocrinology | Planned |
| 19 | 4 Jan | Makar Sankranti sweets and diabetes: enjoying festivals safely | diabetes festival sweets | /services/endocrinology | Planned |
| 20 | 4 Jan | Epilepsy: what to do when someone has a fit | epilepsy doctor cuttack | /services/neurology | Planned |
| 21 | 11 Jan | Fatty liver: what the ultrasound report means and what to do next | fatty liver treatment cuttack | /services/gastroenterology | Planned |
| 22 | 11 Jan | Cancer screening: which tests at which age? | cancer screening in cuttack | /services/oncology | Planned |
| 23 | 18 Jan | Trying to conceive for a year? When to see a fertility specialist | infertility specialist cuttack | /services/gynecology | Planned |
| 24 | 25 Jan | Urine infection (UTI): causes, treatment and when it keeps coming back | uti doctor cuttack | /services/urology | Planned |

## Coverage

Every department gets at least two posts: Endocrinology 5 · Pulmonology 3 · Neurology 3 · Gastroenterology 3 ·
Gynaecology 3 · Urology 3 · Dental 2 · Oncology 2.

## How to publish a new post

1. Add an entry to `blogPosts` in `data/blog.ts` (copy an existing one for the shape).
2. Add its review status to `blogReview` in `data/content-review.ts` (`reviewedOn: null`).
3. Send it to the department doctor; set `reviewedOn` after they approve.
4. It appears automatically on `/blog`, on its department page ("Related reading") and in the sitemap.
