/* Clinical Modernism Design: Clean, precise, systematic layout with medical aesthetic */

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src="https://private-us-east-1.manuscdn.com/sessionFile/ponjDAwdpVuaMffk8TdwxL/sandbox/mmqiOBPfp5iY3628faDHnh-img-5_1771148267000_na1fn_YWJvdXQtbGFib3JhdG9yeQ.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcG9uakRBd2RwVnVhTWZmazhUZHd4TC9zYW5kYm94L21tcWlPQlBmcDVpWTM2MjhmYURIbmgtaW1nLTVfMTc3MTE0ODI2NzAwMF9uYTFmbl9ZV0p2ZFhRdGJHRmliM0poZEc5eWVRLmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dJqUUrGxYJDeFQcJMAnPYSjEsZoS~1KDHvX-VBdWk6d8Rdj5BbXmQuDOooDhWl7cdTQnYl5gXEZ28ZO84LWFxi-en0baj4lb~-kxMq6NSr-f2KJs15DeOKS2iBw5MIJBGKwdgWZ4oDsiBS4cQWOaIUdrDuI5BUsHc2I4sn-Z-54p5VTfD4HNbv7gDI39nlPzVKtCFesKRK3CMrBtqSCon8dyc6z0k0UFf1TKIQ9Tn2bZlACu26EPAVhj1aNDXXVqWQa7HOK1oDF4UrDfhS9OnhUrvd8pOpm21XXuyuAvdbKoDwrZYDlbc9sGuVE6PXhGwI1ZhbQkHDy5nHAPcZL4Eg__"
          alt="M2K Cosme Laboratory"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"></div>
        <div className="absolute bottom-0 left-0 right-0 container pb-16">
          <div className="label text-primary mb-4">ABOUT US</div>
          <h1 className="text-foreground">About Us — M2K Cosme</h1>
          <p className="text-xl mt-4 max-w-2xl text-foreground/80">
            Where Medical Science Meets K-Beauty Innovation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8 space-y-16">
            {/* Introduction */}
            <div className="fade-in-up">
              <p className="text-lg leading-relaxed">
                M2K Cosme was founded on a dual promise: to honor the legacy behind our founders' names while delivering the true power of medical science to modern K-Beauty. We are built on the belief that skincare should be guided by evidence, integrity, and formulation expertise — not just trends or marketing claims.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                We bridge the gap between pharmaceutical knowledge and beauty innovation, bringing together clinically grounded ingredients and refined skincare experiences. Our approach is simple: if it doesn't make scientific sense, it doesn't make it into our portfolio.
              </p>
            </div>

            <div className="clinical-divider"></div>

            {/* Our Foundation */}
            <div className="fade-in-up">
              <h2 className="mb-6">Our Foundation</h2>
              <p className="text-lg leading-relaxed">
                Our founder brings more than 15 years of experience in the Korean pharmaceutical industry. With deep exposure to ingredient research, product evaluation, and therapeutic formulation standards, he has developed a sharp understanding of what truly works — and what only appears to work.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                This background shapes our standards and selection philosophy. We evaluate products through a pharmaceutical lens: mechanism of action, ingredient stability, delivery systems, safety profile, and real-world performance all matter. Popularity alone does not.
              </p>
            </div>

            <div className="clinical-divider"></div>

            {/* Our Mission */}
            <div className="fade-in-up">
              <h2 className="mb-6">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                Our mission is to curate the next generation of breakthrough ingredients and technologies — not simply follow what is currently trending.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Advanced functional ingredients with proven mechanisms</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Novel delivery systems that improve absorption and efficacy</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Formulations supported by credible testing and data</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-1 h-1 rounded-full bg-primary mt-3 flex-shrink-0"></div>
                  <p className="text-lg">Skincare solutions focused on long-term skin health</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-6">
                We believe tomorrow's hero ingredients are already emerging in labs and research pipelines — and our role is to bring them forward responsibly.
              </p>
            </div>

            <div className="clinical-divider"></div>

            {/* Our Selection Philosophy */}
            <div className="fade-in-up">
              <h2 className="mb-6">Our Selection Philosophy</h2>
              <p className="text-lg leading-relaxed mb-8">
                Every product we carry goes through a careful review and sourcing process. We prioritize:
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h4 className="mb-2">Science-backed formulations</h4>
                  <p className="text-muted-foreground">Ingredients supported by research and measurable outcomes</p>
                </div>
                <div>
                  <h4 className="mb-2">Safety and purity</h4>
                  <p className="text-muted-foreground">Clean manufacturing standards and responsible formulation design</p>
                </div>
                <div>
                  <h4 className="mb-2">Functional performance</h4>
                  <p className="text-muted-foreground">Visible, repeatable results in real use</p>
                </div>
                <div>
                  <h4 className="mb-2">Formulation integrity</h4>
                  <p className="text-muted-foreground">Proper concentrations and synergistic ingredient structure</p>
                </div>
                <div>
                  <h4 className="mb-2">Sensorial excellence</h4>
                  <p className="text-muted-foreground">The texture, feel, and ritual experience that defines premium K-Beauty</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-8">
                The result is a curated range that combines clinical credibility with elegance and innovation.
              </p>
            </div>

            <div className="clinical-divider"></div>

            {/* What Makes M2K Different */}
            <div className="fade-in-up">
              <h2 className="mb-6">What Makes M2K Different</h2>
              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  Many beauty retailers follow trends. <span className="font-semibold">We evaluate mechanisms.</span>
                </p>
                <p className="text-lg leading-relaxed">
                  Many brands highlight hype ingredients. <span className="font-semibold">We verify functional levels.</span>
                </p>
                <p className="text-lg leading-relaxed">
                  Many products promise results. <span className="font-semibold">We look for proof and formulation logic.</span>
                </p>
              </div>
              <p className="text-lg leading-relaxed mt-8">
                M2K Cosme stands for informed curation — where each product earns its place through science, not slogans.
              </p>
            </div>

            <div className="clinical-divider"></div>

            {/* Our Promise */}
            <div className="fade-in-up">
              <h2 className="mb-6">Our Promise</h2>
              <p className="text-lg leading-relaxed mb-6">
                With M2K Cosme, every moment of self-care becomes:
              </p>
              <div className="space-y-6">
                <div className="pl-8 border-l-2 border-primary">
                  <p className="text-2xl font-medium">A moment to renew</p>
                </div>
                <div className="pl-8 border-l-2 border-primary">
                  <p className="text-2xl font-medium">A moment to trust</p>
                </div>
                <div className="pl-8 border-l-2 border-primary">
                  <p className="text-2xl font-medium">A moment worth keeping</p>
                </div>
              </div>
              <p className="text-lg leading-relaxed mt-8">
                We are committed to delivering skincare that respects both the intelligence of science and the beauty of experience — so you can choose with confidence and care with purpose.
              </p>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-8 space-y-8">
              <div className="bg-secondary p-8">
                <div className="label mb-4">KEY PRINCIPLES</div>
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold mb-1">Evidence-Based</div>
                    <p className="text-sm text-muted-foreground">Guided by research, not trends</p>
                  </div>
                  <div className="clinical-divider"></div>
                  <div>
                    <div className="font-semibold mb-1">Pharmaceutical Standards</div>
                    <p className="text-sm text-muted-foreground">15+ years of industry expertise</p>
                  </div>
                  <div className="clinical-divider"></div>
                  <div>
                    <div className="font-semibold mb-1">Formulation Integrity</div>
                    <p className="text-sm text-muted-foreground">Proper concentrations and synergy</p>
                  </div>
                  <div className="clinical-divider"></div>
                  <div>
                    <div className="font-semibold mb-1">Long-Term Focus</div>
                    <p className="text-sm text-muted-foreground">Sustainable skin health over quick fixes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
