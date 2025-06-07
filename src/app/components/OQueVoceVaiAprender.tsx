"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

// Configurações do carrossel
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};

const topics = [
  {
    icon: "🎸",
    title: "Acordes do cavaquinho",
    desc: "Aprenda a montar e trocar acordes básicos e avançados com facilidade.",
    image: "/cardmodulos1.png",
  },
  {
    icon: "🥁",
    title: "Ritmos populares",
    desc: "Domine batidas de samba, pagode, choro e outros estilos brasileiros.",
    image: "/cardmodulos2.png",
  },
  {
    icon: "📖",
    title: "Leitura de cifras",
    desc: "Entenda e interprete cifras e tablaturas para tocar qualquer música.",
    image: "/cardmodulos3.png",
  },
  {
    icon: "👂",
    title: "Ouvido musical",
    desc: "Desenvolva sua percepção para tirar músicas de ouvido.",
    image: "/cardmodulos4.png",
  },
  {
    icon: "🎵",
    title: "Repertório completo",
    desc: "Toque músicas do início ao fim, acompanhando voz ou outros instrumentos.",
    image: "/cardmodulos5.png",
  },
  {
    icon: "📝",
    title: "Técnicas essenciais",
    desc: "Dedilhados, batidas e truques para evoluir rápido e com segurança.",
    image: "/cardmodulos8.png",
  },
  {
    icon: "💡",
    title: "Dicas práticas",
    desc: "Evite erros comuns e aprenda atalhos para acelerar seu aprendizado.",
    image: "/cardmodulos7.png",
  },
];

const OQueVoceVaiAprender: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Define o limite de "mobile"
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const renderCard = (item: (typeof topics)[0], idx: number) => (
    <div
      key={idx}
      role="group"
      aria-labelledby={`topic-title-${idx}`}
      tabIndex={0}
      className="flex-shrink-0 min-w-[260px] w-full sm:w-auto snap-start relative flex flex-col items-center justify-center min-h-[260px] rounded-2xl shadow-md overflow-hidden focus:outline-none focus:ring-4 focus:ring-primary transition-all duration-300 group hover:shadow-xl"
    >
      <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover object-center z-0 transition-transform duration-300 group-hover:scale-110"
      sizes="(max-width: 768px) 85vw, (min-width: 769px) 33vw"
      priority={idx === 0}
      />
      <div
      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30 z-10 group-hover:brightness-105 transition-all duration-300"
      aria-hidden="true"
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full w-full px-6 py-8 text-center">
      <span className="text-4xl mb-3 drop-shadow-lg group-hover:scale-110 transition-transform duration-200">
        {item.icon}
      </span>
      <h3
        id={`topic-title-${idx}`}
        className="text-xl font-semibold text-white mb-2 drop-shadow"
      >
        {item.title}
      </h3>
      <p className="text-white text-base drop-shadow">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <>
      <section className="sectionBox px-4">
        <h2 className="sectionHeading text-center text-2xl sm:text-3xl md:text-4xl mb-4">
          O que você vai aprender
        </h2>
        <p className="sectionSubheading text-center mb-10 text-base sm:text-lg max-w-3xl mx-auto">
          Um método passo a passo, pensado para quem quer aprender cavaquinho de
          verdade, mesmo começando do zero. Veja os principais tópicos do curso:
        </p>

        <div className="w-full max-w-4xl mx-auto px-2">
          {isMobile ? (
            <Slider {...carouselSettings}>{topics.map(renderCard)}</Slider>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map(renderCard)}
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default OQueVoceVaiAprender;
