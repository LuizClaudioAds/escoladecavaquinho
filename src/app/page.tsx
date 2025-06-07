import Hero from "@/components/Hero";
import SocialProofSection from "./components/ProvaSocial";
import ProvaSocialVideo from "./components/ProvaSocialVideo"; // Importando o novo componente
import PraQuemECurso from "@/components/PraQuemECurso";
import OQueVoceVaiAprender from "@/components/OQueVoceVaiAprender";
import PorQueFunciona from "./components/PorQueFunciona"; // Importando a nova seção
import OfertaEBonus from "./components/OfertaEBonus"; // Importando a seção de oferta e bônus
import Depoimentos from "@/components/Depoimentos";
import Garantia from "@/components/Garantia";
import FAQ from "@/components/FAQ";
import GatilhoPerda from "@/components/GatilhoPerda";
import Footer from "./components/Footer"; // Importando o componente Footer

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main>
        <Hero />
        <SocialProofSection />
        <PraQuemECurso />
        <OQueVoceVaiAprender />
        <PorQueFunciona />
        <ProvaSocialVideo />
        <Depoimentos />
        <OfertaEBonus />
        <Garantia />
        <GatilhoPerda />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
