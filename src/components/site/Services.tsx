import { Dumbbell, UserCheck, Building2 } from "lucide-react";

const services = [
  {
    icon: Dumbbell,
    title: "Musculación",
    text: "Equipamiento completo con barras olímpicas, mancuernas y máquinas profesionales.",
  },
  {
    icon: UserCheck,
    title: "Entrenamiento personalizado",
    text: "Seguimiento de entrenadores con experiencia para maximizar tus resultados.",
  },
  {
    icon: Building2,
    title: "Planes corporativos · Wellhub",
    text: "Acceso mediante planes empresariales para vos y tu equipo de trabajo.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-primary font-semibold tracking-[0.3em] text-xs">SERVICIOS</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            TODO LO QUE NECESITÁS PARA <span className="text-gradient-red">PROGRESAR</span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-8 overflow-hidden hover:border-primary transition-all"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-gradient-red opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-red text-primary-foreground shadow-glow">
                <Icon size={26} />
              </div>
              <h3 className="mt-6 font-display text-2xl tracking-wide">{title}</h3>
              <p className="mt-3 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
