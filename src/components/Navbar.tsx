"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Servicios", href: "#servicios" },
        { name: "Proyectos", href: "#proyectos" },
        { name: "Proceso", href: "#proceso" },
        { name: "Precios", href: "#precios" },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                        <Image
                            src="/arbor-logo.svg"
                            alt="Arbor Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <span className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Arbor</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}>
                        Pide presupuesto
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
                    <nav className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 hover:text-primary"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button
                            className="w-full"
                            onClick={() => {
                                setIsOpen(false);
                                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Pide presupuesto
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
