
import React, { useEffect, useState } from 'react';

const HardwareVisual: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 15, y: -20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * -20;
      setRotation({ x: 15 + y, y: -20 + x });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center perspective-1000">
      <div 
        className="relative transition-transform duration-300 ease-out preserve-3d"
        style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` }}
      >
        {/* Arduino Board Body */}
        <div className="w-[320px] h-[450px] bg-slate-900/90 rounded-2xl border-4 border-slate-800 shadow-[0_0_50px_rgba(34,211,238,0.15)] relative overflow-hidden animate-float">
          {/* Circuit Lines Overlay */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #22d3ee 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          {/* Main Processor */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center shadow-lg shadow-black/50">
            <div className="w-16 h-16 bg-gradient-to-tr from-cyan-900 to-slate-800 rounded flex items-center justify-center">
              <span className="text-[10px] text-cyan-400/80 font-mono">GEMINI-CORE</span>
            </div>
            {/* Pins */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute -left-1 w-2 h-[2px] bg-slate-600" style={{ top: `${20 + i * 10}%` }}></div>
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute -right-1 w-2 h-[2px] bg-slate-600" style={{ top: `${20 + i * 10}%` }}></div>
            ))}
          </div>

          {/* Connectors */}
          <div className="absolute top-0 left-10 w-16 h-8 bg-slate-800 rounded-b-lg border-x border-b border-slate-700"></div>
          <div className="absolute top-0 right-10 w-12 h-10 bg-slate-800 rounded-b-lg border-x border-b border-slate-700"></div>

          {/* LED Indicators */}
          <div className="absolute top-12 left-8 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_cyan] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-teal-500/30"></div>
          </div>

          {/* Component Labels */}
          <div className="absolute bottom-8 left-8 text-[8px] font-mono text-slate-500 uppercase tracking-widest">
            Module-082-A / Build 2025
          </div>
        </div>

        {/* Floating Glass Panels */}
        <div className="absolute -right-16 top-1/4 w-48 h-32 glass-dark rounded-xl p-4 shadow-xl border border-cyan-500/20 translate-z-20 animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-[10px] text-cyan-400 font-bold mb-1 uppercase">Live Metrics</div>
          <div className="h-12 flex items-end gap-1">
            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-cyan-400/20 rounded-t" style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <div className="mt-2 text-[8px] text-slate-400">Frequency: 1.2GHz Stable</div>
        </div>

        <div className="absolute -left-12 bottom-1/4 w-40 h-24 glass-dark rounded-xl p-4 shadow-xl border border-teal-500/20 translate-z-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="text-[10px] text-teal-400 font-bold mb-1 uppercase">Power Status</div>
          <div className="flex items-center gap-2 mt-2">
            <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-teal-500 shadow-[0_0_5px_teal]"></div>
            </div>
            <span className="text-[8px] text-slate-300">80%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardwareVisual;
