import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};

// 你要的三个固定分类
const fixedCategories = [
  { slug: "white-high-temp-porcelain", name: "High-Temperature White Porcelain" },
  { slug: "color-glaze-ceramic", name: "Color Glaze Ceramics" },
  { slug: "kiln-change-ceramic-series", name: "Kiln Change Ceramic" },
];

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="flex gap-8">
          {/* 左侧分类栏 */}
          <aside className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2">
              <li>
                <button className="w-full text-left py-2 px-3 rounded hover:bg-gray-100 font-medium">
                  All Products
                </button>
              </li>
              {fixedCategories.map((cat) => (
                <li key={cat.slug}>
                  <button className="w-full text-left py-2 px-3 rounded hover:bg-gray-100">
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          {/* 右侧产品列表区 */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <Image
                    src={product.imageUrl || "/placeholder.jpg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
