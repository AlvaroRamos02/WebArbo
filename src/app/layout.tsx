import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Arbor Group | Digitalización y desarrollo web",
  description:
    "Consultoría tecnológica, desarrollo web y automatización de procesos para empresas que buscan excelencia.",
  icons: {
    icon: "/arbor-logo.svg",
    shortcut: "/arbor-logo.svg",
    apple: "/arbor-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary`}>
        {children}
      </body>
    </html>
  );
}
