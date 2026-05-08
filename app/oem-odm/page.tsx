import Link from "next/link"
import { ArrowRight, Check, Paintbrush, Palette, Box, Truck, FileText, Headphones, Clock, Award, Shield, Users } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export const metadata = {
  title: "OEM/ODM Services | ADA CERAMICS - Custom Ceramic Manufacturing",
  description: "Comprehensive OEM and ODM services for ceramic products. From custom design to packaging, we bring your ceramic product ideas to market.",
}

export default function OemOdmPage() {
  const services = [
    {
      icon: Paintbrush,
      title: "Custom Design",
      description: "Bring your unique vision to life with our expert design team. We transform concepts into production-ready designs with 3D modeling and prototyping.",
      features: ["3D design visualization", "Multiple design iterations", "Technical drawings", "Sample production"],
    },
    {
      icon: Palette,
      title: "Custom Decoration",
      description: "Choose from various decoration techniques to create distinctive products that stand out in the market.",
      features: ["Hand-painting", "Decal printing", "Reactive glazes", "Embossing & debossing", "Gold/platinum trim"],
    },
    {
      icon: Box,
      title: "Custom Packaging",
      description: "Branded packaging solutions from gift boxes to bulk shipping containers, tailored to your requirements.",
      features: ["Gift box design", "Retail packaging", "Bulk packaging", "Eco-friendly options"],
    },
    {
      icon: Truck,
      title: "Logistics Management",
      description: "End-to-end supply chain management with quality inspection, documentation, and worldwide delivery.",
      features: ["FOB/CIF/DDP terms", "Container optimization", "Customs documentation", "Worldwide shipping"],
    },
  ]

  const processSteps = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Share your product concept, requirements, and target market. Our team will assess feasibility and provide initial guidance.",
      duration: "1-2 days",
    },
    {
      step: 2,
      title: "Design & Development",
      description: "Our design team creates detailed 3D models and technical specifications based on your requirements.",
      duration: "3-7 days",
    },
    {
      step: 3,
      title: "Sample Production",
      description: "We produce physical samples for your approval, including any custom decorations and packaging options.",
      duration: "7-15 days",
    },
    {
      step: 4,
      title: "Sample Approval",
      description: "Review and approve samples. Request modifications if needed - we offer multiple revision rounds.",
      duration: "As needed",
    },
    {
      step: 5,
      title: "Production Planning",
      description: "Once approved, we finalize production schedules, confirm quantities, and arrange materials.",
      duration: "3-5 days",
    },
    {
      step: 6,
      title: "Mass Production",
      description: "Full-scale production with regular progress updates and in-line quality checks.",
      duration: "15-45 days",
    },
    {
      step: 7,
      title: "Quality Control",
      description: "Comprehensive inspection before packaging, with detailed QC reports provided.",
      duration: "2-3 days",
    },
    {
      step: 8,
      title: "Delivery",
      description: "Careful packaging and shipping via your preferred method, with full tracking provided.",
      duration: "15-30 days",
    },
  ]

  const advantages = [
    {
      icon: Clock,
      title: "15+ Years OEM/ODM Experience",
      description: "Extensive experience working with global brands across diverse product categories.",
    },
    {
      icon: Users,
      title: "In-house Design Team",
      description: "Dedicated R&D and design team to support your product development needs.",
    },
    {
      icon: Award,
      title: "Low MOQ from 500 pcs",
      description: "Flexible minimum orders to support businesses of all sizes.",
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "All products come with our quality guarantee and after-sales support.",
    },
  ]

  const faqs = [
    {
      question: "What is the minimum order quantity (MOQ)?",
      answer: "Our standard MOQ starts from 500 pieces per design. For certain products or premium customizations, MOQ may vary. Contact us to discuss your specific requirements.",
    },
    {
      question: "How long does sample production take?",
      answer: "Standard samples typically take 7-15 days. Rush samples can be arranged for an additional fee with 5-7 day turnaround.",
    },
    {
      question: "Can you match existing product designs?",
      answer: "Yes, we can replicate or improve upon existing designs. Please provide detailed specifications, images, or physical samples for accurate reproduction.",
    },
    {
      question: "What certifications do your products have?",
      answer: "Our products are FDA, LFGB, CA65, and SGS certified. We can also arrange additional certifications based on your market requirements.",
    },
    {
      question: "Do you offer design assistance?",
      answer: "Absolutely! Our in-house design team can help develop your concept from scratch or refine existing ideas into production-ready designs.",
    },
    {
      question: "What payment terms do you accept?",
      answer: "We typically work with 30% deposit upon order confirmation and 70% balance before shipment. Letter of Credit is also accepted for large orders.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Brand,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Our Expertise
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8">
              From concept to delivery, we provide comprehensive OEM and ODM services 
              to bring your ceramic product ideas to market with excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Comprehensive OEM/ODM Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                      <Check className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our OEM/ODM Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We have streamlined our process to ensure efficient communication, quality deliverables, 
              and timely production. Your dedicated account manager guides you through each step.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-card rounded-2xl p-6 border border-border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  {step.step}
                </div>
                <h3 className="font-semibold text-foreground mt-4 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{step.description}</p>
                <p className="text-xs text-primary font-medium">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Why Partner With Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Your Success is Our Priority
              </h2>
              <p className="text-muted-foreground mb-8">
                With over 15 years of OEM/ODM experience, we have helped hundreds of brands 
                bring their ceramic product visions to life. Here is what sets us apart:
              </p>
              <div className="space-y-6">
                {advantages.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-white/70">Minimum Order</span>
                  <span className="text-white font-semibold">500 pcs</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-white/70">Sample Lead Time</span>
                  <span className="text-white font-semibold">7-15 days</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-white/70">Production Lead Time</span>
                  <span className="text-white font-semibold">15-45 days</span>
                </div>
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-white/70">Design Revisions</span>
                  <span className="text-white font-semibold">Unlimited</span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-white/70">After-Sales Support</span>
                  <span className="text-white font-semibold">Lifetime</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="w-full mt-8 inline-flex items-center justify-center gap-2 bg-white text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Contact us today to discuss your OEM/ODM requirements. Our team is ready 
            to help bring your ceramic product ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
            >
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
