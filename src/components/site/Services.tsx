import React from 'react';
import { motion } from 'framer-motion';
import { GlobeIcon, SmartphoneIcon, SparklesIcon } from 'lucide-react';
import { services } from '../../data/services';
import type { Service } from '../../data/services';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';
import { MobileCarousel } from './MobileCarousel';
import { MetallicCard } from './MetallicCard';

const icons = {
  globe: GlobeIcon,
  phone: SmartphoneIcon,
  spark: SparklesIcon
};

export function Services() {
  const renderCard = (service: Service) => {
    const Icon = icons[service.icon];

    return (
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
      >
        <MetallicCard className="h-full rounded-[28px]" innerClassName="rounded-[27px]">
          <div className="glass-panel relative flex h-full flex-col rounded-[27px] border-none p-8 transition-shadow duration-500 group-hover/metal:shadow-[0_40px_70px_-40px_rgba(0,0,0,0.5)]">
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
              {service.points.map((point) => (
                <li
                  key={point}
                  className="rounded-full border border-black/[0.07] bg-white/70 px-3 py-1.5 text-xs font-medium text-neutral-500"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </MetallicCard>
      </motion.article>
    );
  };

  return (
    <section id="services" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Services"
          title="Three disciplines, one standard of craft."
          description="Everything we build shares the same foundation: considered design, clean engineering, and measurable outcomes." />
        

        <div className="mt-20 hidden gap-6 md:grid md:grid-cols-3">
          {services.map((service, index) => {
            return (
              <Reveal key={service.id} delay={index * 0.09}>
                {renderCard(service)}
              </Reveal>);

          })}
        </div>
        <div className="mt-14 md:hidden">
          <MobileCarousel
            items={services}
            getKey={(service) => service.id}
            label="Services"
            renderItem={(service) => renderCard(service)}
          />
        </div>
      </div>
    </section>);

}