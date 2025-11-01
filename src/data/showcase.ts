export interface ShowcaseProject {
  id: string;
  customer: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string; context: string }[];
  cta: {
    label: string;
    link: string;
  };
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: "orion-atrium",
    customer: "Orion Atrium Hotels",
    headline:
      "Signal-led activations lifted suite bookings 26% across five cities.",
    summary:
      "Pulse Marketing AI wired hotel concierges, guest apps, and paid social into a living launch grid. Storyteller copilots narrated performance every evening, letting on-site teams adjust offers before the next sunset crowd.",
    metrics: [
      {
        label: "Launch prep time",
        value: "Down 54%",
        context:
          "Immersion sprints replaced email threads with a shared launch checklist.",
      },
      {
        label: "Suite upgrades",
        value: "+26% quarter over quarter",
        context:
          "Signal Synthesis Grid flagged high-intent guests and queued concierge outreach.",
      },
      {
        label: "Operational escalations",
        value: "Reduced 38%",
        context:
          "Guardian Governance surfaced policy risks before teams went live.",
      },
    ],
    cta: {
      label: "See the hospitality blueprint",
      link: "/resources#guides",
    },
  },
  {
    id: "nova-boutiques",
    customer: "Nova Boutiques Collective",
    headline:
      "Boutique drops sold out with AI-shaped lookalikes and dynamic pacing.",
    summary:
      "Audience Amplifier fused loyalty data with live street traffic to pace paid media spend hourly. Merch teams watched inventory pulse metrics and swapped creative in minutes instead of overnight.",
    metrics: [
      {
        label: "Sell-through velocity",
        value: "+44% within first 72 hours",
        context:
          "Audience Amplifier recalibrated lookalikes every hour based on inventory.",
      },
      {
        label: "Paid media efficiency",
        value: "+31% ROAS",
        context:
          "Pulse Playbooks throttled spend toward locations responding in real time.",
      },
      {
        label: "Manual reports",
        value: "Eliminated 28 decks per month",
        context:
          "Storyteller delivered client-ready summaries with annotated highlights.",
      },
    ],
    cta: {
      label: "Download the retail case brief",
      link: "/resources#articles",
    },
  },
  {
    id: "circuit-fitness",
    customer: "Circuit Fitness Labs",
    headline:
      "High-touch member journeys ran autonomously while instructors stayed human.",
    summary:
      "Journey Composer triggered adaptive onboarding, recovery, and referral arcs that felt bespoke. Coaches received Storyteller digests each morning highlighting members who needed a nudge.",
    metrics: [
      {
        label: "Churn reduction",
        value: "Down 17 points",
        context:
          "Journey Composer sequenced recovery flows based on real engagement data.",
      },
      {
        label: "Instructor admin time",
        value: "-22 hours weekly",
        context:
          "Automated recaps replaced manual check-ins and spreadsheet updates.",
      },
      {
        label: "Referral-driven revenue",
        value: "+3.4x",
        context:
          "Experience Lab coached studios on member moments that spark shares.",
      },
    ],
    cta: {
      label: "Talk through the wellness playbook",
      link: "mailto:info@pulsemarketing-ai.com?subject=Request%20wellness%20playbook%20briefing",
    },
  },
];
