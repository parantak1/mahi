import React from 'react';
import { motion } from 'motion/react';
import { Youtube, Instagram, MapPin, Sparkles, Heart } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { WashiTape, PushPin, DoodleStar, DoodleSparkleCluster } from './HandDrawnDecorations';

interface HeroSectionProps {
  onOpenYoutubeModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenYoutubeModal }) => {
  return (
    <section className="relative pt-10 pb-14 md:pt-20 md:pb-24 px-4 max-w-4xl mx-auto text-center flex flex-col items-center overflow-x-hidden">
      {/* Decorative floating top sparkle */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
      >
        <span className="font-handwriting text-base sm:text-lg md:text-xl text-[#8C7B73] bg-[#F5EFEB] px-3.5 py-1 rounded-full border border-[#E0D5CC] shadow-2xs flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D97757]" />
          welcome to my cozy scrapbook
          <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#E8A598] fill-[#E8A598]" />
        </span>
      </motion.div>

      {/* Profile Picture with Prominent Animated Hand-Drawn Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative my-4 sm:my-6 group"
      >
        {/* Pushpin at top center */}
        <PushPin color="#D97757" className="-top-4 left-1/2 -translate-x-1/2" />

        {/* Washi Tape on corners */}
        <WashiTape color="#F7D8DA" width="w-16 sm:w-20" rotation={-7} className="-top-3 -left-2 sm:-left-4" pattern="stripes" />
        <WashiTape color="#DCE7DA" width="w-16 sm:w-20" rotation={6} className="-bottom-3 -right-2 sm:-right-4" pattern="dots" />

        {/* Outer sketchy frame with animated wiggle on hover */}
        <div className="p-3 sm:p-4 bg-[#FFFDF9] sketch-border shadow-md transition-all duration-300 group-hover:rotate-1 group-hover:scale-[1.02]">
          {/* Inner dashed doodle border */}
          <div className="relative p-1 border-2 border-dashed border-[#D6CBC1] rounded-2xl overflow-hidden bg-[#FAF6F0]">
            {/* The profile picture */}
            <img
              src={CREATOR_INFO.profileImage}
              alt="Mahi in dark dress with traditional Indian jhumka earrings"
              referrerPolicy="no-referrer"
              className="w-44 h-44 sm:w-60 sm:h-60 object-cover object-center rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Little floating doodle badge */}
            <div className="absolute bottom-2 right-2 sm:bottom-2.5 sm:right-2.5 bg-[#FFFDF9]/90 backdrop-blur-xs px-2.5 py-1 rounded-full border border-[#4A4542] shadow-xs flex items-center gap-1">
              <span className="font-handwriting text-xs sm:text-sm text-[#3D3835] font-semibold">
                mahi ✿
              </span>
            </div>
          </div>
        </div>

        {/* Small floating stars around frame */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-3 -right-4 sm:-right-5 pointer-events-none"
        >
          <DoodleStar size={24} color="#D97757" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-2 -left-4 sm:-left-6 pointer-events-none"
        >
          <DoodleStar size={20} color="#E8A598" />
        </motion.div>
      </motion.div>

      {/* Headline: mahi °•.✧°.• */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-1"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-handwriting font-bold tracking-wide text-[#3D3835] drop-shadow-xs flex items-center justify-center gap-2 flex-wrap">
          <span>{CREATOR_INFO.name}</span>
          <span className="text-2xl sm:text-4xl md:text-5xl text-[#D97757] inline-block font-normal transform -rotate-2">
            {CREATOR_INFO.sparkles}
          </span>
        </h1>
      </motion.div>

      {/* Subheadline: Digital creator | Prayagraj, UP IN 📍 */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-2 text-lg sm:text-xl text-[#6B645F] font-body font-medium flex items-center justify-center gap-1.5 flex-wrap"
      >
        <span>Digital creator</span>
        <span className="text-[#BAABA0]">•</span>
        <span className="inline-flex items-center text-[#5E3B29] font-semibold">
          <MapPin className="w-4 h-4 text-[#D97757] inline mr-1" />
          Prayagraj, UP IN
        </span>
      </motion.p>

      {/* Tagline Manifesto on Torn Lined Paper */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 sm:mt-8 max-w-lg w-full relative"
      >
        {/* Washi tape pinning the note */}
        <WashiTape color="#FDEED9" width="w-28" rotation={-3} className="-top-3 left-1/2 -translate-x-1/2" pattern="dots" />

        <div className="notebook-paper p-5 sm:p-6 sketch-border-sm transform -rotate-1 hover:rotate-0 transition-transform duration-300 relative">
          <span className="font-handwriting text-xs text-[#8C7B73] block mb-1 uppercase tracking-widest">
            — creator manifesto —
          </span>
          <p className="font-handwriting text-2xl sm:text-3xl md:text-4xl text-[#3D3835] font-bold leading-snug">
            "{CREATOR_INFO.tagline}"
          </p>
          <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#E8DFD8] text-xs font-body text-[#8C7B73]">
            <span>unfiltered • spontaneous • heartfelt</span>
            <span className="font-handwriting text-sm text-[#D97757]">mahi's diary ✧</span>
          </div>
        </div>
      </motion.div>

      {/* CTA Buttons: Hand-drawn "Watch my YouTube" and "Follow on Instagram" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
      >
        {/* YouTube CTA */}
        <a
          href={CREATOR_INFO.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sketch-button bg-[#E07A5F] text-[#FFFDF9] hover:bg-[#D96B4E] px-7 py-3 font-handwriting text-2xl font-bold flex items-center justify-center gap-2.5 w-full sm:w-auto group"
        >
          <Youtube className="w-6 h-6 transition-transform group-hover:scale-115" />
          <span>Watch my YouTube</span>
        </a>

        {/* Instagram CTA */}
        <a
          href={CREATOR_INFO.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="sketch-button bg-[#FFFDF9] text-[#3D3835] hover:bg-[#F5EFEB] px-7 py-3 font-handwriting text-2xl font-bold flex items-center justify-center gap-2.5 w-full sm:w-auto group"
        >
          <Instagram className="w-6 h-6 text-[#D97757] transition-transform group-hover:scale-115" />
          <span>Follow on Instagram</span>
        </a>
      </motion.div>

      {/* Playful scroll cue */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="mt-12 text-[#8C7B73] flex flex-col items-center gap-1 font-handwriting text-lg"
      >
        <span>flip the page ↓</span>
        <span className="text-xs font-body tracking-wider text-[#A89A90]">explore the scrapbook</span>
      </motion.div>
    </section>
  );
};
