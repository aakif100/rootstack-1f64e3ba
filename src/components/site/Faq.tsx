import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { PlusIcon } from 'lucide-react';
import { faqs } from '../data/content';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[860px]">
        <SectionHeading eyebrow="FAQ" title="Answers, before you ask." />

        <div className="mt-16 overflow-hidden rounded-[26px] border border-white/70 bg-white/50 backdrop-blur-xl">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <Reveal key={faq.question} delay={index * 0.05} y={16}>
                <div
                  className={
                  index === 0 ?
                  '' :
                  'border-t border-white/80 shadow-[0_-1px_0_rgba(0,0,0,0.05)]'
                  }>
                  
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-center justify-between gap-6 px-7 py-6 text-left transition-colors duration-300 hover:bg-white/60">
                    
                    <span className="text-[17px] font-medium tracking-tight text-ink sm:text-lg">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 135 : 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="metal-surface flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                      
                      <PlusIcon className="h-4 w-4 text-ink" strokeWidth={1.8} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen &&
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden">
                      
                        <p className="max-w-[64ch] px-7 pb-7 text-[15px] leading-relaxed text-neutral-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </Reveal>);

          })}
        </div>
      </div>
    </section>);

}