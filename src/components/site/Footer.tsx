import React from 'react';
import { TwitterIcon, LinkedinIcon, GithubIcon, DribbbleIcon } from 'lucide-react';
import { Logo } from './Logo';
import { Reveal } from './Reveal';

const QUICK_LINKS = [
{ label: 'Work', href: '#work' },
{ label: 'Process', href: '#process' },
{ label: 'Why RootStack', href: '#why' },
{ label: 'FAQ', href: '#faq' }];


const SERVICE_LINKS = [
{ label: 'Website Development', href: '#services' },
{ label: 'App Development', href: '#services' },
{ label: 'AI Automation', href: '#services' },
{ label: 'Design Systems', href: '#services' }];


const SOCIALS = [
{ label: 'Twitter', Icon: TwitterIcon },
{ label: 'LinkedIn', Icon: LinkedinIcon },
{ label: 'GitHub', Icon: GithubIcon },
{ label: 'Dribbble', Icon: DribbbleIcon }];


export function Footer() {
  return (
    <footer className="relative w-full border-t border-black/[0.06] bg-canvas/80 px-6 pb-14 pt-24 backdrop-blur-xl lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-6">
              <Logo />
              <p className="max-w-xs text-[15px] leading-relaxed text-neutral-400">
                A small studio building websites, apps, and AI automations for teams that care about
                the details.
              </p>
            </div>

            <FooterColumn title="Quick Links" links={QUICK_LINKS} />
            <FooterColumn title="Services" links={SERVICE_LINKS} />

            <div>
              <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
                Social
              </h3>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {SOCIALS.map(({ label, Icon }) =>
                <a
                  key={label}
                  href="#top"
                  aria-label={label}
                  className="metal-surface flex h-10 w-10 items-center justify-center rounded-xl text-neutral-600 transition-all duration-500 hover:-translate-y-1 hover:text-ink">
                  
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.6} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-black/[0.06] pt-8 sm:flex-row">
          <p className="text-[13px] text-neutral-400">
            © {new Date().getFullYear()} RootStack Digital Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-neutral-400">
            <a href="#top" className="transition-colors duration-300 hover:text-ink">
              Privacy
            </a>
            <a href="#top" className="transition-colors duration-300 hover:text-ink">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>);

}

function FooterColumn({
  title,
  links



}: {title: string;links: {label: string;href: string;}[];}) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400">
        {title}
      </h3>
      <ul className="mt-6 flex flex-col gap-3.5">
        {links.map((link) =>
        <li key={link.label}>
            <a
            href={link.href}
            className="text-[15px] text-neutral-500 transition-all duration-300 hover:text-ink">
            
              {link.label}
            </a>
          </li>
        )}
      </ul>
    </div>);

}