import { Globe, Workflow, Database, Cpu, Lock, Terminal } from "lucide-react";

const services = [
    {
        title: "Desarrollo Web & Apps",
        description: "Aplicaciones robustas y escalables con tecnologías modernas (React, Vue, Node.js). Arquitectura limpia desde el día uno.",
        icon: Globe,
        tech: ["React / Vue", "Node.js", "Modern Stack"]
    },
    {
        title: "Automatización de Procesos",
        description: "Elimina la carga operativa manual. Creamos flujos de trabajo a medida que integran todo tu software.",
        icon: Workflow,
        tech: ["n8n", "Python", "Integraciones API"]
    },
    {
        title: "SEO & Posicionamiento",
        description: "Estrategia técnica y de contenidos para que tu negocio sea visible. Optimización de velocidad y estructura.",
        icon: Database,
        tech: ["SEO Técnico", "Auditoría", "Analytics"]
    },
    {
        title: "Ingeniería de Rendimiento",
        description: "Optimización de Core Web Vitals, tiempos de carga y renderizado. Hacemos que tu presencia digital vuele.",
        icon: Cpu,
        tech: ["Web Vitals", "CDN", "Caché"]
    },
    {
        title: "Seguridad Digital",
        description: "Implementación de mejores prácticas para proteger tus datos y usuarios. HTTPS, Autenticación y auditoría.",
        icon: Lock,
        tech: ["Auth", "Encriptación", "Seguridad"]
    },
    {
        title: "Consultoría Tecnológica",
        description: "Actuamos como tu CTO externo. Decisiones estratégicas respaldadas por experiencia en ingeniería.",
        icon: Terminal,
        tech: ["Estrategia", "Code Review", "Mentoring"]
    },
];

export function Services() {
    return (
        <section id="servicios" className="relative py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 relative">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary mb-6">
                        <span className="text-primary">01.</span> Capacidades
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground max-w-2xl">
                        Ingeniería y soluciones para <span className="text-primary">problemas complejos.</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="group relative p-6 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                                <service.icon size={24} />
                            </div>

                            <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                                {service.title}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed mb-6 h-20">
                                {service.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                                {service.tech.map((t) => (
                                    <span key={t} className="text-xs font-mono text-primary/80 bg-primary/5 px-2 py-1 rounded">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
