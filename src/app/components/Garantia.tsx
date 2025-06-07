import React from "react";
import Image from "next/image";

interface GarantiaProps {
  imageSrc?: string; // URL da imagem da garantia
  altText?: string; // Texto alternativo para a imagem
}

const Garantia: React.FC<GarantiaProps> = ({
  imageSrc = "/garantiaicon.png",
  altText = "Imagem representando a garantia",
}) => (
  <section className="sectionBox px-4 sm:px-8 lg:px-16">
    <div className="flex flex-col lg:flex-row items-center max-w-6xl gap-10 lg:gap-20 mx-auto">
      {/* Imagem */}
      <div className="w-full lg:w-1/2 flex justify-center relative">
        <Image
          src={imageSrc}
          alt={altText}
          width={400}
          height={300}
          className="rounded-lg w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
          style={{ height: "auto" }}
          sizes="(max-width: 768px) 100vw, 400px"
        />
        {/* Gradiente para o fade-out */}
        <div className="absolute bottom-0 left-0 w-full h-1/5 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-lg"></div>
      </div>

      {/* Texto */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <h2 className="sectionHeading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          Você tem 15 dias para testar sem risco
        </h2>
        <p className="sectionSubheading text-sm sm:text-base lg:text-lg text-gray-700 mb-6">
          Acesse todas as aulas, teste o método com calma e veja os resultados
          por si mesmo. Se não ficar satisfeito, devolvemos 100% do seu dinheiro
          dentro do prazo de 15 dias. Sem perguntas, sem complicações.
        </p>
        <a href="#oferta" className="primaryButton w-full sm:w-auto">
          Quero começar sem risco!
        </a>
        <p className="text-sm text-gray-500 mt-4">
          * Garantia válida por 15 dias após a compra.
        </p>
      </div>
    </div>
  </section>
);

export default Garantia;
