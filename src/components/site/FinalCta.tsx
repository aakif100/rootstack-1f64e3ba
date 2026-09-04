import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { useIsMobile } from '@/hooks/use-mobile';

export function FinalCta() {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  const shapeA = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const shapeB = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <section id="cta" ref={ref} className="relative w-full overflow-hidden px-6 py-36 lg:px-10 lg:py-48">
      {/* subtle glass shapes behind the CTA */}
      <motion.div
        style={isMobile ? undefined : { y: shapeA }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-[85%] -translate-y-1/2 rounded-[120px] border border-white/70 bg-white/45 blur-[2px]" />
      
      <motion.div
        style={isMobile ? undefined : { y: shapeB }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-[5%] -translate-y-[60%] rotate-12 rounded-[100px] border border-white/60 bg-white/35 blur-[1px]" />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_50%,rgba(255,255,255,0.85),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center text-center">
        <Reveal y={16}>
          <span className="metal-surface shimmer relative mb-8 inline-flex items-center overflow-hidden rounded-full px-[18px] py-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-800">
            Two slots left for Q3
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[0.98] tracking-tightest text-ink">
            Let's build something extraordinary.
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-neutral-400 sm:text-xl">
            Tell us where you want the business to be in twelve months. We will show you what to
            build first — and have something live within weeks.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group relative flex items-center gap-3 overflow-hidden rounded-2xl bg-ink px-8 py-4 text-[17px] font-medium text-white transition-all duration-500 hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.7)]">
              
              <span className="relative z-10">Start a Project</span>
              <ArrowRightIcon className="relative z-10 h-[18px] w-[18px] transition-transform duration-500 group-hover:translate-x-1" />
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
            </a>
            <a
              href="#contact"
              className="metal-surface group flex items-center gap-3 rounded-2xl px-8 py-4 text-[17px] font-medium text-ink transition-all duration-500 hover:shadow-[0_18px_36px_-16px_rgba(0,0,0,0.4)]">
              
              <CalendarIcon className="h-[18px] w-[18px] transition-transform duration-500 group-hover:-translate-y-0.5" />
              Book a Call
            </a>
          </div>
        </Reveal>
      </div>
    </section>);

}