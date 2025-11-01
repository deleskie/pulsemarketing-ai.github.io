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
    description: 'All the essentials to launch a pulse-driven marketing hub, calibrated to experiential brands turning ~$30K in monthly revenue into 4–6% marketing investment.',
    priceLabel: '$850 / month',
    bestFor: 'Experiential brands generating around $30K in monthly revenue and dedicating 4–6% to marketing.',
    highlights: [
      'Up to 8 branded workspaces with shared intelligence',
      'Pulse Playbooks starter library with concierge onboarding',
      'Benchmarked to 4–6% of revenue marketing investments (≈$30K monthly revenue)',
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
    description: 'Scale orchestration, experimentation, and compliance for teams already committing five figures each month to advertising.',
    priceLabel: '$1,999 / month',
    bestFor: 'Multi-location collectives investing $10K+ in monthly advertising and scaling launches across markets.',
    highlights: [
      'Unlimited workspaces, roles, and permission tiers',
      'Dedicated strategist office hours every sprint',
      'Optimized for brands investing $10K+ in paid media each month',
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
