import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#0a0a0a] text-neutral-200 font-sans selection:bg-neutral-700">
      
      {/* Area Logo Meiovox */}
      <div className="mb-10 opacity-90 hover:opacity-100 transition-opacity duration-700">
        <Image 
          src="/MVX_LGV26_2.webp" // Pastikan nama file sesuai dengan yang ada di folder public
          alt="Meiovox Logo" 
          width={120} 
          height={120} 
          className="object-contain"
        />
      </div>

      {/* Teks Utama */}
      <h1 className="text-2xl md:text-4xl font-bold tracking-[0.25em] uppercase text-center mb-6">
        The Lore is Coming<span className="animate-pulse">...</span>
      </h1>
      
      {/* Sub-teks (Opsional: Memberikan nuansa ZZZ/Archive) */}
      <div className="flex items-center gap-4 text-neutral-500 text-xs md:text-sm tracking-widest uppercase">
        <span>Meiovox Vault</span>
        <span className="w-1 h-1 rounded-full bg-neutral-600"></span>
        <span>Zenless Zone Zero</span>
      </div>

    </main>
  );
}