"use client";

import { useState } from "react";
import { Star, Check, Shield, Truck, Share2, MessageCircle, AlertCircle, Maximize, Settings, FileText, ArrowRight, CheckCircle } from "lucide-react";

export default function ProductDetail() {
  const images = [
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1000&auto=format&fit=crop",
  ];

  const [activeImage, setActiveImage] = useState(0);

  const product = {
    brand: "Michelin",
    sku: "SKU-MIC-PWR6-190",
    name: "Michelin Power 6 Superbike Tyre",
    size: "190/55 ZR17 75W Rear",
    rating: 4.8,
    reviews: 342,
    price: 18500,
    mrp: 22000,
    discount: 16,
    stock: 4,
    features: [
      "2CT+ Dual Compound Technology for unmatched grip",
      "Optimised void ratio for superior wet weather performance",
      "Suitable for road and occasional track day use",
      "W-speed rated (up to 270 km/h)"
    ],
    technicalSpecs: {
      "Tyre Size": "190/55 ZR17",
      "Section Width": "190 mm",
      "Aspect Ratio": "55%",
      "Rim Diameter": "17 Inches",
      "Load Index": "75 (387 kg / 853 lbs max capacity)",
      "Speed Rating": "W (Up to 270 km/h)",
      "Material compound": "Silica-reinforced 2CT+ (Dual Compound)",
      "Construction Type": "Radial (R)",
      "Tubeless / Tube-Type": "TL (Tubeless)",
      "Position": "Rear",
      "Weight": "6.8 kg",
      "Warranty": "5 Years Manufacturer Warranty",
      "Origin": "Imported (Spain / France)"
    },
    longDescription: "The Michelin Power 6 is precision-engineered for maximum grip and handling on both street and track. Built with the latest MotoGP derived dual-compound technology (2CT+), it offers superior cornering stability during deep lean angles and longer tread life in the center profile for high-performance superbikes. The advanced silica material composition guarantees exceptional performance in both dry and wet conditions, ensuring maximum rider safety without compromising on agility.",
    fits: "Ducati Panigale V4/V2, BMW S1000RR, Yamaha R1, Kawasaki ZX-10R/ZX-14R, Suzuki Hayabusa."
  };

  const savedAmount = product.mrp - product.price;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1">

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        <div className="lg:col-span-6 flex flex-col gap-4">

          <div className="relative w-full   rounded-xl overflow-hidden flex items-center justify-center  group ">
            <img
              src={images[activeImage]}
              alt={product.name}
              className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Elegant Floating Actions */}
            <div className="absolute top-6 right-6 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="p-3 bg-white rounded-full text-zinc-600 hover:text-zinc-900 shadow-lg border border-zinc-100 hover:scale-105 transition-all">
                <Share2 size={20} strokeWidth={1.5} />
              </button>
              <button className="p-3 bg-white rounded-full text-zinc-600 hover:text-zinc-900 shadow-lg border border-zinc-100 hover:scale-105 transition-all">
                <Maximize size={20} strokeWidth={1.5} />
              </button>
            </div>
            {/* Enterprise SKU Badge */}
            <div className="absolute bottom-6 left-6 px-3 py-1.5 bg-white/80 backdrop-blur-md rounded-lg border border-zinc-200 text-[10px] font-bold text-zinc-500 tracking-widest uppercase">
              {product.sku}
            </div>
          </div>

          {/* Minimalist Thumbnails */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide py-1 px-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onMouseEnter={() => setActiveImage(idx)}
                onClick={() => setActiveImage(idx)}
                className={`flex-shrink-0 w-24 h-20 bg-zinc-50 rounded-lg transition-all duration-300 overflow-hidden ${idx === activeImage
                  ? 'ring-2 ring-zinc-900 shadow-md ring-offset-2'
                  : 'ring-1 ring-zinc-200 hover:ring-zinc-400 opacity-60 hover:opacity-100'
                  }`}
              >
                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover mix-blend-multiply" />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col">

          <div className="flex items-center gap-3 mb-2">
            <span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold tracking-widest uppercase rounded">
              Premium Series
            </span>
            <span className="font-semibold text-zinc-500 text-xs uppercase tracking-widest hover:text-zinc-800 transition-colors cursor-pointer">
              {product.brand}
            </span>
          </div>

          {/* Title Segment */}
          <h1 className="font-serif text-2xl md:text-3xl font-bold text-zinc-900 leading-[1.1] tracking-tight mb-2">
            {product.name}
          </h1>

          <div className="flex items-center gap-4  pb-2  border-zinc-100">
            <span className="inline-flex items-center justify-center px-3 py-1 bg-zinc-100 text-zinc-800 rounded-lg text-sm font-semibold tracking-wide">
              {product.size}
            </span>
            <div className="flex items-center gap-1.5 border-l border-zinc-200 pl-4">
              <Star size={16} className="fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-zinc-900">{product.rating}</span>
              <span className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors cursor-pointer underline-offset-4 hover:underline">
                ({product.reviews} Reviews)
              </span>
            </div>
          </div>

          <div className="p-3 bg-zinc-50 border border-zinc-200 rounded-2xl mb-2">
            <div className="flex flex-col mb-2">
              <span className="text-xs font-semibold text-zinc-500 mb-1 tracking-wide">Secure Checkout Price</span>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-zinc-900 tracking-tight">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded-md">
                  Save {product.discount}%
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-zinc-500 font-medium">M.R.P:</span>
                <span className="text-sm text-zinc-400 line-through font-medium">₹{product.mrp.toLocaleString()}</span>
                <span className="text-xs text-zinc-500 ml-1">(Inclusive of all taxes)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 bg-red-50 border border-red-100 rounded-xl">
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600"></span>
              </div>
              <span className="text-sm font-semibold text-red-700">
                High demand: Only {product.stock} units left in stock.
              </span>
            </div>
          </div>

          <div className="mb-2">
            <h3 className="font-bold text-zinc-900 mb-2 text-sm tracking-widest uppercase">Performance Highlights</h3>
            <ul className="space-y-2">
              {product.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 p-0.5 bg-green-100 rounded-full">
                    <Check size={12} className="text-green-600" strokeWidth={3} />
                  </div>
                  <span className="text-zinc-700 text-xs font-medium leading-relaxed">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Area */}
          <div className="flex gap-2">
            <button className="group relative flex items-center justify-center gap-2 w-full py-4  text-sm font-bold text-white bg-zinc-900 rounded-xl hover:bg-zinc-800 active:scale-[0.98] transition-all shadow-md overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Add to Cart <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            <a
              href={`https://wa.me/919999999999?text=I'm interested in ${product.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full  text-sm font-bold text-white bg-[#25D366] rounded-xl hover:bg-[#1DA851] active:scale-[0.98] transition-all shadow-md"
            >
              <MessageCircle size={20} />
              Fast Checkout via WhatsApp
            </a>
          </div>

          {/* Trust Signals */}
          {/* <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-zinc-100">
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-2.5 bg-zinc-50 rounded-full text-zinc-600 border border-zinc-100">
                <Shield size={20} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-zinc-600">Enterprise<br />Protection</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-2.5 bg-zinc-50 rounded-full text-zinc-600 border border-zinc-100">
                <Truck size={20} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-zinc-600">Express<br />Dispatch</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2">
              <div className="p-2.5 bg-zinc-50 rounded-full text-zinc-600 border border-zinc-100">
                <CheckCircle size={20} strokeWidth={1.5} />
              </div>
              <span className="text-xs font-semibold text-zinc-600">Verified<br />Authentic</span>
            </div>
          </div> */}

        </div>
      </div>

      <div className=" my-4 py-4">
        <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-4 pb-4 flex items-center gap-4 border-b border-gray-300">
          <FileText className="text-zinc-400" size={32} strokeWidth={1.5} />
          Technical Specifications
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

          {/* Left: General Description */}
          <div>
            <div className="prose prose-zinc prose-p:leading-relaxed max-w-none">
              <h3 className="text-xl font-bold text-zinc-900 mb-2 flex items-center gap-2">
                <AlertCircle size={20} className="text-amber-500" />
                Engineering & Design
              </h3>
              <p className="text-zinc-600 text-base">
                {product.longDescription}
              </p>
            </div>

            <h3 className="text-xl font-bold text-zinc-900 mt-5 py-2 flex items-center gap-2">
              <Settings size={20} className="text-blue-500" />
              Verified Fitment
            </h3>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3 mb-2">
              <p className="text-sm font-medium text-zinc-600 leading-relaxed">
                <span className="text-zinc-900 font-bold block mb-2 text-base">Tested successfully on the following chassis:</span>
                {product.fits}
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3 mb-2">
              <p className="text-sm font-medium text-zinc-600 leading-relaxed">
                <span className="text-zinc-900 font-bold block mb-2 text-base">Tested successfully on the following chassis:</span>
                {product.fits}
              </p>
            </div>
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-3 mb-2">
              <p className="text-sm font-medium text-zinc-600 leading-relaxed">
                <span className="text-zinc-900 font-bold block mb-2 text-base">Tested successfully on the following chassis:</span>
                {product.fits}
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left align-middle">
                <tbody>
                  {Object.entries(product.technicalSpecs).map(([key, value], index) => (
                    <tr key={key} className={`group hover:bg-zinc-50 transition-colors ${index !== 0 ? 'border-t border-zinc-100' : ''}`}>
                      <th scope="row" className="px-6 py-4 font-semibold text-zinc-900 w-2/5 bg-zinc-50/50 group-hover:bg-zinc-100/50 transition-colors">
                        {key}
                      </th>
                      <td className="px-6 py-4 text-zinc-600 font-medium">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
