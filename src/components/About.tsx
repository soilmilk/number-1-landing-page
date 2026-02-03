import { Award, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Barbers",
    description: "Skilled professionals with years of experience",
  },
  {
    icon: Clock,
    title: "Convenient Hours",
    description: "Open daily until 7 PM for your convenience",
  },
  {
    icon: Heart,
    title: "Customer First",
    description: "Your satisfaction is our top priority",
  },
  {
    icon: Shield,
    title: "Clean & Safe",
    description: "Sanitized equipment and clean environment",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold font-medium tracking-wider uppercase text-sm">
              About Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
              Blacksburg's <span className="text-gradient-gold">Premier</span>{" "}
              Hair Studio
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Welcome to Number 1 Hair Studio, where expert craftsmanship meets
              modern style. Our team of skilled professionals is dedicated to
              delivering exceptional haircuts and styling services in a warm,
              welcoming environment.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Whether you're looking for a classic cut, a trendy style, or
              specialized treatments, we've got you covered. With over a decade
              of combined experience, we take pride in making every client feel
              valued and confident.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-gold/50 transition-colors duration-300 flex flex-col justify-center">
              <div className="text-5xl font-serif font-bold text-gradient-gold mb-2">
                4.8
              </div>
              <p className="text-muted-foreground">Google Rating</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-gold/50 transition-colors duration-300 flex flex-col justify-center">
              <div className="text-5xl font-serif font-bold text-gradient-gold mb-2">
                82+
              </div>
              <p className="text-muted-foreground">Happy Reviews</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-gold/50 transition-colors duration-300 flex flex-col justify-center">
              <div className="text-5xl font-serif font-bold text-gradient-gold mb-2">
                7
              </div>
              <p className="text-muted-foreground">Days a Week</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center hover:border-gold/50 transition-colors duration-300 flex flex-col justify-center">
              <div className="text-5xl font-serif font-bold text-gradient-gold mb-2">
                ★
              </div>
              <p className="text-muted-foreground">Top Rated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
