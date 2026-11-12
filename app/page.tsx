
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-[#111210] text-[#F3F4ED] selection:bg-[#EAFE36] selection:text-[#111210]">
      
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between border-b border-white/10 px-6 py-6 md:px-12 lg:px-16">
        <span className="text-sm font-black tracking-[-0.04em] text-[#EAFE36]">
          MEIOVOX®
        </span>

        <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-[#858A80] sm:block">
          Independent Lore Archive
        </span>

        <span className="font-mono text-[10px] tracking-widest text-[#858A80]">
          EST. 2026
        </span>
      </header>

      {/* Main Content */}
      <section className="relative z-10 mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-center px-6 py-20 md:px-12 lg:px-16">
        
        {/* Status */}
        <div className="mb-10 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#EAFE36] opacity-30" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#EAFE36]" />
          </span>

          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-[#EAFE36] md:text-xs">
            System Status — In Development
          </span>
        </div>

        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/MVX_LGV26_2.webp"
            alt="Meiovox Logo"
            width={96}
            height={96}
            priority
            className="h-16 w-16 object-contain md:h-24 md:w-24"
          />
        </div>

        {/* Headline */}
        <h1 className="max-w-[1400px] text-[clamp(3.2rem,9.5vw,10rem)] font-black uppercase leading-[0.85] tracking-[-0.085em]">
          UNDER
          <br />
          <span className="text-[#EAFE36]">
            DEVELOPMENT.
          </span>
        </h1>

        {/* Description */}
        <div className="mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[440px] text-sm leading-[1.8] text-[#A4A69F] md:text-base">
            A new space for untold stories, hidden connections,
            and everything beyond the surface.
            <br />
            <span className="text-[#F3F4ED]">
              Something is taking shape.
            </span>
          </p>

          <a
            href="https://www.instagram.com/meiovox/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-5 border-b border-[#EAFE36] pb-3 text-xs font-bold uppercase tracking-[0.15em] text-[#EAFE36] transition-colors hover:text-white"
          >
            Follow Our Journey
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-6 md:px-12 lg:px-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858A80]">
            © 2026 MEIOVOX. ALL RIGHTS RESERVED.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#858A80]">
            Made by{" "}
            <a
              href="https://www.facebook.com/hereismeio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#EAFE36] transition-colors hover:text-white"
            >
              Meio ↗
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}
