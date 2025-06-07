import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{html,ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E40AF", // Azul Royal (bg e CTA)
          light: "#3B82F6", // Azul claro para hover ou bordas
          contrast: "#FFFFFF", // Texto em fundo primário
        },
        secondary: {
          DEFAULT: "#7C3AED", // Roxo Uva
          light: "#C4B5FD",
        },
        accent: {
          DEFAULT: "#10B981", // Verde Esmeralda (bônus, grátis)
          light: "#D1FAE5",
        },
        warning: {
          DEFAULT: "#DC2626", // Vermelho escassez
          light: "#FEE2E2",
        },
        neutral: {
          light: "#F9FAFB", // Fundo geral
          DEFAULT: "#6B7280", // Texto secundário
          dark: "#111827", // Texto principal
        },
      },
    },
  },
  plugins: [],
};

export default config;
