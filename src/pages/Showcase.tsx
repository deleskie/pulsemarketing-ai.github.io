import React from 'react';
import { Helmet } from 'react-helmet-async';
import { showcaseProjects } from '../data/showcase';
import '../styles/showcase.scss';

const timeline = [
  {
    label: 'Discover',
    description:
      'We map your experiential calendar, data landscape, and partner ecosystem with cross-functional stakeholders.',
  },
  {
    label: 'Design',
    description:
      'Joint teams craft a Pulse blueprint, automation backlog, and storytelling plan anchored in your KPIs.',
  },
  {
    label: 'Launch',
    description:
      'We run immersion sprints, calibrate guardrails, and connect your stack to the Pulse Resonance Graph.',
  },
  {
    label: 'Scale',
    description:
      'Experiment coaches, analysts, and experience strategists help you compound wins and expand into new programs.',
  },
];

export default function ShowcasePage(): JSX.Element {
  return (
    <>
      <Helmet>
        <title>Showcase — Pulse Marketing AI</title>
        <meta
          name="description"
          content="See how hospitality, retail, and experiential leaders use Pulse Marketing AI to orchestrate luminous launches, compound experimentation, and deliver unforgettable guest moments."
        />
      </Helmet>
      <section className="section showcase-hero">
        <div className="showcase-hero__inner">
          <span className="section__eyebrow">Showcase</span>
          <h1 className="section__title">How innovators glow with Pulse Marketing AI.</h1>
          <p className="section__subtitle">
            Discover real-world stories of teams replacing legacy suites, accelerating experiments, and amplifying results with a signal-led experiential marketing studio.
          </p>
        </div>
      </section>

      <section className="section showcase-projects">
        <div className="showcase-projects__grid">
          {showcaseProjects.map((project) => (
            <article key={project.id}>
              <header>
                <span>{project.customer}</span>
                <h2>{project.headline}</h2>
              </header>
              <p>{project.summary}</p>
              <div className="showcase-projects__metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.label}>
                    <span>{metric.value}</span>
                    <p>{metric.label}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section showcase-timeline">
        <div className="section__header">
          <span className="section__eyebrow">Partnership journey</span>
          <h2 className="section__title">From strategy to scale in four stages.</h2>
        </div>
        <div className="showcase-timeline__grid">
          {timeline.map((step) => (
            <article key={step.label}>
              <h3>{step.label}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
