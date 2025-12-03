import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Hablamos",
        description: "Me cuentas sobre tu negocio, tus objetivos y qué necesitas exactamente.",
        icon: MessageSquare,
    },
    {
        number: "02",
        title: "Propuesta",
        description: "Diseño una estructura y presupuesto a medida para tu proyecto.",
        icon: PenTool,
    },
    {
        number: "03",
        title: "Desarrollo",
        description: "Construyo tu web paso a paso, manteniéndote informado del progreso.",
        icon: Code2,
    },
    {
        number: "04",
        title: "Lanzamiento",
        description: "Publicamos tu web, la probamos y te enseño a usarla si es necesario.",
        icon: Rocket,
    },
];

export function Process() {
    return (
        <section id="proceso" className="py-16 md:py-24 bg-gray-900 text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Un proceso simple y claro
                    </h2>
                    <p className="mt-4 text-lg text-gray-400">
                        Sin tecnicismos ni sorpresas. Así trabajaremos juntos.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10" />

                    {steps.map((step) => (
                        <div key={step.number} className="relative">
                            <div className="w-24 h-24 mx-auto bg-gray-800 rounded-full flex items-center justify-center border-4 border-gray-900 mb-6 z-10">
                                <step.icon className="text-primary" size={32} />
                            </div>
                            <div className="text-center">
                                <span className="text-sm font-bold text-primary tracking-wider uppercase mb-2 block">
                                    Paso {step.number}
                                </span>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
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
