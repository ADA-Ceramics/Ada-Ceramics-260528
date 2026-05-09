import Link from "next/link"
import { ArrowRight, CheckCircle, Factory, Cog, Shield, Truck, Users, Ruler, Thermometer, Eye } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { companyInfo } from "@/lib/data"

export const metadata = {
  title: "Our Factory | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Explore ADA CERAMICS' 50,000 sqm state-of-the-art ceramic manufacturing facility with 10+ production lines and 300+ skilled workers.",
}

export default function FactoryPage() {
  const facilities = [
    {
      icon: Factory,
      title: "Raw Material Processing",
      description: "Advanced ball mills and spray dryers for consistent clay preparation",
    },
    {
      icon: Cog,
      title: "Forming Workshop",
      description: "Automated and semi-automated forming lines for various product shapes",
    },
    {
      icon: Thermometer,
      title: "Kiln Firing",
      description: "High-temperature tunnel kilns with precise temperature control",
    },
    {
      icon: Ruler,
      title: "Glazing Department",
      description: "Spray glazing and dipping lines with color matching systems",
    },
    {
      icon: Eye,
      title: "Quality Control Lab",
      description: "Fully equipped testing lab for safety and quality assurance",
    },
    {
      icon: Truck,
      title: "Packaging & Logistics",
      description: "Modern packaging facility with secure container loading",
    },
  ]

  const processes = [
    {
      step: 1,
      title: "Raw Material Selection",
      description: "We source high-quality clay and materials from certified suppliers, ensuring consistency and purity.",
    },
    {
      step: 2,
      title: "Body Preparation",
      description: "Materials are processed through ball mills and spray dryers to achieve optimal particle size and moisture content.",
    },
    {
      step: 3,
      title: "Forming",
      description: "Products are shaped using various techniques including slip casting, jiggering, and isostatic pressing.",
    },
    {
      step: 4,
      title: "Drying & Bisque Firing",
      description: "Formed pieces undergo controlled drying followed by initial firing at 800-900°C.",
    },
    {
      step: 5,
      title: "Glazing & Decoration",
      description: "Products receive glaze application and decorations through spraying, dipping, or hand-painting.",
    },
    {
      step: 6,
      title: "Final Firing",
      description: "High-temperature firing at 1250-1380°C to achieve durability and food safety.",
    },
    {
      step: 7,
      title: "Quality Inspection",
      description: "100% visual inspection plus random sampling for technical testing and certification compliance.",
    },
    {
      step: 8,
      title: "Packaging & Shipping",
      description: "Careful packaging with custom solutions and worldwide shipping via trusted logistics partners.",
    },
  ]

  const qualityFeatures = [
    "100% visual inspection on all products",
    "Random sampling for mechanical testing",
    "Lead and cadmium release testing",
    "Thermal shock resistance testing",
    "Dishwasher and microwave safety testing",
    "Third-party certification audits",
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#f5f3ef] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              State-of-the-Art
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Manufacturing Facility
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Our 50,000 sqm facility combines cutting-edge technology with traditional 
              craftsmanship, ensuring every piece meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl shadow-xl border border-border p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{companyInfo.factory.area}</p>
                <p className="text-muted-foreground mt-2">Square Meters</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{companyInfo.factory.workers}</p>
                <p className="text-muted-foreground mt-2">Skilled Workers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{companyInfo.factory.productionLines}</p>
                <p className="text-muted-foreground mt-2">Production Lines</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary">{companyInfo.factory.qualityRate}</p>
                <p className="text-muted-foreground mt-2">Quality Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Our Facilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Modern Manufacturing Infrastructure
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <facility.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Production Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processes.map((process) => (
              <div key={process.step} className="bg-card rounded-2xl p-6 border border-border relative">
                <div className="absolute -top-4 left-6 w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
                  {process.step}
                </div>
                <h3 className="font-semibold text-foreground mt-4 mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Quality Assurance</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Rigorous Quality Control
              </h2>
              <p className="text-muted-foreground mb-8">
                Our dedicated quality control team ensures every product meets international 
                safety and quality standards before leaving our facility.
              </p>
              <ul className="space-y-4">
                {qualityFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary/20" />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-500 text-white rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold">{companyInfo.factory.qualityRate}</p>
                <p className="text-sm opacity-90">Pass Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Users className="w-32 h-32 text-primary/20" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-primary font-semibold mb-2">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Skilled Craftspeople
              </h2>
              <p className="text-muted-foreground mb-6">
                Our team of 300+ skilled workers brings together decades of experience 
                in ceramic manufacturing. From master craftspeople to quality engineers, 
                every team member is dedicated to excellence.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">Master Craftspeople</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground">QC Engineers</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">R&D Designers</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <p className="text-2xl font-bold text-primary">10+</p>
                  <p className="text-sm text-muted-foreground">Project Managers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Schedule a Factory Visit
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            See our manufacturing process firsthand. We welcome partners and potential 
            clients to visit our facility and experience our commitment to quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a2e] px-8 py-4 rounded-xl font-semibold hover:bg-white/90 transition-all"
            >
              Book a Visit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/oem-odm"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Explore OEM/ODM Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
