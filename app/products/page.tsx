"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import { CATEGORY_INFO, type Product } from "@/lib/supabase/types";

export const metadata = {
  title: "Products | ADA ceramics - Premium Ceramic Manufacturer",
  description: "Explore our comprehensive range of food-grade ceramic products including white porcelain, color glaze, kiln change ceramics, and more.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const fixedCategories = [
    {
      slug: "high-temperature-white-porcelain",
      name: "High-Temperature White Porcelain",
      description: "Durable pure white porcelain for hotels & restaurants.",
      image: "/Alice.webp",
    },
    {
      slug: "color-glaze-ceramics",
      name: "Color Glaze Ceramics",
      description: "Vibrant glazed finish, unique elegant tableware.",
      image: "/color-glaze.webp",
    },
    {
      slug: "kiln-change-ceramic",
      name: "Kiln Change Ceramic",
      description: "Natural kiln variation, artistic premium tableware.",
      image: "/kiln-transformation.webp",
    },
  ];

  // 统计每个分类产品数量
  const productCountByCategory = fixedCategories.map((category) => ({
    ...category,
    count: products.filter((p) => p.category === category.slug).length,
  }));

  // 根据选中分类过滤产品
  const filteredProducts = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

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

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {productCountByCategory.map((category) => (
              <div
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`cursor-pointer group relative bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  activeCategory === category.slug ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {category.count} products
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                  <ArrowRight className="w-5 h-5 text-primary" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === "all"
                  ? "bg-primary text-white border-primary"
                  : "border-border hover:bg-muted"
              }`}
            >
              All Products
            </button>
          </div>

          <h2 className="text-2xl font-bold text-foreground mb-8">
            {activeCategory === "all"
              ? "All Products"
              : fixedCategories.find(c => c.slug === activeCategory)?.name}
          </h2>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products available at the moment.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product: Product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-square bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                    {product.main_image ? (
                      <Image
                        src={product.main_image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <div className="w-16 h-16 rounded-full bg-primary/20" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-muted-foreground mb-1">
                      {CATEGORY_INFO[product.category]?.name || product.category}
                    </p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {product.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      {product.price && (
                        <p className="text-primary font-semibold">${product.price.toFixed(2)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
