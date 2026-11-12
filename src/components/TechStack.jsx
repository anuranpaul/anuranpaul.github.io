import { motion } from 'framer-motion';

const categories = [
  { title: 'Languages', skills: ['Java', 'Go', 'Python', 'SQL', 'TypeScript', 'JavaScript'] },
  { title: 'Backend & Distributed Systems', skills: ['Design Patterns', 'Microservices', 'REST APIs', 'Spring Boot 3', 'Hibernate', 'GraphQL', 'Node.js'] },
  { title: 'Data & Messaging', skills: ['PostgreSQL', 'MariaDB', 'MongoDB', 'RabbitMQ', 'AWS Kinesis', 'Kafka'] },
  { title: 'Cloud & DevOps', skills: ['AWS ECS', 'AWS RDS', 'AWS Kinesis', 'AWS Lambda', 'API Gateway', 'Docker', 'Kubernetes', 'Harness', 'CI/CD'] },
  { title: 'Reliability & Observability', skills: ['Splunk', 'Grafana', 'Prometheus', 'ServiceNow', 'Datadog'] },
  { title: 'Testing & Tools', skills: ['JUnit 5', 'Mockito', 'Unit Testing', 'Git', 'Jira', 'Confluence'] },
  { title: 'Frontend', skills: ['Angular', 'React'] },
  { title: 'GenAI & LLMs', skills: ['LangChain', 'LangGraph', 'Temporal', 'pgvector', 'AWS Bedrock'] },
];

const TechStack = () => (
  <section id="tech-stack">
    <div className="container">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5 }}
      >
        <><span className="section-number">03</span> Tech Stack</>
      </motion.h2>

      <p className="stack-intro">Tools and technologies I use to design, build, and operate software.</p>

      <div className="stack-grid">
        {categories.map((category, index) => (
          <motion.article
            className="stack-card glass-card"
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
          >
            <h3>{category.title}</h3>
            <ul>
              {category.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
    <style>{`
      #tech-stack { border-top: 2px solid var(--border-subtle); }
      .stack-intro { color: var(--text-secondary); margin: -24px 0 32px; }
      .stack-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
      .stack-card { padding: 24px; }
      .stack-card h3 { font: 700 15px/1.4 var(--font-mono); text-transform: uppercase; margin-bottom: 20px; }
      .stack-card ul { display: flex; flex-wrap: wrap; list-style: none; gap: 9px; }
      .stack-card li { border: 1px solid var(--border-subtle); padding: 6px 10px; font-size: 12px; line-height: 1.35; color: var(--text-secondary); }
      @media (max-width: 900px) { .stack-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
      @media (max-width: 600px) { .stack-grid { grid-template-columns: 1fr; } }
    `}</style>
  </section>
);

export default TechStack;
