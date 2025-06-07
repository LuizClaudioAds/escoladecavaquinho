import React from "react";
import Image from "next/image";

const benefits = [
  "👣 Aulas passo a passo voltadas para iniciantes.",
  "🎓 Aprenda no seu ritmo, com acesso vitalício às aulas.",
  "💵 Economize tempo e dinheiro sem precisar sair de casa.",
  "🫱🏻‍🫲🏽 Receba suporte exclusivo para tirar dúvidas diretamente com o professor.",
  "🔐 Pagamento único e vitalício, sem mensalidades ou taxas extras.",
  "✅ Desenvolva suas habilidades com um método testado e aprovado.",
];

export default function Hero() {
  return (
    <>
    <div className="w-screen bg-warning text-white text-center py-2 px-4 text-sm sm:text-base md:text-lg">
      🎉 Oferta especial! Inscreva-se agora por apenas R$39! 🎉
    </div>
    <div className="w-full bg-gradient-to-b from-white to-neutral-light">
      <section className="sectionBox pt-1">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Imagem do Cavaquinho */}
            <Image
              src="/logoazulnormal.svg"
              alt="Logo Maior"
              width={128}
              height={128}
              className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
          {/* Título */}
          <h1 className="heroHeading">
            Aprenda{" "}
            <span className="bg-primary text-primary-contrast px-1 rounded">
              Cavaquinho Do Zero
            </span>{" "}
            e TOQUE Suas PRIMEIRAS Músicas EM ATÉ{" "}
            <span className="bg-primary text-primary-contrast px-1 rounded">
              30 Dias
            </span>
            !
          </h1>
          {/* Subtítulo */}
          <p className="heroSubheading">
            Mais de{" "}
            <span className="font-bold text-neutral-dark">100 aulas gravadas</span>, módulos{" "}
            <span className="font-bold text-neutral-dark">passo a passo</span>, materiais complementares e{" "}
            <span className="font-bold text-neutral-dark">bônus exclusivos</span>{" "}
            para transformar você em um músico completo.
          </p>
          {/* Lista de benefícios */}
          <ul className="text-left text-neutral text-base sm:text-lg mb-8 space-y-2 w-full max-w-2xl px-2">
            {benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-center mb-2">
                {benefit}
              </li>
            ))}
          </ul>
          {/* Botão CTA */}
            <a
            href="#oferta"
            className="primaryButton"
            >
            Quero aprender cavaquinho!
            </a>
        </div>
      </section>
    </div>
    </>
  );
}
