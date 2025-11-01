import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ideas } from "../data/ideas";
import { features } from "../data/features";
import { testimonials } from "../data/testimonials";
import "../styles/home.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const MAILTO_IMMERSION = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Schedule an Immersion Session")}`;

const trustLogos = [
  "Orion Atrium",
  "Nova Boutiques",
  "Circuit Labs",
  "Velvet & Vinyl",
  "Porterhouse Group",
];

const heroStats = [
  { value: "72%", label: "Faster launch approvals with AI guardrails" },
  { value: "3.8x", label: "Lift in winning experiments per quarter" },
  { value: "11", label: "Signals blended into every Storyteller brief" },
];

const benefitCards = [
  {
    title: "A living command studio",
    description:
      "Connect hospitality, retail, and experiential data in one dashboard so every shift, channel, and vendor runs off the same plan.",
  },
  {
    title: "Copilots that sound like your brand",
    description:
      "Storyteller briefs executives, stylists, concierges, and field teams with plain-language recaps that translate data into clear next steps.",
  },
  {
    title: "Launches that learn on their own",
    description:
      "Pulse Playbooks rebalance spend, creative, and staffing automatically so campaigns stay personalized without extra headcount.",
  },
];

const spotlightFeatures = features.slice(0, 4);

export default function HomePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Pulse Marketing AI — Orchestrate Irresistible Launches</title>
        <meta
          name="description"
          content="Pulse Marketing AI is the experiential marketing command studio for hospitality, retail, and creative collectives that demand luminous, data-backed storytelling."
        />
      </Helmet>
      <section className="hero">
        <div className="hero__inner">
          <motion.div
            className="hero__copy"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__eyebrow">Pulse Marketing AI</span>
            <h1>
              AI-guided marketing that turns customer signals into shareable
              stories and measurable revenue.
            </h1>
            <p className="hero__subtitle">
              See what resonates, automate production at scale, and launch with
              confidence.
            </p>
            <p>
              Give your marketing, ops, and guest teams a shared, data-rich
              pulse. Pulse Marketing AI spots signals before they fade,
              translates them into ready-to-use narratives, and keeps every
              activation on tone, on budget, and on time.
            </p>
            <div className="hero__cta">
              <Link to="/solutions" className="btn btn--accent">
                Explore Programs
              </Link>
              <Link to="/resources#webinars" className="btn btn--ghost">
                Watch a Demo
              </Link>
            </div>
            <ul className="hero__stats">
              {heroStats.map((stat) => (
                <li key={stat.label}>
                  <span>{stat.value}</span>
                  <p>{stat.label}</p>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="hero__dashboard">
              <div className="hero__dashboard-header">
                <span className="badge badge--accent">
                  <img src="/logo.svg" alt="Pulse Marketing AI glyph" /> Live
                  pulse
                </span>
                <strong>Resonance monitor</strong>
              </div>
              <ul>
                <li>
                  <span>Activations streaming</span>
                  <strong>12</strong>
                </li>
                <li>
                  <span>Guest delight index</span>
                  <strong>94</strong>
                </li>
                <li>
                  <span>Spend vs. target</span>
                  <strong className="positive">+4.3%</strong>
                </li>
                <li>
                  <span>Storyteller alerts</span>
                  <strong>2 insights queued</strong>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section trust">
        <div className="trust__inner">
          <span className="trust__eyebrow">
            Crafted with teams who run on vibes and rigor
          </span>
          <div className="trust__logos">
            {trustLogos.map((logo) => (
              <span key={logo}>{logo}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section benefits">
        <div className="section__header">
          <span className="section__eyebrow">Why brands switch</span>
          <h2 className="section__title">
            One luminous platform that never drops the beat.
          </h2>
        </div>
        <div className="benefits__grid">
          {benefitCards.map((benefit) => (
            <article key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section launch-modes" id="ideas">
        <div className="section__header">
          <span className="section__eyebrow">Signature concepts</span>
          <h2 className="section__title">
            Three distinct ways to activate Pulse Marketing AI.
          </h2>
          <p className="section__subtitle">
            Choose a concept that matches the energy of your brand. Each mode
            blends technology, service, and storytelling into a turnkey
            experience.
          </p>
        </div>
        <div className="launch-modes__grid">
          {ideas.map((idea) => (
            <article key={idea.id}>
              <div className="launch-modes__tag">{idea.tagline}</div>
              <h3>{idea.name}</h3>
              <p>{idea.description}</p>
              <ul>
                {idea.pillars.map((pillar) => (
                  <li key={pillar.title}>
                    <strong>{pillar.title}</strong>
                    <span>{pillar.detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark" id="platform">
        <div className="section__header">
          <span className="section__eyebrow">Platform DNA</span>
          <h2 className="section__title">
            The tech spine behind every Pulse moment.
          </h2>
          <p className="section__subtitle">
            Under the glow is a rigorously engineered marketing OS. It sees
            every signal, predicts what is next, and keeps teams compliant
            without diluting creativity.
          </p>
        </div>
        <div className="platform-grid">
          {spotlightFeatures.map((feature) => (
            <article key={feature.id} className="platform-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <ul>
                {feature.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="platform-cta">
          <Link to="/platform" className="btn btn--primary">
            Explore the architecture
          </Link>
          <Link to="/resources#comparison" className="btn btn--ghost">
            Compare to legacy stacks
          </Link>
        </div>
      </section>

      <section className="section insight">
        <div className="section__header">
          <span className="section__eyebrow">Signals in motion</span>
          <h2 className="section__title">
            Watch sentiment, spend, and stories evolve in one feed.
          </h2>
          <p className="section__subtitle">
            The Resonance Monitor pairs quantitative lift with qualitative
            texture so every decision blends art and science.
          </p>
        </div>
        <div className="insight-showcase">
          <div className="insight-showcase__panel insight-showcase__panel--metrics">
            <h3>Resonance Metrics</h3>
            <p>
              Track campaign velocity, loyalty heatmaps, and experiential ROI
              with second-by-second clarity.
            </p>
            <div className="insight-showcase__stats">
              <div>
                <span>$4.2M</span>
                <p>Quarterly revenue influenced</p>
              </div>
              <div>
                <span>+41%</span>
                <p>Experiment win rate improvement</p>
              </div>
              <div>
                <span>96%</span>
                <p>Compliance receipts issued pre-launch</p>
              </div>
            </div>
          </div>
          <div className="insight-showcase__panel insight-showcase__panel--story">
            <h3>Storyteller Copilot</h3>
            <p>
              Deliver cinematic recaps and mitigation blueprints grounded in the
              same data your finance and ops teams trust.
            </p>
            <ul>
              <li>
                AI narratives contextualized with location, persona, and crew
                notes
              </li>
              <li>Escalation playbooks triggered the moment signals wobble</li>
              <li>
                Turnkey exports into executive briefings, investor updates, and
                press kits
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="proof">
        <div className="section__header">
          <span className="section__eyebrow">Impact in motion</span>
          <h2 className="section__title">
            Operators who glow with Pulse Marketing AI.
          </h2>
        </div>
        <div className="testimonials__grid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id}>
              <p className="testimonials__quote">“{testimonial.quote}”</p>
              <footer>
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.role} • {testimonial.business}
                </span>
                <em>{testimonial.metric}</em>
              </footer>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark">
        <div className="section__header">
          <span className="section__eyebrow">Next steps</span>
          <h2 className="section__title">
            Co-create your first Pulse chronicle.
          </h2>
          <p className="section__subtitle">
            Our immersion sprint maps your launch calendar, data sources, and
            guest experience to the Pulse framework. Walk away with a 90-day
            plan and a pilot ready to glow.
          </p>
        </div>
        <div className="cta-panel">
          <div>
            <h3>Ready to light the room?</h3>
            <p>
              Meet with a strategist to align goals, data, and activation
              rituals. We will choreograph your first three drops together and
              leave you with a reusable blueprint.
            </p>
          </div>
          <div className="cta-panel__actions">
            <a href={MAILTO_IMMERSION} className="btn btn--primary">
              Schedule Immersion
            </a>
            <Link to="/pricing" className="btn btn--ghost">
              Review Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
