import { MapPin, Navigation } from "lucide-react";

export function Location() {
  const address = "Av. Bartolomé Mitre 2919, Sarandí";
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
  const embed = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

  return (
    <section id="ubicacion" className="py-24 md:py-32 bg-card/40 border-y border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-primary font-semibold tracking-[0.3em] text-xs">UBICACIÓN</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            VENÍ A <span className="text-gradient-red">CONOCERNOS</span>
          </h2>
          <div className="mt-6 flex items-start gap-3 text-lg text-muted-foreground">
            <MapPin className="text-primary mt-1 shrink-0" />
            <span>{address}<br />Sarandí, Avellaneda · Buenos Aires</span>
          </div>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow mt-8 inline-flex items-center gap-2 self-start rounded-md bg-gradient-red px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Navigation size={18} /> Cómo llegar
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-border shadow-card aspect-[4/3] lg:aspect-auto">
          <iframe
            title="Ubicación Powerfit Evolution"
            src={embed}
            className="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
