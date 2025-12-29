import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Palette, LineChart, Globe, 
  Smartphone, Database, Layout, Search, 
  Megaphone, PenTool, ShieldCheck, 
  ArrowUpLeft, CheckCircle2 
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'جميع الخدمات' },
  { id: 'dev', label: 'تطوير وبرمجة' },
  { id: 'design', label: 'تصميم وإبداع' },
  { id: 'marketing', label: 'تسويق ونمو' },
  { id: 'tech', label: 'حلول تقنية' },
];

const services = [
  // --- Development (Blue) ---
  {
    id: 1,
    category: 'dev',
    title: "مواقع الشركات والمؤسسات",
    description: "واجهتك الرقمية الأولى. نصمم مواقع تعريفية تعكس هوية شركتك.",
    features: ["لوحة تحكم (CMS)", "SEO", "واتساب", "لغات متعددة"],
    icon: Layout,
    color: "text-dev",
    bg: "bg-dev/10"
  },
  {
    id: 2,
    category: 'dev',
    title: "المتاجر الإلكترونية",
    description: "حول زوارك إلى مشترين مع متاجر متكاملة.",
    features: ["إدارة المخزون", "كوبونات", "تتبع الشحنات", "تقارير"],
    icon: Globe,
    color: "text-dev",
    bg: "bg-dev/10"
  },
  
  // --- Design (Pink/Purple) ---
  {
    id: 4,
    category: 'design',
    title: "الهوية البصرية",
    description: "نصنع شخصية بصرية كاملة لعلامتك التجارية.",
    features: ["الشعار", "دليل الهوية", "المطبوعات", "سوشيال ميديا"],
    icon: Palette,
    color: "text-design",
    bg: "bg-design/10"
  },
  {
    id: 5,
    category: 'design',
    title: "تجربة المستخدم (UI/UX)",
    description: "واجهات تركز على سهولة الاستخدام.",
    features: ["Wireframing", "Prototyping", "تحليل السلوك", "تجديد الواجهات"],
    icon: PenTool,
    color: "text-design",
    bg: "bg-design/10"
  },

  // --- Marketing (Orange) ---
  {
    id: 6,
    category: 'marketing',
    title: "تحسين محركات البحث",
    description: "تصدر نتائج البحث الأولى في جوجل.",
    features: ["Keywords", "Speed", "Backlinks", "Content"],
    icon: Search,
    color: "text-marketing",
    bg: "bg-marketing/10"
  },
  {
    id: 7,
    category: 'marketing',
    title: "إدارة التواصل الاجتماعي",
    description: "نبني مجتمعاً حول علامتك التجارية.",
    features: ["خطة محتوى", "تصميمات", "إدارة حملات", "تقارير"],
    icon: Megaphone,
    color: "text-marketing",
    bg: "bg-marketing/10"
  },

  // --- Tech (Emerald) ---
  {
    id: 9,
    category: 'tech',
    title: "الأمن والحماية",
    description: "حماية أصولك الرقمية من الاختراقات.",
    features: ["SSL", "DDoS", "Backup", "Penetration Testing"],
    icon: ShieldCheck,
    color: "text-tech",
    bg: "bg-tech/10"
  },
   {
    id: 8,
    category: 'tech',
    title: "تطبيقات الجوال",
    description: "تطبيقات نيتف وهجينة تعمل على iOS وأندرويد.",
    features: ["React Native", "Notifications", "App Store", "Maintenance"],
    icon: Smartphone,
    color: "text-tech",
    bg: "bg-tech/10"
  },
];

const ServicesHub = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="w-full">
      {/* Navigation Pills */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              relative px-6 py-3 rounded-full text-sm font-bold transition-all duration-300
              ${activeCategory === cat.id ? 'text-white shadow-lg shadow-primary/25' : 'text-muted hover:text-foreground bg-surface border border-slate-200'}
            `}
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activePill"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode='popLayout'>
          {filteredServices.map((service) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-surface rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    <ArrowUpLeft className="w-4 h-4" />
                </div>
              </div>

              <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed text-sm mb-8 h-20">
                {service.description}
              </p>

              <div className="space-y-3 mb-8 border-t border-slate-50 pt-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-muted">
                    <CheckCircle2 className={`w-4 h-4 ${service.color}`} />
                    {feature}
                  </div>
                ))}
              </div>

              <a 
                href="/contact" 
                className="block w-full py-3 rounded-xl bg-slate-50 text-foreground font-bold text-center border border-slate-100 hover:bg-dark hover:text-white transition-colors duration-300"
              >
                طلب عرض سعر
              </a>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ServicesHub;