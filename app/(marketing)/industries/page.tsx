import type { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { generatePageMetadata } from '@/lib/metadata'
import {
  Building2, Hotel, Home, Scissors, Shield, Heart, Music,
  Phone, Calendar, Mail, Users, MessageSquare, Wrench,
  FileText, DollarSign, TrendingUp, Clock, Star, CreditCard,
  Sparkles, Briefcase, GraduationCap, Scale, Stethoscope, ShoppingBag
} from 'lucide-react'

export const metadata: Metadata = generatePageMetadata({
  title: 'Industries - AI Solutions for Every Business',
  description: 'DONNA serves businesses across multiple industries with tailored AI solutions. From real estate to healthcare, hospitality to legal services.',
  path: '/industries',
})

interface Industry {
  name: string
  slug: string
  icon: any
  description: string
  keyFeatures: string[]
}

interface Vertical {
  name: string
  description: string
  industries: Industry[]
}

export default async function IndustriesPage() {
  const verticals: Vertical[] = [
    {
      name: 'Real Estate & Property',
      description: 'AI-powered lead response, scheduling, and client communication for real estate professionals',
      industries: [
        {
          name: 'Real Estate',
          slug: 'real-estate',
          icon: Building2,
          description: 'Never miss a lead. Book more showings. Close more deals with 24/7 AI assistance.',
          keyFeatures: ['Instant Lead Response', 'Showing Scheduler', 'Lead Nurturing', 'Buyer Qualification', 'MLS Integration']
        },
        {
          name: 'Property Management',
          slug: 'property-management',
          icon: Home,
          description: 'Automate tenant communications, maintenance requests, and leasing operations.',
          keyFeatures: ['Maintenance Requests', 'Tenant Communication', 'Leasing Automation', 'Rent Collection', 'Document Management']
        },
        {
          name: 'Commercial Real Estate',
          slug: 'commercial-real-estate',
          icon: Building2,
          description: 'Handle complex commercial inquiries, tenant coordination, and property tours.',
          keyFeatures: ['Tenant Screening', 'Lease Negotiations', 'Property Tours', 'Market Analysis', 'Portfolio Management']
        },
      ]
    },
    {
      name: 'Hospitality & Tourism',
      description: 'Deliver exceptional guest experiences with automated reservations and concierge services',
      industries: [
        {
          name: 'Hotels & Resorts',
          slug: 'hospitality',
          icon: Hotel,
          description: 'Automate reservations, guest services, and inquiries for exceptional experiences.',
          keyFeatures: ['Reservation Management', 'Guest Services', 'Concierge Assistant', 'Review Management', 'Payment Processing']
        },
        {
          name: 'Vacation Rentals',
          slug: 'vacation-rentals',
          icon: Home,
          description: 'Manage bookings, guest communications, and property information 24/7.',
          keyFeatures: ['Booking Automation', 'Guest Messaging', 'Check-in/out Instructions', 'Local Recommendations', 'Review Collection']
        },
        {
          name: 'Restaurants & Dining',
          slug: 'restaurants',
          icon: Briefcase,
          description: 'Handle reservations, takeout orders, and customer inquiries seamlessly.',
          keyFeatures: ['Table Reservations', 'Order Taking', 'Menu Questions', 'Special Events', 'Waitlist Management']
        },
      ]
    },
    {
      name: 'Health, Beauty & Wellness',
      description: 'Streamline appointment scheduling and client communication for service-based businesses',
      industries: [
        {
          name: 'Salons & Spas',
          slug: 'health-beauty',
          icon: Scissors,
          description: 'Automate bookings, reduce no-shows, and keep your schedule full.',
          keyFeatures: ['Appointment Scheduling', 'Service Descriptions', 'Stylist Matching', 'Reminder Automation', 'Package Sales']
        },
        {
          name: 'Medical & Dental',
          slug: 'healthcare',
          icon: Stethoscope,
          description: 'HIPAA-compliant patient communication, appointment scheduling, and reminders.',
          keyFeatures: ['Patient Scheduling', 'Insurance Verification', 'Appointment Reminders', 'Prescription Refills', 'HIPAA Compliance']
        },
        {
          name: 'Fitness & Gyms',
          slug: 'fitness',
          icon: Heart,
          description: 'Manage class bookings, membership inquiries, and trainer scheduling.',
          keyFeatures: ['Class Scheduling', 'Membership Sales', 'Trainer Bookings', 'Trial Sessions', 'Renewal Reminders']
        },
        {
          name: 'Wellness Centers',
          slug: 'wellness',
          icon: Sparkles,
          description: 'Coordinate therapy sessions, wellness consultations, and client follow-ups.',
          keyFeatures: ['Session Booking', 'Client Intake', 'Follow-up Care', 'Package Programs', 'Practitioner Matching']
        },
      ]
    },
    {
      name: 'Professional Services',
      description: 'Enhance client communication and streamline operations for professional service firms',
      industries: [
        {
          name: 'Legal Services',
          slug: 'legal',
          icon: Scale,
          description: 'Qualify leads, schedule consultations, and manage client communications.',
          keyFeatures: ['Consultation Scheduling', 'Lead Qualification', 'Case Intake', 'Document Collection', 'Client Updates']
        },
        {
          name: 'Insurance',
          slug: 'insurance',
          icon: Shield,
          description: 'Automate quote requests, policy questions, and renewal reminders.',
          keyFeatures: ['Quote Automation', 'Lead Qualification', 'Policy Support', 'Renewal Reminders', 'Cross-Sell Opportunities']
        },
        {
          name: 'Financial Services',
          slug: 'financial-services',
          icon: DollarSign,
          description: 'Schedule advisor meetings, answer product questions, and nurture leads.',
          keyFeatures: ['Advisor Scheduling', 'Product Information', 'Lead Nurturing', 'Compliance Support', 'Client Onboarding']
        },
        {
          name: 'Consulting',
          slug: 'consulting',
          icon: Briefcase,
          description: 'Manage discovery calls, proposal follow-ups, and client communications.',
          keyFeatures: ['Discovery Calls', 'Proposal Follow-up', 'Project Updates', 'Resource Scheduling', 'Client Portal']
        },
      ]
    },
    {
      name: 'Entertainment & Lifestyle',
      description: 'Engage customers and automate bookings for entertainment and lifestyle businesses',
      industries: [
        {
          name: 'Nightlife & Clubs',
          slug: 'nightlife',
          icon: Music,
          description: 'Manage VIP tables, guest lists, and event bookings automatically.',
          keyFeatures: ['VIP Reservations', 'Guest List Management', 'Event Tickets', 'Bottle Service', 'Promoter Coordination']
        },
        {
          name: 'Event Venues',
          slug: 'event-venues',
          icon: Calendar,
          description: 'Handle venue inquiries, availability checks, and booking coordination.',
          keyFeatures: ['Venue Availability', 'Event Booking', 'Catering Coordination', 'Equipment Rental', 'Vendor Management']
        },
        {
          name: 'Entertainment Services',
          slug: 'entertainment',
          icon: Star,
          description: 'Book performers, coordinate events, and manage client communications.',
          keyFeatures: ['Talent Booking', 'Event Coordination', 'Contract Management', 'Performance Scheduling', 'Client Relations']
        },
      ]
    },
    {
      name: 'Nonprofit & Community',
      description: 'Strengthen community engagement and automate member communications',
      industries: [
        {
          name: 'Nonprofits & Chambers',
          slug: 'nonprofits',
          icon: Users,
          description: 'Automate member management, event registration, and donor outreach.',
          keyFeatures: ['Member Management', 'Event Registration', 'Donor Outreach', 'Volunteer Coordination', 'Newsletter Automation']
        },
        {
          name: 'Religious Organizations',
          slug: 'religious',
          icon: Heart,
          description: 'Manage congregation communications, event RSVPs, and volunteer scheduling.',
          keyFeatures: ['Event Management', 'Volunteer Coordination', 'Donation Processing', 'Prayer Requests', 'Community Outreach']
        },
        {
          name: 'Educational Institutions',
          slug: 'education',
          icon: GraduationCap,
          description: 'Handle admissions inquiries, campus tours, and parent communications.',
          keyFeatures: ['Admissions Support', 'Campus Tours', 'Parent Communication', 'Event Registration', 'Student Services']
        },
      ]
    },
    {
      name: 'Retail & E-commerce',
      description: 'Enhance customer service and drive sales with AI-powered communication',
      industries: [
        {
          name: 'Retail Stores',
          slug: 'retail',
          icon: ShoppingBag,
          description: 'Answer product questions, check inventory, and schedule appointments.',
          keyFeatures: ['Product Information', 'Inventory Checks', 'Store Hours', 'Personal Shopping', 'Order Status']
        },
        {
          name: 'E-commerce',
          slug: 'ecommerce',
          icon: ShoppingBag,
          description: 'Provide 24/7 customer support, order tracking, and product recommendations.',
          keyFeatures: ['Order Tracking', 'Product Recommendations', 'Return Processing', 'Live Chat Support', 'Abandoned Cart Recovery']
        },
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-[#030314] bg-radial-glow relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 neural-grid-animated opacity-20" />
        <div className="absolute inset-0 circuitry-lines" />
        <div className="relative z-10 container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text text-glow-violet">
            DONNA for Every Industry
          </h1>
          <p className="text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Tailored AI solutions designed for your industry's unique needs. From real estate to healthcare, hospitality to professional services.
          </p>
        </div>
      </section>

      {/* Verticals */}
      {verticals.map((vertical, vIndex) => (
        <section key={vIndex} className={`py-20 px-4 ${vIndex % 2 === 1 ? 'bg-black/20' : ''}`}>
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                {vertical.name}
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                {vertical.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vertical.industries.map((industry, iIndex) => {
                const Icon = industry.icon
                return (
                  <Link
                    key={iIndex}
                    href={`/industries/${industry.slug}`}
                    className="group holo-panel p-8 rounded-xl hover:border-[#8A2FFF] transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#8A2FFF] to-[#6B4FFF] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#8A2FFF] transition-colors">
                        {industry.name}
                      </h3>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-[#3DE0FF] uppercase tracking-wide">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {industry.keyFeatures.slice(0, 4).map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-[#8A2FFF] mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex items-center gap-2 text-[#8A2FFF] font-medium group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="holo-panel p-12 rounded-2xl">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              DONNA's AI platform is highly customizable and can be tailored to any industry. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-accent text-background hover:bg-accent/90 transition-colors text-lg font-medium"
              >
                Contact Sales
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-3 rounded-lg border border-accent text-accent hover:bg-accent/10 transition-colors text-lg font-medium"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
