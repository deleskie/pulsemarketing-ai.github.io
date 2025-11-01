import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useBlogPosts } from '../hooks/useBlogPosts';
import { formatDate } from '../utils/date';
import '../styles/resources.scss';

const guides = [
  {
    title: 'Pulse Marketing AI Resonance Field Guide',
    description: 'Map your signals, automations, and storytelling rituals in a single blueprint. Preview available soon.',
    link: '#',
  },
  {
    title: 'Guardian Governance Playbook',
    description: 'Operationalize compliance without dimming creativity. Includes escalation drills and policy templates.',
    link: '#',
  },
  {
    title: 'Storyteller Narrative Manual',
    description: 'Teach AI copilots your brand voice and reporting cadence with annotated prompts and workflows.',
    link: '#',
  },
];

const webinars = [
  {
    title: 'Designing Experiential Launch Control Rooms',
    date: 'Nov 12, 2025',
    presenters: 'Pulse Marketing AI producers + hospitality operators. Registration opens soon.',
    link: '#',
  },
  {
    title: 'Storyteller Copilots for Multi-Brand Retail',
    date: 'Dec 3, 2025',
    presenters: 'Data, creative, and ops leaders dissect real chronicles. Registration opens soon.',
    link: '#',
  },
];

export default function ResourcesPage(): JSX.Element {
  const { posts, loading, error } = useBlogPosts();
  const blogPosts = posts ?? [];
  return (
    <>
      <Helmet>
        <title>Resources — Pulse Marketing AI</title>
        <meta
          name="description"
          content="Playbooks, chronicles, and guides for experiential hospitality, multi-brand retail, franchises, and agency collectives building luminous marketing operations with Pulse Marketing AI."
        />
      </Helmet>
      <section className="section resources-hero" id="about">
        <div className="resources-hero__inner">
          <div>
            <span className="section__eyebrow">Resources</span>
            <h1 className="section__title">Stories, playbooks, and chronicles built for experiential operators.</h1>
            <p className="section__subtitle">
              Every article and guide captures how modern teams orchestrate immersive launches while balancing staff, compliance, and revenue. Use these assets to brief your crew, pitch leadership, and blueprint your next pulse.
            </p>
          </div>
        </div>
      </section>

      <section className="section resources-blog" id="blog">
        <div className="section__header">
          <span className="section__eyebrow">Latest perspectives</span>
          <h2 className="section__title">From our newsroom</h2>
          <p className="section__subtitle">
            Long-form journalism built for hospitality, retail, and experiential brands. Expect cinematic storytelling, practical takeaways, and a clear “why now” in every piece.
          </p>
        </div>
        <div className="resources-blog__grid">
          {loading && (
            <article className="resources-blog__loading">
              <h3>Loading latest articles…</h3>
            </article>
          )}
          {error && (
            <article className="resources-blog__error">
              <h3>Latest articles are unavailable right now</h3>
              <p>Please check back soon.</p>
            </article>
          )}
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <span className="resources-blog__date">{formatDate(post.date)}</span>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className="resources-blog__meta">
                <span>{post.author}</span>
                <span>{post.readingTime}</span>
              </div>
              <Link to={`/blog/${post.slug}`} className="btn btn--ghost resources-blog__cta">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section resources-guides" id="guides">
        <div className="section__header">
          <span className="section__eyebrow">Guides</span>
          <h2 className="section__title">Deep dives to rally your crew.</h2>
          <p className="section__subtitle">
            These field manuals walk through launch checklists, guardrails, and narrative workflows so your staff understands the plan in minutes.
          </p>
        </div>
        <div className="resources-guides__grid">
          {guides.map((guide) => (
            <article key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <a href={guide.link} className="btn btn--ghost">
                Download preview
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resources-webinars" id="webinars">
        <div className="section__header">
          <span className="section__eyebrow">Webinars</span>
          <h2 className="section__title">Learn from practitioners.</h2>
          <p className="section__subtitle">
            Join live sessions where operators and Pulse Marketing AI coaches share what is working—expect candid stories and actionable next steps.
          </p>
        </div>
        <div className="resources-webinars__grid">
          {webinars.map((webinar) => (
            <article key={webinar.title}>
              <h3>{webinar.title}</h3>
              <p className="resources-webinars__date">{webinar.date}</p>
              <p>{webinar.presenters}</p>
              <a href={webinar.link} className="btn btn--ghost">
                Save your seat
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section resources-careers" id="careers">
        <div className="resources-careers__inner">
          <div>
            <h2>Careers</h2>
            <p>
              We’re assembling a team across product, engineering, design, and experience strategy to help brands deliver unforgettable moments. If blending art and systems is your craft, let’s talk.
            </p>
          </div>
          <a
            className="btn btn--primary"
            href="https://jobs.pulsemarketing.ai"
            target="_blank"
            rel="noreferrer"
          >
            View open roles
          </a>
        </div>
      </section>
    </>
  );
}
