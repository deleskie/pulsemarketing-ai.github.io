export interface Idea {
  id: string;
  name: string;
  tagline: string;
  description: string;
  pillars: { title: string; detail: string }[];
}

export const ideas: Idea[] = [
  {
    id: "resonance-grid",
    name: "Resonance Grid",
    tagline: "Give every location a living marketing heartbeat.",
    description:
      "The Resonance Grid turns scattered signals into a narrative control room. Operators watch sentiment, spend, and staff notes blend together, then deploy automations that keep the vibe on-brand from brunch rush to late-night pop-up.",
    pillars: [
      {
        title: "Live pulse intelligence",
        detail:
          "Blend POS, booking, weather, and socials into adaptive scorecards with AI alerts.",
      },
      {
        title: "Shift-ready orchestration",
        detail:
          "Launch day boards guide staff, channels, and signage with drag-and-drop rituals sized for busy crews.",
      },
      {
        title: "Story-led decisions",
        detail:
          "Storyteller short films recap wins, risks, and next moves so leaders act with context.",
      },
    ],
  },
  {
    id: "signal-ateliers",
    name: "Signal Ateliers",
    tagline: "Craft limited-run campaigns like couture collections.",
    description:
      "Signal Ateliers packages creative labs, AI copilots, and production partners into one launch atelier. Every drop follows a cinematic arc with backstage tooling that keeps compliance, vendors, and media in sync.",
    pillars: [
      {
        title: "Boutique production pods",
        detail:
          "Spin up cross-functional launch pods with curated partners and asset vaults.",
      },
      {
        title: "Adaptive pacing engine",
        detail:
          "Automate spend, audiences, and placements every hour based on live demand curves.",
      },
      {
        title: "Collector-grade storytelling",
        detail:
          "Deliver immersive narratives, AR filters, and membership exclusives from one stage.",
      },
    ],
  },
  {
    id: "infinity-loop",
    name: "Infinity Loop",
    tagline: "Transform customer journeys into evergreen community flywheels.",
    description:
      "Infinity Loop blends lifecycle marketing, loyalty engineering, and on-site experiences. Members move through adaptive arcs that feel personal while hitting KPIs for retention, referrals, and guest-generated content.",
    pillars: [
      {
        title: "Adaptive lifecycle arcs",
        detail:
          "Journey Composer senses intent shifts and nudges members toward community milestones.",
      },
      {
        title: "Community signal studio",
        detail:
          "Surface user-generated stories, reviews, and referrals directly inside the ops console.",
      },
      {
        title: "Measurement with meaning",
        detail:
          "Track emotional resonance, engagement streaks, and revenue lift in executive-ready views.",
      },
    ],
  },
];
