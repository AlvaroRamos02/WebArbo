"use client";

import { Button } from "./ui/Button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Automatización Logística Global",
        category: "Automatización & Backend",
        description: "Sistema para empresa de transporte que procesa 5.000+ pedidos diarios. Eliminación total de entrada manual de datos mediante OCR y webhooks.",
        stats: ["40h/sem ahorradas", "0% Error Humano"],
        tech: "Python / AWS Lambda / n8n"
    },
    {
        title: "SaaS B2B para Sector Legal",
        category: "Desarrollo de Producto",
        description: "Plataforma completa de gestión de expedientes con firma digital integrada. Diseño de arquitectura multi-tenant segura y escalable.",
        stats: ["+2.000 Usuarios Activos", "Certificación ISO 27001"],
        tech: "React / Node.js / Docker"
    },
    {
        title: "E-Commerce de Alta Carga",
        category: "Rendimiento Web",
        description: "Optimización crítica para Black Friday. Refactorización de componentes clave y estrategia de caché agresiva para soportar picos de tráfico.",
        stats: ["300% Tráfico Soportado", "Carga <0.8s"],
        tech: "Next.js / Redis / Shopify"
    },
];

export function Projects() {
    return (
        <section id="proyectos" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-xs font-mono text-red-400 mb-6 border border-red-500/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </span>
                            Datos de Mercado 2024
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
                            Lo que no se mide, <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">se pierde.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                            La ineficiencia digital cuesta clientes. Transformamos tu negocio en tres ejes medibles: Operativa, Visibilidad y Estabilidad.
                        </p>
                    </div>

                    {/* Pro Data Visual: Abstract Graph */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                        <div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] p-6 md:p-8 backdrop-blur-xl">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Impacto Financiero</div>
                                    <div className="text-3xl font-bold text-foreground">55%</div>
                                    <div className="text-sm text-red-400 font-mono mt-1">Churn Rate por mala UX</div>
                                </div>
                                <div className="h-12 w-32 flex items-end gap-1">
                                    <div className="w-full bg-red-500/20 h-[30%] rounded-t-sm"></div>
                                    <div className="w-full bg-red-500/40 h-[50%] rounded-t-sm"></div>
                                    <div className="w-full bg-red-500/60 h-[40%] rounded-t-sm"></div>
                                    <div className="w-full bg-red-500/80 h-[70%] rounded-t-sm"></div>
                                    <div className="w-full bg-red-500 h-[90%] rounded-t-sm animate-pulse"></div>
                                </div>
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-[10px] text-muted-foreground font-mono mb-1">TIEMPO DE CARGA</div>
                                    <div className="text-sm font-bold text-white">&gt; 3 Segundos</div>
                                </div>
                                <div>
                                    <div className="text-[10px] text-muted-foreground font-mono mb-1">CONVERSIÓN</div>
                                    <div className="text-sm font-bold text-red-400">-20% Ventas</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Compact "System Overview" Dashboard */}
                <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden divide-y md:divide-y-0 md:divide-x divide-white/10 grid md:grid-cols-3">

                    {/* Item 1: ERP/CRM */}
                    <div className="p-8 group hover:bg-white/[0.02] transition-colors">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                                <span className="font-bold text-lg">01</span>
                            </div>
                            <div className="px-2 py-1 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] text-blue-400 font-mono uppercase">
                                Eficiencia
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Automatización ERP y CRM</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Eliminación de tareas repetitivas. Facturación automática y sincronización de clientes total.
                        </p>
                        <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                            <div>
                                <div className="text-[10px] text-muted-foreground">AHORRO</div>
                                <div className="text-sm font-mono text-white">40h/mes</div>
                            </div>
                            <div className="h-8 w-px bg-white/10"></div>
                            <div>
                                <div className="text-[10px] text-muted-foreground">ERROR</div>
                                <div className="text-sm font-mono text-white">0%</div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: Visual Webs */}
                    <div className="p-8 group hover:bg-white/[0.02] transition-colors">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
                                <span className="font-bold text-lg">02</span>
                            </div>
                            <div className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-400 font-mono uppercase">
                                Alcance
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Webs Visuales</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Diseño de alto impacto visual para maximizar la retención y llegar a un mayor público.
                        </p>
                        <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                            <div>
                                <div className="text-[10px] text-muted-foreground">VISITAS</div>
                                <div className="text-sm font-mono text-white">+200%</div>
                            </div>
                            <div className="h-8 w-px bg-white/10"></div>
                            <div>
                                <div className="text-[10px] text-muted-foreground">LOOK</div>
                                <div className="text-sm font-mono text-white">Pro</div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Support */}
                    <div className="p-8 group hover:bg-white/[0.02] transition-colors">
                        <div className="flex justify-between items-start mb-6">
                            <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
                                <span className="font-bold text-lg">03</span>
                            </div>
                            <div className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[10px] text-green-400 font-mono uppercase">
                                Soporte
                            </div>
                        </div>
                        <h3 className="text-lg font-bold text-foreground mb-2">Asesoramiento Total</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                            Hosting personalizado y guía paso a paso. No te lies: nosotros gestionamos la técnica.
                        </p>
                        <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                            <div>
                                <div className="text-[10px] text-muted-foreground">UPTIME</div>
                                <div className="text-sm font-mono text-white">99.9%</div>
                            </div>
                            <div className="h-8 w-px bg-white/10"></div>
                            <div>
                                <div className="text-[10px] text-muted-foreground">RESPUESTA</div>
                                <div className="text-sm font-mono text-white">&lt;1h</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
