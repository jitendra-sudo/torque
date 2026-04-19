"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUM = "919999999999";

// 👇 Realistic names (like real users)
const USERS = [
  { name: "Rahul", city: "Delhi" },
  { name: "Aman", city: "Bangalore" },
  { name: "Rohit", city: "Mumbai" },
  { name: "Kiran", city: "Hyderabad" },
  { name: "Vikram", city: "Chennai" }
];

export default function WhatsAppFAB() {
  const [showCard, setShowCard] = useState(false);
  const [user, setUser] = useState(null);

  // Show first after page load
  useEffect(() => {
    const timer = setTimeout(() => {
      triggerNewUser();
    }, 3000); // 3 sec after load

    return () => clearTimeout(timer);
  }, []);

  // Function to trigger new chat
  const triggerNewUser = () => {
    const randomUser = USERS[Math.floor(Math.random() * USERS.length)];
    setUser(randomUser);
    setShowCard(true);
  };

  // When closed → show again after 10 sec
  const handleClose = () => {
    setShowCard(false);

    setTimeout(() => {
      triggerNewUser();
    }, 10000); // 10 sec
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-end gap-3">

      {/* 💬 LIVE CHAT CARD */}
      {showCard && user && (
        <div className="bg-white border border-zinc-200 shadow-2xl rounded-2xl p-4 w-72 animate-slideUp relative">

          {/* Close */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-zinc-400 hover:text-zinc-700"
          >
            <X size={16} />
          </button>

          {/* Profile */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold">
              {user.name.charAt(0)}
            </div>

            <div>
              <div className="text-sm font-semibold text-zinc-900">
                {user.name}
              </div>
              <div className="text-xs text-green-600 font-medium">
                ● Online now
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="text-sm text-zinc-700 mb-3">
            Hi 👋 I have a question about tyres
          </div>

          {/* CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUM}?text=Hi, I want to know more`}
            target="_blank"
            className="text-xs font-semibold text-green-600 hover:underline"
          >
            Reply on WhatsApp →
          </a>
        </div>
      )}

      {/* 🟢 WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUM}?text=Hi! I am interested`}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition"
        style={{ background: "linear-gradient(135deg, #25d366, #128c7e)" }}
      >
        <span className="absolute inset-0 rounded-full animate-ping  opacity-30"></span>

      <FaWhatsapp  size={26} color="white"/>
      </a>
    </div>
  );
}
 