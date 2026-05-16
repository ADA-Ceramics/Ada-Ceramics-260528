import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ChevronRight, Check, Shield, Truck, MessageCircle } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getProductBySlug, getProductsByCategory } from "@/lib/supabase/products"
import { CATEGORY_INFO, type Product } from "@/lib/supabase/types"

// ✅ 这是唯一正确的导入（上级目录）
import ImageGallerySwitch from "../ImageGallerySwitch"

interface PageProps {
  params: Promise<{ category: string; slug: string }>
}

// 谷歌SEO标准元数据 正常抓取
export async function generateMetadata({ params }: PageProps) {
  const { slug: productSlug } = await params
  const product = await getProductBySlug(productSlug)
  
  if (!product) {
    return {
      title: "Product Not Found | ADA CERAMICS",
    }
  }

  return {
    title: `${product.name} | ADA CERAMICS - Premium Ceramic Manufacturer`,
    description: product.description || `High quality ${product.name} wholesale from China factory`,
    keywords: ["ceramic", "tableware", "wholesale", "factory supply", product.name],
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category: categorySlug, slug: productSlug } = await params
  const product = await getProductBySlug(productSlug)
  const categoryInfo = CATEGORY_INFO[categorySlug]

  if (!product || !categoryInfo) {
    notFound()
  }

  const galleryImages = product.gallery_images ?? []
  const relatedProducts = (await getProductsByCategory(categorySlug))
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-28 pb-4 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/products" className="hover:text-foreground transition-colors">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href={`/products/${categorySlug}`} className="hover:text-foreground transition-colors">
              {categoryInfo.name}
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 图片切换组件 客户端独立拆分 不影响SEO */}
            <ImageGallerySwitch
              mainImg={product.main_image}
              galleryList={galleryImages}
              altName={product.name}
              tagList={product.features}
            />

            <div className="space-y-6">
              <div>
                <Link
                  href={`/products/${categorySlug}`}
                  className="text-sm text-primary hover:underline"
                >
                  {categoryInfo.name}
                </Link>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
              </div>

              {product.price && (
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-muted-foreground">/ piece</span>
                </div>
              )}

              {product.description && (
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">Minimum Order</p>
                  <p className="text-lg font-semibold text-foreground">500 pcs</p>
                </div>
                <div className="bg-muted/50 rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">Lead Time</p>
                  <p className="text-lg font-semibold text-foreground">15-30 days</p>
                </div>
              </div>

              {product.features && product.features.length > 0 && (
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-center hover:bg-primary/90 transition-colors"
                >
                  Request Quote
                </Link>
                <a
                  href=" "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-4 rounded-xl font-semibold hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-5 h-5 text-green-500" />
                  Food Safe Certified
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-5 h-5 text-blue-500" />
                  Worldwide Shipping
                </div>
              </div>
            </div>
          </div>

          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Specifications</h2>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value], i) => (
                      <tr key={key} className={i % 2 === 0 ? "bg-muted/30" : ""}>
                        <td className="px-6 py-4 font-medium text-foreground capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct: Product) => (
                  <Link
                    key={relProduct.id}
                    href={`/products/${categorySlug}/${relProduct.slug}`}
                    className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                      {relProduct.main_image ? (
                        <Image
                          src={relProduct.main_image}
                          alt={relProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-primary/20" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {relProduct.name}
                      </h3>
                      {relProduct.price && (
                        <p className="text-primary font-semibold">${relProduct.price.toFixed(2)}</p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
