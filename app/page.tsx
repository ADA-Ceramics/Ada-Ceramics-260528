import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { createClient } from "@supabase/supabase-js"

// 初始化 Supabase 客户端
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { category?: string }
}) {
  const selectedCategoryId = searchParams?.category

  // 读取所有分类数据
  const { data: categories, error: catError } = await supabase
    .from("product_categories")
    .select("*")

  if (catError) throw new Error("Failed to load categories")

  // 读取产品数据（按分类筛选）
  let query = supabase.from("products").select("*")
  if (selectedCategoryId) {
    query = query.eq("category", selectedCategoryId)
  }
  const { data: products, error: prodError } = await query
  if (prodError) throw new Error("Failed to load products")

  // 找到当前选中的分类（用于显示标题）
  const currentCategory = categories.find(c => c.id === selectedCategoryId)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* ===================== */}
          /* 1. 分类板块（复刻首页样式） */
          {/* ===================== */}
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
                    {/* 分类图片：如果没有图片，用灰色背景占位 */}
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
                        {products.filter(p => p.category === cat.id).length} 个产品
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ===================== */}
          /* 2. 产品列表部分 */
          {/* ===================== */}
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
