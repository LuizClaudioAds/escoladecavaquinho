"use client";
import React from "react";

const OfertaEBonus: React.FC = () => {
  const planoCompleto = [
    { name: "E-book: Mais de 10.000 cifras", value: "R$29", free: true },
    { name: "Acesso ao Grupo Exclusivo", value: "Não tem preço", free: true },
    { name: "Playlist de Músicas para Praticar", value: "R$19", free: true },
    { name: "Curso de Banjo Completo", value: "R$129", free: true },
    {
      name: "Dicionário de Acordes Completo",
      value: "Não tem preço",
      free: true,
    },
    { name: "Curso Avançado de Cavaquinho", value: "R$199", free: true },
  ];

  const planoBasico = [
    {
      name: "Acesso às aulas essenciais do curso",
      value: "Incluído",
      free: false,
    },
    { name: "Material de apoio", value: "Incluído", free: false },
    { name: "Acesso vitalício ao conteúdo", value: "Incluído", free: false },
    { name: "Suporte personalizado", value: "Incluído", free: false },
  ];

  const valorBonus = 89; // Valor destacado para a oferta bônus
  const valorBasico = 39; // Valor destacado para a oferta básica
  const linkBonus = "https://pay.kiwify.com.br/6gWyu3y"; // Link para a oferta bônus
  const linkBasico = "https://pay.kiwify.com.br/Ij2O2rL"; // Link para a oferta básica
  const valorReal = planoCompleto.reduce((acc, item) => {
    const numericValue = parseFloat(item.value.replace("R$", "").replace(",", ".")) || 0;
    return acc + numericValue;
  }, 0) + valorBasico;

  return (
    <>
      <div className="w-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-2 font-bold">
        💸 Curso por apenas R${valorBasico} – sem mensalidades!
      </div>
      <section className="sectionBox">
        <div id="oferta" className="text-center mb-6 max-w-2xl mx-auto">
          <h2 className="sectionHeading">
            🛍️ Escolha seu plano e comece hoje!
          </h2>
          <p className="sectionSubheading">
            Garanta seu acesso agora mesmo com ou sem bônus exclusivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card da oferta principal */}
          <div className="bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center overflow-hidden">
            <h3 className="text-2xl font-bold text-yellow-900 mb-2">
              🎁 BÔNUS INCLUÍDOS<br></br>Curso + Extras Exclusivos!
            </h3>
            <p className="text-gray-700 mb-2">
              Para quem quer aproveitar todos os benefícios e bônus exclusivos.
            </p>

            <div className="flex mb-4">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
            </div>

            <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-4" />

            <ul className="w-full text-left mb-6 space-y-3">
              {planoCompleto.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center space-x-2 bg-white px-4 py-3 rounded-lg shadow-sm"
                >
                  <span className="font-medium text-sm text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-red-600 line-through">
                    {item.value === "Não tem preço" ? "" : item.value}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {item.free
                      ? item.value === "Não tem preço"
                        ? item.value
                        : "GRÁTIS"
                      : item.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg font-bold text-gray-900">
              Valor real:{" "}
              <span className="line-through text-gray-500">R${valorReal}</span>
            </p>
            <p className="text-green-400 text-xl font-bold mr-2">Somente</p>
            <div className="text-green-400 flex items-baseline">
              <p className="text-lg font-bold tracking-[-0.1em]">R$</p>
              <p className="text-8xl font-extrabold tracking-[-0.1em]">
                {valorBonus}
              </p>
            </div>
            <p className="text-base text-gray-500 mb-4">
              Incluindo todos os bônus exclusivos!
            </p>

            <button
              className="primaryButton mb-6 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-700 shadow-lg transform hover:scale-105 transition-transform duration-300"
              onClick={() => window.open(linkBonus, "_blank")}
            >
              🪕 Quero começar agora por R${valorBonus}
            </button>
            <div className="relative w-3xl">
              <p className="w-full text-center text-xs font-semibold text-red-700 bg-red-100 py-2 mb-6 shadow-lg animate-blink rounded-4xl">
                🚨 VAGAS COM BÔNUS SÃO LIMITADAS.
                <br /> GARANTA A SUA ANTES QUE ACABE!
              </p>
            </div>
          </div>

          {/* Card do plano básico */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              Plano Básico
            </h3>
            <p className="text-gray-600 mb-4">
              Essa oferta é perfeita para quem quer aprender cavaquinho de forma
              simples e prática.
            </p>

            <hr className="border-t-2 border-gray-300 w-1/2 mx-auto mb-4" />

            <ul className="w-full text-left mb-6 space-y-3">
              {planoBasico.map((item, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-lg shadow-sm"
                >
                  <span className="font-medium text-sm text-gray-800">
                    {item.name}
                  </span>
                  <span className="text-sm font-bold text-gray-600">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>

            <p className="text-lg font-bold text-gray-900">
              Valor real:{" "}
              <span className="line-through text-gray-500">R$89</span>
            </p>
            <p className="text-primary text-xl font-medium mr-2">Somente</p>
            <div className="text-primary flex items-baseline">
              <p className="text-lg font-bold tracking-[-0.1em]">R$</p>
              <p className="text-8xl font-extrabold tracking-[-0.1em]">
                {valorBasico}
              </p>
            </div>

            <button
              className="primaryButton"
              onClick={() => window.open(linkBasico, "_blank")}
            >
              🎶 Quero o plano básico
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfertaEBonus;
