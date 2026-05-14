"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type Product } from "@/lib/supabase/types";

type Category = {
  slug: string;
  name: string;
};

interface Props {
  categories: Category[];
  allProducts: Product[];
}

export default function ClientCategoryFilter({ categories, allProducts }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>("all");

  // 筛选产品
  const filteredProducts = activeSlug === "all"
    ? allProducts
    : allProducts.filter(p => p.category === activeSlug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        {/* 左侧分类栏 */}
        <aside className="w-full md:w-56 shrink-0">
          <h3 className="text-xl font-bold mb-6">Categories</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setActiveSlug("all")}
                className={`w-full text-left px-4 py-2 rounded transition ${
                  activeSlug === "all"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                All Products
              </button>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <button
                  onClick={() => setActiveSlug(cat.slug)}
                  className={`w-full text-left px-4 py-2 rounded transition ${
                    activeSlug === cat.slug
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </button>
              </li>
            ))}
          </s>
        </aside>

        {/* 右侧产品展示 */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 duration-300"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                </div>
              </Link>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500 py-20">
              No products in this category.
            </p >
          )}
        </div>
      </div>
    </div>
  );
}
