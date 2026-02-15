/* Clinical Modernism Design: Minimal footer with systematic layout */

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <div className="text-2xl font-bold tracking-tight">M2K COSME</div>
              <div className="text-sm text-muted-foreground mt-2">
                Where Medical Science Meets K-Beauty Innovation
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              M2K Cosme curates breakthrough ingredients and technologies guided by evidence, integrity, and formulation expertise — not just trends or marketing claims.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="label mb-4">QUICK LINKS</div>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/ingredients" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label mb-4">CONTACT</div>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>For inquiries and partnerships</p>
              <p className="font-medium text-foreground">info@m2kcosme.com</p>
            </div>
          </div>
        </div>

        <div className="clinical-divider my-12"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 M2K Cosme. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Informed curation driven by evidence, structure, and performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
