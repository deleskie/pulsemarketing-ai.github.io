import React from "react";
import { Helmet } from "react-helmet-async";
import { showcaseProjects } from "../data/showcase";
import "../styles/showcase.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const SITE_URL = "https://www.pulsemarketing-ai.com";

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
        <div className="case-grid">
          {showcaseProjects.map((project) => (
            <div key={project.id} id={project.id} className="case-study-card">
              <h3>{project.customer}</h3>
              <h2 id={`${project.id}-title`}>{project.headline}</h2>
              <p>{project.summary}</p>
              <p>{project.story}</p>
              <div className="metrics" aria-label={`${project.customer} impact metrics`}>
                {project.metrics.map((metric) => (
                  <div key={`${project.id}-${metric.label}`} className="metric">
                    <span>
                      {metric.value} {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="cta">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Showcase Inquiry`}
            className="cta-btn"
          >
            Talk to a Strategist
          </a>
        </div>
      </section>
    </>
  );
}
