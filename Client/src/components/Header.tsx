import React from 'react';

import Navbar from './Navbar';

const Header: React.FC = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to Next Page</h1>
      {/* <nav style={styles.nav}>
        <a href="#home" style={styles.link}>Home</a>
        <a href="#my books" style={styles.link}>My Books</a>
        <a href="#login/signIn" style={styles.link}>Login/Sign In</a>
        <a href="#serch" style={styles.link}>Serch</a>
      </nav> */}
      <Navbar />
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#a4c2a5', // Cambridge Blue from your palette
    color: '#4a4a48', // Davy's Gray from your palette
  },
  title: {
    fontSize: '2rem',
    margin: '0',
  },
  nav: {
    marginTop: '10px',
  },
  link: {
    margin: '0 10px',
    textDecoration: 'none',
    color: '#566246', // Ebony from your palette
    fontWeight: 'bold',
  },
};

export default Header;
