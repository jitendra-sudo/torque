"use client";

import { Star, ShieldCheck, Zap, Award } from "lucide-react";

export default function SimilarTyres() {
  const similarItems = [
    {
      id: 1,
      brand: "Pirelli",
      name: "Diablo Rosso IV - Ultimate Street Grip",
      price: 21000,
      mrp: 24500,
      rating: 4.9,
      reviews: 420,
      badge: "Best Seller",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 2,
      brand: "Metzeler",
      name: "Sportec M9 RR - All Weather Performance",
      price: 19500,
      mrp: 23000,
      rating: 4.7,
      reviews: 215,
      badge: "Premium",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=300&auto=format&fit=crop"
    },
 
    {
      id: 4,
      brand: "Dunlop",
      name: "Sportmax Q4 Track/Street Tyre",
      price: 16500,
      mrp: 19000,
      rating: 4.6,
      reviews: 142,
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 5,
      brand: "Michelin",
      name: "Road 6 GT Touring Performance",
      price: 19800,
      mrp: 23500,
      rating: 4.9,
      reviews: 512,
      badge: "High Mileage",
      image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=300&auto=format&fit=crop"
    },
   
    {
      id: 7,
      brand: "Bridgestone",
      name: "Battlax T32 Sport Touring",
      price: 17200,
      mrp: 20500,
      rating: 4.7,
      reviews: 194,
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=300&auto=format&fit=crop"
    },
    {
      id: 8,
      brand: "Metzeler",
      name: "Roadtec 01 SE - Extreme Wet Grip",
      price: 18900,
      mrp: 22500,
      rating: 4.8,
      reviews: 327,
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=300&auto=format&fit=crop"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-t border-zinc-200 mt-4 bg-zinc-50/50">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-serif text-3xl font-bold text-zinc-900 tracking-tight">Compare Premium Alternatives</h2>
          <p className="text-zinc-500 mt-1 font-medium text-sm">Customers who viewed Michelin Power 6 also considered these</p>
        </div>
      </div>

      {/* 8 Items Horizontal Scroll Strip */}
      <div className="flex gap-4 overflow-x-auto snap-x scrollbar-hide ">
        {similarItems.map((item) => (
          <div key={item.id} className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] snap-start shrink-0 group cursor-pointer bg-white rounded-2xl border border-zinc-200 hover:border-amber-500 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col">

            {/* Image Container */}
            <div className="relative h-48 w-full bg-zinc-50 flex items-center justify-center overflow-hidden">
              {item.badge && (
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-zinc-900 text-white text-[10px] font-bold tracking-widest uppercase rounded">
                  {item.badge}
                </div>
              )}

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition duration-500 ease-out group-hover:scale-110"
              />
            </div>

            {/* Details Container */}
            <div className="p-3 flex flex-col flex-1">
              <span className="text-amber-600 text-[10px] font-bold tracking-widest uppercase mb-1">{item.brand}</span>
              <h3 className="font-bold text-zinc-900 text-[15px] leading-snug group-hover:text-amber-600 transition-colors line-clamp-1">
                {item.name}
              </h3>

              <div className="flex items-center gap-1.5 my-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill={s <= Math.floor(item.rating) ? "currentColor" : "none"} className={s > item.rating ? "text-zinc-200" : ""} />
                  ))}
                </div>
                <span className="text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">({item.reviews})</span>
              </div>

              {/* Spacer to push price to bottom */}
              <div className="mt-auto  border-t border-zinc-100 flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <span className="font-bold text-lg text-zinc-900">₹{item.price.toLocaleString()}</span>
                  <span className="text-xs font-medium text-zinc-400 line-through ml-2">₹{item.mrp.toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Trust guarantees bar below alternatives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 pb-4 pt-6 border-t border-zinc-200">
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div className="p-3 bg-amber-50 rounded-full text-amber-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Genuine Assurance</h4>
            <p className="text-xs text-zinc-500 font-medium">100% Original Equipment</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div className="p-3 bg-amber-50 rounded-full text-amber-600">
            <Zap size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Lightning Delivery</h4>
            <p className="text-xs text-zinc-500 font-medium">Same day dispatch pan-India</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-zinc-100 shadow-sm">
          <div className="p-3 bg-amber-50 rounded-full text-amber-600">
            <Award size={24} />
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-sm">Expert Fitment</h4>
            <p className="text-xs text-zinc-500 font-medium">Certified partner network</p>
          </div>
        </div>
      </div>
    </div>
  );
}
