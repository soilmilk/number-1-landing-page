import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <span className="font-serif text-2xl font-bold text-gradient-gold">
                Number 1
              </span>
              <span className="font-serif text-2xl font-light text-foreground">
                Hair Studio
              </span>
            </a>
            <p className="text-muted-foreground">
              Premium grooming experience in Blacksburg, Virginia. Where classic
              craftsmanship meets modern style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Services
              </a>
              <a
                href="#about"
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Book Now
              </a>
              <a
                href="#contact"
                className="block text-muted-foreground hover:text-gold transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-foreground">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:4342351766"
                className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (434) 235-1766
              </a>
              <a
                href="https://maps.google.com/?q=460+Turner+St+NW+Ste+208+Blacksburg+VA+24060"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-muted-foreground hover:text-gold transition-colors"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>
                  460 Turner St NW Ste 208
                  <br />
                  Blacksburg, VA 24060
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Number 1 Hair Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
