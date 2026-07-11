import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import profileImg from '../assets/IMG.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="page-container home-page">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>M Sai Kiran</h1>
            <h2>Frontend Developer | Aspiring Full Stack Developer</h2>
            <p className="value-statement">
              Building responsive and interactive web applications with a focus on seamless user experience.
            </p>
            <div className="hero-btns">
              <a href="/Miriyala_SaiKiran_ATS_Resume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">Resume</a>
              <a href="https://github.com/saikiran-221" className="btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-glow"></div>
            <img
              src={profileImg}
              alt="M Sai Kiran – Frontend Developer"
              className="hero-profile-img"
            />
          </div>
        </div>
      </section>

      <section className="about-preview">
        <h3>About Me</h3>
        <p>
          I specialize in building robust full-stack applications with a focus on
          performance and security. I've built systems ranging from blood bank
          management to agricultural advisory tools. Currently seeking
          internship opportunities.
        </p>
        <Link to="/about" className="read-more">Read More →</Link>
      </section>

      <section className="skills-highlight">
        <div className="section-header">
          <h3>Technical Expertise</h3>
          <p className="section-subtitle">A comprehensive set of tools and technologies I use to build professional web applications.</p>
        </div>
        <div className="skills-container-expanded">
          <div className="skill-card-home">
            <div className="skill-card-icon">🌐</div>
            <h4>Languages</h4>
            <div className="skill-pills">
              <span>Java</span>
              <span>JavaScript (ES6+)</span>
              <span>Python</span>
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">⚛️</div>
            <h4>Frontend</h4>
            <div className="skill-pills">
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Tailwind CSS</span>
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">⚙️</div>
            <h4>Backend</h4>
            <div className="skill-pills">
              <span>Node.js</span>
              <span>Express.js</span>
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">🗄️</div>
            <h4>Database</h4>
            <div className="skill-pills">
              <span>MySQL</span>
              <span>MongoDB Atlas</span>
              <span>Supabase</span>
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">🛠️</div>
            <h4>Tools & Workflow</h4>
            <div className="skill-pills">
              <span>Cursor</span>
              <span>VS Code</span>
              <span>Git & GitHub</span>
              <span>ImageKit</span>
              <span>Cloudinary</span>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-projects">
        <div className="section-header">
          <h3>Featured Projects</h3>
          <p className="section-subtitle">Hand-picked projects that demonstrate my technical competence and problem-solving skills.</p>
        </div>
        <div className="project-grid">
          <ProjectCard
            id="smart-doubt-exchange"
            title="Smart Doubt Exchange Platform"
            subtitle="AI-Powered Collaborative Learning Platform"
            summary="A full-stack collaborative learning platform that enables students to ask, answer, and organize academic doubts efficiently. Features secure authentication, AI-assisted responses, subject-wise categorization, real-time search, voting system, and a modern responsive dashboard for interactive learning."
            techStack={['React', 'Node.js', 'Express', 'Supabase', 'JWT', 'Tailwind CSS']}
            github="https://github.com/saikiran-221/csp"
            demo="https://csp-main-zeta.vercel.app/"
          />
          <ProjectCard
            id="smart-crop"
            title="Smart Crop Advisory"
            subtitle="Agricultural Recommendation System"
            summary="Data-driven agricultural advisor using conditional filtering algorithms."
            techStack={['React', 'Algorithms', 'Supabase', 'TypeScript', 'Node.js', 'REST API']}
            github="https://github.com/saikiran-221"
            demo="https://team-explorers-upd.vercel.app/"
          />
        </div>
        <div className="projects-cta">
          <Link to="/projects" className="btn-secondary">View All Projects →</Link>
        </div>
      </section>

      <section className="cta">
        <h3>Open to Internship Opportunities</h3>
        <Link to="/contact" className="btn-primary">Contact Me</Link>
      </section>
    </div>
  );
};

export default Home;
