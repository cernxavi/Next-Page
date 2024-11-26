import React, { useEffect, useState } from 'react';
import { retrieveBooks } from '../api/bookAPI';

interface Book {
id: number;
title: string;
author: string;
}

const myBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [ dataCheck, setDataCheck ] = useState(true);
    
    const fetchWork = async () => {
        try {
          const data = await retrieveBooks();
          setBooks(data);
        } catch (err) {
          console.error('Failed to retrieve work:', err);
        }
      };
    
      useEffect(() => {
        if(dataCheck) {
          fetchWork();
        } else {
          setDataCheck(false);
        }
      }, [dataCheck]);

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