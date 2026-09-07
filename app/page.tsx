import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#EAFE36] text-neutral-900 font-sans selection:bg-neutral-800 selection:text-[#EAFE36]">
      
      {/* Area Logo Meiovox */}
      <div className="mb-10 opacity-90 hover:opacity-100 transition-opacity duration-700">
        <Image 
          src="/MVX_LGV26_2.webp" // Sesuaikan dengan nama file logo yang kamu gunakan
          alt="Meiovox Logo" 
          width={240} 
          height={240} 
          className="object-contain"
        />
      </div>

      {/* Teks Utama */}
      <h1 className="text-2xl md:text-4xl font-bold tracking-[0.25em] uppercase text-center mb-6 text-black">
        The Lore is Coming<span className="animate-pulse">...</span>
      </h1>
      
      {/* Sub-teks */}
      <div className="flex items-center gap-4 text-neutral-700 text-xs md:text-sm tracking-widest uppercase font-medium">
        <span>Meiovox Team</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-700"></span>
        <span>Zenless Zone Zero</span>
      </div>

      {/* Footer / Credit */}
      <div className="absolute bottom-8 text-xs sm:text-sm text-neutral-700 font-medium tracking-wide">
        Made with <span className="text-red-500 animate-pulse inline-block">❤</span> by{" "}
        <a 
          href="https://www.facebook.com/hereismeio" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-bold text-black hover:underline transition-all duration-300"
        >
          Meio
        </a>
      </div>

    </main>
  );
}