import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-orb" />

          <motion.div
            className="contact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="contact-eyebrow">What's Next?</p>

            <h2 className="contact-heading">
              Let's Build<br />
              <span className="contact-accent">Something Great</span>
            </h2>

            <p className="contact-description">
              I'm currently open to new opportunities and would love to hear about
              your project. Whether you have a question or just want to say hi —
              I'll try my best to get back to you!
            </p>

            <motion.a
              href="mailto:anuran34@gmail.com"
              className="btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Say Hello</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          position: relative;
          padding: 60px 0;
          overflow: hidden;
        }

        .contact-orb {
          position: absolute;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          opacity: 0.06;
          background: var(--accent);
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
        }

        .contact-content {
          max-width: 520px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .contact-eyebrow {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--accent);
          margin-bottom: 14px;
          letter-spacing: 0.03em;
        }

        .contact-heading {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .contact-accent {
          color: var(--accent);
        }

        .contact-description {
          color: var(--text-secondary);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 36px;
          max-width: 440px;
          margin-left: auto;
          margin-right: auto;
        }

        @media screen and (max-width: 768px) {
          .contact-wrapper {
            padding: 40px 0;
          }

          .contact-description {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;