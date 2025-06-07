import React from "react";

const cards = [
  {
    icon: "🎶",
    title: "Iniciantes sem experiência",
    desc: "Nunca pegou em um cavaquinho? Este curso começa do absoluto zero.",
  },
  {
    icon: "🪕",
    title: "Autodidatas travados",
    desc: "Já tentou aprender sozinho, mas não conseguiu evoluir? Aqui você vai destravar.",
  },
  {
    icon: "⏰",
    title: "Sem tempo a perder",
    desc: "Aulas objetivas e práticas para quem tem rotina corrida e quer resultado rápido.",
  },
  {
    icon: "🏠",
    title: "Quem prefere aprender em casa",
    desc: "Estude no seu ritmo, de onde quiser, com acesso vitalício ao conteúdo.",
  },
  {
    icon: "🎉",
    title: "Quem quer tocar em rodas de samba",
    desc: "Aprenda os principais ritmos e músicas para se divertir com amigos e família.",
  },
  {
    icon: "💡",
    title: "Busca método simples e testado",
    desc: "Conteúdo direto ao ponto, aprovado por centenas de alunos iniciantes.",
  },
];

const PraQuemECurso: React.FC = () => (
  <section className="sectionBox">
    <h2 className="sectionHeading">
      Pra quem é o curso?
    </h2>
    <p className="sectionSubheading">
      Este curso é ideal para quem quer aprender cavaquinho do zero, mesmo sem experiência prévia.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="flex flex-col items-center bg-white rounded-2xl shadow-md p-6 text-center transition hover:shadow-lg"
        >
          <span className="text-4xl mb-3">{card.icon}</span>
          <h3 className="text-xl font-semibold text-neutral-dark mb-2">
            {card.title}
          </h3>
          <p className="text-neutral">{card.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default PraQuemECurso;
