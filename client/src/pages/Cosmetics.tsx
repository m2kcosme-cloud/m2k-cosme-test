/* Cosmetics page with brand dropdown and product listing */

import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { getBrands, getProductsByBrand, Product } from "@/lib/productStorage";

export default function Cosmetics() {
  const [location] = useLocation();
  const [brands] = useState<string[]>(getBrands());
  const [selectedBrand, setSelectedBrand] = useState<string>("Exosomore");
  const [products, setProducts] = useState<Product[]>([]);
  const [expandedBrand, setExpandedBrand] = useState<string | null>(null);

  useEffect(() => {
    // URL 쿼리 파라미터에서 브랜드 추출
    const params = new URLSearchParams(location.split('?')[1]);
    const brandParam = params.get('brand');
    if (brandParam && brands.includes(brandParam)) {
      setSelectedBrand(brandParam);
    }
  }, [location, brands]);

  useEffect(() => {
    setProducts(getProductsByBrand(selectedBrand));
  }, [selectedBrand]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-24 lg:py-32">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">Cosmetics</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          M2K Cosme의 엄선된 화장품 컬렉션. 과학 기반의 성분과 혁신적인 기술로 만든 제품들을 만나보세요.
        </p>
      </section>

      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-lg font-semibold mb-6">브랜드</h2>
              <div className="space-y-2">
                {brands.map(brand => (
                  <div key={brand}>
                    <button
                      onClick={() => {
                        setSelectedBrand(brand);
                        setExpandedBrand(expandedBrand === brand ? null : brand);
                      }}
                      className={`w-full text-left px-4 py-3 rounded transition flex items-center justify-between ${
                        selectedBrand === brand
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "hover:bg-secondary"
                      }`}
                    >
                      <span>{brand}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          expandedBrand === brand ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{selectedBrand}</h2>
              <p className="text-muted-foreground">
                {products.length}개의 제품
              </p>
            </div>

            {products.length === 0 ? (
              <div className="text-center py-24 bg-secondary p-12">
                <p className="text-lg text-muted-foreground mb-4">
                  아직 등록된 제품이 없습니다.
                </p>
                <p className="text-sm text-muted-foreground">
                  <a href="/admin" className="text-primary hover:underline">
                    관리자 페이지
                  </a>에서 제품을 추가해주세요.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {products.map(product => (
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
                        자세히 보기
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Admin Link */}
      <section className="container py-12 border-t border-border">
        <div className="text-center">
          <a
            href="/admin"
            className="inline-block px-8 py-3 bg-black text-white font-medium hover:opacity-90 transition"
          >
            제품 관리 (관리자)
          </a>
        </div>
      </section>
    </div>
  );
}
