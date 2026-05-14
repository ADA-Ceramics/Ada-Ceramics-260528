import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import { CATEGORY_INFO, type Product } from "@/lib/supabase/types";
import ClientCategoryFilter from "./ClientCategoryFilter";

export const metadata = {
  title: "Products | ADA CERAMICS - Premium Ceramic Manufacturer",
  description: "Explore our comprehensive range of food-grade ceramic products including white porcelain, color glaze, kiln change ceramics, and more.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  // 完全对应你 Supabase 里三个真实分类 slug
  const fixedCategories = [
    {
      slug: "white-high-temp-porcelain",
      name: "High-Temperature White Porcelain",
      description: "Durable pure white porcelain for hotels & restaurants.",
      image: "/Alice.webp",
    },
    {
      slug: "color-glaze-ceramic",
      name: "Color Glaze Ceramics",
      description: "Vibrant glazed finish, unique elegant tableware.",
      image: "/color-glaze.webp",
    },
    {
      slug: "kiln-change-ceramic-series",
      name: "Kiln Change Ceramic",
      description: "Natural kiln variation, artistic premium tableware.",
      image: "/kiln-transformation.webp",
    },
  ];

  // 自动统计每个分类真实产品数量
  const productCountByCategory = fixedCategories.map((category) => ({
    ...category,
    count: products.filter((p) => p.category === category.slug).length,
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
