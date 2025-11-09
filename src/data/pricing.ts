export interface PricingTier {
  id: string;
  name: string;
  purpose: string;
  priceLabel: string;
  bestFor: string;
  highlights: string[];
  includes: string[];
  cta: string;
  ctaSubject: string;
  ctaVariant?: "primary" | "secondary";
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
      "For emerging brands building their first data-driven marketing hub (≈ $30K monthly revenue).",
    highlights: [],
    includes: [
      "Signal Synthesis Grid (core channel connectors)",
      "Up to 8 branded workspaces with shared intelligence",
      "Audience Amplifier automations (email, SMS, social)",
      "Journey Composer templates for retention & referrals",
      "Storyteller insights twice weekly",
      "Guardian Governance Light compliance guardrails",
    ],
    cta: "Book Ignite Demo",
    ctaSubject: "Ignite Plan Inquiry",
    accent: "ignite",
  },
  {
    id: "momentum",
    name: "Momentum",
    purpose:
      "Optimize every channel, unify data, and drive faster cycles of creative testing and learning.",
    priceLabel: "$1,999 / month",
    bestFor:
      "For multi-location teams investing $10K+ monthly in paid media and scaling launches across markets.",
    highlights: [],
    includes: [
      "Unlimited workspaces, roles & permissions",
      "Dedicated strategist office hours every sprint",
      "Advanced spend optimization copilots",
      "Integration Atlas for Salesforce, HubSpot, Shopify, Snowflake",
      "Experience Lab storyboards with enablement rituals",
      "Guardian Governance Pro with regulatory simulations",
    ],
    cta: "Schedule Momentum Call",
    ctaSubject: "Momentum Plan Inquiry",
    accent: "momentum",
  },
  {
    id: "constellation",
    name: "Constellation",
    purpose:
      "Work directly with our product, data, and creative engineering teams to prototype, measure, and scale what’s next.",
    priceLabel: "Custom partnership",
    bestFor:
      "For innovation labs and multi-brand ventures co-creating new revenue lines with our data & activation teams.",
    highlights: [],
    includes: [
      "Embedded product and data pods with roadmap influence",
      "Dedicated analytics engineers and Storyteller scriptwriters",
      "On-site activation crews and executive enablement training",
      "Joint Innovation Council with quarterly showcase summits",
      "Private model hosting and data residency options",
    ],
    cta: "Request Constellation Proposal",
    ctaSubject: "Constellation Partnership Inquiry",
    ctaVariant: "secondary",
    accent: "constellation",
  },
];
