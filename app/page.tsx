import { getProjects, getText } from "../lib/notion";
import ThemeToggle from "../components/theme-toggle";
import CursorGlow from "../components/cursor-glow";
import SkyEffects from "../components/sky-effects";
import { GlowCard } from "../components/ui/spotlight-card";
import { BackgroundPaths } from "../components/ui/background-paths";

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

      {/* Hero — full viewport width so bridge and clouds span edge to edge */}
      <div className="relative overflow-hidden">
        <SkyEffects />
        <BackgroundPaths />
        <div className="relative z-10 mx-auto max-w-6xl px-6 pt-6">
          <header className="sticky top-0 z-20 mb-14 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-4 backdrop-blur transition-colors dark:border-white/10 dark:bg-zinc-950/75">
            <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
                Shwetha
              </p>

              <div className="flex flex-wrap items-center gap-2 text-sm">
                <a href="#projects" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                  Projects
                </a>
                <a href="/resume" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                  Resume
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                  GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                  LinkedIn
                </a>
                <a
                  href={EMAIL_URL}
                  className="rounded-full bg-[#2dd4bf] px-4 py-2 text-white transition hover:bg-[#0d9488]"
                >
                  Contact
                </a>
              </div>
            </nav>
          </header>

          <section className="flex min-h-[580px] flex-col justify-center pb-20">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm text-green-700 transition-colors dark:border-teal-500/20 dark:bg-teal-500/10 dark:text-teal-300">
              Open to work
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I'm{" "}
              <span className="text-[#0d9488] dark:text-[#99f6e4]">Shwetha</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-600 transition-colors dark:text-zinc-300">
              I'm an MS Health Data Science student at UCSF who loves finding the story in messy data. I research how language background shapes cognitive decline in dementia patients, build products that excite, and occasionally ship an app or two. Outside of work, you'll find me running, doing yoga, or hunting down the best cup of coffee in SF!
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#0d9488] px-5 py-3 text-white transition hover:bg-[#0f766e]"
              >
                View Projects
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full border border-zinc-300 px-5 py-3 transition hover:bg-zinc-100 dark:border-white/15 dark:hover:bg-white/5"
              >
                Email Me
              </a>
            </div>
          </div>

        </section>
        </div>{/* end max-w-6xl */}
      </div>{/* end hero wrapper */}

      <div className="mx-auto max-w-6xl px-6 pb-16">
        {/* About Me */}
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold">About Me</h2>
          <GlowCard customSize glowColor="teal" className="w-full !aspect-auto !p-8">
            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                I have broad experience working with data across health and biomedical domains, and I thrive in environments where rigorous analysis meets real-world impact. At the UCSF Memory & Aging Center, I study how language background shapes neuropsychological test performance in patients with dementia — combining statistical modeling, machine learning, and longitudinal data to uncover clinically meaningful patterns.
              </p>
              <p>
                Beyond research, I've brought that same analytical mindset to product and venture settings — defining clinical metrics at Natera and evaluating early-stage healthtech innovations at UCSF Innovation Ventures. I care deeply about making sure insights are not just technically sound but actually usable by the teams that need them.
              </p>
              <p>
                I also support graduate-level data science instruction as a teaching assistant, which keeps me sharp on both fundamentals and communication. Whether I'm cleaning a messy dataset, building a dashboard, or prototyping an app, I try to bring the same detail-oriented, curious approach — and have fun while doing it.
              </p>
            </div>
          </GlowCard>
        </section>

        <section id="projects">
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

              return (
                <GlowCard
                  key={project.id}
                  customSize
                  glowColor="teal"
                  className="group w-full !p-0 !aspect-auto"
                >
                  {/* Preview area */}
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/60 dark:to-teal-950/60">
                    {coverUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={coverUrl}
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
              );
            })}
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 transition-colors dark:border-white/10 dark:text-zinc-400">
          Built with Next.js, Notion, GitHub, and Vercel.
        </footer>
      </div>{/* end projects/footer wrapper */}

      <ThemeToggle />
      <CursorGlow />
    </main>
  );
}
