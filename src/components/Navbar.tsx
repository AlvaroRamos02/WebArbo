"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Terminal } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Servicios", href: "#servicios" },
        { name: "Método", href: "#metodo" },
        { name: "Proyectos", href: "#proyectos" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                        <Image
                            src="/arbor-logo.svg"
                            alt="Arbor Logo"
                            fill
                            className="object-contain invert dark:invert-0"
                        />
                    </div>
                    <span className="text-lg font-mono font-bold tracking-tight text-foreground">
                        ArborGroup
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors font-mono"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button
                        variant="outline"
                        className="font-mono text-xs border-primary/20 hover:bg-primary/10 hover:text-primary"
                        onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        Iniciar_Proyecto()
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground/70 transition-colors hover:text-primary"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-b border-white/5 bg-background px-4 py-8 animate-fade-in">
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-foreground hover:text-primary font-mono"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            className="w-full mt-4 font-mono"
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Iniciar_Proyecto()
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
