import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
import { Logo } from './Logo';

const LINKS = [
{ label: 'Services', href: '#services' },
{ label: 'Work', href: '#work' },
{ label: 'About', href: '#why' },
{ label: 'Process', href: '#process' }];




export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ? 'backdrop-blur-xl' : ''}`
      }>
      
      <div
        className={`transition-colors duration-500 ${
        scrolled ? 'border-b border-black/[0.06] bg-canvas/70' : ''}`
        }>
        
        <nav className="mx-auto flex h-[92px] max-w-[1400px] items-center justify-between px-6 lg:px-10">
          <Logo />

          <div className="hidden items-center rounded-full bg-black/[0.045] p-1.5 lg:flex">
            {LINKS.map((link) =>
            <a
              key={link.label}
              href={link.href}
              className="rounded-full px-5 py-2.5 text-[15px] font-medium text-neutral-500 transition-all duration-300 hover:bg-white hover:text-ink hover:shadow-[0_6px_16px_-8px_rgba(0,0,0,0.3)]">
              
                {link.label}
              </a>
            )}
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href="#contact"
              className="hidden rounded-xl bg-black/[0.045] px-5 py-3 text-[15px] font-medium text-ink transition-all duration-300 hover:bg-black/[0.08] sm:block">
              
              Log in
            </a>
            <a
              href="#contact"
              className="group relative overflow-hidden rounded-xl bg-ink px-4 py-2.5 text-[14px] font-medium text-white transition-all duration-300 hover:shadow-[0_14px_30px_-12px_rgba(0,0,0,0.65)] sm:px-5 sm:py-3 sm:text-[15px]">
              
              <span className="relative z-10">Let's Talk</span>
              <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 group-hover:translate-x-0" />
            </a>
            <button
              type="button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="metal-surface flex h-10 w-10 items-center justify-center rounded-xl text-ink lg:hidden">
              {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open &&
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-black/[0.06] bg-canvas/90 backdrop-blur-xl lg:hidden">
            
              <div className="flex flex-col px-6 py-4">
                {[...LINKS, { label: 'Start a Project', href: '#contact' }].map((link) =>
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[16px] font-medium text-neutral-600 transition-colors duration-300 hover:text-ink">
                
                    {link.label}
                  </a>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </motion.header>);

}
