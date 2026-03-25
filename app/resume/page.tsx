import ThemeToggle from "../../components/theme-toggle";
import CursorGlow from "../../components/cursor-glow";

export default function Resume() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-white text-black transition-colors duration-300 dark:from-[#130b2e] dark:via-[#0b1530] dark:to-[#040a1a] dark:text-white">
      <div className="mx-auto max-w-4xl px-6 pb-16 pt-6">

        {/* Header / Nav */}
        <header className="sticky top-0 z-20 mb-14 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-4 backdrop-blur transition-colors dark:border-white/10 dark:bg-zinc-950/75">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
              Shwetha
            </a>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="/" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                Home
              </a>
              <a
                href="/resume.pdf"
                download
                className="rounded-full bg-[#0d9488] px-4 py-2 text-white transition hover:bg-[#0f766e]"
              >
                Download PDF
              </a>
            </div>
          </nav>
        </header>

        {/* Resume Content */}
        <div className="rounded-3xl border border-zinc-200 bg-white px-10 py-12 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5">

          {/* Name + Contact */}
          <div className="border-b border-zinc-200 pb-8 text-center dark:border-white/10">
            <h1 className="text-4xl font-semibold tracking-tight">Shwetha Kandhalu Bhaskar</h1>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              San Francisco, CA &nbsp;·&nbsp;
              <a href="tel:4084892444" className="hover:text-[#0d9488]">(408) 489-2444</a>
              &nbsp;·&nbsp;
              <a href="mailto:shwe.kandhalu@gmail.com" className="hover:text-[#0d9488]">shwe.kandhalu@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/shwethakandhalu" target="_blank" rel="noreferrer" className="hover:text-[#0d9488]">LinkedIn</a>
            </p>
          </div>

          {/* Education */}
          <Section title="Education">
            <Entry
              title="University of California, San Francisco"
              subtitle="M.S. Health Data Science"
              date="Dec 2026"
              bullets={["Relevant Coursework: Machine Learning, Python, R Programming, Biomedical Data Analysis"]}
            />
            <Entry
              title="University of California, Riverside"
              subtitle="B.S. Biochemistry, Minor in Applied Statistics"
              date="Mar 2023"
            />
          </Section>

          {/* Experience */}
          <Section title="Experience">
            <Entry
              title="University of California, San Francisco"
              subtitle="Research Data Scientist (Capstone Project), Memory & Aging Center · San Francisco, CA"
              date="Sep 2025 – Present"
              bullets={[
                "Collaborated with researchers to analyze cognitive test scores to study dementia progression across mono- and bilingual cohorts.",
                "Developed statistical and machine learning models linking biomarker profiles to cognitive decline and clinical outcomes.",
                "Cleaned and harmonized longitudinal datasets for downstream modeling and analysis.",
              ]}
            />
            <Entry
              title="UCSF Innovation Ventures"
              subtitle="Catalyst Intern · San Francisco, CA"
              date="Nov 2025 – Present"
              bullets={[
                "Evaluate early-stage healthcare and biotech innovations for technical feasibility and commercialization potential.",
                "Conduct market research, competitive analysis, and landscape assessments to inform go/no-go decisions.",
                "Collaborate with researchers and venture teams to translate scientific discoveries into product opportunities.",
              ]}
            />
            <Entry
              title="University of California, San Francisco"
              subtitle="Graduate Teaching Assistant (DATASCI 214) · San Francisco, CA"
              date="Sep 2025 – Present"
              bullets={[
                "Support graduate-level data science instruction through coding walkthroughs, office hours, and debugging guidance.",
                "Mentor students on applied machine learning concepts and evaluate coursework.",
              ]}
            />
            <Entry
              title="Natera"
              subtitle="Technical Product Management Intern · San Carlos, CA"
              date="Jun 2025 – Aug 2025"
              bullets={[
                "Defined and tracked clinical and performance metrics for Horizon carrier screening and Fetal Focus NIPT within RIR pipeline.",
                "Queried and analyzed large-scale genomic datasets using AWS Redshift, SQL, and QuickSight to validate reporting accuracy.",
                "Partnered with bioinformatics, clinical, and product teams to translate analytical insights into product requirements.",
                "Built dashboards and documentation, reducing manual reporting effort and improving visibility across 3+ cross-functional teams.",
              ]}
            />
            <Entry
              title="Bay Endodontics"
              subtitle="Office Associate · Pleasanton, CA"
              date="May 2024 – Aug 2024"
              bullets={[
                "Managed patient data and communications; designed outreach initiatives that increased referrals by 33%.",
                "Resolved insurance claim discrepancies to improve billing accuracy and operational efficiency.",
              ]}
            />
            <Entry
              title="UC Riverside"
              subtitle="Undergraduate Research Assistant · Riverside, CA"
              date="Jul 2022 – Mar 2023"
              bullets={[
                "Processed and structured ecological datasets in R, transforming raw tables into interaction matrices.",
                'Performed quality control on 15K+ records and contributed to the "Butterfly Net" pollinator identification app.',
              ]}
            />
          </Section>

          {/* Projects */}
          <Section title="Projects">
            <div className="space-y-5">
              <Project
                title="HeartSense (Stanford CS 342)"
                bullets={[
                  "Designed and developed a mobile symptom-reporting app for a Stanford clinical trial using React Native, TypeScript, and Firebase.",
                  "Enabled real-time tracking of symptoms, activities, and well-being metrics (energy, stress, mood).",
                  "Conducted user research and iterated on features through weekly agile development cycles.",
                ]}
              />
              <Project
                title="Surgical Site Infections & Hypothermia"
                bullets={[
                  "Built and evaluated ML models (Logistic Regression, AdaBoost, Neural Networks) to predict postoperative infections in 7,900+ patients.",
                ]}
              />
              <Project
                title="Sequence Analysis Pipeline"
                bullets={[
                  "Developed an automated Python pipeline to process DNA sequences, detect restriction sites, and generate structured outputs.",
                ]}
              />
            </div>
          </Section>

          {/* Skills */}
          <Section title="Technical Skills" last>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <p><span className="font-medium text-black dark:text-white">Programming:</span> Python (NumPy, Pandas, Matplotlib), R (dplyr, Tidyverse), SQL, STATA, TypeScript, JavaScript</p>
              <p><span className="font-medium text-black dark:text-white">Data Science & ML:</span> Statistical modeling, machine learning, EHR analysis, data wrangling, visualization, longitudinal analysis, dashboarding</p>
              <p><span className="font-medium text-black dark:text-white">Tools & Platforms:</span> AWS (Redshift, QuickSight), Firebase, Firestore, React Native, Expo Go, Microsoft Office, Dentrix, AI-assisted tools</p>
            </div>
          </Section>

        </div>
      </div>

      <ThemeToggle />
      <CursorGlow />
    </main>
  );
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={`py-8 ${last ? "" : "border-b border-zinc-200 dark:border-white/10"}`}>
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0d9488]">{title}</h2>
      {children}
    </div>
  );
}

function Project({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div>
      <p className="text-sm font-medium text-black dark:text-white mb-1">{title}</p>
      <ul className="space-y-1">
        {bullets.map((b) => (
          <li key={b} className="text-sm text-zinc-600 dark:text-zinc-300 pl-4 relative before:absolute before:left-0 before:content-['•'] before:text-zinc-400">
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Entry({
  title,
  subtitle,
  date,
  bullets,
}: {
  title: string;
  subtitle: string;
  date: string;
  bullets?: string[];
}) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <p className="font-medium">{title}</p>
        <p className="text-xs text-zinc-400 shrink-0">{date}</p>
      </div>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
      {bullets && (
        <ul className="mt-2 space-y-1">
          {bullets.map((b) => (
            <li key={b} className="text-sm text-zinc-600 dark:text-zinc-300 pl-4 relative before:absolute before:left-0 before:content-['•'] before:text-zinc-400">
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
