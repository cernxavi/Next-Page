import React, { useEffect, useState } from 'react';

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

}

export default myBooks;