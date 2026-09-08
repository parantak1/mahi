import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { DoodleStar, PaperPlaneDoodle } from './HandDrawnDecorations';

export const FloatingDoodles: React.FC = () => {
  const { scrollY } = useScroll();

  // Gentle parallax transforms based on scroll
  const y1 = useTransform(scrollY, [0, 2000], [0, -140]);
  const y2 = useTransform(scrollY, [0, 2000], [0, -260]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -80]);
  const y4 = useTransform(scrollY, [0, 2000], [0, -320]);
  const rot1 = useTransform(scrollY, [0, 2000], [0, 45]);
  const rot2 = useTransform(scrollY, [0, 2000], [-12, -50]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Top Left Star */}
      <motion.div
        style={{ y: y1 }}
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-24 left-[6%] opacity-60"
      >
        <DoodleStar size={28} color="#D97757" />
      </motion.div>

      {/* Top Right Floating Paper Plane */}
      <motion.div
        style={{ y: y2, rotate: rot1 }}
        animate={{ x: [0, 8, 0], y: [0, -12, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-[8%] opacity-70"
      >
        <PaperPlaneDoodle className="scale-90" />
      </motion.div>

      {/* Mid Left Sparkle Cluster */}
      <motion.div
        style={{ y: y3 }}
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[48%] left-[4%] opacity-50 font-handwriting text-2xl text-[#8C7B73]"
      >
        ✧ • ｡ ⋆
      </motion.div>

      {/* Mid Right Floating Mini Polaroid doodle */}
      <motion.div
        style={{ y: y4, rotate: rot2 }}
        className="absolute top-[55%] right-[5%] opacity-55 hidden sm:block"
      >
        <div className="w-16 h-20 bg-white p-1.5 shadow-sm border border-[#3D3835] rounded-xs transform rotate-6">
          <div className="w-full h-12 bg-[#F3D5C5]/60 rounded-xs flex items-center justify-center text-xs">
            🌸
          </div>
          <span className="font-handwriting text-[10px] text-[#8C7B73] block text-center mt-1">
            prayagraj
          </span>
        </div>
      </motion.div>

      {/* Bottom Left Floating Star */}
      <motion.div
        style={{ y: y2 }}
        animate={{ rotate: [0, -15, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[78%] left-[8%] opacity-60"
      >
        <DoodleStar size={24} color="#E8A598" />
      </motion.div>

      {/* Bottom Right Sparkles */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-[82%] right-[10%] opacity-50 font-handwriting text-xl text-[#D97757]"
      >
        °•.✧°.•
      </motion.div>
    </div>
  );
};
