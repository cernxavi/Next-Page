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