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

// Initial Exosomore products
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'exo-001',
    brand: 'Exosomore',
    name: 'The Next Cell Booster (Vial)',
    description: '100% Human Amniotic Fluid-Derived Stem Cell Culture Exosome. Contains 156 billion Exosomes with over 1,300 proteins and 20 growth factors. Enhanced absorption with elastic liposome eL-Posome technology. 3ml × 4ea',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    price: 189.99,
    createdAt: Date.now()
  },
  {
    id: 'exo-002',
    brand: 'Exosomore',
    name: 'The Next Cell Fill-up Ampoule (Injector)',
    description: 'Concentrated nourishing ampoule for whitening and anti-wrinkle. Maximizes regenerative synergy when mixed with Vial. Deep moisturizing with Galactomyces Ferment Filtrate. Vitamin A Retinol + 10 Essential Amino Acids + 10 Essential Vitamins + Multi Peptides. 9.5ml × 4ea',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    price: 149.99,
    createdAt: Date.now()
  },
  {
    id: 'exo-003',
    brand: 'Exosomore',
    name: 'The Next Cell Boosting Ampoule Shot',
    description: 'Gel-type spray ampoule rich in antioxidants. 3 billion Exosomes with 10 types of Peptides and Hyaluronic Acid complex. 80% low-molecular Collagen Water. Evenly sprayed like a mist to firm and fill skin with moisture and nutrients.',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop',
    price: 129.99,
    createdAt: Date.now()
  }
];

export function getProducts(): Product[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      return JSON.parse(data);
    }
    // Initialize with Exosomore products on first load
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  } catch {
    return INITIAL_PRODUCTS;
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
