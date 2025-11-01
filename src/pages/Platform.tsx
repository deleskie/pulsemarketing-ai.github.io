import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { features } from "../data/features";
import { planCoverage } from "../data/plans";
import "../styles/platform.scss";

const architecture = [
  {
    title: "Resonance Graph",
    description:
      "Every booking, purchase, review, and creative iteration flows into a living knowledge graph that understands context at the speed of culture.",
    bullets: [
      "Unify first-party signals and experiential feedback in weeks, not quarters.",
      "Auto-tag momentum shifts so teams can intervene before performance dips.",
    ],
  },
  {
    title: "Pulse Automation Fabric",
    description:
      "Composable automations choreograph launches, loyalty nudges, and on-site activations with guardrails, pacing, and observability built in.",
    bullets: [
      "Spin up multi-channel automations with compliance guardrails baked in.",
      "Replay any automation run with timestamps for audit-ready receipts.",
    ],
  },
  {
    title: "Immersive Story Stack",
    description:
      "Storyteller copilots, AI writers rooms, and executive briefings spin your data into cinematic narratives without sacrificing accuracy.",
    bullets: [
      "Push executive-ready recaps, press angles, and team briefings in real time.",
      "Keep frontline staff aligned with daily talk tracks grounded in live data.",
    ],
  },
];

const differentiators = [
  {
    heading: "Signal-aware AI with receipts",
    body: "Copilots cite the exact datapoints, stakeholders, and automations behind every recommendation so leadership moves with conviction.",
  },
  {
    heading: "Experiential-first orchestration",
    body: "Campaigns, field ops, guest touchpoints, and vendors follow the same pulse—no more spreadsheets, slack threads, or guesswork at showtime.",
  },
  {
    heading: "Compliance woven into creativity",
    body: "Guardian Governance keeps regulated disclosures, partner approvals, and locality rules in flow so daring ideas stay on the right side of policy.",
  },
];

const enablement = [
  {
    title: "Launch Atelier",
    copy: "A dedicated pod of strategists, producers, and designers who co-build your first three pulse activations and leave behind reusable playbooks.",
  },
  {
    title: "Signal Integration Studio",
    copy: "Connector architects blend your POS, booking, commerce, loyalty, and guest feedback sources with the Resonance Graph and sandbox twins.",
  },
  {
    title: "Storyteller Writers Room",
    copy: "Narrative strategists tune AI voices, craft executive briefs, and ghostwrite press-ready recaps powered by your live data.",
  },
];

const moduleLookup = new Map(features.map((feature) => [feature.id, feature]));

export default function PlatformPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Platform Overview — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Explore the Pulse Marketing AI platform: a signal-driven marketing operating system built for experiential hospitality, multi-brand retail, and creative collectives."
        />
      </Helmet>
      <section className="section platform-hero">
        <div className="platform-hero__inner">
          <motion.div
            className="platform-hero__copy"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="section__eyebrow">Platform overview</span>
            <h1 className="section__title">
              The experiential marketing spine for modern operators.
            </h1>
            <p className="section__subtitle">
              Pulse Marketing AI unifies data, automations, and storytelling so
              your teams can dream big, ship faster, and measure every glow-up
              moment without extra headcount.
            </p>
          </motion.div>
          <motion.div
            className="platform-hero__diagram"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="platform-hero__orbit">
              <span>Signals</span>
              <span>Automations</span>
              <span>Journeys</span>
              <span>Storytelling</span>
              <span>Compliance</span>
              <span>Insights</span>
            </div>
            <div className="platform-hero__core">
              <strong>Pulse Core</strong>
              <span>Resonance Graph &amp; Copilots</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section platform-architecture">
        <div className="section__header">
          <span className="section__eyebrow">Under the hood</span>
          <h2 className="section__title">
            A layered system designed for luminous, accountable launches.
          </h2>
          <p className="section__subtitle">
            Every layer is purpose-built for experiential marketing teams—no
            generic dashboards or disconnected tools. Plug in your signals and
            get a studio-grade control room on day one.
          </p>
        </div>
        <div className="platform-architecture__grid">
          {architecture.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section platform-modules">
        <div className="section__header">
          <span className="section__eyebrow">Modules</span>
          <h2 className="section__title">
            All the building blocks you need, harmonized by design.
          </h2>
          <p className="section__subtitle">
            Each module snaps into the Resonance Graph so insights, automations,
            and compliance handoffs stay in flow no matter which team is on
            stage.
          </p>
        </div>
        <div className="platform-modules__grid">
          {features.map((feature) => (
            <article key={feature.id}>
              <span className="platform-modules__category">
                {feature.category}
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <p className="platform-modules__usecase">{feature.useCase}</p>
              <ul>
                {feature.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section platform-differentiators">
        <div className="section__header">
          <span className="section__eyebrow">Why teams switch</span>
          <h2 className="section__title">
            We blend art, science, and governance in one motion.
          </h2>
          <p className="section__subtitle">
            Pulse Marketing AI is for teams who demand the thrill of
            experiential marketing with the accountability of enterprise-grade
            infrastructure.
          </p>
        </div>
        <div className="platform-differentiators__grid">
          {differentiators.map((item) => (
            <article key={item.heading}>
              <h3>{item.heading}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section platform-plans" id="plan-coverage">
        <div className="section__header">
          <span className="section__eyebrow">Plan coverage</span>
          <h2 className="section__title">
            See which modules ship with each success plan.
          </h2>
          <p className="section__subtitle">
            Use this quick guide to match platform depth with your team’s
            maturity before your Success Plan session.
          </p>
        </div>
        <div className="platform-plans__grid">
          {planCoverage.map((plan) => (
            <article key={plan.id}>
              <h3>{plan.name}</h3>
              <p className="platform-plans__ideal">{plan.idealFor}</p>
              <p>{plan.summary}</p>
              <div className="platform-plans__modules">
                <h4>Included modules</h4>
                <ul>
                  {plan.modules.map((moduleId) => {
                    const module = moduleLookup.get(moduleId);
                    return <li key={moduleId}>{module?.title ?? moduleId}</li>;
                  })}
                </ul>
              </div>
              <p className="platform-plans__outcome">{plan.outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section platform-next">
        <div className="section__header">
          <span className="section__eyebrow">Enablement</span>
          <h2 className="section__title">
            We build the runway with you, then hand over the spotlight.
          </h2>
          <p className="section__subtitle">
            Your subscription includes an embedded go-to-market lab that tunes
            the platform to your rituals, tech stack, and ambition level.
          </p>
        </div>
        <div className="platform-next__grid">
          {enablement.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
