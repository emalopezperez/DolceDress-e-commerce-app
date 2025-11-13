"use client";

import { Phone, Building2, Mail, Send, Loader2, MailIcon } from "lucide-react";
import { useState, type FormEvent } from "react";

// Hardcoded contact info
const contact = {
  phone: "+54 11 1234-5678",
  email: "info@dolcedress.com",
  address: "Av. Santa Fe 1234",
  city: "Buenos Aires, Argentina",
};

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (no actual functionality)
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Gracias por tu mensaje. Te contactaremos pronto.");
      e.currentTarget.reset();
    }, 2000);
  };

  return (
    <div className="relative isolate bg-white min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 mb-4">
            <MailIcon className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-semibold text-gray-900">
              Contáctanos
            </span>
          </div>

          <h2 className="font-title text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Comunicate con{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700">
              nosotros
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte con consultas sobre nuestros trajes, camisas y accesorios.
            Envíanos un mensaje y te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gray-100 mb-4">
                  <Building2 className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-title text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Nuestra Oficina
                </h3>
                <p className="text-gray-900 leading-relaxed font-light">
                  {contact.address}
                  <br />
                  {contact.city}
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gray-100 mb-4">
                  <Phone className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-title text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Teléfono
                </h3>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors font-medium">
                  {contact.phone}
                </a>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="inline-flex p-3 rounded-xl bg-gray-100 mb-4">
                  <Mail className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="font-title text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Email
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-gray-900 hover:text-gray-600 transition-colors font-medium break-all">
                  {contact.email}
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 lg:p-12">
              <h2 className="font-title text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Envíanos un mensaje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold text-gray-700">
                      Nombre <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      required
                      minLength={2}
                      maxLength={50}
                      className="block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-0 transition-colors"
                      placeholder="Juan"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold text-gray-700">
                      Apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      required
                      minLength={2}
                      maxLength={50}
                      className="block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-0 transition-colors"
                      placeholder="Pérez"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={100}
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    className="block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-0 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold text-gray-700">
                    Teléfono{" "}
                    <span className="text-gray-400 text-xs font-normal">
                      (opcional)
                    </span>
                  </label>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    maxLength={20}
                    pattern="[\d\s\-\+$$$$]+"
                    className="block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-0 transition-colors"
                    placeholder="+54 11 1234-5678"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    minLength={10}
                    maxLength={1000}
                    className="block w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:ring-0 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu consulta de trajes, camisas o accesorios..."
                  />
                  <p className="text-xs text-gray-500">
                    Mínimo 10 caracteres, máximo 1000
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Enviar mensaje</span>
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
