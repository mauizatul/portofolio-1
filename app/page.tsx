import type { CSSProperties } from "react";

import { ScrollReveal } from "./scroll-reveal";

const projects = [
  {
    title: "Atlas Retail OS",
    type: "Product design",
    year: "2026",
    summary:
      "Dashboard operasional untuk tim retail yang perlu memantau stok, order, dan margin harian dengan cepat.",
    accent: "bg-[#ff6b4a]",
  },
  {
    title: "Laras Finance",
    type: "Frontend build",
    year: "2025",
    summary:
      "Landing dan web app untuk produk keuangan, fokus pada onboarding yang ringkas dan visual data yang jelas.",
    accent: "bg-[#1f9f7a]",
  },
  {
    title: "Nusa Studio",
    type: "Brand system",
    year: "2025",
    summary:
      "Sistem visual portfolio kreatif dengan komponen responsif, guidelines warna, dan pattern halaman karya.",
    accent: "bg-[#f5b841]",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Design system",
  "UI strategy",
  "Responsive web",
  "Performance",
];

const timeline = [
  {
    period: "Sekarang",
    title: "Independent product builder",
    body: "Mendesain dan membangun interface untuk founder, studio kecil, dan tim produk yang butuh hasil rapi tanpa proses yang berat.",
  },
  {
    period: "2024 - 2025",
    title: "Frontend and UI specialist",
    body: "Mengubah konsep bisnis menjadi flow web yang siap dipakai, dari wireframe sampai implementasi production.",
  },
  {
    period: "2022 - 2024",
    title: "Digital designer",
    body: "Mengerjakan identitas visual, landing page, dan asset campaign untuk brand lokal dan produk digital.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#151515]">
      <ScrollReveal />
      <section
        data-reveal="fade-show"
        className="relative isolate min-h-[88vh] overflow-hidden px-6 py-6 sm:px-10 lg:px-16"
      >
        <div
          data-parallax
          data-parallax-speed="-24"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(21,21,21,0.06)_1px,transparent_1px),linear-gradient(180deg,rgba(21,21,21,0.06)_1px,transparent_1px)] bg-[size:72px_72px]"
        />
        <div
          data-parallax
          data-parallax-speed="42"
          className="absolute inset-x-6 bottom-10 top-28 -z-10 overflow-hidden rounded-lg border border-black/10 bg-[#ece2d0] shadow-[0_30px_100px_rgba(21,21,21,0.18)] sm:inset-x-10 lg:inset-x-16"
        >
          <div
            data-parallax
            data-parallax-speed="-34"
            className="absolute left-[8%] top-[16%] h-32 w-52 rounded-md border border-black/10 bg-[#151515] p-4 text-[#f7f2ea] shadow-2xl sm:h-40 sm:w-72"
          >
            <div className="mb-6 h-2 w-20 rounded-sm bg-[#ff6b4a]" />
            <div className="space-y-2">
              <div className="h-2 w-10/12 rounded-sm bg-white/80" />
              <div className="h-2 w-7/12 rounded-sm bg-white/45" />
              <div className="h-2 w-9/12 rounded-sm bg-white/45" />
            </div>
          </div>
          <div
            data-parallax
            data-parallax-speed="56"
            className="absolute right-[9%] top-[10%] hidden h-52 w-80 rounded-md border border-black/10 bg-[#f7f2ea] p-5 shadow-2xl md:block"
          >
            <div className="grid h-full grid-cols-3 gap-3">
              <div className="rounded-md bg-[#1f9f7a]" />
              <div className="rounded-md bg-[#151515]" />
              <div className="rounded-md bg-[#f5b841]" />
              <div className="col-span-2 rounded-md bg-white" />
              <div className="rounded-md bg-[#ff6b4a]" />
            </div>
          </div>
          <div
            data-parallax
            data-parallax-speed="-48"
            className="absolute bottom-[12%] right-[18%] h-40 w-60 rounded-md border border-black/10 bg-white p-4 shadow-2xl sm:w-72"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="size-3 rounded-sm bg-[#ff6b4a]" />
              <div className="size-3 rounded-sm bg-[#f5b841]" />
              <div className="size-3 rounded-sm bg-[#1f9f7a]" />
            </div>
            <div className="space-y-3">
              <div className="h-3 rounded-sm bg-black/80" />
              <div className="h-3 w-8/12 rounded-sm bg-black/20" />
              <div className="h-14 rounded-md bg-[#f5b841]/70" />
            </div>
          </div>
          <div
            data-parallax
            data-parallax-speed="38"
            className="absolute bottom-[10%] left-[14%] hidden h-28 w-64 rounded-md border border-black/10 bg-[#1f9f7a] p-4 shadow-2xl lg:block"
          >
            <div className="grid h-full grid-cols-4 gap-3">
              <div className="rounded-sm bg-white/80" />
              <div className="rounded-sm bg-white/45" />
              <div className="rounded-sm bg-white/80" />
              <div className="rounded-sm bg-white/45" />
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col justify-end pb-12 pt-28 sm:pb-16 sm:pt-36 lg:min-h-[78vh]">
          <p className="mb-5 max-w-2xl text-sm font-semibold uppercase text-[#1f6f59]">
            Portfolio digital designer and frontend developer
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-8xl">
            Membuat produk digital yang tajam, tenang, dan mudah dipakai.
          </h1>
          <div className="mt-8 flex max-w-4xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-black/72">
              Saya membantu brand dan tim produk mengubah ide menjadi website,
              dashboard, dan sistem interface yang siap tumbuh.
            </p>
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 w-fit items-center justify-center rounded-md bg-[#151515] px-5 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
            >
              Mulai proyek
            </a>
          </div>
        </div>
      </section>

      <section
        id="karya"
        data-reveal="fade-show"
        className="border-y border-black/10 bg-[#151515] px-6 py-20 text-[#f7f2ea] sm:px-10 lg:px-16"
      >
        <div
          data-parallax
          data-parallax-speed="-28"
          className="mx-auto max-w-7xl"
        >
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[#f5b841]">
                Karya terpilih
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
                Work yang bisa dibaca cepat.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-white/68">
              Fokus pada struktur, hirarki visual, dan detail kecil yang bikin
              pengguna tidak perlu menebak.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                data-reveal="fade-show"
                style={
                  { "--reveal-delay": `${index * 90}ms` } as CSSProperties
                }
                className="rounded-lg border border-white/12 bg-white/[0.06] p-5"
              >
                <div className="mb-8 flex h-48 flex-col justify-between rounded-md bg-[#f7f2ea] p-4 text-[#151515]">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase text-black/55">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <div>
                    <div className={`mb-4 h-3 w-20 rounded-sm ${project.accent}`} />
                    <div className="space-y-2">
                      <div className="h-3 rounded-sm bg-black/80" />
                      <div className="h-3 w-8/12 rounded-sm bg-black/20" />
                      <div className="h-3 w-10/12 rounded-sm bg-black/20" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-base leading-7 text-white/68">
                  {project.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="tentang"
        data-reveal="fade-show"
        className="px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-parallax data-parallax-speed="26">
            <p className="text-sm font-semibold uppercase text-[#1f6f59]">
              Tentang
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Rapi di visual, kuat di implementasi.
            </h2>
            <p className="mt-6 text-lg leading-8 text-black/72">
              Pendekatannya sederhana: cari inti masalah, buat alur yang jelas,
              lalu bangun interface dengan komponen yang konsisten dan mudah
              dirawat.
            </p>
          </div>

          <div data-parallax data-parallax-speed="-30" className="grid gap-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  data-reveal="fade-show"
                  style={
                    { "--reveal-delay": `${index * 45}ms` } as CSSProperties
                  }
                  className="rounded-md border border-black/10 bg-white px-3 py-4 text-sm font-semibold"
                >
                  {skill}
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              {timeline.map((item, index) => (
                <div
                  key={item.title}
                  data-reveal="fade-show"
                  style={
                    { "--reveal-delay": `${index * 80}ms` } as CSSProperties
                  }
                  className="grid gap-4 border-t border-black/12 pt-5 sm:grid-cols-[9rem_1fr]"
                >
                  <p className="text-sm font-semibold text-[#1f6f59]">
                    {item.period}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-base leading-7 text-black/68">
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="kontak"
        data-reveal="fade-show"
        className="bg-[#ff6b4a] px-6 py-20 text-[#151515] sm:px-10 lg:px-16"
      >
        <div
          data-parallax
          data-parallax-speed="34"
          className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-semibold uppercase">Kontak</p>
            <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
              Punya ide? Kita buat bentuk digitalnya.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <a
              href="mailto:hello@example.com"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#151515] px-5 text-sm font-semibold text-white transition hover:bg-[#2b2b2b]"
            >
              hello@example.com
            </a>
            <p className="text-sm font-medium text-black/70">
              Available for selected projects
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
