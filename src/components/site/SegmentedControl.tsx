import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { GlobeIcon, SmartphoneIcon, SparklesIcon } from 'lucide-react';

export const SEGMENTS = [
  { label: 'Website', Icon: GlobeIcon },
  { label: 'App', Icon: SmartphoneIcon },
  { label: 'AI Automation', Icon: SparklesIcon },
] as const;

type Props = {
  active: number;
  onSelect: (index: number) => void;
};

export function SegmentedControl({ active, onSelect }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="metal-bezel relative rounded-full p-[7px] sm:p-[9px] lg:p-[11px]"
      role="tablist"
      aria-label="Services"
    >
      {/* top specular edge of the bezel */}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px rounded-full bg-white/90" />

      <div className="relative overflow-hidden rounded-full bg-[#0b0b0c] p-1 shadow-[0_2px_10px_rgba(0,0,0,0.55)_inset] sm:p-1.5">
        {/* soft interior vignette */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(120%_100%_at_50%_-30%,rgba(255,255,255,0.18),transparent_60%)]" />

        <div className="relative flex items-stretch">
          {SEGMENTS.map((option, index) => {
            const isActive = index === active;
            return (
              <button
                key={option.label}
                type="button"
                role="tab"
                id={`hero-tab-${index}`}
                aria-selected={isActive}
                aria-controls="hero-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => onSelect(index)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    onSelect((index + 1) % SEGMENTS.length);
                  } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    onSelect((index - 1 + SEGMENTS.length) % SEGMENTS.length);
                  }
                }}
                className="relative isolate flex flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2.5 text-[12px] font-medium outline-none transition-colors duration-500 focus-visible:ring-2 focus-visible:ring-white/70 sm:gap-3 sm:px-8 sm:py-4 sm:text-lg"
              >
                {isActive && (
                  <motion.span
                    layoutId="segment-glass"
                    className="absolute inset-0 -z-10 rounded-full"
                    transition={
                      reduceMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 210, damping: 26, mass: 0.9 }
                    }
                    style={{
                      background:
                        'linear-gradient(150deg, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.13) 42%, rgba(255,255,255,0.06) 100%)',
                      boxShadow:
                        '0 1px 0 rgba(255,255,255,0.55) inset, 0 -1px 0 rgba(0,0,0,0.35) inset, 0 10px 22px -10px rgba(0,0,0,0.8), 0 0 26px rgba(255,255,255,0.14)',
                      backdropFilter: 'blur(6px)',
                    }}
                  >
                    <span className="absolute inset-x-3 top-[3px] h-1/3 rounded-full bg-white/20 blur-[2px]" />
                  </motion.span>
                )}

                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key="glow"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="pointer-events-none absolute inset-0 -z-10 rounded-full ring-1 ring-white/25"
                    />
                  )}
                </AnimatePresence>

                <option.Icon
                  className={`h-4 w-4 shrink-0 transition-all duration-500 sm:h-5 sm:w-5 ${
                    isActive ? 'text-white' : 'text-white/55'
                  }`}
                  strokeWidth={1.6}
                />

                <span
                  className={`transition-all duration-500 ${
                    isActive
                      ? 'text-white [text-shadow:0_1px_10px_rgba(255,255,255,0.35)]'
                      : 'text-white/60'
                  }`}
                >
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
