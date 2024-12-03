import React from 'react';
import '../styles/Recommended.css';

// Define a type for the recommended item
interface RecommendProps {
  title: string;
  author: string;
  description: string;
}

const Recommended: React.FC<RecommendProps> = ({ title, author, description }) => {
  return (
    <div className="recommended-wrapper">
      {/* Title for the recommended section */}
      <h3 className="recommended-title">Recommended for You</h3>
      
      {/* Recommended list */}
      <ul className="list">
        <li className="item">
          <h3 className="title">{title}</h3>
          <p className="author">By {author}</p>
          <p className="description">{description}</p>
        </li>
      </ul>

      {/* Input section for recommendations */}
      <div className="recommended-box">
        <h3>Get Book Recommendations</h3>
        <div className="recommended-bar">
          <input
            type="text"
            className="recommended-input"
            placeholder="Enter your preferences"
          />
          <button className="recommended-button">Submit</button>
        </div>
      </div>

      {/* Search section for recommended books */}
      <div className="recommended-bar">
        <input
          type="text"
          className="recommended-input"
          placeholder="Search for recommended books"
        />
        <button className="recommended-button">Search</button>
      </div>
    </div>
  );
};

export default Recommended;


