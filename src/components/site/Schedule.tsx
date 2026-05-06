const rows = [
  { day: "Lunes a Viernes", hours: "07:00 — 00:00", open: true },
  { day: "Sábados", hours: "12:00 — 20:00", open: true },
  { day: "Domingos", hours: "Cerrado", open: false },
];

export function Schedule() {
  return (
    <section id="horarios" className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-primary font-semibold tracking-[0.3em] text-xs">HORARIOS</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            CUANDO QUIERAS <span className="text-gradient-red">ENTRENAR</span>
          </h2>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          {rows.map((r, idx) => (
            <div
              key={r.day}
              className={`flex items-center justify-between px-6 md:px-10 py-6 ${
                idx !== rows.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    r.open ? "bg-primary animate-pulse-red" : "bg-muted-foreground/40"
                  }`}
                />
                <span className="font-display text-xl md:text-2xl tracking-wide">{r.day}</span>
              </div>
              <span
                className={`font-mono text-sm md:text-base ${
                  r.open ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {r.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
