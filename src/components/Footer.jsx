import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>M Sai Kiran</h3>
          <p>Frontend Developer | Aspiring Full Stack</p>
        </div>

        <div className="footer-middle">
          <h4>Resume</h4>
          <div className="footer-socials">
            <a href="/Miriyala_SaiKiran_ATS_Resume.pdf" className="btn-primary-footer" target="_blank" rel="noopener noreferrer">
              Download Resume 📄
            </a>
          </div>
        </div>

        <div className="footer-right">
          <h4>Connect</h4>
          <div className="footer-socials">
            <a href="https://github.com/saikiran-221" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/miriyalasaikiran" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:ramakrishnamiriyala@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 M Sai Kiran. Utility over storytelling.</p>
      </div>
    </footer>
  );
}
