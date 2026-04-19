"use client";

import { useState, useEffect } from "react";
import { X, Phone, MessageCircle, Send } from "lucide-react";

export default function CallbackPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", number: "", query: "" });

  useEffect(() => {
    // Open immediately on load/refresh as requested
    setIsOpen(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.number || !form.query) return alert("Please fill all fields");
    
    const msg = `*Callback Request*\nName: ${form.name}\nNumber: ${form.number}\nQuery: ${form.query}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(msg)}`, "_blank");
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919999999999?text=Hi! I need help with superbike tyres.", "_blank");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-zinc-900/40 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md p-8 bg-white/90 backdrop-blur-2xl border border-white rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.12)] transform transition-transform">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 transition-colors text-zinc-600"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber-50 text-amber-600 mb-4 shadow-sm border border-amber-100">
            <Phone size={24} />
          </div>
          <h2 className="font-serif text-2xl font-bold text-zinc-900 tracking-tight">Get Expert Advice</h2>
          <p className="text-sm font-medium text-zinc-500 mt-1">Our tyre specialists will call you back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-sm"
              required
            />
          </div>
          <div>
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              value={form.number}
              onChange={(e) => setForm({...form, number: e.target.value})}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all shadow-sm"
              required
            />
          </div>
          <div>
            <textarea 
              placeholder="What tyre are you looking for?" 
              rows={3}
              value={form.query}
              onChange={(e) => setForm({...form, query: e.target.value})}
              className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3.5 placeholder-zinc-400 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all resize-none shadow-sm"
              required
            />
          </div>
          
          <button type="submit" className="flex items-center justify-center gap-2 w-full bg-amber-600 hover:bg-amber-700 active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(217,119,6,0.3)] mt-2">
            <Send size={18} />
            Request Callback
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-zinc-200 flex-1"></div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">OR</span>
          <div className="h-px bg-zinc-200 flex-1"></div>
        </div>

        <button onClick={handleWhatsApp} className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1DA851] active:scale-[0.98] text-white font-semibold py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(37,211,102,0.3)]">
          <MessageCircle size={20} />
          Chat on WhatsApp
        </button>
      </div>
    </div>
  );
}
