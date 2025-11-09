export interface Solution {
  id: string;
  industry: string;
  headline: string;
  pains: string[];
  outcomes: string[];
  metrics: string[];
  testimonial: {
    quote: string;
    attribution: string;
  };
  cta: {
    label: string;
    link: string;
  };
}

export const solutions: Solution[] = [
  {
    id: "experiential-hospitality",
    industry: "Experiential Hospitality",
    headline:
      "Turn every venue into a broadcast-worthy moment without losing operational rhythm.",
    pains: [
      "Launch day chaos because paid, staff comms, and in-venue touchpoints live in silos",
      "Limited visibility into which experiences convert first-timers into members",
      "Manual escalation protocols slow down brand-risk decisions",
    ],
    outcomes: [
      "Pulse Playbooks orchestrate channels, staff, and signage from a single control room",
      "Journey Composer correlates visits, spend, and referrals to each activation",
      "Guardian Governance enforces escalation rituals with AI-generated receipts",
    ],
    metrics: [
      "+26% suite upgrades within the first 60 days",
      "54% faster launch prep across flagship venues",
    ],
    testimonial: {
      quote:
        "Pulse gave our concierges a live storyboard so we could wow guests before the next sunset crowd arrived.",
      attribution: "VP Experience, Orion Atrium Hotels",
    },
    cta: {
      label: "Explore hospitality playbooks",
      link: "/resources#guides",
    },
  },
  {
    id: "multi-brand-retail",
    industry: "Multi-Brand Retail",
    headline:
      "Ship seasonal stories across markets while pacing spend and inventory in lockstep.",
    pains: [
      "Regional teams rebuild campaigns from scratch with inconsistent creative",
      "Inventory, margin, and demand signals arrive too late to adjust campaigns",
      "Experiment ideas struggle to clear approvals before the moment passes",
    ],
    outcomes: [
      "Signal Synthesis Grid gives planners a live blend of sales, stock, and sentiment",
      "Pulse Playbooks clone launches with localized offers and dynamic pacing",
      "Experiment Lab prioritizes safe-but-bold tests with executive-ready narratives",
    ],
    metrics: [
      "44% faster sell-through on capsule drops",
      "+31% ROAS after dynamic pacing rollout",
    ],
    testimonial: {
      quote:
        "We finally stopped guessing which creatives to swap. The platform called the move before lunch.",
      attribution: "Head of Growth, Nova Boutiques Collective",
    },
    cta: {
      label: "Review the retail case brief",
      link: "/resources#articles",
    },
  },
  {
    id: "franchise-operators",
    industry: "Franchise Operators",
    headline:
      "Align franchisors and franchisees with shared data, playbooks, and accountability.",
    pains: [
      "Field teams rely on spreadsheets for local campaigns and budget tracking",
      "Corporate marketing lacks real-time insight into local pulse metrics",
      "Compliance guardrails are reactive instead of proactive",
    ],
    outcomes: [
      "Centralized performance dashboards with territory-level automation cues",
      "Audience Amplifier personalizes offers while respecting brand guardrails",
      "Guardian Governance simulates risk scenarios before assets ship",
    ],
    metrics: [
      "20% reduction in field-team admin time",
      "15% lift in territory revenue from governed launches",
    ],
    testimonial: {
      quote:
        "Territory owners trust the data and headquarters trusts the guardrails—it finally feels collaborative.",
      attribution: "COO, Radiant Rise Franchise Group",
    },
    cta: {
      label: "Connect with a franchise strategist",
      link: "mailto:info@pulsemarketing-ai.com?subject=Connect%20with%20a%20franchise%20strategist",
    },
  },
  {
    id: "creative-collectives",
    industry: "Creative Collectives & Studios",
    headline:
      "Package AI-led marketing services with polished client portals and insights.",
    pains: [
      "Clients demand transparency on what AI is doing behind the scenes",
      "Campaign experimentation is trapped inside project management tools",
      "Reporting decks take hours to assemble and rarely feel actionable",
    ],
    outcomes: [
      "Client-ready portals stream live campaign, sentiment, and revenue lift",
      "Storyteller narrates experiment results with recommended next steps",
      "Integration Atlas pushes insights into client CRMs and data rooms automatically",
    ],
    metrics: [
      "28 reporting decks replaced by automated portals each month",
      "3.8x more experiments cleared with narrated guardrails",
    ],
    testimonial: {
      quote:
        "Clients rave about seeing the “why” behind every decision—we spend more time creating and less time explaining.",
      attribution: "Principal Strategist, Halo Collective Studio",
    },
    cta: {
      label: "See the agency enablement kit",
      link: "/platform#modules",
    },
  },
];
