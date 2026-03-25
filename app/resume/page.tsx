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
                className="rounded-full bg-[#8b5cf6] px-4 py-2 text-white transition hover:bg-[#7c3aed]"
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
            <h1 className="text-4xl font-semibold tracking-tight">Shwetha Kandhalu</h1>
            <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400">
              San Francisco, CA &nbsp;·&nbsp;
              <a href="tel:4084892444" className="hover:text-[#8b5cf6]">(408) 489-2444</a>
              &nbsp;·&nbsp;
              <a href="mailto:shwe.kandhalu@gmail.com" className="hover:text-[#8b5cf6]">shwe.kandhalu@gmail.com</a>
              &nbsp;·&nbsp;
              <a href="https://linkedin.com/in/shwethakandhalu" target="_blank" rel="noreferrer" className="hover:text-[#8b5cf6]">LinkedIn</a>
            </p>
          </div>

          {/* Education */}
          <Section title="Education">
            <Entry
              title="University of California, San Francisco"
              subtitle="M.S. Health Data Science"
              date="May 2026"
              bullets={["Relevant Coursework: Python, Machine Learning, R Programming, Complex Biomedical Data"]}
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
              title="UCSF Memory & Aging Center"
              subtitle="Research Data Scientist · San Francisco, CA"
              date="Oct 2025 – Present"
              bullets={[
                "Analyze cognitive and plasma biomarkers to study dementia progression in mono- and bilingual adults.",
                "Model associations between biomarker profiles, cognitive decline, and clinical outcomes.",
                "Clean and harmonize longitudinal datasets using R and Python.",
              ]}
            />
            <Entry
              title="University of California, San Francisco"
              subtitle="Graduate Teaching Assistant"
              date="Sep 2025 – Present"
              bullets={[
                "Support DATASCI 214: Programming in R II through coding walkthroughs, debugging help, and grading.",
              ]}
            />
            <Entry
              title="Natera"
              subtitle="Technical Product Management Intern · San Carlos, CA"
              date="Jun 2025 – Aug 2025"
              bullets={[
                "Defined, validated, and tracked clinical/performance metrics for Horizon carrier screening and Fetal Focus single-gene NIPT in the RIR pipeline.",
                "Queried and analyzed large-scale genomic data using AWS Redshift, SQL, and QuickSight to ensure accurate tertiary-analysis reporting.",
                "Collaborated with bioinformatics, clinical science, and product teams to translate analytical findings into product requirements and workflow improvements.",
                "Built metric dashboards and internal documentation to streamline reporting and improve cross-team visibility.",
              ]}
            />
            <Entry
              title="Bay Endodontics"
              subtitle="Office Associate · Pleasanton, CA"
              date="May 2024 – Aug 2024"
              bullets={[
                "Managed patient data and communications; designed outreach materials that increased referrals by 33%.",
                "Identified and corrected insurance claim discrepancies to improve billing accuracy.",
              ]}
            />
            <Entry
              title="Sourashtra Association Inc."
              subtitle="Associate Project Coordinator · Remote"
              date="Jan 2024 – Aug 2024"
              bullets={[
                "Managed a $3K conference budget and coordinated donations/sponsorships.",
                "Analyzed social-media metrics and optimized outreach strategies, increasing engagement by 40%.",
              ]}
            />
            <Entry
              title="UC Riverside"
              subtitle="Undergraduate Research Assistant · Riverside, CA"
              date="Jul 2022 – Mar 2023"
              bullets={[
                "Cleaned and structured ecological datasets in R, converting raw tables into interaction matrices.",
                'Performed QC checks on 15K+ entries and contributed to "The Butterfly Net" pollinator identification app.',
              ]}
            />
          </Section>

          {/* Projects */}
          <Section title="Projects">
            <div className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <p>
                <span className="font-medium text-black dark:text-white">Surgical Site Infections & Hypothermia</span>
                {" — "}Built ML models (LR, AdaBoost, NN) predicting postoperative infections in 7,900+ surgical patients.
              </p>
              <p>
                <span className="font-medium text-black dark:text-white">Sequence Analysis Pipeline</span>
                {" — "}Automated Python workflow to process DNA sequences, detect restriction sites, and generate structured outputs.
              </p>
            </div>
          </Section>

          {/* Skills */}
          <Section title="Technical Skills" last>
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
              <p><span className="font-medium text-black dark:text-white">Programming:</span> Python (NumPy, Pandas, Matplotlib), R (dplyr, Tidyverse), SQL, STATA</p>
              <p><span className="font-medium text-black dark:text-white">Data Science:</span> EHR Analysis, Wrangling, Modeling, Machine Learning, Visualization</p>
              <p><span className="font-medium text-black dark:text-white">Tools:</span> AWS, QuickSight, Redshift, Microsoft Office, Dentrix</p>
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
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#8b5cf6]">{title}</h2>
      {children}
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
