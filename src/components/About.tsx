import { Target, Users, Lightbulb, TrendingUp } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/services";

{/* const services = [
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
]; */}

export function About() {
  const [openId, setOpenId] = useState<string | null>(null);
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
          {services.map((service, index) => {
            const isOpen = openId === service.id;
        
            return (
              <div
                key={service.id}
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className={`
                  group p-8 bg-background rounded-2xl border
                  cursor-pointer transition-all duration-300
                  ${isOpen ? "border-accent/40 shadow-soft" : "border-border/50 hover:border-accent/30"}
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
        
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 flex items-center justify-between">
                  {service.title}
                  <span className="text-accent text-sm">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </h3>
        
                <p className="font-body text-muted-foreground leading-relaxed">
                  {service.short}
                </p>
        
                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="font-body text-foreground leading-relaxed">
                      {service.long}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
