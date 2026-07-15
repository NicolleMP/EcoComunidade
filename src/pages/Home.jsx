import { Camera, Info, Lightbulb, MapPin } from "lucide-react";
import FeatureCard from "../components/ui/FeatureCard/FeatureCard";
import InfoCard from "../components/ui/InfoCard/InfoCard";

function Home() {
  return (
    <div className="min-h-screen bg-[#f9faf6] flex flex-col">
      <main className="max-w-7xl mx-auto px-8 pt-8 grow w-full">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#88b04b] font-display">
          Bem-vindo(a) de volta
        </p>
        <h1 className="font-serif italic text-5xl lg:text-6xl text-[#2d5a27]">
          O que vamos reciclar hoje?
        </h1>
        <p className="font-display font-light italic text-lg text-slate-500">
          Pequenas escolhas, grandes transformações.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-10 mb-4">
          <FeatureCard
            variant="green"
            icon={Camera}
            badge="Câmera ia"
            title="Escanear Resíduo"
            description="Tire uma foto para saber como descartar corretamente."
          />

          <FeatureCard
            variant="white"
            icon={Lightbulb}
            badge="Criatividade"
            title="Ideias DIY"
            description="Transforme o que seria lixo em novos objetos úteis."
          />

          <InfoCard
            icon={MapPin}
            title="Pontos de Coleta"
            description="Ecopontos perto de você"
          />

          <InfoCard
            icon={Info}
            title="Sobre o projeto"
            description="Minha missão"
          />
        </section>
      </main>
    </div>
  );
}

export default Home;
