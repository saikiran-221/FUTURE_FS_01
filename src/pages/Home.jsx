import React from 'react';
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
              <a href="/SaiKiranResume.pdf" className="btn-primary" target="_blank" rel="noopener noreferrer">Resume</a>
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
        <a href="/about" className="read-more">Read More →</a>
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
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">⚛️</div>
            <h4>Frontend</h4>
            <div className="skill-pills">
              <span>React.js</span>
              <span>HTML5</span>
              <span>CSS3</span>
            </div>
          </div>
          <div className="skill-card-home">
            <div className="skill-card-icon">⚙️</div>
            <h4>Backend & DB</h4>
            <div className="skill-pills">
              <span>Node.js</span>
              <span>MySQL</span>
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
            id="bloodconnect"
            title="BloodConnect"
            subtitle="Centralized Blood Bank Platform"
            summary="A role-based management system with JWT auth and MySQL integration."
            techStack={['React', 'MySQL', 'JWT']}
            github="https://github.com/saikiran-221"
            demo="https://blood-bank1-sandy.vercel.app/"
          />
          <ProjectCard
            id="smart-crop"
            title="Smart Crop Advisory"
            subtitle="Agricultural Recommendation System"
            summary="Data-driven agricultural advisor using conditional filtering algorithms."
            techStack={['React', 'Algorithms', 'Supabase']}
            github="https://github.com/saikiran-221"
            demo="https://team-explorers-upd.vercel.app/"
          />
        </div>
        <div className="projects-cta">
          <a href="/projects" className="btn-secondary">View All Projects →</a>
        </div>
      </section>

      <section className="cta">
        <h3>Open to Internship Opportunities</h3>
        <a href="/contact" className="btn-primary">Contact Me</a>
      </section>
    </div>
  );
};

export default Home;
