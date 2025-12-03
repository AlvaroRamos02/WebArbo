import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Arbor | Desarrollo Web Profesional",
  description: "Soluciones web profesionales con raíces sólidas y crecimiento sostenible. Diseño y desarrollo de páginas web modernas para empresas y autónomos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
