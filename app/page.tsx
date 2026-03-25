import { getProjects, getText } from "../lib/notion";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-5xl px-6 py-20">

        {/* HERO */}
        <div className="mb-16">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
            Hi, I’m Shwetha.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            I build clean, useful web applications using modern tools like
            Next.js, APIs, and data-driven systems.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/shwe-kandhalu"
              target="_blank"
              className="rounded-full bg-white px-5 py-2 text-black"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shwethakandhalu/"
              target="_blank"
              className="rounded-full border border-zinc-700 px-5 py-2"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* PROJECTS */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project: any) => {
              const props = project.properties;

              const title = getText(props.Name.title);
              const description = getText(props.Description?.rich_text);
              const github = props.GitHub?.url;
              const live = props.Live?.url;

              return (
                <div
                  key={project.id}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-zinc-600"
                >
                  <h3 className="text-xl font-semibold">{title}</h3>

                  <p className="mt-3 text-sm text-zinc-400">
                    {description}
                  </p>

                  <div className="mt-5 flex gap-4">
                    {github && (
                      <a
                        href={github}
                        target="_blank"
                        className="text-sm underline"
                      >
                        GitHub
                      </a>
                    )}
                    {live && (
                      <a
                        href={live}
                        target="_blank"
                        className="text-sm underline"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}