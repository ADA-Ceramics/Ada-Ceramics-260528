import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Image from "next/image";
import Link from "next/link";
import ClientCategoryFilter from "./ClientCategoryFilter";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};

// 你固定的三个分类，和Supabase里的category字段对应
const fixedCategories = [
  { slug: "white-high-temp-porcelain", name: "High-Temperature White Porcelain" },
  { slug: "color-glaze-ceramic", name: "Color Glaze Ceramics" },
  { slug: "kiln-change-ceramic-series", name: "Kiln Change Ceramic" },
];

export default async function ProductsPage() {
  // 从Supabase拉所有产品，保留你原来的联动逻辑
  const products = await getAllProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        <ClientCategoryFilter 
          categories={fixedCategories} 
          products={products} 
        />
      </main>
      <Footer />
    </div>
  );
}
