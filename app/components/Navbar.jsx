"use client";

import { useState, useEffect } from "react";
import { Phone, Search, Menu, X, ShoppingBag } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bg-zinc-900 text-zinc-300 text-xs font-medium py-2 text-center tracking-wide">
        Free Shipping on all orders above ₹5,000 | Limited Stock Available
      </div>

      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-zinc-200" : "bg-white border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <a href="#" className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-zinc-900">
                  TORQUE<span className="text-amber-600">BLOCK</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-zinc-500 -mt-1 font-semibold">
                  Premium Tyres
                </span>
              </a>
            </div>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex space-x-8 items-center">
              {["Shop Tyres", "Brands", "Accessories", "Fitment Center", "Contact"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-semibold text-zinc-600 hover:text-amber-600 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-6">
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <Search size={20} />
              </button>
              <button className="text-zinc-500 hover:text-zinc-900 transition-colors">
                <ShoppingBag size={20} />
              </button>
              <div className="h-6 w-px bg-zinc-200"></div>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-zinc-700 hover:text-green-600 transition-colors group"
              >
                <div className="p-1.5 bg-green-100 rounded-full group-hover:bg-green-200 transition-colors">
                  <Phone size={16} className="text-green-600" />
                </div>
                <span>Call Expert</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden gap-4">
              <button className="text-zinc-500">
                <ShoppingBag size={20} />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-zinc-500 p-1 hover:bg-zinc-100 rounded-md transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[112px] bg-white z-40 p-4 border-t border-zinc-100 md:hidden overflow-y-auto">
          <div className="flex flex-col space-y-4">
            {["Shop Tyres", "Brands", "Accessories", "Fitment Center", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-lg font-semibold text-zinc-900 py-3 border-b border-zinc-100"
              >
                {link}
              </a>
            ))}
            <div className="pt-6">
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 text-base font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 transition shadow-sm"
              >
                <Phone size={20} />
                Call an Expert
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
