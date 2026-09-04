export type Step = {
  number: string;
  title: string;
  description: string;
  duration: string;
};

export const processSteps: Step[] = [
{
  number: '01',
  title: 'Discovery',
  description:
  'We map the business, the users, and the constraints — then agree on what success actually looks like.',
  duration: 'Week 1'
},
{
  number: '02',
  title: 'Strategy',
  description:
  'Information architecture, flows, and scope. A single plan everyone signs off on before pixels exist.',
  duration: 'Week 2'
},
{
  number: '03',
  title: 'Design',
  description:
  'High-fidelity interface design with a real component system, motion specs, and every state accounted for.',
  duration: 'Weeks 3–5'
},
{
  number: '04',
  title: 'Development',
  description:
  'Typed, tested, reviewable code shipped in weekly increments you can click through as it grows.',
  duration: 'Weeks 6–9'
},
{
  number: '05',
  title: 'Launch',
  description:
  'Performance passes, analytics, handover documentation — and a team that stays on after go-live.',
  duration: 'Week 10'
}];


export type Advantage = {
  title: string;
  description: string;
  icon: 'zap' | 'layers' | 'code' | 'search' | 'palette' | 'bot';
};

export const advantages: Advantage[] = [
{
  title: 'Fast Delivery',
  description: 'Weekly shipping cadence with a live environment from day one. No black-box months.',
  icon: 'zap'
},
{
  title: 'Scalable Solutions',
  description: 'Architecture that holds up at 100 users and at 100,000 — without a rewrite.',
  icon: 'layers'
},
{
  title: 'Clean Code',
  description: 'Typed, documented, reviewed. Your in-house team can pick it up the day we hand over.',
  icon: 'code'
},
{
  title: 'SEO Optimized',
  description: 'Semantic markup, structured data, and sub-second loads baked in, not bolted on.',
  icon: 'search'
},
{
  title: 'Modern UI/UX',
  description: 'Interface craft at the level of the products your customers already use every day.',
  icon: 'palette'
},
{
  title: 'AI Powered Workflows',
  description: 'Automation woven through the product so your team spends its hours on the work that matters.',
  icon: 'bot'
}];


export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
{
  quote:
  'RootStack rebuilt our platform in ten weeks and it still feels new two years later. The craft is genuinely rare.',
  name: 'Elena Marchetti',
  role: 'VP Product, Northline Capital',
  initials: 'EM'
},
{
  quote:
  'They treated our roadmap like their own. Fewer meetings, sharper decisions, and a product our customers actually mention.',
  name: 'Daniel Okafor',
  role: 'Founder, Lumen Health',
  initials: 'DO'
},
{
  quote:
  'The automation work paid for itself in one quarter. Our ops team went from firefighting to forecasting.',
  name: 'Sara Lindqvist',
  role: 'COO, Atlas Operations',
  initials: 'SL'
}];


export const technologies: string[] = [
'React',
'Next.js',
'TypeScript',
'Node.js',
'Supabase',
'Tailwind CSS',
'Framer Motion',
'OpenAI'];


export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
{
  question: 'How long does a typical project take?',
  answer:
  'Most engagements run eight to twelve weeks from discovery to launch. Smaller marketing sites ship in three to four; larger platforms are scoped in phases so something valuable goes live early.'
},
{
  question: 'Do you work with in-house teams?',
  answer:
  'Frequently. We can lead end-to-end or embed alongside your designers and engineers, working in your repo, your rituals, and your tooling.'
},
{
  question: 'What does an engagement cost?',
  answer:
  'Projects start at $18k for a focused website and scale from there based on surface area. You get a fixed scope and a fixed price before we begin — no hourly surprises.'
},
{
  question: 'Who owns the code and design files?',
  answer:
  'You do, entirely, from the first commit. Everything is delivered in your repositories and your design workspace with full documentation.'
},
{
  question: 'Do you support the product after launch?',
  answer:
  'Yes. Most clients continue on a monthly retainer covering iteration, performance, and new feature work. There is never a lock-in period.'
}];