import Header from "@/components/header"
import Hero from "@/components/hero"
import Outcomes from "@/components/outcomes"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import UseCases from "@/components/use-cases"
import Integrations from "@/components/integrations"
import Security from "@/components/security"
import Pricing from "@/components/pricing"
import FAQ from "@/components/faq"
import DemoForm from "@/components/demo-form"
import CTAFooter from "@/components/cta-footer"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Outcomes />
      <Features />
      <HowItWorks />
      <UseCases />
      <Integrations />
      <Security />
      <Pricing />
      <FAQ />
      <div id="demo-form">
        <DemoForm />
      </div>
      <CTAFooter />
      <Footer />
      <Chatbot />
    </main>
  )
}
