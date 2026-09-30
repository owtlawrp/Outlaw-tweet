import React, { useState } from 'react';
import { MessageSquare, Home, User, ShoppingBag, Compass, Radio, Shield, LogIn, Sparkles } from 'lucide-react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleDiscordLogin = () => {
    // رابط المصادقة الفعلي مع ديسكورد
    window.location.href = '/api/auth/discord';
  };

  return (
    <div className="min-h-screen bg-[#0b0f17] text-gray-100 font-sans pb-24 selection:bg-cyan-500 selection:text-black">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#0b0f17]/80 backdrop-blur-md border-b border-gray-800/60 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="text-black font-extrabold text-lg">Ø</span>
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wide text-white">OutLaw Tweet</h1>
            <p className="text-[10px] text-cyan-400 font-medium tracking-widest uppercase">Los Santos Comms Desk</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="hidden md:flex items-center space-x-1 bg-gray-900/80 border border-gray-800 rounded-full px-3 py-1 text-xs">
            <span className="text-gray-400">Home</span>
            <span className="text-white font-semibold">الرئيسية</span>
          </div>
          <button 
            onClick={handleDiscordLogin}
            className="flex items-center space-x-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs px-4 py-2 rounded-xl transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Sign in</span>
          </button>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-xl mx-auto p-4 space-y-4">
        
        {/* Hero Banner Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-[#111827] to-[#0f172a] border border-gray-800/80 p-6 shadow-2xl">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex justify-between items-start mb-4">
            <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
              Los Santos • Live Community
            </span>
            <div className="w-12 h-12 rounded-2xl bg-gray-800/80 border border-gray-700/50 flex items-center justify-center text-cyan-400 shadow-inner">
              <span className="text-xl font-bold">Ø</span>
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2 leading-tight">
            The city is <span className="italic font-serif text-cyan-400 font-normal">always</span> saying something.
          </h2>
          
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
            Your front-row seat to the people, stories, and moments shaping OutLaw RP.
          </p>
        </div>

        {/* Live Feed Status Pill */}
        <div className="bg-gray-900/60 border border-gray-800/80 rounded-2xl p-4 flex items-center justify-between backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Radio className="w-4 h-4 animate-pulse" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-white">OutLaw RP · City feed</h3>
              <p className="text-[11px] text-gray-400">Community posts, straight from the server.</p>
            </div>
          </div>
          <div className="flex items-center space-x-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[10px] font-bold text-emerald-400 tracking-wider">LIVE</span>
          </div>
        </div>

        {/* Speak Into The City Section */}
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center px-1">
            <h3 className="text-sm font-bold text-white tracking-wide">Speak into the city</h3>
            <span className="text-[11px] text-gray-400 font-medium">YOUR COMMS</span>
          </div>

          {/* Auth Card Box */}
          <div className="bg-gradient-to-b from-gray-900/90 to-[#0d131f] border border-gray-800 rounded-3xl p-6 text-center space-y-4 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 mx-auto flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/5">
              <Shield className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Your voice belongs in the city.</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto leading-relaxed">
                Connect your Discord account to publish and take part in the conversation.
              </p>
            </div>

            <button
              onClick={handleDiscordLogin}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3.5 px-6 rounded-2xl transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center space-x-2 text-sm active:scale-[0.99]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              <span>Sign in with Discord</span>
            </button>
          </div>
        </div>

      </main>

      {/* Bottom Floating Navigation (Mobile Style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0b0f17]/90 backdrop-blur-lg border-t border-gray-800/80 px-6 py-3 flex justify-between items-center max-w-xl mx-auto z-50">
        <button className="flex flex-col items-center space-y-1 text-cyan-400">
          <Home className="w-5 h-5" />
          <span className="text-[10px] font-bold">Home</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-gray-300 transition-colors">
          <User className="w-5 h-5" />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-gray-300 transition-colors">
          <ShoppingBag className="w-5 h-5" />
          <span className="text-[10px] font-medium">Store</span>
        </button>
        <button className="flex flex-col items-center space-y-1 text-gray-500 hover:text-gray-300 transition-colors">
          <Compass className="w-5 h-5" />
          <span className="text-[10px] font-medium">Explore</span>
        </button>
      </nav>
    </div>
  );
}
