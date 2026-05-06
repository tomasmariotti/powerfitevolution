import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { Schedule } from "@/components/site/Schedule";
import { Gallery } from "@/components/site/Gallery";
import { Location } from "@/components/site/Location";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Powerfit Evolution | Gimnasio en Sarandí" },
      {
        name: "description",
        content:
          "Entrená en Powerfit Evolution, gimnasio moderno en Sarandí con musculación, entrenadores y equipamiento premium.",
      },
      { name: "keywords", content: "gimnasio en Sarandí, gimnasio zona sur Buenos Aires, musculación Avellaneda, Powerfit Evolution" },
      { property: "og:title", content: "Powerfit Evolution | Gimnasio en Sarandí" },
      {
        property: "og:description",
        content: "Musculación, entrenamiento personalizado y equipamiento premium en Sarandí.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Schedule />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
