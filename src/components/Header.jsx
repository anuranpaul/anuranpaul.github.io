import { useState, useEffect } from 'react';

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close mobile menu when clicking outside
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
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          &lt;/&gt;
        </a>

        <div
          className={`mobile-menu ${isMenuOpen ? "active" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <nav id="navbar" className={isMenuOpen ? "active" : ""}>
          <ul>
            <li>
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
            <li>
              <a
                href={import.meta.env.VITE_RESUME_URL}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault(); 
                  window.open(
                    import.meta.env.VITE_RESUME_URL,
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <style jsx>{`
        .header {
          padding: 20px 0;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          background-color: var(--bg);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        .header.scrolled {
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.3);
          height: 70px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 24px;
          font-weight: 700;
          color: var(--secondary);
          text-decoration: none;
        }

        nav ul {
          display: flex;
          list-style: none;
        }

        nav ul li {
          margin-left: 30px;
        }

        nav ul li a {
          color: var(--text);
          text-decoration: none;
          font-size: 16px;
          font-weight: 500;
          padding: 10px 0;
          position: relative;
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        nav ul li a:hover {
          color: var(--secondary);
        }

        nav ul li a::before {
          content: "";
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--secondary);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        }

        nav ul li a:hover::before {
          width: 100%;
        }

        .mobile-menu {
          display: none;
          cursor: pointer;
        }

        .bar {
          display: block;
          width: 25px;
          height: 3px;
          margin: 5px auto;
          background-color: var(--text);
          transition: all 0.3s ease-in-out;
        }

        @media screen and (max-width: 768px) {
          nav {
            position: fixed;
            top: 70px;
            right: -100%;
            width: 70%;
            height: calc(100vh - 70px);
            background-color: #112240;
            flex-direction: column;
            transition: 0.5s ease;
            padding: 50px 0;
            box-shadow: -10px 0px 30px -15px rgba(0, 0, 0, 0.7);
          }

          nav.active {
            right: 0;
          }

          nav ul {
            flex-direction: column;
            align-items: center;
          }

          nav ul li {
            margin: 15px 0;
          }

          .mobile-menu {
            display: block;
            z-index: 1001;
          }

          .mobile-menu.active .bar:nth-child(2) {
            opacity: 0;
          }

          .mobile-menu.active .bar:nth-child(1) {
            transform: translateY(8px) rotate(45deg);
          }

          .mobile-menu.active .bar:nth-child(3) {
            transform: translateY(-8px) rotate(-45deg);
          }
        }
      `}</style>
    </header>
  );
};

export default Header;