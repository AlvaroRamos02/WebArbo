"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { Send, Terminal } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "consulting",
        message: "",
        privacy: false
    });

    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        // Frontend validation
        if (formData.name.trim().length < 2) {
            setStatus("error");
            setErrorMessage("El nombre debe tener al menos 2 caracteres.");
            return;
        }
        if (formData.message.trim().length < 10) {
            setStatus("error");
            setErrorMessage("Por favor, detalla un poco más tu consulta (mín. 10 caracteres).");
            return;
        }

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    type: formData.type,
                    message: formData.message
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al enviar el mensaje");
            }

            setStatus("success");
            setFormData({
                name: "",
                email: "",
                type: "consulting",
                message: "",
                privacy: false
            });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error) {
            setStatus("error");
            setErrorMessage(error instanceof Error ? error.message : "Hubo un error al enviar el mensaje.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <section id="contacto" className="py-24 bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-xs font-mono text-primary mb-6">
                            <span className="animate-pulse">●</span> Contacto
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight text-foreground mb-6">
                            Hablemos de código y negocio.
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                            ¿Listo para escalar tu infraestructura o automatizar flujos de trabajo? No hacemos presentaciones de ventas, hacemos diagnósticos de ingeniería.
                        </p>

                        <div className="p-6 rounded-xl border border-white/5 bg-white/[0.02] max-w-sm">
                            <div className="flex items-center gap-3 mb-4 text-foreground font-mono text-sm">
                                <Terminal size={16} className="text-primary" />
                                <span>Contacto Directo</span>
                            </div>
                            <p className="text-muted-foreground text-sm mb-2">arbor.group.contact@gmail.com</p>
                            <p className="text-muted-foreground text-sm">Madrid, ES</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {status === "success" && (
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-500 text-sm font-mono">
                                ✅ Mensaje recibido. Inicializando protocolo de respuesta...
                            </div>
                        )}
                        {status === "error" && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-mono">
                                ❌ {errorMessage}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Nombre</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors text-lg"
                                    placeholder="Nombre Apellido"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors text-lg"
                                    placeholder="nombre@empresa.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="type" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Tipo de Consulta</label>
                            <select
                                id="type"
                                name="type"
                                className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-lg [&>option]:bg-background"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <option value="consulting">Consultoría Técnica</option>
                                <option value="development">Desarrollo Web / App</option>
                                <option value="automation">Automatización de Procesos</option>
                                <option value="seo">SEO & Posicionamiento</option>
                                <option value="other">Otro</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Detalles del Proyecto</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-foreground placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
                                placeholder="Cuéntanos sobre tu stack tecnológico o necesidades..."
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full md:w-auto mt-4 gap-2"
                            disabled={status === "loading" || status === "success"}
                        >
                            {status === "loading" ? "Procesando..." : status === "success" ? "Mensaje Enviado" : "Iniciar Conversación"}
                            {status === "idle" && <Send size={16} />}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
