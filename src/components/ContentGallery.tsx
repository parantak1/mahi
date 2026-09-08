import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Youtube, Instagram, Play, ExternalLink, X } from 'lucide-react';
import { MEDIA_POSTS, CREATOR_INFO } from '../data/portfolioData';
import { MediaPost } from '../types';
import { WashiTape, AlgorithmChartGraphic } from './HandDrawnDecorations';

export const ContentGallery: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<MediaPost | null>(null);

  // Lock body scroll when video modal is open
  useEffect(() => {
    if (selectedPost) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const viralReels = MEDIA_POSTS.filter((p) => p.isViral);

  return (
    <section className="relative py-16 md:py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-handwriting text-xl text-[#D97757] font-semibold block">
            chapter three °•.✧
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-handwriting font-bold text-[#3D3835]">
            content gallery & reels
          </h2>
          <p className="font-body text-[#6B645F] text-sm sm:text-base mt-1 max-w-lg mx-auto">
            a curated corkboard spotlight of viral reels and creative moments
          </p>
        </motion.div>
      </div>

      {/* SPECIAL SPOTLIGHT: Viral Reels & Beating the Algorithm Graphic */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="p-6 sm:p-8 bg-[#FFFDF9] sketch-border shadow-md relative overflow-hidden"
      >
        <WashiTape color="#F3C5C5" width="w-32" rotation={-2} className="-top-3 left-10" pattern="stripes" />
        <WashiTape color="#DCE7DA" width="w-28" rotation={2} className="-top-3 right-10" pattern="dots" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⚡</span>
              <h3 className="font-handwriting text-3xl sm:text-4xl font-bold text-[#3D3835]">
                spotlight: viral reels
              </h3>
            </div>
            <p className="font-body text-sm text-[#6B645F] mt-1">
              proof that when you post what you love, the world listens ✨
            </p>
          </div>

          {/* Social link pill */}
          <a
            href={CREATOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button bg-[#FAF6F0] text-[#3D3835] hover:bg-[#F3C5C5]/40 px-4 py-1.5 font-handwriting text-lg font-bold inline-flex items-center gap-1.5"
          >
            <Instagram className="w-4 h-4 text-[#D97757]" />
            <span>@mahiii.2811 on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5 text-[#8C7B73]" />
          </a>
        </div>

        {/* 2-Column Spotlight Grid: Left Algorithm Chart, Right 3 Viral Reel Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Cute Hand-Drawn Graph / Chart Graphic in background */}
          <div className="lg:col-span-5">
            <AlgorithmChartGraphic />
          </div>

          {/* 3 Featured Viral Reel Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {viralReels.map((reel) => (
              <div
                key={reel.id}
                onClick={() => setSelectedPost(reel)}
                className="cursor-pointer group relative bg-[#FAF6F0] p-2.5 sketch-border-sm hover:scale-[1.03] transition-all shadow-xs"
              >
                <div className="relative aspect-[9/14] rounded-xs overflow-hidden bg-black/10">
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                  {/* Play badge */}
                  <div className="absolute top-2 left-2 bg-[#3D3835]/80 text-white px-2 py-0.5 rounded-full text-[11px] font-body flex items-center gap-1">
                    <Play className="w-3 h-3 fill-white text-white" />
                    <span>Reel</span>
                  </div>

                  {/* Views count badge */}
                  <div className="absolute bottom-2 left-2 right-2 bg-[#FAF6F0]/95 backdrop-blur-xs px-2 py-1 rounded-xs border border-[#4A4542] text-center shadow-xs">
                    <span className="font-handwriting text-sm font-bold text-[#D97757] block leading-none">
                      {reel.views} Views 🔥
                    </span>
                  </div>
                </div>

                <div className="pt-2 px-1">
                  <p className="font-handwriting text-lg text-[#3D3835] font-semibold line-clamp-2 leading-tight">
                    {reel.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Interactive Modal to view Post / Video */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 z-50 bg-[#2D2825]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-[#FFFDF9] rounded-2xl sketch-border overflow-hidden shadow-2xl p-5 sm:p-7 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#FAF6F0] hover:bg-[#F3C5C5] text-[#3D3835] border border-[#4A4542] flex items-center justify-center transition-colors shadow-xs z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                {/* Media preview */}
                <div className="md:col-span-6 relative rounded-xl overflow-hidden bg-[#FAF6F0] border border-[#E8DFD8]">
                  <img
                    src={selectedPost.thumbnail}
                    alt={selectedPost.title}
                    referrerPolicy="no-referrer"
                    className="w-full object-cover max-h-96"
                  />
                  {selectedPost.type === 'youtube' && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <div className="w-14 h-14 rounded-full bg-[#E07A5F] text-white flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-handwriting text-lg text-[#D97757] font-semibold">
                        {selectedPost.type === 'youtube'
                          ? '@mahi_this_side'
                          : '@mahiii.2811'}
                      </span>
                      <span className="text-xs text-[#8C7B73]">• {selectedPost.date}</span>
                    </div>

                    <h3 className="font-handwriting text-3xl font-bold text-[#3D3835] leading-snug">
                      {selectedPost.title}
                    </h3>

                    <p className="font-body text-sm text-[#4A4542] mt-3 leading-relaxed">
                      {selectedPost.caption}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {selectedPost.tags.map((t) => (
                        <span
                          key={t}
                          className="font-handwriting text-sm text-[#8C7B73] bg-[#FAF6F0] px-2.5 py-0.5 rounded-full border border-[#D6CBC1]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-6 pt-4 border-t border-[#E8DFD8] flex flex-col gap-2.5">
                    <a
                      href={selectedPost.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-button bg-[#E07A5F] text-white hover:bg-[#D96B4E] px-5 py-2.5 font-handwriting text-xl font-bold flex items-center justify-center gap-2 w-full text-center"
                    >
                      {selectedPost.type === 'youtube' ? (
                        <>
                          <Youtube className="w-5 h-5" />
                          <span>Watch Full Video on YouTube</span>
                        </>
                      ) : (
                        <>
                          <Instagram className="w-5 h-5" />
                          <span>View on Instagram</span>
                        </>
                      )}
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <p className="text-center font-handwriting text-sm text-[#8C7B73]">
                      thank you for supporting spontaneous creation 🤍
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
