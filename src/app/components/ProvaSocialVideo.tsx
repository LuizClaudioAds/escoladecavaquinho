"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { CircleArrowLeft, CircleArrowRight, CircleX } from "lucide-react";
import dynamic from "next/dynamic";
import Slider from "react-slick";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

const ProvaSocialVideo: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const videos = [
    "https://vimeo.com/1051336958/41e2e0be41",
    "https://vimeo.com/1051336758/889c9dfa3b",
    "https://vimeo.com/1051337248/c3a1b22b2c",
    "https://vimeo.com/1051337049/66c5d9ac20",
    "https://vimeo.com/1051337165/f329f148c5",
    "https://vimeo.com/1051337125/d30c53fb88",
    "https://vimeo.com/1051336842/b6ce5fde67",
  ];

  const videoCover = [
    "/cover (1).png",
    "/cover (2).png",
    "/cover (3).png",
    "/cover (4).png",
    "/cover (5).png",
    "/cover (6).png",
    "/cover (7).png",
  ];

  const settingsCover = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    console.log(`Vídeo atual: ${currentVideo + 1}`);
  }, [currentVideo]);

  // Seta direita
  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer hidden md:block"
    >
      <CircleArrowRight className="text-white w-8 h-8" />
    </div>
  );

  // Seta esquerda
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer hidden md:block"
    >
      <CircleArrowLeft className="text-white w-8 h-8" />
    </div>
  );

  const settingsVideo = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    swipe: true,
    draggable: true,
    beforeChange: (current: number, next: number) => {
      setCurrentVideo(next);
    },
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = "hidden"; // bloqueia scroll
    } else {
      document.body.style.overflow = "auto"; // libera scroll
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  const sliderRef = useRef<Slider | null>(null);

  useEffect(() => {
    if (isLightboxOpen && sliderRef.current) {
      sliderRef.current.slickGoTo(currentVideo);
    }
  }, [isLightboxOpen, currentVideo]);

  return (
    <>
      <section className="sectionBox">
        {/* Cabeçalho */}
        <h2 className="sectionHeading">
          🎶 Transformações Reais de Alunos Determinados
        </h2>
        <p className="sectionSubheading">
          Veja histórias de quem começou do zero e hoje se emociona ao tocar
          seus primeiros acordes.
        </p>

        {/* Carrossel com capas de vídeos */}
        <div className="w-full max-w-6xl mx-auto px-4">
          <Slider {...settingsCover}>
            {videoCover.map((cover, idx) => (
              <div key={idx} className="px-3">
                <div
                  onClick={() => {
                    setCurrentVideo(idx); // Atualiza o estado do vídeo atual
                    setIsLightboxOpen(true); // Abre o lightbox
                  }}
                  className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-[1.02] transition duration-300"
                >
                  <Image
                    src={cover}
                    alt={`Capa do vídeo ${idx + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  {/* Ícone de play */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-full shadow-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 text-red-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Texto emocional */}
        <div className="max-w-2xl text-center mt-12 px-4">
          <p className="sectionSubheading">
            Eles também começaram com medo, com dúvidas... achando que não
            seriam capazes.
            <br />
            Hoje, cada acorde é prova de que valeu a pena começar.
            <br />
            <span className="font-semibold text-accent">
              Agora é a sua vez. 🎵
            </span>
          </p>
        </div>

        {/* Botão CTA */}
        <a href="#oferta" className="primaryButton">
          Quero viver essa transformação!
        </a>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="flex items-center justify-center fixed inset-0 w-full h-full z-30">
          {/* Fundo escuro */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-100 z-0"
            onClick={() => setIsLightboxOpen(false)}
          ></div>
          <CircleX
            className="absolute top-4 right-4 cursor-pointer text-white w-10 h-10 hover:text-warning hover:scale-110 transition-transform duration-300 ease-in-out"
            onClick={() => setIsLightboxOpen(false)}
          />

          {/* Conteúdo do lightbox */}
          <div className="relative w-full max-w-4xl mx-auto flex flex-row items-center justify-center gap-4 z-10 text-white px-4">
            {/* Player de vídeo */}
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
              <Slider
                {...settingsVideo}
                ref={sliderRef}
                initialSlide={currentVideo}
              >
                {videos.map((video, index) => (
                  <div key={index} className="relative w-full aspect-video">
                    <ReactPlayer
                      url={video}
                      className="react-player"
                      width="100%"
                      height="100%"
                      controls
                      playing={isLightboxOpen && currentVideo === index}
                      playsinline
                      config={{
                        vimeo: {
                          playerOptions: {
                            autoplay: isLightboxOpen && currentVideo === index,
                            title: 0,
                            byline: 0,
                            portrait: 0,
                          },
                        },
                      }}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProvaSocialVideo;
