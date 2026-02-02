import { Scissors, Users, Sparkles, Clock } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Women's Haircut",
    zh: "女士剪发",
    price: "$38",
    description: "Includes cut, wash, blow-dry, and styling.",
    highlight: "Most Popular",
  },
  {
    icon: Scissors,
    title: "Haircut (Child)",
    zh: "儿童剪发",
    price: "$30",
    description: "Quick and friendly kids' haircut.",
    highlight: "Family Friendly",
  },
  {
    icon: Sparkles,
    title: "Perm",
    zh: "烫发",
    price: "$260+",
    description: "Styling perms and texture services.",
  },
  {
    icon: Sparkles,
    title: "Dye",
    zh: "染色",
    price: "$150+",
    description: "Color, highlights, and corrective coloring.",
  },
  {
    icon: Scissors,
    title: "Hair Care",
    zh: "头发护理",
    price: "$58",
    description: "Treatment packages for healthier hair.",
  },
  {
    icon: Users,
    title: "Shampoo / Blow",
    zh: "洗发",
    price: "$30",
    description: "Shampoo, scalp massage, and blow-dry.",
  },
  {
    icon: Sparkles,
    title: "KERATIN",
    zh: "蛋白矫正",
    price: "$150+",
    description: "Smoothing keratin treatments.",
  },
  {
    icon: Sparkles,
    title: "Japanese Straighten",
    zh: "拉直",
    price: "Contact",
    description: "Long-lasting straightening service.",
  },
  {
    icon: Scissors,
    title: "Women's Bangs Trim",
    zh: "女生修刘海",
    price: "$10",
    description: "Quick trim to refresh your bangs.",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-secondary/50 border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  {service.highlight}
                </span>
              )}

              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mr-4 group-hover:bg-gold/20 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    {service.zh && (
                      <div className="text-base text-muted-foreground">
                        {service.zh}
                      </div>
                    )}
                  </div>
                </div>

                {service.price && (
                  <div className="text-right">
                    <div className="text-gold font-bold text-lg md:text-xl">
                      {service.price}
                    </div>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed text-base">
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
