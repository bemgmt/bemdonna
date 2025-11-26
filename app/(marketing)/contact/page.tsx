import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { ContactFormHolo } from "@/components/neural/contact-form-holo"
import { HoloFooter } from "@/components/neural/holo-footer"
import { Mail, Calendar, MessageSquare, TrendingUp } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            Let's discuss how DONNA can transform your business
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="holo-panel p-8 rounded-xl text-center hover-lift">
              <Mail className="w-12 h-12 text-[#3DE0FF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Email Us</h3>
              <p className="text-gray-300 mb-4">
                General inquiries and support
              </p>
              <a
                href="mailto:derek@bemdonna.com"
                className="text-[#3DE0FF] hover:text-[#FF1F99] transition-colors duration-300 font-medium"
              >
                derek@bemdonna.com
              </a>
            </div>

            <div className="holo-panel p-8 rounded-xl text-center hover-lift">
              <Calendar className="w-12 h-12 text-[#FF1F99] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Schedule a Demo</h3>
              <p className="text-gray-300 mb-4">
                See DONNA in action
              </p>
              <a
                href="mailto:derek@bemdonna.com?subject=Demo Request"
                className="text-[#FF1F99] hover:text-[#3DE0FF] transition-colors duration-300 font-medium"
              >
                Book a time
              </a>
            </div>

            <div className="holo-panel p-8 rounded-xl text-center hover-lift">
              <TrendingUp className="w-12 h-12 text-[#8A2FFF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Investor Inquiries</h3>
              <p className="text-gray-300 mb-4">
                Investment opportunities
              </p>
              <a
                href="mailto:derek@bemdonna.com?subject=Investor Inquiry"
                className="text-[#8A2FFF] hover:text-[#3DE0FF] transition-colors duration-300 font-medium"
              >
                Learn more
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <SectionTitleGlow
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
            />
            <ContactFormHolo includeInvestorOption={true} />
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-xl">
              <MessageSquare className="w-10 h-10 text-[#3DE0FF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Sales & Partnerships</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Interested in partnering with DONNA or bringing our AI automation platform to your
                organization? Our sales team is ready to discuss custom solutions and enterprise packages.
              </p>
              <a
                href="mailto:derek@bemdonna.com?subject=Sales Inquiry"
                className="text-[#3DE0FF] hover:text-[#FF1F99] transition-colors duration-300 font-medium"
              >
                Contact Sales →
              </a>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <Mail className="w-10 h-10 text-[#FF1F99] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Support</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Already a DONNA customer? Our support team is here to help you get the most out of
                your AI automation platform. We typically respond within 2-4 hours during business hours.
              </p>
              <a
                href="mailto:derek@bemdonna.com?subject=Support Request"
                className="text-[#FF1F99] hover:text-[#3DE0FF] transition-colors duration-300 font-medium"
              >
                Get Support →
              </a>
            </div>
          </div>
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}