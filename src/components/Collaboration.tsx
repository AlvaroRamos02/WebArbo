"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";

const engagements = [
    {
        name: "Diagnóstico",
        description: "Entendemos tu situación y definimos las prioridades con impacto real.",
        features: [
            "Mapa de procesos y fricciones",
            "Quick wins identificados",
            "Plan de acción recomendado",
        ],
        popular: false,
    },
    {
        name: "Implementación",
        description: "Ejecutamos mejoras, automatizaciones y activos digitales.",
        features: [
            "Automatizaciones conectadas",
            "Web corporativa o landing",
            "Iteraciones guiadas por resultados",
        ],
        popular: true,
    },
    {
        name: "Evolución continua",
        description: "Acompañamiento para medir, optimizar y escalar lo construido.",
        features: [
            "Optimización de conversión",
            "Ajustes de procesos",
            "Soporte y crecimiento",
        ],
        popular: false,
    },
];

export function Collaboration() {
    return (
        <section id="colaboracion" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Colaboración</p>
                    <h2 className="mt-3 text-3xl font-display font-semibold tracking-tight text-foreground sm:text-4xl">
                        Formas de trabajar contigo.
                    </h2>
                    <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                        Cada proyecto se valora según el alcance. Te proponemos una solución a medida después de conocer tu caso.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {engagements.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col p-8 bg-surface rounded-2xl border ${plan.popular
                                ? "border-primary/50 shadow-xl scale-[1.02] z-10"
                                : "border-foreground/10 shadow-sm"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                                    Más solicitado
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                                <p className="mt-4 text-foreground/70 text-sm leading-relaxed">{plan.description}</p>
                            </div>
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 text-primary shrink-0 mr-3" />
                                        <span className="text-foreground/70 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className="w-full"
                                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Hablemos de tu caso <ArrowRight size={18} className="ml-2" />
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
