import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, Instagram } from 'lucide-react';
import { CREATOR_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E8DFD8]">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-1.5 group text-left touch-manipulation min-h-[44px]"
        >
          <span className="font-handwriting text-3xl font-bold text-[#3D3835] group-hover:text-[#D97757] transition-colors">
            {CREATOR_INFO.name}
          </span>
          <span className="font-handwriting text-xl text-[#D97757] select-none">
            {CREATOR_INFO.sparkles}
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => scrollToSection('about-section')}
            className="font-handwriting text-2xl text-[#6B645F] hover:text-[#3D3835] transition-colors hover:scale-105"
          >
            about & vibe
          </button>
          <button
            onClick={() => scrollToSection('highlights-section')}
            className="font-handwriting text-2xl text-[#6B645F] hover:text-[#3D3835] transition-colors hover:scale-105"
          >
            highlights reel
          </button>
          <button
            onClick={() => scrollToSection('gallery-section')}
            className="font-handwriting text-2xl text-[#6B645F] hover:text-[#3D3835] transition-colors hover:scale-105"
          >
            reels & spotlight
          </button>
          <button
            onClick={() => scrollToSection('guestbook-section')}
            className="font-handwriting text-2xl text-[#6B645F] hover:text-[#3D3835] transition-colors hover:scale-105"
          >
            guestbook
          </button>
          <button
            onClick={() => scrollToSection('contact-section')}
            className="sketch-button bg-[#FFFDF9] hover:bg-[#F3C5C5]/40 text-[#3D3835] px-4 py-1 font-handwriting text-xl font-bold flex items-center gap-1.5"
          >
            <span>say hi 💌</span>
          </button>
        </nav>

        {/* Mobile Hamburger Menu button */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href={CREATOR_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-[#3D3835] touch-manipulation flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 text-[#D97757]" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-[#3D3835] rounded-lg hover:bg-[#F5EFEB] active:bg-[#E8DFD8] touch-manipulation flex items-center justify-center"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Backdrop and Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#2D2825]/40 backdrop-blur-xs flex flex-col justify-start">
          <div
            className="fixed inset-0"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 bg-[#FFFDF9] border-b-2 border-[#4A4542] px-6 py-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 text-center">
              <button
                onClick={() => scrollToSection('about-section')}
                className="font-handwriting text-2xl text-[#3D3835] py-2.5 border-b border-dashed border-[#E8DFD8] active:bg-[#FAF6F0] rounded-lg touch-manipulation"
              >
                about & vibe
              </button>
              <button
                onClick={() => scrollToSection('highlights-section')}
                className="font-handwriting text-2xl text-[#3D3835] py-2.5 border-b border-dashed border-[#E8DFD8] active:bg-[#FAF6F0] rounded-lg touch-manipulation"
              >
                highlights reel 🪞
              </button>
              <button
                onClick={() => scrollToSection('gallery-section')}
                className="font-handwriting text-2xl text-[#3D3835] py-2.5 border-b border-dashed border-[#E8DFD8] active:bg-[#FAF6F0] rounded-lg touch-manipulation"
              >
                reels & spotlight ✨
              </button>
              <button
                onClick={() => scrollToSection('guestbook-section')}
                className="font-handwriting text-2xl text-[#3D3835] py-2.5 border-b border-dashed border-[#E8DFD8] active:bg-[#FAF6F0] rounded-lg touch-manipulation"
              >
                leave a note on corkboard 📌
              </button>
              <button
                onClick={() => scrollToSection('contact-section')}
                className="sketch-button bg-[#E07A5F] text-white py-3 mt-2 font-handwriting text-2xl font-bold active:scale-98 touch-manipulation"
              >
                send letter 💌
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

