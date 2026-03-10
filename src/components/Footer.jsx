import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/anuranpaul', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/anuranpaul', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/anuranpaul', label: 'Twitter' },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer-divider" />
        <div className="footer-content">
          <div className="footer-social">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          
        </div>
      </div>

      <style>{`
        footer {
          padding: 16px 0 36px;
          position: relative;
        }

        .footer-divider {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            var(--accent),
            transparent
          );
          margin-bottom: 36px;
          opacity: 0.2;
        }

        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .footer-social {
          display: flex;
          gap: 12px;
        }

        .footer-social a {
          color: var(--text-muted);
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .footer-social a:hover {
          color: var(--accent);
          border-color: var(--border-hover);
          background: var(--accent-muted);
        }

        .footer-info {
          text-align: center;
        }

        .footer-credit {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .footer-name {
          color: var(--accent);
          font-weight: 600;
        }

        .footer-tech {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-muted);
        }
      `}</style>
    </footer>
  );
};

export default Footer;