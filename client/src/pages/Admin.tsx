/* Admin page with email authentication - View only mode */

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { Product, getBrands, getProducts } from "@/lib/productStorage";

const ADMIN_EMAIL = "m2kcosme@gmail.com";

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("Exosomore");

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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m2kcosme@gmail.com"
                className="w-full px-4 py-2 border border-border rounded"
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

  const filteredProducts = products.filter(p => p.brand === selectedBrand);

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-12 pb-8 border-b border-border">
          <div>
            <h1 className="text-4xl font-bold">Product Dashboard</h1>
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
          {/* Brand Selection */}
          <div className="lg:col-span-1">
            <div className="border border-border p-8 sticky top-24">
              <h2 className="text-2xl font-bold mb-6">Select Brand</h2>

              <div className="space-y-2">
                {brands.map(brand => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left px-4 py-3 rounded transition ${
                      selectedBrand === brand
                        ? 'bg-primary text-primary-foreground font-semibold'
                        : 'bg-secondary hover:bg-gray-200'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> To add or edit products, please contact the development team.
                </p>
              </div>
            </div>
          </div>

          {/* Products List Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{selectedBrand} Products</h2>
              <p className="text-muted-foreground">{filteredProducts.length} products available</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-12 bg-secondary p-8">
                <p className="text-muted-foreground">No products available for this brand yet.</p>
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
                        <p className="text-sm text-muted-foreground mb-2 line-clamp-3">
                          {product.description}
                        </p>
                        {product.price && (
                          <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
                        )}
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
