"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// Carregando o Slider dinamicamente
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const testimonials = [
  {
    name: "Pedro Henrique",
    photo: "/profile1.jpg",
    text: "Rapaz, eu achava que cavaquinho era coisa complicada, mas com esse curso, aprendi rapidinho. Agora já tô tocando no churrasco com os amigos!",
  },
  {
    name: "Lucas Almeida",
    photo: "/profile2.jpg",
    text: "O curso é massa demais! Sou de Salvador e sempre quis tocar um samba de roda. Hoje já consigo acompanhar o pessoal no pagode!",
  },
  {
    name: "Gabriel Santos",
    photo: "/profile3.jpg",
    text: "Eu sou do interior de Minas e nunca tive contato com música. Esse método me surpreendeu, é simples e direto. Já tô tocando modinhas pra família!",
  },
  {
    name: "Rafael Costa",
    photo: "/profile4.jpg",
    text: "Sou carioca e sempre quis tocar cavaquinho no samba da roda. Com esse curso, em poucas semanas já tava tirando minhas músicas preferidas!",
  },
  {
    name: "João Batista",
    photo: "/profile5.jpg",
    text: "Aqui no Nordeste, a gente gosta de um forró animado. Nunca pensei que o cavaquinho fosse tão versátil. Esse curso abriu minha mente!",
  },
  {
    name: "Carlos Eduardo",
    photo: "/profile6.jpg",
    text: "Eu sou de São Paulo e sempre achei que aprender cavaquinho era coisa de músico profissional. Esse curso mudou minha visão. Hoje toco com confiança!",
  },
  {
    name: "André Luiz",
    photo: "/profile7.jpg",
    text: "Moro no Sul e sempre gostei de música, mas nunca tive coragem de aprender. Esse método é tão prático que já tô tocando em roda de amigos!",
  },
  {
    name: "Marcos Vinícius",
    photo: "/profile8.jpg",
    text: "Eu achava que não tinha jeito pra música, mas o curso me mostrou que qualquer um pode aprender. Hoje já toco até em eventos da igreja!",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3, // Exibe 3 cards em dispositivos maiores
  slidesToScroll: 1,
  arrows: true, // Ativa setas para navegação
  responsive: [
    {
      breakpoint: 1024, // Para dispositivos médios
      settings: {
        slidesToShow: 2, // Exibe 2 cards
      },
    },
    {
      breakpoint: 640, // Para dispositivos móveis
      settings: {
        slidesToShow: 1, // Exibe 1 card
      },
    },
  ],
};

const Depoimentos: React.FC = () => (
  <section className="sectionBox">
    <h2 className="sectionHeading">
      O que dizem nossos alunos
    </h2>
    <p className="sectionSubheading">
      Veja como o nosso método está ajudando pessoas comuns a aprender
      cavaquinho de forma rápida e divertida.
    </p>

    {/* Carrossel de depoimentos */}
    <div className="w-full max-w-6xl mx-auto px-4">
      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} className="px-4 py-6">
            <div className="bg-gray-100 border border-gray-300 rounded-3xl p-8 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center">
                <div className="relative mb-5">
                <div className="rounded-full p-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500">
                  <Image
                  src={item.photo}
                  alt={`Foto de ${item.name}`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover border-2 border-white shadow-md"
                  />
                </div>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 text-white text-xs px-2 py-1 rounded-full shadow">
                  ★
                </div>
                </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-base leading-relaxed italic">“{item.text}”</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>

    {/* Botão CTA */}
    <div className="text-center mt-12">
      <a href="#oferta" className="primaryButton">Quero começar agora!</a>
    </div>
  </section>
);

export default Depoimentos;
