// BookCard.tsx
import React from 'react';

type BookCardProps = {
  title: string;
  coverUrl: string;
  author?: string; // Optional
};

const BookCard: React.FC<BookCardProps> = ({ title, coverUrl, author }) => {
  return (
    <div className="book-card">
      <img src={coverUrl} alt={`Cover of ${title}`} className="book-cover" />
      <h3 className="book-title">{title}</h3>
      {author && <p className="book-author">By {author}</p>}
    </div>
  );
};

export default BookCard;
