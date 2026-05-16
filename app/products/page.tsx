import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Link from "next/link";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};

// 严格对齐 types.ts 里的真实分类slug
const fixedCategories = [
  { slug: "all", name: "All Products" },
  { slug: "high-temp-white-porcelain", name: "High-Temperature White Porcelain" },
  { slug: "color-glaze", name: "Color Glaze Ceramics" },
  { slug: "kiln-change-ceramic", name: "Kiln Change Ceramic" },
];

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const products = await getAllProducts();
  const activeCat = params?.cat || "all";

  // 筛选逻辑
  const filteredProducts = activeCat === "all"
    ? products
    : products.filter(item => item.category_slug === activeCat);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="flex gap-8">
          {/* 左侧分类筛选栏 */}
          <aside className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2">
              {fixedCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?cat=${cat.slug}`}
                    className={`block w-full text-left py-2 px-3 rounded transition-colors ${
                      activeCat === cat.slug
                        ? "bg-gray-200 font-medium text-black"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* 右侧筛选后产品列表 */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.category_slug}/${product.slug}`}
                  className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-square relative">
                    <img
                      src={product.main_image || ""}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-muted-foreground">
                No products available in this category
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
