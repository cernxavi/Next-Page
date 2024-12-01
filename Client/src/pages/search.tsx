import { useState } from 'react';
import { getBooks } from '../api/bookAPI';
import BookCard from '../components/bookCard';
import BookCarousel from '../components/BookCarousel';
import '../styles/search.css';



function SearchBooks() {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState<{ id: number; title: string; subtitle: string; image: string; }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await getBooks({ query });
            console.log(res);
            // const data = await res.json();
            const flattened = res.books.flat();
            setBooks(flattened);
        } catch (err) {
            console.error(err);
            setError(true);
        }
        setLoading(false);
    };

    return (
        <div className="search-wrapper">
          <h1 className="search-title">Search a Book</h1>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}>
              Search
            </button>
          </div>
          {loading && <p className="search-loading">Loading...</p>}
          {error && <p className="search-error">Error</p>}
          <BookCarousel books={books} />
          {/* <div className="row">
            {books.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                image={book.image}
              />
            ))}
          </div> */}
        </div>
      );
      
}

export default SearchBooks;