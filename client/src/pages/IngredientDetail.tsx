/* Individual ingredient page - Allies minimalist style with detailed content from PPT */

import { useRoute } from "wouter";

const ingredientData: Record<string, any> = {
  exosome: {
    name: "Exosome Complex",
    tagline: "Advanced Regenerative Signaling Support",
    subtitle: "M2K-Curated Ingredient",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-2_1771148258000_na1fn_aW5ncmVkaWVudC1leG9zb21l.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTJfMTc3MTE0ODI1ODAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFsZUc5emIyMWwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l87EUzoHzWn9FoHAJHEkBQ3~CtVXmwcGV~BWb0H12UzhqOdh7LOFje7pwBrWme1m56f71SCweNnzruAExINdEEdcA-gASoWRZCBxjd36PnqxBMJ3P3g6E9kaoTRssIYhXQ0vuonv3q9FfqkQmyIKa2CPK4iEZ3TX9zOS5c173WbP6CFvkfBVjOyeXYWy7CwkISdI5kdLSndjskVRmor5AITeQxx25jfou6StdTRz6f7IOIgM7S6jBYf~fyiRaCPu7u658wDUHUOwhYqi8KT0j34VR5D14YPSndbMTbEjLF2ayzyKc~89ZE8FsPLGRB7Sl2o5EZQxHTdqmRtWs04pQw__",
    description: "Exosome Complex refers to a stabilized blend of nano-scale biological vesicle fractions designed to support skin communication and visible renewal processes.",
    whatIs: "Exosome Complex refers to a stabilized blend of nano-scale biological vessel fractions designed to support skin communication and visible renewal processes. These vesicles carry signaling components such as peptides, proteins, and bioactive molecules associated with skin recovery and resilience support.\n\nAt M2K Cosme, we position Exosome Complex as a functional signaling support ingredient — not a trend label.",
    curatedFor: [
      "Visible skin renewal",
      "Barrier strength feel",
      "Texture refinement",
      "Elasticity appearance",
      "Stressed-skin recovery look"
    ],
    technology: "Advanced Preservation Technology — Ultra-Low Temperature Locking (-50°C)",
    technologyDescription: "Exosome activity depends heavily on how the material is preserved. Heat and moisture exposure can weaken vesicle integrity and reduce functional value.\n\nM2K Cosme gives preference to Exosome Complex systems produced using -50°C rapid freeze-dry preservation technology — an ultra-low temperature process designed to lock in the ingredient at its most potent state.",
    whyAdvanced: [
      {
        title: "Multi-Source Vesicle Composition — M2K-Curated",
        description: "Typical exosome ingredients often come from one biological source only. The M2K-Curated Exosome Complex uses multi-source vesicle fractions to provide broader signaling diversity. Wider biological messaging potential supports more balanced visible skin benefits."
      },
      {
        title: "Stability-Screened Systems — M2K-Curated",
        description: "Exosomes are structurally fragile. Many degrade easily with heat, pH change, or oxidation. M2K Cosme curates only Exosome Complex materials that demonstrate stability support plus low-temperature preservation compatibility within cosmetic carrier systems."
      },
      {
        title: "Formulation-Integrated Design — M2K-Curated",
        description: "Regular exosome ingredients are often added as isolated actives. The M2K-Curated Exosome Complex is selected when it is designed to work in synergy with peptides, hydration factors, and barrier-support ingredients."
      },
      {
        title: "Cosmetic Delivery Compatibility — M2K-Curated",
        description: "Some raw exosome materials are not optimized for cosmetic dispersion or skin contact efficiency. M2K Cosme favors Exosome Complex systems engineered for cosmetic formulation compatibility and activation after preservation."
      }
    ],
    meansInFormulas: [
      "Smoother-looking texture",
      "Improved firmness appearance",
      "Faster visible recovery look",
      "Stronger barrier feel",
      "More resilient skin appearance"
    ]
  },
  pdrn: {
    name: "PN + PDRN Complex",
    tagline: "DNA Regeneration Science",
    subtitle: "M2K-Curated Ingredient Technology",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-3_1771148254000_na1fn_aW5ncmVkaWVudC1kbmE.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTNfMTc3MTE0ODI1NDAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFrYm1FLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=C5lk50Q2XMLXgNRNiqrGR67RgDhELEHOJOORbJHc6yGQuYbKul0R5zR75QKqDJCxHAy2sL9db7QJQvDNSt2VpHOXL-F8zFewdcZo4tvWoyaUJcE0kOuB1Sor1hTw-6GC4p0cPqwVb2GYWU-NLPvXgJVpuQEioww6VQo0Z~~wJ19rGMw-DZtutzlxVJXOJgUPhJFEypoMGpVryH8TSJRrrHJcEEtlT-G~TbdzIi83rCvvXoEtlp~~cHh~QepbYAgsj6DY8X9P6WtNmn3M6MBayeZhuQBK2jYe39IP6S5v3i7VPQcP9rmeOJjnt2ur89ZCGaHQtztsFZKuTw-aA7IX0g__",
    description: "PDRN + PN Complex is an advanced DNA-derived ingredient system designed to support visible skin renewal, recovery appearance, and resilience.",
    whatIs: "PDRN (Polydeoxyribonucleotide) and PN (Polynucleotide) are both DNA-derived bioactive materials, typically sourced from highly purified salmon DNA and processed for cosmetic or medical aesthetic use.\n\nThey differ mainly in molecular length and functional role:\n• PDRN: shorter DNA fragments — associated with cellular signaling support\n• PN: longer DNA fragments — associated with hydration factors, skin environment support\n\nThe PDRN + PN Complex combines both structures into a dual-function regeneration support system.",
    curatedFor: [
      "Visible skin recovery support",
      "Texture refinement appearance",
      "Elasticity look improvement",
      "Barrier resilience feel",
      "Post-stress skin conditioning"
    ],
    technology: "Dual DNA Fragment Strategy",
    technologyDescription: "This complex approach goes beyond standard single-type PDRN ingredients by combining short-chain and long-chain DNA fragments to support both signaling activity and structural skin environment support.",
    whyAdvanced: [
      {
        title: "Dual DNA Fragment Strategy — M2K-Curated",
        description: "Many products use PDRN alone. M2K Cosme prioritizes PDRN + PN combined systems that include multiple DNA fragment sizes. Short-chain fragments support renewal signaling, while longer chains help support the skin's moisture and structural environment — delivering broader functional coverage."
      },
      {
        title: "Purity & Fragment Control — M2K-Curated",
        description: "DNA-derived ingredients can vary widely depending on extraction and purification methods. M2K Cosme curates PDRN + PN Complex materials that demonstrate controlled fragment size ranges, high purification standards, and consistent molecular profiles."
      },
      {
        title: "Stability & Cosmetic Compatibility — M2K-Curated",
        description: "Raw DNA fragments can degrade or lose performance if not properly processed for cosmetic systems. M2K Cosme selects PDRN + PN Complex ingredients that are stability-screened and formulation-ready."
      },
      {
        title: "Signal + Structure Support — M2K-Curated",
        description: "Single-type PDRN focuses mainly on signaling pathways. The M2K-Curated PDRN + PN Complex supports both biological signaling support (PDRN role) and hydration and matrix environment support (PN role)."
      }
    ],
    meansInFormulas: [
      "Smoother-looking skin texture",
      "Improved firmness appearance",
      "Stronger moisture retention feel",
      "Faster visible recovery look",
      "More resilient skin condition"
    ]
  },
  botanical: {
    name: "More than Cica",
    tagline: "Syzygium formosum Leaf Extract",
    subtitle: "M2K-Curated Barrier & Soothing Active",
    image: "https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-4_1771148255000_na1fn_aW5ncmVkaWVudC1ib3RhbmljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTRfMTc3MTE0ODI1NTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFpYjNSaGJtbGpZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UYdt9DJni-iao-jmXRNA6u-7HDCUA7UTaOdb9HbC78o-1l9-BZV54ubVR-c1Rbr5w9cxYp1-tpoeSzpb1kyP1jHDWsqXUbp2DQeHcgR4dYjYrGHhqeiIh~5bvA8o46MmYOmNVwUG1GJXUTia-AhesE4clyYeIetdKBdkfWICPbEmOKxj5JI6LON-HGJkgGzAw3tLOV9d5xGw3bBuiEKCThtlfKHGOltwTBkmzKYBGiKkCT1AkQIZsl1aiun2zM4uwxQDvgMvObhR~ADKpM8FyblMys52IEcILm2DqugmZGLvyLuMW~-VpqQxgkwKycTSt2TUd972dMpq1zX7nZOW3g__",
    description: "Syzygium formosum Leaf Extract is an advanced botanical active selected for its multi-pathway soothing and barrier-strengthening properties.",
    whatIs: "Syzygium formosum Leaf Extract is a research-driven botanical extract developed for derma-soothing and barrier recovery support. Unlike general plant soothing extracts that mainly provide surface calming, this ingredient is studied for its influence on deeper skin defense and structural markers.",
    curatedFor: [
      "Visible redness comfort",
      "Sensitivity appearance support",
      "Barrier resilience feel",
      "Environmental stress defense",
      "Post-irritation conditioning"
    ],
    technology: "Multi-Pathway Soothing & Barrier Support",
    technologyDescription: "Often described as 'More Than Cica,' this ingredient is chosen for going beyond traditional Centella-based calming — targeting not only visible redness comfort but also barrier structure support and antioxidant defense.",
    whyAdvanced: [
      {
        title: "Multi-Pathway Soothing — M2K-Curated",
        description: "Traditional soothing botanicals mainly target surface inflammation signals. Syzygium formosum Leaf Extract is selected by M2K Cosme for influencing multiple soothing pathways, including inflammation regulation and oxidative stress response."
      },
      {
        title: "Barrier Protein & Lipid Support — M2K-Curated",
        description: "Research on this extract highlights support related to key barrier components such as ceramide-related lipid pathways, structural barrier proteins, and skin envelope support factors."
      },
      {
        title: "High Antioxidant Defense — M2K-Curated",
        description: "Compared with many common soothing plant extracts, Syzygium formosum Leaf Extract is curated by M2K Cosme for strong antioxidant activity, helping reduce the visible impact of environmental stress on skin."
      },
      {
        title: "Precision Botanical Extraction — M2K-Curated",
        description: "Not all plant extracts are equal. M2K Cosme curates Syzygium formosum Leaf Extract only when produced through targeted extraction and activity-preserving processing, ensuring the key functional compounds remain available in the final ingredient."
      }
    ],
    meansInFormulas: [
      "Faster visible calming appearance",
      "Stronger barrier feel",
      "Reduced look of stress-reactive skin",
      "Improved comfort for sensitive skin types",
      "More stable skin condition over time"
    ]
  },
  botox: {
    name: "Topical Botox",
    tagline: "Precision Expression-Line Care Without Injection",
    subtitle: "M2K-Curated Ingredient System",
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&h=1200&fit=crop",
    description: "Topical Botox technology is an M2K-Curated cosmetic biotechnology system designed to support the appearance of smoother, more relaxed-looking skin.",
    whatIs: "Topical Botox technology is an M2K-Curated cosmetic biotechnology system designed to support the appearance of smoother, more relaxed-looking skin. It is an injectable-free and a non-medical procedure. It is based on delivery science, safety evaluation, and cosmetic performance — not trend claims.\n\nThis unique platform is built on a patented biotech active (TBT-A1 technology), developed by Kanzen Biotechnology and applied in Snowtox technology platforms.",
    curatedFor: [
      "Expression line appearance softening",
      "Fine wrinkle look reduction",
      "Skin surface relaxation appearance",
      "Elasticity feel improvement",
      "Smoother-looking texture"
    ],
    technology: "Biotech-Derived Active Platform with Cryo-Preservation",
    technologyDescription: "According to the Snowtox platform brochure, the system is built on a patented biotech active (TBT-A1) derived from registered toxin-related strains and processed for cosmetic use. It uses -50°C rapid freeze-dry preservation to protect active energy and reduce ingredient degradation.",
    whyAdvanced: [
      {
        title: "Biotech-Derived Active Platform — M2K-Curated",
        description: "It is biotech-engineered, not synthetic mimic only. It is standardized for cosmetic application. It is safety-tested through certified toxicity evaluation labs (BT-CDP toxicity testing performed by certified institution - Biotoxtech)."
      },
      {
        title: "Deep Delivery Design — M2K-Curated",
        description: "The delivery approach is designed to help actives pass cell membrane layers and dermal-epidermal interface without skin damage or invasive procedure. M2K Cosme curates delivery-engineered systems because topical smoothing actives are only effective when delivery compatibility is validated."
      },
      {
        title: "Cryo-Preserved Activity Lock — M2K-Curated",
        description: "Snowtox technology uses -50°C rapid freeze-dry preservation to protect active energy and reduce ingredient degradation. Bio-actives are structurally fragile, and freeze-lock preservation improves stability window and supports fresher active integrity at formulation stage."
      }
    ],
    meansInFormulas: [
      "Smoother-looking expression areas",
      "Softer wrinkle appearance",
      "Refined skin texture look",
      "Firmer visual elasticity",
      "More relaxed-looking skin care routine"
    ]
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
              <div className="label text-primary mb-2">{ingredient.subtitle}</div>
              <h1 className="mb-4">{ingredient.name}</h1>
              <p className="text-xl text-muted-foreground mb-6">{ingredient.tagline}</p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {ingredient.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Is Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-8">What Is {ingredient.name}?</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            {ingredient.whatIs.split('\n\n').map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Curated For Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-8">M2K Cosme Curates This For:</h2>
          <ul className="space-y-4">
            {ingredient.curatedFor.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                <span className="text-lg text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-8">{ingredient.technology}</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            {ingredient.technologyDescription}
          </p>
        </div>
      </section>

      {/* Why Advanced Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-12">Why M2K-Curated {ingredient.name} Is More Advanced</h2>
          <div className="space-y-12">
            {ingredient.whyAdvanced.map((item: any, i: number) => (
              <div key={i}>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Means Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-8">What This Means in M2K Cosme–Curated Formulas</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            When included in M2K Cosme curated products, {ingredient.name.toLowerCase()} is selected to support:
          </p>
          <ul className="space-y-4 mb-8">
            {ingredient.meansInFormulas.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                <span className="text-lg text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg leading-relaxed text-muted-foreground italic">
            Performance depends on total formulation design — which is why M2K Cosme curates ingredient systems, not just ingredient names.
          </p>
        </div>
      </section>

      {/* M2K Standard Section */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="mb-8">The M2K-Curated Ingredient Standard</h2>
          <p className="text-lg leading-relaxed text-muted-foreground mb-8">
            When M2K Cosme labels an ingredient as M2K-Curated, it has been selected based on:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
              <span className="text-lg text-muted-foreground">Source and processing quality</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
              <span className="text-lg text-muted-foreground">Stability and preservation strategy</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
              <span className="text-lg text-muted-foreground">Functional formulation fit</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
              <span className="text-lg text-muted-foreground">Safety in cosmetic use</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
              <span className="text-lg text-muted-foreground">Science-based evaluation logic</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
