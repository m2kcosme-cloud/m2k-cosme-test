/* Allies-inspired minimalist homepage */

import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-32 lg:py-48">
        <div className="max-w-5xl">
          <div className="mb-12 lg:mb-16">
            <h1 className="mb-8 leading-tight">
              Beyond Trends,<br />
              Into Science.
            </h1>
            <div className="h-px w-24 bg-primary mb-12"></div>
            <p className="text-2xl lg:text-3xl leading-relaxed text-muted-foreground max-w-3xl">
              Choose the future of your skin — powered by real skincare science.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6">
            <a href="/ingredient/exosome" className="inline-block">
              <Button size="lg" className="text-base font-medium px-8 py-6">
                Explore Ingredients
              </Button>
            </a>
            <a href="/about" className="inline-block">
              <Button size="lg" variant="outline" className="text-base font-medium px-8 py-6">
                About Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Ingredients */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="mb-20">
          <div className="label text-primary mb-6">M2K-CURATED INGREDIENTS</div>
          <h2 className="mb-8">Advanced Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Every ingredient we curate is selected based on scientific structure, stability, preservation method, and formulation compatibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <IngredientCard 
            name="Exosome Complex"
            subtitle="Regenerative Signaling Support"
            image="https://i.pinimg.com/736x/ed/c6/4d/edc64dcce12c4d56dee5b6950bb2a245.jpg"
            path="/ingredient/exosome"
          />
          <IngredientCard 
            name="PN + PDRN Complex"
            subtitle="DNA Regeneration Science"
            image="https://i.pinimg.com/1200x/83/53/41/8353411a65888d49b7f8b3bb4076a8b4.jpg"
            path="/ingredient/pdrn"
          />
          <IngredientCard 
            name="More than Cica"
            subtitle="Syzygium formosum Leaf Extract"
            image="https://i.pinimg.com/1200x/0f/ff/be/0fffbedfc8fcb467e218042e3d12dae2.jpg"
            path="/ingredient/botanical"
          />
          <IngredientCard 
            name="Topical Botox"
            subtitle="Expression-Line Care Without Injection"
            image="https://snowtox.co.kr/web/upload/_dj/img/s107/240920/company2_img3.jpg"
            path="/ingredient/botox"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-32 lg:py-48 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">Informed Curation.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            M2K Cosme stands for informed curation — where each product earns its place through science, not slogans.
          </p>
          <a href="/about" className="inline-block">
            <Button size="lg" variant="outline" className="text-base font-medium px-8 py-6">
              Learn More
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}

function IngredientCard({ name, subtitle, image, path }: { name: string; subtitle: string; image: string; path: string }) {
  return (
    <div className="group cursor-pointer fade-in-up" onClick={() => window.location.href = path}>
      <div className="aspect-square bg-secondary overflow-hidden mb-8">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-2 group-hover:text-primary transition-colors">{name}</h3>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}
