"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Footer } from "@/components/layout/footer"
import type { Product } from "@/lib/supabase/types"
import {
  ArrowRight,
  Shield,
  Award,
  Truck,
  Package,
  Mail,
  Phone,
  MapPin,
  Globe,
  Menu,
  X,
  Pen,
  Palette,
  Box,
  Check,
  Send,
} from "lucide-react"

interface CategoryData {
  slug: string
  name: string
  description: string
  image: string | null
}

interface HomeClientProps {
  categories: CategoryData[]
}

export function HomeClient({ categories }: HomeClientProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    productCategory: "",
    estimatedQuantity: "",
    projectDetails: "",
  })
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Hi, I'm ${formData.fullName} from ${formData.companyName}. 
Email: ${formData.email}
Phone: ${formData.phone}
Product Category: ${formData.productCategory}
Quantity: ${formData.estimatedQuantity}
Details: ${formData.projectDetails}`
    window.open(
      `https://wa.me/8615919512131?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank"
    )
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 50, 
        backgroundColor: 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #f3f4f6',
        width: '100%',
        overflow: 'hidden',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <span style={{ 
                fontFamily: 'Georgia, Times New Roman, serif',
                fontSize: '20px', 
                fontWeight: 400,
                color: '#1a1a1a',
                letterSpacing: '0.05em'
              }}>
                ADA CERAMICS
              </span>
            </Link>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden lg:flex">
              <div
                style={{ position: 'relative' }}
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <Link
                  href="/products"
                  style={{
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#4b5563',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 0',
                  }}
                >
                  Products
                </Link>
                
                {isProductsOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-20px',
                    paddingTop: '8px',
                  }}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '12px',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.12)',
                      border: '1px solid #e5e7eb',
                      padding: '8px 0',
                      minWidth: '260px',
                    }}>
                      {categories.map((category) => (
                        <Link
                          key={category.slug}
                          href={`/products?category=${category.slug}`}
                          style={{
                            display: 'block',
                            padding: '12px 20px',
                            fontSize: '14px',
                            color: '#374151',
                            textDecoration: 'none',
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <Link href="/about" style={{ fontSize: '15px', fontWeight: 400, color: '#4b5563', textDecoration: 'none' }}>
                About Us
              </Link>
              <Link href="/factory" style={{ fontSize: '15px', fontWeight: 400, color: '#4b5563', textDecoration: 'none' }}>
                Factory
              </Link>
              <Link href="/oem-odm" style={{ fontSize: '15px', fontWeight: 400, color: '#4b5563', textDecoration: 'none' }}>
                OEM/ODM
              </Link>
              <Link href="/contact" style={{ fontSize: '15px', fontWeight: 400, color: '#4b5563', textDecoration: 'none' }}>
                Contact
              </Link>
            </nav>

            <Link
              href="/contact"
              className="hidden lg:inline-flex"
              style={{
                backgroundColor: '#1f2937',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '6px',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Get Quote
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden"
              style={{ padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {isMobileMenuOpen ? <X style={{ width: '24px', height: '24px', color: '#1f2937' }} /> : <Menu style={{ width: '24px', height: '24px', color: '#1f2937' }} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e5e7eb', padding: '16px', width: '100%', boxSizing: 'border-box' }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '12px 16px', color: '#374151', textDecoration: 'none', borderRadius: '8px' }}>Products</Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '12px 16px', color: '#374151', textDecoration: 'none', borderRadius: '8px' }}>About Us</Link>
              <Link href="/factory" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '12px 16px', color: '#374151', textDecoration: 'none', borderRadius: '8px' }}>Factory</Link>
              <Link href="/oem-odm" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '12px 16px', color: '#374151', textDecoration: 'none', borderRadius: '8px' }}>OEM/ODM</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '12px 16px', color: '#374151', textDecoration: 'none', borderRadius: '8px' }}>Contact</Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} style={{ marginTop: '8px', padding: '12px 16px', backgroundColor: '#1f2937', color: '#ffffff', textDecoration: 'none', borderRadius: '8px', textAlign: 'center' }}>Get Quote</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '72px',
        backgroundColor: '#f5f3ef',
        overflow: 'hidden',
      }}>
       {/* 背景 - 使用 public 目录下的 bg.webp */}
<div style={{ position: 'absolute', inset: 0, backgroundColor: '#f5f3ef' }}>
  <Image
    src="/bg.webp"
    alt="Hero Background"
    fill
    style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.6 }}
    priority
  />
</div>

        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center',
          padding: '80px 24px',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#ffffff',
            border: '1px solid #e5e7eb',
            borderRadius: '9999px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', border: '1.5px solid #6b7280' }} />
            <span style={{ fontSize: '14px', fontWeight: 400, color: '#4b5563' }}>
              Trusted by 500+ Global Brands
            </span>
          </div>

          <h1 style={{ marginBottom: '24px' }}>
            <span style={{
              display: 'block',
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '56px',
              fontWeight: 400,
              color: '#1a1a1a',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}>
              Food Grade Ceramic
            </span>
            <span style={{
              display: 'block',
              fontFamily: 'Georgia, Times New Roman, serif',
              fontSize: '56px',
              fontWeight: 400,
              color: '#8b7355',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginTop: '8px',
            }}>
              Custom OEM ODM
            </span>
          </h1>

          <p style={{
            fontSize: '17px',
            fontWeight: 400,
            color: '#6b7280',
            lineHeight: 1.7,
            maxWidth: '640px',
            margin: '0 auto 40px auto',
          }}>
            FDA & LFGB Certified premium ceramic manufacturer with 20+ years of expertise. From tableware to custom designs, we deliver excellence in every piece.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '48px',
          }}>
            <Link
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#1f2937',
                color: '#ffffff',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Request a Quote
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
            <Link
              href="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#ffffff',
                color: '#1f2937',
                padding: '14px 28px',
                borderRadius: '8px',
                fontSize: '15px',
                fontWeight: 500,
                textDecoration: 'none',
                border: '1px solid #d1d5db',
              }}
            >
              View Products
            </Link>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '32px',
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield style={{ width: '18px', height: '18px', color: '#6b7280' }} />
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#6b7280' }}>FDA Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield style={{ width: '18px', height: '18px', color: '#6b7280' }} />
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#6b7280' }}>LFGB Certified</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe style={{ width: '18px', height: '18px', color: '#6b7280' }} />
              <span style={{ fontSize: '14px', fontWeight: 400, color: '#6b7280' }}>Global Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Collections Section - 从数据库读取图片 */}
      <section style={{ padding: '96px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#8b7355', fontSize: '14px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Our Collections</p>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px' }}>
              Premium Product Categories
            </h2>
            <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Discover our comprehensive range of food-grade ceramic products, each crafted with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <Link key={category.slug} href={`/products?category=${category.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #f3f4f6', transition: 'all 0.3s' }}>
                  <div style={{ aspectRatio: '4/3', position: 'relative', backgroundColor: '#f3f4f6' }}>
                    {category.image ? (
                      <Image src={category.image} alt={category.name} fill style={{ objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                        <Package style={{ width: '48px', height: '48px' }} />
                      </div>
                    )}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>{category.name}</h3>
                    <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.6 }}>{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={{ padding: '80px 0 60px 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#8b7355', fontSize: '13px', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              WHY CHOOSE US
            </p>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '20px', lineHeight: 1.2 }}>
              Your Trusted Ceramic Partner
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
              We combine traditional craftsmanship with modern technology to deliver exceptional ceramic products for the global market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px 32px 24px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#1f2937', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Award style={{ width: '24px', height: '24px', color: '#ffffff' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.3 }}>20+ Years Experience</h3>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.6 }}>Over 20 years of ceramic manufacturing expertise, serving global brands with consistent quality and reliability.</p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px 32px 24px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#1f2937', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Shield style={{ width: '24px', height: '24px', color: '#ffffff' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.3 }}>Food Grade Certified</h3>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.6 }}>All products meet strict international food safety standards including FDA, LFGB, and CA65 certifications.</p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px 32px 24px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#1f2937', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Package style={{ width: '24px', height: '24px', color: '#ffffff' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.3 }}>Low MOQ</h3>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.6 }}>Flexible minimum order quantities to support businesses of all sizes, from startups to enterprises.</p>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px 24px 32px 24px', border: '1px solid #e5e7eb' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#1f2937', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Globe style={{ width: '24px', height: '24px', color: '#ffffff' }} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a1a', marginBottom: '12px', lineHeight: 1.3 }}>Global Shipping</h3>
              <p style={{ color: '#9ca3af', fontSize: '15px', lineHeight: 1.6 }}>Reliable worldwide logistics network ensuring safe delivery to over 80 countries and regions.</p>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #e5e7eb', marginBottom: '60px' }} />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1 }}>
                20<span style={{ color: '#d97706', fontSize: '40px' }}>+</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>YEARS EXPERIENCE</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1 }}>
                500<span style={{ color: '#d97706', fontSize: '40px' }}>+</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>GLOBAL CLIENTS</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1 }}>
                50<span style={{ color: '#d97706', fontSize: '40px' }}>+</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>COUNTRIES SERVED</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '8px', lineHeight: 1 }}>
                10M<span style={{ color: '#d97706', fontSize: '40px' }}>+</span>
              </div>
              <div style={{ color: '#9ca3af', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>PRODUCTS DELIVERED</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facility Section */}
      <section style={{ padding: '96px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p style={{ color: '#8b7355', fontSize: '14px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Our Facility</p>
              <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '40px', fontWeight: 400, color: '#1a1a1a', marginBottom: '24px' }}>
                State-of-the-Art Manufacturing
              </h2>
              <p style={{ color: '#6b7280', fontSize: '16px', marginBottom: '32px', lineHeight: 1.7 }}>
                Our 50,000 sqm facility combines traditional craftsmanship with modern technology, featuring 10+ production lines and a dedicated team of 300+ skilled workers.
              </p>
              
              <div className="grid grid-cols-2 gap-5">
                <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '4px' }}>50,000</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>sqm Factory</div>
                </div>
                <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '4px' }}>300+</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>Skilled Workers</div>
                </div>
                <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '4px' }}>10+</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>Production Lines</div>
                </div>
                <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '32px', fontWeight: 400, color: '#1a1a1a', marginBottom: '4px' }}>98%</div>
                  <div style={{ color: '#6b7280', fontSize: '14px' }}>Quality Rate</div>
                </div>
              </div>
            </div>
            
            <div style={{ aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', position: 'relative', backgroundColor: '#f3f4f6' }}>
              {categories[0]?.image ? (
                <Image src={categories[0].image} alt="ADA CERAMICS Factory" fill style={{ objectFit: 'cover' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}>
                  <Package style={{ width: '64px', height: '64px' }} />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Certified Excellence Section */}
      <section style={{ padding: '80px 0 60px 0', background: 'linear-gradient(180deg, #6b7280 0%, #1f2937 15%, #111827 100%)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{ width: '56px', height: '56px', backgroundColor: '#374151', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield style={{ width: '24px', height: '24px', color: '#9ca3af' }} />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, fontStyle: 'italic', color: '#ffffff', marginBottom: '20px', lineHeight: 1.2, letterSpacing: '0.01em' }}>
              Certified Excellence
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '17px', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
              Our products are backed by internationally recognized certifications, ensuring safety, quality, and ethical manufacturing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', border: '1px solid #374151' }}>
              <div style={{ width: '72px', height: '72px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <span style={{ fontSize: '18px', fontWeight: 700, color: '#1f2937', letterSpacing: '-0.02em' }}>FDA</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: 1.4 }}>U.S. Food & Drug Administration</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>Compliant with FDA food contact regulations</p>
            </div>

            <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', border: '1px solid #374151' }}>
              <div style={{ width: '72px', height: '72px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#1f2937', letterSpacing: '-0.02em' }}>LFGB</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: 1.4 }}>German Food Safety</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>Meets German food-grade material standards</p>
            </div>

            <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', border: '1px solid #374151' }}>
              <div style={{ width: '72px', height: '72px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#1f2937', letterSpacing: '-0.02em' }}>Sedex</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: 1.4 }}>Supplier Ethical Data Exchange</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>Verified ethical trading practices</p>
            </div>

            <div style={{ backgroundColor: '#1f2937', borderRadius: '12px', padding: '32px 24px', textAlign: 'center', border: '1px solid #374151' }}>
              <div style={{ width: '72px', height: '72px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px auto' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: '#1f2937', letterSpacing: '-0.02em' }}>BSCI</span>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', marginBottom: '8px', lineHeight: 1.4 }}>Business Social Compliance</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.5 }}>Certified social compliance standards</p>
            </div>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ color: '#6b7280', fontSize: '14px' }}>
              Additional certifications available: <span style={{ color: '#9ca3af' }}>CA65, EN, SGS, ISO 9001</span>
            </p>
          </div>
        </div>
      </section>

      {/* OEM/ODM Services Section */}
      <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#6b7280', fontSize: '12px', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              OEM / ODM SERVICES
            </p>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '56px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.2 }}>
              Your Brand, Our Expertise
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '15px', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              From concept to delivery, we provide comprehensive OEM and ODM services to bring your ceramic product ideas to market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Pen style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Custom Design</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Bring your unique vision to life with our expert design team. We transform concepts into production-ready designs.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Palette style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Custom Decoration</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Choose from various decoration techniques including hand-painting, decals, reactive glazes, and embossing.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Box style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Custom Packaging</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>Branded packaging solutions from gift boxes to bulk shipping containers, tailored to your requirements.</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '28px', border: '1px solid #e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#f3f4f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Truck style={{ width: '20px', height: '20px', color: '#6b7280' }} />
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Full Service Logistics</h3>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.6 }}>End-to-end supply chain management with quality inspection, documentation, and worldwide delivery.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '28px', fontWeight: 400, color: '#1a1a1a', marginBottom: '16px' }}>
                Our OEM/ODM Process
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: 1.7, marginBottom: '32px' }}>
                {"We've streamlined our process to ensure efficient communication, quality deliverables, and timely production. Your dedicated account manager guides you through each step."}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #a16207 0%, #ca8a04 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>1</div>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>Initial consultation & requirements</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #92400e 0%, #b45309 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>2</div>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>Design development & sampling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #78350f 0%, #92400e 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>3</div>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>Sample approval & refinement</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #451a03 0%, #78350f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>4</div>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>Production & quality control</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #1c1917 0%, #451a03 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, color: '#ffffff' }}>5</div>
                  <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>Shipping & delivery</span>
                </div>
              </div>
            </div>

            <div style={{ backgroundColor: '#f9fafb', borderRadius: '12px', padding: '32px', border: '1px solid #e5e7eb' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a', marginBottom: '24px' }}>Why Partner With Us?</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>15+ years OEM/ODM experience</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>In-house design & R&D team</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Flexible MOQ starting from 500 pcs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Fast sampling (7-15 days)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Dedicated project manager</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Check style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  <span style={{ fontSize: '14px', color: '#6b7280' }}>Quality guarantee & after-sales support</span>
                </div>
              </div>
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', backgroundColor: '#1f2937', color: '#ffffff', padding: '14px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, textDecoration: 'none' }}>
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Request a Quote Section */}
      <section id="contact" style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: '#8b7355', fontSize: '12px', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              GET IN TOUCH
            </p>
            <h2 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '42px', fontWeight: 400, fontStyle: 'italic', color: '#1a1a1a', marginBottom: '16px', lineHeight: 1.2 }}>
              Request a Quote
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Ready to start your project? Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <h3 style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: '22px', fontWeight: 400, color: '#1a1a1a', marginBottom: '28px' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#f9fafb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #e5e7eb' }}>
                    <Mail style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '4px' }}>Email</p>
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>sukichoi@adaceramics.com</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#f9fafb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #e5e7eb' }}>
                    <Phone style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '4px' }}>Phone / WhatsApp</p>
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a' }}>+86 15919512131</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: '#f9fafb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid #e5e7eb' }}>
                    <MapPin style={{ width: '18px', height: '18px', color: '#6b7280' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '13px', color: '#9ca3af', marginBottom: '4px' }}>Factory Address</p>
                    <p style={{ fontSize: '15px', fontWeight: 500, color: '#1a1a1a', lineHeight: 1.5 }}>
                      Ceramic Industrial Zone<br />
                      Chaozhou, Guangdong<br />
                      China 521000
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: '#f3f4f6', borderRadius: '8px', padding: '20px 24px' }}>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#1a1a1a', marginBottom: '8px' }}>Business Hours</h4>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.6 }}>
                  Monday - Saturday<br />
                  9:00 AM - 6:00 PM (GMT+8)
                </p>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Full Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff' }}
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Company Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff' }}
                      placeholder="Your Company Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Email Address <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff' }}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff' }}
                      placeholder="+1 234 567 8900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Product Category <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      value={formData.productCategory}
                      onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#6b7280', backgroundColor: '#ffffff', cursor: 'pointer' }}
                    >
                      <option value="">Select product category</option>
                      <option value="white-porcelain">White High-temp Porcelain</option>
                      <option value="color-glaze">Color Glaze Ceramic</option>
                      <option value="kiln-change">Kiln Change Ceramic</option>
                      <option value="custom">Custom Design</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                      Estimated Quantity
                    </label>
                    <input
                      type="text"
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff' }}
                      placeholder="e.g., 5,000 pieces"
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '14px', fontWeight: 500, color: '#1a1a1a', marginBottom: '8px' }}>
                    Project Details <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    style={{ width: '100%', padding: '12px 16px', border: '1px solid #e5e7eb', borderRadius: '6px', fontSize: '14px', color: '#1a1a1a', backgroundColor: '#ffffff', resize: 'vertical' }}
                    placeholder="Please describe your requirements, including product specifications, customization needs, target price, etc."
                  />
                </div>

                <button
                  type="submit"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#1f2937', color: '#ffffff', padding: '12px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer' }}
                >
                  Send Inquiry
                  <Send style={{ width: '16px', height: '16px' }} />
                </button>

                <p style={{ marginTop: '16px', fontSize: '13px', color: '#9ca3af' }}>
                  By submitting this form, you agree to our Privacy Policy. We will respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
