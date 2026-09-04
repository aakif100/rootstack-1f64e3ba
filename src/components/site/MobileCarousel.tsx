import React, { useEffect, useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type MobileCarouselProps<T> = {
  items: T[];
  getKey: (item: T) => string;
  label: string;
  renderItem: (item: T, index: number) => React.ReactNode;
};

export function MobileCarousel<T>({ items, getKey, label, renderItem }: MobileCarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const frameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateCards = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.scrollLeft + track.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    itemRefs.current.forEach((item, index) => {
      if (!item) return;
      const itemCenter = item.offsetLeft + item.offsetWidth / 2;
      const distance = Math.abs(center - itemCenter);
      const progress = Math.min(distance / Math.max(item.offsetWidth, 1), 1);
      item.style.setProperty('--carousel-blur', `${(progress * 2.5).toFixed(2)}px`);
      item.style.setProperty('--carousel-opacity', `${(1 - progress * 0.24).toFixed(3)}`);
      item.style.setProperty('--carousel-scale', `${(1 - progress * 0.025).toFixed(3)}`);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  useEffect(() => {
    updateCards();
    const handleResize = () => updateCards();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    };
  }, []);

  const handleScroll = () => {
    if (frameRef.current !== null) window.cancelAnimationFrame(frameRef.current);
    frameRef.current = window.requestAnimationFrame(updateCards);
  };

  const goTo = (index: number) => {
    itemRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="md:hidden">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        aria-label={label}
        className="mobile-carousel -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-3"
      >
        {items.map((item, index) => (
          <div
            key={getKey(item)}
            ref={(node) => { itemRefs.current[index] = node; }}
            className="mobile-carousel-item w-full shrink-0 snap-center snap-always"
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-2.5" aria-label={`${label} position`}>
        {items.map((item, index) => (
          <Button
            key={getKey(item)}
            type="button"
            variant="ghost"
            size="icon"
            aria-label={`Show item ${index + 1} of ${items.length}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            onClick={() => goTo(index)}
            className="h-7 w-7 rounded-full p-0 hover:bg-transparent"
          >
            <span
              className={cn(
                'block rounded-full transition-all duration-300',
                activeIndex === index
                  ? 'h-2 w-2 bg-ink shadow-[0_0_8px_rgba(10,10,10,0.28)]'
                  : 'h-1.5 w-1.5 bg-neutral-400'
              )}
            />
          </Button>
        ))}
      </div>
    </div>
  );
}