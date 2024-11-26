// import React, { useState } from 'react';

// function SearchBooks() {      
//     const [query, setQuery] = useState('');
//     const [books, setBooks] = useState<{ id: number; title: string; author: string }[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);

//     const handleSearch = async () => {
//         setLoading(true);
//         setError(false);
//         try {
//             const res = await fetch(`/api/books/search?query=${query}`);
//             const data = await res.json();
//             setBooks(data);
//         } catch (err) {
//             console.error(err);
//             setError(true);
//         }
//         setLoading(false);
//     };

//     return (
//         <div>
//             <h1>Search Books</h1>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)} />
//                 <button onClick={handleSearch}>Search</button>
//                 {loading && <p>Loading...</p>}
//                 {error && <p>Error</p>}
//                 <ul>
//                     {books.map((book) => (
//                         <li key={book.id}>
//                             {book.title} by {book.author}
//                         </li>
//                     ))}
//                 </ul>
//         </div>
//     );
// }

// export default SearchBooks;