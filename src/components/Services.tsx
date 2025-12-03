import { Code, ShoppingCart, Wrench, BarChart } from "lucide-react";

const services = [
    {
        title: "Desarrollo Web",
        description: "Sitios web profesionales que cargan rápido y se ven increíbles en cualquier dispositivo. Diseñados para convertir.",
        icon: Code,
    },
    {
        title: "Tiendas Online",
        description: "E-commerce completo y listo para vender. Gestión fácil, pagos seguros y diseño que invita a comprar.",
        icon: ShoppingCart,
    },
    {
        title: "Mantenimiento Web",
        description: "Tu web siempre actualizada, segura y funcionando. Me encargo de todo para que tú te centres en tu negocio.",
        icon: Wrench,
    },
    {
        title: "Optimización SEO",
        description: "Hago que tu web aparezca en Google cuando tus clientes buscan lo que ofreces. Más visibilidad, más ventas.",
        icon: BarChart,
    },
];

export function Services() {
    return (
        <section id="servicios" className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Servicios que impulsan tu negocio
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Soluciones web profesionales diseñadas para empresas que quieren crecer.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service) => (
                        <div
                            key={service.title}
                            className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                                <service.icon className="text-primary group-hover:scale-110 transition-transform duration-300" size={24} />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
