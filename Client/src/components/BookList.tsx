// BookList.tsx
import React from 'react';
// import BookCard from './bookCard';
import { deleteBook } from '../api/bookAPI';

interface BookListProps {
    id: number;
    title: string;
    subtitle: string;
    image: string;
}

const BookList: React.FC<BookListProps> = ({ id, title, image, subtitle }) => {
    // function to handle deleting book from database
    const handleDelete = async () => {
        try {
            console.log(id);
            await deleteBook(id);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className="book-list">
        <h2>{title}</h2>
        <img src={image} alt={title} />
        <p>{subtitle}</p>
        <button onClick={handleDelete}>Delete Book</button>
    </div>
  );
};

export default BookList;
