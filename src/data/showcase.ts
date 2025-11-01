export interface ShowcaseProject {
  id: string;
  customer: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
}

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: 'orion-atrium',
    customer: 'Orion Atrium Hotels',
    headline: 'Signal-led activations lifted suite bookings 26% across five cities.',
    summary:
      'Pulse Marketing AI wired hotel concierges, guest apps, and paid social into a living launch grid. Storyteller copilots narrated performance every evening, letting on-site teams adjust offers before the next sunset crowd.',
    metrics: [
      { label: 'Launch prep time', value: 'Down 54%' },
      { label: 'Suite upgrades', value: '+26% quarter over quarter' },
      { label: 'Operational escalations', value: 'Reduced 38%' },
    ],
  },
  {
    id: 'nova-boutiques',
    customer: 'Nova Boutiques Collective',
    headline: 'Boutique drops sold out with AI-shaped lookalikes and dynamic pacing.',
    summary:
      'Audience Amplifier fused loyalty data with live street traffic to pace paid media spend hourly. Merch teams watched inventory pulse metrics and swapped creative in minutes instead of overnight.',
    metrics: [
      { label: 'Sell-through velocity', value: '+44% within first 72 hours' },
      { label: 'Paid media efficiency', value: '+31% ROAS' },
      { label: 'Manual reports', value: 'Eliminated 28 decks per month' },
    ],
  },
  {
    id: 'circuit-fitness',
    customer: 'Circuit Fitness Labs',
    headline: 'High-touch member journeys ran autonomously while instructors stayed human.',
    summary:
      'Journey Composer triggered adaptive onboarding, recovery, and referral arcs that felt bespoke. Coaches received Storyteller digests each morning highlighting members who needed a nudge.',
    metrics: [
      { label: 'Churn reduction', value: 'Down 17 points' },
      { label: 'Instructor admin time', value: '-22 hours weekly' },
      { label: 'Referral-driven revenue', value: '+3.4x' },
    ],
  },
];
