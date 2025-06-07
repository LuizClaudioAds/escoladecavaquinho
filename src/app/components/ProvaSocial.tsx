"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CircleArrowLeft, CircleArrowRight, CircleX } from "lucide-react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

interface ProvaSocialProps {
  title?: string;
  subtitle?: string;
  videoUrl?: string;
  videoId?: string;
  ctaText?: string;
}

const ProvaSocial: React.FC<ProvaSocialProps> = ({
  title = "Nunca é tarde para realizar um sonho",
  subtitle = "Veja como o Sr. João, aos 65 anos, começou a tocar cavaquinho e transformou sua vida com música e alegria.",
  videoUrl = "https://vimeo.com/1051335254/06b9d6ef26?ts=0&share=copy",
  //videoId = videoUrl.split("/embed/")[1],
  ctaText = "Quero começar agora",
}) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

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

    // Cleanup (caso o componente seja desmontado)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLightboxOpen]);

  return (
    <>
      <section className="w-full bg-neutral-light py-12 px-4 sm:px-8 lg:px-16 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 text-center">
          {/* Título */}
          <h2 className="sectionHeading">{title}</h2>

          {/* Subtítulo */}
          <p className="sectionSubheading">{subtitle}</p>

          {/* Miniatura do vídeo */}
          <div
            className="w-full aspect-video mb-6 rounded-xl overflow-hidden shadow-lg bg-black cursor-pointer relative"
            onClick={() => setIsLightboxOpen(true)}
          >
            <Image
              src="/miniaturaprovasocial1.png"
              alt="Miniatura do vídeo"
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

          {/* Botão CTA */}
          <a href="#oferta" className="primaryButton">
            {ctaText}
          </a>
        </div>
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
            className="absolute top-4 right-4 cursor-pointer text-white w-10 h-10 hover:text-warning hover:scale-110 transition-transform duration-300 ease-in-out  "
            onClick={() => setIsLightboxOpen(false)}
          />

          {/* Conteúdo do lightbox */}
          <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 z-10 text-white px-4">
            {/* Botão de fechar */}
            <CircleArrowLeft className="cursor-pointer hidden" />
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black cursor-pointer relative">
              <ReactPlayer
                url={videoUrl}
                className="react-player"
                width="100%"
                height="100%"
                controls
                playing
                muted
                playsinline
                config={{
                  vimeo: {
                    playerOptions: {
                      autoplay: true,
                      title: false,
                      byline: false,
                      portrait: false,
                    },
                  },
                }}
              />
            </div>
            <CircleArrowRight className="cursor-pointer hidden" />
          </div>
        </div>
      )}
    </>
  );
};

export default ProvaSocial;
