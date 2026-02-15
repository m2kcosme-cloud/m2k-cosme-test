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
            image="https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-2_1771148258000_na1fn_aW5ncmVkaWVudC1leG9zb21l.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTJfMTc3MTE0ODI1ODAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFsZUc5emIyMWwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=l87EUzoHzWn9FoHAJHEkBQ3~CtVXmwcGV~BWb0H12UzhqOdh7LOFje7pwBrWme1m56f71SCweNnzruAExINdEEdcA-gASoWRZCBxjd36PnqxBMJ3P3g6E9kaoTRssIYhXQ0vuonv3q9FfqkQmyIKa2CPK4iEZ3TX9zOS5c173WbP6CFvkfBVjOyeXYWy7CwkISdI5kdLSndjskVRmor5AITeQxx25jfou6StdTRz6f7IOIgM7S6jBYf~fyiRaCPu7u658wDUHUOwhYqi8KT0j34VR5D14YPSndbMTbEjLF2ayzyKc~89ZE8FsPLGRB7Sl2o5EZQxHTdqmRtWs04pQw__"
            path="/ingredient/exosome"
          />
          <IngredientCard 
            name="PN + PDRN Complex"
            subtitle="DNA Regeneration Science"
            image="https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-3_1771148254000_na1fn_aW5ncmVkaWVudC1kbmE.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTNfMTc3MTE0ODI1NDAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFrYm1FLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=C5lk50Q2XMLXgNRNiqrGR67RgDhELEHOJOORbJHc6yGQuYbKul0R5zR75QKqDJCxHAy2sL9db7QJQvDNSt2VpHOXL-F8zFewdcZo4tvWoyaUJcE0kOuB1Sor1hTw-6GC4p0cPqwVb2GYWU-NLPvXgJVpuQEioww6VQo0Z~~wJ19rGMw-DZtutzlxVJXOJgUPhJFEypoMGpVryH8TSJRrrHJcEEtlT-G~TbdzIi83rCvvXoEtlp~~cHh~QepbYAgsj6DY8X9P6WtNmn3M6MBayeZhuQBK2jYe39IP6S5v3i7VPQcP9rmeOJjnt2ur89ZCGaHQtztsFZKuTw-aA7IX0g__"
            path="/ingredient/pdrn"
          />
          <IngredientCard 
            name="More than Cica"
            subtitle="Syzygium formosum Leaf Extract"
            image="https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-4_1771148255000_na1fn_aW5ncmVkaWVudC1ib3RhbmljYWw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmctaW1nLTRfMTc3MTE0ODI1NTAwMF9uYTFmbl9hVzVuY21Wa2FXVnVkQzFpYjNSaGJtbGpZV3cuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=UYdt9DJni-iao-jmXRNA6u-7HDCUA7UTaOdb9HbC78o-1l9-BZV54ubVR-c1Rbr5w9cxYp1-tpoeSzpb1kyP1jHDWsqXUbp2DQeHcgR4dYjYrGHhqeiIh~5bvA8o46MmYOmNVwUG1GJXUTia-AhesE4clyYeIetdKBdkfWICPbEmOKxj5JI6LON-HGJkgGzAw3tLOV9d5xGw3bBuiEKCThtlfKHGOltwTBkmzKYBGiKkCT1AkQIZsl1aiun2zM4uwxQDvgMvObhR~ADKpM8FyblMys52IEcILm2DqugmZGLvyLuMW~-VpqQxgkwKycTSt2TUd972dMpq1zX7nZOW3g__"
            path="/ingredient/botanical"
          />
          <IngredientCard 
            name="Topical Botox"
            subtitle="Expression-Line Care Without Injection"
            image="https://images.unsplash.com/photo-1612817288484-6f916006741a?w=1200&h=1200&fit=crop"
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
    <Link href={path}>
      <div className="group cursor-pointer fade-in-up">
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
    </Link>
  );
}
