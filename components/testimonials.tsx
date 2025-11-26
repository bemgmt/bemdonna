"use client"

import { useInView } from "react-intersection-observer"

const testimonials = [
  {
    id: "1",
    name: "Sarah Johnson",
    title: "CEO",
    company: "Luxury Realty Group",
    quote: "DONNA has transformed how we handle leads. We went from missing 40% of inquiries to capturing every single one. Our conversion rate increased by 65% in just 3 months.",
    rating: 5
  },
  {
    id: "2",
    name: "Michael Chen",
    title: "Operations Manager",
    company: "Grand Hotel & Spa",
    quote: "The 24/7 availability is a game-changer. Guests get instant responses to their questions, and our team can focus on delivering exceptional in-person service.",
    rating: 5
  },
  {
    id: "3",
    name: "Jennifer Martinez",
    title: "Owner",
    company: "Bella Salon & Spa",
    quote: "Appointment scheduling used to take up so much of our time. Now DONNA handles it all automatically, and our no-show rate dropped by 30%.",
    rating: 5
  },
  {
    id: "4",
    name: "David Thompson",
    title: "Managing Partner",
    company: "Thompson & Associates Law",
    quote: "Client communication is critical in our practice. DONNA ensures we never miss an inquiry and maintains our professional standards in every interaction.",
    rating: 5
  },
  {
    id: "5",
    name: "Lisa Rodriguez",
    title: "Practice Administrator",
    company: "HealthFirst Medical Group",
    quote: "DONNA has reduced our administrative burden significantly. Patient inquiries are handled instantly, and our staff can focus on patient care.",
    rating: 5
  },
  {
    id: "6",
    name: "James Wilson",
    title: "Director of Marketing",
    company: "EventPro Productions",
    quote: "The lead qualification feature is incredible. DONNA identifies high-value prospects and routes them to the right team member automatically.",
    rating: 5
  }
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.2, once: true })

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Loved by <span className="gradient-text">Business Leaders</span>
          </h2>
          <p className="text-foreground/60">See what customers say about DONNA</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="glass-card p-8 rounded-xl glow-primary hover:shadow-[0_0_30px_rgba(122,92,255,0.2)] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">
                    {testimonial.title}, {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-foreground/80 italic mb-3">"{testimonial.quote}"</p>
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
