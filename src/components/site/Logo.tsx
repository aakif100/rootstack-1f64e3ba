import React from 'react';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  const tone = inverted ? 'text-white' : 'text-ink';
  const sub = inverted ? 'text-white/50' : 'text-neutral-400';
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="RootStack home">
      <svg
        viewBox="0 0 40 40"
        className={`h-9 w-9 transition-transform duration-500 group-hover:rotate-[8deg] ${tone}`}
        fill="none"
        aria-hidden="true">
        
        <path d="M20 3.5 34.5 11v18L20 36.5 5.5 29V11L20 3.5Z" fill="currentColor" />
        <path d="M20 3.5 34.5 11 20 18.5 5.5 11 20 3.5Z" fill="currentColor" opacity="0.55" />
        <path d="M12.5 14.8 27 22.3v7.4L12.5 22.2v-7.4Z" fill="#f1f1f0" opacity="0.9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-bold tracking-tight ${tone}`}>ROOTSTACK</span>
        <span className={`mt-1 text-[9px] font-medium tracking-[0.3em] ${sub}`}>
          DIGITAL SOLUTIONS
        </span>
      </span>
    </a>);

}