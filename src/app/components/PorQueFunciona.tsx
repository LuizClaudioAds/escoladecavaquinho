"use client";
import React from "react";
import Slider from "react-slick";

const PorQueFunciona: React.FC = () => {
  const cards = [
    {
      icon: "✅",
      title: "Metodologia Descomplicada",
      desc: "Ensinamos de forma simples, sem enrolação e com linguagem acessível — mesmo que você nunca tenha tocado nada antes.",
    },
    {
      icon: "⏳",
      title: "Aprenda no seu ritmo",
      desc: "Aulas curtas e práticas que você pode ver e rever quando quiser. Ideal para quem tem pouco tempo no dia a dia.",
    },
    {
      icon: "🎵",
      title: "Músicas desde a primeira semana",
      desc: "Nosso método foca em resultados rápidos. Já nas primeiras aulas, você aprende músicas reais e sente a evolução.",
    },
    {
      icon: "🌟",
      title: "Suporte e comunidade ativa",
      desc: "Você não aprende sozinho. Estamos juntos com você em cada etapa, tirando dúvidas e motivando sua evolução.",
    },
    {
      icon: "💡",
      title: "Método testado e aprovado",
      desc: "Método testado e aprovado por milhares de alunos, garantindo resultados reais e consistentes.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-neutral-light py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 text-center">
        {/* Título */}
        <h2 className="sectionHeading">
          🎯 Por que o nosso curso funciona de verdade
        </h2>
        <p className="sectionSubheading">
          Um método testado, passo a passo, criado para quem nunca encostou em um
          cavaquinho.
        </p>
        {/* Slider */}
        <div className="w-full max-w-6xl mx-auto">
          <Slider {...settings}>
            {cards.map((card, idx) => (
              <div key={idx} className="px-4 py-4">
                <div className="bg-white rounded-2xl shadow-md p-6 text-center h-full flex flex-col items-center justify-start transition-transform hover:scale-105 hover:shadow-lg max-w-sm mx-auto">
                  {/* Ícone centralizado e bem posicionado */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-3xl mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700">{card.desc}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* Texto emocional */}
        <div className="max-w-3xl text-center mt-6 px-4">
          <p className="sectionSubheading">
            Não deixe para depois o sonho de tocar cavaquinho. Com o método certo,
            você pode começar hoje e surpreender a si mesmo!
          </p>
        </div>
        {/* Botão CTA */}
        <a href="#oferta" className="primaryButton">
          🪕 Quero Começar Agora
        </a>
      </div>
    </section>
  );
};

export default PorQueFunciona;
