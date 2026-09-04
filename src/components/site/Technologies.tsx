import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { technologies } from '../../data/content';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { useIsMobile } from '@/hooks/use-mobile';

export function Technologies() {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section className="relative w-full overflow-hidden px-6 py-32 lg:px-10 lg:py-40">
      <motion.div style={isMobile ? {} : { y: drift }} className="mx-auto max-w-[1000px]">
        <SectionHeading
          eyebrow="Technologies"
          title="A stack chosen for longevity."
          description="Proven tools, no experiments on your budget — and nothing your next engineer cannot pick up." />
        

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) =>
          <Reveal key={tech} delay={index * 0.05} y={18} scale={0.94}>
              <motion.span
              animate={isMobile ? {} : { y: [0, index % 2 === 0 ? -6 : 6, 0] }}
              transition={{
                duration: 6 + index % 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.25
              }}
              whileHover={{ scale: 1.06, y: -8 }}
              className="metal-surface shimmer shimmer-slow relative inline-flex cursor-default items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-[15px] font-medium text-neutral-700">
              
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
                {tech}
              </motion.span>
            </Reveal>
          )}
        </div>
      </motion.div>
    </section>);

}