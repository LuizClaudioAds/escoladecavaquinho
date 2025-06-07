import React from "react";
import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <Image
          src="/logo2.svg"
          alt="Logo"
          width={112}
          height={0}
          className="w-28 h-auto"
        />

        {/* Direitos reservados */}
        <p className="text-sm">
          © 2024 escoladecavaquinho.org – todos os direitos reservados.
        </p>

        {/* Navegação */}
        <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          <li>
            <a href="/privacy" className="hover:underline">
              Política de Privacidade
            </a>
          </li>
          <li className="hidden sm:inline">|</li>
          <li>
            <a href="/terms" className="hover:underline">
              Termos de Serviço
            </a>
          </li>
          <li className="hidden sm:inline">|</li>
          <li>
            <a href="/contact" className="hover:underline">
              Fale Conosco
            </a>
          </li>
        </ul>

        {/* Redes sociais */}
        <div className="flex gap-4 mt-2">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
