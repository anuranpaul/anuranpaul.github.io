import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    setTilt({
      x: ((y - centerY) / centerY) * -3,
      y: ((x - centerX) / centerX) * 3,
    });
    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlowPos({ x: 50, y: 50 });
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      ref={cardRef}
      className="project-card-wrapper"
      variants={itemVariants}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      <div
        className="project-card-glow"
        style={{
          background: `radial-gradient(350px circle at ${glowPos.x}% ${glowPos.y}%, var(--accent-glow), transparent 60%)`,
        }}
      />

      <div className="project-card glass-card">
        <div className="project-top">
          <div className="project-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" />
            </svg>
          </div>
          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Demo">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
        </div>

        <h3 className="project-title">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            {project.title}
          </a>
        </h3>

        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <style>{`
        .project-card-wrapper {
          position: relative;
          will-change: transform;
        }

        .project-card-glow {
          position: absolute;
          inset: -1px;
          border-radius: 15px;
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 0;
        }

        .project-card-wrapper:hover .project-card-glow {
          opacity: 1;
        }

        .project-card {
          padding: 26px;
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 1;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
        }

        .project-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--accent-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
        }

        .project-links {
          display: flex;
          gap: 10px;
        }

        .project-links a {
          color: var(--text-muted);
          font-size: 17px;
          padding: 6px;
          border-radius: 6px;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .project-links a:hover {
          color: var(--accent);
        }

        .project-title {
          font-size: 17px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .project-title a {
          color: var(--text-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .project-title a:hover {
          color: var(--accent);
        }

        .project-description {
          color: var(--text-secondary);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 18px;
          flex-grow: 1;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: auto;
        }

        .tech-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          padding: 3px 9px;
          border-radius: 6px;
          background: var(--accent-muted);
          color: var(--text-muted);
          transition: all var(--transition-fast);
        }

        .project-card-wrapper:hover .tech-tag {
          color: var(--text-secondary);
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;
