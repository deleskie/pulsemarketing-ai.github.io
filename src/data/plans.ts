export interface PlanCoverage {
  id: "ignite" | "momentum" | "constellation";
  name: string;
  idealFor: string;
  summary: string;
  modules: string[];
  outcome: string;
}

export const planCoverage: PlanCoverage[] = [
  {
    id: "ignite",
    name: "Ignite",
    idealFor:
      "Boutique hospitality, early multi-location retail, and emerging experiential brands.",
    summary:
      "Validate your customer signal foundation and launch a guided pilot with clear guardrails.",
    modules: ["signal-synthesis-grid", "pulse-playbooks", "audience-amplifier"],
    outcome:
      "Proves which stories resonate and automates your first launch cadence.",
  },
  {
    id: "momentum",
    name: "Momentum",
    idealFor:
      "Scaling teams managing multiple venues, markets, or client rosters.",
    summary:
      "Blend paid, owned, and on-site experiences while the platform handles pacing, personalization, and compliance.",
    modules: [
      "signal-synthesis-grid",
      "pulse-playbooks",
      "audience-amplifier",
      "journey-composer",
      "experience-lab",
    ],
    outcome:
      "Eliminates coordination gaps so every activation ships on brand, on time.",
  },
  {
    id: "constellation",
    name: "Constellation",
    idealFor:
      "Enterprise operators and co-innovation partners with complex ecosystems.",
    summary:
      "Extend Pulse across bespoke stacks, partners, and markets with co-created playbooks and governance.",
    modules: [
      "signal-synthesis-grid",
      "pulse-playbooks",
      "audience-amplifier",
      "journey-composer",
      "experience-lab",
      "integration-atlas",
      "guardian-governance",
    ],
    outcome:
      "Creates a shared operating system for experimentation, compliance, and growth.",
  },
];
