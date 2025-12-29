import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* 1. Grain Texture (Static noise for texture) */}
      <div 
        className="absolute inset-0 opacity-[0.04] z-10 mix-blend-overlay"
        style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 2. Interactive/Moving Gradients */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0],
          x: [0, 50, -50, 0],
          y: [0, 30, -30, 0]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[100px] mix-blend-multiply"
      />

      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -30, 30, 0], 
          y: [0, 50, -50, 0]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          repeatType: "mirror", 
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-purple-200/40 rounded-full blur-[120px] mix-blend-multiply"
      />

      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 40, -40, 0],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          repeatType: "mirror",
          ease: "easeInOut",
          delay: 5
        }}
        className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] bg-blue-200/30 rounded-full blur-[90px] mix-blend-multiply"
      />

      {/* 3. Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
    </div>
  );
}