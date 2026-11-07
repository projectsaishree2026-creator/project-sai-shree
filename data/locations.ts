/**
 * Location pages for patients travelling to Cuttack (SEO Phase 4b).
 *
 * Each page must stay genuinely unique — its own route, its own planning advice and
 * its own reasons for the departments highlighted. Do not add a location by swapping
 * the name into another page's text (that is a doorway page). Puri and Balasore were
 * deliberately skipped for this reason.
 *
 * Distances are not stated (except the Bhubaneswar figure in the contact page) because
 * they have not been verified; each page links to the live Google Maps route instead.
 */

export interface LocationPage {
  slug: string;
  /** Place name as patients search it */
  name: string;
  district: string;
  seoTitle: string;
  metaDescription: string;
  h1Kicker: string;
  /** Google Maps origin for the live route link */
  mapsOrigin: string;
  intro: string[];
  route: { road: string; rail?: string; tip: string };
  /** Departments to highlight, with the reason they matter for this area */
  focus: { service: string; why: string }[];
  plan: string[];
  faqs: { q: string; a: string }[];
}

export const locations: LocationPage[] = [
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    district: "Khordha",
    seoTitle: "Specialist Doctors in Cuttack for Bhubaneswar Patients",
    metaDescription:
      "Coming from Bhubaneswar? See specialists in 8 departments under one roof in Mangalabag, Cuttack. Route tips, doctor days and how to book ahead on WhatsApp.",
    h1Kicker: "For patients from Bhubaneswar",
    mapsOrigin: "Bhubaneswar, Odisha",
    intro: [
      "Cuttack and Bhubaneswar are twin cities, and many families move between them every day for work, college and family. If you live in Bhubaneswar, Sai Shree Polyclinic in Mangalabag, Cuttack gives you eight specialist departments in one building — so you can see an endocrinologist, a gynaecologist or a neurologist, get your tests done, and collect medicines in a single trip.",
      "This page explains how to reach us from Bhubaneswar, which doctors are available on which days, and how to plan your visit so you are not travelling back and forth.",
    ],
    route: {
      road: "Cuttack is about 25–30 km from Bhubaneswar along NH-16. Allow around an hour by car, cab or bus depending on traffic, then head to Mangalabag and Kathagola Road, near Shreema Hospital.",
      rail: "Frequent trains run between Bhubaneswar and Cuttack stations. From Cuttack Railway Station, an auto-rickshaw to Mangalabag is a short ride.",
      tip: "Morning and evening office hours are the busiest on NH-16. A late-morning appointment usually means an easier drive.",
    },
    focus: [
      { service: "endocrinology", why: "Diabetes and thyroid care needs regular follow-up. Dr. Sandeep Kumar Sahu (DM Endocrinology) sees patients on Monday, Wednesday and Friday — plan your Bhubaneswar trips on those days." },
      { service: "gynecology", why: "Pregnancy care involves many visits over months. Dr. Pratha Apramita consults on Tuesday, Thursday and Saturday, and ultrasound is in the same building." },
      { service: "neurology", why: "For migraine, epilepsy or stroke follow-up, Dr. Manasi Das (DM Neurology, 15 years) is available on every clinic day." },
    ],
    plan: [
      "Book on WhatsApp the day before and mention you are coming from Bhubaneswar — we will suggest a time that avoids peak traffic.",
      "If you need two specialists, tell us when you book; we will try to arrange both on the same day.",
      "Ask whether your tests need fasting so you can have them done during the same visit.",
      "Bring all reports and prescriptions — including those from hospitals in Bhubaneswar.",
    ],
    faqs: [
      { q: "How far is Sai Shree Polyclinic from Bhubaneswar?", a: "Cuttack is about 25–30 km from Bhubaneswar by road along NH-16 — around an hour depending on traffic. The clinic is on Kathagola Rd, near Shreema Hospital, Mangalabag." },
      { q: "Can I travel from Bhubaneswar by train?", a: "Yes. Trains run frequently between Bhubaneswar and Cuttack stations, and the clinic is a short auto-rickshaw ride from Cuttack Railway Station." },
      { q: "Can I see more than one specialist in one trip from Bhubaneswar?", a: "Often, yes — it depends on each doctor's schedule that day. Tell us which specialists you need when you book and we will try to arrange them together." },
      { q: "Can I get my tests done on the same day?", a: "Most tests — blood tests, X-ray, ultrasound, ECG and spirometry — are available at the clinic, so they can usually be done during the same visit." },
    ],
  },
  {
    slug: "jagatsinghpur",
    name: "Jagatsinghpur",
    district: "Jagatsinghpur",
    seoTitle: "Specialist Doctors for Jagatsinghpur & Paradip Patients",
    metaDescription:
      "From Jagatsinghpur or Paradip? Consult specialists at Sai Shree Polyclinic, Mangalabag, Cuttack. Chest, diabetes, women's health and more. Book ahead.",
    h1Kicker: "For patients from Jagatsinghpur & Paradip",
    mapsOrigin: "Jagatsinghpur, Odisha",
    intro: [
      "For many families in Jagatsinghpur district — from Jagatsinghpur town, Tirtol, Kujang and the Paradip port area — Cuttack is the nearest city with a wide choice of specialist doctors. Sai Shree Polyclinic in Mangalabag brings eight departments together, so a single trip can cover a consultation, tests and medicines.",
      "Work in and around Paradip's port and industries can mean exposure to dust and fumes, and long shifts can make regular check-ups hard to fit in. Planning the visit well makes it far easier.",
    ],
    route: {
      road: "Travel to Cuttack by road along the Cuttack–Paradip road, then head to Mangalabag and Kathagola Road, near Shreema Hospital. Buses from Jagatsinghpur and Paradip reach Cuttack's Badambadi bus stand, a short auto ride from the clinic.",
      tip: "Leave early so you reach before noon — that gives time for any tests the doctor orders on the same day.",
    },
    focus: [
      { service: "pulmonology", why: "Cough, wheezing or breathlessness — especially for anyone exposed to dust, smoke or fumes at work — deserves a proper check. Spirometry, the main breathing test, is available at the clinic." },
      { service: "endocrinology", why: "Diabetes and thyroid follow-up can be planned for Monday, Wednesday or Friday, when Dr. Sandeep Kumar Sahu sees patients, with HbA1c and thyroid tests done on the spot." },
      { service: "gynecology", why: "Pregnancy check-ups and ultrasound can be combined in one visit; Dr. Pratha Apramita consults on Tuesday, Thursday and Saturday." },
    ],
    plan: [
      "Book on WhatsApp before leaving home so your doctor's availability is confirmed.",
      "Send photos of your previous reports on WhatsApp; we can tell you if anything else is needed.",
      "Ask whether you should come fasting for blood tests.",
      "If you are coming by bus, get off at Badambadi bus stand and take an auto to Mangalabag.",
    ],
    faqs: [
      { q: "How do I reach the clinic from Paradip?", a: "Travel to Cuttack by road along the Cuttack–Paradip road, or take a bus to Badambadi bus stand and an auto-rickshaw to Kathagola Rd, Mangalabag. The 'Open route' link on this page gives live directions." },
      { q: "Is there a breathing test for workers exposed to dust or fumes?", a: "Yes. Spirometry, the standard lung function test, is available at the clinic and is usually done on the same day as your consultation with the chest specialist." },
      { q: "Should I book before travelling from Jagatsinghpur?", a: "Yes. Booking on WhatsApp confirms your doctor's availability so you do not make a wasted trip. Appointments are confirmed within 30 minutes during clinic hours." },
    ],
  },
  {
    slug: "kendrapara",
    name: "Kendrapara",
    district: "Kendrapara",
    seoTitle: "Specialist Doctors in Cuttack for Kendrapara Patients",
    metaDescription:
      "Travelling from Kendrapara? See neurology, diabetes, women's health and other specialists at Sai Shree Polyclinic, Cuttack. Route tips and booking advice.",
    h1Kicker: "For patients from Kendrapara",
    mapsOrigin: "Kendrapara, Odisha",
    intro: [
      "Families from Kendrapara already travel to Sai Shree Polyclinic — one of our patient stories is from a Kendrapara mother whose son is being treated for epilepsy. For conditions that need a specialist and regular follow-up, having eight departments in one building in Mangalabag, Cuttack saves repeated journeys.",
      "Because the trip from Kendrapara takes planning, this page sets out the route, the doctors' days and what to bring so that one visit achieves as much as possible.",
    ],
    route: {
      road: "Travel to Cuttack by road on the Kendrapara–Cuttack route, then head to Mangalabag and Kathagola Road, near Shreema Hospital. Buses from Kendrapara arrive at Badambadi bus stand, a short auto-rickshaw ride from the clinic.",
      tip: "Neurology and other follow-ups can often be booked for a fixed time so you can plan your return journey the same day.",
    },
    focus: [
      { service: "neurology", why: "Epilepsy, migraine and stroke follow-up need regular visits. Dr. Manasi Das (DM Neurology) is available on every clinic day, and EEG testing is listed among the neurology services." },
      { service: "endocrinology", why: "Long-term diabetes and thyroid care: plan for Monday, Wednesday or Friday, when Dr. Sandeep Kumar Sahu sees patients." },
      { service: "urology", why: "Kidney stone pain and urinary problems can be assessed with ultrasound and urine tests during the same visit." },
    ],
    plan: [
      "Book on WhatsApp before you leave and ask for a time that lets you travel back the same day.",
      "For epilepsy or seizures, bring a video of an episode if a family member has recorded one — it helps diagnosis.",
      "Carry all previous scans (films and reports) and the medicines you take.",
      "If you take regular medicines, collect them from the in-house pharmacy before you leave.",
    ],
    faqs: [
      { q: "Do patients from Kendrapara visit Sai Shree Polyclinic?", a: "Yes. Families from Kendrapara visit us for specialist care — one of our patient reviews is from Kendrapara, for epilepsy treatment with Dr. Manasi Das." },
      { q: "How do I get to the clinic by bus from Kendrapara?", a: "Take a bus to Cuttack's Badambadi bus stand, then an auto-rickshaw to Kathagola Rd, near Shreema Hospital, Mangalabag." },
      { q: "Can I see the neurologist and get an EEG on the same day?", a: "EEG testing is listed among our neurology services. Mention it when you book on WhatsApp and we will try to schedule it with your consultation." },
    ],
  },
  {
    slug: "jajpur",
    name: "Jajpur",
    district: "Jajpur",
    seoTitle: "Specialist Doctors in Cuttack for Jajpur Patients",
    metaDescription:
      "From Jajpur, Jajpur Road or Kalinga Nagar? Consult specialists in 8 departments at Sai Shree Polyclinic, Mangalabag, Cuttack. Train and road tips inside.",
    h1Kicker: "For patients from Jajpur & Jajpur Road",
    mapsOrigin: "Jajpur Road, Odisha",
    intro: [
      "Patients from Jajpur district — Jajpur town, Jajpur Road, Vyasanagar and the Kalinga Nagar industrial belt — often come to Cuttack when they need a specialist. Sai Shree Polyclinic in Mangalabag puts eight specialist departments, diagnostics and a pharmacy under one roof.",
      "The rail connection from Jajpur Keonjhar Road makes Cuttack an easy day trip, which suits conditions that need regular follow-up.",
    ],
    route: {
      road: "Travel to Cuttack by road along NH-16, then head to Mangalabag and Kathagola Road, near Shreema Hospital.",
      rail: "Jajpur Keonjhar Road station is on the main line through Cuttack. From Cuttack Railway Station, take an auto-rickshaw to Mangalabag.",
      tip: "If you come by train, choose one that reaches Cuttack in the morning so you have time for tests after your consultation.",
    },
    focus: [
      { service: "pulmonology", why: "Chronic cough or breathlessness in people working in heavy industry should be checked. Spirometry is done at the clinic." },
      { service: "gastroenterology", why: "Acidity, liver and digestive problems can be evaluated, with endoscopy available at the clinic when needed." },
      { service: "endocrinology", why: "Diabetes and thyroid care, with HbA1c and thyroid tests at the in-house lab; Dr. Sahu consults Monday, Wednesday and Friday." },
    ],
    plan: [
      "Book on WhatsApp the day before and mention your train time — we will suggest a convenient slot.",
      "If an endoscopy may be needed, ask for preparation instructions (usually no food for 6–8 hours).",
      "Bring previous reports, including any from company or industrial health check-ups.",
      "Collect medicines from the in-house pharmacy before your return train.",
    ],
    faqs: [
      { q: "Can I come from Jajpur Road by train?", a: "Yes. Jajpur Keonjhar Road is on the main line through Cuttack. From Cuttack Railway Station, the clinic is a short auto-rickshaw ride away." },
      { q: "Can I have an endoscopy on the same day as my consultation?", a: "Endoscopy is available at the clinic. Tell us when you book so we can try to schedule it and send you preparation instructions." },
      { q: "I have reports from my company health check-up — should I bring them?", a: "Yes. Bring all previous reports, including workplace or industrial health check-ups. They help the doctor see changes over time." },
    ],
  },
  {
    slug: "dhenkanal",
    name: "Dhenkanal",
    district: "Dhenkanal",
    seoTitle: "Specialist Doctors in Cuttack for Dhenkanal Patients",
    metaDescription:
      "Coming from Dhenkanal? See specialists at Sai Shree Polyclinic in Mangalabag, Cuttack, via NH-55. Doctor days, what to bring and how to book ahead.",
    h1Kicker: "For patients from Dhenkanal",
    mapsOrigin: "Dhenkanal, Odisha",
    intro: [
      "For patients in Dhenkanal district, Cuttack is the natural city to visit for specialist care, along NH-55. Sai Shree Polyclinic in Mangalabag has eight specialist departments in one building, with diagnostics and a pharmacy — so one well-planned trip can cover consultation, tests and medicines.",
      "Women's health and long-term conditions such as diabetes need regular visits; knowing each doctor's days before you travel avoids a wasted journey.",
    ],
    route: {
      road: "Travel to Cuttack along NH-55, then head to Mangalabag and Kathagola Road, near Shreema Hospital. Buses from Dhenkanal reach Badambadi bus stand, a short auto-rickshaw ride from the clinic.",
      tip: "Leave early in the morning — reaching before noon gives time for same-day tests and a comfortable journey home.",
    },
    focus: [
      { service: "gynecology", why: "Pregnancy check-ups, period problems and PCOS. Dr. Pratha Apramita consults on Tuesday, Thursday and Saturday, with ultrasound in the same building." },
      { service: "endocrinology", why: "Diabetes and thyroid follow-up on Monday, Wednesday or Friday with Dr. Sandeep Kumar Sahu, with tests done at the in-house lab." },
      { service: "dental", why: "Root canal treatment can need 1–3 sittings. Dr. Abhas Dash is available Monday to Saturday, so sittings can be planned around your travel." },
    ],
    plan: [
      "Book on WhatsApp before travelling and ask for a morning slot.",
      "Pregnant women: bring your antenatal card and all earlier scan reports.",
      "For root canal treatment, ask how many sittings you will need so you can plan the trips.",
      "Ask whether to come fasting for blood tests.",
    ],
    faqs: [
      { q: "How do I reach the clinic from Dhenkanal?", a: "Travel to Cuttack along NH-55 by car or bus. From Badambadi bus stand, take an auto-rickshaw to Kathagola Rd, near Shreema Hospital, Mangalabag." },
      { q: "On which days is the gynaecologist available?", a: "Dr. Pratha Apramita consults on Tuesday, Thursday and Saturday. Please book ahead on WhatsApp so your time is confirmed." },
      { q: "How many visits does a root canal need?", a: "Usually 1–3 sittings, depending on the tooth. The dentist will tell you before starting so you can plan your trips from Dhenkanal." },
    ],
  },
  {
    slug: "angul",
    name: "Angul",
    district: "Angul",
    seoTitle: "Specialist Doctors in Cuttack for Angul & Talcher Patients",
    metaDescription:
      "From Angul or Talcher? See chest, diabetes, cancer screening and other specialists at Sai Shree Polyclinic, Cuttack. Plan one trip for consultation and tests.",
    h1Kicker: "For patients from Angul & Talcher",
    mapsOrigin: "Angul, Odisha",
    intro: [
      "Angul and Talcher are among Odisha's main mining and industrial areas. Many families there travel to Cuttack when they need a specialist opinion. Because it is a longer journey, it makes sense to plan one visit that covers the consultation, the tests and the medicines.",
      "Sai Shree Polyclinic in Mangalabag, Cuttack has eight specialist departments, digital X-ray, ultrasound, ECG, spirometry, a diagnostic lab, endoscopy and a pharmacy in the same building.",
    ],
    route: {
      road: "Travel to Cuttack along NH-55 via Dhenkanal, then head to Mangalabag and Kathagola Road, near Shreema Hospital. Buses from Angul and Talcher arrive at Badambadi bus stand, a short auto-rickshaw ride from the clinic.",
      tip: "For a long trip, send your reports on WhatsApp before you travel. We can tell you which tests may be needed so you can come prepared — fasting, if required.",
    },
    focus: [
      { service: "pulmonology", why: "Years of exposure to coal dust, smoke or fumes can affect the lungs. A chest specialist's check-up with spirometry — available at the clinic — is worth doing if you have a cough or breathlessness." },
      { service: "endocrinology", why: "Diabetes and thyroid care, with HbA1c and thyroid tests at the in-house lab. Dr. Sandeep Kumar Sahu consults on Monday, Wednesday and Friday." },
      { service: "oncology", why: "Screening for oral cancer is important for anyone who uses or has used tobacco, gutkha or paan. Dr. Nitya Nutan Misra offers screening, evaluation and second opinions." },
    ],
    plan: [
      "Send photos of your previous reports on WhatsApp before you travel.",
      "Book a morning slot so tests and results can be completed the same day.",
      "If you need two specialists, ask us to arrange them on the same day.",
      "Collect medicines from the in-house pharmacy, and ask for enough to last until your next visit.",
    ],
    faqs: [
      { q: "Is a lung function test available for people who work in mining or industry?", a: "Yes. Spirometry, the standard lung function test, is available at the clinic and is usually done on the same day as the consultation with our chest specialist." },
      { q: "Can I send my reports before travelling from Angul?", a: "Yes. Send clear photos of your reports on WhatsApp (+91 70085 12773). We can tell you what else to bring and whether to come fasting." },
      { q: "Do you offer oral cancer screening?", a: "Yes. Oral cancer screening is part of our oncology services and is especially important for anyone who uses or has used tobacco, gutkha or paan." },
    ],
  },
];

export function getLocation(slug: string) {
  return locations.find((l) => l.slug === slug);
}
