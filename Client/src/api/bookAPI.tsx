interface query {
    query: string;
  }
  
  interface text {
    text: string;
  }
  
  // search for a book
  export const getBooks = async (input: query) => {
    try {
      const response = await fetch(
        '/api/books/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      }
  
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
    }
  };
  
  // get a book by its id
  export const getBook = async (id: number) => {
    try {
      const response = await fetch(
        `/api/books/search/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
  
    }
  };
  
  // get books similar to a book
  export const getSimilarBooks = async (id: number) => {
    try {
      const response = await fetch(
        `/api/books/similar/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
  
    }
  }
  
  // search for a book by its author
  export const getBookByAuthor = async (input: query) => {
    try {
      const response = await fetch(
        '/api/books/search-author', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      }
  
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
    }
  };
  
  // get all books from the database
  export const getAllBooks = async () => {
    try {
      const response = await fetch(
        '/api/books', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
  
    }
  };
  
  // save a book to the database
  export const saveBook = async (input: query) => {
    try {
      const response = await fetch(
        '/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input)
      }
  
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
    }
  };
  
  // delete a book from the database
  export const deleteBook = async (id: number) => {
    try {
        const response = await fetch(`/api/books/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status === 204) {
            return { message: 'Book deleted successfully' }; // Handle no content response
        }

        if (!response.ok) {
            const data = await response.json();
            throw new Error(data.error || 'Invalid API response, check network tab!');
        }

        const data = await response.json(); // Fallback for other responses
        return data;
    } catch (err) {
        console.error('Error deleting book: ', err);
        return Promise.reject('Could not delete book');
    }
};
  
  // recommend books using the OpenAI API
  export const recommendBooks = async (input: text) => {
    try {
      const response = await fetch(
        '/api/books/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input) 
      }
  
      )
      const data = response.json();
  
      if (!response.ok) {
        throw new Error('invalid API response, check network tab!');
      }
  
      return data;
  
    } catch (err) {
      console.log('Error from Volunteer Creation: ', err);
      return Promise.reject('Could not create Volunteer');
    }
  };