"use client";

import React from "react";

const GatilhoPerda: React.FC = () => {
  const itens = [
    "Preço promocional exclusivo disponível apenas hoje.",
    "Método simples e direto para aprender rápido.",
    "Suporte exclusivo para tirar dúvidas com o professor.",
    "Acesso vitalício a todas as aulas e materiais complementares.",
    "Oportunidade única de realizar seu sonho de tocar cavaquinho.",
    "Postergar só vai atrasar seu progresso e motivação.",
    "Sem essa chance, você perde o acesso ao grupo exclusivo de alunos.",
  ];

  return (
    <section className="sectionBox px-4 sm:px-8 lg:px-16">
      <div className="bg-white max-w-4xl mx-auto rounded-3xl shadow-xl p-8 sm:p-12 flex flex-col items-start">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 w-full text-center text-gray-900">
          💔 Você vai perder se deixar pra depois...
        </h2>
        <ul className="space-y-5 w-full">
          {itens.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <svg
                className="w-6 h-6 mt-[3px] flex-shrink-0 text-red-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
                {item}
              </p>
            </li>
          ))}
        </ul>
        <a
          href="#oferta"
          className="mt-12 bg-primary text-white font-semibold px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-lg hover:bg-support transition-colors duration-300 self-center"
        >
          Não quero perder essa chance!
        </a>
      </div>
    </section>
  );
};

export default GatilhoPerda;
