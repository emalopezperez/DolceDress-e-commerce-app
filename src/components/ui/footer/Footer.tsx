"use client";

import type React from "react";

import Link from "next/link";
import { Scissors } from "lucide-react";

const navigation = {
  tienda: [
    { name: "Productos", href: "/collections" },
    { name: "Camisas", href: "/collections" },
    { name: "Camperas", href: "/collections" },
    { name: "Trajes", href: "/collections" },
  ],
  ayuda: [
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
    { name: "Envíos", href: "/envios" },
  ],
  compañia: [
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Términos y Condiciones", href: "/terms" },
    { name: "Devoluciones", href: "/returns" },
  ],

  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 3.667h-3.533v7.98H9.101z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <div className="w-full bg-[#020617] relative">
      {/* Dark Sphere Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#020617",
          backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
          backgroundSize: "32px 32px, 32px 32px, 100% 100%",
        }}
      />
      <footer className="relative overflow-hidden ">
        <div
          className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
          aria-hidden="true">
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-full">
            <div
              className="w-full h-full opacity-10"
              style={{
                background:
                  "radial-gradient(ellipse at bottom, rgba(249, 115, 22, 0.15) 0%, rgba(20, 184, 166, 0.1) 50%, transparent 70%)",
                filter: "blur(60px)",
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-12 border-b border-slate-800">
            <div className="lg:col-span-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2.5 mb-5 group">
                <div className="relative">
                  <Scissors className="w-7 h-7 text-gray-400 group-hover:rotate-12 transition-all duration-300 group-hover:scale-110 group-hover:text-white" />
                  <div className="absolute inset-0 bg-gray-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <div>
                  <h2 className="font-title text-xl font-bold text-white">
                    DolceDress
                  </h2>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm font-light">
                Moda masculina contemporánea. Trajes, camisas, camperas y accesorios que definen tu estilo con elegancia atemporal.
              </p>
              <div className="flex items-center gap-3">
                {navigation.social.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group relative p-2.5 text-slate-400 hover:text-white transition-all duration-300 rounded-lg hover:bg-slate-800/70 hover:scale-110 hover:shadow-lg hover:shadow-gray-500/10">
                    {item.icon({
                      className: "h-5 w-5 relative z-10",
                    })}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-500/0 to-gray-400/0 group-hover:from-gray-500/5 group-hover:to-gray-400/5 rounded-lg transition-all duration-300" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-8 gap-8 lg:gap-12">
              <div>
                <h3 className="font-title text-sm font-semibold text-white mb-4 tracking-wide">
                  Tienda
                </h3>
                <ul className="space-y-3">
                  {navigation.tienda.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group relative inline-block text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light">
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-title text-sm font-semibold text-white mb-4 tracking-wide">
                  Ayuda
                </h3>
                <ul className="space-y-3">
                  {navigation.ayuda.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group relative inline-block text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light">
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-title text-sm font-semibold text-white mb-4 tracking-wide">
                  Información
                </h3>
                <ul className="space-y-3">
                  {navigation.compañia.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="group relative inline-block text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light">
                        <span className="relative">
                          {item.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gray-400 group-hover:w-full transition-all duration-300" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-slate-400 text-center sm:text-left font-light">
                &copy; {new Date().getFullYear()}{" "}
                <span className="font-title font-semibold text-white">
                  DolceDress
                </span>
                . Todos los derechos reservados.
              </p>
              <p className="text-xs text-slate-500 text-center sm:text-right font-light">
                Elegancia atemporal para el hombre contemporáneo
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
