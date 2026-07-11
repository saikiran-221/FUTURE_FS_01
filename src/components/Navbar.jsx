import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import IMG from '../assets/IMG.jpg';
import './Navbar.css';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo-section">
          <img src={IMG} alt="M Sai Kiran" className="logo-img" />
          <span className="brand-name">M Sai Kiran</span>
        </Link>

        {/* Desktop nav */}
        <div className="nav-elements">
          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={location.pathname === to ? 'nav-link--active' : ''}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="/Miriyala_SaiKiran_ATS_Resume.pdf"
            className="btn-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' hamburger--open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={location.pathname === to ? 'nav-link--active' : ''}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href="/Miriyala_SaiKiran_ATS_Resume.pdf"
          className="btn-resume mobile-resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
