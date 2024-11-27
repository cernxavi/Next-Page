// BookCard.tsx
import React from 'react';
// import { getBooks } from '../api/bookAPI';
import { getBook } from '../api/bookAPI';
import { saveBook } from '../api/bookAPI';

type BookCardProps = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const BookCard: React.FC<BookCardProps> = ({ id, title, image, subtitle }) => {
  const handleSave = async () => {
    try {
      const book = await getBook(id);
      await saveBook(book);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{subtitle}</p>
      <button onClick={handleSave}>Save Book</button>
    </div>
  );
};

export default BookCard;
