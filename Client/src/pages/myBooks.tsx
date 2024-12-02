
import { useEffect, useState } from 'react';
import { getAllBooks } from '../api/bookAPI';
import BookList from '../components/BookList';

interface Book {
   id: number;
   title: string;
   subtitle?: string;
   image: string;
}

const MyBooks = () => {
   const [books, setBooks] = useState<Book[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   const fetchBooks = async () => {
       setLoading(true);
       setError(false);
       try {
           const allBooks = await getAllBooks();
           setBooks(allBooks);
       } catch (err) {
           console.error(err);
           setError(true);
       }
       setLoading(false);
   }

   useEffect(() => {
       fetchBooks();
   }, []);

   return (
       <div className='mybooks-wrapper'>
           <h1 className='mybooks-title'>My Books</h1>
           {loading && <p className='mybooks-loading'>Loading...</p>}
           {error && <p className='mybooks-error'>Error</p>}
           <ul>
               {books.map((book) => (
                   <li key={book.id}>
                       <BookList
                           id={book.id}
                           title={book.title}
                           subtitle={book.subtitle || ''}
                           image={book.image}
                       />
                   </li>
               ))}
           </ul>
       </div>
   );
}

export default MyBooks;