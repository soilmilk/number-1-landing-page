import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-barbershop.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Number 1 Hair Studio Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6 animate-fade-up">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              4.8 · 82 Google Reviews
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Premium</span>
            <br />
            <span className="text-gradient-gold">Haircut Experience</span>
          </h1>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where classic craftsmanship meets modern style. Experience the art
            of precision barbering at Blacksburg's premier hair studio.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://calendly.com/qiumike0/hair-appointment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="xl">
                <Calendar className="w-5 h-5" />
                Book Now
              </Button>
            </a>
            <a href="#services">
              <Button variant="goldOutline" size="xl">
                View Services
              </Button>
            </a>
          </div>

          {/* Location */}
          <div
            className="flex items-center gap-2 text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <MapPin className="w-5 h-5 text-gold" />
            <span>460 Turner St NW Ste 208, Blacksburg, VA 24060</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
