import { useState } from "react";

function Diy() {
  const opcoes = [
    "Garrafa PET",
    "Caixa de Papelão",
    "Latas de Alumínio",
    "Rolo de Papel",
    "Potes de Vidro",
    "Tampinhas",
    "Jornal",
    "Tecido",
  ];

  const [selected, setSelected] = useState([]);

  const toggleSelected = (opcao) => {
    if (selected.includes(opcao)) {
      setSelected(selected.filter((item) => item !== opcao));
    } else {
      setSelected([...selected, opcao]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Materiais selecionados: ", selected);
  };

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

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap gap-2 mb-6">
            {opcoes.map((opcao, index) => {
              const isSelected = selected.includes(opcao);

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => toggleSelected(opcao)}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 border ${
                    isSelected
                      ? "bg-[#2d5a27] text-white border-[#2d5a27] shadow-sm scale-105"
                      : "bg-white text-slate-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
                  }`}
                >
                  {opcao} {isSelected ? "Ok" : ""}
                </button>
              );
            })}
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
            disabled={selected.length === 0}
            className="w-full py-3 px-4 bg-[#2d5a27] text-white font-medium rounded-xl hover:bg-[#23471f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
          >
            {selected.length > 0
              ? `Gerar ideias de Projetos (${selected.length})`
              : "Selecione ao menos 1 material "}
          </button>
        </form>
      </section>
    </main>
  );
}

export default Diy;
