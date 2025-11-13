import { placeholderImage } from "@/helpers/placeholderImage";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Promo() {
  return (
    <div className="relative overflow-hidden bg-gray-900 mt-20 lg:mt-32">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
          alt="Elegancia y distinción en cada detalle"
          fill
          className="h-full w-full object-cover object-center opacity-40"
          placeholder="blur"
          blurDataURL={placeholderImage}
          priority={false}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/80" />

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          {/* Heading */}
          <h2 className="font-title text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Elegancia que Define
            <span className="block mt-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Tu Estilo Personal
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-gray-300 font-light max-w-2xl mx-auto">
            Cada traje es una obra maestra de confección artesanal. Combinamos
            tradición, elegancia atemporal y atención al detalle para crear
            prendas que reflejan tu personalidad única en cada ocasión especial.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/colecciones"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-gray-900 shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full sm:w-auto justify-center">
              Explorar Colección
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/contacto"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300 w-full sm:w-auto justify-center">
              Agenda tu Cita
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
