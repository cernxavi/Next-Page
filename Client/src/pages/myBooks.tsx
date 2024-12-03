
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
   const [searchTerm, setSearchTerm] = useState(''); // State for the search term
   const [filteredBooks, setFilteredBooks] = useState<Book[]>([]); // State for filtered books

   const fetchBooks = async () => {
       setLoading(true);
       setError(false);
       try {
           const allBooks = await getAllBooks();
           setBooks(allBooks);
           setFilteredBooks(allBooks); // Initially set filtered books to all books
       } catch (err) {
           console.error(err);
           setError(true);
       }
       setLoading(false);
   };

   useEffect(() => {
       fetchBooks();
   }, []);

   // Filter books based on the search term
   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       setSearchTerm(e.target.value);
       const filtered = books.filter((book) =>
           book.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
           (book.subtitle && book.subtitle.toLowerCase().includes(e.target.value.toLowerCase()))
       );
       setFilteredBooks(filtered);
   };

   return (
       <div className="mybooks-wrapper">
           <h3 className="mybooks-title">My Books</h3>
           <div className="mybooks-bar">
               <input
                   type="text"
                   className="mybooks-input"
                   placeholder="Search your books"
                   value={searchTerm}
                   onChange={handleSearch}
               />
               <button className="mybooks-button">Search</button>
           </div>

           {loading && <p className="mybooks-loading">Loading...</p>}
           {error && <p className="mybooks-error">Error</p>}

           {filteredBooks.length > 0 ? (
               <ul>
                   {filteredBooks.map((book) => (
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
           ) : (
               <p>No books found</p>
           )}
       </div>
   );
};

export default MyBooks;
