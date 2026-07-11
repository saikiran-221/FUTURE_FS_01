import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container about-page">
      <section className="professional-summary">
        <h2>Professional Summary</h2>
        <p>
          Frontend Developer with a strong focus on creating intuitive user interfaces using React and JavaScript.
          Currently expanding into full-stack development by integrating database solutions like MySQL via Supabase
          to build comprehensive web applications.
        </p>
      </section>

      <section className="technical-skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Languages</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>React.js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express JS</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <ul>
              <li>MySQL</li>
              <li>MongoDB Atlas</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Cursor</li>
              <li>ImageKit</li>
              <li>Cloudinary</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>B.TECH (2nd Year)</h3>
          <p>Vignan's Institute of Information Technology</p>
          <p>Expected Completion: 2028</p>
        </div>
      </section>

      <section className="career-goal">
        <h2>What I’m Looking For</h2>
        <p>
          Seeking internship opportunities to apply full-stack development skills
          in real-world production environments.
        </p>
      </section>
    </div>
  );
};

export default About;
