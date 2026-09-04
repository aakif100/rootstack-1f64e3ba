import React from 'react';
import { Reveal } from './Reveal';

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center'
}: SectionHeadingProps) {
  const isCenter = align === 'center';
  return (
    <div
      className={`flex flex-col gap-5 ${
      isCenter ? 'items-center text-center' : 'items-start text-left'}`
      }>
      
      <Reveal y={16}>
        <span className="metal-surface shimmer shimmer-slow relative inline-flex items-center overflow-hidden rounded-full px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600">
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.06}>
        <h2 className="max-w-3xl text-4xl font-bold leading-[1.05] tracking-tightest text-ink sm:text-5xl md:text-[3.4rem]">
          {title}
        </h2>
      </Reveal>
      {description &&
      <Reveal delay={0.12}>
          <p
          className={`max-w-xl text-base leading-relaxed text-neutral-500 sm:text-lg ${
          isCenter ? 'mx-auto' : ''}`
          }>
          
            {description}
          </p>
        </Reveal>
      }
    </div>);

}