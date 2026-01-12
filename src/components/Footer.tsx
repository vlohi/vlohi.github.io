export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sm text-background/60">
          © {currentYear} Veikko Lohi. Kaikki oikeudet pidätetään.
        </p>
        <p className="font-body text-xs text-background/40 mt-2">Y-tunnus: 3419490-7</p>
      </div>
    </footer>
  );
}
