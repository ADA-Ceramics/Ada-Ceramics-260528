import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getProductsByCategory, getCategories } from "@/lib/supabase/products"
import { CATEGORY_INFO, type Product } from "@/lib/supabase/types"

export async function generateStaticParams() {
  const categories = await getCategories()
  return categories.map((cat) => ({
    category: cat.slug,
  }))
}

export default async function CategoryProductsPage({
  params,
}: {
  params: { category: string }
}) {
  const { category } = params
  const [products, categories] = await Promise.all([
    getProductsByCategory(category),
    getCategories()
  ])

  const categoryData = categories.find((c) => c.slug === category)
  if (!categoryData) return notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            {categoryData.name}
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            {categoryData.description}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products in this category.</p>
              <Link
                href="/products"
                className="inline-block mt-4 text-primary hover:underline"
              >
                View all products
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product: Product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.category}/${product.slug}`}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-muted relative overflow-hidden">
                    {product.main_image ? (
                      <Image
                        src={product.main_image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    {product.price && (
                      <p className="mt-2 text-primary font-semibold">
                        ${product.price.toFixed(2)}
                      </p>
                    )}
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