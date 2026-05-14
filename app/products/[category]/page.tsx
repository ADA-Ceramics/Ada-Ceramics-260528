import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { getAllProducts } from "@/lib/supabase/products"
import { CATEGORY_INFO } from "@/lib/supabase/types"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryInfo = CATEGORY_INFO[params.category]
  if (!categoryInfo) return { title: "Category Not Found" }
  return { title: `${categoryInfo.name} | ADA CERAMICS`, description: categoryInfo.description }
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = CATEGORY_INFO[params.category]
  if (!categoryInfo) notFound()

  const allProducts = await getAllProducts()
  const categoryProducts = allProducts.filter(p => p.category === params.category)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-foreground">Products</Link></li>
              <li>/</li>
              <li className="text-foreground">{categoryInfo.name}</li>
            </ol>
          </nav>

          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">{categoryInfo.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{categoryInfo.description}</p>
          </div>

          {categoryProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No products in this category yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map((product) => (
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
                        <div className="w-24 h-24 rounded-full bg-primary/10" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    {product.price && (
                      <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
