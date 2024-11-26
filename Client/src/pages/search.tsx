import { useState } from 'react';
import { getBooks } from '../api/bookAPI';
import BookCard from '../components/bookCard';


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
        <div>
            <h1>Search a Book</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)} />
                <button onClick={handleSearch}>Search</button>
                {loading && <p>Loading...</p>}
                {error && <p>Error</p>}
                <div>
                {books.map((book) => (
                    <BookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        subtitle={book.subtitle || ''}
                        image={book.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default SearchBooks;