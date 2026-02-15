/* Allies-inspired Header with dropdown navigation */

import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const ingredientsList = [
  { id: "exosome", name: "Exosome Complex", path: "/ingredient/exosome" },
  { id: "pdrn", name: "PN + PDRN Complex", path: "/ingredient/pdrn" },
  { id: "botanical", name: "More than Cica", path: "/ingredient/botanical" },
  { id: "botox", name: "Topical Botox", path: "/ingredient/botox" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ingredientsDropdownOpen, setIngredientsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/">
            <div className="cursor-pointer flex-shrink-0">
              <img 
                src="https://imgur.com/LkvuJA9.png" 
                alt="M2K Cosme" 
                className="h-16 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            <Link href="/about">
              <a
                className={`text-sm font-medium transition-colors ${
                  location === "/about"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                About us
              </a>
            </Link>

            {/* Ingredients Dropdown */}
            <div className="relative group">
              <button
                className="text-sm font-medium flex items-center gap-2 transition-colors text-white hover:text-primary"
                onMouseEnter={() => setIngredientsDropdownOpen(true)}
                onMouseLeave={() => setIngredientsDropdownOpen(false)}
              >
                Ingredients
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {ingredientsDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-0 bg-white border border-border shadow-lg min-w-max"
                  onMouseEnter={() => setIngredientsDropdownOpen(true)}
                  onMouseLeave={() => setIngredientsDropdownOpen(false)}
                >
                  {ingredientsList.map((ingredient) => (
                    <Link key={ingredient.id} href={ingredient.path}>
                      <a className="block px-6 py-4 text-sm font-medium text-foreground hover:bg-secondary transition-colors border-b border-border last:border-b-0">
                        {ingredient.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/cosmetics">
              <a
                className={`text-sm font-medium transition-colors ${
                  location === "/cosmetics"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                Cosmetics
              </a>
            </Link>

            <Link href="/skinboosters">
              <a
                className={`text-sm font-medium transition-colors ${
                  location === "/skinboosters"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                Skinboosters
              </a>
            </Link>

            <Link href="/fillers">
              <a
                className={`text-sm font-medium transition-colors ${
                  location === "/fillers"
                    ? "text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                Fillers
              </a>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-6 border-t border-border bg-black">
            <div className="flex flex-col gap-6">
              <Link href="/about">
                <a
                  className="text-base font-medium transition-colors text-white hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About us
                </a>
              </Link>

              {/* Mobile Ingredients Dropdown */}
              <div>
                <button
                  className="text-base font-medium flex items-center gap-2 transition-colors w-full text-white"
                  onClick={() => setIngredientsDropdownOpen(!ingredientsDropdownOpen)}
                >
                  Ingredients
                  <ChevronDown className={`w-4 h-4 transition-transform ${ingredientsDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {ingredientsDropdownOpen && (
                  <div className="mt-4 ml-4 space-y-3">
                    {ingredientsList.map((ingredient) => (
                      <Link key={ingredient.id} href={ingredient.path}>
                        <a
                          className="block text-sm font-medium text-muted-foreground hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {ingredient.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/cosmetics">
                <a
                  className="text-base font-medium transition-colors text-white hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cosmetics
                </a>
              </Link>

              <Link href="/skinboosters">
                <a
                  className="text-base font-medium transition-colors text-white hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Skinboosters
                </a>
              </Link>

              <Link href="/fillers">
                <a
                  className="text-base font-medium transition-colors text-white hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Fillers
                </a>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
