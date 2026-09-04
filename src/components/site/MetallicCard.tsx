import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { cn } from '@/lib/utils';

type MetallicCardProps = React.HTMLAttributes<HTMLDivElement> & {
  innerClassName?: string;
};

export function MetallicCard({ children, className, innerClassName, onPointerMove, onPointerLeave, ...props }: MetallicCardProps) {
  const x = useMotionValue(50);
  const y = useMotionValue(20);
  const glow = useMotionTemplate`radial-gradient(240px circle at ${x}% ${y}%, rgba(255,255,255,0.5), transparent 62%)`;

  return (
    <div
      {...props}
      className={cn('metal-card group/metal relative overflow-hidden p-[3px] sm:p-1', className)}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        x.set(((event.clientX - bounds.left) / bounds.width) * 100);
        y.set(((event.clientY - bounds.top) / bounds.height) * 100);
        onPointerMove?.(event);
      }}
      onPointerLeave={(event) => {
        x.set(50);
        y.set(20);
        onPointerLeave?.(event);
      }}
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 z-10 opacity-25 transition-opacity duration-500 group-hover/metal:opacity-55"
      />
      <div className={cn('metal-card-inner relative z-0 h-full overflow-hidden', innerClassName)}>
        {children}
      </div>
    </div>
  );
}