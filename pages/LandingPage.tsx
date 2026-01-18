
import React from 'react';
import HardwareVisual from '../components/HardwareVisual';

interface LandingPageProps {
  onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
  return (
    <div className="relative min-h-screen pt-20 px-6 overflow-hidden bg-[#020617]">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-100px)]">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Next-Gen Hardware SaaS
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            Accelerate your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400">
              Hardware Prototyping
            </span>
          </h1>

          <p className="text-slate-400 text-lg lg:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Hardware Exchange is a secure platform where organizations exchange electronic components such as Arduino boards, sensors, modules, and peripherals for fixed durations. Access is merit-based, supported by deposits or minimal fees, enabling rapid prototyping without permanent procurement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95"
            >
              Get Started Now
            </button>
            <button className="px-8 py-4 glass hover:bg-white/10 text-white font-bold rounded-xl transition-all border border-white/10">
              View Inventory
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center lg:justify-start gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">500+</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Components</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">2.4k</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Exchanges</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white">99%</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold">Trust Score</span>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="relative">
           <HardwareVisual />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
