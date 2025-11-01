export interface Testimonial {
  id: string;
  name: string;
  role: string;
  business: string;
  quote: string;
  metric: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "orion-atrium",
    name: "Hadiyah Flores",
    role: "VP, Brand Experience",
    business: "Orion Atrium Hotels",
    quote:
      "Pulse Marketing AI feels like a broadcast truck in the cloud. We see what guests feel in real time, tweak offers before the dinner rush, and walk into executive reviews with receipts instead of slide decks.",
    metric: "Suite upgrades up 26%",
  },
  {
    id: "nova-boutiques",
    name: "Isabel Trent",
    role: "Chief Merchant",
    business: "Nova Boutiques Collective",
    quote:
      "We finally run drops like a symphony. Inventory, paid media, pop-up teams, and influencer partners follow the same pulse. The AI narration keeps everyone brave but responsible.",
    metric: "Sell-through velocity +44%",
  },
  {
    id: "circuit-fitness",
    name: "Andre Dupree",
    role: "Founder & Head Coach",
    business: "Circuit Fitness Labs",
    quote:
      "Storyteller calls out the members who need a fist bump before class. Journey automations do the heavy lifting so coaches can stay human. The platform keeps our vibe while scaling like a franchise.",
    metric: "Churn down 17 pts year over year",
  },
];
