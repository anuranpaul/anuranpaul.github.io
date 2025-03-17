const About = () => {
  // List of skills/technologies
  const skills = [
    "Java",
    "Spring Boot",
    "Node.js",
    "Express",
    "Go",
    "React",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Docker",
    "AWS",
    "RESTful APIs",
    "GraphQL",
    "Microservices",
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm Anuran, a backend developer building and working on
              efficient and scalable server-side applications. My journey in
              software development began when I was in college.
            </p>
            <p>
              I specialize in designing and implementing robust APIs, database
              architectures, and server logic. My focus is on creating systems
              that are not only functional but also maintainable, secure, and
              optimized for performance.
            </p>
            <p>Here are some technologies I've been working with :</p>
            <div className="skills">
              {skills.map((skill, index) => (
                <span className="skill-tag" key={index}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          {/* <div className="profile-img">
            <img src={profile} alt="Profile" />
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .about-content {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 50px;
          align-items: center;
        }

        .about-text p {
          margin-bottom: 20px;
          color: var(--text-secondary);
        }

        .skills {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .skill-tag {
          background: rgba(100, 255, 218, 0.1);
          color: var(--secondary);
          padding: 8px 16px;
          border-radius: 4px;
          margin-right: 10px;
          margin-bottom: 10px;
          font-size: 14px;
        }

        .profile-img {
          position: relative;
          max-width: 300px;
          margin: 0 auto;
        }

        .profile-img img {
          width: 100%;
          border-radius: 5px;
          filter: grayscale(100%) contrast(1);
          transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
          z-index: 1;
          position: relative;
        }

        .profile-img::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid var(--secondary);
          border-radius: 5px;
          top: 20px;
          left: 20px;
          z-index: 0;
        }

        .profile-img:hover img {
          filter: none;
          transform: translateY(-5px);
        }

        @media screen and (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .profile-img {
            margin-top: 50px;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
