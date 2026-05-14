import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getProductBySlug } from "@/lib/supabase/products";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) notFound();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 面包屑导航 */}
        <div className="mb-8 text-sm text-gray-500">
          <Link href="/products" className="hover:text-gray-800">Products</Link>
          <span className="mx-2">/</span>
          <Link href={`/products?cat=${category}`} className="hover:text-gray-800">
            {category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </div>

        {/* 外贸独立站经典左右布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左边产品大图 */}
          <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
            <img
              src={product.main_image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
          </div>

          {/* 右边产品信息 */}
          <div className="flex flex-col justify-center gap-5">
            <h1 className="text-3xl font-semibold text-gray-900">
              {product.name}
            </h1>
            <p className="text-2xl font-bold text-gray-900">
              ${product.price}
            </p >
            <div className="w-full h-px bg-gray-200"></div>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p >
            <p className="text-sm text-gray-500">
              SKU: {product.sku}
            </p >
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
