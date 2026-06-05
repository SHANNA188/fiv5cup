export default function SquadrePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="mb-10">
        <h1 className="text-5xl font-black text-cyan-400 mb-3">
          Squadre
        </h1>

        <p className="text-slate-300">
          Tutte le squadre partecipanti alla FIV5 CUP.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Squadra 1 */}
        <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl">
              ⚽
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Team Alpha
              </h2>

              <p className="text-slate-400">
                Milano
              </p>
            </div>

          </div>

          <div className="space-y-2 text-slate-300">
            <p>👥 Giocatori: 10</p>
            <p>🧢 Capitano: Mario Rossi</p>
            <p>🏆 Vittorie: 3</p>
          </div>

        </div>

        {/* Squadra 2 */}
        <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center text-2xl">
              ⚽
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Team Beta
              </h2>

              <p className="text-slate-400">
                Roma
              </p>
            </div>

          </div>

          <div className="space-y-2 text-slate-300">
            <p>👥 Giocatori: 10</p>
            <p>🧢 Capitano: Luca Bianchi</p>
            <p>🏆 Vittorie: 2</p>
          </div>

        </div>

        {/* Squadra 3 */}
        <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-400 transition">

          <div className="flex items-center gap-4 mb-4">

            <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center text-2xl">
              ⚽
            </div>

            <div>
              <h2 className="text-xl font-bold text-white">
                Team Gamma
              </h2>

              <p className="text-slate-400">
                Torino
              </p>
            </div>

          </div>

          <div className="space-y-2 text-slate-300">
            <p>👥 Giocatori: 10</p>
            <p>🧢 Capitano: Andrea Verdi</p>
            <p>🏆 Vittorie: 1</p>
          </div>

        </div>

      </div>

    </main>
  );
}