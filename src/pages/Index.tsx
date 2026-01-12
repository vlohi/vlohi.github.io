import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Contact />
      <TestimonialCarousel />
      <Footer />
    </div>
  );
};

export default Index;
