"use client";

import { useState, useEffect } from "react";
import { MessageSquare, Phone, X, Send, User, MessageCircle, PhoneCall, CheckCircle } from "lucide-react";

const WHATSAPP_NUM = "919999999999";
const PHONE_NUM = "+919999999999";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({ name: "", number: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Auto-open after 5 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.number) return alert("Please fill details");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setIsOpen(false);
        setForm({ name: "", number: "" });
      }, 3000);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const msg = form.name 
      ? `Hi, I am ${form.name}. I need help finding the right superbike tyre.` 
      : `Hi! I need help finding the right superbike tyre.`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      {/* The Floating Form Panel */}
      <div 
        className={`mb-4 overflow-hidden origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform ${
          isOpen 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-[340px] bg-white rounded-3xl shadow-[0_30px_100px_rgba(0,0,0,0.15)] border border-zinc-200/60 overflow-hidden backdrop-blur-xl">
          
          {/* Header */}
          <div className="relative bg-zinc-900 px-6 py-5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-white font-serif font-bold text-xl tracking-tight mb-1">Let's Talk Tyres</h3>
                <p className="text-zinc-400 text-xs font-medium">Expert advice, instantly.</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 p-1.5 rounded-full transition-all"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
          </div>

          <div className="p-6 pb-7">
            {success ? (
              <div className="flex flex-col items-center text-center py-8">
                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-100 shadow-sm animate-[bounce_1s_ease-in-out_infinite]">
                  <CheckCircle size={32} />
                </div>
                <h4 className="font-bold text-lg text-zinc-900 mb-2">Request Sent!</h4>
                <p className="text-sm text-zinc-500 px-4">Our tyre specialist will call you in the next few minutes.</p>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="relative">
                    <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={form.name}
                      onChange={e => setForm({...form, name: e.target.value})}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <Phone size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                    <input 
                      type="tel" 
                      maxLength="10"
                      placeholder="Mobile Number" 
                      value={form.number}
                      onChange={e => setForm({...form, number: e.target.value.replace(/\D/g,'')})}
                      className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl pl-11 pr-4 py-3.5 text-sm font-medium text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-zinc-900 hover:bg-black text-white font-semibold py-3.5 rounded-2xl text-sm transition-all shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] active:scale-[0.98] flex items-center justify-center gap-2 group border border-zinc-800"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Request Callback
                      </>
                    )}
                  </button>
                </form>

                <div className="relative flex items-center py-6">
                  <div className="flex-grow border-t border-zinc-200"></div>
                  <span className="flex-shrink-0 mx-4 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Or Connect Now</span>
                  <div className="flex-grow border-t border-zinc-200"></div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* WhatsApp Button */}
                  <button 
                    onClick={handleWhatsApp}
                    className="flex flex-col items-center justify-center gap-2 bg-[#25d366]/10 hover:bg-[#25d366]/20 p-3 rounded-2xl transition-colors text-[#128c7e] border border-[#25d366]/20 group"
                  >
                    <div className="bg-[#25d366] text-white p-2 rounded-full shadow-[0_4px_10px_rgba(37,211,102,0.3)] group-hover:scale-110 transition-transform">
                      <MessageCircle size={18} />
                    </div>
                    <span className="text-xs font-bold">WhatsApp</span>
                  </button>

                  {/* Call Now Button */}
                  <a 
                    href={`tel:${PHONE_NUM}`}
                    className="flex flex-col items-center justify-center gap-2 bg-amber-50 hover:bg-amber-100 p-3 rounded-2xl transition-colors text-amber-700 border border-amber-200/50 group"
                  >
                    <div className="bg-amber-500 text-white p-2 rounded-full shadow-[0_4px_10px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform">
                      <PhoneCall size={18} />
                    </div>
                    <span className="text-xs font-bold">Call Now</span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Floating Action Button (Toggle) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(245,158,11,0.3)] transition-all duration-300 relative z-10 ${
          isOpen 
            ? "bg-zinc-900 hover:bg-black text-white rotate-90 scale-90" 
            : "bg-gradient-to-tr from-amber-600 to-amber-500 hover:to-amber-400 text-white hover:scale-105"
        }`}
      >
        <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isOpen ? 'hidden' : 'bg-amber-500'}`}></div>
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

    </div>
  );
}
