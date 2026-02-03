const galleryItems = [
  {
    id: 1,
    title: "Women's Haircut",
    category: "Styling",
    image: "/src/assets/womens_haircut.png",
  },
  {
    id: 2,
    title: "Professional Coloring",
    category: "Color",
    image: "/src/assets/mens_perm.jpeg",
  },
  {
    id: 3,
    title: "Keratin Treatment",
    category: "Treatment",
    image: "/src/assets/hero-barbershop.jpg",
  },
  {
    id: 4,
    title: "Blowout Styling",
    category: "Styling",
    image: "/src/assets/womens_haircut.png",
  },
  {
    id: 5,
    title: "Hair Design",
    category: "Styling",
    image: "/src/assets/mens_perm.jpeg",
  },
  {
    id: 6,
    title: "Perming Service",
    category: "Styling",
    image: "/src/assets/hero-barbershop.jpg",
  },
  {
    id: 7,
    title: "Color Correction",
    category: "Color",
    image: "/src/assets/womens_haircut.png",
  },
  {
    id: 8,
    title: "Texture Work",
    category: "Treatment",
    image: "/src/assets/mens_perm.jpeg",
  },
  {
    id: 9,
    title: "Salon Ambiance",
    category: "Studio",
    image: "/src/assets/hero-barbershop.jpg",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Our Work
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            Gallery of <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Showcase of our finest work and satisfied clients. Each style
            crafted with precision and care.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-secondary/50 border border-border rounded-xl overflow-hidden hover:border-gold/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {/* Image */}
              <div className="relative w-full aspect-square overflow-hidden bg-secondary">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-gold bg-gold/10 px-2 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg mb-6">
            Want to see more of our work? Follow us on social media or visit our
            salon!
          </p>
          <a
            href="#contact"
            className="inline-block bg-gold hover:bg-gold/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
