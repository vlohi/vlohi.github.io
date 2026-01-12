import { useState, useEffect } from "react";
import { Quote } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
  role?: string;
}

const testimonials: Testimonial[] = [
  {
    text: "Vahva suositus. Jo lyhyessä ajassa saatiin Veikon kanssa paikannettua parikin oleellista kehityskohdetta tuotteessa.",
    author: "Marko Ilmari",
    role: "Owner, Filterest Oy",
  },
  {
    text: "Olimme tyytyväisiä. Palvelun kuvaus ja hinnoittelu olivat selkeitä ja asiat edistyivät mukavasti. Tykkäsimme myös paikan päällä pidetystä workshopista.",
    author: "Juho Pelkonen",
    role: "CTO, Easoft Group Oy",
  },
  {
    text: "Laadun ja tehokkuuden parantumisen lisäksi työntekijöiden fiilismittari nousi 3,7:stä 4,3:een (asteikolla 1-5)",
    author: "Seminaariesitys",
    role: "Testing Assembly 2021",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(true);
      }, 100);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-12">Palautetta työstäni</h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <div
            className={`transition-all duration-500 ease-out ${
              isAnimating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Quote className="w-12 h-12 text-accent/30 mx-auto mb-6" />

            <blockquote className="font-body text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 max-w-3xl">
              "{currentTestimonial.text}"
            </blockquote>

            <div className="space-y-1">
              <p className="font-display text-lg font-semibold text-foreground">{currentTestimonial.author}</p>
              {currentTestimonial.role && <p className="font-body text-muted-foreground">{currentTestimonial.role}</p>}
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(false);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsAnimating(true);
                }, 100);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-accent w-8" : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Näytä suositus ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
