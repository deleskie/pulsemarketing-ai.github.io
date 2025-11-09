import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { BlogPost } from "../data/blogPosts";
import { loadBlogPost } from "../data/blogPosts";
import "../styles/blog-post.scss";
import { formatLongDate } from "../utils/date";

const CANONICAL_BLOG_BASE = "https://www.deleskie.com/blog";
const DEFAULT_AUTHOR = {
  name: "James DeLeskie",
  profileUrl: "https://www.deleskie.com/#bio",
  sameAs: [
    "https://www.linkedin.com/in/jimdeleskie",
    "https://github.com/deleskie",
    "https://www.pulsesolutions-ai.com/",
    "https://www.pulsemarketing-ai.com/",
  ],
};
const DEFAULT_PUBLISHER = {
  name: "Pulse Solutions AI",
  url: "https://www.pulsesolutions-ai.com/",
  logo: "https://www.pulsesolutions-ai.com/assets/logo.png",
};
const DEFAULT_SOCIAL_IMAGE =
  "https://www.deleskie.com/assets/blog/default-og.jpg";

function buildCanonicalUrl(slug: string): string {
  const sanitized = slug.replace(/^\//, "").replace(/\.html?$/, "");
  return `${CANONICAL_BLOG_BASE}/${sanitized}.html`;
}

export default function BlogPostPage(): JSX.Element {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    if (!slug) {
      setPost(null);
      setLoading(false);
      return;
    }
    loadBlogPost(slug)
      .then((entry) => {
        if (active) {
          setPost(entry ?? null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (active) {
          setError(
            err instanceof Error ? err : new Error("Failed to load article"),
          );
          setLoading(false);
        }
      });
    return () => {
      active = false;
    };
  }, [slug]);

  if (loading) {
    return (
      <section className="section blog-post">
        <div className="blog-post__container">
          <h1>Loading article…</h1>
          <p>Please hold on while we fetch the latest story.</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section blog-post">
        <div className="blog-post__container">
          <h1>Article unavailable</h1>
          <p>
            We couldn&apos;t load this story right now. Please try again soon.
          </p>
        </div>
      </section>
    );
  }

  if (!post) {
    return (
      <section className="section blog-post">
        <div className="blog-post__container">
          <h1>Article not found</h1>
          <p>
            The story you&apos;re looking for has moved. See our{" "}
            <Link to="/resources#articles">latest articles</Link>.
          </p>
        </div>
      </section>
    );
  }

  const canonicalUrl =
    post.seo?.canonicalUrl ??
    (post.seo?.canonicalSlug
      ? buildCanonicalUrl(post.seo.canonicalSlug)
      : buildCanonicalUrl(post.slug));
  const description = post.seo?.description ?? post.excerpt;
  const keywords = post.seo?.keywords ?? post.tags ?? [];
  const keywordsContent = keywords.length > 0 ? keywords.join(", ") : undefined;
  const authorName = post.seo?.authorName ?? DEFAULT_AUTHOR.name;
  const authorProfileUrl =
    post.seo?.authorProfileUrl ?? DEFAULT_AUTHOR.profileUrl;
  const authorSameAs = post.seo?.authorSameAs ?? DEFAULT_AUTHOR.sameAs;
  const publisherName = post.seo?.publisherName ?? DEFAULT_PUBLISHER.name;
  const publisherUrl = post.seo?.publisherUrl ?? DEFAULT_PUBLISHER.url;
  const publisherLogo = post.seo?.publisherLogo ?? DEFAULT_PUBLISHER.logo;
  const socialImage = post.seo?.image ?? DEFAULT_SOCIAL_IMAGE;
  const datePublished = post.seo?.datePublished ?? post.date;
  const dateModified = post.seo?.dateModified ?? datePublished;
  const ogTitle = `${post.title} — by ${authorName}`;
  const pageTitle = `${post.title} — Pulse Marketing AI Chronicle`;
  const siteName = "DeLeskie.com";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description,
    author: {
      "@type": "Person",
      name: authorName,
      url: authorProfileUrl,
      sameAs: authorSameAs,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: publisherUrl,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    image: socialImage,
    datePublished,
    dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="author" content={authorName} />
        {keywordsContent ? (
          <meta name="keywords" content={keywordsContent} />
        ) : null}
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" href={canonicalUrl} hreflang="en" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content={post.title} />
        <meta property="article:author" content={authorProfileUrl} />
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:modified_time" content={dateModified} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:image:alt" content={post.title} />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <article className="section blog-post">
        <div className="blog-post__container">
          <header className="blog-post__header">
            <span className="blog-post__date">{formatLongDate(post.date)}</span>
            <h1>{post.title}</h1>
            <div className="blog-post__meta">
              <span>By {post.author}</span>
              <span>{post.readingTime}</span>
            </div>
          </header>
          <div className="blog-post__content">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <aside className="blog-post__disclaimer">
            <p>
              Stories are inspired by typical customer situations; names and
              details are fictional.
            </p>
            {post.includeCompetitorDisclaimer ? (
              <p>
                Comparisons and company references are hypothetical and provided
                for illustrative purposes only.
              </p>
            ) : null}
          </aside>
          <footer className="blog-post__footer">
            <Link to="/resources#articles" className="btn btn--ghost">
              Back to newsroom
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
