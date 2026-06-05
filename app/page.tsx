import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden">

      {/* HERO */}
      <section className="min-h-[90vh] max-w-7xl mx-auto px-6 flex items-center">

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

          {/* SINISTRA */}
          <div>

            <p className="text-cyan-400 font-semibold uppercase tracking-widest mb-3">
              Torneo Ufficiale
            </p>

            <h1 className="text-7xl lg:text-9xl font-black leading-none mb-6">
              <span className="text-cyan-400">FIV5</span>{" "}
              <span className="text-yellow-400">CUP</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 max-w-xl">
              Iscrivi la tua squadra, segui risultati, classifiche e calendario
              del torneo.
            </p>

            <div className="flex gap-4 flex-wrap mb-10">

              <button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl hover:scale-105 transition">
                Iscrivi Squadra
              </button>

              <button className="border border-cyan-400 px-8 py-4 rounded-2xl hover:bg-cyan-400/10 transition">
                Guarda il Calendario
              </button>

            </div>

            <div className="grid grid-cols-3 gap-4 max-w-xl">

              <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">16</p>
                <p className="text-slate-400">Squadre</p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-yellow-400">32</p>
                <p className="text-slate-400">Partite</p>
              </div>

              <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-5 text-center">
                <p className="text-3xl font-black text-cyan-400">1</p>
                <p className="text-slate-400">Campione</p>
              </div>

            </div>

          </div>

          {/* DESTRA */}
          <div className="relative flex justify-center items-center">

            <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

            <div className="absolute w-[350px] h-[350px] bg-yellow-500/20 blur-[100px] rounded-full"></div>

            <Image
              src="/logo.png"
              alt="FIV5 CUP"
              width={700}
              height={700}
              priority
              className="relative z-10 drop-shadow-[0_0_60px_rgba(34,211,238,0.6)]"
            />

          </div>

        </div>

      </section>

      {/* SEZIONI */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">
              Squadre
            </h3>
            <p className="text-slate-300">
              Visualizza tutte le squadre partecipanti.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">
              Calendario
            </h3>
            <p className="text-slate-300">
              Consulta date e orari delle partite.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">
              Classifiche
            </h3>
            <p className="text-slate-300">
              Segui la corsa al titolo.
            </p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 p-6 rounded-3xl">
            <h3 className="text-cyan-400 font-bold text-xl mb-3">
              News
            </h3>
            <p className="text-slate-300">
              Tutti gli aggiornamenti del torneo.
            </p>
          </div>

        </div>

      </section>

      {/* COUNTDOWN */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="bg-slate-900/60 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8">

          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Inizio Torneo
          </h2>

          <div className="grid grid-cols-4 gap-4 text-center">

            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-4xl font-black text-cyan-400">30</p>
              <p>Giorni</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-4xl font-black text-cyan-400">12</p>
              <p>Ore</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-4xl font-black text-cyan-400">45</p>
              <p>Minuti</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-4">
              <p className="text-4xl font-black text-cyan-400">10</p>
              <p>Secondi</p>
            </div>

          </div>

        </div>

      </section>

      {/* PARTITE */}
      <section className="max-w-7xl mx-auto px-6 pb-16">

        <h2 className="text-4xl text-cyan-400 font-bold mb-8">
          Prossime Partite
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-cyan-400 mb-2">12 Luglio - Ore 18:00</p>
            <h3 className="font-bold text-xl">Team Alpha vs Team Beta</h3>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6">
            <p className="text-cyan-400 mb-2">12 Luglio - Ore 20:00</p>
            <h3 className="font-bold text-xl">Team Gamma vs Team Delta</h3>
          </div>

        </div>

      </section>

      {/* RISULTATI */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl text-cyan-400 font-bold mb-8">
          Ultimi Risultati
        </h2>

        <div className="bg-slate-900/60 backdrop-blur-xl rounded-3xl p-6">

          <div className="flex justify-between py-4 border-b border-slate-700">
            <span>Team Alpha</span>
            <span className="text-cyan-400 font-bold text-xl">3 - 1</span>
            <span>Team Beta</span>
          </div>

          <div className="flex justify-between py-4">
            <span>Team Gamma</span>
            <span className="text-cyan-400 font-bold text-xl">2 - 2</span>
            <span>Team Delta</span>
          </div>

        </div>

      </section>

      <footer className="border-t border-cyan-500/20 py-10">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold text-cyan-400">
            FIV5 CUP
          </h3>

          <p className="text-slate-400 mt-3">
            Torneo ufficiale di calcio a 5.
          </p>

        </div>

      </footer>

    </main>
  );
}