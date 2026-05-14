import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import { getAllCategories } from "@/lib/supabase/categories";
import { CATEGORY_INFO, type Product, type Category } from "@/lib/supabase/types";
import ClientCategoryFilter from "./ClientCategoryFilter";

export const metadata = {
  title: "Products | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Explore our comprehensive range of food-grade ceramic products including white porcelain, color glaze, kiln change ceramics, and more.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  const categories = await getAllCategories();

  // 用你给的三个slug匹配完整分类信息，拿到对应ID做产品统计
  const targetSlugs = ["white-high-temp-porcelain", "color-glaze-ceramic", "kiln-change-ceramic-series"];
  const fixedCategories = targetSlugs.map(slug => categories.find(c => c.slug === slug)).filter(Boolean) as Category[];

  // 通过分类ID关联统计对应产品数
  const productCountByCategory = fixedCategories.map(category => ({
    ...category,
    count: products.filter(p => p.category === category.id).length
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-28 pb-13 bg-[#f5f3ef]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Our Product Collections
          </h1>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Discover our comprehensive range of food-grade ceramic products,
            each crafted with precision and care to meet the highest standards.
          </p>
        </div>
      </section>

      <ClientCategoryFilter
        categories={productCountByCategory}
        allProducts={products}
      />

      <Footer />
    </div>
  );
}
