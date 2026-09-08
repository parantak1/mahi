import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Handshake, MapPin, Package, Heart, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { HIGHLIGHTS_DATA } from '../data/portfolioData';
import { HighlightItem } from '../types';
import { WashiTape, PushPin, DoodleStar } from './HandDrawnDecorations';

interface HighlightsReelProps {
  onSelectHighlight?: (highlight: HighlightItem) => void;
}

export const HighlightsReel: React.FC<HighlightsReelProps> = () => {
  const [selectedHighlight, setSelectedHighlight] = useState<HighlightItem | null>(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [likedStories, setLikedStories] = useState<Record<string, boolean>>({});

  // Lock body scroll when story modal is active
  useEffect(() => {
    if (selectedHighlight) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedHighlight]);

  const handleOpenHighlight = (item: HighlightItem) => {
    setSelectedHighlight(item);
    setActiveStoryIndex(0);
  };

  const handleClose = () => {
    setSelectedHighlight(null);
  };

  const handleNextStory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedHighlight) return;
    if (activeStoryIndex < selectedHighlight.stories.length - 1) {
      setActiveStoryIndex((prev) => prev + 1);
    } else {
      // Loop or close
      handleClose();
    }
  };

  const handlePrevStory = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeStoryIndex > 0) {
      setActiveStoryIndex((prev) => prev - 1);
    }
  };

  const toggleStoryLike = (e: React.MouseEvent, storyId: string) => {
    e.stopPropagation();
    setLikedStories((prev) => ({
      ...prev,
      [storyId]: !prev[storyId],
    }));
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'COLLABS':
        return <Handshake className="w-5 h-5 text-[#D97757]" />;
      case 'Vrindavan 📍':
        return <MapPin className="w-5 h-5 text-[#C86446]" />;
      case 'PR':
        return <Package className="w-5 h-5 text-[#5E3B29]" />;
      case 'her.':
      default:
        return <Sparkles className="w-5 h-5 text-[#E8A598]" />;
    }
  };

  return (
    <section className="relative py-16 md:py-24 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-handwriting text-xl text-[#D97757] font-semibold block">
            chapter two °•.✧
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-handwriting font-bold text-[#3D3835]">
            the highlights reel
          </h2>
          <p className="font-body text-[#6B645F] text-sm sm:text-base mt-1 max-w-md mx-auto">
            pinned polaroids from Instagram story archives. click any snapshot to flip through the diary!
          </p>
        </motion.div>
      </div>

      {/* Floating Polaroids Reel Container */}
      <div className="relative py-6">
        {/* Subtle clothesline / string across top */}
        <div className="hidden sm:block absolute top-8 left-6 right-6 h-[1.5px] bg-[#D6CBC1] border-b border-dashed border-[#8C7B73] z-0 opacity-70" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
          {HIGHLIGHTS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() => handleOpenHighlight(item)}
              className="cursor-pointer group relative flex flex-col items-center"
            >
              {/* Wooden clothespin / pushpin */}
              <PushPin color={item.tapeColor} className="-top-3 left-1/2 -translate-x-1/2" />
              <WashiTape
                color={item.tapeColor}
                width="w-20"
                rotation={item.rotation > 0 ? 5 : -5}
                className="-top-2"
                pattern={index % 2 === 0 ? 'stripes' : 'dots'}
              />

              {/* Polaroid Frame */}
              <div
                className="bg-[#FFFDF9] p-3.5 sm:p-4 sketch-border shadow-md transition-all duration-300 w-full"
                style={{
                  transform: `rotate(${item.rotation}deg)`,
                }}
              >
                {/* Photo with inner subtle border */}
                <div className="relative aspect-square overflow-hidden rounded-xs bg-[#FAF6F0] border border-[#E8DFD8]">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-108"
                  />
                  {/* Category Doodle Badge */}
                  <div className="absolute top-2 right-2 bg-[#FFFDF9]/95 backdrop-blur-xs p-1.5 rounded-full border border-[#4A4542] shadow-xs">
                    {getCategoryIcon(item.category)}
                  </div>

                  {/* Story Count Pill */}
                  <div className="absolute bottom-2 left-2 bg-[#3D3835]/80 text-[#FAF6F0] text-[11px] font-body px-2 py-0.5 rounded-full backdrop-blur-xs">
                    {item.stories.length} stories
                  </div>
                </div>

                {/* Handwritten Label on Polaroid bottom */}
                <div className="pt-3 pb-1 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <span className="text-lg">{item.doodle}</span>
                    <h3 className="font-handwriting text-2xl sm:text-3xl font-bold text-[#3D3835] group-hover:text-[#D97757] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <span className="font-handwriting text-sm text-[#8C7B73] block mt-0.5">
                    {item.date} ✧
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interactive Story Modal with Soft Bounce Animation */}
      <AnimatePresence>
        {selectedHighlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-[#2D2825]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            {/* Story Card Container */}
            <motion.div
              initial={{ scale: 0.85, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 22, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm sm:max-w-md bg-[#FAF6F0] rounded-2xl sketch-border overflow-hidden shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 z-30 w-9 h-9 rounded-full bg-[#3D3835]/70 hover:bg-[#3D3835] text-white flex items-center justify-center transition-colors shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Progress Bars for Stories */}
              <div className="absolute top-3 left-3 right-14 z-30 flex items-center gap-1.5">
                {selectedHighlight.stories.map((story, i) => (
                  <div
                    key={story.id}
                    className="h-1 flex-1 bg-white/40 rounded-full overflow-hidden"
                  >
                    <div
                      className={`h-full bg-white transition-all duration-300 ${
                        i < activeStoryIndex
                          ? 'w-full'
                          : i === activeStoryIndex
                          ? 'w-full animate-pulse'
                          : 'w-0'
                      }`}
                    />
                  </div>
                ))}
              </div>

              {/* Story Header Info */}
              <div className="absolute top-7 left-3 z-30 flex items-center gap-2 text-white drop-shadow-md">
                <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-white/20">
                  <img
                    src={selectedHighlight.coverImage}
                    alt={selectedHighlight.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="font-handwriting text-lg font-bold text-white block leading-none">
                    {selectedHighlight.title}
                  </span>
                  <span className="text-[11px] font-body opacity-90">
                    {selectedHighlight.stories[activeStoryIndex]?.timeAgo}
                  </span>
                </div>
              </div>

              {/* Story Media Viewer */}
              <div className="relative aspect-[9/14] w-full bg-black/90">
                <img
                  src={selectedHighlight.stories[activeStoryIndex]?.image}
                  alt={selectedHighlight.stories[activeStoryIndex]?.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Subtle vignette gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 pointer-events-none" />

                {/* Left/Right Click Nav areas */}
                <div
                  onClick={handlePrevStory}
                  className="absolute inset-y-0 left-0 w-1/3 z-20 cursor-pointer flex items-center pl-2 opacity-0 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center">
                    <ChevronLeft className="w-5 h-5" />
                  </div>
                </div>
                <div
                  onClick={handleNextStory}
                  className="absolute inset-y-0 right-0 w-1/3 z-20 cursor-pointer flex items-center justify-end pr-2 opacity-0 hover:opacity-80 transition-opacity"
                >
                  <div className="w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Story Tag if present */}
                {selectedHighlight.stories[activeStoryIndex]?.tag && (
                  <div className="absolute top-16 right-3 z-20 bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/40 text-white text-xs font-body">
                    {selectedHighlight.stories[activeStoryIndex]?.tag}
                  </div>
                )}

                {/* Caption at bottom */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-20 text-white">
                  <p className="font-handwriting text-2xl font-semibold leading-snug drop-shadow-sm text-[#FAF6F0]">
                    {selectedHighlight.stories[activeStoryIndex]?.caption}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/20">
                    <span className="font-body text-xs text-white/80">
                      Story {activeStoryIndex + 1} of {selectedHighlight.stories.length}
                    </span>
                    <button
                      onClick={(e) =>
                        toggleStoryLike(
                          e,
                          selectedHighlight.stories[activeStoryIndex]?.id || 's'
                        )
                      }
                      className="flex items-center gap-1.5 text-xs font-body px-3 py-1.5 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition-all active:scale-95"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          likedStories[selectedHighlight.stories[activeStoryIndex]?.id]
                            ? 'text-[#E07A5F] fill-[#E07A5F]'
                            : 'text-white'
                        }`}
                      />
                      <span>
                        {likedStories[selectedHighlight.stories[activeStoryIndex]?.id]
                          ? 'Loved it!'
                          : 'Send Love'}
                      </span>
                    </button>
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
