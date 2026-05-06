import heroImg from "@/assets/hero-gym.jpg";
import { Phone, Instagram, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Interior del gimnasio Powerfit Evolution en Sarandí"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105"
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="absolute inset-0 bg-background/40" />

      <div className="relative mx-auto max-w-7xl w-full px-5 md:px-8 pt-28 pb-20">
        <p className="animate-fade-up text-primary font-semibold tracking-[0.3em] text-xs md:text-sm">
          GIMNASIO EN SARANDÍ · ZONA SUR
        </p>
        <h1 className="animate-fade-up mt-4 font-display text-5xl sm:text-7xl md:text-8xl leading-[0.95] max-w-4xl">
          TU LUGAR DE
          <br />
          <span className="text-gradient-red">ENTRENAMIENTO</span>
        </h1>
        <p className="animate-fade-up mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
          Entrená en un espacio moderno, limpio y diseñado para llevarte al siguiente nivel.
          Equipamiento premium, entrenadores comprometidos y la energía que necesitás.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap gap-3">
          <a
            href="tel:+541130304860"
            className="btn-glow inline-flex items-center gap-2 rounded-md bg-gradient-red px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Phone size={18} /> Llamar ahora
          </a>
          <a
            href="https://instagram.com/powerfit_evolution"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 rounded-md border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            <Instagram size={18} /> Ver Instagram
          </a>
          <a
            href="#horarios"
            className="btn-glow inline-flex items-center gap-2 rounded-md border border-border bg-card/60 backdrop-blur px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary"
          >
            <Clock size={18} /> Ver horarios
          </a>
        </div>

        <div className="animate-fade-up mt-16 grid grid-cols-3 max-w-md gap-6 border-t border-border/60 pt-6">
          {[
            { k: "+500", v: "Socios activos" },
            { k: "17h", v: "Abierto por día" },
            { k: "5★", v: "Valoración" },
          ].map((s) => (
            <div key={s.v}>
              <div className="font-display text-3xl text-primary">{s.k}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
