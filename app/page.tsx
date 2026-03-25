import { getProjects, getText } from "../lib/notion";
// If your file is in src/app/page.tsx, use:
// import { getProjects, getText } from "../../lib/notion";

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
    <main className="min-h-screen scroll-smooth bg-gradient-to-b from-[#0f172a] via-[#020617] to-black text-white">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-6">
        <header className="sticky top-0 z-20 mb-14 rounded-2xl border border-white/5 bg-zinc-950/75 px-5 py-4 backdrop-blur">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <a href="#" className="text-sm font-semibold tracking-[0.22em] text-zinc-300 uppercase">
              Shwetha Kandhalu
            </a>

            <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-300">
              <a
                href="#projects"
                className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                Projects
              </a>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                GitHub
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
              >
                LinkedIn
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full bg-white px-4 py-2 font-medium text-black transition hover:bg-zinc-200"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        <section className="grid gap-12 pb-20 pt-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-end lg:pb-24 lg:pt-10">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
              Open to internships and project collaborations
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I’m <span className="text-indigo-400">Shwetha</span>.
              <span className="mt-2 block text-zinc-400">
                I build clean, useful web projects.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I use Next.js, Notion, GitHub, and Vercel to create polished websites that are easy to update and easy to share.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
              >
                View Projects
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full border border-zinc-800 bg-white/5 backdrop-blur-lg px-5 py-3 font-medium text-white transition hover:border-zinc-600 hover:bg-zinc-800"
              >
                Email Me
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-2xl shadow-black/30">
            <p className="text-sm text-zinc-400">About this site</p>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-300">
              <li>• Projects come from Notion</li>
              <li>• Deployed on Vercel</li>
              <li>• Code stored on GitHub</li>
              <li>• Easy to update without touching code</li>
            </ul>

            <div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Contact
              </p>
              <p className="mt-2 text-sm text-zinc-300">{EMAIL_URL.replace("mailto:", "")}</p>
            </div>
          </aside>
        </section>

        <section id="projects" className="pb-10 pt-6 sm:pb-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <p className="mt-2 text-sm text-zinc-500">
                Pulled live from Notion.
              </p>
            </div>
          </div>

          {visibleProjects.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/40 p-8 text-zinc-400">
              Add a few projects to your Notion database to see them here.
            </div>
          ) : (
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
                  <article
                    key={project.id}
                    className="group rounded-3xl border border-zinc-800 bg-white/5 backdrop-blur-lg p-6 shadow-lg transition hover:-translate-y-1 hover:border-zinc-600 hover:bg-zinc-900"
                  >
                    <div className="flex flex-wrap gap-2">
                      {tech.map((item: string) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-700 bg-indigo-500/10 text-indigo-300 border-indigo-500/20 px-3 py-1 text-xs text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-zinc-400">
                      {description || "Add a short description for this project in Notion."}
                    </p>

                    <div className="mt-6 flex gap-5">
                      {github && (
                        <a
                          href={github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white"
                        >
                          GitHub
                        </a>
                      )}
                      {live && (
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-white underline underline-offset-4 decoration-zinc-600 hover:decoration-white"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <footer className="mt-10 border-t border-white/5 pt-8 text-sm text-zinc-500">
          Built with Next.js, Notion, GitHub, and Vercel.
        </footer>
      </div>
    </main>
  );
}