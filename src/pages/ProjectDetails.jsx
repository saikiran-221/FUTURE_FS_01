import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetails.css';

const ProjectDetails = () => {
  const { projectId } = useParams();

  const projectsContent = {
    bloodconnect: {
      title: 'BloodConnect',
      subtitle: 'Centralized Blood Bank Mediation Platform',
      description: 'BloodConnect is a centralized blood mediation system designed to streamline communication between donors, hospitals, and blood banks. The application supports multiple user roles with controlled access and secure authentication mechanisms.',
      problem: 'The system implements JWT-based authentication to enable stateless and secure session management. Role-based logic ensures that users, hospitals, and blood banks access only authorized features.',
      highlights: [
        'Implemented JWT-based authentication for secure user sessions',
        'Designed role-based access control (User, Hospital, Blood Bank)',
        'Managed relational data using MySQL (integrated via Supabase)',
        'Integrated Kaggle mock dataset to simulate external data sources',
        'Built dynamic protected routes in React',
        'Structured modular frontend architecture for scalability'
      ],
      architecture: 'MySQL (integrated via Supabase) is used for structured relational data management, including user profiles, blood inventory records, and blood request tracking. A Kaggle-based mock dataset is integrated to simulate external health data sources. The frontend is built using React with protected routes and dynamic rendering based on authentication state.',
      steps: [
        { title: 'Open the App', desc: 'Visit the live demo link. You will land on the BloodConnect home page showing options to log in or register.' },
        { title: 'Register an Account', desc: 'Click "Register" and choose your role — User (Donor), Hospital, or Blood Bank. Fill in your name, email, password, and role-specific details, then submit.' },
        { title: 'Log In Securely', desc: 'Enter your registered email and password. JWT-based authentication grants you a secure session and redirects you to your role-based dashboard.' },
        { title: 'Explore Your Dashboard', desc: 'Each role sees a different dashboard. Donors can view blood availability, hospitals can raise blood requests, and blood banks can manage inventory.' },
        { title: 'Raise or View Blood Requests', desc: 'Hospitals can submit blood requests specifying blood group and quantity. Donors and blood banks can view active requests in their region.' },
        { title: 'Manage Inventory (Blood Banks)', desc: 'Blood banks can update stock levels for each blood group. The dashboard reflects real-time inventory status.' },
        { title: 'Log Out', desc: 'Click the logout button from the navbar. Your JWT session is cleared and you are redirected to the login page.' }
      ],
      techStack: {
        Frontend: ['React', 'JavaScript', 'CSS'],
        Database: ['MySQL (Supabase)'],
        Concepts: ['JWT Authentication', 'Role-based Logic'],
        Tools: ['Git', 'GitHub', 'Vercel']
      },
      github: 'https://github.com/saikiran-221',
      demo: 'https://blood-bank1-sandy.vercel.app/'
    },
    'smart-crop': {
      title: 'Smart Crop Advisory',
      subtitle: 'Data-Driven Crop Recommendation System',
      description: 'Smart Crop Advisory is a web-based agricultural recommendation system designed to assist farmers in selecting suitable crops based on environmental and input conditions.',
      problem: 'The application processes user-provided parameters such as soil type, environmental factors, or predefined agricultural criteria and applies rule-based decision logic to generate relevant crop recommendations.',
      highlights: [
        'Developed rule-based crop recommendation logic',
        'Built dynamic input forms with state-driven rendering',
        'Managed crop dataset storage using MySQL (via Supabase)',
        'Implemented conditional filtering algorithms for data mapping',
        'Designed responsive and structured UI for usability'
      ],
      architecture: 'The frontend is developed using React for dynamic form handling and state management. Supabase is used for storing and retrieving crop datasets efficiently. The system architecture emphasizes structured input validation, logical condition mapping, and scalable data retrieval mechanisms.',
      steps: [
        { title: 'Open the App', desc: 'Visit the live demo link. The home page displays a clean welcome screen explaining the purpose of the Smart Crop Advisory system.' },
        { title: 'Navigate to the Advisory Form', desc: 'Click on "Get Crop Recommendation" or the advisory button visible on the homepage to open the input form.' },
        { title: 'Enter Your Field Parameters', desc: 'Fill in the required inputs such as soil type, region, rainfall level, temperature, and any other agricultural parameters shown in the form.' },
        { title: 'Submit the Form', desc: 'Click the "Get Recommendation" or "Submit" button. The system processes your inputs using rule-based conditional filtering algorithms.' },
        { title: 'View Crop Recommendations', desc: 'The results section will display a list of suitable crops ranked or filtered based on your entered parameters, along with brief crop descriptions.' },
        { title: 'Try Different Inputs', desc: 'You can reset the form and enter different parameters to explore how various conditions affect the crop recommendations.' },
        { title: 'Use on Any Device', desc: 'The application is fully responsive. You can access it on mobile, tablet, or desktop and get the same experience.' }
      ],
      techStack: {
        Frontend: ['React', 'JavaScript', 'CSS'],
        Database: ['MySQL (Supabase)'],
        Logic: ['Conditional filtering algorithms', 'Structured state management'],
        Tools: ['Git', 'GitHub']
      },
      github: 'https://github.com/saikiran-221',
      demo: 'https://team-explorers-upd.vercel.app/'
    },
    'snippet-vault': {
      title: 'Snippet Vault',
      subtitle: 'Personal Cloud-Based Code Library for Developers',
      description: 'Snippet Vault is a modern full-stack MERN application designed for developers to save, organize, and instantly reuse code snippets. It functions as a personal cloud-based code library with secure authentication, syntax highlighting for 10+ languages, and a clean developer-focused dashboard built for speed and usability.',
      problem: 'Developers frequently lose track of reusable code across different projects, files, or browser tabs. Snippet Vault solves this by providing a centralized, searchable, and secure platform where every snippet is stored with metadata — title, language, tags, category, and description — making retrieval instant and organized.',
      highlights: [
        'Implemented JWT-based user authentication for secure login and signup',
        'Built full CRUD operations — Create, Edit, Delete, and View snippets',
        'Integrated syntax highlighting for 10+ languages including JS, Python, Java, SQL, and React',
        'Developed real-time search and multi-filter system by language, category, and tags',
        'Added Favorite Snippets feature with persistent state via MongoDB',
        'Implemented one-click Copy to Clipboard for quick code reuse',
        'Designed a responsive dark/light mode toggle with smooth transitions',
        'Structured secure REST APIs with Express.js and MongoDB Atlas integration',
        'Built a user profile management module with editable account details',
        'Deployed frontend on Vercel with a scalable cloud backend'
      ],
      architecture: 'The frontend is built using React.js with Tailwind CSS for a responsive, glassmorphism-styled UI featuring gradient buttons and smooth animations. The backend uses Node.js with Express.js to expose secure RESTful APIs for all snippet and user operations. MongoDB Atlas serves as the cloud database, storing user accounts and snippet documents with structured schema validation. Authentication is handled via JWT tokens with protected API routes. The application follows a component-based architecture with clean separation of concerns between UI, API logic, and data access layers.',
      steps: [
        { title: 'Open the App', desc: 'Visit the live demo link. You will land on the Snippet Vault welcome page with options to Sign Up or Log In.' },
        { title: 'Create an Account', desc: 'Click "Sign Up", enter your name, email, and a strong password, then submit. Your account is created securely with JWT authentication.' },
        { title: 'Log In to Your Dashboard', desc: 'Enter your email and password on the login page. After authentication, you are redirected to your personal snippet dashboard.' },
        { title: 'Create a New Snippet', desc: 'Click the "+ New Snippet" button. Fill in the title, choose a programming language, add a description, tags, category, and paste your code into the editor.' },
        { title: 'Save and View Snippets', desc: 'Click "Save". Your snippet appears on the dashboard with syntax highlighting applied automatically based on the selected language.' },
        { title: 'Search and Filter', desc: 'Use the search bar to find snippets by title or keyword. Apply filters by language, category, or tags to narrow down results instantly.' },
        { title: 'Copy Code to Clipboard', desc: 'Click the copy icon on any snippet card to instantly copy the code to your clipboard — ready to paste anywhere.' },
        { title: 'Mark as Favourite', desc: 'Click the heart/star icon on any snippet to add it to your favourites. Access all favourited snippets from the Favourites tab in the sidebar.' },
        { title: 'Edit or Delete a Snippet', desc: 'Open any snippet and click "Edit" to modify its details or code. Click "Delete" to permanently remove it from your library.' },
        { title: 'Toggle Dark / Light Mode', desc: 'Use the theme toggle button in the navbar to switch between dark and light mode. Your preference is saved across sessions.' }
      ],
      techStack: {
        Frontend: ['React.js', 'Tailwind CSS', 'JavaScript'],
        Backend: ['Node.js', 'Express.js'],
        Database: ['MongoDB Atlas'],
        Auth: ['JWT Authentication'],
        Tools: ['Git', 'GitHub', 'Vercel']
      },
      github: 'https://github.com/saikiran-221',
      demo: 'https://snippet-ashy.vercel.app/'
    }
  };

  const project = projectsContent[projectId];

  if (!project) {
    return <div className="page-container">Project not found.</div>;
  }

  const navigate = useNavigate();

  return (
    <div className="page-container project-details-page">

      <button className="back-btn" onClick={() => navigate('/projects')}>
        <span className="back-arrow">←</span>
        Back to Projects
      </button>

      <div className="project-header">
        <div className="header-content">
          <h1>{project.title}</h1>
          <p className="project-subtitle">{project.subtitle}</p>
        </div>
        <div className="header-actions">
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">Live Demo</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
        </div>
      </div>

      <div className="details-grid">
        <div className="details-main">
          <section className="detail-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          <section className="detail-section">
            <h3>Key Highlights</h3>
            <ul className="highlights-list">
              {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Architecture & Logic</h3>
            <p>{project.architecture}</p>
          </section>

          {project.steps && (
            <section className="detail-section steps-section">
              <h3>How to Use</h3>
              <div className="steps-list">
                {project.steps.map((step, index) => (
                  <div className="step-item" key={index}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-content">
                      <h4 className="step-title">{step.title}</h4>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="details-sidebar">
          <div className="sidebar-card">
            <h3>Tech Stack</h3>
            {Object.entries(project.techStack).map(([category, skills]) => (
              <div key={category} className="stack-category">
                <h4>{category}</h4>
                <div className="tech-tags">
                  {skills.map(skill => <span key={skill} className="tech-tag">{skill}</span>)}
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProjectDetails;
