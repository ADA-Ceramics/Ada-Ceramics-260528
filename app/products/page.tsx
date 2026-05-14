import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import { type Product } from "@/lib/supabase/types";
import ClientCategoryFilter from "./ClientCategoryFilter";

export const metadata = {
  title: "Products | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Explore our comprehensive range of food-grade ceramic products.",
};

export default async function ProductsPage() {
  // 从 Supabase 获取所有产品（保留你原本对接）
  const products: Product[] = await getAllProducts();

  // 你固定的3个分类 和 Supabase 字段对应
  const fixedCategories = [
    {
      slug: "white-high-temp-porcelain",
      name: "High-Temperature White Porcelain",
    },
    {
      slug: "color-glaze-ceramic",
      name: "Color Glaze Ceramics",
    },
    {
      slug: "kiln-change-ceramic-series",
      name: "Kiln Change Ceramic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-13 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Product Collections
          </h1>
        </div>
      </section>

      {/* 左边分类 + 右边产品 布局交给客户端组件 */}
      <ClientCategoryFilter
        categories={fixedCategories}
        allProducts={products}
      />

      <Footer />
    </div>
  );
}
