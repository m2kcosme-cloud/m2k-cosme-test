import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ExosomoreBrand() {
  const products = [
    {
      id: 1,
      name: "The Next Cell Booster",
      format: "Vial (Liquid)",
      size: "3ml × 4ea",
      exosomes: "156 billion",
      image: "https://images.unsplash.com/photo-1584308666744-24d5f15714ae?w=500&h=500&fit=crop",
      description: "100% Human Amniotic Fluid-Derived Stem Cell Culture Exosome with 1,300+ proteins and 20 growth factors",
      price: "$299.99"
    },
    {
      id: 2,
      name: "The Next Cell Fill-up Ampoule",
      format: "Injector (Ampoule)",
      size: "9.5ml × 4ea",
      exosomes: "3 billion",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
      description: "Concentrated nourishing ampoule with Whitening & Anti-wrinkle benefits. 80% low-molecular Collagen Water",
      price: "$199.99"
    },
    {
      id: 3,
      name: "The Next Cell Boosting Ampoule Shot",
      format: "Spray/Mist",
      size: "100ml",
      exosomes: "3 billion",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
      description: "Gel-type ampoule rich in antioxidants. Firms and fills skin with moisture and nutrients",
      price: "$149.99"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-32 lg:py-48">
        <div className="max-w-4xl">
          <div className="mb-12">
            <div className="label text-primary mb-6">EXOSOMORE</div>
            <h1 className="mb-8 leading-tight">
              The Key to Skin Regeneration<br />
              Born from Exosomes
            </h1>
            <div className="h-px w-24 bg-primary mb-12"></div>
            <p className="text-2xl lg:text-3xl leading-relaxed text-muted-foreground max-w-3xl">
              Advanced exosome technology from ihee, a leader in Korean pharmaceutical innovation since 1987. Partnered with LPHYSIO for global high-end aesthetic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <h2 className="mb-8">Why Exosomore</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Hypoxic Stem Cell Culture Technology</h3>
                <p className="text-muted-foreground">Patented technology that produces large quantities of exosomes through advanced hypoxic culture methods, ensuring maximum potency and purity.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Preservation-Free & Fresh</h3>
                <p className="text-muted-foreground">-50°C rapid freeze-drying technology preserves exosome integrity without chemical preservatives, delivering high-purity, fresh exosomes.</p>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Multiple Exosome Types</h3>
                <p className="text-muted-foreground">Human cell-derived, Centella asiatica stem-cell, and microbiome exosomes from young skin for comprehensive regenerative support.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-8">Clinical Results</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-bold text-primary mb-2">147.8%</div>
                <p className="text-muted-foreground">Collagen production increase in 24 hours (in vitro)</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-bold text-primary mb-2">214%</div>
                <p className="text-muted-foreground">Increased absorption rate</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-bold text-primary mb-2">110.14%</div>
                <p className="text-muted-foreground">Skin density improvement after 2 weeks</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <p className="text-muted-foreground font-semibold">Deep wrinkles, elasticity, and hollow cheek areas show visible improvement after just 1 use</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="mb-20">
          <h2 className="mb-8">Innovative Formulations</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Each product combines exosome technology with complementary actives for maximum efficacy and synergy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-border p-8">
            <h3 className="font-semibold mb-4">Exosome Rich Complex</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• 1,300+ proteins</li>
              <li>• 20 growth factors</li>
              <li>• Multiple exosome types</li>
              <li>• Elastic liposome delivery</li>
            </ul>
          </div>

          <div className="border border-border p-8">
            <h3 className="font-semibold mb-4">Hydration & Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Low-molecular collagen</li>
              <li>• 8 types of hyaluronic acid</li>
              <li>• 10 essential amino acids</li>
              <li>• 10 essential vitamins</li>
            </ul>
          </div>

          <div className="border border-border p-8">
            <h3 className="font-semibold mb-4">Advanced Actives</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Vitamin A retinol</li>
              <li>• 10 types of peptides</li>
              <li>• Antioxidant complex</li>
              <li>• Brightening actives</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="mb-20">
          <h2 className="mb-8">Product Collection</h2>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Three powerful formulations designed to work together or independently for complete skin regeneration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {products.map((product) => (
            <Link key={product.id} href={`/exosomore/product/${product.id}`}>
              <div className="group cursor-pointer fade-in-up">
                <div className="aspect-square bg-secondary overflow-hidden mb-8">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.format}</p>
                <p className="text-primary font-semibold">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">Patented Technology</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Exosomore is backed by 6 patents related to amniotic fluid stem cell culture solutions, ensuring cutting-edge innovation and efficacy you can trust.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Hypoxic Stem Cell Culture</h3>
              <p className="text-muted-foreground">Advanced culturing technique that maximizes exosome production while maintaining purity and potency.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Freeze-Dried Preservation</h3>
              <p className="text-muted-foreground">-50°C rapid freeze-drying preserves exosome structure and function without chemical preservatives.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Elastic Liposome Delivery (eL-Posome)</h3>
              <p className="text-muted-foreground">Enhanced absorption technology that improves penetration depth and speed for maximum efficacy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">Experience Exosomore</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Discover the science of skin regeneration. Each product is formulated to deliver visible results backed by clinical research and innovative technology.
          </p>
          <Link href="/cosmetics?brand=Exosomore">
            <Button size="lg" className="text-base font-medium px-8 py-6">
              View All Products
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
