// BookList.tsx
import React from 'react';
import BookCard from './bookCard';

const books = [
  {
    title: 'The Great Gatsby',
    coverUrl: 'https://example.com/gatsby.jpg',
    author: 'F. Scott Fitzgerald',
  },
  {
    title: 'To Kill a Mockingbird',
    coverUrl: 'https://example.com/mockingbird.jpg',
    author: 'Harper Lee',
  },
  {
    title: '1984',
    coverUrl: 'https://example.com/1984.jpg',
    author: 'George Orwell',
  },
];

const BookList: React.FC = () => {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          coverUrl={book.coverUrl}
          author={book.author}
        />
      ))}
    </div>
  );
};

export default BookList;
