import { Scissors, Users, Sparkles, Clock } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Precision Haircuts",
    description:
      "Expert cuts tailored to your style, face shape, and lifestyle. From classic to contemporary.",
    highlight: "Most Popular",
  },
  {
    icon: Sparkles,
    title: "Hot Towel Shaves",
    description:
      "Indulge in the ultimate relaxation with our traditional straight razor shave experience.",
  },
  {
    icon: Users,
    title: "Kid-Friendly Cuts",
    description:
      "Comfortable, patient service for the little ones. Making their first haircut a great experience.",
    highlight: "Family Friendly",
  },
  {
    icon: Clock,
    title: "Beard Grooming",
    description:
      "Shape, trim, and maintain your beard with precision. From stubble to full beards.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Every service comes with our signature attention to detail and
            commitment to excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-secondary/50 border border-border rounded-xl p-8 hover:border-gold/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              )}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
