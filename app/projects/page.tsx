const projectExamples = [
  "Atlas Retail OS",
  "Laras Finance",
  "Nusa Studio",
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#151515] px-6 py-20 text-[#f7f2ea] sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase text-[#f5b841]">
          Projects route
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
          Ini contoh halaman projects sebagai children yang berbeda.
        </h1>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projectExamples.map((project) => (
            <article
              key={project}
              className="rounded-lg border border-white/12 bg-white/[0.06] p-5"
            >
              <div className="mb-8 h-40 rounded-md bg-[#f7f2ea] p-4">
                <div className="h-3 w-20 rounded-sm bg-[#ff6b4a]" />
                <div className="mt-16 space-y-2">
                  <div className="h-3 rounded-sm bg-black/80" />
                  <div className="h-3 w-8/12 rounded-sm bg-black/20" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold">{project}</h2>
              <p className="mt-3 text-base leading-7 text-white/68">
                Halaman ini punya konten sendiri, tapi tetap dibungkus oleh
                RootLayout yang sama.
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
