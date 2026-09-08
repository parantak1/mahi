import React from 'react';
import { SparkleCursor } from './components/SparkleCursor';
import { FloatingDoodles } from './components/FloatingDoodles';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HighlightsReel } from './components/HighlightsReel';
import { ContentGallery } from './components/ContentGallery';
import { GuestbookCorkboard } from './components/GuestbookCorkboard';
import { FooterSection } from './components/FooterSection';
import { SketchDivider } from './components/HandDrawnDecorations';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#3D3835] relative paper-bg selection:bg-[#F3C5C5] selection:text-[#5E3B29]">
      {/* Custom cursor with faint trail of sparkles (°•.✧°.•) */}
      <SparkleCursor />

      {/* Floating parallax background doodles (stars, planes, polaroids) */}
      <FloatingDoodles />

      {/* Top sticky navigation */}
      <Navbar />

      <main className="relative z-10 overflow-hidden">
        {/* 1. Hero Section */}
        <div id="hero-section">
          <HeroSection />
        </div>

        <SketchDivider />

        {/* 2. About Me & My Vibe */}
        <div id="about-section">
          <AboutSection />
        </div>

        <SketchDivider />

        {/* 3. The Highlights Reel (Story Polaroids) */}
        <div id="highlights-section">
          <HighlightsReel />
        </div>

        <SketchDivider />

        {/* 4. Content Gallery & Viral Reels */}
        <div id="gallery-section">
          <ContentGallery />
        </div>

        <SketchDivider />

        {/* Interactive Guestbook Corkboard */}
        <div id="guestbook-section">
          <GuestbookCorkboard />
        </div>

        {/* 5. Footer & Contact */}
        <div id="contact-section">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}
