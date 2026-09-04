import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { QuoteIcon } from 'lucide-react';
import { testimonials, type Testimonial } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

function FloatingCard({ item, index }: {item: Testimonial;index: number;}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springCfg = { stiffness: 140, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), springCfg);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), springCfg);
  const glareX = useTransform(mx, [-0.5, 0.5], ['20%', '80%']);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width - 0.5);
    my.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal delay={index * 0.1}>
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="group relative h-full overflow-hidden rounded-[26px] border border-white/70 bg-white/55 p-8 shadow-[0_30px_60px_-42px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        
        <motion.div
          style={{ left: glareX }}
          className="pointer-events-none absolute -top-1/2 h-[200%] w-40 -translate-x-1/2 bg-white/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white" />

        <QuoteIcon className="relative h-6 w-6 text-neutral-300" strokeWidth={1.6} />

        <p className="relative mt-6 text-[17px] leading-relaxed text-ink">“{item.quote}”</p>

        <div className="relative mt-8 flex items-center gap-3 border-t border-black/[0.06] pt-6">
          <div className="metal-surface flex h-11 w-11 items-center justify-center rounded-full text-[13px] font-semibold text-neutral-700">
            {item.initials}
          </div>
          <div className="leading-tight">
            <p className="text-[15px] font-medium text-ink">{item.name}</p>
            <p className="mt-1 text-[13px] text-neutral-400">{item.role}</p>
          </div>
        </div>
      </motion.div>
    </Reveal>);

}

export function Testimonials() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Testimonials"
          title="Teams that stayed after launch."
          description="We measure our work by whether clients come back. Most of them do." />
        

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) =>
          <FloatingCard key={item.name} item={item} index={index} />
          )}
        </div>
      </div>
    </section>);

}