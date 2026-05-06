import { ShieldCheck, Sparkles, Users } from "lucide-react";
import gallery from "@/assets/gallery-2.jpg";

const items = [
  { icon: Users, title: "Atención personalizada", text: "Entrenadores cerca tuyo, siempre." },
  { icon: Sparkles, title: "Máquinas en mejora", text: "Equipamiento moderno y en constante renovación." },
  { icon: ShieldCheck, title: "Ambiente premium", text: "Limpio, ordenado y profesional." },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-red opacity-20 blur-2xl rounded-3xl" />
          <img
            src={gallery}
            alt="Atleta entrenando con barra olímpica"
            width={800}
            height={800}
            loading="lazy"
            className="relative rounded-2xl shadow-card object-cover w-full aspect-square"
          />
        </div>
        <div>
          <p className="text-primary font-semibold tracking-[0.3em] text-xs">SOBRE NOSOTROS</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl leading-tight">
            EVOLUCIONÁ TU <span className="text-gradient-red">ENTRENAMIENTO</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Powerfit Evolution es un gimnasio especializado en musculación ubicado en Sarandí.
            Contamos con equipamiento moderno, ambiente limpio y entrenadores comprometidos
            con tu progreso real.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {items.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-xl border border-border bg-card p-5 hover:border-primary transition-colors"
              >
                <Icon className="text-primary" size={22} />
                <h3 className="mt-3 font-display text-lg tracking-wide">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
