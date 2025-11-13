import { Scissors, Sparkles, Award, Clock } from "lucide-react";

const incentives = [
  {
    name: "Confección a Medida",
    icon: Scissors,
    description:
      "Cada traje es confeccionado con precisión artesanal para adaptarse perfectamente a tu figura y estilo personal.",
  },
  {
    name: "Calidad Premium",
    icon: Award,
    description:
      "Utilizamos únicamente las mejores telas y materiales importados, garantizando durabilidad y elegancia excepcional.",
  },
  {
    name: "Atención Personalizada",
    icon: Sparkles,
    description:
      "Nuestros asesores de estilo te guiarán en cada paso para encontrar el look perfecto para tu ocasión especial.",
  },
  {
    name: "Entrega Puntual",
    icon: Clock,
    description:
      "Respetamos tu tiempo. Garantizamos la entrega de tu traje en la fecha acordada para que no te preocupes por nada.",
  },
];

export default function Incentives() {
  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-title text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Excelencia en Cada Detalle
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            Nos dedicamos a ofrecerte una experiencia incomparable, donde la elegancia
            y el servicio excepcional se encuentran en cada prenda.
          </p>
        </div>

        {/* Incentives Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {incentives.map((incentive) => {
            const Icon = incentive.icon;
            return (
              <div
                key={incentive.name}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-title text-xl font-semibold text-gray-900 mb-3">
                  {incentive.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-light">
                  {incentive.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>

        {/* Optional CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 font-light">
            ¿Tienes dudas?
            <a href="/contacto" className="ml-2 font-medium text-gray-900 hover:text-gray-700 underline underline-offset-4 transition-colors">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
