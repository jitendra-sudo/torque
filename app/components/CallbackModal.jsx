"use client";

import { useState, useEffect } from "react";
import {
  X,
  Phone,
  MessageCircle,
  User,
  Send,
  PhoneCall,
  CheckCircle,
} from "lucide-react";

const WHATSAPP_NUM = "919999999999";
const CALL_NUM = "+919999999999";

export default function CallbackModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: "", phone: "", message: "" });
      }, 300);
    }
  }, [isOpen]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please enter Name and Phone!");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const text = form.name
      ? `Hi! I am ${form.name}. ${form.message}`
      : "Hi! I am looking for superbike tyres.";
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleCall = () => {
    window.open(`tel:${CALL_NUM}`, "_self");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-opacity duration-300"
      style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Callback Request"
    >
      <div className="relative w-full max-w-md rounded-3xl overflow-hidden bg-white text-black shadow-2xl transition-all duration-300 transform scale-100 opacity-100">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-zinc-400 hover:text-zinc-800 hover:bg-zinc-100 transition-all z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <div className="w-full p-6 sm:p-8">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-zinc-900">Talk to Expert</h2>
              <p className="text-sm text-zinc-500 mt-1">Get instant response via WhatsApp 🚀</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* Name */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder-zinc-400 text-sm font-medium"
                  required
                />
              </div>

              {/* Phone */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value.replace(/\D/g,'')})}
                  maxLength="10"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder-zinc-400 text-sm font-medium"
                  required
                />
              </div>

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Requirement (optional)"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-5 py-3.5 rounded-xl border border-zinc-200 focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 outline-none transition-all placeholder-zinc-400 resize-none text-sm font-medium"
              />

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 py-3.5 mt-2 bg-zinc-900 text-white font-bold rounded-xl hover:bg-black active:scale-[0.98] transition-all shadow-md"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Send size={18} />
                    Get Callback
                  </>
                )}
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-zinc-100"></div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">OR</span>
                <div className="flex-1 h-px bg-zinc-100"></div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                {/* Call */}
                <button
                  type="button"
                  onClick={handleCall}
                  className="flex items-center justify-center gap-2 py-3 border border-zinc-200 rounded-xl font-semibold hover:bg-zinc-50 active:scale-[0.98] transition-all text-sm text-zinc-700 hover:border-zinc-300"
                >
                  <PhoneCall size={18} className="text-zinc-500" />
                  Call Now
                </button>

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white rounded-xl font-semibold hover:bg-[#1DA851] active:scale-[0.98] transition-all text-sm"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="w-full p-10 text-center flex flex-col items-center justify-center min-h-[400px]">
             <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6 animate-[bounce_1s_ease-in-out_infinite]">
                <CheckCircle size={40} />
             </div>
             <h3 className="text-2xl font-bold text-zinc-900 mb-2">Request Sent!</h3>
             <p className="text-zinc-500 max-w-[250px] mx-auto mb-8 text-sm">
                Thank you! Our tyre expert will call you back shortly.
             </p>
             <button
                onClick={onClose}
                className="px-8 py-3 bg-zinc-900 text-white font-semibold rounded-xl hover:bg-black transition-all"
             >
                Close
             </button>
          </div>
        )}
      </div>
    </div>
  );
}





