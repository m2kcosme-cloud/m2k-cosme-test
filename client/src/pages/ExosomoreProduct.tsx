import { useRoute } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function ExosomoreProduct() {
  const [match, params] = useRoute("/exosomore/product/:id");

  const productDetails: Record<string, any> = {
    "1": {
      name: "The Next Cell Booster",
      format: "Vial (Liquid)",
      size: "3ml × 4ea",
      price: "$299.99",
      exosomes: "156 billion",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop",
      description: "The cornerstone of Exosomore's regenerative system. This concentrated vial contains 156 billion human amniotic fluid-derived stem cell culture exosomes.",
      benefits: [
        "100% Human Amniotic Fluid-Derived Stem Cell Culture Exosome",
        "156 billion exosomes per vial",
        "1,300+ proteins and 20 growth factors",
        "Microbiome Exosome + Cica Exosome complex",
        "Low molecular Collagen + Hyaluronic Acid",
        "Enhanced absorption with elastic liposome eL-Posome technology"
      ],
      usage: "Apply 1 vial to clean skin. Can be mixed with Fill-up Ampoule for enhanced results. Use 2-3 times per week or as directed by skincare professional.",
      keyIngredients: [
        { name: "Human Amniotic Fluid Exosomes", benefit: "Cellular regeneration and renewal" },
        { name: "Microbiome Exosomes", benefit: "Microbiota balance and skin barrier support" },
        { name: "Cica Exosomes", benefit: "Calming and soothing properties" },
        { name: "Low-Molecular Collagen", benefit: "Deep hydration and elasticity" },
        { name: "Hyaluronic Acid", benefit: "Moisture retention and plumping" }
      ],
      clinicalResults: [
        { metric: "147.8%", description: "Collagen production increase in 24 hours" },
        { metric: "214%", description: "Increased absorption rate" },
        { metric: "216%", description: "Absorption depth improvement" }
      ]
    },
    "2": {
      name: "The Next Cell Fill-up Ampoule",
      format: "Injector (Ampoule)",
      size: "9.5ml × 4ea",
      price: "$199.99",
      exosomes: "3 billion",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop",
      description: "A concentrated nourishing ampoule designed to maximize regenerative synergy when used with The Next Cell Booster. Functional cosmetic with Whitening & Anti-wrinkle benefits.",
      benefits: [
        "3 billion exosomes",
        "80% low-molecular Collagen Water",
        "10 types of Peptides",
        "8 types of Hyaluronic Acid",
        "Vitamin A Retinol + 10 Essential Amino Acids",
        "10 Essential Vitamins + Multi Peptides",
        "Galactomyces Ferment Filtrate for deep moisturizing"
      ],
      usage: "Apply after The Next Cell Booster for enhanced results. Can be used independently as a concentrated treatment. Use 2-3 times per week.",
      keyIngredients: [
        { name: "Exosomes", benefit: "Cellular communication and regeneration" },
        { name: "Vitamin A Retinol", benefit: "Anti-aging and skin renewal" },
        { name: "Multi Peptides (10 types)", benefit: "Collagen support and firming" },
        { name: "Hyaluronic Acid Complex (8 types)", benefit: "Multi-layer hydration" },
        { name: "Galactomyces Ferment Filtrate", benefit: "Deep nourishment and brightening" }
      ],
      clinicalResults: [
        { metric: "110.14%", description: "Skin density improvement after 2 weeks" },
        { metric: "Visible", description: "Deep wrinkle reduction after 1 use" },
        { metric: "Visible", description: "Elasticity recovery after 1 use" }
      ]
    },
    "3": {
      name: "The Next Cell Boosting Ampoule Shot",
      format: "Spray/Mist",
      size: "100ml",
      price: "$149.99",
      exosomes: "3 billion",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=800&fit=crop",
      description: "A gel-type ampoule rich in antioxidants, delivered in convenient mist form. Firms and fills skin with moisture and nutrients for daily regenerative support.",
      benefits: [
        "3 billion exosomes",
        "Gel-type formula with antioxidant complex",
        "80% low-molecular Collagen Water",
        "10 types of Peptides",
        "Hyaluronic Acid complex",
        "Convenient spray/mist application",
        "Excellent absorbency",
        "Evenly distributed coverage"
      ],
      usage: "Spray onto clean skin or over makeup. Use 2-3 times daily or whenever skin needs a regenerative boost. Can be layered with other products.",
      keyIngredients: [
        { name: "Exosomes", benefit: "Continuous cellular support" },
        { name: "Antioxidant Complex", benefit: "Environmental protection" },
        { name: "Low-Molecular Collagen", benefit: "Hydration and firmness" },
        { name: "Peptide Complex", benefit: "Skin strengthening" },
        { name: "Hyaluronic Acid", benefit: "Moisture locking" }
      ],
      clinicalResults: [
        { metric: "Visible", description: "Hollow cheek area filling after 1 use" },
        { metric: "Immediate", description: "Skin plumping and hydration" },
        { metric: "Continuous", description: "Daily regenerative support" }
      ]
    }
  };

  const product = params?.id ? productDetails[params.id] : null;

  if (!product) {
    return (
      <div className="container py-32">
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-32 lg:py-48">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <div className="aspect-square bg-secondary overflow-hidden mb-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="label text-primary mb-6">EXOSOMORE PRODUCT</div>
            <h1 className="mb-8 leading-tight">{product.name}</h1>
            <div className="h-px w-24 bg-primary mb-12"></div>

            <div className="space-y-6 mb-12">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Format</p>
                <p className="text-lg font-semibold">{product.format}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Size</p>
                <p className="text-lg font-semibold">{product.size}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Exosome Content</p>
                <p className="text-lg font-semibold">{product.exosomes}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Price</p>
                <p className="text-3xl font-bold text-primary">{product.price}</p>
              </div>
            </div>

            <Link href="/cosmetics?brand=Exosomore">
              <Button size="lg" className="text-base font-medium px-8 py-6 w-full">
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">About This Product</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {product.description}
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-12">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {product.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Ingredients */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-12">Key Ingredients</h2>
          <div className="space-y-8">
            {product.keyIngredients.map((ingredient: any, index: number) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="font-semibold mb-2">{ingredient.name}</h3>
                <p className="text-muted-foreground">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Results */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-12">Clinical Results</h2>
          <div className="space-y-8">
            {product.clinicalResults.map((result: any, index: number) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <p className="text-muted-foreground">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">How to Use</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {product.usage}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">Ready to Experience Regeneration?</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Discover how Exosomore's advanced exosome technology can transform your skin.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="/cosmetics?brand=Exosomore">
              <Button size="lg" className="text-base font-medium px-8 py-6">
                View All Exosomore Products
              </Button>
            </Link>
            <Link href="/exosomore">
              <Button size="lg" variant="outline" className="text-base font-medium px-8 py-6">
                Back to Brand
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
