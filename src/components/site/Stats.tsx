import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { useIsMobile } from '@/hooks/use-mobile';

const STATS = [
{ value: '120+', label: 'Products shipped' },
{ value: '11', label: 'Countries served' },
{ value: '98%', label: 'Client retention' },
{ value: '0.8s', label: 'Median load time' }];


export function Stats() {
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll();
  const drift = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section className="relative w-full px-6 pb-8 lg:px-10">
      <motion.div style={isMobile ? undefined : { y: drift }} className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="glass-panel grid grid-cols-2 gap-px overflow-hidden rounded-[28px] bg-black/[0.06] md:grid-cols-4">
            {STATS.map((stat, index) =>
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/70 px-8 py-10 text-center backdrop-blur-xl">
              
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-white" />
                <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl font-bold tracking-tightest text-ink sm:text-5xl">
                
                  {stat.value}
                </motion.p>
                <p className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </div>
        </Reveal>
      </motion.div>
    </section>);

}