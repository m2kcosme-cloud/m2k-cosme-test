/* Cosmetics page with brand logo display */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { getBrands, getProductsByBrand, Product } from "@/lib/productStorage";

const BRAND_COLORS: { [key: string]: string } = {
  "Exosomore": "from-blue-50 to-blue-100",
  "Cellvane": "from-purple-50 to-purple-100",
  "TheraphytoAbel": "from-green-50 to-green-100",
  "Snowtox": "from-cyan-50 to-cyan-100",
  "ExoTshot": "from-pink-50 to-pink-100",
  "Cosgram": "from-orange-50 to-orange-100",
  "Sensimium (Haircare)": "from-amber-50 to-amber-100",
};

export default function Cosmetics() {
  const [location] = useLocation();
  const [brands] = useState<string[]>(getBrands());
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // URL 쿼리 파라미터에서 브랜드 추출
    const params = new URLSearchParams(location.split('?')[1]);
    const brandParam = params.get('brand');
    if (brandParam && brands.includes(brandParam)) {
      setSelectedBrand(brandParam);
    }
  }, [location, brands]);

  useEffect(() => {
    if (selectedBrand) {
      setProducts(getProductsByBrand(selectedBrand));
    }
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-24 lg:py-32">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cosmetics</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          Curated cosmetics collection from M2K Cosme. Discover products crafted with science-backed ingredients and innovative technology.
        </p>
      </section>

      {/* Brand Selection */}
      {!selectedBrand ? (
        <section className="container py-24 lg:py-32 border-t border-border">
          <h2 className="text-3xl font-bold mb-12">Select a Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand) => (
              <a
                key={brand}
                href={`/cosmetics?brand=${brand}`}
                className={`group relative aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition cursor-pointer`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${BRAND_COLORS[brand] || 'from-gray-50 to-gray-100'} flex items-center justify-center`}>
                  <div className="text-center px-4">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition">
                      {brand}
                    </h3>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      ) : (
        <section className="container py-24 lg:py-32 border-t border-border">
          <div className="mb-12">
            <button
              onClick={() => setSelectedBrand(null)}
              className="text-primary hover:underline mb-6 font-medium"
            >
              ← Back to Brands
            </button>
            <h2 className="text-3xl font-bold mb-2">{selectedBrand}</h2>
            <p className="text-muted-foreground">
              {products.length} {products.length === 1 ? 'product' : 'products'}
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center py-24 bg-secondary p-12">
              <p className="text-lg text-muted-foreground mb-4">
                No products available yet.
              </p>
              <p className="text-sm text-muted-foreground">
                <a href="/admin" className="text-primary hover:underline">
                  Admin page
                </a> to add products.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-border hover:shadow-lg transition"
                >
                  {product.image && (
                    <div className="aspect-square bg-secondary overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {product.description}
                    </p>
                    {product.price && (
                      <p className="text-xl font-bold mb-4">
                        ${product.price}
                      </p>
                    )}
                    <button className="w-full py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Admin Link */}
      <section className="container py-12 border-t border-border">
        <div className="text-center">
          <a
            href="/admin"
            className="inline-block px-8 py-3 bg-black text-white font-medium hover:opacity-90 transition"
          >
            Product Management (Admin)
          </a>
        </div>
      </section>
    </div>
  );
}
