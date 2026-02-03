import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    rating: 5,
    isNew: true,
    text: "Great haircut. I have wavy/curly hair and the barber clearly knew what he was doing, also took all the time he needed to cut it perfectly. The service and hospitality was also the best I've seen. Will definitely come back.",
  },
  {
    id: 2,
    rating: 5,
    isNew: false,
    text: "I haven't gotten a haircut I loved for years and am hesitant each time. This place did not disappoint. I can definitely say I loved it this time! The hair dressers are amazing and very detail oriented. They knew exactly what they were doing. My boyfriend and I both love our new hair. We truly feel transformed. Thank you so much :)",
  },
  {
    id: 3,
    rating: 5,
    isNew: true,
    text: "I normally go to lady janes haircuts for men however they were short staffed and couldn't get me in so i went here today for the first time for a haircut. I was very pleased with the haircut I received. The barber was very professional, and provided excellent service.",
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Client Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real feedback from our satisfied customers who trust us with their
            hair.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-gold/50 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              {review.isNew && (
                <span className="absolute -top-3 left-6 bg-gradient-to-r from-gold to-gold-light text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  NEW
                </span>
              )}

              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed text-base">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
