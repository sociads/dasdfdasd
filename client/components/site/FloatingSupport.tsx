import React from "react";
import ChatSupport from "@/components/site/ChatSupport";

export default function FloatingSupport() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.me/9058503077061"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center gap-3 rounded-full bg-green-600 text-white px-4 py-3 shadow-lg hover:scale-105 transition-transform"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M21 15a4 4 0 0 1-4 4H7l-4 4V5a2 2 0 0 1 2-2h12a4 4 0 0 1 4 4z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="hidden md:inline">WhatsApp Destek</span>
      </a>

      <ChatSupport />
    </div>
  );
}
