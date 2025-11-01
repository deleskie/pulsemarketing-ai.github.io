import React from 'react';
import { Helmet } from 'react-helmet-async';
import { solutions } from '../data/solutions';
import '../styles/solutions.scss';

const playbooks = [
  {
    title: 'Signal Sprint',
    bullets: [
      'Resonance assessment across bookings, POS, loyalty, and sentiment feeds',
      'Pulse Playbook configuration with launch cadences and escalation paths',
      'Storyteller tuning sessions for executive, field, and partner audiences',
    ],
  },
  {
    title: 'Experience Capsule',
    bullets: [
      'On-site activation choreography with staffing, signage, and channel sync',
      'Audience Amplifier modeling for offers, retargeting, and member loops',
      'Live control room support during your first marquee activation',
    ],
  },
  {
    title: 'Community Flywheel',
    bullets: [
      'Journey Composer design for onboarding, loyalty, and referral arcs',
      'Guardian Governance calibration with policy simulations and rehearsals',
      'Success analytics packaged into investor and leadership-ready chronicles',
    ],
  },
];

export default function SolutionsPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Solutions — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Discover how Pulse Marketing AI equips experiential hospitality, multi-brand retail, franchises, and creative collectives with signal-led marketing operations."
        />
      </Helmet>
      <section className="section solutions-hero">
        <div className="solutions-hero__inner">
          <div>
            <span className="section__eyebrow">Industry solutions</span>
            <h1 className="section__title">Tailored playbooks for teams who blur retail, hospitality, and media.</h1>
            <p className="section__subtitle">
              We work alongside experiential pioneers to harmonize launches, loyalty, and storytelling. Every solution layers tech, data, and human rituals so your brand moves with confidence.
            </p>
          </div>
          <div className="solutions-hero__pillars">
            <div>
              <strong>Strategy</strong>
              <span>Launch roadmaps &amp; enablement</span>
            </div>
            <div>
              <strong>Operations</strong>
              <span>Automation &amp; compliance rituals</span>
            </div>
            <div>
              <strong>Intelligence</strong>
              <span>Storytelling &amp; performance signals</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section solutions-grid">
        <div className="section__header">
          <span className="section__eyebrow">Where we win</span>
          <h2 className="section__title">Purpose-built for brands that thrive on experience.</h2>
          <p className="section__subtitle">
            Pulse Marketing AI removes the friction between planning, activation, and measurement—whether you are lighting up a rooftop, coordinating 200 boutiques, or powering an agency collective.
          </p>
        </div>
        <div className="solutions-grid__tiles">
          {solutions.map((solution) => (
            <article key={solution.id}>
              <h3>{solution.industry}</h3>
              <p>{solution.headline}</p>
              <div className="solutions-grid__columns">
                <div>
                  <h4>Challenges we solve</h4>
                  <ul>
                    {solution.pains.map((pain) => (
                      <li key={pain}>{pain}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4>Outcomes we deliver</h4>
                  <ul>
                    {solution.outcomes.map((outcome) => (
                      <li key={outcome}>{outcome}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-playbooks">
        <div className="section__header">
          <span className="section__eyebrow">Signature plays</span>
          <h2 className="section__title">Programs that deliver glow-ups in under 90 days.</h2>
          <p className="section__subtitle">
            Your subscription unlocks a go-to-market lab that builds systems, trains teams, and co-pilots your first signature activations before handing you the controls.
          </p>
        </div>
        <div className="solutions-playbooks__grid">
          {playbooks.map((play) => (
            <article key={play.title}>
              <h3>{play.title}</h3>
              <ul>
                {play.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutions-callout">
        <div className="solutions-callout__inner">
          <div>
            <h2>Need a custom chronicle?</h2>
            <p>
              We love ambitious briefs. Invite us into your war room and we will design a Pulse blueprint that respects your brand standards, tech stack, and partner ecosystem.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href="https://cal.com/pulsemarketingai/strategy"
            target="_blank"
            rel="noreferrer"
          >
            Schedule Strategy Session
          </a>
        </div>
      </section>
    </>
  );
}
