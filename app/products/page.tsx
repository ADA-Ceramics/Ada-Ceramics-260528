import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import ClientProductList from "./ClientProductList";
import { getAllProducts } from "@/lib/supabase/products";

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
        <ClientProductList products={products} />
      </main>
      <Footer />
    </div>
  );
}
