import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-background text-muted-foreground py-12 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/arbor-logo.svg"
                                alt="Arbor Logo"
                                fill
                                className="object-contain invert dark:invert-0"
                            />
                        </div>
                        <span className="font-mono font-bold text-foreground">Arbor_Group</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium">
                        <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
                        <a href="mailto:Arbor.webworks@gmail.com" className="hover:text-primary transition-colors">Contacto</a>
                    </div>
                </div>

                <div className="mt-8 text-center md:text-left text-xs text-muted-foreground/60 font-mono">
                    © {new Date().getFullYear()} Arbor Group. Todos los sistemas operativos.
                </div>
            </div>
        </footer>
    );
}
