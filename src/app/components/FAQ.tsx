"use client";
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Preciso ter cavaquinho para começar?",
    answer:
      "Não, você pode começar aprendendo a teoria e as técnicas básicas. No entanto, recomendamos adquirir um cavaquinho para praticar e evoluir mais rapidamente.",
  },
  {
    question: "E se eu nunca toquei nenhum instrumento?",
    answer:
      "Sem problemas! O curso foi desenvolvido para iniciantes absolutos, com explicações claras e passo a passo.",
  },
  {
    question: "O curso é ao vivo ou gravado?",
    answer:
      "O curso é 100% gravado, permitindo que você assista no seu ritmo e no horário que preferir.",
  },
  {
    question: "Por quanto tempo terei acesso?",
    answer:
      "Você terá acesso vitalício ao curso, podendo revisitar as aulas sempre que quiser.",
  },
  {
    question: "E se eu não gostar do curso?",
    answer:
      "Você tem 15 dias para testar o curso sem risco. Se não gostar, devolvemos 100% do seu dinheiro.",
  },
  {
    question: "Como funciona o suporte?",
    answer:
      "Você terá acesso a um canal exclusivo para tirar dúvidas diretamente com o professor.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="sectionBox px-4 sm:px-8 lg:px-16">
      <h2 className="sectionHeading text-2xl sm:text-3xl lg:text-4xl text-center mb-8">
        Perguntas Frequentes
      </h2>

      <div className="w-full max-w-4xl space-y-4 mx-auto">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`bg-white border rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                isOpen
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-gray-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 py-4 text-left text-base sm:text-lg font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                aria-expanded={isOpen}
                aria-controls={`faq-${index}`}
                id={`faq-button-${index}`}
              >
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                id={`faq-${index}`}
                role="region"
                aria-labelledby={`faq-button-${index}`}
                className={`px-4 sm:px-6 text-gray-600 transition-all duration-300 ${
                  isOpen
                    ? "max-h-[300px] py-4 opacity-100"
                    : "max-h-0 py-0 opacity-0"
                } overflow-hidden`}
                aria-hidden={!isOpen}
                tabIndex={isOpen ? 0 : -1}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>

      <a
        href="#oferta"
        className="primaryButton mt-10 flex items-center gap-2 text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4"
      >
        Inscreva-se agora mesmo!
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
    </section>
  );
};

export default FAQ;
