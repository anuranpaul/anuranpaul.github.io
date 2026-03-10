import { motion } from 'framer-motion';

const Experience = () => {
  const jobs = [
    {
      id: 'job2',
      title: 'Senior Software Engineer',
      company: 'Capgemini',
      location: 'Mumbai, India',
      duration: 'Oct 2025 — Present',
      responsibilities: [
        'Migrated 2 production Angular applications from v15 to v20, adopting standalone components, Signals, and updated control flow syntax.',
        'Reduced API P95 latency by 42% (480ms → 280ms) by eliminating N+1 queries, improving connection pooling, and optimizing Hibernate query execution in production systems.',
        'Implemented asynchronous workflows using RabbitMQ, replacing synchronous service calls and reducing cross-service failure propagation.',
      ],
    },
    {
      id: 'job1',
      title: 'Software Engineer',
      company: 'Capgemini',
      location: 'Mumbai, India',
      duration: 'March 2024 — Sep 2025',
      responsibilities: [
        'Developed and optimized backend services using Java (Spring Boot, Spring MVC, Hibernate), improving application scalability and maintainability.',
        'Refactored core application logic following SOLID principles and applied relevant design patterns (e.g., Factory, Singleton), leading to a 20% improvement in code maintainability.',
        'Implemented high-performance REST APIs, reducing response time by 40% through Spring Boot optimizations, Hibernate query tuning, and AWS CloudWatch monitoring.',
        'Integrated Spring Security with JWT authentication, enhancing API security and ensuring compliance with industry standards.',
        'Developed and deployed containerized microservices using Spring Cloud and Docker on AWS ECS, improving scalability and deployment efficiency.',
        'Implemented asynchronous messaging with RabbitMQ, improving inter-service communication and reducing system latency by 30%.',
      ],
    },
  ];

  return (
    <section id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <div className="timeline">
          <div className="timeline-line" />

          {jobs.map((job, idx) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="timeline-dot">
                <div className="timeline-dot-inner" />
              </div>

              <div className="timeline-card glass-card">
                <div className="timeline-card-header">
                  <div>
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <h4 className="job-company">{job.company}</h4>
                      {job.location && <span className="job-location">· {job.location}</span>}
                    </div>
                  </div>
                  <span className="job-duration">{job.duration}</span>
                </div>

                <ul className="job-responsibilities">
                  {job.responsibilities.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.04 * i }}
                    >
                      <span className="bullet-marker" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          margin-top: 24px;
          padding-left: 36px;
        }

        .timeline-line {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--accent),
            var(--accent-light),
            transparent
          );
          border-radius: 1px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 40px;
        }

        .timeline-item:last-child {
          margin-bottom: 0;
        }

        .timeline-dot {
          position: absolute;
          left: -43px;
          top: 28px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: var(--bg-primary);
          border: 2px solid var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .timeline-dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }

        .timeline-card {
          padding: 28px;
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 22px;
          gap: 16px;
          flex-wrap: wrap;
        }

        .job-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .job-company {
          font-size: 15px;
          font-weight: 600;
          color: var(--accent);
        }

        .job-meta {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .job-location {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 400;
        }

        .job-duration {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-muted);
          padding: 5px 12px;
          border-radius: 8px;
          background: var(--accent-muted);
          white-space: nowrap;
        }

        .job-responsibilities {
          list-style: none;
          padding: 0;
        }

        .job-responsibilities li {
          position: relative;
          padding-left: 20px;
          margin-bottom: 12px;
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
        }

        .job-responsibilities li:last-child {
          margin-bottom: 0;
        }

        .bullet-marker {
          position: absolute;
          left: 0;
          top: 9px;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-light);
        }

        @media screen and (max-width: 768px) {
          .timeline {
            padding-left: 28px;
          }

          .timeline-dot {
            left: -35px;
          }

          .timeline-card {
            padding: 22px;
          }

          .timeline-card-header {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;