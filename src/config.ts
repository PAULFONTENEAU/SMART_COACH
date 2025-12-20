// ============================================
// SITE CONFIGURATION
// ============================================

import type { icons } from "@iconify-json/simple-icons/index.js";

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'SMART COACH',
    title: 'SMART COACH - Ton coach sportif personel disponible 24h/24h',
    description:
      "Boostez vos performances avec un coach sportif IA. Programmes adaptés, suivi précis et progression garantie. Commence gratuitement aujourd'hui",
    keywords:
      'AI agents, automation, workflow automation, AI platform, business automation',
    email: "peyofonteneau8@gmail.com",

    // Open Graph / Twitter
    ogTitle: 'AI Agent Platform - Intelligent Automation',
    ogDescription:
      'Transform your business with autonomous AI agents that work 24/7',
    twitterCard: 'summary_large_image',
    twitterTitle: 'AI Agent Platform',
    twitterDescription: 'Intelligent automation for modern teams',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Les avantages', href: '#features' },
      { name: 'Fonctionnement', href: '#how-it-works' },
      { name: 'Tarification', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Nous contacter',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Coach sportif personnel',
    subheadline: 'Crée pour ta progression',
    description:
      'Un coach IA qui vous connaît vraiment : objectifs, charge d’entraînement, blessures, fréquence cardiaque… votre programme devient 100% sur-mesure.',
    cta: {
      primary: {
        text: 'Commence aujourd hui',
        href: '#contact',
      },
      secondary: {
        text: 'Comment ça marche ?',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '2', label: 'Comptes en activités' },
      { value: '24/24', label: 'Disponibilité' },
      { value: '0', label: 'Nb objectifs validés' },
    ],
  },

  // ============================================
  // presentation
  // ============================================
  presentation: {
    title: "Qui sommes nous  ?",
    subtitle:
      "Deux jeunes passionnées de triathlon, en quête d’une préparation plus intelligente et accessible.",
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: "les avantages de smart_coach",
    subtitle:
      "Utiliser smart_coach vous donne de nombreux avantages par rapport à un entrainement seul et même en comparaison à un coach classique.",
    items: [
      { icon: 'lightning', title: 'Autonomous Execution' },
      { icon: 'code', title: 'Smart Integration' },
      { icon: 'chart', title: 'Real-Time Analytics' },
      { icon: 'chat', title: 'Natural Language' },
      { icon: 'shield', title: 'Enterprise Security' },
      { icon: 'clock', title: '24/7 Operation' },
      { icon: 'brush', title: 'Custom Workflows' },
      { icon: 'layers', title: 'Multi-Agent Teams' },
      { icon: 'zap', title: 'Instant Scaling' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'Le fonctionnement',
    subtitle: "Voici le fonctionnement de ton futur coach :",
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Vos avis',
    subtitle: "Retrouvez ci-dessous vos futurs avis sur notre coach !",
    companyLogos: [
      'TECHFLOW',
      'INNOVATE',
      'DATASTREAM',
      'CLOUDSYNC',
      'NEXUSAI',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Tarification',
    subtitle:
      'Retrouvez ici nos différents plans de paiements. Chacun ses besoins, chacun son plan :)',
    plans: [
      {
        name: 'Débutant',
        price: '4.99 euros',
        period: '/mois',
        description: 'Parfait pour débuter rapidement votre prépa spécifique et adapté sans prise tête',
        features: [
          "Canal d'entrainement",
          '5 requêtes adaptatives/ semaine',
          'Disponibilté du support',
        ],
        cta: {
          text: 'Commencer',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Professionel',
        price: '10 euros',
        period: '/mois',
        description: 'Pour aller plus loin',
        badge: 'MOST POPULAR',
        features: [
          "Canal d'entrainement",
          "Canal nutrition",
          'nb illimités de requêtes adaptatives/ semaine',
          'Disponibilté du support',
        ],
        cta: {
          text: 'Commencer',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Entreprise',
        price: '',
        period: '',
        description: "Parce que vos employés mérite d'atteindre leurs objectifs spotifs",
        features: [
          'Smart-coach sera personalisé et adapté à votre demande',
          'Disponibilté du support',
        ],
        cta: {
          text: 'Nous contacter',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Les questions les plus posées',
    subtitle: 'Tout ce que vous avez besoin de savoir à propos de smart_coach',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Nous contacter',
    subtitle:
      'Vous avez une demande en particulier ? Contactez nous via le formulaire ci-contre.',
    benefits: [
      'Retour en 48h',
      'Demandes entreprises',
      'Demandes spécifiques ou questions',
    ],
    email: 'smartcoach.france@gmail.com',
    form: {
      cta: 'Envoyer',
      fields: {
        name: {
          label: 'Nom complet',
          placeholder: 'Paul Dupont',
          required: true,
        },
        email: {
          label: 'mail',
          placeholder: 'paul.dupont@entreprise.com',
          required: true,
        },
        company: {
          label: 'Entreprise (si vous nous contacter pour un besoin entreprise)',
          placeholder: "Nom de l'entreprise",
          required: false,
        },
        message: {
          label: 'Le sujet de votre demande',
          placeholder: 'Le détail de votre demande',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Un coach IA qui vous connaît vraiment : objectifs, charge d’entraînement, blessures, fréquence cardiaque… votre programme devient 100% sur-mesure.',
    columns: [
      {
        title: 'Produit',
        links: [
          { name: 'Les avantages', href: '#features' },
          { name: 'Prix', href: '#pricing' },
          { name: 'Accueil', href: '#' },
          { name: 'A compléter (API ?)', href: '#' },
          { name: 'A compléter (log ?)', href: '#' },
        ],
      },
      {
        title: 'A propos de smart_coach',
        links: [
          { name: 'Les fondateurs', href: '#presentation' },
          { name: 'Contact', href: '#contact' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'Security', href: '#' },
          { name: 'Compliance', href: '#' },
        ],
      },
    ],
    social: [
      { name: 'Strava', href: 'https://www.strava.com/login?hl=fr-FR', icon: 'strava' },
      { name: 'Instagram', href: 'https://www.instagram.com/', icon: "instagram" },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/', icon: 'linkedin' },
    ],
    copyright: `${new Date().getFullYear()} plateform de coaching IA personalisé, tout droit reservés`,
  },
};
