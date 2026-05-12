import Link from "next/link"
import { ArrowRight, Award, Globe, Heart, Target, Users, Zap } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { companyInfo, certifications } from "@/lib/data"
import Image from "next/image"

export const metadata = {
  title: "About Us | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Learn about ADA CERAMICS' 20+ years of ceramic manufacturing expertise, our commitment to quality, and our mission to deliver excellence in every piece.",
}

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Every piece undergoes rigorous quality control to ensure it meets international standards.",
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "We prioritize understanding and meeting our customers' unique needs and requirements.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Continuously improving our processes and designs to stay ahead of market trends.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients in over 50 countries with reliable logistics and support.",
    },
  ]

  const timeline = [
    { year: "2003", event: "Founded in Chaozhou, China's ceramic capital" },
    { year: "2008", event: "Obtained FDA certification for US market" },
    { year: "2012", event: "Expanded factory to 30,000 sqm" },
    { year: "2015", event: "Achieved LFGB certification for European market" },
    { year: "2018", event: "Upgraded to current 50,000 sqm facility" },
    { year: "2020", event: "Launched OEM/ODM services division" },
    { year: "2023", event: "Served 500+ global brands milestone" },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span style={{ color: '#1a1a1a' }}>Crafting Excellence</span>
              <span className="block" style={{ color: '#8b7355' }}>
                Since 2003
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed" style={{ color: '#6b7280' }}>
              We are a leading ceramic manufacturer based in Chaozhou, China, 
              dedicated to producing premium food-grade ceramics for global brands.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Two Decades of Ceramic Mastery
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2003 in Chaozhou, the heart of China&apos;s ceramic industry, 
                  ADA CERAMICS began as a small workshop with a big vision: to create 
                  ceramics that combine traditional craftsmanship with modern quality standards.
                </p>
                <p>
                  Over the years, we have grown into a 50,000 sqm state-of-the-art facility 
                  with over 300 skilled workers and 10+ production lines. Our commitment to 
                  quality has earned us certifications from FDA, LFGB, and other international bodies.
                </p>
                <p>
                  Today, we proudly serve over 500 global brands across 50+ countries, 
                  delivering millions of ceramic products that grace tables around the world.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image 
                  src="/factory-monitoring-system.webp" 
                  alt="ADA CERAMICS Factory" 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl">
                <p className="text-4xl font-bold">{companyInfo.stats.yearsExperience}</p>
                <p className="text-sm opacity-90">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the world&apos;s most trusted ceramic manufacturer, delivering 
                exceptional quality products that meet the highest safety standards 
                while providing outstanding value to our partners worldwide.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To set the global standard for ceramic excellence, where every piece 
                we create reflects our dedication to craftsmanship, innovation, and 
                sustainable manufacturing practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Milestones Over the Years
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-center gap-8 mb-8 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"} pl-12 md:pl-0`}>
                    <div className="bg-card rounded-xl p-6 border border-border inline-block">
                      <p className="text-2xl font-bold text-primary mb-1">{item.year}</p>
                      <p className="text-muted-foreground">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-2">Quality Assurance</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              International Certifications
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card rounded-2xl p-6 border border-border text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{cert.name}</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.fullName}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help bring your ceramic product ideas to life 
            with our expertise and manufacturing capabilities.
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
              href="/factory"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Visit Our Factory
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
