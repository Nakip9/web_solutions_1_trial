import React from 'react';
import { Code, Palette, LayoutTemplate, Activity, MoreHorizontal } from 'lucide-react';

const GlassCardStack = () => {
  return (
    <div className="relative w-[320px] h-[360px] md:w-[400px] md:h-[450px] animate-float transform preserve-3d">
      
      {/* Main Back Plate (Frosted Glass) */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-xl rounded-3xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] flex flex-col p-6 overflow-hidden ring-1 ring-black/5">
        {/* Gloss Shine */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent pointer-events-none" />

        {/* Decorative Internal UI Elements */}
        <div className="flex items-center justify-between mb-8 relative z-10">
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
            </div>
            <MoreHorizontal className="text-slate-400 w-5 h-5" />
        </div>

        {/* Internal Grid */}
        <div className="grid grid-cols-2 gap-4 h-full relative z-10">
            {/* Card 1: Code */}
            <div className="col-span-1 bg-blue-50 rounded-2xl p-4 border border-blue-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                 <Code className="w-8 h-8 text-primary mb-3 relative z-10" />
                 <div className="space-y-2 relative z-10">
                    <div className="w-full h-2 bg-blue-200/50 rounded-full" />
                    <div className="w-3/4 h-2 bg-blue-200/50 rounded-full" />
                    <div className="w-1/2 h-2 bg-blue-200/50 rounded-full" />
                 </div>
            </div>

            {/* Card 2: Color Picker */}
            <div className="col-span-1 bg-purple-50 rounded-2xl p-4 border border-purple-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="w-full h-20 bg-gradient-to-br from-primary via-purple-400 to-pink-400 rounded-lg mb-3 shadow-inner" />
                <Palette className="w-5 h-5 text-purple-500 absolute bottom-4 right-4" />
            </div>

            {/* Card 3: Layout */}
            <div className="col-span-1 bg-emerald-50 rounded-2xl p-4 border border-emerald-100 relative overflow-hidden flex flex-col justify-end group hover:shadow-md transition-shadow">
                <LayoutTemplate className="w-8 h-8 text-emerald-500 mb-2 relative z-10" />
                <div className="w-full h-2 bg-emerald-200/50 rounded-full relative z-10" />
            </div>

            {/* Card 4: Wireframe */}
             <div className="col-span-1 bg-slate-50 rounded-2xl p-4 border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                <div className="absolute inset-0 grid grid-cols-4 gap-1 opacity-20 transform rotate-12 scale-150">
                    {[...Array(16)].map((_, i) => (
                         <div key={i} className="bg-slate-300 rounded-sm h-full w-full" />
                    ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-10 border-2 border-slate-200 rounded-lg bg-white shadow-sm flex items-center justify-center">
                        <div className="w-8 h-[2px] bg-slate-300 transform rotate-45" />
                        <div className="w-8 h-[2px] bg-slate-300 transform -rotate-45 absolute" />
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* Floating Element 1 - Top Left */}
      <div className="absolute -top-6 -left-6 w-20 h-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center justify-center animate-pulse-slow z-20 border border-white">
         <div className="text-primary font-bold font-mono text-xl">
            {'</>'}
         </div>
      </div>

      {/* Floating Element 2 - Bottom Right */}
      <div className="absolute -bottom-6 -right-6 w-auto px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] flex items-center gap-3 z-20 animate-float border border-white" style={{ animationDelay: '1s' }}>
          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
             <Activity className="w-4 h-4 text-green-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">الأداء</span>
            <span className="text-sm font-bold text-slate-800">99.8%</span>
          </div>
      </div>

    </div>
  );
};

export default GlassCardStack;