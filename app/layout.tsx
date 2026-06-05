import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body className="bg-[#061A35] text-white min-h-screen">

  <div className="fixed inset-0 -z-10">

    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"></div>

    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full"></div>

  </div>

        <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#061A35]/80 border-b border-cyan-500/20">

  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

    <div className="flex items-center gap-4">

      <Image
        src="/logo.png"
        alt="FIV5 CUP"
        width={55}
        height={55}
      />

      <div>
        <h1 className="font-black text-cyan-400 text-xl">
          FIV5 CUP
        </h1>

        <p className="text-xs text-slate-400">
          Torneo Ufficiale
        </p>
      </div>

    </div>

    <nav className="flex gap-6 text-sm font-semibold">

      <a href="/" className="hover:text-cyan-400 transition">
        Home
      </a>

      <a href="/squadre" className="hover:text-cyan-400 transition">
        Squadre
      </a>

      <a href="/calendario" className="hover:text-cyan-400 transition">
        Calendario
      </a>

      <a href="/classifiche" className="hover:text-cyan-400 transition">
        Classifiche
      </a>

      <a href="/regolamento" className="hover:text-cyan-400 transition">
        Regolamento
      </a>

    </nav>

  </div>

</header>

        {children}

      </body>
    </html>
  );
}