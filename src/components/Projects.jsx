import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'API Gateway Service',
      description:
        'A robust API Gateway built with Go, featuring role-based access control, rate limiting, metrics, and user management.',
      technologies: ['Go', 'Redis', 'PostgreSQL', 'JWT', 'Prometheus', 'Grafana'],
      github: 'https://github.com/anuranpaul/api_gateway',
    },
    {
      title: 'Distributed Task Scheduler',
      description: 'A distributed task scheduler built with fault tolerance and distributed locking.',
      technologies: ['Go', 'Redis', 'PostgreSQL', 'etcd', 'Prometheus', 'Grafana'],
      github: 'https://github.com/anuranpaul/task-scheduler',
    },
    {
      title: 'Grocery Delivery Microservices',
      description:
        'A microservices design pattern where each service is independently deployable and scalable.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'PostgreSQL', 'Eureka', 'Spring Cloud'],
      github: 'https://github.com/anuranpaul/ZipGroceries',
    },
    {
      title: 'AI Log Analyzer',
      description:
        'A modern log analysis system with efficient storage, retrieval, and real-time monitoring of application logs using a GraphQL API. Leverages AI for advanced log analysis and pattern detection.',
      technologies: ['Java', 'Spring', 'GraphQL', 'Kafka', 'PostgreSQL', 'Websockets', 'Elasticsearch', 'Thymeleaf'],
      github: 'https://github.com/anuranpaul/Log-analyzer',
    },
    {
      title: 'Payment Processing Service',
      description:
        'Backend for a high-throughput payment processing system with end-to-end encryption, Kafka event streaming, and RabbitMQ-based settlement workflows. Designed for PCI compliance and fault-tolerant architecture.',
      technologies: ['Spring Boot', 'PostgreSQL', 'Kafka', 'RabbitMQ', 'Docker'],
      github: 'https://github.com/anuranpaul/payment',
      demo: 'https://github.com/anuranpaul/payment',
    },
    {
      title: 'Moodboard',
      description:
        'Moodboard is a unique platform designed to help you clear your mind and unleash your creativity through the power of expressive writing.',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Shadcn UI'],
      github: 'https://github.com/anuranpaul/Moodboard',
      demo: 'https://moodbaord.vercel.app',
    },
    {
      title: 'QuizMe',
      description:
        'An AI-powered platform for creating quizzes from your text, with authentication and data persistence.',
      technologies: ['Next.js', 'TypeScript', 'Next-Auth', 'React-Query', 'OpenAI', 'Prisma'],
      github: 'https://github.com/anuranpaul/QuizMe',
      demo: 'https://quizme-fire.vercel.app/',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </motion.div>
      </div>

      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 24px;
        }

        @media screen and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
