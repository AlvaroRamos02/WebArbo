import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-4">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/arbor-logo.svg"
                                    alt="Arbor Logo"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            Arbor
                        </Link>
                        <p className="text-sm max-w-xs leading-relaxed">
                            Raíces sólidas, crecimiento sostenible. Ayudamos a empresas a crecer en internet con soluciones web profesionales, modernas y seguras.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="#" className="hover:text-white transition-colors">Aviso Legal</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Política de Cookies</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Contacto</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="mailto:Arbor.webworks@gmail.com" className="hover:text-white transition-colors">Arbor.webworks@gmail.com</a></li>
                            <li>Madrid, España</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Arbor. Todos los derechos reservados.</p>
                    <p>Desarrollado con Next.js y desplegado en Vercel.</p>
                </div>
            </div>
        </footer>
    );
}
