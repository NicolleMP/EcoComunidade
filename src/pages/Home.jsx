import Card from "../components/ui/Card/Card";

function Home() {
  return (
    <div className="px-8 py-8 bg-[#f9faf6] min-h-screen">
      <div className="m-6 flex flex-col space-y-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#88b04b] font-display">
          Bem-vindo(a) de volta
        </p>
        <h1 className="font-serif italic text-6xl lg:text-7xl text-[#2d5a27]">
          O que vamos reciclar hoje?
        </h1>
        <p className="font-display font-light italic text-lg text-slate-500">
          Pequenas escolhas, grandes transformações.
        </p>
      </div>
      <Card />
    </div>
  );
}

export default Home;
