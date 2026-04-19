"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUM = "919999999999";

// 👇 Realistic names and tailored messages for Superbike Tyres
const USERS = [
  { name: "Rahul", city: "Delhi", msg: "Do you have the Michelin Power 6 available?" },
  { name: "Aman", city: "Bangalore", msg: "I need a rear tyre for my Kawasaki Z900." },
  { name: "Rohit", city: "Mumbai", msg: "Can you help me choose between Pirelli and Metzeler?" },
  { name: "Kiran", city: "Hyderabad", msg: "How fast can you deliver to Hyderabad?" },
  { name: "Vikram", city: "Chennai", msg: "Looking for the best track-day tyres!" }
];

export default function WhatsAppFAB() {
  const [showCard, setShowCard] = useState(false);
  const [user, setUser] = useState(null);
  const [unread, setUnread] = useState(0);

  // Show first after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerNewUser();
    }, 4000); // 4 sec after load

    return () => clearTimeout(timer);
  }, []);

  // Function to trigger new chat
  const triggerNewUser = () => {
    const randomUser = USERS[Math.floor(Math.random() * USERS.length)];
    setUser(randomUser);
    setShowCard(true);
    setUnread(1);
  };

  // When closed → show again after 15 sec
  const handleClose = () => {
    setShowCard(false);

    setTimeout(() => {
      triggerNewUser();
    }, 15000); // 15 sec
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3 pointer-events-none">

      {/* 💬 LIVE CHAT CARD */}
      <div 
        className={`pointer-events-auto origin-bottom-right transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform w-[320px] ${
          showCard 
            ? "opacity-100 scale-100 translate-y-0" 
            : "opacity-0 scale-95 translate-y-8 pointer-events-none"
        }`}
      >
        {user && (
          <div className="bg-white/95 backdrop-blur-xl border border-zinc-200/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] rounded-2xl overflow-hidden relative">
            
            {/* Elegant Header */}
            <div className="bg-zinc-50 border-b border-zinc-100 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#25d366] to-[#128c7e] flex items-center justify-center text-white font-bold text-xs shadow-sm">
                    {user.name.charAt(0)}
                  </div>
                  {/* Online Dot */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                
                <div>
                  <div className="text-xs font-bold text-zinc-900 leading-tight">
                    {user.name} <span className="text-zinc-400 font-medium">({user.city})</span>
                  </div>
                  <div className="text-[10px] text-green-600 font-semibold leading-tight flex items-center gap-1">
                    Typing<span className="animate-pulse">...</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleClose}
                className="text-zinc-400 hover:text-zinc-800 bg-zinc-100 hover:bg-zinc-200 p-1.5 rounded-full transition-colors active:scale-95"
                aria-label="Close"
              >
                <X size={14} />
              </button>
            </div>

            {/* Message Flow */}
            <div className="p-4 bg-zinc-50/50">
              <div className="bg-white border border-zinc-100 shadow-sm text-sm text-zinc-700 px-4 py-3 rounded-2xl rounded-tl-sm inline-block relative">
                Hey 👋 <br />
                {user.msg}
              </div>
              <div className="text-[9px] text-zinc-400 mt-1.5 ml-1 font-medium select-none text-left">Just now</div>
            </div>

            {/* Enterprise CTA button */}
            <div className="px-4 pb-4 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUM}?text=Hi! I am looking for superbike tyres.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setUnread(0)}
                className="flex items-center justify-center gap-2 w-full bg-[#128c7e] hover:bg-[#075e54] active:scale-[0.98] text-white py-3 rounded-xl text-[13px] font-bold transition-all shadow-md group"
              >
                <FaWhatsapp size={15} className="group-hover:animate-bounce" />
                Reply to {user.name} on WhatsApp
              </a>
            </div>
            
          </div>
        )}
      </div>

      {/* 🟢 WhatsApp FAB */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=Hi! I am interested`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setUnread(0)}
        className="pointer-events-auto relative w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-105 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300 group"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
      >
        {/* Subtle inner ping */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-[0.15] bg-white"></span>
        
        <FaWhatsapp size={28} color="white" className="group-hover:-rotate-12 transition-transform duration-300" />
        
        {/* Dynamic Unread Badge */}
        {unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm animate-pulse">
            {unread}
          </span>
        )}
      </a>
      
    </div>
  );
}
 