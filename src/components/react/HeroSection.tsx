import React from 'react';
import { ArrowLeft, Play } from 'lucide-react';
import HeroVisual from './HeroVisual';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[95vh] flex items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] -z-10 mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-[120px] -z-10 mix-blend-multiply" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="flex flex-col items-start space-y-8 order-2 lg:order-1 relative z-20 text-right">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm transition-transform hover:scale-105">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 text-xs font-bold tracking-wide">متاحون لمشاريع جديدة</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[1.1]">
            نبني تجارب <br />
            <span className="text-primary">رقمية تُلهم.</span>
          </h1>

          <p className="text-xl text-slate-500 max-w-xl leading-relaxed font-normal">
            نحول التعقيد التقني إلى حلول ويب سلسة وجميلة. شريكك الاستراتيجي للنمو في العصر الرقمي.
          </p>

          <div className="flex flex-wrap gap-4 w-full sm:w-auto pt-4">
            <a href="/contact" className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all duration-300 shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1 flex items-center gap-3 overflow-hidden">
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative">ابدأ مشروعك</span>
              <ArrowLeft className="relative w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </a>
            
            <button className="group px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold transition-all duration-300 hover:border-slate-300 hover:bg-slate-50 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform"><Play className="w-3.5 h-3.5 fill-slate-900 text-slate-900 ml-0.5" /></div>
              <span>كيف نعمل؟</span>
            </button>
          </div>
        </div>

        <div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
             <HeroVisual />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;