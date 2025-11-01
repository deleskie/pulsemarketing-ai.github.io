import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/not-found.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <section className="section not-found">
      <div className="not-found__inner">
        <h1>Let's get you back on course.</h1>
        <p>
          The page you're looking for doesn't exist yet. Explore the platform, browse resources, or
          connect with our team to learn more.
        </p>
        <div className="not-found__actions">
          <Link to="/" className="btn btn--primary">
            Return home
          </Link>
          <Link to="/resources" className="btn btn--ghost">
            View resources
          </Link>
        </div>
      </div>
    </section>
  );
}
