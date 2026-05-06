import { useState } from "react";
import { z } from "zod";
import { Phone, Instagram, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Ingresá tu nombre").max(80),
  phone: z.string().trim().min(6, "Teléfono inválido").max(30),
  message: z.string().trim().min(5, "Contanos un poco más").max(500),
});

export function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };
    const r = schema.safeParse(data);
    if (!r.success) {
      const errs: Record<string, string> = {};
      for (const issue of r.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const text = `Hola Powerfit, soy ${r.data.name} (Tel: ${r.data.phone}). ${r.data.message}`;
    window.open(
      `https://wa.me/541130304860?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-primary font-semibold tracking-[0.3em] text-xs">CONTACTO</p>
          <h2 className="mt-3 font-display text-4xl md:text-6xl">
            EMPEZÁ <span className="text-gradient-red">HOY</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Dejanos tus datos y te respondemos por WhatsApp con toda la información:
            planes, horarios y cómo arrancar.
          </p>

          <div className="mt-8 space-y-4">
            <a href="tel:+541130304860" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                <Phone size={18} />
              </span>
              011 3030-4860
            </a>
            <a
              href="https://instagram.com/powerfit_evolution"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-card border border-border">
                <Instagram size={18} />
              </span>
              @powerfit_evolution
            </a>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4"
        >
          <Field name="name" label="Nombre" placeholder="Tu nombre" error={errors.name} />
          <Field name="phone" label="Teléfono" placeholder="11 1234 5678" error={errors.phone} />
          <Field
            name="message"
            label="Mensaje"
            placeholder="Quiero info sobre planes…"
            error={errors.message}
            textarea
          />
          <button
            type="submit"
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-red px-6 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            <Send size={16} /> Enviar consulta
          </button>
          {sent && (
            <p className="text-sm text-primary text-center">¡Listo! Abrimos WhatsApp para vos.</p>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  placeholder,
  error,
  textarea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  error?: string;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";
  return (
    <label className="block">
      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
        {label}
      </span>
      {textarea ? (
        <textarea name={name} placeholder={placeholder} rows={4} className={`mt-2 ${cls}`} />
      ) : (
        <input name={name} placeholder={placeholder} className={`mt-2 ${cls}`} />
      )}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}
