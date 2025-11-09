export interface Feature {
  id: string;
  title: string;
  description: string;
  category: string;
  useCase: string;
  outcomes: string[];
}

export const featureCategories = [
  "Signal Intelligence",
  "Campaign Automation",
  "Lifecycle AI",
  "Experience Design",
  "Integrations",
  "Governance",
];

export const features: Feature[] = [
  {
    id: "signal-synthesis-grid",
    title: "Signal Synthesis Grid",
    description:
      "Fuse paid, owned, earned, and in-store data into a single reactive canvas that broadcasts what matters hour by hour.",
    category: "Signal Intelligence",
    useCase:
      "Example: Blend booking, POS, and feedback signals so the rooftop team can adjust offers before the dinner rush.",
    outcomes: [
      "Stream booking, POS, and social data into adaptive scorecards",
      "Spot momentum shifts with anomaly beacons trained on your history",
      "Give every operator a live command ribbon with next-best actions",
    ],
  },
  {
    id: "pulse-playbooks",
    title: "Pulse Playbooks",
    description:
      "Launch curated launch sequences that stitch creative, channels, and automations together with zero guesswork.",
    category: "Campaign Automation",
    useCase:
      "Example: Clone a proven pop-up launch across cities while the platform paces spend and staff schedules automatically.",
    outcomes: [
      "Activate multi-channel drops in minutes with guardrails baked in",
      "Auto-balance spend across audiences based on live response curves",
      "Let AI copilots narrate performance and queue optimizations",
    ],
  },
  {
    id: "audience-amplifier",
    title: "Audience Amplifier Autopilot",
    description:
      "Audience intelligence that spots lookalikes, calibrates offers, and spins up retargeting without spreadsheet marathons.",
    category: "Campaign Automation",
    useCase:
      "Example: Spin up compliant lookalike audiences for a capsule release and trigger retargeting the moment interest spikes.",
    outcomes: [
      "Blend first-party segments with pulse signals to find net-new demand",
      "Launch compliant remarketing journeys across paid and owned channels",
      "Model drop-off reasons and surface high-impact win-back ideas",
    ],
  },
  {
    id: "journey-composer",
    title: "Journey Composer",
    description:
      "Design lifecycle arcs that flex in real time as guests book, buy, review, and refer friends.",
    category: "Lifecycle AI",
    useCase:
      "Example: Deliver dynamic welcome, loyalty, and recovery arcs that react to spend, stay length, and feedback.",
    outcomes: [
      "Create adaptive journeys that branch based on live engagement",
      "Trigger creative variants tuned for loyalty tier, location, and spend",
      "Measure lifecycle velocity with revenue, retention, and referral KPIs",
    ],
  },
  {
    id: "experience-lab",
    title: "Experience Lab",
    description:
      "Prototype on-site activations, live events, and hospitality moments with Storyteller narrating the play-by-play.",
    category: "Experience Design",
    useCase:
      "Example: Rehearse a tasting-room reveal with staffing checklists, signage scripts, and live sentiment loops.",
    outcomes: [
      "Coordinate staff, signage, and digital touchpoints in one storyboard",
      "Capture feedback loops from QR flows, Wi-Fi portals, and kiosks",
      "Auto-document best practices into reusable hospitality rituals",
    ],
  },
  {
    id: "integration-atlas",
    title: "Integration Atlas",
    description:
      "A curated integration fabric with credential vaults, sandbox twins, and governance-ready hooks.",
    category: "Integrations",
    useCase:
      "Example: Connect Shopify, SevenRooms, and HubSpot in hours without building custom middleware.",
    outcomes: [
      "Connect to commerce, booking, and gifting systems with guided wizards",
      "Stream events bi-directionally with replay and observability baked in",
      "Expose insights back to your data warehouse or BI stack instantly",
    ],
  },
  {
    id: "guardian-governance",
    title: "Guardian Governance",
    description:
      "Policy engine, approvals, and auditing tuned for regulated categories and brand consistency.",
    category: "Governance",
    useCase:
      "Example: Pre-clear beverage disclosures for a multi-market launch and log approvals automatically.",
    outcomes: [
      "Map risk tiers and escalation paths directly to every launch",
      "Generate compliance packets, receipts, and SOC-ready audit logs",
      "Simulate scenario plans before high-stakes campaigns go live",
    ],
  },
];
