import React from 'react';
import { motion } from 'motion/react';
import { Camera, Heart, Sparkles, Compass, Film } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { WashiTape, PushPin, DoodleStar, DoodleSparkleCluster } from './HandDrawnDecorations';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 px-4 max-w-6xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-handwriting text-xl text-[#D97757] font-semibold block">
            chapter one °•.✧
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-handwriting font-bold text-[#3D3835]">
            about me & my vibe
          </h2>
          <p className="font-body text-[#6B645F] text-sm sm:text-base mt-1 max-w-md mx-auto">
            a little window into who is behind the lens and why I refuse to be boxed in
          </p>
        </motion.div>
      </div>

      {/* Asymmetrical Scrapbook Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Soft Cinematic Illustration of Girl holding phone/camera */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 flex flex-col items-center relative"
        >
          {/* Main Polaroid / Sketch frame holding cinematic camera photo */}
          <div className="relative p-4 sm:p-5 bg-[#FFFDF9] sketch-border shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-sm">
            <PushPin color="#D97757" className="-top-3.5 right-10" />
            <WashiTape color="#F7D8DA" width="w-24" rotation={-4} className="-top-3 left-6" pattern="stripes" />

            {/* Photo */}
            <div className="relative overflow-hidden rounded-lg bg-[#F5EFEB] border border-[#E5DAD2]">
              <img
                src={CREATOR_INFO.cameraPhoto}
                alt="Mahi with camera creating content"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-3 left-3 bg-[#3D3835]/80 text-[#FAF6F0] px-2.5 py-1 rounded-full text-xs font-body flex items-center gap-1.5 backdrop-blur-xs">
                <Camera className="w-3.5 h-3.5 text-[#F3C5C5]" />
                <span>behind the lens</span>
              </div>
            </div>

            {/* Handwritten Caption beneath Polaroid */}
            <div className="pt-4 pb-1 text-center">
              <p className="font-handwriting text-2xl text-[#3D3835] font-bold">
                "catching quiet light & messy thoughts"
              </p>
              <span className="font-handwriting text-sm text-[#8C7B73]">
                prayagraj • 35mm warm tone ✧
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Manifesto & Subtle Stats Ticker */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          {/* Bio Notebook card */}
          <div className="notebook-paper p-6 sm:p-8 sketch-border-sm relative shadow-md">
            <WashiTape color="#DCE7DA" width="w-28" rotation={3} className="-top-3 right-8" pattern="dots" />

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📖</span>
              <span className="font-handwriting text-2xl font-bold text-[#D97757]">
                about me
              </span>
            </div>

            <p className="font-body text-[#4A4542] text-base sm:text-lg leading-relaxed">
              {CREATOR_INFO.bio}
            </p>

            {/* Handwritten highlight quote */}
            <div className="mt-5 p-3.5 bg-[#FAF6F0] rounded-xl border-l-4 border-[#D97757]">
              <p className="font-handwriting text-2xl sm:text-3xl text-[#5E3B29] font-semibold">
                "{CREATOR_INFO.quote}"
              </p>
            </div>

            {/* Little tags */}
            <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-[#E8DFD8]">
              {['✨ Spontaneous creation', '📍 Prayagraj ghats', '☕ Chai & talks', '🎞️ Vintage colorways', '🛕 Vrindavan journals'].map((tag) => (
                <span
                  key={tag}
                  className="font-handwriting text-lg px-3 py-0.5 rounded-full bg-[#FAF6F0] border border-[#D6CBC1] text-[#3D3835] hover-wiggle"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Ticker (Subtle & Cute Animated Counter as requested) */}
          <div className="p-5 bg-[#FFFDF9] sketch-border-sm shadow-sm relative">
            <div className="flex items-center justify-between mb-3 border-b border-dashed border-[#D6CBC1] pb-2">
              <span className="font-handwriting text-xl font-bold text-[#3D3835] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#D97757]" />
                community & cadence
              </span>
              <span className="font-body text-xs text-[#8C7B73] bg-[#FAF6F0] px-2 py-0.5 rounded-full">
                live snapshot
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 text-center">
              {/* Stat 1: ~2.7K+ Friends (Followers) */}
              <div className="p-2.5 sm:p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD8] hover:scale-105 transition-transform">
                <span className="font-handwriting text-2xl sm:text-4xl font-bold text-[#D97757] block">
                  ~2.7K+
                </span>
                <span className="font-body text-[11px] sm:text-sm text-[#6B645F] font-semibold block mt-0.5 leading-tight">
                  Friends (Followers)
                </span>
              </div>

              {/* Stat 2: Always Creating */}
              <div className="p-2.5 sm:p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD8] hover:scale-105 transition-transform">
                <span className="font-handwriting text-xl sm:text-3xl font-bold text-[#3D3835] block pt-1">
                  Always ✧
                </span>
                <span className="font-body text-[11px] sm:text-sm text-[#6B645F] font-semibold block mt-0.5 leading-tight">
                  Creating
                </span>
              </div>

              {/* Stat 3: Total Impressions */}
              <div className="p-2.5 sm:p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD8] hover:scale-105 transition-transform">
                <span className="font-handwriting text-2xl sm:text-4xl font-bold text-[#C86446] block">
                  {CREATOR_INFO.totalViews}
                </span>
                <span className="font-body text-[11px] sm:text-sm text-[#6B645F] font-semibold block mt-0.5 leading-tight">
                  Video Views
                </span>
              </div>

              {/* Stat 4: Stories shared */}
              <div className="p-2.5 sm:p-3 bg-[#FAF6F0] rounded-xl border border-[#E8DFD8] hover:scale-105 transition-transform">
                <span className="font-handwriting text-2xl sm:text-4xl font-bold text-[#5E3B29] block">
                  {CREATOR_INFO.storiesCount}
                </span>
                <span className="font-body text-[11px] sm:text-sm text-[#6B645F] font-semibold block mt-0.5 leading-tight">
                  Stories Shared
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
