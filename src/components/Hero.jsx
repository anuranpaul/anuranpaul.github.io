import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const useTypewriter = (text, speed = 70, delay = 0) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout;
    let currentIndex = 0;

    const initialDelay = setTimeout(() => {
      const typeCharacter = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeCharacter, speed);
        } else {
          setIsComplete(true);
        }
      };
      typeCharacter();
    }, delay);

    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return { displayText, isComplete };
};

/* ── A pure-SVG "backend dev" illustration ── */
const HeroIllustration = () => (
  <motion.div
    className="hero-illustration"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <svg
      viewBox="0 0 480 460"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Backend developer illustration"
    >
      {/* ── Glowing background circle ── */}
      <circle cx="240" cy="230" r="180" fill="var(--accent)" opacity="0.04" />
      <circle cx="240" cy="230" r="140" fill="var(--accent)" opacity="0.04" />

      {/* ── Monitor frame ── */}
      <rect x="80" y="60" width="320" height="210" rx="14" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1.5" />
      {/* screen */}
      <rect x="96" y="76" width="288" height="178" rx="6" fill="var(--bg-primary)" />
      {/* monitor stand */}
      <rect x="210" y="270" width="60" height="20" rx="4" fill="var(--bg-secondary)" />
      <rect x="185" y="288" width="110" height="8" rx="4" fill="var(--bg-secondary)" />

      {/* ── Code lines on screen ── */}
      {/* line 1 – purple keyword */}
      <rect x="114" y="98" width="38" height="7" rx="3.5" fill="var(--accent)" opacity="0.7" />
      {/* class name */}
      <rect x="158" y="98" width="60" height="7" rx="3.5" fill="var(--text-secondary)" opacity="0.5" />
      <rect x="224" y="98" width="12" height="7" rx="3.5" fill="var(--accent)" opacity="0.4" />
      <rect x="242" y="98" width="30" height="7" rx="3.5" fill="var(--text-secondary)" opacity="0.4" />

      {/* line 2 – indent + method */}
      <rect x="126" y="116" width="24" height="7" rx="3.5" fill="var(--accent)" opacity="0.5" />
      <rect x="156" y="116" width="52" height="7" rx="3.5" fill="var(--text-primary)" opacity="0.4" />
      <rect x="214" y="116" width="10" height="7" rx="3.5" fill="var(--text-muted)" opacity="0.5" />

      {/* line 3 – comment green */}
      <rect x="126" y="132" width="100" height="7" rx="3.5" fill="#22c55e" opacity="0.35" />

      {/* line 4 */}
      <rect x="138" y="148" width="30" height="7" rx="3.5" fill="var(--accent)" opacity="0.5" />
      <rect x="174" y="148" width="64" height="7" rx="3.5" fill="var(--text-primary)" opacity="0.35" />

      {/* line 5 */}
      <rect x="138" y="164" width="18" height="7" rx="3.5" fill="var(--accent)" opacity="0.4" />
      <rect x="162" y="164" width="76" height="7" rx="3.5" fill="var(--text-secondary)" opacity="0.3" />

      {/* line 6 – longer */}
      <rect x="138" y="180" width="50" height="7" rx="3.5" fill="var(--accent-light)" opacity="0.4" />
      <rect x="194" y="180" width="88" height="7" rx="3.5" fill="var(--text-secondary)" opacity="0.3" />

      {/* line 7 */}
      <rect x="126" y="196" width="12" height="7" rx="3.5" fill="var(--text-muted)" opacity="0.4" />

      {/* line 8 – closing */}
      <rect x="114" y="212" width="10" height="7" rx="3.5" fill="var(--text-muted)" opacity="0.4" />

      {/* ── Cursor blink on screen ── */}
      <rect x="134" y="228" width="2" height="10" rx="1" fill="var(--accent)" opacity="0.9">
        <animate attributeName="opacity" values="0.9;0;0.9" dur="1.2s" repeatCount="indefinite" />
      </rect>

      {/* ── Floating tech badge cards ── */}
      {/* Java badge – top right */}
      <g transform="translate(340, 48)">
        <rect width="88" height="36" rx="10" fill="var(--bg-secondary)" stroke="var(--border-hover)" strokeWidth="1" opacity="0.9" />
        <circle cx="18" cy="18" r="8" fill="var(--accent)" opacity="0.2" />
        <text x="18" y="22" textAnchor="middle" fontSize="10" fill="var(--accent)" fontWeight="700" fontFamily="JetBrains Mono, monospace">☕</text>
        <text x="44" y="22" fontSize="11" fill="var(--text-primary)" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.85">Java</text>
        <animateTransform attributeName="transform" type="translate" values="340,48; 340,42; 340,48" dur="4s" repeatCount="indefinite" />
      </g>

      {/* Spring Boot badge – bottom left */}
      <g transform="translate(44, 310)">
        <rect width="112" height="36" rx="10" fill="var(--bg-secondary)" stroke="var(--border-hover)" strokeWidth="1" opacity="0.9" />
        <circle cx="18" cy="18" r="8" fill="#22c55e" opacity="0.2" />
        <text x="18" y="22" textAnchor="middle" fontSize="10" fill="#22c55e" fontWeight="700">🍃</text>
        <text x="44" y="22" fontSize="11" fill="var(--text-primary)" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.85">Spring</text>
        <animateTransform attributeName="transform" type="translate" values="44,310; 44,316; 44,310" dur="5s" repeatCount="indefinite" />
      </g>

      {/* Docker badge – bottom right */}
      <g transform="translate(340, 310)">
        <rect width="100" height="36" rx="10" fill="var(--bg-secondary)" stroke="var(--border-hover)" strokeWidth="1" opacity="0.9" />
        <circle cx="18" cy="18" r="8" fill="#38bdf8" opacity="0.2" />
        <text x="18" y="22" textAnchor="middle" fontSize="10" fill="#38bdf8" fontWeight="700">🐳</text>
        <text x="44" y="22" fontSize="11" fill="var(--text-primary)" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.85">Docker</text>
        <animateTransform attributeName="transform" type="translate" values="340,310; 340,304; 340,310" dur="3.5s" repeatCount="indefinite" />
      </g>

      {/* AWS badge – top left */}
      <g transform="translate(44, 48)">
        <rect width="92" height="36" rx="10" fill="var(--bg-secondary)" stroke="var(--border-hover)" strokeWidth="1" opacity="0.9" />
        <circle cx="18" cy="18" r="8" fill="#f59e0b" opacity="0.2" />
        <text x="18" y="22" textAnchor="middle" fontSize="10" fill="#f59e0b" fontWeight="700">☁️</text>
        <text x="44" y="22" fontSize="11" fill="var(--text-primary)" fontWeight="600" fontFamily="Inter, sans-serif" opacity="0.85">AWS</text>
        <animateTransform attributeName="transform" type="translate" values="44,48; 44,54; 44,48" dur="6s" repeatCount="indefinite" />
      </g>

      {/* ── Connecting dotted lines between badges ── */}
      <line x1="136" y1="76" x2="180" y2="110" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      <line x1="384" y1="84" x2="355" y2="110" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      <line x1="100" y1="328" x2="150" y2="285" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      <line x1="390" y1="328" x2="360" y2="285" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />

      {/* ── Server rack icon at bottom center ── */}
      <g transform="translate(176, 340)">
        {/* server unit 1 */}
        <rect x="0" y="0" width="128" height="22" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="16" cy="11" r="4" fill="var(--accent)" opacity="0.6" />
        <rect x="28" y="7" width="48" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.4" />
        <rect x="28" y="12" width="32" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.25" />
        <circle cx="112" cy="11" r="3" fill="#22c55e" opacity="0.7">
          <animate attributeName="opacity" values="0.7;0.2;0.7" dur="2s" repeatCount="indefinite" />
        </circle>
        {/* server unit 2 */}
        <rect x="0" y="28" width="128" height="22" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="16" cy="39" r="4" fill="var(--accent)" opacity="0.5" />
        <rect x="28" y="35" width="60" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.4" />
        <rect x="28" y="40" width="40" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.25" />
        <circle cx="112" cy="39" r="3" fill="#22c55e" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
        {/* server unit 3 */}
        <rect x="0" y="56" width="128" height="22" rx="5" fill="var(--bg-secondary)" stroke="var(--border-subtle)" strokeWidth="1" />
        <circle cx="16" cy="67" r="4" fill="var(--accent)" opacity="0.4" />
        <rect x="28" y="63" width="44" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.4" />
        <rect x="28" y="68" width="28" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.25" />
        <circle cx="112" cy="67" r="3" fill="var(--accent)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0.1;0.5" dur="2.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </motion.div>
);

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const titleText = "Hi, I'm ";
  const nameText = "Anuran Paul";
  const roleText = "Full-Stack Developer";
  const descriptionText = "I build robust and scalable server-side applications. With expertise in Java, I specialize in creating efficient, secure, and high-performance backend systems.";

  const title = useTypewriter(titleText, 70, 300);
  const name = useTypewriter(nameText, 70, titleText.length * 70 + 600);
  const role = useTypewriter(roleText, 50, titleText.length * 70 + nameText.length * 70 + 900);
  const description = useTypewriter(
    descriptionText,
    15,
    titleText.length * 70 + nameText.length * 70 + roleText.length * 50 + 1200
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }
    };
    const el = heroRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const socials = [
    { icon: <FaGithub />, href: 'https://github.com/anuranpaul', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://linkedin.com/in/anuranpaul', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: 'https://twitter.com/anuranpaul', label: 'Twitter' },
    { icon: <MdEmail />, href: 'mailto:anuran34@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" ref={heroRef}>
      {/* Dot grid spotlight */}
      <div
        className="hero-grid"
        style={{
          '--mouse-x': `${mousePos.x}px`,
          '--mouse-y': `${mousePos.y}px`,
        }}
      />
      <div className="hero-orb" />

      <div className="container">
        <div className="hero-layout">
          {/* ── Left: text content ── */}
          <div className="hero-content">
            {/* <motion.p
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="greeting-icon"></span>
            </motion.p> */}

            <h1>
              <span className="title-wrapper">{title.displayText}</span>
              <span className="name">{name.displayText}</span>
              <span className="cursor-blink" />
            </h1>

            <h2 className="role-wrapper">
              <span className="role-prompt">&gt; </span>
              {role.displayText}
              {!role.isComplete && <span className="underscore">_</span>}
            </h2>

            <p className="description-wrapper">{description.displayText}</p>

            {description.isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="hero-actions">
                  <a href="#projects" className="btn">
                    <span>View My Work</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                  <a href="#contact" className="btn btn-outline">
                    Get In Touch
                  </a>
                </div>

                <div className="social-icons">
                  {socials.map((s, i) => (
                    <motion.a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={s.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      aria-label={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 * i }}
                      whileHover={{ y: -3 }}
                    >
                      {s.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* ── Right: SVG illustration ── */}
          <HeroIllustration />
        </div>
      </div>

      <style>{`
        #hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          position: relative;
          overflow: hidden;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle at 1px 1px,
            var(--text-muted) 0.5px,
            transparent 0
          );
          background-size: 38px 38px;
          opacity: 0.13;
          -webkit-mask-image: radial-gradient(
            500px circle at var(--mouse-x) var(--mouse-y),
            rgba(0,0,0,0.5),
            transparent
          );
          mask-image: radial-gradient(
            500px circle at var(--mouse-x) var(--mouse-y),
            rgba(0,0,0,0.5),
            transparent
          );
          pointer-events: none;
          z-index: 0;
        }

        .hero-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          filter: blur(130px);
          pointer-events: none;
          opacity: 0.06;
          background: var(--accent);
          top: -150px;
          right: -100px;
          z-index: 0;
        }

        /* Two-column layout */
        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 1;
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-illustration {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-illustration svg {
          width: 100%;
          max-width: 480px;
          height: auto;
          filter: drop-shadow(0 0 40px var(--accent-glow));
        }

        .hero-greeting {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .greeting-icon {
          display: inline-block;
          animation: wave 2.5s infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0%, 60%, 100% { transform: rotate(0); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
        }

        .hero-content h1 {
          font-size: clamp(34px, 4.5vw, 56px);
          line-height: 1.1;
          margin-bottom: 14px;
          color: var(--text-primary);
          font-weight: 800;
          letter-spacing: -0.03em;
          min-height: 62px;
        }

        .title-wrapper, .name {
          display: inline;
          white-space: pre;
        }

        .hero-content h1 .name {
          color: var(--accent);
          font-weight: 800;
        }

        .cursor-blink {
          display: inline-block;
          width: 3px;
          height: 0.65em;
          background: var(--accent);
          margin-left: 4px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
          border-radius: 2px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-content h2 {
          font-family: var(--font-mono);
          font-size: clamp(15px, 2vw, 20px);
          line-height: 1.4;
          margin-bottom: 20px;
          color: var(--text-secondary);
          font-weight: 400;
          min-height: 28px;
        }

        .role-prompt {
          color: var(--accent);
          font-weight: 700;
        }

        .underscore {
          animation: blink 1s step-end infinite;
          color: var(--accent);
        }

        .hero-content p {
          font-size: 16px;
          margin-bottom: 32px;
          color: var(--text-secondary);
          max-width: 500px;
          line-height: 1.8;
          min-height: 52px;
        }

        .role-wrapper, .description-wrapper {
          white-space: pre-wrap;
          display: block;
        }

        .hero-actions {
          display: flex;
          gap: 14px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }

        .btn-outline {
          background: transparent;
          color: var(--text-secondary);
          border-color: var(--border-subtle);
        }

        .btn-outline:hover {
          background: var(--bg-glass-hover);
          color: var(--text-primary);
          border-color: var(--border-hover);
        }

        .social-icons {
          display: flex;
          gap: 12px;
        }

        .social-icons a {
          color: var(--text-muted);
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--bg-glass);
          border: 1px solid var(--border-subtle);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .social-icons a:hover {
          color: var(--accent);
          border-color: var(--border-hover);
          background: var(--accent-muted);
        }

        @media screen and (max-width: 900px) {
          .hero-layout {
            grid-template-columns: 1fr;
          }

          .hero-illustration {
            display: none;
          }
        }

        @media screen and (max-width: 480px) {
          .hero-greeting {
            font-size: 22px;
          }

          .hero-actions {
            flex-direction: column;
            max-width: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;