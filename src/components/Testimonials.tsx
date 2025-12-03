import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Laura García",
        role: "Dueña de 'Café & Libros'",
        content: "Álvaro entendió perfectamente lo que necesitaba. Mi web ahora transmite la calidez de mi cafetería y los clientes pueden ver el menú fácilmente.",
    },
    {
        name: "Carlos Méndez",
        role: "Director de 'Méndez Reformas'",
        content: "Desde que lanzamos la nueva web, las solicitudes de presupuesto han aumentado un 40%. Muy profesional y atento en todo el proceso.",
    },
    {
        name: "Ana Ruiz",
        role: "Psicóloga",
        content: "Necesitaba algo sencillo para que mis pacientes pudieran contactarme. El resultado fue limpio, rápido y muy fácil de usar.",
    },
];

export function Testimonials() {
    return (
        <section id="opiniones" className="py-16 md:py-24 bg-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Lo que dicen mis clientes
                    </h2>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm border border-blue-100"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                            <div>
                                <p className="font-bold text-gray-900">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
