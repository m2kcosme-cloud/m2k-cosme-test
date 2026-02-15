/* Admin page with email authentication */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Edit2, LogOut } from "lucide-react";
import { Product, getBrands, getProducts, addProduct, updateProduct, deleteProduct } from "@/lib/productStorage";

const ADMIN_EMAIL = "m2kcosme@gmail.com";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
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
    // Check if user is authenticated from localStorage
    const savedAuth = localStorage.getItem("m2k_admin_auth");
    if (savedAuth === ADMIN_EMAIL) {
      setIsAuthenticated(true);
      setProducts(getProducts());
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL) {
      setIsAuthenticated(true);
      localStorage.setItem("m2k_admin_auth", ADMIN_EMAIL);
      setProducts(getProducts());
    } else {
      alert("Invalid email. Only m2kcosme@gmail.com can access this page.");
      setEmail("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("m2k_admin_auth");
    setEmail("");
    setFormData({ name: "", description: "", image: "", price: "" });
    setEditingId(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-full max-w-md p-8 border border-border rounded-lg">
          <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
          <p className="text-muted-foreground mb-8">Enter your email to access the admin panel</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m2kcosme@gmail.com"
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const handleAddProduct = () => {
    if (!formData.name.trim()) {
      alert("Please enter a product name");
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
      if (newProduct) {
        setProducts(getProducts());
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setFormData({ name: "", description: "", image: "", price: "" });
  };

  const handleEdit = (product: Product) => {
    setEditingId(product.id);
    setSelectedBrand(product.brand);
    setFormData({
      name: product.name,
      description: product.description,
      image: product.image || "",
      price: product.price?.toString() || ""
    });
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProduct(id);
      setProducts(getProducts());
    }
  };

  const filteredProducts = products.filter(p => p.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pb-8 border-b border-border">
          <div>
            <h1 className="text-4xl font-bold">Product Management</h1>
            <p className="text-muted-foreground mt-2">Logged in as: {email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white font-medium hover:opacity-90 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="border border-border p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">
                {editingId ? "Edit Product" : "Add Product"}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Brand</label>
                  <select
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded"
                  >
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Product Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter product name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Enter product description"
                    className="w-full px-4 py-2 border border-border rounded h-24"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Image URL</label>
                  <Input
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Price</label>
                  <Input
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="99.99"
                    step="0.01"
                  />
                </div>

                <div className="flex gap-2 pt-4">
                  <Button
                    onClick={handleAddProduct}
                    className="flex-1 bg-primary text-primary-foreground"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    {editingId ? "Update" : "Add"}
                  </Button>
                  {editingId && (
                    <Button
                      onClick={() => {
                        setEditingId(null);
                        resetForm();
                      }}
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products List Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{selectedBrand} Products</h2>
              <p className="text-muted-foreground">{filteredProducts.length} products</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-secondary p-8">
                <p className="text-muted-foreground">No products yet. Add your first product above.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="border border-border p-6 hover:shadow-lg transition">
                    <div className="flex gap-6">
                      {product.image && (
                        <div className="w-24 h-24 bg-secondary rounded overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                          {product.description}
                        </p>
                        {product.price && (
                          <p className="font-bold text-lg mb-3">${product.price}</p>
                        )}
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="flex items-center gap-1 px-3 py-2 bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
                          >
                            <Edit2 className="w-4 h-4" />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="flex items-center gap-1 px-3 py-2 bg-destructive text-destructive-foreground text-sm font-medium hover:opacity-90 transition"
                          >
                            <Trash2 className="w-4 h-4" />
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
