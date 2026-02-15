/* Footer - Allies minimalist style */

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="container py-24">
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">M2K COSME</div>
              <div className="text-muted-foreground">
                Where Medical Science Meets K-Beauty Innovations
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <div className="label mb-6">NAVIGATION</div>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/ingredient/exosome" className="text-muted-foreground hover:text-foreground transition-colors">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="label mb-6">CONTACT</div>
            <div className="space-y-2 text-muted-foreground">
              <p>For inquiries and partnerships</p>
              <p className="font-medium text-foreground">m2kcosme@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            © 2026 M2K Cosme. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
