import { motion } from 'framer-motion';

const About = () => {
  const certifications = [
    { code: 'AZ-900', name: 'Azure Fundamentals', issuer: 'Microsoft Azure', badge: 'https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg' },
    { code: 'GH-300', name: 'GitHub Copilot', issuer: 'GitHub', badge: '/gh-300-badge.png' },
    { code: 'CCDV-F', name: 'Claude Certified Developer', issuer: 'Anthropic', badge: '/ccdv-f-badge.png' },
  ];

  return (
    <section id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-layout">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I’m a <strong>Software Engineer</strong> who builds backend systems that have to be right the first time. At work, I build payments and checkout microservices in Java, Go, and Spring Boot for a hospitality platform serving 75,000+ guests a day, with RabbitMQ, PostgreSQL, and AWS underneath. I enjoy the unglamorous parts that make systems trustworthy: idempotency, failure handling, observability, and clean deploys.
            </p>
            <p>
              Outside work, I’m co-founder of <strong>Eigen.so</strong>, a live SaaS workspace platform. I took over its backend and evolved it into an async, production-grade service with a hierarchical access-control engine, idempotent subscription billing with signed webhooks, and an AI layer with model routing, evals, and guardrails. Working on both a large enterprise system and a product I co-own keeps me honest about trade-offs: one teaches me scale and rigor, the other teaches me speed and ownership.
            </p>
          </motion.div>

          <motion.div
            className="certifications-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <div className="certifications-heading">
              <span className="certification-stamp">✓</span>
              <div><span className="certifications-label">Credentials / 03</span><h3>Certifications</h3></div>
            </div>
            <div className="certifications-list">
              {certifications.map((certification, index) => (
                <div className="certification-row" key={certification.code}>
                  <div className="certification-copy">
                    <span className="certification-code">{certification.code}</span>
                    <h4>{certification.name}</h4>
                    <span className="certification-issuer">{certification.issuer}</span>
                  </div>
                  <img className="certification-badge" src={certification.badge} alt={`${certification.issuer} ${certification.name} badge`} loading="lazy" />
                </div>
            ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-layout {
          display: grid;
          gap: 48px;
        }

        .about-text p {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 16px;
          max-width: 680px;
        }

        .about-text strong {
          color: var(--text-primary);
          font-weight: 600;
        }

        .certifications-card { align-self: start; background: var(--bg-surface); border: 2px solid var(--ink); box-shadow: 7px 7px 0 var(--ink); color: var(--ink); }
        .certifications-heading { display: flex; align-items: center; gap: 16px; padding: 22px; border-bottom: 2px solid var(--ink); background: var(--accent); }
        .certification-stamp { width: 42px; height: 42px; display: grid; place-items: center; border: 2px solid var(--ink); border-radius: 50%; font-size: 25px; font-weight: 800; }
        .certifications-label, .certification-code, .certification-index { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: .06em; font-size: 10px; }
        .certifications-heading h3 { font-size: 22px; line-height: 1.2; margin-top: 4px; }
        .certification-row { display: grid; grid-template-columns: 1fr 68px; gap: 16px; align-items: center; padding: 16px 22px; border-bottom: 1px solid var(--border-subtle); }
        .certification-row:last-child { border-bottom: 0; }
        .certification-code { color: #087c9d; font-weight: 700; }
        .certification-copy h4 { font-size: 15px; margin: 3px 0; color: var(--ink); }
        .certification-issuer { font-size: 12px; color: #606066; }
        .certification-badge { display: block; width: 64px; height: 64px; object-fit: contain; }

        @media screen and (max-width: 768px) {
          .certifications-card { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default About;
