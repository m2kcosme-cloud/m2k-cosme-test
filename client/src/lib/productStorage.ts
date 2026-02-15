// Product storage utility using localStorage

export interface Product {
  id: string;
  brand: string;
  name: string;
  description: string;
  image: string;
  price?: number;
  createdAt: number;
}

export interface Brand {
  id: string;
  name: string;
  products: Product[];
}

const BRANDS = [
  "Exosomore",
  "Cellvane",
  "TheraphytoAbel",
  "Snowtox",
  "ExoTshot",
  "Cosgram",
  "Sensimium (Haircare)"
];

const STORAGE_KEY = "m2k_products";

export function getProducts(): Product[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function getProductsByBrand(brand: string): Product[] {
  return getProducts().filter(p => p.brand === brand);
}

export function addProduct(product: Omit<Product, "id" | "createdAt">): Product {
  const newProduct: Product = {
    ...product,
    id: Date.now().toString(),
    createdAt: Date.now()
  };
  
  const products = getProducts();
  products.push(newProduct);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const products = getProducts();
  const index = products.findIndex(p => p.id === id);
  
  if (index === -1) return null;
  
  products[index] = { ...products[index], ...updates };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  
  return products[index];
}

export function deleteProduct(id: string): boolean {
  const products = getProducts();
  const filtered = products.filter(p => p.id !== id);
  
  if (filtered.length === products.length) return false;
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}

export function getBrands(): string[] {
  return BRANDS;
}

export function getBrandProducts(brand: string): Brand {
  return {
    id: brand,
    name: brand,
    products: getProductsByBrand(brand)
  };
}

export function clearAllProducts(): void {
  localStorage.removeItem(STORAGE_KEY);
}
