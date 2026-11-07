/**
 * Blog posts (SEO Phase 6). Same content rules as the department pages:
 * no cure promises, no prices, no unverifiable claims, emergency guidance where relevant,
 * and medical review by the department doctor before `reviewedOn` is set (data/content-review.ts).
 */

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Optional highlighted note shown after the section */
  callout?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  /** Department slug this post supports (for CTA, related links and review) */
  service: string;
  datePublished: string;
  dateModified: string;
  excerpt: string;
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaText: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "root-canal-treatment-cuttack-guide",
    title: "Root canal treatment in Cuttack: what it involves, how many sittings, and what affects the cost",
    seoTitle: "Root Canal Treatment in Cuttack: Sittings, Pain & Cost",
    metaDescription:
      "Is root canal painful? How many sittings does it take, and what decides the cost in Cuttack? A clear guide to root canal treatment, crowns and aftercare.",
    service: "dental",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    excerpt:
      "Root canal treatment saves a badly decayed or infected tooth instead of removing it. Here is what actually happens, how many visits it takes, and the factors that decide the cost.",
    keyTakeaways: [
      "A root canal removes infection from inside a tooth so the tooth can be saved rather than extracted.",
      "It is done under local anaesthesia — most people feel little or no pain during treatment.",
      "Most root canals need 1 to 3 sittings; back teeth usually need a crown afterwards.",
      "The cost depends mainly on which tooth it is, how many canals it has, and the type of crown.",
    ],
    sections: [
      {
        heading: "What is root canal treatment?",
        paragraphs: [
          "Every tooth has a soft core called the pulp, which contains nerves and blood vessels. It runs from the crown of the tooth down through thin channels — the root canals — into the jaw bone. When decay goes deep, or a tooth cracks, bacteria can reach the pulp and infect it.",
          "An infected pulp cannot heal on its own. Without treatment, the infection can spread to the bone around the root and form an abscess. Root canal treatment (RCT) cleans out the infected pulp, disinfects the canals, and seals them so bacteria cannot get back in. The outer tooth stays in place, so you keep your natural tooth for chewing.",
          "The alternative is to remove the tooth. Extraction is sometimes the right choice, but a missing tooth can cause neighbouring teeth to drift and tilt, and replacing it later with a bridge or implant usually costs more than saving it. That is why dentists — especially specialists in conservative dentistry — try to save the tooth wherever possible.",
        ],
      },
      {
        heading: "Signs you might need a root canal",
        paragraphs: ["Only a dentist can confirm it with an examination and an X-ray, but these signs often point to an infected or dying pulp:"],
        list: [
          "A toothache that throbs, wakes you at night, or comes on without any trigger",
          "Pain when you bite or chew on one particular tooth",
          "Sensitivity to hot or cold that lingers for many seconds after the food is gone",
          "Swelling of the gum or face near a tooth, or a small pimple-like bump on the gum",
          "A tooth that has turned grey or dark",
          "A deep cavity or cracked tooth, even if it does not hurt yet",
        ],
        callout:
          "Not every toothache needs a root canal. Mild, short sensitivity is often treated with a simple filling or a desensitising toothpaste. Get it checked early — earlier treatment is simpler.",
      },
      {
        heading: "What happens during a root canal, step by step",
        list: [
          "Examination and X-ray: the dentist checks the tooth and the shape and number of its canals.",
          "Local anaesthesia: the area is numbed so you are comfortable throughout.",
          "Access: a small opening is made in the top of the tooth to reach the pulp.",
          "Cleaning and shaping: fine instruments remove the infected pulp and shape the canals, which are rinsed with disinfecting solutions.",
          "Medication (if needed): if infection is significant, medicine may be placed inside the tooth between sittings.",
          "Filling the canals: the cleaned canals are sealed with a rubber-like material.",
          "Sealing the tooth: a filling closes the opening; a crown is often placed later to protect the tooth.",
        ],
      },
      {
        heading: "How many sittings does a root canal take?",
        paragraphs: [
          "Most root canals are completed in 1 to 3 sittings. A front tooth with a single canal and little infection may be finished in one visit. Molars at the back have three or four canals that are often curved, and a tooth with an abscess may need medicine placed inside it between visits so the infection can settle.",
          "If you are travelling from outside Cuttack — from Jagatsinghpur, Kendrapara or Dhenkanal, for example — ask the dentist at the first visit how many sittings your tooth is likely to need. You can then plan your trips in advance.",
        ],
      },
      {
        heading: "Is root canal treatment painful?",
        paragraphs: [
          "This is the most common worry, and the answer is reassuring: the treatment itself is done under local anaesthesia, so most people feel pressure but little or no pain. In fact, a root canal usually relieves the severe pain caused by the infection.",
          "For a few days afterwards the tooth may feel tender when you bite, especially if it was badly infected before treatment. This usually settles on its own or with simple painkillers your dentist recommends. Severe pain, swelling that increases, or fever after treatment is not normal — contact your dentist.",
        ],
      },
      {
        heading: "Do I need a crown after root canal treatment?",
        paragraphs: [
          "A tooth that has had a root canal becomes more brittle, because much of its inner structure has been removed and it no longer has a living nerve. Back teeth (premolars and molars) take heavy chewing force, so a crown is usually recommended to stop them from cracking. Front teeth with little damage can sometimes be restored with a filling alone.",
          "Crowns come in different materials — metal, metal-ceramic and all-ceramic options — which differ in appearance, strength and cost. Your dentist will explain which suits the tooth's position and your bite.",
        ],
      },
      {
        heading: "What decides the cost of a root canal in Cuttack?",
        paragraphs: [
          "Prices vary between clinics, so rather than quote a single number, it helps to understand what actually changes the cost. A good dentist will give you a clear estimate after examining the tooth and before starting any treatment.",
        ],
        list: [
          "Which tooth: front teeth usually have one canal; molars have three or four, which takes more time and skill.",
          "Severity of infection: an abscess may need extra sittings and medication.",
          "Re-treatment: redoing an old root canal that has failed is more complex than a first-time treatment.",
          "X-rays: most root canals need X-rays before, during and after treatment.",
          "The crown: the crown is usually charged separately, and its material makes the biggest difference to the total.",
        ],
        callout:
          "Before you start, ask for an estimate that includes the number of sittings, the X-rays, and the crown — so there are no surprises later.",
      },
      {
        heading: "Aftercare: making your root canal last",
        list: [
          "Avoid chewing hard food on the treated tooth until the final filling or crown is placed.",
          "Keep the follow-up appointments, especially for the crown — an unprotected molar can crack.",
          "Brush twice a day and clean between your teeth; a root-canal-treated tooth can still decay at its edges.",
          "If you use tobacco, gutkha or paan, this is a good moment to stop — it harms the gums that hold the tooth.",
          "Have a dental check-up every six months.",
        ],
      },
      {
        heading: "Common myths about root canals",
        paragraphs: [
          "“It's better to just pull the tooth out.” Keeping your natural tooth is usually best for chewing, appearance and the health of neighbouring teeth. Extraction is an option when a tooth cannot be saved, not a shortcut.",
          "“Root canal treatment causes illness elsewhere in the body.” This old idea is not supported by modern evidence. Removing an infection from the tooth is good for your health.",
          "“If the pain has stopped, the tooth has healed.” Pain can stop because the nerve has died — while the infection keeps spreading quietly. A tooth that hurt badly and then went quiet still needs to be checked.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a root canal take?", a: "Each sitting usually takes 45 minutes to an hour and a half. Most root canals are completed in 1 to 3 sittings depending on the tooth and the infection." },
      { q: "Can I eat after a root canal?", a: "Wait until the numbness wears off so you don't bite your cheek, and avoid chewing hard food on the treated tooth until the final filling or crown is placed." },
      { q: "How long does a root-canal-treated tooth last?", a: "With a good seal, a crown where needed, and regular brushing and check-ups, a treated tooth can last for many years." },
      { q: "Is root canal treatment safe in pregnancy?", a: "Urgent dental infections should not be ignored in pregnancy. Tell your dentist you are pregnant; they will plan treatment and any X-rays with appropriate precautions, ideally in consultation with your gynaecologist." },
      { q: "Where can I get a root canal in Cuttack?", a: "At Sai Shree Polyclinic in Mangalabag, Cuttack, Dr. Abhas Dash (BDS, MDS Conservative Dentistry) provides root canal treatment Monday to Saturday." },
    ],
    ctaHeading: "Toothache or a deep cavity?",
    ctaText:
      "Dr. Abhas Dash (MDS Conservative Dentistry) sees patients Monday to Saturday at Sai Shree Polyclinic, Mangalabag, Cuttack. You'll get a clear estimate before any treatment begins.",
  },

  {
    slug: "diabetes-diet-odia-food",
    title: "Diabetes diet with Odia food: how to eat rice, pakhala, dalma and sweets when you have sugar",
    seoTitle: "Diabetes Diet with Odia Food: Rice, Pakhala & Sweets",
    metaDescription:
      "Living with sugar in Odisha? Practical diabetes diet tips for Odia meals — rice portions, pakhala, dalma, fish, festival sweets and fasting, from Cuttack.",
    service: "endocrinology",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    excerpt:
      "You don't have to give up Odia food to control diabetes. Here is how to build a sugar-friendly plate around rice, dalma, saga and fish — and how to handle pakhala, sweets and festivals.",
    keyTakeaways: [
      "Rice is not banned — the amount, and what you eat with it, matter most.",
      "Fill half your plate with vegetables and saga, a quarter with dal, fish, egg or chhena, and a quarter with rice.",
      "Pakhala can fit into a diabetes diet in a measured portion with vegetables and curd — not with extra rice or sugar.",
      "Festival sweets are best kept small and occasional; never fast or change medicines without asking your doctor.",
    ],
    sections: [
      {
        heading: "Why food matters so much in diabetes",
        paragraphs: [
          "In type 2 diabetes, the body cannot use insulin well, so sugar from food stays in the blood for longer. Carbohydrates — rice, roti, chuda, mudhi, potatoes and sweets — raise blood sugar the most. Protein, fibre and healthy fats slow that rise down.",
          "Medicines are important, but they work best with sensible eating. The good news is that a traditional Odia meal — rice, dalma, saga, a vegetable and fish — can be adjusted into an excellent diabetes plate without giving up the food you grew up with.",
        ],
      },
      {
        heading: "The diabetes plate, Odia style",
        paragraphs: ["A simple way to plan every lunch and dinner without counting calories:"],
        list: [
          "Half the plate: vegetables and greens — saga, santula, a sabzi of bhendi, kakharu, potala, kakudi or baigana, and a salad.",
          "A quarter: protein — dalma or dal, fish curry (machha jhola), egg, chicken, or chhena.",
          "A quarter: rice — about one katori of cooked rice for most adults, adjusted by your doctor or dietitian.",
          "Add a small bowl of curd (dahi) if you like it; it adds protein and keeps you full.",
        ],
        callout:
          "Eat the vegetables and dal first, and the rice last. Starting with fibre and protein can soften the rise in sugar after the meal.",
      },
      {
        heading: "Rice: how much, and which kind?",
        paragraphs: [
          "Most people in Odisha eat rice two or three times a day, often in large heaps. For someone with diabetes, the portion size is the single biggest change. Use a katori to measure your rice for a week — most people are surprised by how much they were eating.",
          "Parboiled (usuna) rice and rice eaten with plenty of vegetables and dal are better choices than a large plate of plain white rice. Brown rice or mixing rice with millets such as ragi can help some people, but the total quantity still matters more than the variety.",
          "Watch the hidden rice too: chuda, mudhi, pitha, khichdi and upma are all carbohydrate. If you have chuda for breakfast, keep the rice at lunch a little smaller.",
        ],
      },
      {
        heading: "Can I eat pakhala if I have diabetes?",
        paragraphs: [
          "Pakhala — rice soaked in water, often fermented overnight — is part of summer life in Odisha. It is still rice, so it raises blood sugar like rice does. The trick is in the portion and the company it keeps.",
        ],
        list: [
          "Keep to a measured bowl of rice in your pakhala — don't keep refilling.",
          "Add curd and plenty of sides: saga bhaja, badi chura with vegetables, fried or curried fish, kakudi, onion and chilli.",
          "Limit fried potato (alu bhaja) and papad — they add starch and oil.",
          "Have it at lunch rather than late at night, and take a short walk afterwards.",
        ],
        callout:
          "If you take insulin or tablets that can cause low sugar, ask your doctor how to time them on pakhala days, especially in the summer heat when you also lose water through sweat.",
      },
      {
        heading: "Dalma, saga and fish — your best friends",
        paragraphs: [
          "Dalma, made from dal cooked with vegetables such as pumpkin, papaya, potala and saru, is close to an ideal diabetes dish: protein and fibre together. Go easy on the potato and raw banana in it, and enjoy it as a large part of the meal rather than a side.",
          "Leafy greens (saga) — leutia, kosala, poi, pita, sajana — are low in carbohydrate and rich in fibre. Fish, a staple in coastal Odisha, is an excellent protein; curries and grilled fish are better than deep-fried fish every day.",
        ],
      },
      {
        heading: "Sweets, rasagola and festival days",
        paragraphs: [
          "Odisha's sweets — rasagola, chhena poda, chhena jhili, rasabali, arisa pitha, khaja and the many pithas of Raja and Manabasa Gurubara — are part of every celebration. You don't need to feel guilty at a festival, but sweets do raise sugar quickly.",
        ],
        list: [
          "Choose one small piece and enjoy it slowly, rather than several.",
          "Have it straight after a meal, not on an empty stomach.",
          "On festival days, keep the rice portion smaller to make room.",
          "Don't replace sugar with jaggery or honey thinking it is safe — they raise blood sugar too.",
          "Fruits are healthy in moderation: one medium fruit at a time. In mango season, a few slices rather than two or three mangoes.",
        ],
      },
      {
        heading: "Fasting during vratas and Kartika month",
        paragraphs: [
          "Many people observe fasts — for Kartika, Savitri Brata, Shivaratri and other occasions — or eat a single habisa meal a day. For someone with diabetes, especially on insulin or certain tablets, a long fast can drop blood sugar dangerously low, and a heavy meal afterwards can push it very high.",
          "If you plan to fast, speak to your doctor beforehand. The dose or timing of your medicines may need to change, and you should know how to recognise low sugar — sweating, shaking, sudden hunger, confusion — and treat it quickly with sugar or glucose.",
        ],
        callout:
          "Never stop or change your diabetes medicines on your own because you are fasting or eating less. Ask your doctor first.",
      },
      {
        heading: "Simple habits that help every day",
        list: [
          "Eat at regular times; avoid very long gaps followed by a huge meal.",
          "Walk for 10–15 minutes after lunch and dinner.",
          "Drink water instead of sweetened tea, cold drinks and packaged juices. Ask for chai with less sugar — or none.",
          "Cook with less oil; choose curries over deep-fried food most days.",
          "Check your sugar as your doctor advises, and get an HbA1c test every 3 months or as advised.",
        ],
      },
      {
        heading: "When to see a diabetes specialist",
        paragraphs: [
          "See an endocrinologist if your sugar stays high despite medicines, if you have frequent low-sugar episodes, if you are newly diagnosed and want a clear plan, or if you are pregnant or planning a pregnancy. Diet advice works best when it is matched to your medicines, your HbA1c and your daily routine.",
        ],
      },
    ],
    faqs: [
      { q: "Can people with diabetes eat rice every day?", a: "Yes, in a measured portion — usually about a katori of cooked rice per meal for most adults, with plenty of vegetables and protein. Your doctor or dietitian can tailor the amount to you." },
      { q: "Is pakhala good or bad for diabetes?", a: "Pakhala is rice, so it raises sugar like rice. In a measured portion with curd and vegetable sides, and with little fried potato, it can fit into a diabetes diet." },
      { q: "Are jaggery and honey safe for diabetics?", a: "No. Jaggery and honey are sugars and raise blood glucose much like white sugar does. Keep them as small as any other sweet." },
      { q: "Can I fast during Kartika if I have diabetes?", a: "Talk to your doctor before fasting. Medicines may need adjusting to avoid dangerously low or high sugar." },
      { q: "Which test shows long-term sugar control?", a: "HbA1c shows your average blood sugar over the past 2–3 months. It is available at the diagnostic lab at Sai Shree Polyclinic." },
    ],
    ctaHeading: "Want a diabetes plan built around your meals?",
    ctaText:
      "Dr. Sandeep Kumar Sahu (DM Endocrinology) sees patients on Monday, Wednesday and Friday at Sai Shree Polyclinic, Mangalabag, Cuttack. HbA1c and thyroid tests are done at the in-house lab.",
  },

  {
    slug: "when-to-see-neurologist-headache-migraine",
    title: "When should you see a neurologist for headache or migraine?",
    seoTitle: "When to See a Neurologist for Headache or Migraine",
    metaDescription:
      "Most headaches are harmless, but some need a neurologist — or emergency care. Learn the warning signs, migraine triggers and what a neurology visit involves.",
    service: "neurology",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    excerpt:
      "Almost everyone gets headaches. Here is how to tell an ordinary headache from one that needs a specialist — and the warning signs that mean going to an emergency department straight away.",
    keyTakeaways: [
      "Most headaches are tension-type or migraine and are not dangerous, but frequent headaches deserve proper treatment.",
      "A sudden, severe 'worst-ever' headache, or headache with weakness, confusion or a stiff neck, is an emergency.",
      "A headache diary helps your neurologist find the type and the triggers.",
      "Taking painkillers on many days a month can itself cause daily headaches.",
    ],
    sections: [
      {
        heading: "Headaches are common — but not all are the same",
        paragraphs: [
          "Headache is one of the most common reasons people see a doctor. The great majority are 'primary' headaches — the headache itself is the condition — such as tension-type headache and migraine. A small number are 'secondary', caused by something else such as an infection, a bleed or high pressure in the head.",
          "Knowing which type you have matters, because the treatment is different, and because the rare serious causes need urgent care.",
        ],
      },
      {
        heading: "The common types of headache",
        list: [
          "Tension-type headache: a tight, pressing band around the head, often linked to stress, poor sleep, long screen time or neck strain. Usually mild to moderate.",
          "Migraine: often one-sided and throbbing, lasting hours to days, with nausea or vomiting and sensitivity to light and noise. Some people see zig-zag lines or flashing lights (an aura) beforehand.",
          "Cluster headache: rare but very severe pain around one eye, with a watering eye and blocked nostril on the same side, coming in bouts.",
          "Medication-overuse headache: daily or near-daily headache in people who take painkillers on many days of the month.",
        ],
      },
      {
        heading: "Warning signs: when a headache is an emergency",
        paragraphs: ["Go to the nearest hospital emergency department straight away if a headache comes with any of these:"],
        list: [
          "Sudden, severe headache that peaks within a minute — the 'worst headache of my life'",
          "Weakness, numbness or drooping on one side of the face or body, or difficulty speaking",
          "Fever with a stiff neck, a rash, or confusion",
          "Fainting, a fit (seizure), or unusual drowsiness",
          "Headache after a head injury, especially with vomiting or confusion",
          "Sudden loss of vision or double vision",
        ],
        callout:
          "These can be signs of a stroke, bleeding in the brain or meningitis. Do not wait for an outpatient appointment — go to an emergency department immediately.",
      },
      {
        heading: "When to book a neurologist appointment",
        paragraphs: ["These are not emergencies, but they are good reasons to see a neurologist soon:"],
        list: [
          "Headaches on several days a week, or headaches that are steadily getting worse",
          "Headaches that wake you from sleep or are worst on waking",
          "A new kind of headache starting after the age of 50",
          "Headaches that change with coughing, straining or bending",
          "Migraines that stop you working, studying or looking after your family",
          "Needing painkillers on more than 10 days a month",
          "Headaches with a change in personality, memory or balance",
        ],
      },
      {
        heading: "Common migraine triggers in everyday life",
        paragraphs: [
          "Migraine is partly inherited, but attacks are often set off by triggers. In Odisha, several are especially common:",
        ],
        list: [
          "Heat and dehydration during the long summer — drink water regularly and avoid long exposure to the midday sun.",
          "Skipped meals and long fasts — keep regular meal times, and plan carefully on fasting days.",
          "Irregular or short sleep, including late nights during festivals and exam season.",
          "Bright sunlight, glare and long screen time.",
          "Strong smells, loud noise, stress and anxiety.",
          "Too much tea or coffee — or suddenly stopping it.",
          "Hormonal changes around periods in women.",
        ],
      },
      {
        heading: "Keep a headache diary",
        paragraphs: [
          "Before your appointment, note down each headache for 2–4 weeks: the date, time it started, how long it lasted, how severe it was (on a scale of 1 to 10), where it hurt, other symptoms, what you had eaten, how you slept, and which medicines you took. Women should also note their period dates.",
          "This simple record is one of the most useful things you can bring. It helps the neurologist identify the type of headache, spot triggers, and check whether painkiller use is too frequent.",
        ],
      },
      {
        heading: "What happens at a neurology consultation?",
        paragraphs: [
          "The neurologist will ask detailed questions about your headaches and your general health, and examine your nervous system — eyes, reflexes, strength, sensation, coordination and walking. For most people with typical tension-type headache or migraine and a normal examination, no scans are needed.",
          "A CT or MRI scan is advised when there are warning signs, an abnormal examination, or an unusual pattern. Scanning everyone 'just in case' isn't helpful and can find harmless incidental findings that cause worry.",
        ],
      },
      {
        heading: "Headaches in children and teenagers",
        paragraphs: [
          "Children get headaches too, and migraine often starts in childhood or the teenage years. In children, migraine attacks can be shorter and are sometimes felt on both sides of the head, often with tummy pain, nausea or a need to lie down in a dark room.",
          "Common triggers include skipped breakfast, not drinking enough water at school, late nights, long hours on phones or tablets, and exam stress. An uncorrected vision problem can also cause headaches after reading — an eye test is worth doing.",
          "Take a child to a doctor if headaches are frequent, wake them from sleep, come with vomiting in the morning, affect their balance, walking or behaviour, or are getting steadily worse. Any of the emergency warning signs above apply to children as well.",
        ],
      },
      {
        heading: "Headaches during pregnancy",
        paragraphs: [
          "Many women notice a change in their headaches during pregnancy — migraine often improves in the later months, while tension headaches can increase. Do not take painkillers or migraine medicines in pregnancy without asking your doctor, as some are not safe for the baby.",
          "A new or severe headache in the second half of pregnancy, especially with swelling of the face or hands, blurred vision, or pain under the ribs, can be a sign of pre-eclampsia (high blood pressure in pregnancy). This needs urgent medical attention the same day — contact your gynaecologist or go to a hospital emergency department.",
        ],
      },
      {
        heading: "What you can do during a migraine attack",
        list: [
          "Take the treatment your doctor has advised as early as possible — it works best at the start of an attack.",
          "Rest in a quiet, dark, cool room.",
          "Sip water, especially in hot weather or if you have been vomiting.",
          "Try a cold or warm compress on your forehead or the back of your neck.",
          "Avoid screens until the attack eases.",
          "Note the attack in your headache diary once you feel better.",
        ],
      },
      {
        heading: "How migraine is treated",
        paragraphs: [
          "Treatment has two parts. Acute treatment stops an attack once it starts — the right medicine taken early works best. Preventive treatment is considered when attacks are frequent or disabling; it is taken daily to reduce how often and how badly attacks come.",
          "Lifestyle changes — regular sleep and meals, enough water, exercise and managing stress — make medicines work better. Migraine cannot be promised a cure, but most people can reduce attacks substantially with the right plan.",
        ],
        callout:
          "Be careful with frequent painkillers. Taking them on many days a month can cause medication-overuse headache. Your neurologist can help you step down safely.",
      },
    ],
    faqs: [
      { q: "Do I need a CT scan or MRI for my headache?", a: "Not usually. Most people with typical tension-type headache or migraine and a normal examination don't need a scan. A neurologist advises one when there are warning signs or an unusual pattern." },
      { q: "Can migraine be cured?", a: "Migraine cannot be promised a cure, but with the right treatment and lifestyle changes most people have far fewer and milder attacks." },
      { q: "Is it safe to take painkillers for every headache?", a: "Occasional use is fine, but taking painkillers on more than about 10 days a month can cause medication-overuse headache. See a doctor if you need them often." },
      { q: "Can heat and dehydration cause headaches?", a: "Yes. Heat and not drinking enough water are common triggers, especially in Odisha's summer. Drink water regularly and avoid long exposure to the midday sun." },
      { q: "Where can I see a neurologist in Cuttack?", a: "Dr. Manasi Das (DM Neurology) sees patients at Sai Shree Polyclinic, Mangalabag, Cuttack, on every clinic day, Monday to Saturday." },
    ],
    ctaHeading: "Frequent headaches or migraine?",
    ctaText:
      "Dr. Manasi Das (MBBS, MD, DM Neurology) sees patients at Sai Shree Polyclinic, Mangalabag, Cuttack, Monday to Saturday. Bring your headache diary to your first visit.",
  },

  {
    slug: "spirometry-test-guide",
    title: "Spirometry test: what it is, why your doctor orders it, and how to prepare",
    seoTitle: "Spirometry Test (Lung Function Test): A Patient's Guide",
    metaDescription:
      "What is a spirometry test, why is it done, and how should you prepare? A simple guide to the lung function test used for asthma, COPD and breathlessness.",
    service: "pulmonology",
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    excerpt:
      "Spirometry is a simple breathing test that shows how well your lungs work. Here is why chest specialists use it, what happens during the test, and how to get an accurate result.",
    keyTakeaways: [
      "Spirometry measures how much air you can breathe out, and how fast — the key test for asthma and COPD.",
      "It is simple and painless, and takes about 15–20 minutes.",
      "Avoid smoking, heavy meals and tight clothing before the test; ask whether to pause your inhaler.",
      "It is especially useful for people exposed to smoke, dust or fumes at home or at work.",
    ],
    sections: [
      {
        heading: "What is spirometry?",
        paragraphs: [
          "Spirometry — also called a lung function test or pulmonary function test (PFT) — measures how much air you can breathe out after taking the deepest breath you can, and how quickly you can blow it out. You breathe through a mouthpiece connected to a machine called a spirometer.",
          "Two numbers matter most: FVC, the total amount of air you can blow out, and FEV1, how much you blow out in the first second. Comparing them shows whether your airways are narrowed (as in asthma and COPD) or your lungs are smaller or stiffer than expected.",
        ],
      },
      {
        heading: "Why your doctor may order spirometry",
        list: [
          "To confirm asthma or COPD — a stethoscope alone cannot measure how narrowed the airways are.",
          "To investigate breathlessness, a long-lasting cough or wheezing.",
          "To check how well your treatment is working, and adjust inhalers.",
          "To monitor lung health in people exposed to smoke or dust — tobacco, wood or coal stove (chulha) smoke, or work in mining, construction, ports and heavy industry.",
          "Before some surgeries, to check that the lungs are fit for anaesthesia.",
        ],
      },
      {
        heading: "What happens during the test",
        paragraphs: [
          "You will sit upright, and a soft clip may be placed on your nose so that all the air goes through your mouth. The technician will ask you to breathe in as deeply as you can, seal your lips around the mouthpiece, and then blow out as hard and fast as possible, keeping going until your lungs feel empty.",
          "This is repeated at least three times to make sure the results are consistent. You may feel a little tired or light-headed for a moment — that is normal, and you can rest between attempts.",
        ],
      },
      {
        heading: "The reversibility test",
        paragraphs: [
          "Often the test is repeated about 15–20 minutes after you inhale a reliever medicine (a bronchodilator). If your numbers improve significantly, it suggests your airways can open up — a pattern typical of asthma. If they improve only a little, it points more towards COPD. This 'before and after' comparison is one of the most useful parts of the test.",
        ],
      },
      {
        heading: "How to prepare for spirometry",
        list: [
          "Don't smoke for at least an hour before the test.",
          "Avoid a heavy meal in the two hours before.",
          "Wear loose, comfortable clothing that doesn't restrict your chest or stomach.",
          "Avoid strenuous exercise just before the test.",
          "Ask your doctor whether to stop your inhaler beforehand and for how long — never stop prescribed medicines on your own.",
          "Bring your inhalers and a list of all medicines you take.",
        ],
        callout:
          "When you book, tell the clinic you are coming for spirometry. They will tell you exactly which medicines to pause, if any.",
      },
      {
        heading: "Who should not have spirometry right now?",
        paragraphs: [
          "Because the test involves forceful breathing, it may be postponed if you have recently had a heart attack, chest pain, eye surgery, chest or abdominal surgery, a collapsed lung, or if you are coughing up blood. Tell the doctor and technician about any recent illness or surgery before the test.",
        ],
      },
      {
        heading: "Understanding your results",
        paragraphs: [
          "Your results are compared with the expected values for someone of your age, height, sex and ethnicity. Results may be described as normal, 'obstructive' (airways narrowed — as in asthma or COPD), or 'restrictive' (the lungs hold less air than expected), which may need further tests.",
          "Spirometry is one piece of the picture. Your chest specialist will interpret it together with your symptoms, examination, and sometimes a chest X-ray, to reach a diagnosis and plan treatment.",
        ],
      },
      {
        heading: "Spirometry or chest X-ray — what's the difference?",
        paragraphs: [
          "People are often surprised that a chest X-ray is not enough. An X-ray is a picture: it shows the shape of the lungs and can reveal infections such as pneumonia or tuberculosis, fluid, or a mass. But it cannot measure how well air moves in and out.",
          "Spirometry measures function. In asthma and early COPD the X-ray is often completely normal, while spirometry clearly shows narrowed airways. That is why chest specialists use both tests together — one to see the lungs, the other to measure how they work.",
        ],
      },
      {
        heading: "Can children do a spirometry test?",
        paragraphs: [
          "Most children from about 5 or 6 years of age can do spirometry with clear instructions and some encouragement. It is useful when a child has a long-lasting cough, wheezing with colds, or breathlessness during play, and it helps confirm childhood asthma.",
          "Children may need a few extra attempts to get a good result. Tell the technician if your child is anxious — a calm explanation and a little practice usually help.",
        ],
      },
      {
        heading: "Tips for an accurate result",
        list: [
          "Breathe in as deeply as you can before each blow — a half breath gives a falsely low result.",
          "Blow out as hard and fast as you can, right from the start.",
          "Keep blowing until the technician tells you to stop, even when it feels like there is no air left.",
          "Keep your lips sealed tightly around the mouthpiece so no air escapes.",
          "If you feel dizzy, say so and rest before the next attempt.",
        ],
      },
      {
        heading: "How often should spirometry be repeated?",
        paragraphs: [
          "There is no single rule — your chest specialist will advise based on your condition. People with COPD are often re-tested about once a year or when symptoms change. In asthma, the test may be repeated to check whether treatment is working or before changing medicines.",
          "If you have been exposed to smoke or dust for many years, a baseline test is useful even if you feel well, so that any later decline can be spotted early.",
        ],
      },
      {
        heading: "Breathing problems in Odisha: why testing matters",
        paragraphs: [
          "Many people in Odisha live with breathing problems for years, thinking a cough is 'normal' for a smoker or for someone who cooks on a chulha. People working around Paradip's port and industries, or in the mining belt of Angul and Talcher, can be exposed to dust and fumes for long periods.",
          "Spirometry can pick up lung damage before it becomes severe. With the right diagnosis, treatment — usually inhalers used correctly — can ease breathlessness and reduce flare-ups.",
        ],
      },
    ],
    faqs: [
      { q: "Is spirometry painful?", a: "No. It is a simple breathing test. You may feel briefly tired or light-headed from the forceful breathing, but there is no pain." },
      { q: "How long does a spirometry test take?", a: "Usually about 15–20 minutes, or a little longer if a reversibility test with a reliever inhaler is included." },
      { q: "Can I eat before spirometry?", a: "Yes, but avoid a heavy meal in the two hours before, as a full stomach can make deep breathing harder." },
      { q: "Should I stop my inhaler before the test?", a: "Only if your doctor tells you to. Ask when you book — some inhalers are paused for a few hours before the test." },
      { q: "Where can I get spirometry in Cuttack?", a: "Spirometry is available at Sai Shree Polyclinic in Mangalabag, Cuttack, usually on the same day as a consultation with chest specialist Dr. Asutosh Rout." },
    ],
    ctaHeading: "Cough, wheezing or breathlessness?",
    ctaText:
      "Chest specialist Dr. Asutosh Rout (MD Pulmonology) sees patients at Sai Shree Polyclinic, Mangalabag, Cuttack, Monday to Saturday — with spirometry available the same day.",
  },
];

export const getPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const postsForService = (service: string) => blogPosts.filter((p) => p.service === service);
