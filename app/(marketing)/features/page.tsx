import { SectionTitleGlow } from "@/components/neural/section-title-glow"
import { HoloFooter } from "@/components/neural/holo-footer"
import {
  Mail, Phone, MessageSquare, Bot, Users, Zap,
  TrendingUp, Target, FileText, Database, Search, Workflow
} from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      icon: Mail,
      title: "Email Bot",
      description: "Intelligent email management powered by advanced NLP",
      capabilities: [
        "Automatic email categorization and prioritization",
        "Context-aware response generation",
        "Smart follow-up scheduling",
        "Sentiment analysis and tone matching",
        "Multi-language support",
        "Integration with major email providers"
      ],
      useCases: [
        "Customer support inbox management",
        "Sales inquiry responses",
        "Appointment confirmations",
        "Newsletter engagement"
      ]
    },
    {
      icon: Phone,
      title: "Voice Bot",
      description: "Natural voice interactions with human-like conversation",
      capabilities: [
        "Advanced speech recognition (ASR)",
        "Natural text-to-speech (TTS)",
        "Real-time conversation handling",
        "Accent and dialect adaptation",
        "Call routing and transfer",
        "Voicemail transcription"
      ],
      useCases: [
        "Inbound customer service calls",
        "Appointment scheduling",
        "Order status inquiries",
        "Survey and feedback collection"
      ]
    },
    {
      icon: MessageSquare,
      title: "SMS Bot",
      description: "Automated text messaging for instant customer engagement",
      capabilities: [
        "Two-way SMS conversations",
        "Automated appointment reminders",
        "Order and delivery notifications",
        "Promotional campaign management",
        "Opt-in/opt-out handling",
        "MMS support for rich media"
      ],
      useCases: [
        "Appointment confirmations and reminders",
        "Order tracking updates",
        "Flash sales and promotions",
        "Customer feedback requests"
      ]
    },
    {
      icon: Bot,
      title: "Secretary Bot",
      description: "Your AI executive assistant for administrative tasks",
      capabilities: [
        "Calendar management and scheduling",
        "Meeting coordination across time zones",
        "Task and reminder management",
        "Email triage and prioritization",
        "Document organization",
        "Travel booking assistance"
      ],
      useCases: [
        "Executive calendar management",
        "Team meeting coordination",
        "Client appointment scheduling",
        "Daily briefing preparation"
      ]
    },
    {
      icon: Users,
      title: "Chatbot",
      description: "24/7 intelligent customer support on your website",
      capabilities: [
        "Natural language understanding",
        "Multi-turn conversation handling",
        "Knowledge base integration",
        "Seamless human handoff",
        "Conversation history tracking",
        "Customizable personality and tone"
      ],
      useCases: [
        "Website visitor engagement",
        "Product information queries",
        "Technical support",
        "Lead qualification"
      ]
    },
    {
      icon: Zap,
      title: "Lead Gen Engine",
      description: "Automated lead capture, qualification, and nurturing",
      capabilities: [
        "Multi-channel lead capture",
        "Intelligent lead scoring",
        "Automated qualification workflows",
        "Nurture campaign management",
        "CRM integration and sync",
        "Lead routing and assignment"
      ],
      useCases: [
        "Website form submissions",
        "Social media lead capture",
        "Event and webinar registration",
        "Content download tracking"
      ]
    },
    {
      icon: TrendingUp,
      title: "Marketing Bot",
      description: "Automated marketing campaigns and content distribution",
      capabilities: [
        "Multi-channel campaign orchestration",
        "Personalized content delivery",
        "A/B testing and optimization",
        "Social media automation",
        "Email marketing sequences",
        "Performance analytics and reporting"
      ],
      useCases: [
        "Drip email campaigns",
        "Social media posting schedules",
        "Content promotion",
        "Re-engagement campaigns"
      ]
    },
    {
      icon: Target,
      title: "Sales Agent Bot",
      description: "AI-powered sales conversations and deal progression",
      capabilities: [
        "Intelligent lead qualification",
        "Product recommendation engine",
        "Objection handling",
        "Pricing and quote generation",
        "Deal tracking and follow-up",
        "Sales pipeline management"
      ],
      useCases: [
        "Initial sales conversations",
        "Product demos and presentations",
        "Quote requests and pricing",
        "Deal closing assistance"
      ]
    },
    {
      icon: FileText,
      title: "Landing Page Generator",
      description: "Create high-converting pages with AI-driven design",
      capabilities: [
        "AI-powered copywriting",
        "Responsive design templates",
        "A/B testing built-in",
        "SEO optimization",
        "Form and CTA integration",
        "Analytics and conversion tracking"
      ],
      useCases: [
        "Product launch pages",
        "Event registration pages",
        "Lead magnet downloads",
        "Special offer promotions"
      ]
    },
    {
      icon: Database,
      title: "Knowledge Base Integration",
      description: "Centralized information hub with intelligent retrieval",
      capabilities: [
        "Multi-source data aggregation",
        "Semantic search capabilities",
        "Auto-categorization and tagging",
        "Version control and updates",
        "Access control and permissions",
        "API integration support"
      ],
      useCases: [
        "Customer support documentation",
        "Internal wiki and procedures",
        "Product information database",
        "Training and onboarding materials"
      ]
    },
    {
      icon: Search,
      title: "Scraper Module",
      description: "Automated data collection and competitive intelligence",
      capabilities: [
        "Web scraping and monitoring",
        "Competitor price tracking",
        "Market trend analysis",
        "News and content aggregation",
        "Data validation and cleaning",
        "Scheduled automated runs"
      ],
      useCases: [
        "Competitive pricing analysis",
        "Market research automation",
        "Lead list building",
        "Industry news monitoring"
      ]
    },
    {
      icon: Workflow,
      title: "Agentic Workflows",
      description: "Complex multi-step automations with decision-making",
      capabilities: [
        "Visual workflow builder",
        "Conditional logic and branching",
        "Multi-system integration",
        "Error handling and retry logic",
        "Real-time monitoring and alerts",
        "Custom code execution"
      ],
      useCases: [
        "Customer onboarding sequences",
        "Order fulfillment processes",
        "Support ticket routing",
        "Data synchronization tasks"
      ]
    }
  ]

  return (
    <main className="min-h-screen bg-[#030314]">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet animate-fade-in">
            DONNA Capabilities
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed animate-slide-up">
            An operational intelligence layer built to execute real workflows across your business
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl space-y-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`${!isEven ? 'lg:order-2' : ''}`}>
                  <div className="holo-panel p-12 rounded-2xl hover-lift">
                    <div className="mb-6 inline-block p-4 rounded-xl bg-gradient-to-br from-[#8A2FFF]/30 to-[#3DE0FF]/30 glow-violet">
                      <Icon className="w-12 h-12 text-[#3DE0FF]" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 gradient-text-violet">
                      {feature.title}
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="glass-panel p-8 rounded-2xl space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-[#3DE0FF]">
                        Key Capabilities
                      </h3>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-[#8A2FFF] mt-1">▸</span>
                            <span>{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <HoloFooter />
    </main>
  )
}

