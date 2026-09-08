import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Youtube, Instagram, Mail, ArrowUp, Copy, Check, Heart, Sparkles } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';
import { WashiTape, PushPin, PaperPlaneDoodle, DoodleStar } from './HandDrawnDecorations';

export const FooterSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(CREATOR_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 pt-16 pb-12 px-4 bg-[#F5EFEB] border-t-2 border-[#4A4542] overflow-hidden">
      {/* Journal Page Background pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 28px, #E2D7CE 29px)',
        }}
      />

      {/* Coffee ring stain doodle in background */}
      <div className="absolute -bottom-10 -right-10 pointer-events-none opacity-20">
        <svg width="220" height="220" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="38" stroke="#8C7B73" strokeWidth="6" fill="none" strokeDasharray="30 4" />
          <circle cx="50" cy="50" r="42" stroke="#8C7B73" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Washi tape pinned at top of footer */}
        <WashiTape color="#F7D8DA" width="w-36" rotation={-1} className="-top-19 left-1/2 -translate-x-1/2" pattern="stripes" />

        {/* Header doodle */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <DoodleStar size={20} color="#D97757" />
          <span className="font-handwriting text-2xl font-bold text-[#D97757]">
            last page of the scrapbook °•.✧
          </span>
          <DoodleStar size={20} color="#D97757" />
        </div>

        <h3 className="text-4xl sm:text-5xl md:text-6xl font-handwriting font-bold text-[#3D3835]">
          let's connect & collaborate
        </h3>
        <p className="font-body text-[#6B645F] text-sm sm:text-base mt-2 max-w-md mx-auto">
          open for thoughtful brand collabs, photography projects, PR gifting, or just sharing creative ideas.
        </p>

        {/* Paper Plane Email Box with Animated Flight */}
        <div className="mt-8 inline-block max-w-md w-full">
          <div className="notebook-paper p-5 sm:p-6 sketch-border shadow-md relative group transition-all duration-300 hover:-translate-y-1">
            <PushPin color="#D97757" className="-top-3 right-6" />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-left">
                {/* Clickable Mailto with Paper Plane Animation */}
                <a
                  href={`mailto:${CREATOR_INFO.email}`}
                  className="w-12 h-12 rounded-full bg-[#FAF6F0] border-2 border-[#4A4542] flex items-center justify-center shadow-xs transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                >
                  <PaperPlaneDoodle className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>

                <div>
                  <span className="text-xs font-body uppercase tracking-wider text-[#8C7B73] block">
                    send a digital letter 💌
                  </span>
                  <a
                    href={`mailto:${CREATOR_INFO.email}`}
                    className="font-handwriting text-2xl sm:text-3xl font-bold text-[#3D3835] hover:text-[#D97757] transition-colors break-all"
                  >
                    {CREATOR_INFO.email}
                  </a>
                </div>
              </div>

              {/* Copy email button */}
              <button
                onClick={handleCopyEmail}
                className="sketch-button bg-[#FAF6F0] text-[#3D3835] hover:bg-[#FDEED9] p-2 text-xs font-body flex items-center gap-1 rounded-lg"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#D97757]" />
                    <span className="font-handwriting text-base">copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#8C7B73]" />
                    <span className="font-handwriting text-base">copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Links Grid */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* YouTube Link */}
          <a
            href={CREATOR_INFO.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button bg-[#FFFDF9] hover:bg-[#F3C5C5]/40 text-[#3D3835] px-6 py-3 font-handwriting text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 group w-full sm:w-auto touch-manipulation active:scale-98"
          >
            <Youtube className="w-6 h-6 text-[#E07A5F] transition-transform group-hover:scale-115" />
            <span>YouTube: {CREATOR_INFO.youtubeHandle}</span>
          </a>

          {/* Instagram Link */}
          <a
            href={CREATOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-button bg-[#FFFDF9] hover:bg-[#FDEED9]/50 text-[#3D3835] px-6 py-3 font-handwriting text-xl sm:text-2xl font-bold flex items-center justify-center gap-2 group w-full sm:w-auto touch-manipulation active:scale-98"
          >
            <Instagram className="w-6 h-6 text-[#D97757] transition-transform group-hover:scale-115" />
            <span>Instagram: {CREATOR_INFO.handle}</span>
          </a>
        </div>

        {/* Sign-off: "Made with 🤍 in Prayagraj." */}
        <div className="mt-12 pt-8 border-t border-[#D6CBC1] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-handwriting text-2xl sm:text-3xl text-[#3D3835] font-bold">
              Made with 🤍 in Prayagraj.
            </span>
            <span className="font-handwriting text-lg text-[#8C7B73]">
              (Sangam city vibes)
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-[#8C7B73]">
              © {new Date().getFullYear()} Mahi. all doodles & memories reserved.
            </span>

            {/* Back to top doodle button */}
            <button
              onClick={scrollToTop}
              className="sketch-button bg-[#FFFDF9] text-[#3D3835] hover:bg-[#FAF6F0] p-2 rounded-full"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
