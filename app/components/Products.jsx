"use client";

import { useState } from "react";
import {
  Star,
  ShoppingCart,
  Zap,
  Shield,
  Clock,
  Check,
  MessageCircle,
  Phone,
  Filter,
  ChevronRight,
  Flame,
  AlertTriangle,
  Tag,
  Gauge,
  Layers,
  Wind,
  Droplets,
  Award,
  TrendingUp,
} from "lucide-react";

const WHATSAPP_NUM = "919999999999";

// ─── Tyre Data ───────────────────────────────────────────────────────────────
const TYRES = [
  {
    id: 1,
    brand: "Michelin",
    name: "Power 6",
    subtitle: "Track-Bred Street Dominance",
    size: "120/70 ZR17 + 190/55 ZR17",
    type: "Sport",
    bike: "CBR 1000RR / R1 / S1000RR / Ninja ZX-10R",
    price: 18500,
    mrp: 22000,
    discount: 16,
    rating: 4.9,
    reviews: 312,
    stock: 4,
    maxStock: 20,
    badge: "BESTSELLER",
    badgeColor: "#f59e0b",
    featured: true,
    specs: {
      compound: "Dual-Compound ROAD2",
      grip: "Wet + Dry Optimised",
      profile: "Track-Ready Carcass",
      mileage: "Up to 9,000 km",
      weight: "9.2 kg (front) + 11.8 kg (rear)",
      loadIndex: "58W (front) / 73W (rear)",
      temp: "-5°C to 70°C operating range",
    },
    features: [
      "MotoGP-derived Silica compound",
      "Self-cleaning rain grooves",
      "3D sipes for wet grip",
      "Zero-degree belt for stability at 300 km/h",
    ],
    color: "#f59e0b",
    image: "🏍️",
    popular: true,
  },
  {
    id: 2,
    brand: "Pirelli",
    name: "Diablo Rosso IV",
    subtitle: "Italian Precision, Maximum Traction",
    size: "120/70 ZR17 + 200/55 ZR17",
    type: "Sport",
    bike: "Panigale V4 / MT-09 / Hayabusa / ZX-10R",
    price: 21000,
    mrp: 25500,
    discount: 18,
    rating: 4.8,
    reviews: 247,
    stock: 7,
    maxStock: 20,
    badge: "PREMIUM",
    badgeColor: "#8b5cf6",
    featured: true,
    specs: {
      compound: "Tri-compound technology",
      grip: "High-performance wet & dry",
      profile: "Ultra-sport carcass",
      mileage: "Up to 8,500 km",
      weight: "9.8 kg (front) + 12.5 kg (rear)",
      loadIndex: "58W (front) / 78W (rear)",
      temp: "-10°C to 80°C operating range",
    },
    features: [
      "Polymers from WorldSBK racing",
      "150° lean angle capability",
      "Enhanced braking compound in center",
      "Aramid belt construction",
    ],
    color: "#8b5cf6",
    image: "🔥",
    popular: true,
  },
  {
    id: 3,
    brand: "Metzeler",
    name: "Sportec M9 RR",
    subtitle: "Race Homologated for the Street",
    size: "120/70 ZR17 + 190/55 ZR17",
    type: "Track/Street",
    bike: "Ducati / BMW S1000RR / Aprilia RS-GP",
    price: 19800,
    mrp: 24000,
    discount: 18,
    rating: 4.7,
    reviews: 189,
    stock: 3,
    maxStock: 20,
    badge: "TRACK SPEC",
    badgeColor: "#ef4444",
    featured: false,
    specs: {
      compound: "Race-compound with Carbon Black",
      grip: "Extreme dry, rain-adaptive grooves",
      profile: "60° lean angle tread",
      mileage: "Up to 7,000 km",
      weight: "9.5 kg (front) + 12.1 kg (rear)",
      loadIndex: "58W (front) / 73W (rear)",
      temp: "0°C to 85°C operating range",
    },
    features: [
      "CE+ track homologation",
      "Silica polymer for cold grip",
      "0° steel belt for high-speed stability",
      "Race-derived centre compound",
    ],
    color: "#ef4444",
    image: "⚡",
    popular: false,
  },
  {
    id: 4,
    brand: "Bridgestone",
    name: "Battlax S22",
    subtitle: "Born at Motegi, Bred for the Street",
    size: "120/70 ZR17 + 180/55 ZR17",
    type: "Sport",
    bike: "Ninja H2 / GSX-R1000 / ZH2 / CBR 1000",
    price: 16500,
    mrp: 20000,
    discount: 18,
    rating: 4.8,
    reviews: 203,
    stock: 11,
    maxStock: 20,
    badge: "GREAT VALUE",
    badgeColor: "#10b981",
    featured: false,
    specs: {
      compound: "HTSPC High Tensile Super Polymer",
      grip: "All-weather high performance",
      profile: "Hybrid carcass technology",
      mileage: "Up to 10,000 km",
      weight: "8.9 kg (front) + 11.2 kg (rear)",
      loadIndex: "58W (front) / 72W (rear)",
      temp: "-5°C to 65°C operating range",
    },
    features: [
      "MotoGP-derived HTSPC compound",
      "Bead-to-bead silica tread",
      "Improved wet braking performance",
      "Enhanced uniformity for smooth ride",
    ],
    color: "#10b981",
    image: "🏆",
    popular: true,
  },
  {
    id: 5,
    brand: "Dunlop",
    name: "SportSmart TT",
    subtitle: "Isle of Man TT-Proven Performance",
    size: "120/70 ZR17 + 190/55 ZR17",
    type: "Touring/Sport",
    bike: "ZX-14R / Versys 1000 / VFR 1200 / FJR",
    price: 15800,
    mrp: 19000,
    discount: 17,
    rating: 4.6,
    reviews: 156,
    stock: 14,
    maxStock: 20,
    badge: "TT PROVEN",
    badgeColor: "#3b82f6",
    featured: false,
    specs: {
      compound: "NT (New Technology) Silica compound",
      grip: "Balanced sport-touring grip",
      profile: "Jointless belt technology",
      mileage: "Up to 12,000 km",
      weight: "9.1 kg (front) + 11.5 kg (rear)",
      loadIndex: "58W (front) / 73W (rear)",
      temp: "-10°C to 60°C operating range",
    },
    features: [
      "TT Zero race heritage",
      "Long-mileage NT compound",
      "Jointless belt for smooth ride",
      "Wide temperature operating window",
    ],
    color: "#3b82f6",
    image: "🌊",
    popular: false,
  },
  {
    id: 6,
    brand: "MRF",
    name: "Revz-FS",
    subtitle: "India's Racing Champion — Made for Indian Roads",
    size: "110/70 R17 + 150/60 R17",
    type: "Indian Roads",
    bike: "KTM Duke 390 / RC 390 / Dominar 400",
    price: 9800,
    mrp: 12000,
    discount: 18,
    rating: 4.5,
    reviews: 401,
    stock: 18,
    maxStock: 20,
    badge: "INDIA #1",
    badgeColor: "#10b981",
    featured: false,
    specs: {
      compound: "MRF Indian Road Compound",
      grip: "Optimised for Indian surfaces",
      profile: "Sport profile for corners",
      mileage: "Up to 15,000 km",
      weight: "6.5 kg (front) + 7.8 kg (rear)",
      loadIndex: "54S (front) / 66S (rear)",
      temp: "-5°C to 75°C operating range",
    },
    features: [
      "National Racing Championship-proven",
      "Heat-resistant Indian compound",
      "Pothole-shock-absorbing carcass",
      "Best value for Indian conditions",
    ],
    color: "#10b981",
    image: "🇮🇳",
    popular: true,
  },
];

const TYPES = ["All", "Sport", "Track/Street", "Touring/Sport", "Indian Roads"];
const BRANDS = ["All", "Michelin", "Pirelli", "Metzeler", "Bridgestone", "Dunlop", "MRF"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((s) => (
          <Star
            key={s}
            size={13}
            fill={s <= Math.floor(rating) ? "#f59e0b" : "none"}
            className={s <= Math.floor(rating) ? "text-amber-400" : "text-gray-600"}
          />
        ))}
      </div>
      <span className="text-xs text-amber-400 font-bold">{rating}</span>
      <span className="text-xs text-gray-500">({count})</span>
    </div>
  );
}

function StockBar({ stock, maxStock }) {
  const pct = Math.round((stock / maxStock) * 100);
  const isLow = stock <= 5;
  const isVeryLow = stock <= 3;

  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className={`text-xs font-semibold ${isVeryLow ? "text-red-400" : isLow ? "text-amber-400" : "text-gray-400"}`}>
          {isVeryLow ? "⚠️ Only " : isLow ? "🔥 Almost sold out — " : "✓ In Stock — "}
          <span className="font-black">{stock}</span> left
        </span>
        <span className="text-xs text-gray-500">{maxStock} total</span>
      </div>
      <div className="stock-bar">
        <div
          className="stock-fill"
          style={{ width: `${pct}%`, background: isVeryLow ? "linear-gradient(90deg,#ef4444,#f97316)" : isLow ? "linear-gradient(90deg,#f59e0b,#ef4444)" : "linear-gradient(90deg,#10b981,#3b82f6)" }}
        />
      </div>
    </div>
  );
}

function FeatureTag({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-1.5 text-xs text-gray-300 bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/8">
      <Icon size={12} className="text-amber-400 flex-shrink-0" />
      <span>{text}</span>
    </div>
  );
}

function TyreCard({ tyre, onWhatsApp, onCallback }) {
  const [tab, setTab] = useState("overview");
  const savings = tyre.mrp - tyre.price;
  const waMsg = `Hi! I'm interested in the ${tyre.brand} ${tyre.name} (${tyre.size}). Is it available? Please share details.`;

  return (
    <div
      className={`rounded-2xl border card-hover relative overflow-hidden flex flex-col ${
        tyre.featured
          ? "border-amber-400/30 shadow-[0_0_40px_rgba(245,158,11,0.08)]"
          : "border-white/8"
      }`}
      style={{ background: "linear-gradient(145deg, #111827, #0d1117)" }}
    >
      {/* Featured glow */}
      {tyre.featured && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(245,158,11,0.06), transparent 60%)",
          }}
        />
      )}

      {/* Top Badge + Brand */}
      <div className="flex items-start justify-between p-5 pb-3">
        <div>
          <span
            className="text-xs font-black uppercase tracking-widest px-2.5 py-1 rounded-lg"
            style={{ background: `${tyre.badgeColor}22`, color: tyre.badgeColor, border: `1px solid ${tyre.badgeColor}33` }}
          >
            {tyre.badge}
          </span>
          <p className="text-xs text-gray-500 mt-2 font-medium uppercase tracking-wider">{tyre.brand}</p>
        </div>
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: `${tyre.color}15`, border: `1px solid ${tyre.color}25` }}
        >
          {tyre.image}
        </div>
      </div>

      {/* Name & subtitle */}
      <div className="px-5 pb-3">
        <h3 className="text-xl font-black text-white tracking-tight">{tyre.name}</h3>
        <p className="text-xs text-gray-400 mt-0.5">{tyre.subtitle}</p>
        <p className="text-xs mt-2 font-medium" style={{ color: tyre.color }}>
          📏 {tyre.size}
        </p>
        <p className="text-xs text-gray-500 mt-0.5">🏍️ Fits: {tyre.bike}</p>
      </div>

      <div className="divider-glow mx-5" />

      {/* Price block */}
      <div className="px-5 py-3">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-black text-white">
            ₹{tyre.price.toLocaleString()}
          </span>
          <div className="pb-0.5">
            <span className="text-sm text-gray-500 line-through">₹{tyre.mrp.toLocaleString()}</span>
            <span
              className="ml-2 text-xs font-bold px-2 py-0.5 rounded"
              style={{ background: "#ef444418", color: "#ef4444" }}
            >
              -{tyre.discount}%
            </span>
          </div>
        </div>
        <p className="text-xs text-green-400 font-semibold mt-0.5">
          🎉 You save ₹{savings.toLocaleString()} on this purchase
        </p>
        <p className="text-xs text-gray-500 mt-1">Includes GST · Free fitting (select cities)</p>
      </div>

      {/* Ratings */}
      <div className="px-5 pb-3">
        <StarRating rating={tyre.rating} count={tyre.reviews} />
      </div>

      {/* Tab switcher */}
      <div className="px-5 pb-2 flex gap-2">
        {["overview", "specs", "fits"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg capitalize transition-all ${
              tab === t
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-200"
            }`}
            style={tab === t ? { background: tyre.color } : { background: "rgba(255,255,255,0.05)" }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="px-5 pb-3 min-h-[120px] text-xs">
        {tab === "overview" && (
          <div className="space-y-1.5">
            {tyre.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-gray-300">
                <Check size={13} className="text-green-400 mt-0.5 flex-shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        )}
        {tab === "specs" && (
          <div className="space-y-1.5">
            {Object.entries(tyre.specs).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <span className="text-gray-500 capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-gray-200 font-medium text-right">{v}</span>
              </div>
            ))}
          </div>
        )}
        {tab === "fits" && (
          <div className="space-y-2">
            <p className="text-gray-400">Compatible Bikes:</p>
            {tyre.bike.split(" / ").map((b, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: tyre.color }} />
                <span className="text-gray-200">{b}</span>
              </div>
            ))}
            <p className="text-amber-400 mt-2">📞 Not sure if this fits your bike? Ask us!</p>
          </div>
        )}
      </div>

      {/* Feature tags */}
      <div className="px-5 pb-3 flex flex-wrap gap-2">
        <FeatureTag icon={Shield} text="Genuine OEM" />
        <FeatureTag icon={Zap} text="Same-Day Dispatch" />
        <FeatureTag icon={Award} text="Warranty" />
      </div>

      {/* Stock bar */}
      <div className="px-5 pb-4">
        <StockBar stock={tyre.stock} maxStock={tyre.maxStock} />
      </div>

      {/* CTA Buttons */}
      <div className="px-5 pb-5 mt-auto space-y-2.5">
        <a
          href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm"
        >
          <MessageCircle size={17} />
          Order on WhatsApp
        </a>
        <button
          onClick={onCallback}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold border transition-all hover:bg-white/5"
          style={{ borderColor: "rgba(245,158,11,0.3)", color: "#f59e0b" }}
        >
          <Phone size={15} />
          Request Free Callback
        </button>
      </div>
    </div>
  );
}

// ─── Featured Hero Card ───────────────────────────────────────────────────────
function HeroTyreCard({ tyre, onCallback }) {
  const waMsg = `Hi! I'm interested in the ${tyre.brand} ${tyre.name}. Please send me more details and availability.`;

  return (
    <div
      className="relative rounded-3xl overflow-hidden mb-10 border border-amber-400/20"
      style={{
        background: "linear-gradient(135deg, #0d1117, #111827, #1a1a2e)",
        boxShadow: "0 0 80px rgba(245,158,11,0.12)",
      }}
    >
      {/* Background glow orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)", transform: "translate(30%, -30%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)", transform: "translate(-30%, 30%)" }} />

      <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
        {/* Left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold mb-4"
            style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", color: "#f59e0b" }}>
            <Flame size={13} />
            🏆 Editor's Choice — #1 Bestseller April 2025
          </div>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-widest mb-1">{tyre.brand}</p>
          <h2 className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
            {tyre.name}
          </h2>
          <p className="text-xl font-medium mb-4" style={{ color: tyre.color }}>{tyre.subtitle}</p>
          <p className="text-gray-400 text-sm mb-1">📏 Size: <span className="text-white font-medium">{tyre.size}</span></p>
          <p className="text-gray-400 text-sm mb-1">🏍️ Fits: <span className="text-white font-medium">{tyre.bike}</span></p>
          <p className="text-gray-400 text-sm mb-6">📦 Type: <span className="font-medium" style={{ color: tyre.color }}>{tyre.type}</span></p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-2 mb-6">
            {tyre.features.map((f, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" />
                {f}
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="flex items-end gap-4 mb-6">
            <div>
              <p className="text-4xl font-black text-white">₹{tyre.price.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-gray-500 line-through text-sm">₹{tyre.mrp.toLocaleString()}</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded" style={{ background: "#ef444418", color: "#ef4444" }}>
                  SAVE {tyre.discount}%
                </span>
              </div>
            </div>
            <div className="pb-2 text-xs text-gray-500">GST Included<br />Free Fitting*</div>
          </div>

          {/* Stock warning */}
          {tyre.stock <= 5 && (
            <div className="flex items-center gap-2 mb-4 text-sm">
              <AlertTriangle size={15} className="text-red-400" />
              <span className="text-red-400 font-bold">⚠️ Last {tyre.stock} sets! People are actively viewing this product.</span>
            </div>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(waMsg)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-black text-base"
            >
              <MessageCircle size={20} />
              Buy Now on WhatsApp
            </a>
            <button
              onClick={onCallback}
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-sm border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(245,158,11,0.4)", color: "#f59e0b" }}
            >
              <Phone size={16} />
              Get Expert Advice
            </button>
          </div>
        </div>

        {/* Right — Specs Grid */}
        <div className="space-y-4">
          <div className="glass rounded-2xl p-6 border border-white/8">
            <h4 className="text-sm font-bold text-amber-400 mb-4 flex items-center gap-2">
              <Gauge size={16} />
              Technical Specifications
            </h4>
            <div className="space-y-3">
              {Object.entries(tyre.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500 capitalize font-medium">{k.replace(/([A-Z])/g, ' $1')}</span>
                  <span className="text-gray-100 font-semibold text-right">{v}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Wind, label: "Top Speed", val: "300+ km/h" },
              { icon: Droplets, label: "Wet Safety", val: "Grade A+" },
              { icon: TrendingUp, label: "Lean Angle", val: "58°+" },
            ].map((s, i) => (
              <div key={i} className="glass rounded-xl p-3 border border-white/8 text-center">
                <s.icon size={20} className="mx-auto mb-1 text-amber-400" />
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="text-sm font-bold text-white mt-0.5">{s.val}</p>
              </div>
            ))}
          </div>
          <StockBar stock={tyre.stock} maxStock={tyre.maxStock} />
          <StarRating rating={tyre.rating} count={tyre.reviews} />
        </div>
      </div>
    </div>
  );
}

// ─── Similar Tyres Strip ──────────────────────────────────────────────────────
function SimilarTyres({ currentId, onCallback }) {
  const similar = TYRES.filter((t) => t.id !== currentId).slice(0, 4);

  return (
    <section className="mt-16" id="similar">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 rounded bg-amber-400" />
        <h2 className="text-2xl font-black">You May Also Like</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {similar.map((t) => {
          const waMsg = `Hi! I'm interested in the ${t.brand} ${t.name}. Please share details.`;
          return (
            <div
              key={t.id}
              className="glass rounded-2xl p-5 border border-white/8 card-hover flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider" style={{ color: t.color }}>{t.brand}</span>
                  <h4 className="text-base font-black text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{t.size}</p>
                </div>
                <div className="text-3xl">{t.image}</div>
              </div>
              <div>
                <p className="text-xl font-black text-white">₹{t.price.toLocaleString()}</p>
                <p className="text-xs text-gray-500 line-through">₹{t.mrp.toLocaleString()}</p>
              </div>
              <StockBar stock={t.stock} maxStock={t.maxStock} />
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold"
              >
                <MessageCircle size={15} />
                Buy Now
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ─── Main Products Section ────────────────────────────────────────────────────
export default function Products({ onCallback }) {
  const [activeType, setActiveType] = useState("All");
  const [activeBrand, setActiveBrand] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [heroTyre] = useState(TYRES[0]);

  const filtered = TYRES.filter((t) => {
    const typeMatch = activeType === "All" || t.type === activeType;
    const brandMatch = activeBrand === "All" || t.brand === activeBrand;
    return typeMatch && brandMatch;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return b.popular - a.popular;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Featured Tyre */}
      <HeroTyreCard tyre={heroTyre} onCallback={onCallback} />

      {/* Section header */}
      <div id="tyres" className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight">All Superbike Tyres</h2>
          <p className="text-gray-400 text-sm mt-1">{filtered.length} products • Fast delivery across India</p>
        </div>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="input-dark rounded-xl px-4 py-2.5 text-sm font-medium cursor-pointer"
        >
          <option value="popular">Sort: Popular First</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 mb-8">
        {/* Type filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={14} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Type:</span>
          {TYPES.map((t) => (
            <button
              key={t}
              onClick={() => setActiveType(t)}
              className="px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all border"
              style={
                activeType === t
                  ? { background: "#f59e0b", color: "#000", border: "1px solid #f59e0b" }
                  : { background: "transparent", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {t}
            </button>
          ))}
        </div>

        {/* Brand filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <Filter size={14} className="text-gray-500" />
          <span className="text-xs text-gray-500 font-medium">Brand:</span>
          {BRANDS.map((b) => (
            <button
              key={b}
              onClick={() => setActiveBrand(b)}
              className="px-3.5 py-1.5 rounded-xl text-sm font-semibold transition-all border"
              style={
                activeBrand === b
                  ? { background: "#3b82f6", color: "#fff", border: "1px solid #3b82f6" }
                  : { background: "transparent", color: "#9ca3af", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-4xl mb-3">🔍</p>
          <p className="font-medium">No tyres match this filter. Try a different combination.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((tyre) => (
            <TyreCard
              key={tyre.id}
              tyre={tyre}
              onCallback={onCallback}
            />
          ))}
        </div>
      )}

      {/* Similar tyres */}
      <SimilarTyres currentId={99} onCallback={onCallback} />
    </div>
  );
}
