import React from 'react';
import { motion } from 'framer-motion';
import {
  ZapIcon,
  LayersIcon,
  Code2Icon,
  SearchIcon,
  PaletteIcon,
  BotIcon } from
'lucide-react';
import { advantages } from '../../data/content';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const icons = {
  zap: ZapIcon,
  layers: LayersIcon,
  code: Code2Icon,
  search: SearchIcon,
  palette: PaletteIcon,
  bot: BotIcon
};

export function WhyUs() {
  return (
    <section id="why" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Why RootStack"
          title="The details other teams leave for later."
          description="Six commitments that show up in every engagement, whether it is a landing page or a platform rebuild." />
        

        <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index % 3 * 0.08} y={26}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full overflow-hidden rounded-[24px] border border-white/70 bg-white/55 p-7 backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_36px_64px_-42px_rgba(0,0,0,0.5)]">
                  
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white" />
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/60 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

                  <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-black/[0.06] bg-gradient-to-br from-white to-neutral-200 shadow-[0_1px_0_rgba(255,255,255,1)_inset]">
                    <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.6} />
                  </div>

                  <h3 className="relative mt-6 text-lg font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-neutral-500">
                    {item.description}
                  </p>
                </motion.div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}