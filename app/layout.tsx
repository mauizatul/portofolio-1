import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mauizatul Fadhillah - Portfolio",
  description:
    "Portfolio digital designer dan frontend developer untuk website, dashboard, dan sistem interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f7f2ea] text-[#151515]">
        <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f2ea]/88 px-6 py-4 backdrop-blur-md sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href="/" className="text-base font-semibold">
              Mauizatul Fadhillah
            </Link>
            <nav
              aria-label="Navigasi utama"
              className="flex items-center gap-4 text-sm font-medium text-black/70 sm:gap-6"
            >
              <Link href="/" className="transition hover:text-black">
                Home
              </Link>
              <Link href="/projects" className="transition hover:text-black">
                Projects
              </Link>
              <Link href="/about" className="transition hover:text-black">
                About
              </Link>
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-black/10 bg-[#151515] px-6 py-6 text-[#f7f2ea] sm:px-10 lg:px-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>Nama Kamu Portfolio</p>
            <a className="text-white/70 transition hover:text-white" href="mailto:hello@example.com">
              hello@example.com
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
