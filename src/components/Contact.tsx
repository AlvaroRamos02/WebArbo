"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "web-corporativa",
        budget: "menos-500",
        message: "",
        privacy: false,
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // Validación adicional en el frontend
        if (formData.name.trim().length < 2) {
            setStatus("error");
            setErrorMessage("El nombre debe tener al menos 2 caracteres");
            return;
        }

        if (formData.message.trim().length < 10) {
            setStatus("error");
            setErrorMessage("El mensaje debe tener al menos 10 caracteres");
            return;
        }

        if (!formData.privacy) {
            setStatus("error");
            setErrorMessage("Debes aceptar la política de privacidad");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    type: formData.type,
                    budget: formData.budget,
                    message: formData.message.trim(),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                // Manejar diferentes códigos de error
                if (response.status === 429) {
                    throw new Error("Demasiadas solicitudes. Por favor, espera un momento.");
                }
                throw new Error(data.error || "Error al enviar el mensaje");
            }

            setStatus("success");
            // Limpiar formulario
            setFormData({
                name: "",
                email: "",
                type: "web-corporativa",
                budget: "menos-500",
                message: "",
                privacy: false,
            });

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Error desconocido");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    return (
        <section id="contacto" className="py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6 max-w-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        ¿Hablamos?
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Cuéntame qué tienes en mente. Sin compromiso. Te responderé yo mismo en menos de 24h.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    {status === "success" && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                            ✓ ¡Mensaje enviado! Te responderé pronto.
                        </div>
                    )}

                    {status === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                            ✗ {errorMessage}
                        </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-900">
                                Nombre
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                minLength={2}
                                maxLength={100}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleChange}
                                disabled={status === "loading"}
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-900">
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                maxLength={254}
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                placeholder="tu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={status === "loading"}
                            />
                        </div>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="space-y-2">
                            <label htmlFor="type" className="text-sm font-medium text-gray-900">
                                Tipo de proyecto
                            </label>
                            <select
                                id="type"
                                name="type"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={formData.type}
                                onChange={handleChange}
                                disabled={status === "loading"}
                            >
                                <option value="landing">Landing Page</option>
                                <option value="web-corporativa">Web Corporativa</option>
                                <option value="tienda">Tienda Online</option>
                                <option value="otro">Otro</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="budget" className="text-sm font-medium text-gray-900">
                                Presupuesto aproximado
                            </label>
                            <select
                                id="budget"
                                name="budget"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                value={formData.budget}
                                onChange={handleChange}
                                disabled={status === "loading"}
                            >
                                <option value="menos-500">Menos de 500€</option>
                                <option value="500-1000">500€ - 1000€</option>
                                <option value="1000-2000">1000€ - 2000€</option>
                                <option value="mas-2000">Más de 2000€</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-900">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            minLength={10}
                            maxLength={2000}
                            rows={4}
                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                            placeholder="Cuéntame un poco más sobre tu proyecto..."
                            value={formData.message}
                            onChange={handleChange}
                            disabled={status === "loading"}
                        />
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            required
                            className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                            checked={formData.privacy}
                            onChange={handleChange}
                            disabled={status === "loading"}
                        />
                        <label htmlFor="privacy" className="text-sm text-gray-500">
                            He leído y acepto la <a href="#" className="text-primary hover:underline">política de privacidad</a>.
                        </label>
                    </div>

                    <Button
                        type="submit"
                        className="w-full"
                        size="lg"
                        disabled={status === "loading"}
                    >
                        {status === "loading" ? "Enviando..." : "Enviar consulta"}
                    </Button>
                </form>
            </div>
        </section>
    );
}
