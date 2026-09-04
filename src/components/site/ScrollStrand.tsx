import { motion, type MotionValue, useReducedMotion, useSpring } from 'framer-motion';

const strandPath =
  'M 9 0 C 7 35, 14 61, 10 98 S 5 162, 12 202 S 15 274, 8 318 S 6 387, 13 431 S 15 503, 9 548 S 5 621, 12 668 S 15 744, 8 790 S 6 865, 12 910 S 13 968, 10 1000';

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
            <stop offset="0" stopColor="currentColor" stopOpacity="0.02" />
            <stop offset="0.16" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="0.82" stopColor="currentColor" stopOpacity="0.055" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.01" />
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
          style={{ pathLength: smoothProgress }}
          stroke="currentColor"
          strokeOpacity="0.34"
          strokeWidth="0.72"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d={strandPath}
          pathLength="1"
          style={{ pathLength: smoothProgress }}
          stroke="currentColor"
          strokeOpacity="0.13"
          strokeWidth="2.4"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#strand-soft-tip)"
        />
      </svg>
    </div>
  );
}