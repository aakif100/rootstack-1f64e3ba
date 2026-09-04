export type Project = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  year: string;
};

export const projects: Project[] = [
{
  id: 'northline',
  name: 'Northline Capital',
  category: 'Website',
  description:
  'A restrained financial dashboard and marketing site for a private capital firm, rebuilt around clarity and trust.',
  image: "/7d1a6fdc-8866-41ba-84ec-f50fb5d8be12.jpg",

  year: '2025'
},
{
  id: 'lumen',
  name: 'Lumen Health',
  category: 'App',
  description:
  'A calm patient companion app with realtime care plans, delivered from prototype to App Store in eleven weeks.',
  image: "/925b8c75-d079-425c-8b2e-3371c4915f04.jpg",

  year: '2025'
},
{
  id: 'atlas',
  name: 'Atlas Operations',
  category: 'AI Automation',
  description:
  'An agent network that triages operations tickets across six systems and cut manual handling by 74%.',
  image: "/3a50322c-ec0b-4f6b-a15e-226c7f60c08c.jpg",

  year: '2024'
},
{
  id: 'form',
  name: 'Form Studio',
  category: 'Website',
  description:
  'An editorial commerce experience for a design-led furniture label, with a storefront that loads in under a second.',
  image: "/3d6a9392-2115-4884-911b-234668ca567d.jpg",

  year: '2024'
}];