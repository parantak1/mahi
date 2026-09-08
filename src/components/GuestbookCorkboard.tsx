import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Sparkles, Pin } from 'lucide-react';
import { INITIAL_VISITOR_NOTES } from '../data/portfolioData';
import { VisitorNote } from '../types';
import { PushPin, WashiTape } from './HandDrawnDecorations';

export const GuestbookCorkboard: React.FC = () => {
  const [notes, setNotes] = useState<VisitorNote[]>(INITIAL_VISITOR_NOTES);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedSticker, setSelectedSticker] = useState('✨');
  const [selectedColor, setSelectedColor] = useState('#FFF2F2');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const STICKERS = ['✨', '🌸', '☕', '💌', '🛕', '💍', '🎞️', '🕊️'];
  const COLORS = [
    { name: 'Blush', hex: '#FFF2F2' },
    { name: 'Butter', hex: '#FBF8E6' },
    { name: 'Mint', hex: '#EEF7EE' },
    { name: 'Lavender', hex: '#F5EEF8' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newNote: VisitorNote = {
      id: `note-${Date.now()}`,
      name: name.trim() || 'Anonymous Friend',
      message: message.trim(),
      sticker: selectedSticker,
      color: selectedColor,
      rotation: (Math.random() * 8) - 4,
      date: 'Just now',
    };

    setNotes([newNote, ...notes]);
    setMessage('');
    setName('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-14 px-4 max-w-5xl mx-auto">
      {/* Container simulating a scrapbook corkboard */}
      <div className="p-6 sm:p-8 bg-[#F5EFEB] sketch-border shadow-md relative">
        <WashiTape color="#F7D8DA" width="w-32" rotation={-2} className="-top-3 left-12" pattern="stripes" />
        <WashiTape color="#FDEED9" width="w-28" rotation={3} className="-top-3 right-12" pattern="dots" />

        {/* Section title */}
        <div className="text-center mb-8">
          <span className="font-handwriting text-xl text-[#D97757] font-semibold block">
            interactive scrapbook corner °•.✧
          </span>
          <h3 className="font-handwriting text-3xl sm:text-4xl md:text-5xl font-bold text-[#3D3835]">
            leave a note for mahi
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#6B645F] mt-1 max-w-md mx-auto">
            drop a sweet comment, a chai recommendation, or just say hi! It gets pinned right here on the corkboard.
          </p>
        </div>

        {/* Note Form & Pinned Notes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Note Input Form (Torn Paper Note) */}
          <div className="lg:col-span-5 bg-[#FFFDF9] p-5 rounded-xl sketch-border-sm shadow-xs relative">
            <PushPin color="#D97757" className="-top-3 right-8" />
            <span className="font-handwriting text-xl font-bold text-[#3D3835] block mb-3">
              write your sticky note ✍️
            </span>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <input
                  type="text"
                  placeholder="your name or @handle (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={30}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF6F0] border border-[#D6CBC1] text-base font-body text-[#3D3835] placeholder:text-[#8C7B73] focus:outline-none focus:border-[#D97757]"
                />
              </div>

              <div>
                <textarea
                  placeholder="write a warm note for Mahi's diary..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={160}
                  rows={3}
                  required
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF6F0] border border-[#D6CBC1] text-base font-body text-[#3D3835] placeholder:text-[#8C7B73] focus:outline-none focus:border-[#D97757] resize-none"
                />
              </div>

              {/* Sticker Selector */}
              <div>
                <span className="text-xs font-body text-[#6B645F] block mb-1">
                  pick a scrapbook sticker:
                </span>
                <div className="flex flex-wrap gap-2">
                  {STICKERS.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSticker(s)}
                      className={`w-9 h-9 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-lg sm:text-base border transition-all touch-manipulation ${
                        selectedSticker === s
                          ? 'border-[#3D3835] bg-[#FAF6F0] scale-110 shadow-xs'
                          : 'border-transparent hover:bg-[#FAF6F0]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div>
                <span className="text-xs font-body text-[#6B645F] block mb-1">
                  sticky paper tone:
                </span>
                <div className="flex flex-wrap gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.hex}
                      type="button"
                      onClick={() => setSelectedColor(c.hex)}
                      className={`h-7 px-3 rounded-full text-xs font-body border transition-all touch-manipulation ${
                        selectedColor === c.hex
                          ? 'border-[#3D3835] font-bold shadow-xs scale-105'
                          : 'border-[#D6CBC1]'
                      }`}
                      style={{ backgroundColor: c.hex }}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="mt-2 sketch-button bg-[#3D3835] text-[#FFFDF9] hover:bg-[#5E3B29] active:scale-98 px-4 py-2.5 font-handwriting text-xl font-bold flex items-center justify-center gap-2 touch-manipulation"
              >
                <Send className="w-4 h-4" />
                <span>pin onto corkboard</span>
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="font-handwriting text-base text-[#D97757] text-center"
                  >
                    your note is pinned! thank you 🤍
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Corkboard with Pinned Sticky Notes */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note) => (
              <motion.div
                key={note.id}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="p-4 rounded-xs sketch-border-sm shadow-xs relative transition-transform hover:scale-105"
                style={{
                  backgroundColor: note.color,
                  transform: `rotate(${note.rotation}deg)`,
                }}
              >
                <PushPin color="#D97757" className="-top-3 left-6" />

                <div className="flex items-center justify-between mb-1.5 pt-1">
                  <span className="font-handwriting text-lg font-bold text-[#3D3835]">
                    {note.name}
                  </span>
                  <span className="text-xl">{note.sticker}</span>
                </div>

                <p className="font-handwriting text-xl text-[#4A4542] leading-snug">
                  "{note.message}"
                </p>

                <div className="mt-2 pt-1 border-t border-black/10 flex justify-between text-[11px] font-body text-[#8C7B73]">
                  <span>{note.date}</span>
                  <span className="text-[#D97757]">cozy memory ✧</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
