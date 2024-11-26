const retrieveBooks = async () => {
    try {
      const response = await fetch('/api/books', {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      
      if(!response.ok) {
        throw new Error('invalid work API response, check network tab!');
      }
  
      return data;
    } catch(err) {
      console.log('Error from data retrieval:', err);
      return [];
    }
  };

export { retrieveBooks };