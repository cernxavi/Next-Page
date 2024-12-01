// import React from 'react'
import { Carousel } from 'nuka-carousel';
import BookCard from './bookCard';

export default function BookCarousel({ books }: any) {
    return (
        <Carousel showArrows>
          {books.map((book: any) => (
              <BookCard
                key={book.id}
                id={book.id}
                title={book.title}
                // subtitle={book.subtitle || ''}
                image={book.image}
              />
            ))}
        </Carousel>
      );
}

