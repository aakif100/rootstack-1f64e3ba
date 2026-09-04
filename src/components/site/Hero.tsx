import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRightIcon, PlayIcon } from 'lucide-react';
import { SegmentedControl, SEGMENTS } from './SegmentedControl';

const ease = [0.16, 1, 0.3, 1] as const;

const HERO_COPY = [
  {
    headline: 'We build digital experiences that grow.',
    support:
      'Websites, apps, and AI automations that help your business scale smarter and faster.',
  },
  {
    headline: 'Apps built for the way people actually move.',
    support:
      'Fast, intuitive web and mobile products designed to turn complex ideas into experiences people love to use.',
  },
  {
    headline: 'We automate the work that slows you down.',
    support:
      'Intelligent AI workflows that remove repetitive work, connect your tools, and help your team move faster.',
  },
] as const;

export function Hero() {
  const { scrollY } = useScroll();
  const controlY = useTransform(scrollY, [0, 600], [0, 90]);
  const copyY = useTransform(scrollY, [0, 600], [0, 40]);
  const fade = useTransform(scrollY, [0, 520], [1, 0]);
  const reduceMotion = useReducedMotion();

  const [active, setActive] = useState(0);
  const [tick, setTick] = useState(0);

  // auto-cycle every 2500ms; any manual selection resets the timer via `tick`
  useEffect(() => {
    const id = window.setTimeout(() => {
      setActive((prev) => (prev + 1) % SEGMENTS.length);
    }, 2500);
    return () => window.clearTimeout(id);
  }, [active, tick]);

  const handleSelect = useCallback((index: number) => {
    setActive(index);
    setTick((t) => t + 1);
  }, []);

  const copy = HERO_COPY[active] ?? HERO_COPY[0];

  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-6 sm:pt-40"
    >
      {/* soft neutral lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,#fafafa_0%,#efefee_55%,#e7e7e6_100%)]" />
      <div className="grain pointer-events-none absolute inset-0 opacity-[0.5]" />

      <motion.div style={{ y: controlY, opacity: fade }} className="relative z-10 w-full max-w-full">
        <motion.div
          initial={{ opacity: 0, y: 26, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, ease }}
          className="mx-auto w-fit max-w-full"
        >
          <SegmentedControl active={active} onSelect={handleSelect} />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: copyY }}
        className="relative z-10 mt-16 flex flex-col items-center text-center sm:mt-24"
      >
        <div
          id="hero-panel"
          role="tabpanel"
          aria-live="polite"
          aria-labelledby={`hero-tab-${active}`}
          className="flex min-h-[16rem] flex-col items-center sm:min-h-[19rem]"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 22, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -16, scale: 0.99 }}
              transition={{ duration: reduceMotion ? 0.2 : 0.55, ease }}
              className="flex flex-col items-center"
            >
              <h1 className="max-w-5xl text-[clamp(2.25rem,8vw,6.2rem)] font-bold leading-[0.98] tracking-tightest text-ink sm:leading-[0.95]">
                {copy.headline}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:mt-8 sm:text-2xl">
                {copy.support}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="mt-10 flex w-full flex-col items-center gap-3 sm:mt-12 sm:w-auto sm:flex-row"
        >
          <a
            href="#contact"
            className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-ink px-8 py-4 text-[17px] font-medium text-white transition-all duration-500 hover:shadow-[0_22px_44px_-18px_rgba(0,0,0,0.7)] sm:w-auto"
          >
            <span className="relative z-10">Let's Build Yours</span>
            <ArrowRightIcon className="relative z-10 h-[18px] w-[18px] transition-transform duration-500 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
          </a>
          <a
            href="#work"
            className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-black/[0.045] px-8 py-4 text-[17px] font-medium text-ink transition-all duration-500 hover:bg-black/[0.08] sm:w-auto"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink transition-transform duration-500 group-hover:scale-110">
              <PlayIcon className="h-3 w-3 fill-white text-white" />
            </span>
            View Our Work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
