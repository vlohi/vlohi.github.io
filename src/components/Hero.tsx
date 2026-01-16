import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/profile.png";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("yhteystiedot");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Accent gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto animate-slide-up">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden ring-4 ring-primary/60 shadow-elevated">
                <img src={profileImage} alt="Veikko Lohi - Konsultti" className="w-full h-full object-cover" />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border-2 border-primary/10 -z-10" />
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left">
            {/* Small tagline */}
            <p className="font-body text-sm uppercase tracking-[0.2em] text-accent mb-4">Lohipro</p>

            {/* Main heading */}
            <h1 className="font-display text-4xl md:text-6xl font-semibold text-foreground leading-[1.1] mb-6">
              Veikko Lohi
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-3">
                Prosessien ja laadun kehitystä jo vuodesta 2005
              </span>
            </h1>

            {/* Description */}
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Toiminnan sujuvoittamista, laadun parantamista ja tyytyväisempiä työntekijöitä
            </p>

            {/* CTA Button */}
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-3 font-body font-medium text-primary-foreground bg-primary px-8 py-4 rounded-full shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-0.5"
            >
              Ota yhteyttä
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-primary/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
