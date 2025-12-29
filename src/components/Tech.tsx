import { Code2, Gauge, ShieldCheck, LineChart } from "lucide-react";

const highlights = [
    {
        title: "Código limpio y mantenible",
        description: "Arquitectura clara, componentes reutilizables y escalabilidad real.",
        icon: Code2,
    },
    {
        title: "Rendimiento y Core Web Vitals",
        description: "Sitios rápidos, estables y optimizados para la experiencia de usuario.",
        icon: Gauge,
    },
    {
        title: "SEO técnico + medición",
        description: "Estructura, indexación y analítica para saber qué convierte y qué no.",
        icon: LineChart,
    },
    {
        title: "Seguridad y buenas prácticas",
        description: "Buenas prácticas desde el desarrollo hasta el despliegue y mantenimiento.",
        icon: ShieldCheck,
    },
];

export function Tech() {
    return (
        <section id="tecnologia" className="relative py-20 md:py-28 bg-white">
            <div className="absolute inset-0 hero-aurora opacity-35 pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
                    <div className="space-y-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Desarrollo web</p>
                        <h2 className="text-3xl font-display font-semibold tracking-tight text-foreground sm:text-4xl">
                            Tecnología que se nota desde el primer clic.
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            No es solo diseño. Construimos webs y landing pages con criterio técnico para que sean rápidas, seguras y fáciles de evolucionar.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {highlights.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 rounded-2xl border border-foreground/10 bg-white/80 p-5 shadow-sm"
                                >
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                                        <p className="mt-2 text-sm text-foreground/70">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="glass-card rounded-2xl border border-white/70 p-6 shadow-xl">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-foreground/60 font-semibold">
                            Stack & enfoque
                            <span className="rounded-full bg-secondary/20 px-3 py-1 text-secondary-foreground">Moderno</span>
                        </div>
                        <div className="mt-6 space-y-4 text-sm text-foreground/70 font-mono">
                            <div className="rounded-xl bg-white/70 p-4 border border-foreground/10">
                                <p>$ next build --turbo</p>
                                <p className="text-foreground/50">Optimizing bundles and routes...</p>
                                <p className="text-primary">✓ Build completed in 1.9s</p>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    "Next.js + React",
                                    "Tailwind CSS",
                                    "SEO técnico",
                                    "Analítica clara",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-full border border-foreground/10 bg-white/70 px-4 py-2 text-xs font-semibold text-foreground/70"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <p className="text-xs text-foreground/50">
                                Todo lo que construimos está pensado para escalar con tu negocio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
