/* Admin page for managing products */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Edit2 } from "lucide-react";
import { Product, getBrands, getProducts, addProduct, updateProduct, deleteProduct } from "@/lib/productStorage";

export default function Admin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("Exosomore");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    price: ""
  });

  const brands = getBrands();

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAddProduct = () => {
    if (!formData.name.trim()) {
      alert("제품명을 입력해주세요");
      return;
    }

    if (editingId) {
      const updated = updateProduct(editingId, {
        name: formData.name,
        description: formData.description,
        image: formData.image,
        price: formData.price ? parseFloat(formData.price) : undefined,
        brand: selectedBrand
      });
      if (updated) {
        setProducts(getProducts());
        setEditingId(null);
        resetForm();
      }
    } else {
      const newProduct = addProduct({
        brand: selectedBrand,
        name: formData.name,
        description: formData.description,
        image: formData.image,
        price: formData.price ? parseFloat(formData.price) : undefined
      });
      setProducts(getProducts());
      resetForm();
    }
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm("정말 삭제하시겠습니까?")) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingId(product.id);
    setSelectedBrand(product.brand);
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image,
      price: product.price?.toString() || ""
    });
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", image: "", price: "" });
    setEditingId(null);
  };

  const filteredProducts = products.filter(p => p.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">Admin Panel</h1>
        <p className="text-lg text-muted-foreground mb-12">제품 관리</p>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="bg-secondary p-8 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">
                {editingId ? "제품 수정" : "새 제품 추가"}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">브랜드</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-3 py-2 border border-border rounded"
                  >
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">제품명</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="제품명"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">설명</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="제품 설명"
                    className="w-full px-3 py-2 border border-border rounded min-h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">이미지 URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">가격 (선택)</label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0"
                  />
                </div>

                <div className="flex gap-2">
                  <Button onClick={handleAddProduct} className="flex-1">
                    {editingId ? "수정" : "추가"}
                  </Button>
                  {editingId && (
                    <Button onClick={resetForm} variant="outline" className="flex-1">
                      취소
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products List Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">{selectedBrand}</h2>
              <p className="text-muted-foreground">총 {filteredProducts.length}개 제품</p>
            </div>

            <div className="space-y-4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-secondary p-8">
                  <p className="text-muted-foreground">아직 제품이 없습니다.</p>
                </div>
              ) : (
                filteredProducts.map(product => (
                  <div key={product.id} className="border border-border p-6 hover:bg-secondary transition">
                    <div className="flex gap-6">
                      {product.image && (
                        <div className="w-24 h-24 bg-secondary flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm mb-3">{product.description}</p>
                        {product.price && (
                          <p className="font-medium mb-3">${product.price}</p>
                        )}
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEditProduct(product)}
                            className="flex items-center gap-2"
                          >
                            <Edit2 className="w-4 h-4" />
                            수정
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                            className="flex items-center gap-2"
                          >
                            <Trash2 className="w-4 h-4" />
                            삭제
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
