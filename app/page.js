"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import CustomerReviews from "./components/CustomerReviews";
import SimilarTyres from "./components/SimilarTyres";
import CallbackModal from "./components/CallbackModal";
import WhatsAppFAB from "./components/WhatsAppFAB";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open the callback modal immediately on load/refresh
    setIsModalOpen(true);

    // And force it open every 5 seconds (if closed)
    const intervalId = setInterval(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Main Product Layout */}
      <main className="flex-1">
        
        {/* Breadcrumbs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 text-xs font-medium text-zinc-500">
          <a href="#" className="hover:text-zinc-900 hover:underline transition-colors">Home</a> 
          <span className="mx-2 text-zinc-300">/</span> 
          <a href="#" className="hover:text-zinc-900 hover:underline transition-colors">Superbike Tyres</a>
          <span className="mx-2 text-zinc-300">/</span> 
          <a href="#" className="hover:text-zinc-900 hover:underline transition-colors">Michelin</a>
          <span className="mx-2 text-zinc-300">/</span> 
          <span className="text-zinc-900 font-semibold">Power 6</span>
        </div>

        {/* Hero Product Detail ( Amazon Style Left/Right ) */}
        <ProductDetail />

        {/* Customer Reviews Section */}
        <CustomerReviews />

        {/* Similar Products */}
        <SimilarTyres />

      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white  mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-800 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-1">
              <span className="font-serif text-3xl font-bold tracking-tight text-white mb-5 block">
                TORQUE<span className="text-amber-500">BLOCK</span>
              </span>
              <p className="text-sm font-medium text-zinc-400 leading-relaxed">
                India's finest destination for premium superbike tyres. Ride with confidence, precision, and power.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-xs tracking-widest text-zinc-500">Shop</h4>
              <ul className="space-y-3 text-sm font-medium text-zinc-300">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Michelin</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Pirelli</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Metzeler</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Bridgestone</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-xs tracking-widest text-zinc-500">Customer Service</h4>
              <ul className="space-y-3 text-sm font-medium text-zinc-300">
                <li><a href="#" className="hover:text-amber-500 transition-colors">Track Order</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Returns & Refunds</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Fitment Centers</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-5 uppercase text-xs tracking-widest text-zinc-500">Connect</h4>
              <p className="text-sm font-medium text-zinc-400 mb-4">Questions? Reach out to our experts.</p>
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#25D366] hover:bg-[#1DA851] active:scale-[0.98] text-white py-3 px-5 rounded-xl text-sm font-bold transition-all w-full shadow-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs font-medium text-zinc-500">
            <p>© {new Date().getFullYear()} Torque Block. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <CallbackModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Floating WhatsApp Button */}
      <WhatsAppFAB />
    </div>
  );
}
