import React from 'react';
import { motion } from 'framer-motion';
import { GlobeIcon, SmartphoneIcon, SparklesIcon, ArrowUpRightIcon } from 'lucide-react';
import { services } from '../data/services';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

const icons = {
  globe: GlobeIcon,
  phone: SmartphoneIcon,
  spark: SparklesIcon
};

export function Services() {
  return (
    <section id="services" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Services"
          title="Three disciplines, one standard of craft."
          description="Everything we build shares the same foundation: considered design, clean engineering, and measurable outcomes." />
        

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.id} delay={index * 0.09}>
                <motion.article
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full overflow-hidden rounded-[28px] p-[1px]"
                  style={{
                    background:
                    'linear-gradient(150deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0.12) 40%, rgba(255,255,255,0.9) 70%, rgba(0,0,0,0.08) 100%)'
                  }}>
                  
                  <div className="glass-panel relative flex h-full flex-col rounded-[27px] border-none p-8 transition-shadow duration-500 group-hover:shadow-[0_40px_70px_-40px_rgba(0,0,0,0.5)]">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-[27px] bg-gradient-to-b from-white/80 to-transparent opacity-70" />

                    <div className="metal-surface shimmer shimmer-slow relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl">
                      <Icon className="relative z-10 h-6 w-6 text-ink" strokeWidth={1.5} />
                    </div>

                    <h3 className="relative mt-8 text-2xl font-semibold tracking-tight text-ink">
                      {service.title}
                    </h3>
                    <p className="relative mt-4 text-[15px] leading-relaxed text-neutral-500">
                      {service.description}
                    </p>

                    <ul className="relative mt-8 flex flex-wrap gap-2">
                      {service.points.map((point) =>
                      <li
                        key={point}
                        className="rounded-full border border-black/[0.07] bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-500">
                        
                          {point}
                        </li>
                      )}
                    </ul>

                    <div className="relative mt-10 flex items-center gap-2 text-sm font-medium text-ink">
                      <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                        Explore service
                      </span>
                      <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </motion.article>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}