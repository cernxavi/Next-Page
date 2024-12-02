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
        <div className='recommended-wrapper'>
            <h1 className='recommended-title'>Let us recommend a book for you</h1>
            <input type="text"
            className='recommended-input'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='recommended-button' onClick={handleRecommend}>Send</button>
            {loading && <p className='recommended-loadgin'>Loading...</p>}
            {error && <p className='recommended-error'>Error</p>}
            <div>
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