import { Instagram } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import hero from "@/assets/hero-gym.jpg";

const images = [
  { src: g3, alt: "Sala de musculación Powerfit Evolution" },
  { src: g1, alt: "Rack de mancuernas" },
  { src: hero, alt: "Fachada de Powerfit Evolution en Sarandí" },
  { src: g2, alt: "Vidriera del gimnasio - Tu lugar de entrenamiento" },
];

export function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-primary font-semibold tracking-[0.3em] text-xs">GALERÍA</p>
            <h2 className="mt-3 font-display text-4xl md:text-6xl">
              CONOCÉ EL <span className="text-gradient-red">ESPACIO</span>
            </h2>
          </div>
          <a
            href="https://instagram.com/powerfit_evolution"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-semibold hover:border-primary"
          >
            <Instagram size={16} /> Ver más en Instagram
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${
                i === 0 ? "md:row-span-2 md:col-span-2 aspect-square md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={800}
                height={800}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
