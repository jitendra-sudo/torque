"use client";

import {
  Zap,
  ArrowRight,
  MessageCircle,
  Shield,
  Truck,
  Award,
  ChevronDown,
} from "lucide-react";

const WHATSAPP_NUM = "919999999999";

const BRANDS = ["Michelin", "Pirelli", "Metzeler", "Bridgestone", "Dunlop", "MRF", "Maxxis", "CEAT"];

export default function HeroSection({ onCallbackOpen }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-8">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] opacity-20 rounded-full"
          style={{ background: "radial-gradient(ellipse, #f59e0b, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[400px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(ellipse, #3b82f6, transparent 70%)", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] opacity-10 rounded-full"
          style={{ background: "radial-gradient(ellipse, #8b5cf6, transparent 70%)", filter: "blur(80px)" }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-fade-in-up"
          style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.3)", color: "#f59e0b" }}>
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          🏍️ India's #1 Superbike Tyre Specialist
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", fontFamily: "Rajdhani, sans-serif", letterSpacing: "-0.02em" }}
        >
          <span className="text-white">RIDE FASTER.</span><br />
          <span className="gradient-text-amber">GRIP HARDER.</span>
        </h1>

        <p
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-8 animate-fade-in-up font-medium"
          style={{ animationDelay: "0.2s" }}
        >
          Premium superbike tyres from Michelin, Pirelli, Metzeler & more.
          Expert advice ∙ Genuine stock ∙ Same-day dispatch.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#tyres"
            className="btn-primary flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-black"
          >
            <Zap size={18} />
            Explore All Tyres
            <ArrowRight size={16} />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=Hi! I need help choosing a tyre for my superbike.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold"
          >
            <MessageCircle size={18} />
            WhatsApp an Expert
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: Shield, text: "100% Genuine Tyres" },
            { icon: Truck, text: "Same-Day Dispatch" },
            { icon: Award, text: "Warranty on Every Tyre" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-300"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <item.icon size={15} className="text-amber-400" />
              {item.text}
            </div>
          ))}
        </div>

        {/* Brand logos row */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <p className="text-xs text-gray-600 uppercase tracking-widest font-bold mb-4">Authorised Brands</p>
          <div className="flex flex-wrap justify-center gap-3">
            {BRANDS.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 rounded-xl text-sm font-bold text-gray-400 border border-white/8 hover:border-amber-400/30 hover:text-amber-400 transition-all cursor-default"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce-soft">
          <a href="#tyres" className="flex flex-col items-center gap-1 text-gray-600 hover:text-amber-400 transition-colors">
            <span className="text-xs uppercase tracking-widest">Explore</span>
            <ChevronDown size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
