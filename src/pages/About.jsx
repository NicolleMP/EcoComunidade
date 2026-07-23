import { Camera, Lightbulb, MapPin } from "lucide-react";
import InfoCard from "../components/ui/InfoCard/InfoCard";

function About() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="max-w-7xl px-8 pt-8 w-full">
        <div className="mx-auto mt-8 max-w-3xl">
          <h1 className="font-serif italic text-4xl text-[#2d5a27] leading-tight">
            Reciclar é um ato de comunidade.
          </h1>

          <p className="font-display font-normal text-base w-3xl mt-3 text-slate-500 leading-relaxed">
            EcoComunidade une inteligência artificial e educação ambiental para
            transformar o descarte em cuidado. Cada foto, cada projeto DIY é um
            passo em direção a um consumo mais consciente.
          </p>
        </div>
      </div>

      <section className="grid grid-cols-1 gap-5 mt-10 mb-4 w-3xl">
        <InfoCard
          icon={Camera}
          title="Scanner IA"
          description="Identifique o material de qualquer resíduo em segundos e receba instruções de higienização e descarte."
        />

        <InfoCard
          icon={Lightbulb}
          title="Professor DIY"
          description="Gere projetos criativos com o que já está em casa. Ideal para famílias, escolas e educadores."
        />

        <InfoCard
          icon={MapPin}
          title="Rede local"
          description="Ecopontos parceiros mapeados para facilitar o descarte responsável perto de você."
        />
      </section>

      <div className="m-6">
        <div className="rounded-4xl bg-[#2d5a27] text-white max-w-3xl min-h-30 p-6">
          <div className="flex flex-col gap-3">
            <h2 className="font-serif font-bold text-xs uppercase tracking-[0.2rem] text-[#88b04b]">
              Nossa missão
            </h2>
            <p className="font-serif italic font-normal text-2xl text-white leading-snug ">
              Tornar cada cada um ponto ativo de reciclagem e criatividade.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
