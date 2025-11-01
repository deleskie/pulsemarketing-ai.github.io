export interface PricingTier {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  bestFor: string;
  highlights: string[];
  includes: string[];
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'ignite',
    name: 'Ignite',
    description: 'All the essentials to launch a pulse-driven marketing hub for high-velocity boutiques and hospitality concepts.',
    priceLabel: '$1,250 / month',
    bestFor: 'Indie hospitality, wellness, and lifestyle brands ready to centralize campaigns, loyalty, and storytelling.',
    highlights: [
      'Up to 8 branded workspaces with shared intelligence',
      'Pulse Playbooks starter library with concierge onboarding',
      'Storyteller briefings with revenue-minded insights twice weekly',
    ],
    includes: [
      'Signal Synthesis Grid with core channel connectors',
      'Audience Amplifier automations across email, SMS, and paid social',
      'Journey Composer templates tuned for retention and referrals',
      'Guardian Governance light tier with brand compliance guardrails',
    ],
    cta: 'Kickstart Ignite',
  },
  {
    id: 'momentum',
    name: 'Momentum',
    description: 'Scale orchestration, experimentation, and compliance across regions with embedded strategy partners.',
    priceLabel: '$2,850 / month',
    bestFor: 'Multi-location collectives coordinating launches, events, and loyalty at neighborhood speed.',
    highlights: [
      'Unlimited workspaces, roles, and permission tiers',
      'Dedicated strategist office hours every sprint',
      'Experiment velocity lab with quarterly business reviews',
    ],
    includes: [
      'Everything in Ignite plus advanced spend optimization copilots',
      'Integration Atlas with Salesforce, HubSpot, Shopify, and Snowflake accelerators',
      'Experience Lab storyboards with staff enablement rituals',
      'Guardian Governance pro tier with regulatory simulations',
    ],
    cta: 'Build Momentum',
  },
  {
    id: 'constellation',
    name: 'Constellation',
    description: 'Co-create new revenue lines with our product lab, data scientists, and immersive activation crews.',
    priceLabel: 'Custom partnership',
    bestFor: 'Futurist groups investing in experiential pop-ups, hospitality labs, and multi-brand ventures.',
    highlights: [
      'Embedded product and data pods with roadmap influence',
      'Private model hosting and data residency options',
      'Innovation residencies and immersive launch coverage',
    ],
    includes: [
      'All Momentum capabilities plus bespoke module design',
      'Dedicated analytics engineers and Storyteller scriptwriters',
      'On-site activation crews and executive enablement training',
      'Joint innovation council with quarterly showcase summits',
    ],
    cta: 'Design Constellation',
  },
];
