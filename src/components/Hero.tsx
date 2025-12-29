"use client";

import { Button } from "./ui/Button";
import { ArrowRight, Terminal, Cpu, Zap, Activity } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-background selection:bg-primary/20">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-primary/20 to-secondary/20 blur-[130px] rounded-full pointer-events-none mix-blend-screen opacity-60 animate-pulse [animation-duration:8s]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-40" />

      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-mono text-primary animate-fade-in backdrop-blur-sm">
              <div className="flex gap-1 h-2">
                <span className="w-0.5 h-2 bg-primary animate-[height_1s_ease-in-out_infinite]" />
                <span className="w-0.5 h-2 bg-primary animate-[height_1s_ease-in-out_infinite_0.2s]" />
                <span className="w-0.5 h-2 bg-primary animate-[height_1s_ease-in-out_infinite_0.4s]" />
              </div>
              Operaciones Digitales Optimizadas
            </div>

            <div className="space-y-4 animate-fade-in [animation-delay:200ms]">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1]">
                Más que webs, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-secondary animate-gradient-x bg-[length:200%_auto]">sistemas que facturan.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-[540px] leading-relaxed">
                Desarrollo web a medida, SEO técnico y automatización de procesos para empresas que exigen resultados. Sin plantillas, sin límites.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:400ms]">
              <Button
                size="lg"
                className="h-14 px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              >
                Empezar Transformación <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-8 text-base border-white/10 hover:bg-white/5 backdrop-blur-sm"
                onClick={() => document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Ver Arquitectura
              </Button>
            </div>

            <div className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6 animate-fade-in [animation-delay:600ms]">
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-foreground font-display">100<span className="text-primary text-lg">%</span></h3>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Core Web Vitals</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-foreground font-display">24<span className="text-primary text-lg">/7</span></h3>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Disponibilidad</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-3xl font-bold text-foreground font-display">Multi</h3>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Framework Adaptable</p>
              </div>
            </div>
          </div>

          {/* Visual/Tech Content */}
          <div className="relative animate-slide-up [animation-delay:400ms] hidden lg:block perspective-[2000px]">
            {/* Main Tech Dashboard Card */}
            <div className="relative z-20 rounded-xl border border-white/10 bg-[#0A0A0A]/90 shadow-2xl overflow-hidden backdrop-blur-md transform rotate-y-[-5deg] rotate-x-[5deg] hover:rotate-0 transition-transform duration-700 ease-out">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-xs font-mono text-muted-foreground">dashboard.analytics.tsx</div>
                <div className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary font-mono">v2.4.0</div>
              </div>

              {/* Dashboard UI Mock */}
              <div className="p-8 grid gap-6">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground font-mono mb-2">Tráfico Orgánico (SEO)</p>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold text-foreground">+127%</span>
                      <Activity className="text-green-500 h-5 w-5 mb-1" />
                    </div>
                    <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-green-500 h-full w-[85%]"></div>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                    <p className="text-xs text-muted-foreground font-mono mb-2">Conversión Lead</p>
                    <div className="flex items-end justify-between">
                      <span className="text-2xl font-bold text-foreground">8.4%</span>
                      <Zap className="text-yellow-500 h-5 w-5 mb-1" />
                    </div>
                    <div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
                      <div className="bg-yellow-500 h-full w-[65%]"></div>
                    </div>
                  </div>
                </div>

                {/* Automation Flow Mock */}
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 relative overflow-hidden group">
                  <p className="text-xs text-muted-foreground font-mono mb-4 text-center">Pipeline de Automatización</p>
                  <div className="flex items-center justify-between text-xs font-mono text-foreground/80 relative z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 rounded bg-blue-500/20 text-blue-400 border border-blue-500/30"><Terminal size={16} /></div>
                      <span>Input</span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mx-2 relative">
                      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-[ping_2s_linear_infinite]" style={{ left: '50%' }}></div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 rounded bg-purple-500/20 text-purple-400 border border-purple-500/30"><Cpu size={16} /></div>
                      <span>Process</span>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mx-2"></div>
                    <div className="flex flex-col items-center gap-2">
                      <div className="p-2 rounded bg-green-500/20 text-green-400 border border-green-500/30"><Zap size={16} /></div>
                      <span>Profit</span>
                    </div>
                  </div>

                  {/* Grid background inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>
                </div>
              </div>
            </div>

            {/* Glowing Accent behind card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
