/* About page - Allies minimalist style */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container py-32 lg:py-48">
        <div className="max-w-4xl">
          <div className="label text-primary mb-6">ABOUT US</div>
          <h1 className="mb-8">Where Medical Science Meets K-Beauty Innovation</h1>
          <p className="text-xl lg:text-2xl leading-relaxed text-muted-foreground">
            M2K Cosme was founded on a dual promise: to honor the legacy behind our founders' names while delivering the true power of medical science to modern K-Beauty.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container py-24 lg:py-32 border-t border-border">
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-24">
          {/* Main Text */}
          <div className="lg:col-span-2 space-y-16">
            {/* Foundation */}
            <div>
              <h2 className="mb-8">Our Foundation</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Our founder brings more than 15 years of experience in the Korean pharmaceutical industry. With deep exposure to ingredient research, product evaluation, and therapeutic formulation standards, he has developed a sharp understanding of what truly works — and what only appears to work.
                </p>
                <p className="text-lg leading-relaxed">
                  This background shapes our standards and selection philosophy. We evaluate products through a pharmaceutical lens: mechanism of action, ingredient stability, delivery systems, safety profile, and real-world performance all matter. Popularity alone does not.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="border-t border-border pt-16">
              <h2 className="mb-8">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-8">
                Our mission is to curate the next generation of breakthrough ingredients and technologies — not simply follow what is currently trending.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                  <span className="text-lg">Advanced functional ingredients with proven mechanisms</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                  <span className="text-lg">Novel delivery systems that improve absorption and efficacy</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                  <span className="text-lg">Formulations supported by credible testing and data</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="w-2 h-2 rounded-full bg-primary mt-3 flex-shrink-0"></span>
                  <span className="text-lg">Skincare solutions focused on long-term skin health</span>
                </li>
              </ul>
            </div>

            {/* Philosophy */}
            <div className="border-t border-border pt-16">
              <h2 className="mb-8">Our Selection Philosophy</h2>
              <p className="text-lg leading-relaxed mb-12">
                Every product we carry goes through a careful review and sourcing process. We prioritize:
              </p>
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <h4 className="mb-3">Science-backed formulations</h4>
                  <p className="text-muted-foreground">Ingredients supported by research and measurable outcomes</p>
                </div>
                <div>
                  <h4 className="mb-3">Safety and purity</h4>
                  <p className="text-muted-foreground">Clean manufacturing standards and responsible formulation design</p>
                </div>
                <div>
                  <h4 className="mb-3">Functional performance</h4>
                  <p className="text-muted-foreground">Visible, repeatable results in real use</p>
                </div>
                <div>
                  <h4 className="mb-3">Formulation integrity</h4>
                  <p className="text-muted-foreground">Proper concentrations and synergistic ingredient structure</p>
                </div>
              </div>
            </div>

            {/* What Makes Different */}
            <div className="border-t border-border pt-16">
              <h2 className="mb-8">What Makes M2K Different</h2>
              <div className="space-y-6">
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
            </div>

            {/* Promise */}
            <div className="border-t border-border pt-16">
              <h2 className="mb-8">Our Promise</h2>
              <p className="text-lg leading-relaxed mb-8">
                With M2K Cosme, every moment of self-care becomes:
              </p>
              <div className="space-y-6">
                <div className="pl-8 border-l-4 border-primary">
                  <p className="text-2xl font-bold">A moment to renew</p>
                </div>
                <div className="pl-8 border-l-4 border-primary">
                  <p className="text-2xl font-bold">A moment to trust</p>
                </div>
                <div className="pl-8 border-l-4 border-primary">
                  <p className="text-2xl font-bold">A moment worth keeping</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-8">
              <div className="bg-secondary p-8">
                <div className="label mb-6">KEY PRINCIPLES</div>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-2">Evidence-Based</h4>
                    <p className="text-sm text-muted-foreground">Guided by research, not trends</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h4 className="mb-2">Pharmaceutical Standards</h4>
                    <p className="text-sm text-muted-foreground">15+ years of industry expertise</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h4 className="mb-2">Formulation Integrity</h4>
                    <p className="text-sm text-muted-foreground">Proper concentrations and synergy</p>
                  </div>
                  <div className="border-t border-border pt-6">
                    <h4 className="mb-2">Long-Term Focus</h4>
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
