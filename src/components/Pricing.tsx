"use client";

import { Check } from "lucide-react";
import { Button } from "./ui/Button";

const plans = [
    {
        name: "Landing Page",
        price: "Desde 450€",
        description: "Ideal para promocionar un servicio o producto específico.",
        features: [
            "Diseño personalizado",
            "Responsive (Móvil/Tablet)",
            "Formulario de contacto",
            "Optimización básica SEO",
            "Integración con redes sociales",
        ],
        cta: "Solicitar presupuesto",
        popular: false,
    },
    {
        name: "Web Corporativa",
        price: "Desde 850€",
        description: "Tu negocio abierto 24/7. Muestra tus servicios y genera confianza.",
        features: [
            "Hasta 5 páginas",
            "Blog / Noticias",
            "Gestor de contenidos (CMS)",
            "Optimización de velocidad",
            "Google Analytics básico",
        ],
        cta: "Solicitar presupuesto",
        popular: true,
    },
    {
        name: "Tienda Online",
        price: "Desde 1.500€",
        description: "Empieza a vender tus productos en internet de forma segura.",
        features: [
            "Catálogo de productos",
            "Pasarela de pagos (Stripe/PayPal)",
            "Panel de gestión de pedidos",
            "Formación de uso",
            "Soporte técnico 1 mes",
        ],
        cta: "Solicitar presupuesto",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="precios" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Planes pensados para pequeñas empresas
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Precios transparentes y sin costes ocultos.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`relative flex flex-col p-8 bg-white rounded-2xl border ${plan.popular
                                ? "border-primary shadow-xl scale-105 z-10"
                                : "border-gray-200 shadow-sm"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                                    Más popular
                                </div>
                            )}
                            <div className="mb-6">
                                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline text-gray-900">
                                    <span className="text-4xl font-extrabold tracking-tight">
                                        {plan.price}
                                    </span>
                                </div>
                                <p className="mt-4 text-gray-600 text-sm">{plan.description}</p>
                            </div>
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 shrink-0 mr-3" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "primary" : "outline"}
                                className="w-full"
                                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
