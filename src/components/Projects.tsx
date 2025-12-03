import { Button } from "./ui/Button";
import { Laptop, ShoppingCart, Bot } from "lucide-react";

const projects = [
    {
        title: "Webs Profesionales",
        category: "Desarrollo a Medida",
        description: "Sitios corporativos rápidos, elegantes y optimizados para convertir visitantes en clientes.",
        icon: Laptop,
        color: "bg-blue-50 text-blue-600",
    },
    {
        title: "E-Commerce",
        category: "Tiendas Online",
        description: "Plataformas de venta completas con gestión de productos, pagos seguros y diseño que vende.",
        icon: ShoppingCart,
        color: "bg-green-50 text-green-600",
    },
    {
        title: "Aplicaciones Web",
        category: "Desarrollo Avanzado",
        description: "Herramientas web personalizadas para automatizar procesos y mejorar la eficiencia de tu negocio.",
        icon: Bot,
        color: "bg-purple-50 text-purple-600",
    },
];

export function Projects() {
    return (
        <section id="proyectos" className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Más que simples páginas web
                        </h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
                            Desarrollo soluciones completas para modernizar tu negocio.
                        </p>
                    </div>
                    <Button variant="outline">Ver portfolio completo</Button>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.title} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-2">
                            <div className={`h-48 ${project.color} flex flex-col items-center justify-center gap-4 transition-all duration-300 group-hover:scale-105`}>
                                <project.icon size={48} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
                                <span className="font-semibold opacity-90">{project.title}</span>
                            </div>

                            <div className="p-6">
                                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                                    {project.category}
                                </span>
                                <h3 className="mt-2 text-xl font-bold text-gray-900">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-gray-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
