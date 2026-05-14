import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { getAllProducts } from '@/lib/supabase/products';
import { CATEGORY_INFO } from '@/lib/supabase/types';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { category: string } }) {
  const categoryInfo = CATEGORY_INFO[params.category];
  if (!categoryInfo) return { title: 'Category Not Found' };
  return { title: `${categoryInfo.name} | ADA CERAMICS`, description: categoryInfo.description };
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryInfo = CATEGORY_INFO[params.category];
  if (!categoryInfo) notFound();

  const allProducts = await getAllProducts();
  const categoryProducts = allProducts.filter(p => p.category_slug === params.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{categoryInfo.name}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <Link 
              key={product.id} 
              href={`/products/${product.category_slug}/${product.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-b from-muted to-muted/50 relative overflow-hidden">
                {product.main_image && (
                  <Image
                    src={product.main_image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {product.name}
                </h3>
                {product.price && (
                  <p className="text-primary font-semibold">{product.price.toFixed(2)}</p >
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
