import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import type { BlogPost } from "../data/blogPosts";
import { loadBlogPost } from "../data/blogPosts";
import "../styles/blog-post.scss";
import { formatLongDate } from "../utils/date";

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

  return (
    <>
      <Helmet>
        <title>{post.title} — Pulse Marketing AI Chronicle</title>
        <meta name="description" content={post.excerpt} />
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
