/* Individual ingredient page - Allies minimalist style */

import { useRoute } from "wouter";

const ingredientData: Record<string, any> = {
  exosome: {
    name: "Exosome Complex",
    tagline: "Advanced Regenerative Signaling Support",
    description: "Exosome Complex refers to a stabilized blend of nano-scale biological vesicle fractions designed to support skin communication and visible renewal processes.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-2_1771148258000_na1fn_aW5ncmVkaWVudC1leG9zb21l.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTJfMTc3MTE0ODI1ODAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFsZUc5emIyMWwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l87EUzoHzWn9FoHAJHEkBQ3~CtVXmwcGV~BWb0H12UzhqOdh7LOFje7pwBrWme1m56f71SCweNnzruAExINdEEdcA-gASoWRZCBxjd36PnqxBMJ3P3g6E9kaoTRssIYhXQ0vuonv3q9FfqkQmyIKa2CPK4iEZ3TX9zOS5c173WbP6CFvkfBVjOyeXYWy7CwkISdI5kdLSndjskVRmor5AITeQxx25jfou6StdTRz6f7IOIgM7S6jBYf~fyiRaCPu7u658wDUHUOwhYqi8KT0j34VR5D14YPSndbMTbEjLF2ayzyKc~89ZE8FsPLGRB7Sl2o5EZQxHTdqmRtWs04pQw__",
    technology: "Ultra-Low Temperature Locking (-50℃)",
    benefits: [
      "Visible skin renewal",
      "Barrier strength feel",
      "Texture refinement",
      "Elasticity appearance",
      "Stressed-skin recovery look"
    ],
    fullDescription: "Exosome Complex is not our proprietary ingredient — it is an M2K-Curated technology selection. At M2K Cosme, we evaluate and curate high-performance exosome complexes based on scientific structure, stability, preservation method, and formulation compatibility — not brand marketing claims."
  },
  pdrn: {
    name: "PN + PDRN Complex",
    tagline: "DNA Regeneration Science",
    description: "PDRN + PN Complex is an advanced DNA-derived ingredient system designed to support visible skin renewal, recovery appearance, and resilience.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-3_1771148254000_na1fn_aW5ncmVkaWVudC1kbmE.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTNfMTc3MTE0ODI1NDAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFrYm1FLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=C5lk50Q2XMLXgNRNiqrGR67RgDhELEHOJOORbJHc6yGQuYbKul0R5zR75QKqDJCxHAy2sL9db7QJQvDNSt2VpHOXL-F8zFewdcZo4tvWoyaUJcE0kOuB1Sor1hTw-6GC4p0cPqwVb2GYWU-NLPvXgJVpuQEioww6VQo0Z~~wJ19rGMw-DZtutzlxVJXOJgUPhJFEypoMGpVryH8TSJRrrHJcEEtlT-G~TbdzIi83rCvvXoEtlp~~cHh~QepbYAgsj6DY8X9P6WtNmn3M6MBayeZhuQBK2jYe39IP6S5v3i7VPQcP9rmeOJjnt2ur89ZCGaHQtztsFZKuTw-aA7IX0g__",
    technology: "Dual DNA Fragment Strategy",
    benefits: [
      "Visible skin recovery support",
      "Texture refinement appearance",
      "Elasticity look improvement",
      "Barrier resilience feel",
      "Post-stress skin conditioning"
    ],
    fullDescription: "This complex approach goes beyond standard single-type PDRN ingredients by combining short-chain and long-chain DNA fragments to support both signaling activity and structural skin environment support."
  },
  botanical: {
    name: "More than Cica",
    tagline: "Syzygium formosum Leaf Extract",
    description: "Syzygium formosum Leaf Extract is an advanced botanical active selected for its multi-pathway soothing and barrier-strengthening properties.",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-4_1771148255000_na1fn_aW5ncmVkaWVudC1ib3RhbmljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTRfMTc3MTE0ODI1NTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFpYjNSaGJtbGpZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UYdt9DJni-iao-jmXRNA6u-7HDCUA7UTaOdb9HbC78o-1l9-BZV54ubVR-c1Rbr5w9cxYp1-tpoeSzpb1kyP1jHDWsqXUbp2DQeHcgR4dYjYrGHhqeiIh~5bvA8o46MmYOmNVwUG1GJXUTia-AhesE4clyYeIetdKBdkfWICPbEmOKxj5JI6LON-HGJkgGzAw3tLOV9d5xGw3bBuiEKCThtlfKHGOltwTBkmzKYBGiKkCT1AkQIZsl1aiun2zM4uwxQDvgMvObhR~ADKpM8FyblMys52IEcILm2DqugmZGLvyLuMW~-VpqQxgkwKycTSt2TUd972dMpq1zX7nZOW3g__",
    technology: "Precision Botanical Extraction",
    benefits: [
      "Faster visible calming appearance",
      "Stronger barrier feel",
      "Reduced look of stress-reactive skin",
      "Improved comfort for sensitive skin types",
      "More stable skin condition over time"
    ],
    fullDescription: "Often described as 'More Than Cica,' this ingredient is chosen for going beyond traditional Centella-based calming — targeting not only visible redness comfort but also barrier structure support and antioxidant defense."
  },
  botox: {
    name: "Topical Botox",
    tagline: "Precision Expression-Line Care Without Injection",
    description: "Topical Botox technology is an M2K-Curated cosmetic biotechnology system designed to support the appearance of smoother, more relaxed-looking skin.",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&h=1200&fit=crop",
    technology: "Biotech-Derived Active Platform",
    benefits: [
      "Expression line appearance softening",
      "Fine wrinkle look reduction",
      "Skin surface relaxation appearance",
      "Elasticity feel improvement",
      "Smoother-looking texture"
    ],
    fullDescription: "Through advanced peptide-toxin-inspired actives and delivery platforms, this technology supports the appearance of smoother, more relaxed-looking skin."
  }
};

export default function IngredientDetail() {
  const [match, params] = useRoute("/ingredient/:id");
  
  if (!match) return null;
  
  const id = (params as any)?.id;
  const ingredient = ingredientData[id];

  if (!ingredient) {
    return (
      <div className="container py-24">
        <h1>Ingredient not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="aspect-square bg-secondary overflow-hidden">
              <img
                src={ingredient.image}
                alt={ingredient.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="label text-primary mb-4">{ingredient.tagline}</div>
              <h1 className="mb-6">{ingredient.name}</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {ingredient.description}
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="label mb-3">TECHNOLOGY</div>
                <p className="text-lg font-medium">{ingredient.technology}</p>
              </div>

              <div>
                <div className="label mb-4">KEY BENEFITS</div>
                <ul className="space-y-3">
                  {ingredient.benefits.map((benefit: string, i: number) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span className="text-base">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Description */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-3xl">
          <h2 className="mb-8">About This Ingredient</h2>
          <p className="text-lg leading-relaxed mb-8">
            {ingredient.fullDescription}
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Performance depends on total formulation design — which is why M2K Cosme curates ingredient systems, not just ingredient names.
          </p>
        </div>
      </section>
    </div>
  );
}
