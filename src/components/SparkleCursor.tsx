import React, { useEffect, useState, useRef } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  char: string;
  color: string;
  size: number;
}

const SPARKLE_CHARS = ['✧', '°', '•', '✦', '·', '⋆', '｡'];
const SPARKLE_COLORS = ['#D97757', '#E8A598', '#F3C5C5', '#DCE7DA', '#C86446', '#8C7B73'];

export const SparkleCursor: React.FC = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const lastSpawnRef = useRef(0);
  const idCounterRef = useRef(0);

  useEffect(() => {
    // Only activate cursor trail on devices that support hover / mouse
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasPointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const now = performance.now();
      // Throttle sparkle creation for performance and delicate density
      if (now - lastSpawnRef.current > 45) {
        lastSpawnRef.current = now;
        idCounterRef.current += 1;

        const newSparkle: Sparkle = {
          id: idCounterRef.current,
          x: e.clientX + (Math.random() * 14 - 7),
          y: e.clientY + (Math.random() * 14 - 7),
          char: SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)],
          color: SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)],
          size: Math.floor(Math.random() * 8) + 12,
        };

        setSparkles((prev) => [...prev.slice(-22), newSparkle]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Clean up sparkles automatically
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 700);
    return () => clearTimeout(timer);
  }, [sparkles]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Custom follower doodle star */}
      <div
        className="fixed pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
        }}
      >
        <div className="w-3 h-3 rounded-full bg-[#D97757]/80 border border-[#FAF6F0] shadow-sm flex items-center justify-center">
          <span className="text-[9px] text-[#FAF6F0] select-none leading-none">✦</span>
        </div>
      </div>

      {/* Trailing °•.✧°.• sparkles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle-particle"
          style={{
            left: `${s.x}px`,
            top: `${s.y}px`,
            color: s.color,
            fontSize: `${s.size}px`,
          }}
        >
          {s.char}
        </span>
      ))}
    </div>
  );
};
