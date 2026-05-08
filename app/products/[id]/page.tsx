import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id)

  if (!product) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-500">
              <li><Link href="/" className="hover:text-black">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-black">Products</Link></li>
              <li>/</li>
              <li className="text-black">{product.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="rounded-2xl overflow-hidden bg-gray-100 h-80 flex items-center justify-center">
              <span className="text-gray-400">Product Image</span>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-black">Material:</span>
                  <span className="text-gray-600">{product.material}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-black">Size:</span>
                  <span className="text-gray-600">{product.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-black">MOQ:</span>
                  <span className="text-gray-600">{product.moq}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-black">Certification:</span>
                  <span className="text-gray-600">{product.certification}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-black text-white px-8 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
