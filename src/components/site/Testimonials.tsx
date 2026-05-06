import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const items = [
  { name: "Camila", text: "El mejor gym de zona sur!" },
  { name: "Fernando", text: "Todo limpio, moderno y estético." },
  { name: "Mauro", text: "Entrenadores un 10, siempre mejorando máquinas." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
        <p className="text-primary font-semibold tracking-[0.3em] text-xs">TESTIMONIOS</p>
        <h2 className="mt-3 font-display text-4xl md:text-6xl">
          LO QUE DICEN <span className="text-gradient-red">NUESTROS SOCIOS</span>
        </h2>

        <div className="mt-12 relative rounded-2xl border border-border bg-card p-10 md:p-14 shadow-card min-h-[220px]">
          <div className="flex justify-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={18} fill="currentColor" />
            ))}
          </div>
          <p key={i} className="animate-fade-up mt-6 font-display text-2xl md:text-3xl leading-snug">
            “{items[i].text}”
          </p>
          <p className="mt-4 text-muted-foreground">— {items[i].name}</p>

          <button
            onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
            aria-label="Anterior"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background hover:border-primary transition-colors inline-flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => setI((v) => (v + 1) % items.length)}
            aria-label="Siguiente"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-border bg-background hover:border-primary transition-colors inline-flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, k) => (
            <button
              key={k}
              onClick={() => setI(k)}
              aria-label={`Ir al testimonio ${k + 1}`}
              className={`h-2 rounded-full transition-all ${
                k === i ? "w-8 bg-primary" : "w-2 bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
