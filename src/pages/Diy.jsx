function Diy() {
  return (
    <main className="px-6 max-w-2xl mx-auto pt-6 space-y-3">
      <h1 className="font-serif italic text-4xl text-[#2d5a27]">
        Professor DIY
      </h1>

      <p className="text-sm text-slate-500 mt-1">
        Transforme resíduos em projetos úteis, guiado por IA.
      </p>

      <section className="bg-gray-200 p-6 sm:p-8 rounded-4xl border border-gray-400">
        <p className="text-sm font-semibold text-slate-700 mb-4">
          Quais materias você tem em casa hoje?
        </p>

        <form>
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              type="button"
              className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border bg-[#2d5a27] text-white border-[#2d5a27] shadow-sm scale-105"
            ></button>
          </div>

          <label>
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 text-[#88b04b]">
              Outro material (separe por vírgula)
            </p>
            <input
              type="text"
              placeholder="Ex.: rolha, CD Velho, meia"
              className="mt-2 mb-5 w-full px-4 py-3 bg-white rounded-3xl border-slate-300 outline-none transition-all duration-300 focus:border-[#2d5a27] focus:ring-1 focus:ring-[#2d5a27]"
            />
          </label>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#2d5a27] text-white font-medium rounded-xl hover:bg-[#23471f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            Gerar ideias de Projetos
          </button>
        </form>
      </section>
    </main>
  );
}

export default Diy;
