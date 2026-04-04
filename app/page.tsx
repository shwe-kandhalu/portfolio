import { getProjects, getText } from "../lib/notion";
import ThemeToggle from "../components/theme-toggle";
import CursorGlow from "../components/cursor-glow";
import SkyEffects from "../components/sky-effects";
import { GlowCard } from "../components/ui/spotlight-card";
import { BackgroundPaths } from "../components/ui/background-paths";
import SmoothScroll from "../components/smooth-scroll";

const GITHUB_URL = "https://github.com/shwe-kandhalu";
const LINKEDIN_URL = "https://www.linkedin.com/in/shwethakandhalu/";
const EMAIL_URL = "mailto:shwe.kandhalu@gmail.com";

export default async function Home() {
  const projects = await getProjects();

  const featuredProjects = projects.filter((project: any) => {
    return project.properties?.Featured?.checkbox;
  });

  const visibleProjects = featuredProjects.length > 0 ? featuredProjects : projects;

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-200 via-sky-100 to-white text-black transition-colors duration-300 dark:from-[#130b2e] dark:via-[#0b1530] dark:to-[#040a1a] dark:text-white">

      <div className="fixed inset-x-0 top-0 z-20 px-6 pt-6 pb-2">
        <header className="mx-auto max-w-6xl rounded-2xl border border-zinc-200 bg-white/80 px-5 py-4 backdrop-blur transition-colors dark:border-white/10 dark:bg-zinc-950/75">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
              Shwetha
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#about" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                About Me
              </a>
              <a href="#experience" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                Experience
              </a>
              <a href="#projects" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                Projects
              </a>
            </div>
          </nav>
        </header>
      </div>

      {/* Hero — full viewport width so bridge and clouds span edge to edge */}
      <div className="relative">
        <SkyEffects />
        <BackgroundPaths />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-32">
          <section className="flex min-h-[580px] flex-col justify-center pb-20">
          <div className="flex flex-col-reverse items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I'm{" "}
              <span className="text-[#0d9488] dark:text-[#99f6e4]">Shwetha</span>!
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-600 transition-colors dark:text-zinc-300">
              I'm an MS Health Data Science student at UCSF who loves finding the story in messy data. I research how language background shapes cognitive decline in dementia patients, build products that excite, and occasionally ship an app or two. Outside of work, you'll find me running, doing yoga, or hunting down the best cup of coffee in SF!
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
                className="flex h-11 items-center justify-center rounded-full border border-zinc-300 px-4 text-sm font-medium transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
              >
                Resume
              </a>
              {/* Mail */}
              <a
                href={EMAIL_URL}
                aria-label="Email Me"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </a>
              {/* GitHub */}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          {/* Photo */}
          <div className="shrink-0 mx-auto sm:mx-0 sm:-translate-x-24">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/photo.png"
              alt="Shwetha"
              className="h-56 w-56 rounded-2xl object-cover shadow-lg ring-4 ring-white/60 dark:ring-white/10 sm:h-72 sm:w-72"
            />
          </div>
          </div>

        </section>
        </div>{/* end max-w-6xl */}
      </div>{/* end hero wrapper */}

      <div className="mx-auto max-w-6xl px-6 pb-16">
        {/* About Me */}
        <section id="about" className="mb-20 scroll-mt-28">
          <h2 className="mb-8 text-2xl font-semibold">About Me</h2>
          <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-8">
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                I work in data science across healthcare and biomedical settings, focusing on turning messy, real-world data into something useful. At the UCSF Memory &amp; Aging Center, I study how language background affects neuropsychological testing in dementia using statistical modeling, machine learning, and longitudinal data.
              </p>
              <p>
                I've also worked outside academia, defining clinical metrics at Natera and evaluating early-stage healthtech companies through UCSF Innovation Ventures, which has shaped how I approach data in more applied, decision-focused contexts.
              </p>
              <p>
                I care most about whether the work actually gets used. Day to day, that means cleaning data, building dashboards, and quickly prototyping, with an emphasis on producing clear, reliable, and actionable outputs.
              </p>
            </div>
          </GlowCard>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-20 scroll-mt-28">
          <h2 className="mb-8 text-2xl font-semibold">Experience</h2>
          <div className="space-y-4">

            <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Research Data Scientist</h3>
                  <p className="text-[#0d9488] dark:text-teal-300 text-sm font-medium mt-0.5">UCSF Memory &amp; Aging Center</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    <li>Collaborated with researchers to analyze cognitive test scores to study dementia progression across mono- and bilingual cohorts.</li>
                    <li>Developed statistical and machine learning models linking biomarker profiles to cognitive decline and clinical outcomes.</li>
                    <li>Cleaned and harmonized longitudinal datasets for downstream modeling and analysis.</li>
                  </ul>
                </div>
                <div className="mt-1 shrink-0 text-sm text-zinc-400 sm:ml-6 sm:text-right">
                  <p>Sep 2025 – Present</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Catalyst Intern</h3>
                  <p className="text-[#0d9488] dark:text-teal-300 text-sm font-medium mt-0.5">UCSF Innovation Ventures</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    <li>Evaluate early-stage healthcare and biotech innovations for technical feasibility and commercialization potential.</li>
                    <li>Conduct market research, competitive analysis, and landscape assessments to inform go/no-go decisions.</li>
                    <li>Collaborate with researchers and venture teams to translate scientific discoveries into product opportunities.</li>
                  </ul>
                </div>
                <div className="mt-1 shrink-0 text-sm text-zinc-400 sm:ml-6 sm:text-right">
                  <p>Nov 2025 – Mar 2026</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Graduate Teaching Assistant — DATASCI 214</h3>
                  <p className="text-[#0d9488] dark:text-teal-300 text-sm font-medium mt-0.5">UCSF — Health Data Science</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    <li>Support graduate-level data science instruction through coding walkthroughs, office hours, and debugging guidance.</li>
                    <li>Mentor students on applied machine learning concepts and evaluate coursework.</li>
                  </ul>
                </div>
                <div className="mt-1 shrink-0 text-sm text-zinc-400 sm:ml-6 sm:text-right">
                  <p>Sep 2025 – Dec 2025</p>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </GlowCard>

            <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-semibold text-lg">Technical Product Management Intern</h3>
                  <p className="text-[#0d9488] dark:text-teal-300 text-sm font-medium mt-0.5">Natera</p>
                  <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300 list-disc list-inside">
                    <li>Defined and tracked clinical and performance metrics for Horizon carrier screening and Fetal Focus NIPT within RIR pipeline.</li>
                    <li>Queried and analyzed large-scale genomic datasets using AWS Redshift, SQL, and QuickSight to validate reporting accuracy.</li>
                    <li>Partnered with bioinformatics, clinical, and product teams to translate analytical insights into product requirements.</li>
                    <li>Built dashboards and documentation, reducing manual reporting effort and improving visibility across 3+ cross-functional teams.</li>
                  </ul>
                </div>
                <div className="mt-1 shrink-0 text-sm text-zinc-400 sm:ml-6 sm:text-right">
                  <p>Jun 2025 – Aug 2025</p>
                  <p>San Carlos, CA</p>
                </div>
              </div>
            </GlowCard>

          </div>
        </section>

        <section id="projects" className="scroll-mt-28">
          <h2 className="mb-8 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {visibleProjects.map((project: any) => {
              const props = project.properties;

              const title = getText(props.Name?.title);
              const description = getText(props.Description?.rich_text);
              const github = props.GitHub?.url;
              const live = props.Live?.url;
              const tech = props.Tech?.multi_select?.map((item: any) => item.name) || [];
              const coverUrl: string | null =
                project.cover?.external?.url ?? project.cover?.file?.url ?? null;
              const screenshots: string[] = (props.Screenshots?.files ?? []).map(
                (f: any) => f.file?.url ?? f.external?.url ?? null
              ).filter(Boolean);
              const images = screenshots.length > 0 ? screenshots : coverUrl ? [coverUrl] : [];

              return (
                <a
                  key={project.id}
                  href={github ?? live ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                <GlowCard
                  customSize
                  glowColor="teal"
                  className="group w-full !p-0 !aspect-auto"
                >
                  {/* Preview area */}
                  {images.length > 1 ? (
                    <div className="relative overflow-x-auto flex gap-2 p-2 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/60 dark:to-teal-950/60 scrollbar-hide">
                      {images.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          key={i}
                          src={src}
                          alt={`${title} screenshot ${i + 1}`}
                          className="h-48 w-auto shrink-0 rounded-lg object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/60 dark:to-teal-950/60">
                      {images[0] ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={images[0]}
                          alt={title}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-6xl font-bold text-teal-200 select-none dark:text-teal-900">
                            {title?.[0] ?? "?"}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2">
                      {tech.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full bg-[#f0fdfa] px-3 py-1 text-xs text-[#115e59] transition-colors dark:bg-teal-500/10 dark:text-teal-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {description}
                    </p>

                    <div className="mt-5 flex gap-4">
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline decoration-[#0d9488] underline-offset-4 hover:decoration-[#0f766e]"
                        >
                          GitHub
                        </a>
                      )}
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm underline decoration-[#16a34a] underline-offset-4 hover:decoration-[#15803d]"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
                </a>
              );
            })}
          </div>
        </section>

        <footer className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-6 text-sm text-zinc-500 transition-colors dark:border-white/10 dark:text-zinc-400">
          <span>Built with Next.js, Notion, and Vercel.</span>
          <div className="flex gap-4">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">GitHub</a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors">LinkedIn</a>
          </div>
        </footer>
      </div>{/* end projects/footer wrapper */}

      <ThemeToggle />
      <CursorGlow />
      <SmoothScroll />
    </main>
  );
}
