import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Prosessien kehitys",
    description: "Sujuva toiminta on sekä tehokasta että laadukasta.",
  },
  {
    icon: Target,
    title: "Laadun parantaminen",
    description: "Laatu syntyy toimivista prosesseista.",
  },
  {
    icon: Lightbulb,
    title: "Prosessien kuvaus",
    description: "Avaa silmiä niin vanhoille kuin uusille työntekijöille.",
  },
  {
    icon: TrendingUp,
    title: "Muutosten jalkauttaminen",
    description: "Sillä on merkitystä, miten asia viedään käytäntöön.",
  },
];

export function About() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Palvelut</p>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6">Kuinka voin auttaa?</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Kehitän toimintaanne vahvalla kokemuksella. Kun toimintoja sujuvoitetaan, niin laatu, tehokkuus ja
            työtyytyväisyys kehittyvät käsi kädessä.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
