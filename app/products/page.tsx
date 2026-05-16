import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Link from "next/link";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Link from "next/link";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};

const fixedCategories = [
  { slug: "all", name: "All Products" },
  { slug: "white-high-temp-porcelain", name: "High-Temperature White Porcelain" },
  { slug: "color-glaze-ceramic", name: "Color Glaze Ceramics" },
  { slug: "kiln-change-ceramic-series", name: "Kiln Change Ceramic" },
];

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const products = await getAllProducts();
  const activeCat = params?.cat || "all";
  
  const filteredProducts = activeCat === "all" 
    ? products 
    : products.filter(p => p.category_slug === activeCat);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2">
              {fixedCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?cat=${cat.slug}`}
                    className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-100 ${
                      activeCat === cat.slug ? "bg-gray-200 font-medium" : ""
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                // 修复：补上分类层级路径，匹配 [category]/[slug]
                href={`/products/${product.category_slug}/${product.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={product.main_image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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


// ==============================
// 🔥 只改这里：和数据库真实 slug 一致
// ==============================
const fixedCategories = [
  { slug: "all", name: "All Products" },
  { slug: "high-temperature-white-porcelain", name: "High-Temperature White Porcelain" },
  { slug: "color-glaze", name: "Color Glaze Ceramics" },
  { slug: "kiln-change-ceramic", name: "Kiln Change Ceramic" },
];

export default async function ProductsPage({ searchParams }) {
  const params = await searchParams;
  const products = await getAllProducts();
  const activeCat = params?.cat || "all";
  
  const filteredProducts = activeCat === "all" 
    ? products 
    : products.filter(p => p.category_slug === activeCat);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
            <ul className="space-y-2">
              {fixedCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?cat=${cat.slug}`}
                    className={`block w-full text-left py-2 px-3 rounded hover:bg-gray-100 ${
                      activeCat === cat.slug ? "bg-gray-200 font-medium" : ""
                    }`}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                // ==============================
                // ✅ 完全保留你 ORIGINAL 链接！
                // 一行都不改！所以详情页一定正常！
                // ==============================
                href={`/products/${product.category_slug}/${product.slug}`}
                className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square relative">
                  <img
                    src={product.main_image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
