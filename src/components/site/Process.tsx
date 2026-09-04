import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { processSteps } from '../../data/content';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 75%', 'end 60%']
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const completionScale = useTransform(scrollYProgress, [0.86, 0.94, 1], [0.35, 1.08, 1]);
  const completionOpacity = useTransform(scrollYProgress, [0.86, 0.92], [0, 1]);

  return (
    <section id="process" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          eyebrow="Process"
          title="A predictable path from idea to launch."
          description="Ten weeks, five stages, zero guesswork. You always know what is happening and what comes next." />
        

        <div ref={ref} className="relative mt-24">
          {/* Centered mobile connector: it sits behind the cards and fills as this section scrolls. */}
          <div className="absolute bottom-[27px] left-1/2 top-[10%] z-0 w-[3px] -translate-x-1/2 rounded-full bg-black/[0.08] sm:hidden">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top rounded-full"
            >
              <div className="h-full w-full rounded-full bg-[linear-gradient(180deg,#f4f4f4_0%,#8f8f8f_20%,#111111_50%,#8f8f8f_80%,#f4f4f4_100%)] shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
            </motion.div>
          </div>

          {/* metallic connector */}
          <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-[3px] rounded-full bg-black/[0.07] sm:block">
            <motion.div
              style={{ scaleY: lineScale }}
              className="h-full w-full origin-top rounded-full">
              
              <div className="h-full w-full rounded-full bg-[linear-gradient(180deg,#f4f4f4_0%,#8f8f8f_20%,#111111_50%,#8f8f8f_80%,#f4f4f4_100%)] shadow-[0_0_12px_rgba(0,0,0,0.25)]" />
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col gap-10 sm:gap-6">
            {processSteps.map((step, index) =>
            <Reveal key={step.number} delay={index * 0.06} y={24}>
                <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-6 sm:gap-10">
                
                  {/* glass timeline marker */}
                  <div className="metal-bezel relative hidden h-[57px] w-[57px] shrink-0 items-center justify-center rounded-full p-[3px] sm:flex">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#0b0b0c] text-[13px] font-semibold text-white shadow-[0_2px_8px_rgba(0,0,0,0.6)_inset]">
                      <span className="relative z-10">{step.number}</span>
                      <span className="absolute inset-1 rounded-full bg-[radial-gradient(120%_100%_at_50%_-20%,rgba(255,255,255,0.28),transparent_65%)]" />
                    </div>
                  </div>

                  <div className="glass-panel flex-1 rounded-[24px] p-7 transition-shadow duration-500 group-hover:shadow-[0_36px_64px_-40px_rgba(0,0,0,0.45)]">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                        <span className="mr-3 text-neutral-300 sm:hidden">{step.number}</span>
                        {step.title}
                      </h3>
                      <span className="rounded-full border border-black/[0.07] bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400">
                        {step.duration}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-neutral-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            )}
          </div>

          <motion.div
            style={{ scale: completionScale, opacity: completionOpacity }}
            className="metal-bezel relative z-10 mx-auto mt-7 flex h-[54px] w-[54px] items-center justify-center rounded-full p-[3px] sm:hidden"
            aria-hidden="true"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-ink text-canvas shadow-[0_2px_8px_rgba(0,0,0,0.6)_inset]">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m5 12 4 4L19 6" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}