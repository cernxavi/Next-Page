import React from 'react';
import '../styles/Footer.css'; 


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Contact us: <a href="mailto:contact@nextpage.com" className="footer-link">contact@nextpage.com</a>
        </p>
        <p className="footer-text">&copy; 2024 Next Page. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
