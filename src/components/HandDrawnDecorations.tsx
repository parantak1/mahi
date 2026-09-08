import React from 'react';

// Washi tape sticker
export const WashiTape: React.FC<{
  color?: string;
  width?: string;
  rotation?: number;
  className?: string;
  pattern?: 'dots' | 'stripes' | 'solid';
}> = ({ color = '#F7D8DA', width = 'w-24', rotation = -2, className = '', pattern = 'stripes' }) => {
  return (
    <div
      className={`h-5 ${width} absolute z-20 pointer-events-none opacity-85 shadow-xs ${className}`}
      style={{
        backgroundColor: color,
        transform: `rotate(${rotation}deg)`,
        clipPath: 'polygon(0% 15%, 3% 0%, 97% 2%, 100% 18%, 98% 85%, 100% 100%, 2% 98%, 0% 82%)',
      }}
    >
      {pattern === 'stripes' && (
        <div
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, #000, #000 2px, transparent 2px, transparent 6px)',
          }}
        />
      )}
      {pattern === 'dots' && (
        <div
          className="w-full h-full opacity-25"
          style={{
            backgroundImage: 'radial-gradient(#000 1px, transparent 1px)',
            backgroundSize: '6px 6px',
          }}
        />
      )}
    </div>
  );
};

// Hand-drawn pushpin / thumbtack
export const PushPin: React.FC<{ color?: string; className?: string }> = ({
  color = '#D97757',
  className = '',
}) => {
  return (
    <div className={`absolute z-30 pointer-events-none drop-shadow-md ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="6" fill={color} stroke="#3D3835" strokeWidth="1.5" />
        <ellipse cx="10.5" cy="6.5" rx="2" ry="1.5" fill="white" opacity="0.6" />
        <path d="M12 14V22" stroke="#3D3835" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 13H15" stroke="#3D3835" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};

// Hand-drawn paper plane doodle with dashed flight path
export const PaperPlaneDoodle: React.FC<{ className?: string; animated?: boolean }> = ({
  className = '',
  animated = true,
}) => {
  return (
    <div className={`inline-flex items-center gap-1 ${className} ${animated ? 'hover-wiggle' : ''}`}>
      <svg width="34" height="30" viewBox="0 0 34 30" fill="none" className="transform -rotate-6">
        <path
          d="M2 14L31 2L20 28L15 17L2 14Z"
          fill="#FFFDF9"
          stroke="#3D3835"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path d="M31 2L15 17" stroke="#3D3835" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M15 17L18 24L20 20" stroke="#3D3835" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

// Hand-drawn sketch doodle star
export const DoodleStar: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 24,
  color = '#D97757',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`inline-block ${className}`}
    >
      <path
        d="M12 2C12.5 7 14 10 19 11C14 12 12.5 15 12 21C11.5 15 9.5 12 4.5 11C9.5 10 11.5 7 12 2Z"
        fill={color}
        opacity="0.85"
        stroke="#4A4542"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// Cute sketchy sparkle cluster
export const DoodleSparkleCluster: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <span className={`font-handwriting select-none text-xl tracking-wider text-[#D97757] ${className}`}>
      °•.✧°.•
    </span>
  );
};

// Hand-drawn algorithm chart playful graphic
export const AlgorithmChartGraphic: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`p-4 bg-[#FFFDF9]/95 sketch-border-sm shadow-sm relative ${className}`}>
      <div className="flex items-center justify-between border-b border-[#E8DFD8] pb-1.5 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="text-base">📈</span>
          <span className="font-handwriting text-lg font-bold text-[#3D3835]">
            the "no-niche" algorithm diary
          </span>
        </div>
        <span className="font-body text-xs text-[#8C7B73] bg-[#FAF6F0] px-2 py-0.5 rounded-full border border-[#D6CBC1]">
          vibes &gt; metrics
        </span>
      </div>

      {/* Sketch chart */}
      <div className="relative h-28 w-full mt-2">
        {/* Y Axis line */}
        <svg className="w-full h-full overflow-visible" viewBox="0 0 320 90" fill="none">
          {/* Grid lines sketchy */}
          <line x1="25" y1="20" x2="310" y2="20" stroke="#EAE2DA" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="25" y1="50" x2="310" y2="50" stroke="#EAE2DA" strokeDasharray="3 3" strokeWidth="1" />
          <line x1="25" y1="80" x2="310" y2="80" stroke="#6B645F" strokeWidth="1.5" strokeLinecap="round" />
          {/* X/Y Axis */}
          <line x1="25" y1="5" x2="25" y2="80" stroke="#6B645F" strokeWidth="1.5" strokeLinecap="round" />

          {/* Wiggly growth line */}
          <path
            d="M 28 72 Q 60 65, 80 50 T 130 55 T 170 30 T 215 35 T 260 14 T 305 10"
            stroke="#D97757"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />

          {/* Little dots */}
          <circle cx="80" cy="50" r="3.5" fill="#E07A5F" stroke="#3D3835" strokeWidth="1.2" />
          <circle cx="170" cy="30" r="3.5" fill="#E07A5F" stroke="#3D3835" strokeWidth="1.2" />
          <circle cx="260" cy="14" r="4.5" fill="#F3C5C5" stroke="#3D3835" strokeWidth="1.5" />
          <circle cx="305" cy="10" r="4.5" fill="#D97757" stroke="#3D3835" strokeWidth="1.5" />

          {/* Doodled arrow */}
          <path
            d="M 300 12 L 308 10 L 304 18"
            stroke="#D97757"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Playful annotations */}
        <div className="absolute top-1 right-2 text-right">
          <span className="font-handwriting text-sm text-[#D97757] font-bold block leading-none">
            214k viral peak! 🚀
          </span>
          <span className="font-handwriting text-xs text-[#8C7B73]">
            (without picking a niche)
          </span>
        </div>

        <div className="absolute bottom-2 left-8">
          <span className="font-handwriting text-xs text-[#8C7B73]">
            posted chai video ☕
          </span>
        </div>

        <div className="absolute top-7 left-[42%]">
          <span className="font-handwriting text-xs text-[#8C7B73]">
            mom cameo ❤️
          </span>
        </div>
      </div>

      <div className="mt-2 pt-2 border-t border-dashed border-[#D6CBC1] flex items-center justify-between text-xs text-[#6B645F] font-body">
        <span>✨ 740K+ Total Impressions</span>
        <span className="font-handwriting text-sm text-[#3D3835] font-semibold">
          formula = 100% authenticity
        </span>
      </div>
    </div>
  );
};

// Hand-drawn decorative divider
export const SketchDivider: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`w-full flex items-center justify-center my-10 ${className}`}>
      <svg width="220" height="24" viewBox="0 0 220 24" fill="none">
        <path
          d="M 5 12 Q 35 15, 65 12 T 125 12 T 185 12 T 215 12"
          stroke="#4A4542"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="1 0"
        />
        <circle cx="110" cy="12" r="4" fill="#D97757" stroke="#4A4542" strokeWidth="1.2" />
        <path d="M 103 12 Q 107 8, 110 5 Q 113 8, 117 12" stroke="#4A4542" strokeWidth="1.2" fill="none" />
      </svg>
    </div>
  );
};
