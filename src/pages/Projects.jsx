import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 'smart-crop',
      title: 'Smart Crop Advisory',
      subtitle: 'Data-Driven Crop Recommendation System',
      summary: 'A crop advisory platform that provides structured crop recommendations based on user-input environmental parameters, using conditional logic and data-based filtering to assist agricultural decision-making.',
      techStack: ['React', 'JavaScript', 'Supabase', 'Algorithms'],
      github: 'https://github.com/saikiran-221',
      demo: 'https://team-explorers-upd.vercel.app/'
    },
    {
      id: 'bloodconnect',
      title: 'BloodConnect',
      subtitle: 'Centralized Blood Bank Mediation Platform',
      summary: 'A role-based full-stack web application connecting users, hospitals, and blood banks. Implements JWT-based authentication, MySQL database management via Supabase, and structured data handling for secure blood inventory coordination.',
      techStack: ['React', 'JavaScript', 'MySQL', 'JWT'],
      github: 'https://github.com/Sohel123-code/blood-bank',
      demo: 'https://blood-bank1-sandy.vercel.app/'
    },
    {
      id: 'snippet-vault',
      title: 'Snippet Vault',
      subtitle: 'Personal Cloud-Based Code Library for Developers',
      summary: 'A modern full-stack MERN application that lets developers save, organize, search, and reuse code snippets securely. Features JWT authentication, syntax highlighting, dark/light mode, and a responsive developer-focused dashboard.',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/saikiran-221/snippet',
      demo: 'https://snippet-ashy.vercel.app/'
    },
    {
      id: 'smart-doubt-exchange',
      title: 'Smart Doubt Exchange Platform',
      subtitle: 'AI-Powered Collaborative Learning & Doubt Resolution Platform',
      summary: 'A modern full-stack web application that enables students to ask, answer, and manage academic doubts through collaborative learning. Features JWT authentication, AI-assisted doubt solving, real-time search, subject-wise categorization, voting system, user profiles, and a responsive dashboard for an engaging learning experience.',
      techStack: ['React', 'Node.js', 'Express', 'Supabase', 'JWT', 'Tailwind CSS'],
      github: 'https://github.com/saikiran-221/csp',
      demo: 'https://csp-main-zeta.vercel.app/'
    }
  ];

  return (
    <div className="page-container projects-page">
      <div className="projects-page-header">
        <h1>Projects</h1>
        <p>A collection of full-stack applications built to solve real-world problems using modern technologies.</p>
      </div>
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
