import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "API Gateway Service",
      description:
        "A robust API Gateway built with Go, featuring role-based access control, rate limiting, metrics, and user management.",
      technologies: [
        "Go",
        "Redis",
        "PostgreSQL",
        "JWT",
        "Prometheus",
        "Grafana",
      ],
      github: "https://github.com/anuranpaul/api_gateway",
    },
    {
      title: "Grocery Delivery System Microservices",
      description:
        "A microservices design pattern where each service is independently deployable and scalable.",
      technologies: [
        "Java",
        "Spring Boot",
        "MongoDB",
        "PostgreSQL",
        "Eureka Server",
        "Spring Cloud",
        "Razorpay API",
      ],
      github: "https://github.com/anuranpaul/ZipGroceries",
    },
    {
      title: "AI Log Analyzer",
      description:
        "This project is a modern log analysis system that allows for efficient storage, retrieval, and real-time monitoring of application logs using a GraphQL API. It leverages AI capabilities for advanced log analysis and pattern detection.",
      technologies: [
        "Java",
        "Spring",
        "GraphQL",
        "Kafka",
        "PostgreSQL",
        "Websockets",
        "Elasticsearch",
        "Thymeleaf",
      ],
      github: "https://github.com/anuranpaul/Log-analyzer",
    },
    // {
    //   title: "Real-time Chat Backend",
    //   description:
    //     "Backend for a real-time chat application with support for private messaging, group chats, and notifications.",
    //   technologies: ["Socket.io", "Redis", "Express", "MongoDB"],
    //   github: "https://github.com/username/chat-backend",
    //   demo: "https://chat.example.com",
    // },
    {
      title: "Moodboard",
      description:
        "Moodboard is a unique platform designed to help you clear your mind and unleash your creativity through the power of expressive writing.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
      github: "https://github.com/anuranpaul/Moodboard",
      demo: "https://moodbaord.vercel.app",
    },
    {
      title: "QuizMe",
      description:
        "An AI-powered platform for creating quizzes from your text.",
      technologies: [
        "Next.js",
        "Typescript",
        "Next-Auth",
        "React-Query",
        "OpenAI",
        "Prisma",
        "TailwindCSS",
      ],
      github: "https://github.com/anuranpaul/QuizMe",
      demo: "https://quizme-fire.vercel.app/",
    },
    // {
    //   title: "Data Processing Pipeline",
    //   description:
    //     "ETL pipeline for processing and analyzing large datasets with scheduling and monitoring capabilities.",
    //   technologies: ["Python", "Apache Airflow", "PostgreSQL", "Pandas"],
    //   github: "https://github.com/username/data-pipeline",
    //   demo: "https://data-demo.example.com",
    // },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Some Things I've Built</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        @media screen and (max-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
