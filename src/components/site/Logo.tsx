import React from 'react';
import markAsset from '@/assets/rootstack-mark.png.asset.json';

type LogoProps = {
  inverted?: boolean;
};

export function Logo({ inverted = false }: LogoProps) {
  const tone = inverted ? 'text-white' : 'text-ink';
  const sub = inverted ? 'text-white/50' : 'text-neutral-400';
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="RootStack home">
      <img
        src={markAsset.url}
        alt="RootStack logo"
        width={40}
        height={40}
        className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-[8deg] sm:h-14 sm:w-14"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-[19px] font-bold tracking-tight ${tone}`}>RootStack</span>
        <span className={`mt-1 text-[9px] font-medium tracking-[0.3em] ${sub}`}>SOLUTIONS</span>
      </span>
    </a>);

}
