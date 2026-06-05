export default function ClassifichePage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">

      <div className="mb-10">
        <h1 className="text-5xl font-black text-cyan-400 mb-3">
          Classifiche
        </h1>

        <p className="text-slate-300">
          Segui l'andamento del torneo FIV5 CUP.
        </p>
      </div>

      <div className="bg-slate-900 rounded-3xl overflow-hidden border border-cyan-500/20">

        <div className="bg-gradient-to-r from-cyan-500/20 to-yellow-500/20 p-5">
          <h2 className="text-2xl font-bold text-white">
            Girone A
          </h2>
        </div>

        <table className="w-full text-white">

          <thead className="bg-slate-800">
            <tr>
              <th className="p-4 text-left">Pos</th>
              <th className="text-left">Squadra</th>
              <th>PT</th>
              <th>V</th>
              <th>N</th>
              <th>P</th>
              <th>GF</th>
              <th>GS</th>
              <th>DR</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t border-slate-700 hover:bg-slate-800/50">
              <td className="p-4 font-bold text-yellow-400">1</td>
              <td>Team Alpha</td>
              <td className="text-center">9</td>
              <td className="text-center">3</td>
              <td className="text-center">0</td>
              <td className="text-center">0</td>
              <td className="text-center">12</td>
              <td className="text-center">4</td>
              <td className="text-center text-cyan-400">+8</td>
            </tr>

            <tr className="border-t border-slate-700 hover:bg-slate-800/50">
              <td className="p-4">2</td>
              <td>Team Beta</td>
              <td className="text-center">6</td>
              <td className="text-center">2</td>
              <td className="text-center">0</td>
              <td className="text-center">1</td>
              <td className="text-center">8</td>
              <td className="text-center">5</td>
              <td className="text-center text-cyan-400">+3</td>
            </tr>

            <tr className="border-t border-slate-700 hover:bg-slate-800/50">
              <td className="p-4">3</td>
              <td>Team Gamma</td>
              <td className="text-center">3</td>
              <td className="text-center">1</td>
              <td className="text-center">0</td>
              <td className="text-center">2</td>
              <td className="text-center">5</td>
              <td className="text-center">7</td>
              <td className="text-center text-red-400">-2</td>
            </tr>

            <tr className="border-t border-slate-700 hover:bg-slate-800/50">
              <td className="p-4">4</td>
              <td>Team Delta</td>
              <td className="text-center">0</td>
              <td className="text-center">0</td>
              <td className="text-center">0</td>
              <td className="text-center">3</td>
              <td className="text-center">2</td>
              <td className="text-center">11</td>
              <td className="text-center text-red-400">-9</td>
            </tr>

          </tbody>

        </table>

      </div>

    </main>
  );
}