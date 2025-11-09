import React from "react";
import { Helmet } from "react-helmet-async";
import { showcaseProjects } from "../data/showcase";
import "../styles/showcase.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const SITE_URL = "https://www.pulsemarketing-ai.com";

const processSteps = [
  {
    label: "Discover",
    description:
      "We map your experiential calendar, data landscape, and partner ecosystem to surface growth levers and quick wins.",
  },
  {
    label: "Design",
    description:
      "Together we build a Pulse blueprint—automation backlog, creative story arcs, and guardrails tied to your KPIs.",
  },
  {
    label: "Launch",
    description:
      "Immersion sprints connect your stack to the Resonance Graph while calibrating safeguards and reporting flows.",
  },
  {
    label: "Scale",
    description:
      "Experiment coaches and strategists help you compound wins, expand into new markets, and activate advanced modules.",
  },
];

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: showcaseProjects.map((project, index) => ({
    "@type": "CaseStudy",
    name: project.customer,
    headline: project.headline,
    description: project.summary,
    image: project.visual.image,
    url: `${SITE_URL}/showcase#${project.id}`,
    position: index + 1,
    author: {
      "@type": "Organization",
      name: "Pulse Marketing AI",
    },
  })),
};

export default function ShowcasePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Showcase — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Explore Pulse Marketing AI case studies—how brands like Orion Atrium Hotels, Nova Boutiques, and Circuit Fitness Labs orchestrated measurable growth with AI-powered marketing automation."
        />
        <meta
          name="keywords"
          content="Pulse Marketing AI case studies, AI marketing automation examples, experiential marketing AI, campaign orchestration results"
        />
        <script type="application/ld+json">
          {JSON.stringify(caseStudySchema)}
        </script>
      </Helmet>

      <section className="section showcase-hero">
        <div className="showcase-hero__inner">
          <span className="section__eyebrow">Showcase</span>
          <h1>Showcase: How Innovators Glow with Pulse</h1>
          <p>
            Real teams, real results—from luxury hotels to boutique collectives
            and fitness studios. Discover how brands replaced legacy suites,
            accelerated experiments, and amplified outcomes with Pulse Marketing
            AI.
          </p>
        </div>
      </section>

      <section className="section showcase-cases" aria-label="Case studies">
        <div className="showcase-cases__grid">
          {showcaseProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="case-card"
              aria-labelledby={`${project.id}-title`}
            >
              <div
                className="case-card__media"
                style={{ backgroundImage: project.visual.gradient }}
              >
                <img
                  src={project.visual.image}
                  alt={project.visual.alt}
                  loading="lazy"
                />
              </div>
              <div className="case-card__body">
                <p className="case-card__eyebrow">{project.customer}</p>
                <h2 id={`${project.id}-title`}>{project.headline}</h2>
                <p>{project.summary}</p>
                <p>{project.story}</p>
                <div className="case-card__metrics">
                  {project.metrics.map((metric) => (
                    <div
                      key={`${project.id}-${metric.label}`}
                      className="case-card__metric"
                    >
                      <span>{metric.value}</span>
                      <p>{metric.label}</p>
                      <small>{metric.context}</small>
                    </div>
                  ))}
                </div>
                <div className="case-card__cta">
                  <a href={project.cta.link} className="btn btn--ghost">
                    {project.cta.label}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-process">
        <div className="showcase-process__header">
          <span className="section__eyebrow">Partnership journey</span>
          <h2>The Partnership Journey</h2>
          <p>
            Every engagement follows the same pulse: discover, design, launch,
            then scale with experiment coaches who keep your team glowing.
          </p>
        </div>
        <div className="showcase-process__steps">
          {processSteps.map((step) => (
            <article key={step.label}>
              <h3>{step.label}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-cta">
        <div className="showcase-cta__inner">
          <h2>Ready to Build Your Pulse Story?</h2>
          <p>
            Share your launch calendar and we will curate a case study
            walk-through tailored to your market, data, and story arcs.
          </p>
          <a
            className="btn btn--primary"
            href={`mailto:${CONTACT_EMAIL}?subject=Showcase Inquiry`}
          >
            Talk to a Strategist
          </a>
        </div>
      </section>

      <section className="section showcase-checklist">
        <div className="showcase-checklist__inner">
          <h3>Implementation Checklist</h3>
          <ul>
            <li>Replace image placeholders with production asset URLs.</li>
            <li>
              Ensure the case grid displays three cards on desktop and stacks
              gracefully on mobile.
            </li>
            <li>Add pulse-hover animation on metrics for subtle motion cues.</li>
            <li>Verify alt text and contrast ratios for WCAG AA compliance.</li>
            <li>Validate CaseStudy structured data (now included).</li>
            <li>Keep meta description and keywords optimized for search.</li>
          </ul>
          <p>© 2025 Pulse Marketing AI · {CONTACT_EMAIL}</p>
        </div>
      </section>
    </>
  );
}
