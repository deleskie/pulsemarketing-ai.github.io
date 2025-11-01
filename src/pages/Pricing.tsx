import React from 'react';
import { Helmet } from 'react-helmet-async';
import { pricingTiers } from '../data/pricing';
import '../styles/pricing.scss';

const CONTACT_EMAIL = 'info@pulsemarketing-ai.com';
const makeMailto = (subject: string) => `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const faqs = [
  {
    question: 'How do we determine final pricing?',
    answer:
      'Every engagement starts with a Resonance Discovery where we map your footprint, data sources, and activation calendar. Pricing aligns to the surfaces we are lighting up together—no surprise add-ons.',
  },
  {
    question: 'Can we start with a pilot before rolling out globally?',
    answer:
      'Yes. Ignite is intentionally staged: we launch one flagship location or concept, measure impact, and then expand. Momentum and Constellation can layer on once you are ready for larger orchestration.',
  },
  {
    question: 'What services are bundled with each tier?',
    answer:
      'All tiers ship with onboarding concierges, enablement workshops, and Storyteller briefings. Momentum adds dedicated strategists and experiment coaches, while Constellation layers in product, data, and activation pods.',
  },
  {
    question: 'How do support and SLAs work?',
    answer:
      'Ignite includes business-hours coverage with rapid chat escalation. Momentum adds regional on-call rotations, and Constellation customers get 24/7 white-glove response with named advisors.',
  },
];

export default function PricingPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Pricing — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Select the Pulse Marketing AI partnership tier that matches your experiential ambitions. Ignite your first pulse, sustain momentum across regions, or co-create new ventures with our lab."
        />
      </Helmet>
      <section className="section pricing-hero">
        <div className="pricing-hero__inner">
          <div>
            <span className="section__eyebrow">Pricing</span>
            <h1 className="section__title">Programs tailored to your brand’s glow-up.</h1>
            <p className="section__subtitle">
              Each tier blends software, strategy, and storytelling support. Choose the pace you need—pilot an iconic launch, scale across markets, or co-create entirely new experiences with our lab.
            </p>
          </div>
          <div className="pricing-hero__badge">
            <strong>Flexible packaging</strong>
            <span>Pricing finalized with your success plan</span>
          </div>
        </div>
      </section>

      <section className="section pricing-grid">
        <div className="pricing-grid__container">
          {pricingTiers.map((tier) => (
            <article key={tier.id}>
              <header>
                <h2>{tier.name}</h2>
                <p>{tier.description}</p>
              </header>
              <div className="pricing-grid__price">{tier.priceLabel}</div>
              <p className="pricing-grid__best">{tier.bestFor}</p>
              <div className="pricing-grid__sections">
                <div>
                  <h3>Highlights</h3>
                  <ul>
                    {tier.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>What&apos;s included</h3>
                  <ul>
                    {tier.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                className="btn btn--primary pricing-grid__cta"
                href={makeMailto(`Pricing inquiry: ${tier.name}`)}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-faq">
        <div className="section__header">
          <span className="section__eyebrow">FAQ</span>
          <h2 className="section__title">Answers before your first strategy call.</h2>
        </div>
        <div className="pricing-faq__grid">
          {faqs.map((faq) => (
            <article key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
