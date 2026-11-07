/**
 * Long-form department page content (SEO Phase 4).
 *
 * Content rules (YMYL / Indian advertising law):
 * - No promises of cure or guaranteed results; no unverifiable superlatives.
 * - Only services, tests and facts already confirmed by the clinic.
 * - Each page must be reviewed by its department doctor before `reviewedOn` is set
 *   (see data/content-review.ts).
 */

export interface ServiceContent {
  slug: string;
  /** Keyword-led line rendered inside the H1, above the department name */
  h1Kicker: string;
  intro: string[];
  conditions: { name: string; text: string }[];
  symptoms: string[];
  /** Tests and services available at the clinic for this department */
  available: { name: string; text: string }[];
  firstVisit: string[];
  /** Who can reach the clinic easily and how to plan the trip */
  travel: string;
  faqs: { q: string; a: string }[];
  /** Slugs of two related departments */
  related: [string, string];
}

export const serviceContent: Record<string, ServiceContent> = {
  endocrinology: {
    slug: "endocrinology",
    h1Kicker: "Diabetes & thyroid doctor in Cuttack",
    intro: [
      "Endocrinology is the branch of medicine that looks after your hormones — the chemical messengers that control blood sugar, metabolism, weight, growth, energy, fertility and mood. When a gland such as the pancreas, thyroid or adrenal gland makes too much or too little of a hormone, the effects can show up almost anywhere in the body.",
      "At Sai Shree Polyclinic in Mangalabag, Cuttack, the Endocrinology department is led by Dr. Sandeep Kumar Sahu (MBBS, MD Medicine, DM Endocrinology), who has 12 years of experience managing diabetes, thyroid disorders and other hormonal conditions. Because the clinic has an in-house diagnostic lab, most blood tests your doctor asks for — such as HbA1c and a thyroid profile — can be done in the same visit.",
      "Most endocrine conditions are long-term. The aim of treatment is to bring your numbers into a safe range, prevent complications, and give you a plan you can actually follow at home — including food that fits an Odia kitchen, not a diet you cannot sustain.",
    ],
    conditions: [
      { name: "Type 2 diabetes", text: "The most common reason people see an endocrinologist in India. Blood sugar stays high because the body does not use insulin well. With the right mix of medicine, food and activity, many people keep their sugar in a safe range and lower the risk of damage to eyes, kidneys, nerves and heart." },
      { name: "Type 1 diabetes and insulin management", text: "When the body makes little or no insulin, insulin injections are needed for life. We help with dose adjustment, recognising and handling low sugar, and day-to-day planning." },
      { name: "Diabetes during pregnancy", text: "High sugar first noticed in pregnancy (gestational diabetes) needs close monitoring for the safety of mother and baby. Endocrinology works alongside our gynaecologists when this happens." },
      { name: "Hypothyroidism (underactive thyroid)", text: "A slow thyroid can cause tiredness, weight gain, feeling cold, constipation, dry skin and irregular periods. It is diagnosed with a simple blood test and usually managed with a daily tablet and periodic checks." },
      { name: "Hyperthyroidism and goitre", text: "An overactive thyroid can cause weight loss, a racing heart, tremor, heat intolerance and anxiety. A swelling in the neck (goitre) or thyroid nodules also need evaluation." },
      { name: "PCOS (polycystic ovary syndrome)", text: "A hormonal condition in women linked to irregular periods, acne, excess hair growth, weight gain and insulin resistance. Care is often shared between endocrinology and gynaecology." },
      { name: "Adrenal and pituitary disorders", text: "Less common conditions that affect blood pressure, salt balance, weight and energy. These need careful testing and a specialist's interpretation." },
      { name: "Metabolic syndrome and obesity-related hormone problems", text: "A cluster of high sugar, high blood pressure, abnormal cholesterol and belly fat that raises the risk of heart disease. Early lifestyle and medical changes make a real difference." },
    ],
    symptoms: [
      "Feeling very thirsty, passing urine often, or losing weight without trying",
      "A fasting sugar or HbA1c report that is above normal",
      "Sugar that stays high even though you take your diabetes medicines",
      "Constant tiredness, unexplained weight gain or weight loss",
      "A swelling in the front of the neck, or a racing heartbeat with tremor",
      "Irregular periods, excess facial hair or acne in a young woman",
      "Wounds that heal slowly, or tingling and burning in the feet",
    ],
    available: [
      { name: "HbA1c testing", text: "Shows your average blood sugar over the last 2–3 months — the key number for adjusting diabetes treatment." },
      { name: "Thyroid profiling", text: "TSH, T3 and T4 levels to diagnose and monitor an under- or overactive thyroid." },
      { name: "Hormone panels", text: "Targeted blood tests for PCOS, adrenal and other hormonal conditions, done in the clinic's diagnostic lab." },
      { name: "Diet counselling", text: "Practical advice on portions, rice and sweets, festival foods and meal timing that fits everyday Odia meals." },
      { name: "Ultrasound and ECG", text: "Available in the same building when your doctor needs a neck ultrasound for the thyroid or a heart check." },
    ],
    firstVisit: [
      "Bring all your previous reports, prescriptions and the medicines you currently take (or photos of the strips).",
      "If your doctor may order a fasting sugar test, come without eating for 8–10 hours — water is fine. Call ahead and we will tell you.",
      "Dr. Sahu will take a detailed history, examine you and explain what your reports mean in plain language.",
      "Any blood tests needed can usually be done at the in-house lab during the same visit.",
      "You leave with a written plan: medicines, target numbers, food guidance and when to come back.",
    ],
    travel:
      "Diabetes and thyroid care means regular follow-up, so being close matters. The clinic is on Kathagola Rd, Mangalabag — easy to reach from anywhere in Cuttack and a straightforward trip from Bhubaneswar, Jagatsinghpur, Kendrapara and Jajpur. Dr. Sahu sees patients on Monday, Wednesday and Friday, so please book on WhatsApp before travelling to avoid a wasted journey.",
    faqs: [
      { q: "Which doctor should I see for diabetes or thyroid in Cuttack?", a: "An endocrinologist is the specialist for hormone-related conditions, including diabetes and thyroid disorders. At Sai Shree Polyclinic, Dr. Sandeep Kumar Sahu (DM Endocrinology) sees patients for both." },
      { q: "Can diabetes be cured?", a: "Type 2 diabetes is usually a long-term condition. It cannot be promised a cure, but many people keep their blood sugar well controlled with the right treatment, food and activity — and some can reduce their medicines over time under a doctor's supervision." },
      { q: "Do I need to come fasting?", a: "Only if your doctor plans a fasting blood test. Call or WhatsApp us when you book and we will tell you whether to fast." },
      { q: "On which days is the endocrinologist available?", a: "Dr. Sahu sees patients on Monday, Wednesday and Friday. Please book in advance so we can confirm your slot." },
      { q: "Can thyroid tests be done at the clinic?", a: "Yes. Thyroid profiling and HbA1c testing are done at the clinic's diagnostic lab, so you can usually consult and test in one visit." },
      { q: "I have PCOS — should I see an endocrinologist or a gynaecologist?", a: "Either can be the right first step. PCOS affects both hormones and the reproductive system, and our endocrinology and gynaecology departments work together when needed." },
      { q: "Do I still need to see a doctor if my sugar is only slightly high?", a: "Yes. A slightly high reading (pre-diabetes) is the best time to act, because lifestyle changes made early can delay or prevent diabetes." },
    ],
    related: ["gynecology", "gastroenterology"],
  },

  neurology: {
    slug: "neurology",
    h1Kicker: "Neurologist in Cuttack",
    intro: [
      "Neurology deals with the brain, spinal cord and nerves — the system that controls movement, sensation, memory, speech and balance. Symptoms such as repeated headaches, fits, numbness or weakness can feel frightening, and getting the right diagnosis early is what makes the biggest difference.",
      "The Neurology department at Sai Shree Polyclinic, Mangalabag, Cuttack is led by Dr. Manasi Das (MBBS, MD, DM Neurology), who has 15 years of experience. Her areas of interest include epilepsy, headache and migraine, stroke recovery and movement disorders such as Parkinson's disease.",
      "This is an outpatient neurology clinic for consultation, diagnosis and long-term follow-up. If you or someone near you shows sudden signs of stroke — face drooping, arm weakness, slurred speech — go to the nearest hospital emergency immediately. Every minute matters.",
    ],
    conditions: [
      { name: "Migraine and chronic headache", text: "Recurring headaches, often one-sided, with nausea or sensitivity to light. A neurologist can confirm the type of headache, rule out other causes and plan both relief and prevention." },
      { name: "Epilepsy and seizures (fits)", text: "Repeated seizures caused by abnormal electrical activity in the brain. With the right medicine and follow-up, many people have far fewer seizures and live active lives." },
      { name: "Stroke follow-up and recovery", text: "After hospital treatment for a stroke, ongoing care helps reduce the risk of another stroke and supports recovery of movement and speech." },
      { name: "Parkinson's disease and movement disorders", text: "Tremor, stiffness, slow movement or problems with balance. Treatment aims to control symptoms and keep you independent for longer." },
      { name: "Peripheral neuropathy", text: "Tingling, burning or numbness in the hands and feet — common in people with long-standing diabetes or vitamin B12 deficiency." },
      { name: "Vertigo and dizziness", text: "A spinning sensation or imbalance can come from the inner ear or the brain. A neurologist helps find which, and treats accordingly." },
      { name: "Memory problems", text: "Forgetfulness that is getting worse, especially in older family members, deserves a proper evaluation rather than being dismissed as old age." },
    ],
    symptoms: [
      "Headaches that are frequent, severe, or different from your usual headaches",
      "A fit, fainting spell or episode of unresponsiveness",
      "Numbness, tingling or weakness in the face, arm or leg",
      "Tremor, stiffness or slowing of movement",
      "Repeated dizziness, imbalance or falls",
      "Worsening memory or confusion",
      "Recovery planning after a stroke or head injury",
    ],
    available: [
      { name: "EEG testing", text: "Records the brain's electrical activity — an important test in the evaluation of seizures and epilepsy." },
      { name: "Nerve conduction study", text: "Measures how well nerves carry signals; used to assess neuropathy, carpal tunnel syndrome and nerve injuries." },
      { name: "Headache clinic", text: "Structured assessment of headache type and triggers, with a clear plan for relief and prevention." },
      { name: "Stroke rehabilitation guidance", text: "Follow-up care to manage risk factors and support recovery after a stroke." },
      { name: "Diagnostic lab, ECG and X-ray", text: "Blood tests, ECG and digital X-ray are available in the same building when your neurologist needs them." },
    ],
    firstVisit: [
      "Bring all previous reports — especially CT or MRI scans (films and the written report), EEGs and discharge summaries.",
      "Bring the medicines you take, or clear photos of the strips.",
      "If someone has seen your seizures or episodes, bring them along or ask them to record a video — it helps diagnosis a lot.",
      "Dr. Das will take a detailed history and do a neurological examination, then explain the likely diagnosis and next steps.",
      "If tests are needed, we will tell you which can be done at the clinic and which need a referral.",
    ],
    travel:
      "Neurology conditions often need several follow-up visits, so many families prefer a clinic they can reach easily. Sai Shree Polyclinic is on Kathagola Rd, near Shreema Hospital in Mangalabag — convenient from all parts of Cuttack and from Bhubaneswar, Jagatsinghpur, Kendrapara, Jajpur and Dhenkanal. Book on WhatsApp before you travel so your consultation time is confirmed.",
    faqs: [
      { q: "When should I see a neurologist for headaches?", a: "See a neurologist if headaches are frequent, getting worse, waking you from sleep, or come with weakness, vision changes, vomiting or confusion. A sudden, severe 'worst-ever' headache needs emergency care immediately." },
      { q: "Is epilepsy curable?", a: "Epilepsy cannot be promised a cure, but many people become seizure-free or have far fewer seizures with the right medicine taken regularly. Some may be able to reduce medicines over time under a neurologist's supervision." },
      { q: "Do you treat stroke patients?", a: "We provide outpatient follow-up and recovery care after a stroke. A new stroke is an emergency and must be treated in a hospital emergency department straight away." },
      { q: "Is EEG available at the clinic?", a: "Yes, EEG testing is listed among the neurology services. Please call ahead so we can schedule it with your consultation." },
      { q: "What should I bring to my first neurology appointment?", a: "All previous scans and reports, your current medicines, and — if possible — a video of any episodes or fits recorded by a family member." },
      { q: "Can tingling in the feet be due to diabetes?", a: "Yes. Diabetic neuropathy is one of the most common causes. A nerve conduction study and blood tests help confirm it, and our endocrinology department can help with sugar control." },
    ],
    related: ["endocrinology", "pulmonology"],
  },

  pulmonology: {
    slug: "pulmonology",
    h1Kicker: "Chest specialist & pulmonologist in Cuttack",
    intro: [
      "Pulmonology is the care of the lungs and airways. A pulmonologist — often called a chest specialist in India — diagnoses and manages breathing problems ranging from asthma and allergies to long-term conditions such as COPD.",
      "At Sai Shree Polyclinic, Mangalabag, Cuttack, the Pulmonology department is led by Dr. Asutosh Rout (MBBS, MD Pulmonology), who has 10 years of experience treating asthma, COPD, bronchitis and chronic lung conditions. Spirometry — the main breathing test for asthma and COPD — is available at the clinic.",
      "Breathing problems in Odisha are often worse during the monsoon and winter, and in people exposed to smoke from wood or coal stoves, dust, or tobacco. A correct diagnosis and the right inhaler technique can change daily life far more than people expect.",
    ],
    conditions: [
      { name: "Asthma", text: "Narrowing of the airways that causes wheezing, cough and breathlessness, often at night or with cold, dust or exercise. Inhalers used correctly keep most people well controlled." },
      { name: "COPD (chronic obstructive pulmonary disease)", text: "Long-term lung damage, usually from smoking or years of exposure to smoke and dust. Treatment eases breathlessness and helps prevent flare-ups." },
      { name: "Chronic bronchitis", text: "A cough with phlegm that lasts for months and keeps coming back. It needs evaluation to find the cause." },
      { name: "Allergic airway disease", text: "Sneezing, a blocked nose and cough triggered by dust, pollen, mould or pets — often linked with asthma." },
      { name: "Chest infections", text: "Persistent or repeated infections that do not settle with routine treatment deserve a specialist's review." },
      { name: "Sleep-related breathing problems", text: "Loud snoring with pauses in breathing and daytime sleepiness can point to sleep apnoea, which affects heart and brain health." },
      { name: "Chronic cough", text: "A cough lasting more than eight weeks has many possible causes — from asthma and acid reflux to lung disease — and should be properly investigated." },
    ],
    symptoms: [
      "A cough that has lasted more than three weeks",
      "Wheezing or a whistling sound when you breathe",
      "Breathlessness when walking, climbing stairs or lying flat",
      "Frequent chest infections or bronchitis",
      "Asthma that is not controlled with your current inhalers",
      "Loud snoring with gasping or choking at night",
      "A long history of smoking or exposure to smoke and dust",
    ],
    available: [
      { name: "Spirometry (lung function test)", text: "You blow into a device that measures how much and how fast you can breathe out. It confirms asthma or COPD and shows how well treatment is working." },
      { name: "Nebulization", text: "Medicine delivered as a fine mist for quick relief during a flare-up of asthma or COPD." },
      { name: "Oxygen therapy", text: "Short-term oxygen support at the clinic when needed during evaluation." },
      { name: "Allergy testing", text: "Helps identify triggers so you can avoid them and your treatment can be targeted." },
      { name: "Digital X-ray and diagnostic lab", text: "Chest X-ray and blood tests are available in the same building." },
    ],
    firstVisit: [
      "Bring previous chest X-rays, CT scans, test reports and the inhalers or medicines you use.",
      "If spirometry may be done, avoid a heavy meal and smoking for a few hours beforehand. We will tell you whether to pause any inhaler.",
      "Dr. Rout will listen to your history, examine your chest and, if needed, arrange spirometry the same day.",
      "Expect a demonstration of correct inhaler technique — it is one of the most common reasons treatment does not work.",
      "You leave with a written plan, including what to do if your breathing suddenly gets worse.",
    ],
    travel:
      "Patients with breathing problems need a clinic that is easy to reach without a long, tiring journey. The clinic is on Kathagola Rd in Mangalabag, Cuttack, convenient from across the city and reachable from Bhubaneswar, Jagatsinghpur, Kendrapara and Jajpur. Please book on WhatsApp before travelling, and if you are severely breathless go to the nearest hospital emergency instead.",
    faqs: [
      { q: "What is the difference between a pulmonologist and a chest specialist?", a: "They are the same. 'Chest specialist' is the common term in India for a pulmonologist — a doctor who specialises in the lungs and breathing." },
      { q: "What is spirometry and is it painful?", a: "Spirometry is a simple breathing test where you blow hard into a tube. It is not painful and takes about 15–20 minutes. It is the standard test to confirm asthma and COPD." },
      { q: "Can asthma be cured?", a: "Asthma cannot be promised a cure, but with the right inhalers used correctly, most people control it well and live normal, active lives." },
      { q: "Are inhalers addictive or harmful?", a: "No. Inhalers deliver a small dose of medicine directly to the lungs, which is why they are often safer than tablets for long-term use. Your doctor will explain the right dose." },
      { q: "When should I see a doctor for a cough?", a: "See a chest specialist if a cough lasts more than three weeks, brings up blood, or comes with weight loss, fever or breathlessness." },
      { q: "Do you treat COPD from smoking or chulha smoke?", a: "Yes. COPD from tobacco or long exposure to wood or coal stove smoke is common in Odisha. Treatment can ease breathlessness and reduce flare-ups." },
    ],
    related: ["neurology", "oncology"],
  },

  gastroenterology: {
    slug: "gastroenterology",
    h1Kicker: "Gastroenterologist in Cuttack",
    intro: [
      "Gastroenterology is the care of the digestive system — the food pipe, stomach, intestines, liver, gall bladder and pancreas. Many people live for years with acidity, bloating or irregular bowel habits before seeing a specialist, but most of these problems can be diagnosed and managed well.",
      "The Gastroenterology department at Sai Shree Polyclinic, Mangalabag, Cuttack is led by Dr. Suryakanta Parida (MBBS, MD, DM Gastroenterology), who has 14 years of experience diagnosing and treating digestive and liver disorders. Endoscopy is available at the clinic, along with the diagnostic lab and ultrasound.",
      "Spicy, oily and late-night meals, irregular eating and long gaps between meals are common triggers for 'gastric' problems. A gastroenterologist helps separate a simple, diet-related problem from one that needs further investigation.",
    ],
    conditions: [
      { name: "Acidity and GERD", text: "A burning feeling in the chest or throat, sour burps or regurgitation — usually from acid flowing back into the food pipe. Long-standing reflux should be evaluated." },
      { name: "Gastritis and peptic ulcer", text: "Inflammation or sores in the stomach lining, often linked to H. pylori infection or painkiller use, causing upper-abdominal pain and nausea." },
      { name: "Irritable bowel syndrome (IBS)", text: "Recurring abdominal pain, bloating and constipation or loose motions. It is common, and symptoms can be managed with diet and treatment." },
      { name: "Fatty liver disease", text: "Fat build-up in the liver, often found on an ultrasound. It is linked to weight, diabetes and alcohol, and early changes can reverse it." },
      { name: "Other liver conditions", text: "Abnormal liver tests, jaundice or hepatitis need a specialist's evaluation to find the cause and protect the liver." },
      { name: "Chronic constipation or diarrhoea", text: "Bowel changes that last for weeks are worth investigating, especially after the age of 40." },
      { name: "Difficulty swallowing and indigestion", text: "Food sticking in the throat, early fullness or persistent indigestion can need an endoscopy to look inside." },
    ],
    symptoms: [
      "Acidity or heartburn more than twice a week, or not settling with antacids",
      "Pain in the upper or lower abdomen that keeps coming back",
      "Persistent bloating, constipation or loose motions",
      "Blood in the stool, black tarry stools, or vomiting blood (seek urgent care)",
      "Yellowing of the eyes or skin, or abnormal liver test reports",
      "Unexplained weight loss or loss of appetite",
      "Difficulty swallowing",
    ],
    available: [
      { name: "Endoscopy", text: "A thin flexible camera passed through the mouth to examine the food pipe, stomach and first part of the intestine — and take small samples if needed." },
      { name: "Colonoscopy", text: "Examination of the large intestine, used to investigate bleeding, bowel changes and for screening." },
      { name: "Liver function tests", text: "Blood tests that show how well the liver is working, done at the clinic's diagnostic lab." },
      { name: "H. pylori testing", text: "Detects the stomach infection that commonly causes gastritis and ulcers." },
      { name: "Ultrasound", text: "Abdominal ultrasound to look at the liver, gall bladder and other organs, available in the same building." },
    ],
    firstVisit: [
      "Bring previous ultrasound reports, endoscopy reports, blood tests and your current medicines.",
      "Note what you eat, when symptoms happen, and anything that makes them better or worse — it helps a lot.",
      "Dr. Parida will take a detailed history and examine your abdomen.",
      "If an endoscopy is advised, you will be told exactly how to prepare — usually no food for 6–8 hours beforehand.",
      "You leave with a diagnosis or a clear plan for tests, plus practical food and lifestyle advice.",
    ],
    travel:
      "Endoscopy and gastro consultations often need planning — fasting, someone to accompany you, and follow-up. The clinic is on Kathagola Rd, near Shreema Hospital in Mangalabag, Cuttack, easy to reach from the city and from Bhubaneswar, Jagatsinghpur, Kendrapara and Jajpur. Book on WhatsApp first so we can confirm your slot and tell you how to prepare.",
    faqs: [
      { q: "When should I see a gastroenterologist for acidity?", a: "If acidity happens more than twice a week, lasts for weeks, wakes you at night, or comes with difficulty swallowing, vomiting, weight loss or black stools, see a gastroenterologist." },
      { q: "Is endoscopy painful?", a: "Endoscopy is usually done with a throat spray and sometimes mild sedation. Most people feel some discomfort but not pain, and the test itself takes a few minutes." },
      { q: "How should I prepare for an endoscopy?", a: "You will usually be asked not to eat for 6–8 hours before the procedure. Our team will give you exact instructions when you book." },
      { q: "Can fatty liver be reversed?", a: "In many people, early fatty liver improves with weight loss, regular activity, avoiding alcohol and controlling sugar. Your doctor will monitor progress with tests." },
      { q: "Is IBS a serious disease?", a: "IBS does not damage the intestine, but it can affect daily life. A doctor first rules out other conditions, then helps manage symptoms with diet and treatment." },
      { q: "Is endoscopy available at Sai Shree Polyclinic?", a: "Yes, endoscopy is available at the clinic. Please book in advance so we can schedule it and share preparation instructions." },
      { q: "What tests are done for stomach problems?", a: "Depending on your symptoms, your doctor may advise blood tests, liver function tests, H. pylori testing, ultrasound or endoscopy — most of which are available at the clinic." },
    ],
    related: ["endocrinology", "oncology"],
  },

  dental: {
    slug: "dental",
    h1Kicker: "Dentist in Mangalabag, Cuttack",
    intro: [
      "Healthy teeth and gums affect how you eat, speak and feel about your smile — and gum disease is linked with general health conditions such as diabetes. Regular dental care prevents most problems from becoming painful or expensive.",
      "The Dental Clinic at Sai Shree Polyclinic, Mangalabag, Cuttack is led by Dr. Abhas Dash (BDS, MDS Conservative Dentistry), who has 8 years of experience. Conservative dentistry focuses on saving natural teeth — through fillings, root canal treatment and restorations — rather than removing them. He sees patients Monday to Saturday.",
      "Tobacco, gutkha and paan are common causes of stained teeth, gum disease and mouth sores in Odisha. A dental check-up is also a good moment to have your mouth looked at for any patches or ulcers that do not heal.",
    ],
    conditions: [
      { name: "Tooth decay (cavities)", text: "Decay starts painlessly. Found early, it is treated with a simple filling; left untreated, it reaches the nerve and causes pain." },
      { name: "Toothache and infected teeth", text: "Pain on biting, sensitivity that lingers, or a swelling near a tooth often means the nerve is infected. Root canal treatment can usually save the tooth." },
      { name: "Gum disease", text: "Bleeding, swollen gums and bad breath are signs of gum infection. Professional cleaning and good brushing habits help control it." },
      { name: "Sensitive teeth", text: "A sharp twinge with cold, hot or sweet foods can come from worn enamel, gum recession or decay — the cause decides the treatment." },
      { name: "Broken or worn teeth", text: "Chipped, cracked or worn teeth can be restored with fillings or crowns to protect them and restore your bite." },
      { name: "Stained or discoloured teeth", text: "Professional cleaning removes surface stains; whitening can lighten deeper discolouration." },
      { name: "Misaligned teeth", text: "Crowded or crooked teeth can be harder to clean and may affect your bite. Braces can help align them." },
    ],
    symptoms: [
      "Toothache, or pain when biting or chewing",
      "Sensitivity to hot, cold or sweet that lingers",
      "Bleeding gums when brushing",
      "Swelling of the gum or face near a tooth",
      "Bad breath that does not go away",
      "A broken, chipped or loose tooth",
      "A mouth ulcer or white/red patch that has not healed in two weeks",
    ],
    available: [
      { name: "Root canal treatment (RCT)", text: "Removes infection from inside the tooth so it can be saved, usually followed by a crown for protection." },
      { name: "Fillings and restorations", text: "Tooth-coloured fillings to repair decay and small fractures." },
      { name: "Teeth cleaning (scaling)", text: "Professional removal of plaque and tartar to keep gums healthy." },
      { name: "Teeth whitening", text: "Cosmetic lightening of discoloured teeth after a check-up." },
      { name: "Braces", text: "Orthodontic correction of crowded or misaligned teeth." },
      { name: "Crowns, bridges and extractions", text: "Crowns to protect treated teeth, bridges to replace missing teeth, and extractions when a tooth cannot be saved." },
    ],
    firstVisit: [
      "Bring any previous dental X-rays or treatment records, and tell us about medical conditions such as diabetes, heart problems or blood thinners.",
      "Dr. Dash will examine your teeth and gums and, if needed, take an X-ray.",
      "He will explain what he finds and the options, including the number of sittings and approximate cost, before starting any treatment.",
      "Simple treatments such as cleaning or a filling may be done in the same visit.",
      "For root canal treatment, expect 1–3 sittings depending on the tooth.",
    ],
    travel:
      "Dental treatment such as root canal often needs more than one sitting, so a clinic close to home or work makes it easier to complete. The clinic is on Kathagola Rd, Mangalabag — convenient from across Cuttack, including Buxi Bazar, Chandni Chowk, CDA and Jagatpur. Dr. Dash is available Monday to Saturday; book on WhatsApp to fix your sitting times.",
    faqs: [
      { q: "Is root canal treatment painful?", a: "Root canal treatment is done under local anaesthesia, so most people feel little or no pain during the procedure. It actually relieves the pain caused by an infected tooth." },
      { q: "How many sittings does a root canal take?", a: "Usually 1 to 3 sittings, depending on the tooth and how severe the infection is. Your dentist will tell you before starting." },
      { q: "How much does root canal treatment cost in Cuttack?", a: "The cost depends on the tooth (front teeth are simpler than molars) and whether a crown is needed. Dr. Dash will give you a clear estimate after examining the tooth, before any treatment begins." },
      { q: "Do I need a crown after root canal?", a: "Back teeth (molars and premolars) usually need a crown after root canal, because the treated tooth becomes more brittle. Your dentist will advise you." },
      { q: "How often should I get a dental check-up?", a: "Every six months is a good routine for most people, along with brushing twice a day and cleaning between teeth." },
      { q: "Can I get my teeth cleaned and whitened at the clinic?", a: "Yes. Professional teeth cleaning and teeth whitening are both available. Whitening is done after a check-up to make sure your teeth and gums are healthy." },
      { q: "On which days is the dentist available?", a: "Dr. Abhas Dash sees patients Monday to Saturday. The clinic is closed on Sundays." },
    ],
    related: ["oncology", "endocrinology"],
  },

  gynecology: {
    slug: "gynecology",
    h1Kicker: "Gynaecologist in Cuttack",
    intro: [
      "Gynaecology and obstetrics cover women's health at every stage of life — periods and PCOS in the teenage years, pregnancy care, fertility, and the changes around menopause. Many women put off seeing a gynaecologist because of hesitation or a busy family life; a private, unhurried consultation makes it easier.",
      "At Sai Shree Polyclinic, Mangalabag, Cuttack, the department has two specialists. Dr. Pratha Apramita (MBBS, MS Obstetrics & Gynaecology, 9 years' experience) sees patients on Tuesday, Thursday and Saturday. Dr. Niramaya Madhual (MBBS, MS O&G, 10+ years' experience) is a laparoscopic surgeon with fellowship training in reproductive medicine, with a special interest in infertility.",
      "Ultrasound and a diagnostic lab are available in the same building, so most pregnancy scans and blood tests can be arranged without running to different centres.",
    ],
    conditions: [
      { name: "Pregnancy (antenatal) care", text: "Regular check-ups, scans and tests through pregnancy to keep mother and baby healthy, and planning for a safe delivery." },
      { name: "Irregular, heavy or painful periods", text: "Changes in your cycle can come from hormones, fibroids, thyroid problems or other causes. Most are treatable once the cause is found." },
      { name: "PCOS", text: "Irregular periods, acne, excess hair growth and weight gain due to hormonal imbalance. Care is tailored to whether your priority is regular cycles, skin, weight or pregnancy." },
      { name: "Infertility", text: "Difficulty conceiving after a year of trying (or six months if you are over 35). Both partners are evaluated, and options are explained step by step." },
      { name: "Fibroids and ovarian cysts", text: "Common non-cancerous growths that may cause pain or heavy bleeding. Many need only monitoring; some need treatment, sometimes by laparoscopy." },
      { name: "Menopause care", text: "Hot flushes, sleep problems, mood changes and bone health around menopause can be managed with advice and, where suitable, treatment." },
      { name: "Vaginal infections and white discharge", text: "Itching, unusual discharge or discomfort are common and usually easy to treat once correctly diagnosed." },
    ],
    symptoms: [
      "Periods that are irregular, very heavy, very painful or missed",
      "Planning a pregnancy, or a positive pregnancy test",
      "Trying to conceive for more than a year without success",
      "Pain in the lower abdomen or during intercourse",
      "Unusual vaginal discharge, itching or bleeding between periods",
      "Bleeding after menopause (should always be checked)",
      "Hot flushes, sleep or mood changes around menopause",
    ],
    available: [
      { name: "Antenatal care", text: "Pregnancy check-ups, monitoring and guidance through each trimester." },
      { name: "Ultrasound", text: "Pregnancy and pelvic ultrasound in the same building." },
      { name: "PCOS management", text: "Combined care with our endocrinology department when hormones need a closer look." },
      { name: "Menopause clinic", text: "Advice and treatment for symptoms and long-term health after menopause." },
      { name: "Fertility evaluation", text: "Assessment for couples trying to conceive, with Dr. Niramaya Madhual's reproductive medicine expertise." },
      { name: "Diagnostic lab", text: "Hormone tests, blood counts, thyroid and pregnancy-related tests at the clinic." },
    ],
    firstVisit: [
      "Note the date of your last period and how regular your cycles have been.",
      "Bring previous ultrasound reports, blood tests and prescriptions; for pregnancy, bring any earlier scan reports.",
      "You are welcome to bring your husband, a family member or a friend into the consultation.",
      "The doctor will talk with you first, then examine you only with your consent and explain why.",
      "Tests and scans can usually be arranged at the clinic during the same visit.",
    ],
    travel:
      "Pregnancy and fertility care involve regular visits over months, so many families choose a clinic they can reach easily. Sai Shree Polyclinic is on Kathagola Rd in Mangalabag, Cuttack, convenient from across the city and from Bhubaneswar, Jagatsinghpur, Kendrapara and Jajpur. Dr. Pratha Apramita sees patients on Tuesday, Thursday and Saturday — please book on WhatsApp before you travel.",
    faqs: [
      { q: "When should I first see a gynaecologist in pregnancy?", a: "As soon as your pregnancy test is positive, or within the first 6–8 weeks. Early visits help confirm the pregnancy, check dates and start folic acid and essential tests." },
      { q: "On which days is the gynaecologist available?", a: "Dr. Pratha Apramita sees patients on Tuesday, Thursday and Saturday. Please book ahead so we can confirm your time." },
      { q: "Is IVF available at Sai Shree Polyclinic?", a: "Dr. Niramaya Madhual is fellowship-trained in reproductive medicine and evaluates couples with infertility. Please call or WhatsApp us to discuss the right next step for you." },
      { q: "Can PCOS be treated?", a: "PCOS cannot be promised a cure, but its symptoms — irregular periods, acne, weight and fertility concerns — can be managed well with lifestyle changes and treatment." },
      { q: "When should we see a doctor for not getting pregnant?", a: "After one year of regular unprotected intercourse, or after six months if the woman is over 35. See a doctor sooner if periods are irregular or there is a known problem." },
      { q: "Can I bring someone with me to the consultation?", a: "Yes. You are welcome to bring your husband, a family member or a friend." },
      { q: "Is ultrasound available at the clinic?", a: "Yes, ultrasound is available at the clinic, so pregnancy and pelvic scans can usually be done during your visit." },
    ],
    related: ["endocrinology", "oncology"],
  },

  urology: {
    slug: "urology",
    h1Kicker: "Urologist in Cuttack",
    intro: [
      "Urology covers the kidneys, ureters, bladder and urinary passage in men and women, and the prostate and male reproductive organs. Kidney stones and urine infections are among the most common reasons people in Odisha see a urologist, especially during the hot months when the body loses water quickly.",
      "The Urology department at Sai Shree Polyclinic, Mangalabag, Cuttack is led by Dr. Soumya Ranjan Behera (MBBS, MS, MCh Urology), who has 16 years of experience in urological care, including minimally invasive procedures.",
      "Many urological problems — from a small kidney stone to an enlarged prostate — can be managed with medicines and lifestyle changes when they are caught early. The first step is an accurate diagnosis, usually with a urine test and an ultrasound, both available at the clinic.",
    ],
    conditions: [
      { name: "Kidney and ureter stones", text: "Stones can cause severe back or side pain that spreads to the groin, with nausea or blood in urine. Small stones may pass with medicine and fluids; larger ones need procedures." },
      { name: "Urinary tract infection (UTI)", text: "Burning while passing urine, frequent urge and lower-abdominal pain. Repeated infections need investigation to find the cause." },
      { name: "Enlarged prostate (BPH)", text: "Common in men over 50: weak stream, getting up at night to pass urine, and a feeling the bladder is not empty." },
      { name: "Urinary incontinence", text: "Leaking urine when coughing, sneezing or before reaching the toilet. It is common, especially in women after childbirth, and treatable." },
      { name: "Blood in urine", text: "Visible or microscopic blood in urine always needs evaluation, even if it is painless." },
      { name: "Overactive bladder", text: "A sudden, strong urge to pass urine many times a day and night." },
      { name: "Male urological problems", text: "Pain or swelling in the scrotum and other male health concerns, assessed privately and respectfully." },
    ],
    symptoms: [
      "Sudden severe pain in the back or side that spreads to the groin",
      "Burning or pain while passing urine",
      "Blood in the urine",
      "A weak urine stream, straining, or waking at night to pass urine",
      "Leaking urine, or a strong sudden urge",
      "Repeated urine infections",
      "Pain or swelling in the testicles",
    ],
    available: [
      { name: "Kidney stone evaluation and treatment", text: "Diagnosis with ultrasound and tests, and a plan based on the stone's size and position." },
      { name: "Uroflowmetry", text: "A simple test where you pass urine into a special device that measures the flow — useful for prostate and bladder problems." },
      { name: "Bladder scan", text: "An ultrasound check of how much urine remains in the bladder after passing urine." },
      { name: "Prostate check", text: "Examination and tests to assess an enlarged prostate." },
      { name: "Diagnostic lab and ultrasound", text: "Urine tests, kidney function blood tests and abdominal ultrasound in the same building." },
    ],
    firstVisit: [
      "Bring previous ultrasound or CT reports, urine and kidney function tests, and your current medicines.",
      "Come with a comfortably full bladder if a uroflowmetry or ultrasound may be done — we will tell you when you book.",
      "Dr. Behera will take your history, examine you and explain the likely cause.",
      "Urine tests and ultrasound can usually be arranged on the same day.",
      "You leave with a treatment plan and advice on fluids and diet to help prevent problems from coming back.",
    ],
    travel:
      "Kidney stone pain and urinary problems need prompt attention. The clinic is on Kathagola Rd, near Shreema Hospital in Mangalabag, Cuttack — easy to reach from the city and from Bhubaneswar, Jagatsinghpur, Kendrapara and Jajpur. Book on WhatsApp before travelling; for unbearable pain, fever with chills, or inability to pass urine, go to the nearest hospital emergency.",
    faqs: [
      { q: "Can kidney stones pass on their own?", a: "Small stones (usually under 5 mm) often pass with plenty of fluids and medicine. Larger stones, or stones causing infection or blockage, need treatment. An ultrasound helps decide." },
      { q: "How can I prevent kidney stones?", a: "Drinking enough water to keep urine pale through the day is the most important step, especially in Odisha's summers. Your doctor may also advise on salt and certain foods depending on the stone type." },
      { q: "Is blood in urine serious?", a: "It should always be checked by a urologist, even if it is painless and goes away — it can come from stones, infection or other conditions that need attention." },
      { q: "At what age should men get their prostate checked?", a: "Men over 50, or earlier if they have urinary symptoms or a family history, should discuss a prostate check with a doctor." },
      { q: "Do women see a urologist?", a: "Yes. Urologists treat urinary problems in both women and men, including repeated infections, stones and leaking urine." },
      { q: "What is uroflowmetry?", a: "A simple, painless test where you pass urine into a device that measures the strength and speed of the flow. It helps assess prostate and bladder problems." },
    ],
    related: ["gastroenterology", "oncology"],
  },

  oncology: {
    slug: "oncology",
    h1Kicker: "Cancer screening & oncologist in Cuttack",
    intro: [
      "Many cancers are far more treatable when found early, often before they cause any symptoms. The Oncology department at Sai Shree Polyclinic focuses on cancer screening, diagnostic evaluation, second opinions and care planning — helping you understand what is happening and what to do next.",
      "The department is led by Dr. Nitya Nutan Misra (MBBS, MS, MCh Oncology), who has 11 years of experience in early detection and in coordinating comprehensive cancer care plans. Where treatment such as surgery, chemotherapy or radiation is needed, we coordinate referrals to appropriate cancer centres and continue to support you and your family.",
      "Oral cancer linked to tobacco, gutkha and paan, along with breast and cervical cancer in women, are among the most important cancers to screen for in Odisha. A short consultation can tell you which checks make sense for your age and risk.",
    ],
    conditions: [
      { name: "Oral cancer screening", text: "A careful look inside the mouth for white or red patches and non-healing ulcers — essential for anyone who uses or has used tobacco, gutkha or paan." },
      { name: "Breast cancer screening", text: "Clinical breast examination and guidance on imaging based on age and risk. Any lump in the breast should be checked." },
      { name: "Cervical cancer screening", text: "Regular screening for women can find changes in the cervix years before cancer develops." },
      { name: "Colorectal cancer", text: "Changes in bowel habit, blood in stools or anaemia, especially after 45, deserve investigation. We work with our gastroenterology department." },
      { name: "Evaluation of a lump or suspicious symptom", text: "A new lump, unexplained weight loss or persistent symptoms are assessed and the right tests arranged." },
      { name: "Second opinion and care planning", text: "If you already have a diagnosis, we review your reports and help you understand the options and next steps." },
      { name: "Palliative and supportive care", text: "Relief of pain and other symptoms, and support for patients and families, at any stage of illness." },
    ],
    symptoms: [
      "A lump anywhere in the body, especially the breast, neck or armpit",
      "A mouth ulcer or patch that has not healed in two weeks",
      "Unexplained weight loss, fever or tiredness",
      "Blood in stool, urine or cough, or bleeding between periods or after menopause",
      "A change in bowel habits that lasts for weeks",
      "Difficulty swallowing or a hoarse voice that persists",
      "A family history of cancer, or long-term tobacco use",
    ],
    available: [
      { name: "Cancer screening", text: "Age- and risk-based screening consultations for oral, breast, cervical and colorectal cancers." },
      { name: "Tumour markers", text: "Blood tests that can support diagnosis and monitoring in specific situations, interpreted by the specialist." },
      { name: "Biopsy coordination", text: "Arranging the right biopsy when a lump or suspicious area needs a tissue diagnosis." },
      { name: "Palliative care", text: "Symptom relief and support focused on comfort and quality of life." },
      { name: "Diagnostic lab, ultrasound and X-ray", text: "Blood tests, ultrasound and digital X-ray in the same building; endoscopy through our gastroenterology department." },
    ],
    firstVisit: [
      "Bring every report you have — scans, biopsy reports, blood tests and discharge summaries — even old ones.",
      "Write down your questions beforehand; it is easy to forget them during the consultation.",
      "Bring a family member if you would like support and a second pair of ears.",
      "Dr. Misra will examine you, review your reports and explain findings honestly and clearly.",
      "You leave with a plan: which tests are needed, where they can be done, and the next steps.",
    ],
    travel:
      "Cancer screening and evaluation often mean gathering several reports and visiting more than once. Sai Shree Polyclinic is on Kathagola Rd in Mangalabag, Cuttack, easy to reach from the city and from Bhubaneswar, Jagatsinghpur, Kendrapara, Jajpur and Dhenkanal. Book on WhatsApp before you travel, and send photos of your reports in advance if you like so we can tell you what to bring.",
    faqs: [
      { q: "Who should get cancer screening?", a: "Screening is advised based on age, sex and risk — for example, regular cervical screening for women, breast checks, and oral cancer checks for anyone who has used tobacco. A short consultation helps decide what is right for you." },
      { q: "Is Sai Shree Polyclinic a cancer hospital?", a: "No. We provide cancer screening, evaluation, second opinions, care planning and supportive care. When surgery, chemotherapy or radiation is needed, we coordinate referrals to appropriate cancer centres." },
      { q: "Can I get a second opinion on my cancer diagnosis?", a: "Yes. Bring all your reports and Dr. Misra will review them and explain the options and next steps." },
      { q: "Does a lump always mean cancer?", a: "No — most lumps are not cancer. But any new lump should be examined by a doctor so that the cause is known for certain." },
      { q: "Is oral cancer common in Odisha?", a: "Oral cancer is closely linked to tobacco, gutkha and paan use, which are common in the region. Anyone who uses or has used them should have their mouth checked regularly." },
      { q: "What tests are done for cancer screening?", a: "It depends on what is being screened for — a clinical examination, blood tests, imaging such as ultrasound, or endoscopy. Your doctor will advise only the tests you need." },
    ],
    related: ["gynecology", "gastroenterology"],
  },
};
