"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X,"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { CATEGORY_INFO } from "@/lib/supabase/types"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Factory", href: "/factory" },
    { name: "OEM/ODM", href: "/oem-odm" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      {/* 🔥 关键修复：给父容器加 overflow-visible，避免菜单被裁 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="flex items-center justify-between h-20 overflow-visible">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
            )}>
              ADA CERAMICS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 overflow-visible">
            {navItems.map((item) => (
              <div key={item.name} className="relative group overflow-visible">
                {item.hasDropdown ? (
                  <div
                    className="relative overflow-visible"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                        isScrolled || pathname !== "/"
                          ? "text-foreground hover:text-primary"
                          : "text-white/90 hover:text-white",
                        pathname.startsWith("/products") && "text-primary"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        isProductsOpen && "rotate-180"
                      )} />
                    </Link>
                    
                    {/* 🔥 关键修复：下拉菜单强制脱离父容器裁剪 */}
                    <div className={cn(
                      "absolute top-full left-0 w-[320px] z-[9999] pt-2 transition-all duration-300",
                      isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="bg-white rounded-xl shadow-xl border border-border/50 py-2 min-h-[300px]">
                        <div className="px-4 py-2 border-b border-border/50">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Product Categories
                          </p>
                        </div>
                        {Object.entries(CATEGORY_INFO).map(([slug, info]) => (
                          <Link
                            key={slug}
                            href={`/products/${slug}`}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                              <div className="w-6 h-6 rounded bg-primary/20" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{info.name}</p>
                              <p className="text-xs text-muted-foreground line-clamp-1">{info.description}</p>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-border/50 mt-2 pt-2 px-4 pb-2">
                          <Link
                            href="/products"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors py-2",
                      isScrolled || pathname !== "/"
                        ? "text-foreground hover:text-primary"
                        : "text-white/90 hover:text-white",
                      pathname === item.href && "text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "w-6 h-6",
                isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "w-6 h-6",
                isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden bg-white border-t border-border transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      isProductsOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    isProductsOpen ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="pl-4 py-2 space-y-1">
                      {Object.entries(CATEGORY_INFO).map(([slug, info]) => (
                        <Link
                          key={slug}
                          href={`/products/${slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {info.name}
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-primary"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 font-medium rounded-lg hover:bg-muted transition-colors",
                    pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-primary text-primary-foreground text-center px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} ChevronDown } from "lucide-react"
import { CATEGORY_INFO } from "@/lib/supabase/types"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "About Us", href: "/about" },
    { name: "Factory", href: "/factory" },
    { name: "OEM/ODM", href: "/oem-odm" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[9999] transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className={cn(
              "text-xl font-bold transition-colors",
              isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
            )}>
              ADA CERAMICS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                        isScrolled || pathname !== "/"
                          ? "text-foreground hover:text-primary"
                          : "text-white/90 hover:text-white",
                        pathname.startsWith("/products") && "text-primary"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        isProductsOpen && "rotate-180"
                      )} />
                    </Link>
                    
                    {/* ✅ 修复下拉菜单：高度、层级、显示 */}
                    <div className={cn(
                      "absolute top-full left-0 w-[320px] z-[9999] pt-2 transition-all duration-300",
                      isProductsOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                    )}>
                      <div className="bg-white rounded-xl shadow-xl border border-border/50 py-2 min-h-[300px]">
                        <div className="px-4 py-2 border-b border-border/50">
                          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                            Product Categories
                          </p>
                        </div>
                        {Object.entries(CATEGORY_INFO).map(([slug, info]) => (
                          <Link
                            key={slug}
                            href={`/products/${slug}`}
                            className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors"
                          >
                            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                              <div className="w-6 h-6 rounded bg-primary/20" />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-foreground">{info.name}</p>
                              <p className="text-xs text-muted-foreground line-clamp-1">{info.description}</p>
                            </div>
                          </Link>
                        ))}
                        <div className="border-t border-border/50 mt-2 pt-2 px-4 pb-2">
                          <Link
                            href="/products"
                            className="text-sm font-medium text-primary hover:underline"
                          >
                            View All Products →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors py-2",
                      isScrolled || pathname !== "/"
                        ? "text-foreground hover:text-primary"
                        : "text-white/90 hover:text-white",
                      pathname === item.href && "text-primary"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? (
              <X className={cn(
                "w-6 h-6",
                isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
              )} />
            ) : (
              <Menu className={cn(
                "w-6 h-6",
                isScrolled || pathname !== "/" ? "text-foreground" : "text-white"
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "lg:hidden bg-white border-t border-border transition-all duration-300 overflow-hidden",
        isMobileMenuOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
      )}>
        <nav className="px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                    className="flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg hover:bg-muted transition-colors"
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      "w-4 h-4 transition-transform",
                      isProductsOpen && "rotate-180"
                    )} />
                  </button>
                  <div className={cn(
                    "overflow-hidden transition-all duration-200",
                    isProductsOpen ? "max-h-96" : "max-h-0"
                  )}>
                    <div className="pl-4 py-2 space-y-1">
                      {Object.entries(CATEGORY_INFO).map(([slug, info]) => (
                        <Link
                          key={slug}
                          href={`/products/${slug}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                        >
                          {info.name}
                        </Link>
                      ))}
                      <Link
                        href="/products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-primary"
                      >
                        View All Products
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-4 py-3 font-medium rounded-lg hover:bg-muted transition-colors",
                    pathname === item.href ? "text-primary bg-muted" : "text-foreground"
                  )}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="pt-4 px-4">
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full bg-primary text-primary-foreground text-center px-5 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
