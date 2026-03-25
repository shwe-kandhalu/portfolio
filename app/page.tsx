import { getProjects, getText } from "../lib/notion";

const GITHUB_URL = "https://github.com/shwe-kandhalu";
const LINKEDIN_URL = "https://www.linkedin.com/in/shwethakandhalu/";

export default async function Home() {
  const projects = await getProjects();

  const featuredProjects = projects.filter((project: any) => {
    const featured = project.properties?.Featured?.checkbox;
    return featured;
  });

  const visibleProjects = featuredProjects.length > 0 ? featuredProjects : projects;

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Coding Portfolio
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Hi, I am Shwetha.
            <br />
            I build clean, useful web projects.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I use Next.js, Notion, GitHub, and Vercel to build simple, polished websites that are easy to update and easy to share.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white px-5 py-3 font-medium text-black transition hover:bg-zinc-200"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-700 px-5 py-3 font-medium text-white transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">Featured Projects</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Pulled live from Notion.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {visibleProjects.map((project: any) => {
              const props = project.properties;

              const title = getText(props.Name?.title);
              const description = getText(props.Description?.rich_text);
              const github = props.GitHub?.url;
              const live = props.Live?.url;
              const tech = props.Tech?.multi_select?.map((item: any) => item.name) || [];

              return (
                <article
                  key={project.id}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-zinc-600"
                >
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item: string) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {description || "Add a short description for this project in Notion."}
                  </p>

                  <div className="mt-5 flex gap-5">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-white underline underline-offset-4"
                      >
                        GitHub
                      </a>
                    )}
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-medium text-white underline underline-offset-4"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}