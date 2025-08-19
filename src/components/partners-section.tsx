export const PartnersSection = () => {
  const partners = [
    { name: "sh.uk", logo: "SH.UK" },
    { name: "NHS", logo: "NHS" },
    { name: "Sexual Health London", logo: "SHL" },
    { name: "test.me", logo: "test.me" },
    { name: "luud", logo: "luud" },
    { name: "Soapoli", logo: "SPO" }
  ];

  return (
    <section className="py-16 bg-card/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Get tested with our trusted partners
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="group flex items-center justify-center p-4 rounded-xl bg-card/10 backdrop-blur-sm border border-border/10 hover:border-primary/20 transition-all duration-300 hover:glow-primary h-20 w-32"
            >
              <span className="text-sm font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Repeated grid for visual impact (as seen on original site) */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
          {partners.map((partner, index) => (
            <div 
              key={`repeat-${partner.name}`}
              className="flex items-center justify-center p-4 rounded-xl bg-card/5 backdrop-blur-sm border border-border/5 h-16 w-28"
            >
              <span className="text-xs font-medium text-muted-foreground/80">
                {partner.logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};