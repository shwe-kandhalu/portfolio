import { getProjects, getText } from "../lib/notion";
import ThemeToggle from "../components/theme-toggle";
// If your file is src/app/page.tsx, change the imports to:
// import { getProjects, getText } from "../../lib/notion";
// import ThemeToggle from "../../components/theme-toggle";

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
    <main className="min-h-screen bg-[#fafafa] text-black transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#0f172a] dark:via-[#020617] dark:to-black dark:text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <header className="sticky top-0 z-20 mb-14 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-4 backdrop-blur transition-colors dark:border-white/10 dark:bg-zinc-950/75">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
              Shwetha
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#projects" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                Projects
              </a>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="rounded-full px-4 py-2 hover:bg-zinc-100 dark:hover:bg-white/5">
                LinkedIn
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full bg-[#a78bfa] px-4 py-2 text-white transition hover:bg-[#8b5cf6]"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section className="grid gap-12 pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm text-green-700 transition-colors dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
              Open to work
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I’m{" "}
              <span className="text-[#8b5cf6] dark:text-[#c4b5fd]">Shwetha</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-600 transition-colors dark:text-zinc-300">
              I build clean, useful web applications using modern tools like Next.js, APIs, and data-driven systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#8b5cf6] px-5 py-3 text-white transition hover:bg-[#7c3aed]"
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

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors dark:border-white/10 dark:bg-white/5">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">About this site</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
              <li>• Projects come from Notion</li>
              <li>• Deployed on Vercel</li>
              <li>• Code stored on GitHub</li>
              <li>• Easy to update anytime</li>
            </ul>
          </div>
        </section>

        <section id="projects">
          <h2 className="mb-6 text-2xl font-semibold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project: any) => {
              const props = project.properties;

              const title = getText(props.Name?.title);
              const description = getText(props.Description?.rich_text);
              const github = props.GitHub?.url;
              const live = props.Live?.url;
              const tech =
                props.Tech?.multi_select?.map((item: any) => item.name) || [];

              return (
                <div
                  key={project.id}
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/[0.07]"
                >
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f3f0ff] px-3 py-1 text-xs text-[#6d28d9] transition-colors dark:bg-indigo-500/10 dark:text-indigo-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {description}
                  </p>

                  <div className="mt-5 flex gap-4">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm underline decoration-[#8b5cf6] underline-offset-4 hover:decoration-[#7c3aed]"
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
              );
            })}
          </div>
        </section>

        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500 transition-colors dark:border-white/10 dark:text-zinc-400">
          Built with Next.js, Notion, GitHub, and Vercel.
        </footer>
      </div>

      <ThemeToggle />
    </main>
  );
}