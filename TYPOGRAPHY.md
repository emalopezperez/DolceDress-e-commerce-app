# 🎨 Guía de Tipografía - DolceDress

## Fuentes Configuradas

### **Playfair Display** (Títulos)
Fuente serif elegante y sofisticada, perfecta para dar un aspecto de alta moda y lujo.

### **Lato** (Texto)
Fuente sans-serif moderna, delicada y altamente legible para el contenido.

---

## Cómo usar las fuentes

### Opción 1: Con clases de Tailwind (Recomendado)

```jsx
// Títulos principales con Playfair Display
<h1 className="font-title text-4xl font-bold">
  Colección Exclusiva
</h1>

// Subtítulos
<h2 className="font-title text-3xl font-semibold">
  Trajes de Etiqueta
</h2>

// Texto normal con Lato (ya es el default)
<p className="font-body text-base">
  Descripción del producto...
</p>
```

### Opción 2: Importando directamente

```jsx
import { titleFont, bodyFont } from '@/config/fonts';

// Para títulos
<h1 className={titleFont.className}>Título Elegante</h1>

// Para texto
<p className={bodyFont.className}>Texto del contenido</p>
```

---

## Jerarquía Tipográfica Recomendada

```jsx
// H1 - Títulos principales de página
<h1 className="font-title text-5xl md:text-6xl font-bold tracking-tight">
  DolceDress
</h1>

// H2 - Títulos de sección
<h2 className="font-title text-4xl md:text-5xl font-semibold">
  Nuestra Colección
</h2>

// H3 - Subtítulos
<h3 className="font-title text-3xl md:text-4xl font-medium">
  Trajes para Novios
</h3>

// H4 - Nombres de productos
<h4 className="font-title text-2xl md:text-3xl font-medium">
  Traje Smoking Negro
</h4>

// Párrafos
<p className="font-body text-base md:text-lg font-light leading-relaxed">
  Descripción elegante del producto...
</p>

// Botones
<button className="font-body text-sm md:text-base font-bold uppercase tracking-wider">
  Ver Colección
</button>
```

---

## Pesos Disponibles

### Playfair Display (títulos):
- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800

### Lato (texto):
- `font-light` - 300 (Para textos elegantes)
- `font-normal` - 400 (Default)
- `font-bold` - 700 (Para énfasis)

---

## Ejemplos de Uso

### Card de Producto
```jsx
<div className="product-card">
  <h3 className="font-title text-2xl font-semibold mb-2">
    Traje Smoking Premium
  </h3>
  <p className="font-body text-sm font-light text-gray-600 mb-4">
    Corte italiano, tela de lana virgen
  </p>
  <span className="font-title text-xl font-bold">
    $2,499
  </span>
</div>
```

### Hero Section
```jsx
<section className="hero">
  <h1 className="font-title text-6xl md:text-7xl font-bold tracking-tight mb-4">
    Elegancia Atemporal
  </h1>
  <p className="font-body text-lg md:text-xl font-light text-gray-700 max-w-2xl">
    Descubre nuestra exclusiva colección de trajes diseñados
    para los momentos más importantes de tu vida.
  </p>
</section>
```

### Navegación
```jsx
<nav className="font-body text-sm font-normal uppercase tracking-wide">
  <a href="/colecciones">Colecciones</a>
  <a href="/nosotros">Nosotros</a>
  <a href="/contacto">Contacto</a>
</nav>
```

---

## Tips de Diseño

1. **Usa Playfair para impacto emocional**: Títulos, precios, CTAs importantes
2. **Usa Lato para legibilidad**: Descripciones, navegación, formularios
3. **Combina pesos**: Títulos bold + texto light = contraste elegante
4. **Espaciado**: Usa `tracking-tight` en títulos grandes, `tracking-wide` en texto pequeño uppercase
5. **Line height**: Usa `leading-relaxed` o `leading-loose` para textos largos

---

## Configuración Técnica

Las fuentes están configuradas en:
- **Definición**: `src/config/fonts.ts`
- **Aplicación global**: `src/app/layout.tsx`
- **Tailwind**: `tailwind.config.ts`

Las fuentes se cargan automáticamente desde Google Fonts con optimización de Next.js.
