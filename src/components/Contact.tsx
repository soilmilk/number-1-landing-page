import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Navigation, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Ready for a fresh look? Stop by our studio or give us a call.
            Walk-ins welcome, appointments recommended.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <MapPin className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Address
                </h3>
                <p className="text-muted-foreground mb-3">
                  460 Turner St NW Ste 208
                  <br />
                  Blacksburg, VA 24060
                </p>
                <a
                  href="https://maps.google.com/?q=460+Turner+St+NW+Ste+208+Blacksburg+VA+24060"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <Phone className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Phone
                </h3>
                <a
                  href="tel:4342351766"
                  className="text-muted-foreground hover:text-gold transition-colors text-lg"
                >
                  (434) 235-1766
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                <Clock className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                  Hours
                </h3>
                <div className="text-muted-foreground space-y-1">
                  <p>Monday - Sunday: 10:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://calendly.com/qiumike0/hair-appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button variant="gold" size="xl" className="w-full mt-4">
                <Calendar className="w-5 h-5" />
                Book now in Calendly!
              </Button>
            </a>
          </div>

          {/* Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3179.8!2d-80.4136!3d37.2296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x884d95000000000%3A0x0!2s460%20Turner%20St%20NW%20Ste%20208%2C%20Blacksburg%2C%20VA%2024060!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map: Number 1 Hair Studio at 460 Turner St NW, Blacksburg VA 24060"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
