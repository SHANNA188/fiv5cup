export default function CalendarioPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="mb-10">
        <h1 className="text-5xl font-black text-cyan-400 mb-3">
          Calendario
        </h1>

        <p className="text-slate-300">
          Tutte le partite della FIV5 CUP.
        </p>
      </div>

      <div className="grid gap-6">

        <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">

            <div>
              <p className="text-cyan-400 font-bold">
                Fase a Gironi
              </p>

              <p className="text-slate-400">
                12 Luglio 2026 • Ore 18:00
              </p>
            </div>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold">
              Campo 1
            </span>

          </div>

          <div className="flex justify-between items-center">

            <h2 className="text-2xl text-cyan-400 font-bold">
              Team Alpha
            </h2>

            <span className="text-cyan-400 font-white text-xl">
              VS
            </span>

            <h2 className="text-2xl text-cyan-400 font-bold">
              Team Beta
            </h2>

          </div>
        </div>

        <div className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6">
          <div className="flex justify-between items-center mb-4">

            <div>
              <p className="text-cyan-400 font-bold">
                Fase a Gironi
              </p>

              <p className="text-slate-400">
                12 Luglio 2026 • Ore 20:00
              </p>
            </div>

            <span className="bg-yellow-400 text-black px-4 py-2 rounded-xl font-bold">
              Campo 1
            </span>

          </div>

          <div className="flex justify-between items-center">

            <h2 className="text-2xl text-cyan-400 font-bold">
              Team Gamma
            </h2>

            <span className="text-cyan-400 font-white text-xl">
              VS
            </span>

            <h2 className="text-2xl text-cyan-400 font-bold">
              Team Delta
            </h2>

          </div>
        </div>

      </div>

    </main>
  );
}