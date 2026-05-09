import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { getAllProducts } from "@/lib/supabase/products"
import { getProductCategories } from "@/lib/supabase/categories"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const selectedCategoryId = searchParams?.category

  // 读取分类和产品数据
  const categories = await getProductCategories()
  const products = await getAllProducts(selectedCategoryId)

  // 当前选中的分类（用于标题）
  const currentCategory = categories.find(c => c.id === selectedCategoryId)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* 分类板块（复刻首页样式） */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <Link 
                  key={cat.id} 
                  href={`/products?category=${cat.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    {/* 分类图片 */}
                    <div className="h-64 bg-gray-100">
                      {cat.image ? (
                        <img 
                          src={cat.image} 
                          alt={cat.name} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image
                        </div>
                      )}
                    </div>
                    {/* 分类名称和产品数量 */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2">{cat.name}</h3>
                      <p className="text-gray-600 text-sm">
                        {products.filter(p => p.category === cat.id).length} products
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 产品列表 */}
          <h1 className="text-3xl font-bold mb-8">
            {currentCategory ? `${currentCategory.name} Products` : "All Products"}
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-md transition">
                  <div className="h-60 bg-gray-100">
                    {product.main_image ? (
                      <img 
                        src={product.main_image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Product Image
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
