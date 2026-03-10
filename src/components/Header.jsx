import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('#navbar') && !e.target.closest('.mobile-menu')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const navItems = ['About', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container header-container">
        <a href="#" className="logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">AP</span>
          <span className="logo-bracket"> /&gt;</span>
        </a>

        <div
          className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav id="navbar" className={isMenuOpen ? 'active' : ''}>
          <ul>
            {navItems.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="nav-number">0{i + 1}.</span>
                  {item}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <a
                href={import.meta.env.VITE_RESUME_URL}
                className="btn nav-btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(import.meta.env.VITE_RESUME_URL, '_blank', 'noopener,noreferrer');
                }}
              >
                Resume
              </a>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="theme-toggle-wrapper"
            >
              <ThemeToggle />
            </motion.li>
          </ul>
        </nav>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .header {
          padding: 16px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          background: transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .header.scrolled {
          background: var(--header-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 10px 0;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-mono);
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          display: flex;
          align-items: center;
          transition: all var(--transition-fast);
        }

        .logo-bracket {
          color: var(--accent);
          font-weight: 400;
        }

        .logo-text {
          color: var(--text-primary);
        }

        .logo:hover {
          opacity: 0.8;
        }

        nav ul {
          display: flex;
          list-style: none;
          align-items: center;
          gap: 6px;
        }

        nav ul li a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 8px 14px;
          border-radius: 8px;
          position: relative;
          transition: all var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .nav-number {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          font-weight: 500;
        }

        nav ul li a:hover {
          color: var(--text-primary);
          background: var(--bg-glass-hover);
        }

        .nav-btn {
          padding: 8px 18px !important;
          font-size: 14px !important;
        }

        .theme-toggle-wrapper {
          margin-left: 4px;
        }

        .mobile-menu {
          display: none;
          cursor: pointer;
          z-index: 1001;
          padding: 4px;
        }

        .bar {
          display: block;
          width: 22px;
          height: 2px;
          margin: 5px auto;
          background: var(--text-primary);
          transition: all 0.3s ease-in-out;
          border-radius: 2px;
        }

        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          z-index: 998;
        }

        @media screen and (max-width: 768px) {
          nav {
            position: fixed;
            top: 0;
            right: -100%;
            width: 75%;
            max-width: 300px;
            height: 100vh;
            background: var(--bg-secondary);
            border-left: 1px solid var(--border-subtle);
            flex-direction: column;
            transition: right 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            padding: 90px 32px 40px;
            z-index: 999;
          }

          nav.active {
            right: 0;
          }

          nav ul {
            flex-direction: column;
            align-items: flex-start;
            gap: 2px;
          }

          nav ul li {
            width: 100%;
          }

          nav ul li a {
            font-size: 16px;
            padding: 12px 14px;
            width: 100%;
            border-radius: 10px;
          }

          .theme-toggle-wrapper {
            margin-left: 0;
            margin-top: 8px;
          }

          .mobile-menu {
            display: block;
          }

          .mobile-menu.active .bar:nth-child(2) {
            opacity: 0;
          }

          .mobile-menu.active .bar:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .mobile-menu.active .bar:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;