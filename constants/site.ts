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
  tagline: 'Software Development & Digital Solutions Company',
  subline:
  'Ahamic Solutions is a software development company providing web development, mobile app development, SaaS, UI/UX design, and custom software solutions.',
  email: 'ahamicsolutions@gmail.com',
  phone: '01575890667',
  address: 'Dhaka, Bangladesh'
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
  { value: 30, suffix: '+', label: 'Projects completed' },
  { value: 5, suffix: '+', label: 'Team members' },
  { value: 95, suffix: '%', label: 'Client satisfaction' },
  { value: 5, suffix: '+', label: 'Years experience' }];


export const INDUSTRIES = [
'Startups', 'SaaS', 'Enterprise', 'Healthcare', 'FinTech', 'EdTech',
'Construction', 'Real Estate', 'Logistics', 'AI', 'E-commerce', 'Travel',
'Hospitality', 'Sports', 'Marketplaces', 'Booking Platforms'];


export const CLIENTS = ['Web Platform', 'Mobile App', 'SaaS Product', 'Database Admin', 'Portal', 'Cloud Infrastructure'];

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
  slug: 'saas-dashboard',
  title: 'Custom SaaS platform & analytics dashboard',
  client: 'Software Client',
  category: 'SaaS Development',
  year: '2025',
  summary: 'Designed and engineered a high-performance analytics dashboard, simplifying user workflows and data visualizations.',
  image: 'PROJECT_VERTEX',
  metrics: [{ label: 'Workflow speed', value: '1.5x' }, { label: 'User adoption', value: '92%' }]
},
{
  slug: 'e-commerce-portal',
  title: 'Modern and accessible e-commerce platform',
  client: 'Retail Partner',
  category: 'Web Development',
  year: '2024',
  summary: 'Developed a robust, search-optimized e-commerce storefront with dynamic cart logic and secure payment integrations.',
  image: 'PROJECT_CASCADE',
  metrics: [{ label: 'Page load time', value: '-45%' }, { label: 'Conversion rate', value: '+12%' }]
},
{
  slug: 'hospital-management',
  title: 'Internal management system for clinical workflows',
  client: 'Healthcare Partner',
  category: 'Software Development',
  year: '2025',
  summary: 'Built a secure, custom administration platform to manage scheduling, billing, and patient records securely.',
  image: 'PROJECT_LUMEN',
  metrics: [{ label: 'Admin time saved', value: '30%' }, { label: 'Uptime', value: '99.9%' }]
},
{
  slug: 'logistics-tracker',
  title: 'Real-time tracking and delivery management app',
  client: 'Logistics Client',
  category: 'Mobile App Development',
  year: '2024',
  summary: 'Engineered a cross-platform mobile app for real-time tracking, offline sync, and delivery routing.',
  image: 'PROJECT_NORTHWIND',
  metrics: [{ label: 'On-time delivery', value: '+15%' }, { label: 'Manual work', value: '-50%' }]
}];


export const TESTIMONIALS = [
{ quote: 'Ahamic Solutions operates like an extension of our own team. They designed and shipped our application on schedule and with high attention to detail.', name: 'Sarah Chen', role: 'CTO, Software Client', avatar: 'AVATAR_SARAH' },
{ quote: 'The team design choices and execution were excellent. They delivered a highly responsive system that handles our workload effortlessly.', name: 'Marcus Reyes', role: 'VP Product, Retail Partner', avatar: 'AVATAR_MARCUS' }];


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