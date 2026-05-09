import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getAllProducts, getCategories } from "@/lib/supabase/products"
import { CATEGORY_INFO, type Product } from "@/lib/supabase/types"

export const metadata = {
  title: "Products | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Explore our comprehensive range of food-grade ceramic products including white porcelain, color glaze, kiln change ceramics, and more.",
}

export default async function ProductsPage() {
  const [products, categoriesFromDB] = await Promise.all([
    getAllProducts(),
    getCategories()
  ])

  const productCountByCategory = categoriesFromDB.map(category => ({
    ...category,
    count: products.filter(p => p.category === category.slug).length
  }))

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-13 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Product Collections
          </h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Discover our comprehensive range of food-grade ceramic products,
            each crafted with precision and care to meet the highest standards.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* 1. High-Temperature White Porcelain */}
            <Link
              href="/products/high-temperature-white"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <Image
                  src="https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/Alice.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMvQWxpY2Uud2VicCIsImlhdCI6MTc3ODIwNzU5NywiZXhwIjo0OTMxODA3NTk3fQ.8zPR5oOPaN9pZWtwXaciJXt-Q-Uoh4zBg18cjs8Sqkg"
                  alt="High-Temperature White Porcelain"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    High-Temperature White Porcelain
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {productCountByCategory.find(c => c.slug === "high-temperature-white")?.count ?? 0} products
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Durable pure white porcelain for hotels & restaurants.
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </Link>

            {/* 2. Color Glaze Ceramics */}
            <Link
              href="/products/color-glaze-ceramic"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <Image
                  src="https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/color-glaze.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMvY29sb3ItZ2xhemUud2VicCIsImlhdCI6MTc3ODIwNzY1OCwiZXhwIjo0OTMxODA3NjU4fQ.woH_inoZzykPTjvjTYPlD37l9jZtx-d4cidJqYKe0gQ"
                  alt="Color Glaze Ceramics"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Color Glaze Ceramics
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {productCountByCategory.find(c => c.slug === "color-glaze-ceramic")?.count ?? 0} products
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Vibrant glazed finish, unique elegant tableware.
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </Link>

            {/* 3. Kiln Change Ceramic */}
            <Link
              href="/products/kiln-change-ceramic"
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <Image
                  src="https://eqlatpimljraiapadkww.supabase.co/storage/v1/object/sign/showed%20pictures/kiln-transformation.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83MDBjNDhiYy1hM2U4LTQxNWMtOTdhMi0yNTBiN2RkYjIxMWQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzaG93ZWQgcGljdHVyZXMva2lsbi10cmFuc2Zvcm1hdGlvbi53ZWJwIiwiaWF0IjoxNzc4MjA3Njk1LCJleHAiOjQ5MzE4MDc2OTV9.jA_mvaHJMWXdRHDc3blLbTEREOiwLCngIjBv2j_gJoQ"
                  alt="Kiln Change Ceramic"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    Kiln Change Ceramic
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {productCountByCategory.find(c => c.slug === "kiln-change-ceramic")?.count ?? 0} products
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Natural kiln variation, artistic premium tableware.
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
            </Link>
          </div>

          {/* All Products Grid */}
          <h2 className="text-2xl font-bold text-foreground mb-8">All Products</h2>
          {products.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product: Product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.category}/${product.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    {product.main_image ? (
                      <Image
                        src={product.main_image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-16 h-16 rounded-full bg-primary/20" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {CATEGORY_INFO[product.category]?.name || product.category}
                    </p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      {product.price && (
                        <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
