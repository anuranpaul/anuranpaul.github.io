import { motion } from 'framer-motion';
import { FaServer, FaCode, FaCloud } from 'react-icons/fa';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: <FaServer />,
      skills: ['Java', 'Spring Boot', 'Node.js', 'Express', 'Go', 'GraphQL'],
    },
    {
      title: 'Frontend',
      icon: <FaCode />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Infrastructure',
      icon: <FaCloud />,
      skills: ['Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
              I'm Anuran — a <strong>backend-focused fullstack developer</strong> who builds
              efficient, scalable server-side applications. My journey started in college,
              and since then I've been obsessed with creating systems that are not just
              functional, but maintainable, secure, and blazing fast.
            </p>
            <p>
              I specialize in designing robust APIs, database architectures, and
              microservice ecosystems. While my core strength is backend engineering,
              I enjoy building polished frontends to bring the full picture together.
            </p>
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {skillCategories.map((cat) => (
              <motion.div
                key={cat.title}
                className="skill-card glass-card"
                variants={itemVariants}
              >
                <div className="skill-card-header">
                  <span className="skill-icon">{cat.icon}</span>
                  <h3>{cat.title}</h3>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
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

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 16px;
        }

        .skill-card {
          padding: 24px;
        }

        .skill-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .skill-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: var(--accent-muted);
          color: var(--accent);
          font-size: 16px;
        }

        .skill-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skill-pill {
          font-size: 13px;
          font-weight: 500;
          padding: 5px 13px;
          border-radius: 8px;
          background: var(--accent-muted);
          color: var(--text-secondary);
          border: 1px solid transparent;
          transition: all var(--transition-fast);
        }

        .skill-pill:hover {
          color: var(--accent);
          border-color: var(--border-hover);
        }

        @media screen and (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
