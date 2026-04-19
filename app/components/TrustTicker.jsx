"use client";

import { useRef, useEffect } from "react";
import { Star, Shield, Clock, Truck, MessageCircle, Award } from "lucide-react";

const TICKERS = [
  { icon: Star, text: "4.9★ — 2,300+ Happy Riders" },
  { icon: Shield, text: "100% Genuine OEM / OE-Grade Tyres" },
  { icon: Truck, text: "Same-Day Dispatch — Before 4 PM" },
  { icon: Clock, text: "Free Fitting Available — PAN India Network" },
  { icon: Award, text: "Authorized Distributor — Michelin · Pirelli · Metzeler · MRF" },
  { icon: MessageCircle, text: "WhatsApp Support — 9 AM to 9 PM" },
  { icon: Star, text: "1000+ Bikes Serviced This Month" },
  { icon: Shield, text: "Warranty On Every Tyre" },
];

export default function TrustTicker() {
  return (
    <div className="bg-black/60 border-y border-white/8 py-3 overflow-hidden">
      <div className="flex whitespace-nowrap animate-ticker">
        {[...TICKERS, ...TICKERS].map((item, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-2.5 mx-8 text-sm text-gray-300 flex-shrink-0"
          >
            <item.icon
              size={14}
              className="text-amber-400 flex-shrink-0"
            />
            <span>{item.text}</span>
            <span className="text-amber-400/40 ml-6">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}
