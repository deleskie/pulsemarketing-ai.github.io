export interface PricingTier {
  id: string;
  name: string;
  purpose: string;
  priceLabel: string;
  bestFor: string;
  highlights: string[];
  includes: string[];
  cta: string;
  accent: "ignite" | "momentum" | "constellation";
}

export const pricingTiers: PricingTier[] = [
  {
    id: "ignite",
    name: "Ignite",
    purpose:
      "Build your first pulse-driven marketing hub—launch, learn, and grow with guided strategy and automation.",
    priceLabel: "$850 / month",
    bestFor:
      "Best for early-stage experiential brands establishing a repeatable launch rhythm across a handful of locations.",
    highlights: [
      "Up to 8 branded workspaces with shared intelligence",
      "Pulse Playbooks starter library + concierge onboarding",
      "Twice-weekly Storyteller briefings with performance insights",
      "Success Plan roadmap tailored to your channels and staffing",
    ],
    includes: [
      "Signal Synthesis Grid (core channel connectors)",
      "Audience Amplifier automations (email, SMS, paid social)",
      "Journey Composer templates for retention & referrals",
      "Guardian Governance light guardrails for brand compliance",
    ],
    cta: "Kickstart Ignite",
    accent: "ignite",
  },
  {
    id: "momentum",
    name: "Momentum",
    purpose:
      "Optimize every channel, unify data, and drive faster cycles of creative testing and learning.",
    priceLabel: "$1,999 / month",
    bestFor:
      "Best for growth-stage teams coordinating multi-market launches and shared campaign budgets.",
    highlights: [
      "Unlimited workspaces, roles, and permission tiers",
      "Dedicated strategist office hours each sprint",
      "Quarterly Experiment Velocity Lab business reviews",
      "Success Plan calibrates orchestration to your market footprint",
    ],
    includes: [
      "Everything in Ignite",
      "Advanced spend-optimization copilots",
      "Integration Atlas (Salesforce, HubSpot, Shopify, Snowflake)",
      "Experience Lab storyboards + enablement rituals",
      "Guardian Governance pro tier with regulatory simulations",
    ],
    cta: "Build Momentum",
    accent: "momentum",
  },
  {
    id: "constellation",
    name: "Constellation",
    purpose:
      "Work directly with our product, data, and creative engineering teams to prototype, measure, and scale what’s next.",
    priceLabel: "Custom partnership",
    bestFor:
      "Best for multi-brand ventures and innovation labs co-creating new products, pop-ups, and data-driven activations.",
    highlights: [
      "Embedded product and data pods with roadmap influence",
      "Private model hosting and data residency options",
      "Innovation residencies and immersive launch coverage",
    ],
    includes: [
      "All Momentum capabilities plus bespoke module design",
      "Dedicated analytics engineers and Storyteller scriptwriters",
      "On-site activation crews and executive enablement training",
      "Joint Innovation Council with quarterly showcase summits",
    ],
    cta: "Design Constellation",
    accent: "constellation",
  },
];
