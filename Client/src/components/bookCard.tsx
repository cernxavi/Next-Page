// BookCard.tsx
import React from 'react';
//import { getBooks } from '../api/bookAPI';
import { getBook } from '../api/bookAPI';
import { saveBook } from '../api/bookAPI';
import '../styles/bookCard.css';

type BookCardProps = {
  image: string;
  id: number;
  title: string;
  // subtitle: string;
};

const BookCard: React.FC<BookCardProps> = ({ image, id, title }) => {
  const [isSaved, setIsSaved] = React.useState(false); // track if book is saved

  const handleSave = async () => {
    try {
      const book = await getBook(id);
      await saveBook(book);
      setIsSaved(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="col-lg-4">
      <div className="book-card">
        <img className="book-cover" src={image} alt={title} />
        <h6 className="book-title">{title}</h6>
        <button className="save-button" onClick={handleSave} disabled={isSaved}>
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
