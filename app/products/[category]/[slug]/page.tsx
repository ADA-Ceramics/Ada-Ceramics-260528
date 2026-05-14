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
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href={`/products?cat=${category}`} className="text-blue-600 hover:underline mb-6 inline-block">
          ← Back to {category} Products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="aspect-square border rounded-lg overflow-hidden">
            <img
              src={product.main_image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p >
            <div className="space-y-4">
              <p className="text-lg font-medium">SKU: {product.sku}</p >
              <p className="text-2xl font-bold text-blue-600">${product.price}</p >
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
