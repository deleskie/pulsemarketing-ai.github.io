import React from "react";
import { Helmet } from "react-helmet-async";
import { pricingTiers } from "../data/pricing";
import { planCoverage } from "../data/plans";
import { features } from "../data/features";
import Term from "../components/Term";
import "../styles/pricing.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const makeMailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const SUCCESS_PLAN_DEFINITION =
  "A collaborative working session where we map your channels, regions, and staffing to the Pulse modules you need, then confirm pricing before activation.";

const faqs = [
  {
    question: "How do you determine final pricing?",
    answer:
      "Each partnership begins with a Resonance Discovery—mapping your channels, data sources, and activation goals. Pricing is then calibrated to the surfaces we are lighting up together.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. Ignite is intentionally staged. We launch one flagship concept, measure performance, then expand. Momentum and Constellation can layer on once you are ready.",
  },
  {
    question: "What support do we receive?",
    answer:
      "All tiers include onboarding concierges, enablement workshops, and Storyteller briefings. Momentum adds strategist office hours and Experiment Velocity Lab reviews, while Constellation provides embedded advisors and 24/7 executive response.",
  },
];

const successPlanSteps = [
  {
    title: "1. Resonance Discovery",
    description:
      "We inventory your launch calendar, data sources, and brand standards to understand the scope of your marketing studio.",
  },
  {
    title: "2. Blueprint Workshop",
    description:
      "Together we prioritize programs, map automations, and identify the Pulse modules required for your first 90 days.",
  },
  {
    title: "3. Investment Calibration",
    description:
      "We align your targets with the right tier, confirm any add-ons, and finalize a roll-out timeline with clear milestones.",
  },
];

const coverageModules = features.filter((feature) =>
  planCoverage.some((plan) => plan.modules.includes(feature.id)),
);

export default function PricingPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Pricing — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Compare Pulse Marketing AI programs built for Ignite, Momentum, and Constellation brands. Transparent pricing aligned to your experiential growth stage."
        />
      </Helmet>
      <section className="section pricing-hero">
        <div className="pricing-hero__inner">
          <div>
            <span className="section__eyebrow">Pricing</span>
            <h1 className="section__title">
              Programs that scale with your brand’s momentum.
            </h1>
            <p className="section__subtitle">
              Each tier blends software, strategy, and storytelling. Pricing is
              transparent and aligned to your stage of growth—so you only invest
              at the pace your brand is ready for.
            </p>
            <p className="pricing-hero__note">
              A 45-minute{" "}
              <Term
                label="Success Plan session"
                definition={SUCCESS_PLAN_DEFINITION}
              />{" "}
              maps your footprint—locations, channels, staffing—and calibrates
              subscription pricing before anything launches. You see the
              numbers and rollout plan on the call.
            </p>
            <div className="pricing-hero__cta">
              <a
                className="btn btn--primary"
                href={makeMailto("Talk to a strategist about pricing")}
              >
                Talk to a Strategist
              </a>
              <a className="btn btn--ghost" href="#plans">
                Compare Plans
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-grid" id="plans">
        <div className="pricing-grid__container">
          {pricingTiers.map((tier) => (
            <article
              key={tier.id}
              className={`pricing-card pricing-card--${tier.accent}`}
            >
              <header className="pricing-card__header">
                <span className="pricing-card__name">{tier.name}</span>
              </header>
              <div
                className="pricing-card__price"
                aria-label={`${tier.name} price`}
              >
                {tier.priceLabel}
              </div>
              <p className="pricing-card__ideal">
                <strong>Ideal for:</strong> {tier.bestFor}
              </p>
              <p className="pricing-card__purpose">{tier.purpose}</p>
              <div className="pricing-card__sections">
                <div>
                  <h3>Highlights</h3>
                  <ul>
                    {tier.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3>Included tools</h3>
                  <ul>
                    {tier.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                className="btn btn--primary pricing-card__cta"
                href={makeMailto(`Pricing inquiry: ${tier.name}`)}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section pricing-coverage"
        aria-labelledby="pricing-coverage-heading"
      >
        <div className="pricing-coverage__inner">
          <div>
            <span className="section__eyebrow">Module comparison</span>
            <h2 id="pricing-coverage-heading" className="section__title">
              See which modules ship with each plan.
            </h2>
            <p className="section__subtitle">
              Every plan starts with the same core foundation; Momentum and
              Constellation layer on additional automation, integration, and
              governance modules.
            </p>
          </div>
          <div className="pricing-coverage__table-wrapper">
            <table className="pricing-coverage__table">
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  {planCoverage.map((plan) => (
                    <th scope="col" key={plan.id}>
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {coverageModules.map((module) => (
                  <tr key={module.id}>
                    <th scope="row">
                      <span className="pricing-coverage__module-title">
                        {module.title}
                      </span>
                      <span className="pricing-coverage__module-note">
                        {module.useCase}
                      </span>
                    </th>
                    {planCoverage.map((plan) => (
                      <td
                        key={plan.id}
                        aria-label={`${module.title} ${plan.name}`}
                      >
                        {plan.modules.includes(module.id) ? (
                          <>
                            <span className="sr-only">Included</span>
                            <span
                              className="pricing-coverage__check"
                              aria-hidden="true"
                            >
                              ✓
                            </span>
                          </>
                        ) : (
                          <>
                            <span className="sr-only">Not included</span>
                            <span
                              className="pricing-coverage__dash"
                              aria-hidden="true"
                            >
                              —
                            </span>
                          </>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section pricing-success-plan" id="success-plan">
        <div className="pricing-success-plan__inner">
          <div>
            <span className="section__eyebrow">How it works</span>
            <h2 className="section__title">
              Your Success Plan session is built to clarify fit fast.
            </h2>
            <p className="section__subtitle">
              In under an hour you will leave with recommended pricing, launch
              milestones, and the exact modules included in your plan.
            </p>
          </div>
          <div className="pricing-success-plan__steps">
            {successPlanSteps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-faq">
        <div className="section__header">
          <span className="section__eyebrow">FAQ</span>
          <h2 className="section__title">Frequently Asked Questions</h2>
        </div>
        <div className="pricing-faq__items">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
