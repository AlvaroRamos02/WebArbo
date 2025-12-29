import { MessageSquare, Map, Sparkles, TrendingUp } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Descubrimiento",
        description: "Entendemos tu negocio, objetivos y puntos críticos antes de proponer nada.",
        icon: MessageSquare,
    },
    {
        number: "02",
        title: "Mapa y prioridades",
        description: "Definimos el plan: quick wins, mejoras clave y el orden correcto.",
        icon: Map,
    },
    {
        number: "03",
        title: "Implementación",
        description: "Construimos procesos, automatizaciones y activos digitales con foco en adopción.",
        icon: Sparkles,
    },
    {
        number: "04",
        title: "Medición y mejora",
        description: "Medimos, ajustamos y dejamos un sistema que siga mejorando.",
        icon: TrendingUp,
    },
];

export function Process() {
    return (
        <section
            id="metodo"
            className="relative py-20 md:py-28 text-white bg-[#14251E] overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(216,168,102,0.2),transparent_60%),radial-gradient(700px_circle_at_85%_20%,rgba(31,77,58,0.35),transparent_55%)]" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="text-center mb-16">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Método</p>
                    <h2 className="mt-4 text-3xl font-display font-semibold tracking-tight sm:text-4xl">
                        Un proceso simple, pensado para moverse rápido.
                    </h2>
                    <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                        Sin tecnicismos ni sorpresas. Así trabajaremos para que todo quede claro desde el primer día.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-white/10 -z-10" />

                    {steps.map((step) => (
                        <div key={step.number} className="relative">
                            <div className="w-24 h-24 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/10 mb-6 z-10">
                                <step.icon className="text-secondary" size={32} />
                            </div>
                            <div className="text-center">
                                <span className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-2 block">
                                    Paso {step.number}
                                </span>
                                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                <p className="text-white/70 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
