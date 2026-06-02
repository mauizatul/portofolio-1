export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] px-6 py-20 text-[#151515] sm:px-10 lg:px-16">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase text-[#1f6f59]">
            About route
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            Ini halaman lain yang masuk sebagai children.
          </h1>
        </div>

        <div className="grid gap-6 text-lg leading-8 text-black/70">
          <p>
            Ketika kamu buka URL <span className="font-semibold text-black">/about</span>,
            Next.js otomatis mengganti isi <span className="font-semibold text-black">children</span>
            di <span className="font-semibold text-black">RootLayout</span> dengan komponen ini.
          </p>
          <p>
            Navbar dan footer tetap sama karena keduanya berada di layout,
            bukan di page masing-masing.
          </p>
        </div>
      </section>
    </main>
  );
}
