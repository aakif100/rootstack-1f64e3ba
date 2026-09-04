import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section id="work" className="relative w-full px-6 py-32 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1200px]">
        <SectionHeading
          eyebrow="Featured Work"
          title="Recent projects, quietly obsessed over."
          description="A selection of the work we can show. Every engagement below shipped to production and is still running today." />
        

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) =>
          <Reveal key={project.id} delay={index % 2 * 0.1}>
              <motion.article
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={{ rest: { y: 0 }, hover: { y: -10 } }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-full overflow-hidden rounded-[30px] border border-white/70 bg-white/60 p-3 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-shadow duration-500 hover:shadow-[0_50px_90px_-45px_rgba(0,0,0,0.55)]">
              
                <div className="relative overflow-hidden rounded-[22px] bg-neutral-200">
                  <motion.img
                  src={project.image}
                  alt={`${project.name} preview`}
                  variants={{ rest: { scale: 1 }, hover: { scale: 1.05 } }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="aspect-[3/2] w-full object-cover" />
                
                  {/* glass overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-white/10 opacity-70" />
                  <motion.div
                  variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                  transition={{ duration: 0.6 }}
                  className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.35)_50%,transparent_65%)]" />
                

                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="metal-surface rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-700">
                      {project.category}
                    </span>
                    <span className="rounded-full border border-white/50 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur-md">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col px-5 pb-5 pt-7">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink">{project.name}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-neutral-500">
                    {project.description}
                  </p>

                  <a
                  href="#cta"
                  className="group/btn mt-7 inline-flex w-fit items-center gap-2 rounded-xl border border-black/[0.08] bg-white/80 px-5 py-3 text-sm font-medium text-ink transition-all duration-500 hover:bg-ink hover:text-white">
                  
                    View Case Study
                    <ArrowUpRightIcon className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.article>
            </Reveal>
          )}
        </div>
      </div>
    </section>);

}