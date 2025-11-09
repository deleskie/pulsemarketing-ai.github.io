import React from "react";
import { Helmet } from "react-helmet-async";
import { pricingTiers } from "../data/pricing";
import "../styles/pricing.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const SITE_URL = "https://www.pulsemarketing-ai.com";
const makeMailto = (subject: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;

const faqs = [
  {
    question: "How is final pricing determined?",
    answer:
      "Every engagement begins with a Resonance Discovery session where we map your data sources and activation calendar. Pricing aligns to the scope we activate together—no hidden add-ons.",
  },
  {
    question: "Can we start with a pilot?",
    answer:
      "Yes. Ignite is staged for flagship launch pilots. We measure impact, then expand. Momentum and Constellation layer in once you’re ready for full orchestration.",
  },
  {
    question: "What services come with each tier?",
    answer:
      "All tiers include onboarding concierges, enablement workshops, and Storyteller briefings. Momentum adds dedicated strategists and experiment coaches, while Constellation includes embedded product and activation pods.",
  },
  {
    question: "How do support and SLAs work?",
    answer:
      "Ignite includes business-hours coverage with rapid chat escalation. Momentum adds regional on-call rotations, and Constellation offers 24/7 white-glove response with named advisors.",
  },
];

const checklistItems = [
  {
    label:
      "Ensure pricing grid renders 3-column on desktop, stacked on mobile.",
  },
  {
    label:
      "CTAs use mailto links (or swap for form modals) for immediate inquiries.",
  },
  {
    label: "Maintain contrast ratio ≥ 4.5:1 for WCAG AA compliance.",
  },
  {
    label: "Optional hover glow on plan cards to reinforce the Pulse aesthetic.",
  },
  {
    label: "Meta description & keywords ready for SEO crawl.",
  },
  {
    label: "Add structured data (Organization + Product schema) in production.",
  },
];

const parsePrice = (label: string): number | null => {
  const numeric = label.replace(/[^0-9.]/g, "");
  return numeric ? Number(numeric) : null;
};

const productSchemas = pricingTiers.map((tier) => {
  const priceValue = parsePrice(tier.priceLabel);
  const base = {
    "@type": "Product",
    name: `Pulse Marketing AI — ${tier.name}`,
    description: tier.purpose,
    category: "SoftwareApplication",
    brand: {
      "@type": "Brand",
      name: "Pulse Marketing AI",
    },
    url: `${SITE_URL}/pricing#plans`,
  } as Record<string, unknown>;

  if (priceValue !== null) {
    base.offers = {
      "@type": "Offer",
      priceCurrency: "USD",
      price: priceValue,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing#plans`,
    };
  }

  return base;
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pulse Marketing AI",
  url: SITE_URL,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: CONTACT_EMAIL,
    },
  ],
  makesOffer: productSchemas,
};

export default function PricingPage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Pricing — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Compare pricing for Pulse Marketing AI programs. Choose from Ignite, Momentum, or Constellation—each combining software, strategy, and storytelling scaled to your growth."
        />
        <meta
          name="keywords"
          content="Pulse Marketing AI pricing, AI marketing platform plans, launch automation pricing, experiential marketing software"
        />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <section className="section pricing-intro">
        <div className="pricing-intro__inner">
          <span className="section__eyebrow">Pricing</span>
          <h1>Pricing &amp; Programs</h1>
          <p>
            Three programs scaled to your growth stage—from your first AI-driven
            launch to full-scale orchestration. Every plan blends platform
            access, strategic guidance, and creative enablement.
          </p>
        </div>
      </section>

      <section className="section pricing-plans" id="plans">
        <div className="pricing-plans__grid">
          {pricingTiers.map((tier) => (
            <article key={tier.id} className="plan-card">
              <div>
                <h2>{tier.name}</h2>
                <p className="plan-card__price">{tier.priceLabel}</p>
                <p className="plan-card__ideal">{tier.bestFor}</p>
                <ul className="plan-card__features">
                  {tier.includes.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <a
                className={`btn ${
                  tier.ctaVariant === "secondary" ? "btn--ghost" : "btn--primary"
                } plan-card__cta`}
                href={makeMailto(tier.ctaSubject)}
              >
                {tier.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-faq">
        <div className="pricing-faq__content">
          <h2>FAQ — Before You Book</h2>
          <div className="pricing-faq__items">
            {faqs.map((faq) => (
              <article key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pricing-checklist">
        <div className="pricing-checklist__inner">
          <h2>Implementation Checklist</h2>
          <ul>
            {checklistItems.map((item) => (
              <li key={item.label}>{item.label}</li>
            ))}
          </ul>
          <p className="pricing-checklist__footer">
            © 2025 Pulse Marketing AI · {CONTACT_EMAIL}
          </p>
        </div>
      </section>
    </>
  );
}
