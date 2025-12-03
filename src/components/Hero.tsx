"use client";

import { Button } from "./ui/Button";
import { ArrowRight, Zap, Code2, Palette } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                Soluciones web con <span className="text-primary">raíces sólidas</span> y crecimiento sostenible.
              </h1>
              <p className="max-w-[600px] text-lg text-gray-600 md:text-xl leading-relaxed">
                Desarrollo web profesional pensado para crecer. Sitios modernos, rápidos y escalables que convierten visitantes en clientes. Código limpio, diseño personalizado, resultados medibles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gap-2 shadow-lg shadow-blue-500/20"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Hablemos de tu proyecto <ArrowRight size={18} />
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="border border-gray-200 hover:bg-gray-50"
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver qué hago
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 pt-4 font-medium">
              <div className="flex items-center gap-2">
                <Zap size={18} className="text-blue-600" />
                <span>Rendimiento</span>
              </div>
              <div className="flex items-center gap-2">
                <Code2 size={18} className="text-blue-600" />
                <span>Código limpio</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette size={18} className="text-blue-600" />
                <span>Diseño moderno</span>
              </div>
            </div>
          </div>

          {/* Tech/Code Visual */}
          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="relative rounded-xl bg-gray-900 shadow-2xl overflow-hidden border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs text-gray-400 font-mono ml-2">developer_workspace — bash</div>
              </div>
              <div className="p-6 font-mono text-sm md:text-base">
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-300">init-project --secure</span>
                  </div>
                  <div className="text-gray-400 pl-4">
                    Initializing secure environment...<br />
                    Installing SSL certificates...<br />
                    Configuring firewalls...<br />
                    <span className="text-green-400">✓ System secured.</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-300">deploy --production</span>
                  </div>
                  <div className="text-gray-400 pl-4">
                    Optimizing assets...<br />
                    Minifying code...<br />
                    <span className="text-green-400">✓ Deployed successfully.</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <span className="text-green-400">➜</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-300 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-gray-100 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Zap className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase">Velocidad</p>
                  <p className="text-sm font-bold text-gray-900">Ultra Rápido</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
