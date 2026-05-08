import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { products } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  // 根据URL里的id，找到对应的产品数据
  const product = products.find(p => p.id === params.id)

  // 如果找不到产品，显示404页面
  if (!product) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 面包屑导航 */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li>/</li>
              <li><Link href="/products" className="hover:text-primary">Products</Link></li>
              <li>/</li>
              <li className="text-foreground">{product.name}</li>
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 产品图片 */}
            <div className="rounded-2xl overflow-hidden bg-muted/30">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 产品信息 */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-lg text-muted-foreground mb-6">{product.description}</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Material:</span>
                  <span className="text-muted-foreground">{product.material}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Size:</span>
                  <span className="text-muted-foreground">{product.size}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">MOQ:</span>
                  <span className="text-muted-foreground">{product.moq}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-foreground">Certification:</span>
                  <span className="text-muted-foreground">{product.certification}</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
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
