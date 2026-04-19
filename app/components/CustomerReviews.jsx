"use client";

import { Star, ThumbsUp, CheckCircle2 } from "lucide-react";

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      author: "Rahul S.",
      date: "October 12, 2025",
      rating: 5,
      title: "Mind-blowing grip on the track and street",
      content: "Fitted these on my S1000RR and the difference is day and night compared to stock. The dual-compound rubber heats up incredibly fast. I pushed them hard on the Kari Motor Speedway last weekend and the confidence they inspire at max lean angle is just phenomenal.",
      verified: true,
      helpful: 42
    },
    {
      id: 2,
      author: "Vikram Chauhan",
      date: "September 28, 2025",
      rating: 5,
      title: "Worth every single rupee",
      content: "Was skeptical about spending ₹18k on a rear tyre, but the Michelin Power 6 justifies the price tag. Cornering stability is solid, and wet grip during unexpected rain on the highway was surprisingly good for a tyre this sporty.",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      author: "Arjun Reddy",
      date: "September 15, 2025",
      rating: 4,
      title: "Great performance, slightly fast wear",
      content: "The handling profile is super sharp. My Z900 practically falls into corners now. Docking one star because the center compound seems to be wearing out a bit faster than the previous Power 5 series, but the edge grip makes up for it.",
      verified: true,
      helpful: 8
    },
    {
      id: 4,
      author: "Karthik N.",
      date: "August 30, 2025",
      rating: 5,
      title: "Perfect match for the Panigale",
      content: "Fantastic delivery exactly as promised. The manufacturing date is recent (just 2 months old). The guys at Torque Block really know how to handle premium rubber. Best cornering tyre I've ever owned.",
      verified: true,
      helpful: 27
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <h2 className="font-serif text-3xl font-bold text-zinc-900 mb-4 pb-4 border-b border-gray-300">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

        <div className="lg:col-span-4 flex flex-col">
          <div className=" bg-zinc-50 border border-gray-100 rounded-xl p-4 shadow-lg">
            <h3 className="text-lg font-bold text-zinc-900 mb-4">Rating Snapshot</h3>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-black text-zinc-900 tracking-tight">4.8</div>
              <div className="flex flex-col">
                <div className="flex text-amber-500 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={20} fill={s <= 4 ? "currentColor" : "none"} className={s === 5 ? "text-amber-500 fill-amber-500/30" : ""} />
                  ))}
                </div>
                <span className="text-sm font-medium text-zinc-500">Based on 342 reviews</span>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="flex flex-col gap-2 mb-8">
              {[
                { stars: 5, pct: 82 },
                { stars: 4, pct: 12 },
                { stars: 3, pct: 4 },
                { stars: 2, pct: 1 },
                { stars: 1, pct: 1 }
              ].map((row) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-zinc-600 w-12 hover:text-amber-600 cursor-pointer">{row.stars} Star</span>
                  <div className="flex-1 h-2.5 bg-zinc-200 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-400 rounded-full" style={{ width: `${row.pct}%` }}></div>
                  </div>
                  <span className="text-xs font-medium text-zinc-400 w-8 text-right">{row.pct}%</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-zinc-200">
              <h4 className="font-bold text-zinc-900 text-sm mb-2">Share your thoughts</h4>
              <p className="text-xs text-zinc-500 mb-4">If you've used this product, share your review with other riders.</p>
              <button className="w-full py-3.5 bg-white border border-zinc-300 text-zinc-900 rounded-xl font-bold text-sm hover:bg-zinc-50 active:scale-[0.98] transition-all shadow-sm">
                Write a Review
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-zinc-900">Top Reviews from India</span>
            <select className="bg-white border border-zinc-200 text-zinc-700 text-sm font-medium rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer shadow-sm">
              <option>Top Reviews</option>
              <option>Most Recent</option>
              <option>Highest Rated</option>
            </select>
          </div>
   <div className="flex flex-col w-full h-[67vh] gap-2 overflow-y-auto pr-2">
            {reviews.map((review) => (
              <div key={review.id} className="p-3 bg-white border border-zinc-200 rounded-2xl shadow-sm transition-all hover:border-zinc-300">

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center font-bold text-zinc-600 border border-zinc-200">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-zinc-900 text-sm">{review.author}</span>
                      {review.verified && (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 bg-green-50 text-green-700 rounded text-[10px] font-bold uppercase tracking-widest border border-green-100">
                          <CheckCircle2 size={10} strokeWidth={3} />
                          Verified Buyer
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-zinc-400 font-medium">Reviewed on {review.date}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} fill={s <= review.rating ? "currentColor" : "none"} className={s > review.rating ? "text-zinc-300" : ""} />
                    ))}
                  </div>
                  <h4 className="font-bold text-zinc-900 text-sm">{review.title}</h4>
                </div>

                <p className="text-zinc-600 text-sm leading-relaxed mb-4">
                  {review.content}
                </p>

                <div className="flex items-center gap-4 text-xs">
                  <button className="flex items-center gap-1.5 text-zinc-500 font-semibold hover:text-zinc-900 transition-colors border border-zinc-200 px-3 py-1.5 rounded-lg bg-zinc-50 hover:bg-zinc-100">
                    <ThumbsUp size={14} />
                    Helpful ({review.helpful})
                  </button>
                  <button className="text-zinc-400 font-medium hover:text-zinc-700 transition">
                    Report abuse
                  </button>
                </div>
              </div>
            ))}

            <button className="mt-4 text-amber-600 font-bold text-sm tracking-wide hover:text-amber-700 transition self-start flex items-center gap-2 underline underline-offset-4 decoration-amber-500/30">
              See all 342 reviews
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
