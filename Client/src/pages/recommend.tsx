<<<<<<< HEAD
//  import { useEffect, useState } from 'react';
//  import { recommendBooks } from '../api/bookAPI';

 export default function RecommendBook() {
    //  const [books, setBooks] = useState<{ id: number; title: string; author: string }[]>([]);
    //  const [loading, setLoading] = useState(true);
    //  const [error, setError] = useState(false);

    //  interface AIresponse {
    //      title: string;
    //      description: string;
    //      author: string;
    //  }

    //  function recommend(input) {
    //      const data: AIresponse = recommendBooks(input);
    //      return (
    //          <div>
    //              <h1>{data.title}</h1>
    //              <p>{data.description}</p>
    //              <p>By {data.author}</p>
    //          </div>
    //      )
    //  }

    //   useEffect(() => {
    //      recommendBooks()
    //          .then((data) => {
    //              setBooks(data);
    //              setLoading(false);
    //          })
    //          .catch((err) => {
    //              console.error(err);
    //              setError(true);
    //          });
    //  }, []);

    //  if (loading) return <p>Loading...</p>;
    //  if (error) return <p>Error</p>;

     return (
         <div>
             <h1>Browse Books</h1>
             <ul>
                 {/* {books.map((book) => (
                     <li key={book.id}>
                         {book.title} by {book.author}
                     </li>
                 ))} */}
             </ul>
         </div>
     );
 }
=======
import { useState } from 'react';
import { recommendBooks } from '../api/bookAPI';
import Recommended from '../components/Recommended';

export default function RecommendBook() {
    const [text, setText] = useState('');
    const [recommendedBook, setRecommendedBook] = useState<{ title: string; author: string; description: string; image: string; } | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleRecommend = async () => {
        setLoading(true);
        setError(false);
        try {
            const res = await recommendBooks({ text });
            console.log(res);
            setRecommendedBook(res);
        } catch (err) {
            console.error(err);
            setError(true);
        }
        setLoading(false);
    }

    return (
        <div>
            <h1>Let us recommend a book for you</h1>
            <input type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleRecommend}>Send</button>
            {loading && <p>Loading...</p>}
            {error && <p>Error</p>}
            <div>
                {/* Conditionally render the Recommended component */}
                {recommendedBook && (
                    <Recommended
                        title={recommendedBook.title}
                        author={recommendedBook.author}
                        description={recommendedBook.description}
                    />
                )}
            </div>
        </div>
    );
}
>>>>>>> main
