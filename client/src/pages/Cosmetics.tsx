import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { getBrands, getProductsByBrand, Product } from "@/lib/productStorage";

const BRAND_LOGOS: { [key: string]: string } = {
  "Exosomore": "",
  "Cellvane": "",
  "TheraphytoAbel": "",
  "Snowtox": "",
  "ExoTshot": "",
  "Cosgram": "",
  "Sensimium (Haircare)": "",
};

export default function Cosmetics() {
  const [location] = useLocation();
  const [brands] = useState<string[]>(getBrands());
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [brandLogos, setBrandLogos] = useState<{ [key: string]: string }>(BRAND_LOGOS);

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

  const getBrandLink = (brand: string) => {
    if (brand === 'Exosomore') {
      return '/exosomore';
    }
    return `/cosmetics?brand=${brand}`;
  };

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
                href={getBrandLink(brand)}
                className="group relative aspect-square rounded-lg overflow-hidden border-2 border-border hover:border-primary transition cursor-pointer"
              >
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  {brandLogos[brand] ? (
                    <img
                      src={brandLogos[brand]}
                      alt={brand}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-center px-4">
                      <h3 className="text-lg font-bold text-muted-foreground group-hover:text-primary transition">
                        {brand}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2">No logo</p>
                    </div>
                  )}
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

          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="border border-border rounded-lg overflow-hidden hover:shadow-lg transition"
                >
                  {product.image && (
                    <div className="aspect-square overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                    {product.price && (
                      <p className="text-lg font-bold text-primary">${product.price}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products available for this brand yet.</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
