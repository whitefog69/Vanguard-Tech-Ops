import type { Translated } from '@/src/i18n/LanguageContext';

export interface PageData {
  id: string;
  title: Translated;
  path: string;
  description: Translated;
  keywords: string[];
  icon: 'Server' | 'Globe' | 'Brain' | 'ShoppingBag' | 'Palette' | 'Terminal' | 'Mail';
}

// Keywords cover both languages so search works whichever one the visitor types in.
export const siteData: PageData[] = [
  {
    id: 'cloud',
    title: { en: 'Virtualization & Cloud', fr: 'Virtualisation & Cloud' },
    path: '/services/cloud',
    description: {
      en: 'Expert orchestration of cloud infrastructure and virtualization environments for enterprise stability and security.',
      fr: "Orchestration experte d'infrastructures cloud et d'environnements virtualisés pour une stabilité et une sécurité de niveau entreprise.",
    },
    keywords: ['cloud', 'aws', 'oracle', 'linux', 'windows', 'virtualization', 'virtualisation', 'infrastructure', 'serveur', 'hébergement'],
    icon: 'Server'
  },
  {
    id: 'web-dev',
    title: { en: 'Precision Web & Ecom Development', fr: 'Développement Web & E-commerce' },
    path: '/services/web-dev',
    description: {
      en: 'Bespoke web and e-commerce engineering focused on speed, clean architecture, and high-conversion experiences.',
      fr: 'Développement web et e-commerce sur mesure, axé sur la rapidité, une architecture propre et des expériences qui convertissent.',
    },
    keywords: ['web', 'ecom', 'e-commerce', 'wordpress', 'shopify', 'ui', 'ux', 'development', 'développement', 'site'],
    icon: 'Globe'
  },
  {
    id: 'ai-systems',
    title: { en: 'AI & Automation', fr: 'IA & Automatisation' },
    path: '/services/ai-systems',
    description: {
      en: 'Creating custom bots and autonomous systems to handle specialized logic and eliminate manual operational tasks.',
      fr: 'Création de bots sur mesure et de systèmes autonomes pour gérer une logique spécifique et éliminer les tâches manuelles.',
    },
    keywords: ['ai', 'ia', 'automation', 'automatisation', 'bots', 'integration', 'intégration', 'workflow', 'llm'],
    icon: 'Brain'
  },
  {
    id: 'shopify',
    title: { en: 'Shopify, WordPress Integrations & App Development', fr: 'Shopify, WordPress & Développement d’apps' },
    path: '/services/shopify',
    description: {
      en: 'Engineering proprietary apps and technical automation to ensure your store scales effortlessly with demand.',
      fr: 'Conception d’applications sur mesure et d’automatisations pour que votre boutique suive la demande sans effort.',
    },
    keywords: ['shopify', 'wordpress', 'app development', 'applications', 'integrations', 'intégrations', 'plugins', 'boutique'],
    icon: 'ShoppingBag'
  },
  {
    id: 'design',
    title: { en: 'Graphic & Web Design', fr: 'Design Graphique & Web' },
    path: '/services/design',
    description: {
      en: 'Crafting cohesive visual identities and visually striking, user-centric website layouts that align with modern aesthetics.',
      fr: 'Création d’identités visuelles cohérentes et de maquettes web marquantes, centrées sur l’utilisateur et dans l’air du temps.',
    },
    keywords: ['graphic', 'graphique', 'design', 'branding', 'logo', 'ui', 'ux', 'visual identity', 'identité visuelle'],
    icon: 'Palette'
  },
  {
    id: 'about',
    title: { en: 'About Us', fr: 'À propos' },
    path: '/about',
    description: {
      en: 'Learn about our story, mission, and the architecture process behind our technical sovereignty.',
      fr: 'Découvrez notre histoire, notre mission et la méthode qui fonde notre souveraineté technique.',
    },
    keywords: ['about', 'à propos', 'company', 'entreprise', 'story', 'histoire', 'mission', 'architecture'],
    icon: 'Terminal'
  },
  {
    id: 'contact',
    title: { en: 'Contact', fr: 'Contact' },
    path: '/contact',
    description: {
      en: 'Get in touch with us for a consultation or to discuss your infrastructure needs.',
      fr: 'Contactez-nous pour une consultation ou pour parler de vos besoins en infrastructure.',
    },
    keywords: ['contact', 'email', 'consultation', 'inquiry', 'devis', 'demande'],
    icon: 'Mail'
  }
];
