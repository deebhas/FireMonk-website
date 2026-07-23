import React from 'react';

interface FireMonkLogoProps {
  className?: string;
  variant?: 'full' | 'icon-only' | 'horizontal' | 'compact';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  lightText?: boolean;
  showTagline?: boolean;
}

// Sleek Orbitron Badge Mark
export const FireMonkLogoIcon: React.FC<{ className?: string; lightText?: boolean }> = ({ 
  className = 'w-8 h-8',
  lightText = false 
}) => {
  return (
    <div className={`inline-flex items-center justify-center rounded-xl px-2.5 py-1.5 bg-gradient-to-br from-[#0060df] via-[#1e1b4b] to-[#ff5500] text-white shadow-xs font-orbitron font-black text-sm tracking-wider ${className}`}>
      <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">F</span>
      <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent -ml-0.5">M</span>
    </div>
  );
};

export const FireMonkLogo: React.FC<FireMonkLogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
  lightText = false,
  showTagline = true
}) => {
  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-5xl',
    custom: ''
  };

  const taglineSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm',
    custom: ''
  };

  if (variant === 'icon-only') {
    return <FireMonkLogoIcon className={className} lightText={lightText} />;
  }

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <div className="flex items-center gap-2 leading-none">
        <span className={`font-orbitron font-black tracking-wider ${titleSizes[size]}`}>
          <span className={lightText 
            ? "bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-400 bg-clip-text text-transparent" 
            : "bg-gradient-to-r from-[#0060df] to-[#0284c7] bg-clip-text text-transparent"
          }>
            Fire
          </span>
          <span className={lightText
            ? "bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent"
            : "bg-gradient-to-r from-[#ff5500] via-[#ea580c] to-[#f59e0b] bg-clip-text text-transparent"
          }>
            Monk
          </span>
        </span>
      </div>
      {showTagline && (
        <p className={`font-extrabold tracking-widest uppercase mt-1 flex items-center gap-1 ${taglineSizes[size]}`}>
          <span className={lightText ? 'text-sky-300' : 'text-[#0060df]'}>CONSULTING</span>
          <span className={lightText ? 'text-slate-500' : 'text-slate-300'}>|</span>
          <span className={lightText ? 'text-indigo-200' : 'text-[#1e3a8a]'}>AUDITING</span>
          <span className={lightText ? 'text-slate-500' : 'text-slate-300'}>|</span>
          <span className="text-[#ff5500]">TRAINING</span>
        </p>
      )}
    </div>
  );
};
