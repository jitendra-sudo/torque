"use client";

import {
  Users,
  Package,
  Star,
  Truck,
  Award,
  TrendingUp,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { icon: Users, value: 12000, suffix: "+", label: "Riders Served", color: "#f59e0b" },
  { icon: Package, value: 500, suffix: "+", label: "Tyre Models", color: "#3b82f6" },
  { icon: Star, value: 4.9, suffix: "★", label: "Avg. Rating", color: "#f59e0b", isDecimal: true },
  { icon: Truck, value: 98, suffix: "%", label: "On-Time Delivery", color: "#10b981" },
  { icon: Award, value: 8, suffix: "+", label: "Years Experience", color: "#8b5cf6" },
  { icon: TrendingUp, value: 1000, suffix: "+", label: "Bikes/Month", color: "#ef4444" },
];

function AnimatedNumber({ target, suffix, isDecimal }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1800;
          const steps = 60;
          const increment = target / steps;
          let step = 0;
          const timer = setInterval(() => {
            step++;
            setCurrent(Math.min(increment * step, target));
            if (step >= steps) clearInterval(timer);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <section className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-2xl p-8 border border-white/8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-1 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <div
                  className="text-2xl font-black"
                  style={{ color: stat.color }}
                >
                  <AnimatedNumber
                    target={stat.value}
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </div>
                <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
