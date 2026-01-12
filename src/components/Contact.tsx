import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="yhteystiedot" className="py-24 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Yhteystiedot</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold mb-6">Otetaan yhteyttä</h2>
        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto mb-12">
          Kiinnostuitko? Ota rohkeasti yhteyttä, niin jutellaan miten voisin auttaa.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:veikko.lohi@gmail.com"
            className="group flex flex-col items-center p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <span className="font-body text-sm text-primary-foreground/60 mb-1">Sähköposti</span>
            <span className="font-body font-medium">veikko.lohi@gmail.com</span>
          </a>

          <a
            href="tel:+358505955654"
            className="group flex flex-col items-center p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <span className="font-body text-sm text-primary-foreground/60 mb-1">Puhelin</span>
            <span className="font-body font-medium">+358 50 595 5654</span>
          </a>

          <a
            href="https://www.linkedin.com/in/veikkolohi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-6 h-6 text-accent" />
            </div>
            <span className="font-body text-sm text-primary-foreground/60 mb-1">LinkedIn</span>
            <span className="font-body font-medium">veikkolohi</span>
          </a>
        </div>

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-primary-foreground/60">
          <MapPin className="w-4 h-4" />
          <span className="font-body text-sm">Laukaa, Suomi</span>
        </div>
      </div>
    </section>
  );
}
