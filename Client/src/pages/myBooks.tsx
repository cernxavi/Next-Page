<<<<<<< HEAD
 import  { useEffect, useState } from 'react';

 interface Book {
 id: number;
 title: string;
 author: string;
 }

 const myBooks = () => {
     const [books, setBooks] = useState<Book[]>([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(false);

     useEffect(() => {
         fetch('/api/books')
             .then((res) => res.json())
             .then((data) => {
                 setBooks(data);
                 setLoading(false);
             })
             .catch((err) => {
                console.error(err);
                 setError(true);
             });
     }, []);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error</p>;

     return (
         <div>
             <h1>My Books</h1>
             <ul>
                 {books.map((book) => (
                     <li key={book.id}>
                         {book.title} by {book.author}
                     </li>
                 ))}
             </ul>
         </div>
     );
=======
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
        <div>
            <h1>My Books</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
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
>>>>>>> main

 }

<<<<<<< HEAD
 export default myBooks;
=======
export default MyBooks;
>>>>>>> main
