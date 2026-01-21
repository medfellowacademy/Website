"use client";

import { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWidget, setShowWidget] = useState(false);

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWidget(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappNumber = "919876543210"; // Replace with actual WhatsApp number
  const predefinedMessages = [
    {
      emoji: "📚",
      title: "Program Details",
      message: "Hi! I'd like to know more about fellowship programs at Med Fellow Academy."
    },
    {
      emoji: "💰",
      title: "Fees & EMI",
      message: "Hi! Can you share details about fees and EMI options?"
    },
    {
      emoji: "📅",
      title: "Admission Process",
      message: "Hi! What's the admission process and next batch dates?"
    },
    {
      emoji: "🎯",
      title: "Career Guidance",
      message: "Hi! I need help choosing the right fellowship for my career goals."
    }
  ];

  const handleMessageClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  if (!showWidget) return null;

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Message Popup */}
        {isOpen && (
          <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden mb-4 animate-slide-up">
            <div className="bg-linear-to-br from-green-600 to-green-700 text-white p-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl">
                  👨‍⚕️
                </div>
                <div>
                  <h3 className="font-bold text-lg">Med Fellow Academy</h3>
                  <p className="text-xs opacity-90">Typically replies instantly</p>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50">
              <p className="text-sm text-text-secondary mb-4">
                👋 Hi there! How can we help you today?
              </p>
              
              <div className="space-y-2">
                {predefinedMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => handleMessageClick(msg.message)}
                    className="w-full text-left p-3 bg-white rounded-lg hover:bg-green-50 transition-all border border-gray-200 hover:border-green-500"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{msg.emoji}</span>
                      <span className="text-sm font-semibold text-primary">{msg.title}</span>
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => handleMessageClick("Hi! I have a question about Med Fellow Academy.")}
                className="w-full mt-3 px-4 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all"
              >
                💬 Start Custom Chat
              </button>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all"
            >
              ✕
            </button>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-green-600 hover:bg-green-700 rounded-full shadow-2xl flex items-center justify-center text-white text-3xl transition-all hover:scale-110 relative"
          aria-label="Open WhatsApp Chat"
        >
          <svg viewBox="0 0 24 24" className="w-9 h-9 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
            1
          </span>
        </button>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
