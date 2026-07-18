import {
  PenToolIcon,
  CodeIcon,
  SmartphoneIcon,
  CpuIcon,
  LayersIcon,
  RocketIcon,
  DatabaseIcon,
  UsersIcon,
  PlugIcon,
  LinkIcon,
  SparklesIcon,
  CloudIcon,
  PaletteIcon,
  BadgeCheckIcon,
  BoxIcon,
  WrenchIcon,
  GaugeIcon,
  LightbulbIcon,
  type LucideIcon } from
'lucide-react';

export const SITE = {
  name: 'Ahamic Solutions',
  tagline: 'We engineer software worth trusting.',
  subline:
  'Ahamic Solutions is a product studio for ambitious teams — designing, building, and scaling digital products that feel effortless and perform under pressure.',
  email: 'hello@ahamic.com',
  phone: '+1 (415) 555-0148',
  address: '580 Market Street, Suite 1200, San Francisco, CA'
};

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  blurb: string;
  category: 'Design' | 'Engineering' | 'Growth';
};

export const SERVICES: Service[] = [
{ slug: 'ui-ux-design', title: 'UI/UX Design', icon: PenToolIcon, category: 'Design', blurb: 'Research-driven interfaces that turn complexity into clarity.' },
{ slug: 'product-design', title: 'Product Design', icon: BoxIcon, category: 'Design', blurb: 'End-to-end product thinking from insight to shipped experience.' },
{ slug: 'graphics-design', title: 'Graphics Design', icon: PaletteIcon, category: 'Design', blurb: 'Visual systems and assets crafted for pixel-perfect impact.' },
{ slug: 'branding', title: 'Branding', icon: BadgeCheckIcon, category: 'Design', blurb: 'Identities that feel inevitable — memorable, cohesive, premium.' },
{ slug: 'web-development', title: 'Web Development', icon: CodeIcon, category: 'Engineering', blurb: 'Blazing-fast, accessible web apps built on modern foundations.' },
{ slug: 'mobile-app-development', title: 'Mobile App Development', icon: SmartphoneIcon, category: 'Engineering', blurb: 'Native-grade iOS & Android experiences your users love.' },
{ slug: 'software-development', title: 'Software Development', icon: CpuIcon, category: 'Engineering', blurb: 'Robust, maintainable systems engineered to last.' },
{ slug: 'saas-development', title: 'SaaS Development', icon: LayersIcon, category: 'Engineering', blurb: 'Multi-tenant platforms designed to scale from day one.' },
{ slug: 'mvp-development', title: 'MVP Development', icon: RocketIcon, category: 'Engineering', blurb: 'Validate fast with a lovable, launch-ready first release.' },
{ slug: 'erp-development', title: 'ERP Development', icon: DatabaseIcon, category: 'Engineering', blurb: 'Operational systems that unify and streamline your business.' },
{ slug: 'crm-development', title: 'CRM Development', icon: UsersIcon, category: 'Engineering', blurb: 'Customer platforms that turn relationships into revenue.' },
{ slug: 'api-development', title: 'API Development', icon: PlugIcon, category: 'Engineering', blurb: 'Well-documented, secure APIs that power everything.' },
{ slug: 'third-party-integration', title: 'Third-party Integration', icon: LinkIcon, category: 'Engineering', blurb: 'Seamless connections across your entire tool stack.' },
{ slug: 'ai-integration', title: 'AI Integration', icon: SparklesIcon, category: 'Engineering', blurb: 'Practical AI that adds real leverage, not novelty.' },
{ slug: 'cloud-solutions', title: 'Cloud Solutions', icon: CloudIcon, category: 'Engineering', blurb: 'Resilient cloud architecture with cost under control.' },
{ slug: 'website-maintenance', title: 'Website Maintenance', icon: WrenchIcon, category: 'Growth', blurb: 'Proactive care that keeps everything fast and secure.' },
{ slug: 'performance-optimization', title: 'Performance Optimization', icon: GaugeIcon, category: 'Growth', blurb: 'Measurable speed, reliability, and Core Web Vitals wins.' },
{ slug: 'technical-consulting', title: 'Technical Consulting', icon: LightbulbIcon, category: 'Growth', blurb: 'Senior guidance on architecture, hiring, and strategy.' }];


export const STATS = [
{ value: 220, suffix: '+', label: 'Products shipped' },
{ value: 14, suffix: '', label: 'Countries served' },
{ value: 98, suffix: '%', label: 'Client retention' },
{ value: 40, suffix: 'M+', label: 'Users reached' }];


export const INDUSTRIES = [
'Startups', 'SaaS', 'Enterprise', 'Healthcare', 'FinTech', 'EdTech',
'Construction', 'Real Estate', 'Logistics', 'AI', 'E-commerce', 'Travel',
'Hospitality', 'Sports', 'Marketplaces', 'Booking Platforms'];


export const CLIENTS = ['Northwind', 'Vertex', 'Lumen', ' Orbital'.trim(), 'Quantifi', 'Halcyon', 'Meridian', 'Cascade'];

export const WHY = [
{ title: 'Senior-only teams', body: 'Every engagement is staffed with senior designers and engineers — no hand-offs to juniors, no learning on your budget.' },
{ title: 'Design & engineering, unified', body: 'One accountable team owns the outcome from first sketch to production deploy, so nothing gets lost in translation.' },
{ title: 'Built to scale', body: 'Architecture, testing, and observability baked in from day one — so your product grows without rewrites.' },
{ title: 'Radical transparency', body: 'Shared roadmaps, live demos, and honest tradeoffs. You always know exactly where things stand.' }];


export const PROCESS = [
{ step: '01', title: 'Discovery', body: 'We align on goals, users, constraints, and what success actually looks like.' },
{ step: '02', title: 'Research', body: 'Market, competitor, and user research to ground every decision in evidence.' },
{ step: '03', title: 'Planning', body: 'Scope, architecture, and a realistic roadmap with clear milestones.' },
{ step: '04', title: 'Wireframes', body: 'Low-fidelity flows to validate structure before a single pixel is polished.' },
{ step: '05', title: 'UI Design', body: 'High-fidelity, on-brand interfaces with a complete design system.' },
{ step: '06', title: 'Development', body: 'Clean, tested, production-grade code shipped in tight iterations.' },
{ step: '07', title: 'QA Testing', body: 'Automated and manual testing across devices, edge cases, and load.' },
{ step: '08', title: 'Deployment', body: 'Zero-downtime releases with monitoring and rollback in place.' },
{ step: '09', title: 'Maintenance', body: 'Ongoing optimization, support, and iteration as you scale.' }];


export const TECHNOLOGIES: {group: string;items: string[];}[] = [
{ group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Vue', 'Svelte'] },
{ group: 'Backend', items: ['Node.js', 'Go', 'Python', 'Rust', 'GraphQL', '.NET'] },
{ group: 'Database', items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma'] },
{ group: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Vercel', 'Cloudflare'] },
{ group: 'DevOps', items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'] },
{ group: 'AI', items: ['OpenAI', 'LangChain', 'Pinecone', 'PyTorch', 'Hugging Face'] },
{ group: 'Mobile', items: ['React Native', 'Swift', 'Kotlin', 'Flutter'] },
{ group: 'Payments', items: ['Stripe', 'Adyen', 'PayPal', 'Plaid'] }];


export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  image: string;
  metrics: {label: string;value: string;}[];
};

export const PROJECTS: Project[] = [
{
  slug: 'northwind-fintech',
  title: 'A payments platform trusted with billions',
  client: 'Northwind',
  category: 'FinTech',
  year: '2025',
  summary: 'A ground-up rebuild of a payments platform — faster onboarding, real-time reconciliation, and a design system that scaled across 6 products.',
  image: 'PROJECT_NORTHWIND',
  metrics: [{ label: 'Faster onboarding', value: '3.4x' }, { label: 'Uptime', value: '99.99%' }]
},
{
  slug: 'lumen-health',
  title: 'Care coordination for 2M+ patients',
  client: 'Lumen Health',
  category: 'Healthcare',
  year: '2024',
  summary: 'A HIPAA-compliant care platform connecting patients, providers, and payers with an interface clinicians actually enjoy using.',
  image: 'PROJECT_LUMEN',
  metrics: [{ label: 'Admin time saved', value: '42%' }, { label: 'NPS', value: '+71' }]
},
{
  slug: 'vertex-ai',
  title: 'An AI workspace that ships answers',
  client: 'Vertex AI',
  category: 'AI',
  year: '2025',
  summary: 'A retrieval-augmented workspace turning scattered company knowledge into instant, cited answers for enterprise teams.',
  image: 'PROJECT_VERTEX',
  metrics: [{ label: 'Search time', value: '-88%' }, { label: 'Adoption', value: '94%' }]
},
{
  slug: 'cascade-logistics',
  title: 'Real-time visibility across the supply chain',
  client: 'Cascade',
  category: 'Logistics',
  year: '2024',
  summary: 'A control-tower platform giving operations teams live tracking, predictive ETAs, and automated exception handling.',
  image: 'PROJECT_CASCADE',
  metrics: [{ label: 'On-time delivery', value: '+27%' }, { label: 'Manual work', value: '-60%' }]
}];


export const TESTIMONIALS = [
{ quote: 'Ahamic operates like an in-house team that happens to be the best you have ever hired. They shipped what three prior vendors could not.', name: 'Sarah Chen', role: 'CTO, Northwind', avatar: 'AVATAR_SARAH' },
{ quote: 'The craft is extraordinary, but what sets them apart is judgment. They pushed back, made us better, and delivered ahead of schedule.', name: 'Marcus Reyes', role: 'VP Product, Lumen Health', avatar: 'AVATAR_MARCUS' },
{ quote: 'We went from prototype to a platform serving enterprise customers in four months. Ahamic made the impossible feel routine.', name: 'Priya Nair', role: 'Founder & CEO, Vertex AI', avatar: 'AVATAR_PRIYA' },
{ quote: 'Every detail is considered. Our conversion rate climbed 34% within weeks of launch, and the code is a joy to maintain.', name: 'Daniel Okafor', role: 'Head of Growth, Cascade', avatar: 'AVATAR_DANIEL' }];


export const AWARDS = [
{ name: 'Awwwards', detail: 'Site of the Day × 4' },
{ name: 'CSS Design Awards', detail: 'Best UI, 2025' },
{ name: 'Clutch', detail: 'Top B2B Company' },
{ name: 'Webby', detail: 'Honoree, Product Design' }];


export const FAQS = [
{ q: 'How do engagements typically work?', a: 'Most clients start with a discovery sprint to align on scope and approach, then move into a fixed-scope build or an ongoing product partnership. We tailor the model to your stage and goals.' },
{ q: 'How fast can we get started?', a: 'For most projects we can kick off within one to two weeks. For urgent MVPs we have accelerated onboarding that gets a senior team moving in days.' },
{ q: 'Do you work with existing teams and codebases?', a: 'Absolutely. We frequently embed alongside in-house teams, adopt existing stacks, and improve legacy systems without disruptive rewrites.' },
{ q: 'What does pricing look like?', a: 'We offer fixed-scope project pricing and monthly product-partnership retainers. After a short discovery call we provide a clear, itemized proposal — no surprises.' },
{ q: 'Who owns the code and IP?', a: 'You do — fully. All source code, design files, and intellectual property transfer to you. We build for handoff and long-term maintainability from day one.' },
{ q: 'Can you help with maintenance after launch?', a: 'Yes. Many clients continue with us for ongoing optimization, support, and iteration. We also offer thorough handoff and documentation if you prefer to run in-house.' }];


export const PRICING = [
{ name: 'Sprint', price: '$12k', period: '/ 2 weeks', desc: 'A focused burst to validate, design, or prototype a single big idea.', features: ['Discovery workshop', 'UX & UI design', 'Interactive prototype', 'Senior design lead', 'Async daily updates'], featured: false },
{ name: 'Build', price: '$45k', period: '/ month', desc: 'A dedicated senior pod designing and shipping your product end-to-end.', features: ['Design + engineering pod', 'Weekly production releases', 'Full design system', 'QA & testing', 'Dedicated product manager', 'Analytics & monitoring'], featured: true },
{ name: 'Partner', price: 'Custom', period: '', desc: 'A long-term partnership for enterprises scaling multiple products.', features: ['Multiple squads', 'Architecture & strategy', 'SLA & priority support', 'Security & compliance', 'Quarterly roadmapping', 'Executive reporting'], featured: false }];


export const NAV_LINKS = [
{ label: 'Services', to: '/services' },
{ label: 'Work', to: '/portfolio' },
{ label: 'About', to: '/about' },
{ label: 'Pricing', to: '/pricing' },
{ label: 'Contact', to: '/contact' }];


export const BLOG = [
{ slug: 'design-systems-that-scale', title: 'Design systems that actually scale', category: 'Design', read: '6 min', date: 'Jun 2026', excerpt: 'The organizational patterns behind design systems that survive contact with real product teams.' },
{ slug: 'shipping-ai-features', title: 'Shipping AI features people trust', category: 'AI', read: '8 min', date: 'May 2026', excerpt: 'How to move past demos and build AI experiences that earn their place in production.' },
{ slug: 'the-mvp-trap', title: 'The MVP trap (and how to avoid it)', category: 'Product', read: '5 min', date: 'Apr 2026', excerpt: 'Minimum viable does not mean minimum quality. Where teams go wrong, and what to do instead.' }];