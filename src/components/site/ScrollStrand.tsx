import { motion, type MotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

const strandPath =
  'M 5 0 C 16 24, 76 54, 92 92 C 106 127, 74 158, 45 185 C 17 211, -4 239, 9 276 C 21 312, 77 332, 94 367 C 109 401, 81 434, 51 462 C 23 488, -3 514, 7 551 C 18 591, 73 608, 93 645 C 111 678, 83 712, 54 739 C 25 766, -5 792, 7 829 C 19 868, 73 888, 94 923 C 103 940, 84 970, 96 1000';

type ScrollStrandProps = {
  progress: MotionValue<number>;
};

export function ScrollStrand({ progress }: ScrollStrandProps) {
  const reduceMotion = useReducedMotion();
  const smoothProgress = useSpring(progress, {
    stiffness: reduceMotion ? 1000 : 95,
    damping: reduceMotion ? 100 : 28,
    mass: 0.45,
    restDelta: 0.0005,
  });
  const visibleProgress = useTransform(smoothProgress, (value) =>
    Math.min(1, value + (1 - value) * 0.018),
  );

  return (
    <div className="scroll-strand pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          <linearGradient id="strand-idle" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.025" />
            <stop offset="0.16" stopColor="currentColor" stopOpacity="0.14" />
            <stop offset="0.82" stopColor="currentColor" stopOpacity="0.085" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.015" />
          </linearGradient>
          <filter id="strand-soft-tip" x="-80%" y="-20%" width="260%" height="140%">
            <feGaussianBlur stdDeviation="0.75" />
          </filter>
        </defs>

        <path
          d={strandPath}
          pathLength="1"
          stroke="url(#strand-idle)"
          strokeWidth="0.38"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={strandPath}
          pathLength="1"
          style={{ pathLength: visibleProgress }}
          stroke="currentColor"
          strokeOpacity="0.46"
          strokeWidth="0.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={strandPath}
          pathLength="1"
          style={{ pathLength: visibleProgress }}
          stroke="currentColor"
          className="strand-glow"
          strokeOpacity="0.16"
          strokeWidth="2.8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#strand-soft-tip)"
        />
      </svg>
    </div>
  );
}