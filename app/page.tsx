import { getProjects, getText } from "../lib/notion";
// If using src/app/page.tsx → change to "../../lib/notion"

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
    <main className="min-h-screen bg-[#fafafa] text-black">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-6">

        {/* NAVBAR */}
        <header className="sticky top-0 z-20 mb-14 rounded-2xl border border-zinc-200 bg-white/80 px-5 py-4 backdrop-blur">
          <nav className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold tracking-[0.2em] text-zinc-600 uppercase">
              Shwetha
            </p>

            <div className="flex flex-wrap items-center gap-2 text-sm">
              <a href="#projects" className="px-4 py-2 rounded-full hover:bg-zinc-100">
                Projects
              </a>
              <a href={GITHUB_URL} target="_blank" className="px-4 py-2 rounded-full hover:bg-zinc-100">
                GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" className="px-4 py-2 rounded-full hover:bg-zinc-100">
                LinkedIn
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full bg-[#a78bfa] px-4 py-2 text-white hover:bg-[#8b5cf6]"
              >
                Contact
              </a>
            </div>
          </nav>
        </header>

        {/* HERO */}
        <section className="grid gap-12 pb-20 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm text-green-700">
              Open to work
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              Hi, I’m{" "}
              <span className="text-[#8b5cf6]">Shwetha</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-600">
              I build clean, useful web applications using modern tools like
              Next.js, APIs, and data-driven systems.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#8b5cf6] px-5 py-3 text-white hover:bg-[#7c3aed]"
              >
                View Projects
              </a>
              <a
                href={EMAIL_URL}
                className="rounded-full border border-zinc-300 px-5 py-3 hover:bg-zinc-100"
              >
                Email Me
              </a>
            </div>
          </div>

          {/* SIDE CARD */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm text-zinc-500">About this site</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>• Projects come from Notion</li>
              <li>• Deployed on Vercel</li>
              <li>• Code stored on GitHub</li>
              <li>• Easy to update anytime</li>
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

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
                  className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#f3f0ff] text-[#6d28d9] px-3 py-1 text-xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm text-zinc-600">
                    {description}
                  </p>

                  <div className="mt-5 flex gap-4">
                    {github && (
                      <a href={github} target="_blank" className="text-[#7c3aed] text-sm underline">
                        GitHub
                      </a>
                    )}
                    {live && (
                      <a href={live} target="_blank" className="text-[#16a34a] text-sm underline">
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
          Built with Next.js, Notion, GitHub, and Vercel.
        </footer>
      </div>
    </main>
  );
}