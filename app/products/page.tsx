import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { getAllProducts } from "@/lib/supabase/products";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Products | ADA Ceramics",
  description: "High quality ceramic tableware and drinkware",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h1 className="text-4xl font-bold">Our Products</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
              className="group border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative">
                <Image
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p >
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
