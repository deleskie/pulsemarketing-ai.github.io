import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/layout.scss';
import classNames from 'classnames';

const CONTACT_EMAIL = 'info@pulsemarketing-ai.com';
const MAILTO_IMMERSION = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Schedule an Immersion Session')}`;
const MAILTO_DOCUMENTATION = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Request Pulse Marketing AI documentation')}`;
const MAILTO_CONTACT = `mailto:${CONTACT_EMAIL}`;

const NAV_ITEMS = [
  { to: '/platform', label: 'Platform' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/resources', label: 'Resources' },
  { to: '/showcase', label: 'Showcase' },
];

const LANG_OPTIONS = [
  { code: 'en', label: 'English' },
  { code: 'es-419', label: 'Espanol (LatAm)' },
  { code: 'fr', label: 'Francais' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<string>(LANG_OPTIONS[0].code);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-logo" aria-label="Pulse Marketing AI home">
            <img src="/logo.svg" alt="Pulse Marketing AI logo" />
          </Link>
          <nav className="site-nav">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames('site-nav__item', { 'site-nav__item--active': isActive })
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="site-header__language">
            <label htmlFor="site-language" className="sr-only">
              Select language
            </label>
            <select
              id="site-language"
              value={language}
              onChange={(event) => setLanguage(event.target.value)}
            >
              {LANG_OPTIONS.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="site-header__cta">
            <Link to="/pricing" className="btn btn--ghost">
              View Pricing
            </Link>
            <a
              className="btn btn--primary"
              href={MAILTO_IMMERSION}
            >
              Schedule Immersion
            </a>
          </div>
          <button
            className={classNames('site-header__toggle', { 'is-open': menuOpen })}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span />
            <span />
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              className="site-nav-mobile"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
            >
              <div className="site-nav-mobile__language">
                <label htmlFor="site-language-mobile" className="sr-only">
                  Select language
                </label>
                <select
                  id="site-language-mobile"
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                >
                  {LANG_OPTIONS.map((option) => (
                    <option key={option.code} value={option.code}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className="site-nav-mobile__item"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link to="/pricing" className="btn btn--ghost" onClick={() => setMenuOpen(false)}>
                View Pricing
              </Link>
              <a
                className="btn btn--primary"
                href={MAILTO_IMMERSION}
              >
                Schedule Immersion
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer__grid">
          <div>
            <Link to="/" className="site-logo site-logo--footer">
              <img src="/logo.svg" alt="Pulse Marketing AI logo" />
              <span>Pulse Marketing AI</span>
            </Link>
            <p className="site-footer__tagline">
              Pulse Marketing AI unifies signal intelligence, automations, and storytelling into one experiential command studio.
            </p>
            <div className="site-footer__legal">
              <span>&copy; {new Date().getFullYear()} Pulse Marketing AI</span>
              <Link to="/resources">Trust &amp; Security</Link>
              <Link to="/resources">Accessibility</Link>
            </div>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li>
                <Link to="/platform">Platform Overview</Link>
              </li>
              <li>
                <Link to="/solutions">Solutions</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <a href={MAILTO_DOCUMENTATION}>Documentation</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link to="/resources#about">About</Link>
              </li>
              <li>
                <Link to="/resources#careers">Careers</Link>
              </li>
              <li>
                <a href={MAILTO_CONTACT}>Contact</a>
              </li>
              <li>
                <Link to="/resources#press">Press</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>
                <Link to="/resources#blog">Blog</Link>
              </li>
              <li>
                <Link to="/resources#webinars">Webinars</Link>
              </li>
              <li>
                <Link to="/resources#guides">Guides</Link>
              </li>
              <li>
                <Link to="/resources#support">Support</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <Link to="/pricing" className="site-cta-floating btn btn--accent">
        Talk to a strategist
      </Link>
      <div className="site-cta-mobile">
        <Link to="/pricing" className="btn btn--accent">
          Talk to a strategist
        </Link>
      </div>
    </div>
  );
}
