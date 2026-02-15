import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'
import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { ContactFormHolo } from "@/components/neural/contact-form-holo"
import { Mail, Calendar, MessageSquare, TrendingUp, Twitter, Linkedin, Youtube, Facebook, Music2 } from "lucide-react"

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Sales & Support',
  description: 'Talk to the DONNA team about demos, partnerships, or support for your AI operations.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            Talk to the DONNA Team
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            Let’s discuss how DONNA can run workflows inside your business
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
                href="mailto:derek@bem.studio"
                className="text-[#3DE0FF] hover:text-[#8A2FFF] transition-colors duration-300 font-medium"
              >
                derek@bem.studio
              </a>
            </div>

            <div className="holo-panel p-8 rounded-xl text-center hover-lift">
              <Calendar className="w-12 h-12 text-[#8A2FFF] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-white">Schedule a Demo</h3>
              <p className="text-gray-300 mb-4">
                See DONNA in action
              </p>
              <a
                href="mailto:derek@bem.studio?subject=Demo Request"
                className="text-[#8A2FFF] hover:text-[#3DE0FF] transition-colors duration-300 font-medium"
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
                href="mailto:derek@bem.studio?subject=Investor Inquiry"
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
                href="mailto:derek@bem.studio?subject=Sales Inquiry"
                className="text-[#3DE0FF] hover:text-[#8A2FFF] transition-colors duration-300 font-medium"
              >
                Contact Sales -&gt;
              </a>
            </div>

            <div className="glass-panel p-8 rounded-xl">
              <Mail className="w-10 h-10 text-[#8A2FFF] mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-white">Support</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Already a DONNA customer? Our support team is here to help you get the most out of
                your AI automation platform. We typically respond within 2-4 hours during business hours.
              </p>
              <a
                href="mailto:derek@bem.studio?subject=Support Request"
                className="text-[#8A2FFF] hover:text-[#3DE0FF] transition-colors duration-300 font-medium"
              >
                Get Support -&gt;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Follow */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="holo-panel p-10 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Follow DONNA</h2>
            <p className="text-gray-300 mb-8">
              Product updates, insights on operational intelligence, and real-world deployments.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61586503540067"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3DE0FF] transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.tiktok.com/@donnaai_?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3DE0FF] transition-colors"
              >
                <Music2 className="h-5 w-5" />
                <span>TikTok</span>
              </a>
              <a
                href="https://x.com/donnaai_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3DE0FF] transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span>X</span>
              </a>
              <a
                href="https://www.youtube.com/@bemdonna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3DE0FF] transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span>YouTube</span>
              </a>
              <a
                href="https://www.linkedin.com/in/derek-talbird-65293977/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#3DE0FF] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}