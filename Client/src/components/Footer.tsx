import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          Contact us: <a href="mailto:contact@nextpage.com" style={styles.link}>contact@nextpage.com</a>
        </p>
        <p style={styles.text}>&copy; 2024 Next Page. All rights reserved.</p>
      </div>
    </footer>
  );
};

// Inline styles
const styles = {
  footer: {
    backgroundColor: '#566246', 
    color: '#f1f2eb', 
    padding: '20px 0',
    textAlign: 'center' as const,
    marginTop: '20px',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  },
  text: {
    margin: '5px 0',
    fontSize: '1rem',
  },
  link: {
    color: '#a4c2a5', 
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Footer;