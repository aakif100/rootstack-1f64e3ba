import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import { Reveal } from './Reveal';
import { SectionHeading } from './SectionHeading';

const SERVICES = ['Website Development', 'App Development', 'AI Automation', 'Other'];
const BUDGETS = ['Under $10k', '$10k – $25k', '$25k – $50k', '$50k+'];
const TIMELINES = ['ASAP', '1–3 months', '3–6 months', 'Exploring'];

const fieldClass =
  'w-full rounded-2xl border border-black/[0.08] bg-white/70 px-5 py-3.5 text-[15px] text-ink outline-none backdrop-blur-xl transition-all duration-300 placeholder:text-neutral-400 focus:border-black/20 focus:bg-white focus:shadow-[0_14px_30px_-20px_rgba(0,0,0,0.6)]';
const labelClass =
  'mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400';

export function Inquiry() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const next: Record<string, string> = {};
    if (!String(data.get('name') ?? '').trim()) next['name'] = 'Please tell us your name.';
    const email = String(data.get('email') ?? '').trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next['email'] = 'Enter a valid email address.';
    if (String(data.get('description') ?? '').trim().length < 10)
      next['description'] = 'A sentence or two about the project helps.';
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  };

  return (
    <section id="contact" className="relative w-full px-5 py-28 sm:px-6 lg:px-10 lg:py-36">
      <div className="mx-auto max-w-[1000px]">
        <SectionHeading
          eyebrow="Start a Project"
          title="Tell us what you want to build."
          description="Share the essentials and we will come back within one business day with a point of view, a rough scope, and next steps."
        />

        <Reveal delay={0.08}>
          <div className="glass-panel mt-14 rounded-[30px] p-6 sm:p-10">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center py-16 text-center"
              >
                <span className="metal-surface flex h-14 w-14 items-center justify-center rounded-2xl text-ink">
                  <CheckIcon className="h-6 w-6" strokeWidth={1.8} />
                </span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-ink">
                  Thanks — your brief is with us.
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-neutral-500">
                  We read every enquiry personally and reply within one business day.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Name
                  </label>
                  <input id="name" name="name" className={fieldClass} placeholder="Jane Doe" />
                  {errors['name'] && <p className="mt-2 text-xs text-red-600">{errors['name']}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    className={fieldClass}
                    placeholder="Northline Capital"
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={fieldClass}
                    placeholder="jane@company.com"
                  />
                  {errors['email'] && <p className="mt-2 text-xs text-red-600">{errors['email']}</p>}
                </div>

                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className={fieldClass}
                    placeholder="+1 555 000 1234"
                  />
                </div>

                <div>
                  <label className={labelClass} htmlFor="service">
                    Service
                  </label>
                  <select id="service" name="service" className={fieldClass} defaultValue={SERVICES[0]}>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="budget">
                    Budget
                  </label>
                  <select id="budget" name="budget" className={fieldClass} defaultValue={BUDGETS[1]}>
                    {BUDGETS.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={labelClass} htmlFor="timeline">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className={fieldClass}
                    defaultValue={TIMELINES[1]}
                  >
                    {TIMELINES.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="description">
                    Project description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    className={`${fieldClass} resize-none`}
                    placeholder="What are you building, who is it for, and what does success look like?"
                  />
                  {errors['description'] && (
                    <p className="mt-2 text-xs text-red-600">{errors['description']}</p>
                  )}
                </div>

                <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[13px] text-neutral-400">
                    No newsletters. Your details stay between us.
                  </p>
                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-ink px-8 py-4 text-[16px] font-medium text-white transition-all duration-500 hover:shadow-[0_22px_44px_-18px_rgba(0,0,0,0.7)] sm:w-auto"
                  >
                    <span className="relative z-10">Send Project Brief</span>
                    <ArrowRightIcon className="relative z-10 h-[18px] w-[18px] transition-transform duration-500 group-hover:translate-x-1" />
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-[900ms] group-hover:translate-x-full" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
