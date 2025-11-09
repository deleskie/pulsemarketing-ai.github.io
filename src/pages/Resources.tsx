import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { formatDate } from "../utils/date";
import "../styles/resources.scss";

const CONTACT_EMAIL = "info@pulsemarketing-ai.com";
const makeMailto = (subject: string, email: string = CONTACT_EMAIL) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}`;

const guides = [
  {
    title: "Pulse Marketing AI Resonance Field Guide",
    description:
      "Map your signals, automations, and storytelling rituals in a single blueprint. Request a preview and we will send a 2-minute intake form for early access.",
    link: makeMailto(
      "Request Pulse Marketing AI Resonance Field Guide preview",
    ),
  },
  {
    title: "Guardian Governance Playbook",
    description:
      "Operationalize compliance without dimming creativity. Includes escalation drills and policy templates. Ask for the preview to receive a short qualification form.",
    link: makeMailto("Request Guardian Governance Playbook preview"),
  },
  {
    title: "Storyteller Narrative Manual",
    description:
      "Teach AI copilots your brand voice and reporting cadence with annotated prompts and workflows. Submit a preview request and we will reply with onboarding steps.",
    link: makeMailto("Request Storyteller Narrative Manual preview"),
  },
];

const webinars = [
  {
    title: "Designing Experiential Launch Control Rooms",
    date: "Nov 12, 2025",
    presenters:
      "Pulse Marketing AI producers + hospitality operators. Registration opens soon.",
    status: "Upcoming",
    link: makeMailto(
      "Register interest: Designing Experiential Launch Control Rooms",
    ),
  },
  {
    title: "Storyteller Copilots for Multi-Brand Retail",
    date: "Dec 3, 2025",
    presenters:
      "Data, creative, and ops leaders dissect real chronicles. Registration opens soon.",
    status: "Upcoming",
    link: makeMailto(
      "Register interest: Storyteller Copilots for Multi-Brand Retail",
    ),
  },
];

const pressAssets = [
  {
    title: "Company overview",
    description:
      "Key facts, leadership bios, and milestones for editors and analysts.",
    link: makeMailto("Request Pulse Marketing AI press kit"),
  },
  {
    title: "Brand assets",
    description:
      "Download logos, platform imagery, and product screenshots in high resolution.",
    link: makeMailto("Request Pulse Marketing AI brand assets"),
  },
];

const RESOURCE_TABS = [
  { id: "articles", label: "Articles" },
  { id: "guides", label: "Guides" },
  { id: "webinars", label: "Webinars" },
] as const;

type ResourceTabId = (typeof RESOURCE_TABS)[number]["id"];

export default function ResourcesPage(): JSX.Element {
  const { posts, loading, error } = useBlogPosts();
  const blogPosts = posts ?? [];
  const [activeTab, setActiveTab] = useState<ResourceTabId>(
    RESOURCE_TABS[0].id,
  );

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const hash = window.location.hash.replace("#", "");
    if (RESOURCE_TABS.some((tab) => tab.id === hash)) {
      setActiveTab(hash as ResourceTabId);
    }
  }, []);

  const handleTabChange = (tabId: ResourceTabId) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const newUrl = `${window.location.pathname}#${tabId}`;
      window.history.replaceState(null, "", newUrl);
    }
  };

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
            <h1 className="section__title">
              Stories, playbooks, and chronicles built for experiential
              operators.
            </h1>
            <p className="section__subtitle">
              Every article and guide captures how modern teams orchestrate
              immersive launches while balancing staff, compliance, and revenue.
              Use these assets to brief your crew, pitch leadership, and
              blueprint your next pulse.
            </p>
            <nav
              className="resources-hero__tabs"
              role="tablist"
              aria-label="Resource quick links"
            >
              {RESOURCE_TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  id={`tab-${tab.id}`}
                  role="tab"
                  className={`resources-hero__tab${activeTab === tab.id ? " is-active" : ""}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tabpanel-${tab.id}`}
                  onClick={() => handleTabChange(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
            <div
              className="resources-hero__anchors"
              aria-label="Additional resource links"
            >
              <a className="resources-hero__anchor" href="#press">
                Press kit
              </a>
              <a className="resources-hero__anchor" href="#support">
                Support
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section resources-blog"
        id="articles"
        role="tabpanel"
        aria-labelledby="tab-articles"
        hidden={activeTab !== "articles"}
      >
        <div className="section__header">
          <span className="section__eyebrow">Latest perspectives</span>
          <h2 className="section__title">From our newsroom</h2>
          <p className="section__subtitle">
            Long-form journalism built for hospitality, retail, and experiential
            brands. Expect cinematic storytelling, practical takeaways, and a
            clear “why now” in every piece.
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
          {!loading && !error && blogPosts.length === 0 && (
            <article className="resources-blog__empty">
              <h3>No articles yet</h3>
              <p>
                We’re drafting new perspectives now. Check back shortly or join
                our newsletter for updates.
              </p>
              <a
                href={makeMailto("Subscribe to Pulse Marketing AI newsletter")}
                className="btn btn--ghost"
              >
                Join newsletter list
              </a>
            </article>
          )}
          {blogPosts.map((post) => (
            <article key={post.slug}>
              <span className="resources-blog__date">
                {formatDate(post.date)}
              </span>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <div className="resources-blog__meta">
                <span>{post.author}</span>
                <span>{post.readingTime}</span>
              </div>
              <Link
                to={`/blog/${post.slug}`}
                className="btn btn--ghost resources-blog__cta"
              >
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section resources-guides"
        id="guides"
        role="tabpanel"
        aria-labelledby="tab-guides"
        hidden={activeTab !== "guides"}
      >
        <div className="section__header">
          <span className="section__eyebrow">Guides</span>
          <h2 className="section__title">Deep dives to rally your crew.</h2>
          <p className="section__subtitle">
            These field manuals walk through launch checklists, guardrails, and
            narrative workflows so your staff understands the plan in minutes.
          </p>
        </div>
        <div className="resources-guides__grid">
          {guides.map((guide) => (
            <article key={guide.title}>
              <h3>{guide.title}</h3>
              <p>{guide.description}</p>
              <a href={guide.link} className="btn btn--ghost">
                Request preview form
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section resources-webinars"
        id="webinars"
        role="tabpanel"
        aria-labelledby="tab-webinars"
        hidden={activeTab !== "webinars"}
      >
        <div className="section__header">
          <span className="section__eyebrow">Webinars</span>
          <h2 className="section__title">Learn from practitioners.</h2>
          <p className="section__subtitle">
            Join live sessions where operators and Pulse Marketing AI coaches
            share what is working—expect candid stories and actionable next
            steps.
          </p>
        </div>
        <div className="resources-webinars__grid">
          {webinars.map((webinar) => (
            <article key={webinar.title}>
              <h3>{webinar.title}</h3>
              {webinar.status ? (
                <span className="resources-webinars__status">
                  {webinar.status}
                </span>
              ) : null}
              <p className="resources-webinars__date">{webinar.date}</p>
              <p>{webinar.presenters}</p>
              <a href={webinar.link} className="btn btn--ghost">
                Join the waitlist
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        className="section resources-press"
        id="press"
        aria-labelledby="resources-press-heading"
      >
        <div className="resources-press__inner">
          <div>
            <span className="section__eyebrow">Press</span>
            <h2 id="resources-press-heading" className="section__title">
              Press-ready materials &amp; story support.
            </h2>
            <p className="section__subtitle">
              Editors and analysts can grab fast facts, download visuals, or
              book time with our team for deeper briefings.
            </p>
          </div>
          <div className="resources-press__grid">
            {pressAssets.map((asset) => (
              <article key={asset.title}>
                <h3>{asset.title}</h3>
                <p>{asset.description}</p>
                <a href={asset.link} className="btn btn--ghost">
                  Request access
                </a>
              </article>
            ))}
            <article>
              <h3>On deadline?</h3>
              <p>
                Email{" "}
                <a
                  href={makeMailto(
                    "Press inquiry — urgent response",
                    "press@pulsemarketing-ai.com",
                  )}
                >
                  press@pulsemarketing-ai.com
                </a>{" "}
                with your questions and timeline. We respond within one business
                day.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section resources-support"
        id="support"
        aria-labelledby="resources-support-heading"
      >
        <div className="resources-support__inner">
          <div>
            <span className="section__eyebrow">Customer support</span>
            <h2 id="resources-support-heading" className="section__title">
              Get help from the Pulse support studio.
            </h2>
            <p className="section__subtitle">
              Existing customers can open tickets, join office hours, or explore
              self-serve training to keep every activation on track.
            </p>
          </div>
          <div className="resources-support__grid">
            <article>
              <h3>Open a support ticket</h3>
              <p>
                Log an issue or request guidance. Our team replies within four
                business hours.
              </p>
              <a
                className="btn btn--ghost"
                href={makeMailto(
                  "Support request",
                  "support@pulsemarketing-ai.com",
                )}
              >
                Email support
              </a>
            </article>
            <article>
              <h3>Join office hours</h3>
              <p>
                Weekly live calls with product specialists to troubleshoot
                automations and insights.
              </p>
              <a
                className="btn btn--ghost"
                href={makeMailto(
                  "Register for Pulse office hours",
                  "support@pulsemarketing-ai.com",
                )}
              >
                Reserve a seat
              </a>
            </article>
            <article>
              <h3>Access the knowledge base</h3>
              <p>
                Guides, checklists, and video walkthroughs covering each Pulse
                module.
              </p>
              <a
                className="btn btn--ghost"
                href={makeMailto(
                  "Request knowledge base access",
                  "support@pulsemarketing-ai.com",
                )}
              >
                Request access
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="section resources-careers" id="careers">
        <div className="resources-careers__inner">
          <div>
            <h2>Careers</h2>
            <p>
              We’re assembling a team across product, engineering, design, and
              experience strategy to help brands deliver unforgettable moments.
              If blending art and systems is your craft, let’s talk.
            </p>
          </div>
          <a className="btn btn--primary" href={makeMailto("Careers inquiry")}>
            Email us about roles
          </a>
        </div>
      </section>
    </>
  );
}
