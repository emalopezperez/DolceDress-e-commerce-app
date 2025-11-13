"use client";
import { useState } from "react";
import { Product, VariantsProduct } from "@/models/Product";
import { SanitizeHTML } from "@/components/ui/sanitizeHtml/SanitizeHtml";
import { Ruler, Shirt, Shield, Package } from "lucide-react";

interface PropsDetailProduct {
  info: Product;
  variants: VariantsProduct[];
}

const DetailProduct = ({ info, variants }: PropsDetailProduct) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  const uniqueSizes = Array.from(
    new Set(variants.map((variant) => variant.option1))
  );

  const features = [
    { icon: Shirt, text: "Confección premium" },
    { icon: Ruler, text: "Tallas disponibles" },
    { icon: Shield, text: "Garantía de calidad" },
    { icon: Package, text: "Envío a todo el país" },
  ];

  const tagsArray = info.tags
    ? info.tags.split(",").map((tag) => tag.trim())
    : [];

  return (
    <div className="flex flex-col h-full gap-8 pl-0 lg:pl-14">
      {/* Título */}
      <div>
        <h1 className="font-title text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 leading-tight">
          {info.title}
        </h1>
        {tagsArray.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tagsArray.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Descripción */}
      <div>
        <h2 className="font-title text-lg font-semibold text-gray-900 mb-3">
          Descripción
        </h2>
        <SanitizeHTML
          tag="div"
          className="text-gray-600 text-sm font-light leading-relaxed prose prose-sm max-w-none">
          {info.desciption}
        </SanitizeHTML>
      </div>

      {/* Tallas Disponibles */}
      {uniqueSizes.length > 0 && (
        <div>
          <h2 className="font-title text-lg font-semibold text-gray-900 mb-3">
            Tallas Disponibles
          </h2>
          <div className="flex flex-wrap gap-2">
            {uniqueSizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedSize === size
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}>
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Características */}
      <div>
        <h2 className="font-title text-lg font-semibold text-gray-900 mb-4">
          Características
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-light text-gray-700">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
