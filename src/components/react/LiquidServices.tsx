import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Monitor, Smartphone, Code2, 
  BarChart3, Megaphone, Image as ImageIcon, Search, 
  Share2, Video, Wrench, Headphones, GraduationCap,
  X, CheckCircle2, ArrowRight,
  Layout, PenTool, Package
} from 'lucide-react';

const services = [
  // ... (Keep your services array exactly the same as before, I won't repeat it to save space) ...
  // IF YOU NEED THE FULL LIST AGAIN, LET ME KNOW. 
  // I AM ASSUMING YOU KEEP THE SAME DATA LIST FROM THE PREVIOUS FILE.
  { 
    id: 'ui-ux',
    title: "تصميم تجربة المستخدم", 
    short: "واجهات ذكية.",
    desc: "نصمم واجهات مستخدم (UI/UX) تركز على سهولة الاستخدام وجمالية المظهر.",
    features: ["Wireframing", "Prototyping", "تحليل المستخدم", "تصميم تفاعلي"],
    icon: Layout, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'websites',
    title: "المواقع الإلكترونيَّة", 
    short: "واجهتك للعالم.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة تصميم المواقع الإلكترونيَّة.",
    features: ["تصميم متجاوب", "سرعة تحميل عالية", "SEO أولي", "حماية SSL"],
    icon: Monitor, 
    color: "text-dev", 
    bg: "bg-dev/10",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'branding',
    title: "الهوية البصرية", 
    short: "بصمة علامتك.",
    desc: "نصنع هوية بصرية متكاملة تعكس قيم مشروعك.",
    features: ["تصميم الشعار", "دليل العلامة (Brand Book)", "أوراق رسمية", "تطبيقات الهوية"],
    icon: PenTool, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'ecommerce',
    title: "المتاجر الإلكترونيَّة", 
    short: "بيع بلا حدود.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة تصميم وتطوير المتاجر الإلكترونيَّة.",
    features: ["بوابات دفع آمنة", "إدارة المخزون", "تتبع الطلبات", "لوحة تحكم سهلة"],
    icon: ShoppingCart, 
    color: "text-dev", 
    bg: "bg-dev/10",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'mobile',
    title: "تطبيقات الجوال", 
    short: "مشروعك في جيب عميلك.",
    desc: "فريق أوزون جاهز لتقديم خدمة تصميم تطبيقات الجوال.",
    features: ["iOS & Android", "تطبيقات Native", "إشعارات (Push)", "رفع للمتاجر"],
    icon: Smartphone, 
    color: "text-mobile", 
    bg: "bg-mobile/10",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800"
  },
   { 
    id: 'packaging',
    title: "تصميم العبوات والتغليف", 
    short: "منتج يخطف الأنظار.",
    desc: "نقدم حلولاً إبداعية لتصميم أغلفة وعبوات المنتجات.",
    features: ["تصميم العلب", "ملصقات (Labels)", "نماذج 3D للعرض", "ملفات جاهزة للطباعة"],
    icon: Package, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'graphic',
    title: "تصميم الجرافيك", 
    short: "إبداع بصري.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة تصميم الجرافيك.",
    features: ["الشعارات", "الهوية البصرية", "مطبوعات", "تصاميم السوشيال"],
    icon: ImageIcon, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1626785774573-4b7993143c23?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'digital-marketing',
    title: "التسويق الرقمي", 
    short: "استراتيجيات نمو.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة التسويق الرقمي.",
    features: ["خطط تسويقية", "تحليل السوق", "نمو المبيعات", "تقارير أداء"],
    icon: Megaphone, 
    color: "text-marketing", 
    bg: "bg-marketing/10",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'media',
    title: "الانتاج الاعلامي", 
    short: "محتوى احترافي.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة الإنتاج الإعلامي.",
    features: ["تصوير فيديو", "موشن جرافيك", "مونتاج", "كتابة سيناريو"],
    icon: Video, 
    color: "text-design", 
    bg: "bg-design/10",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800"
  },
  { 
    id: 'seo',
    title: "تحسين محركات البحث", 
    short: "تصدر النتائج.",
    desc: "فريق أوزون الاحترافي جاهز لتقديم خدمة تحسين محرّكات البحث.",
    features: ["الكلمات المفتاحية", "On-Page SEO", "بناء الروابط", "تحسين السرعة"],
    icon: Search, 
    color: "text-marketing", 
    bg: "bg-marketing/10",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&q=80&w=800"
  },
];

interface LiquidServicesProps {
  limit?: number;
}

const LiquidServices: React.FC<LiquidServicesProps> = ({ limit }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const visibleServices = limit ? services.slice(0, limit) : services;

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="w-full relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {visibleServices.map((service) => (
          <motion.div
            layoutId={`card-${service.id}`}
            key={service.id}
            onClick={() => setSelectedId(service.id)}
            // --- THE MAGICAL HOVER CLASS ---
            // 1. group: allows children to react to hover
            // 2. hover:border-primary: Changes border to Purple/Blue on hover
            // 3. hover:shadow-primary/20: Adds a colored glow
            // 4. hover:bg-gradient-to-br: Adds a subtle tint
            className={`
              relative group cursor-pointer overflow-hidden rounded-[2rem] 
              bg-surface border border-foreground/5 shadow-sm 
              hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/60 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-surface hover:to-primary/5
              transition-all duration-300 h-[320px] flex flex-col justify-between p-6
            `}
          >
            {/* Background Image (Subtle) */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
               <img src={service.image} className="w-full h-full object-cover grayscale" alt="" />
            </div>

            {/* Top: Icon */}
            <div className="relative z-10">
              {/* Icon Container: Also glows on hover */}
              <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/40`}>
                <service.icon className="w-7 h-7" />
              </div>
              <motion.h3 layoutId={`title-${service.id}`} className="text-xl font-black text-foreground leading-tight mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </motion.h3>
              <p className="text-muted font-medium text-sm">{service.short}</p>
            </div>

            {/* Bottom: Action Hint */}
            <div className="relative z-10 flex justify-between items-center mt-4 pt-4 border-t border-foreground/5 group-hover:border-primary/10">
                <span className="text-xs font-bold text-muted uppercase tracking-wider group-hover:text-primary transition-colors">التفاصيل</span>
                <div className={`w-8 h-8 rounded-full ${service.bg} flex items-center justify-center text-foreground group-hover:bg-primary group-hover:text-white transition-colors`}>
                    <ArrowRight className="w-4 h-4" />
                </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Modal (No Changes needed here, it inherits the logic) */}
      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-dark/60 backdrop-blur-md cursor-pointer"
            />

            {services.map((service) => {
              if (service.id !== selectedId) return null;
              return (
                <motion.div
                  layoutId={`card-${service.id}`}
                  key={service.id}
                  className="w-full max-w-2xl bg-surface rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 max-h-[85vh] flex flex-col md:flex-row"
                >
                    <button 
                        onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                        className="absolute top-4 left-4 z-20 w-10 h-10 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white text-foreground transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    <div className="w-full md:w-2/5 relative h-48 md:h-auto">
                        <img src={service.image} className="w-full h-full object-cover" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-surface via-surface/20 to-transparent" />
                        
                        <div className="absolute bottom-6 right-6 md:top-10 md:right-10">
                            <div className={`w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-sm ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                                <service.icon className="w-7 h-7" />
                            </div>
                            <motion.h3 layoutId={`title-${service.id}`} className="text-2xl font-black text-foreground">
                                {service.title}
                            </motion.h3>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5 p-8 md:p-10 flex flex-col h-full overflow-y-auto">
                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-3">نبذة عن الخدمة</h4>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-sm font-bold text-muted uppercase tracking-widest mb-3">ماذا نقدم؟</h4>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <motion.li 
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 * i }}
                                        key={i} 
                                        className="flex items-center gap-3 font-medium text-foreground"
                                    >
                                        <CheckCircle2 className={`w-5 h-5 ${service.color}`} />
                                        {feature}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-auto pt-6 border-t border-foreground/5 flex gap-4">
                            <a href="/contact" className="flex-1 py-4 bg-primary text-white rounded-xl font-bold text-center shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                                ابدأ مشروعك
                            </a>
                        </div>
                    </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiquidServices;