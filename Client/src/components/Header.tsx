import React from 'react';
import '../styles/Header.css';
import Navigation from './Nav';
import headerImage from '/assets/lines.jpg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Navigation />
      <div className="header-content">
        <h1 className="header-title">
          Discover your next 
          <br />
          favorite book
        </h1>
        <img 
          src={headerImage}
          alt="Header Image" 
          className="header-image" 
        />
      </div>
    </header>
  );
};

export default Header;

