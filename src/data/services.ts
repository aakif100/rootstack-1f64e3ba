export type Service = {
  id: string;
  title: string;
  description: string;
  icon: 'globe' | 'phone' | 'spark';
  points: string[];
};

export const services: Service[] = [
{
  id: 'web',
  title: 'Website Development',
  description:
  'Marketing sites and platforms engineered for speed, clarity, and conversion — pixel-precise from first frame to production.',
  icon: 'globe',
  points: ['Design systems', 'Headless CMS', 'Core Web Vitals']
},
{
  id: 'app',
  title: 'App Development',
  description:
  'Native-feeling web and mobile products with considered interaction design and architecture that scales with your team.',
  icon: 'phone',
  points: ['iOS & Android', 'Web apps', 'Realtime data']
},
{
  id: 'ai',
  title: 'AI Automation',
  description:
  'Intelligent workflows that remove the manual work — copilots, agents, and integrations wired into the tools you already use.',
  icon: 'spark',
  points: ['LLM copilots', 'Workflow agents', 'Data pipelines']
}];