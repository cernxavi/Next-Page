import React from 'react';

// Define a type for the recommended item
interface RecommendedItem {
  id: number;
  title: string;
  author: string;
  description: string;
}

const Recommended: React.FC = () => {
  // Sample data for recommendations
  const recommendedItems: RecommendedItem[] = [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'A novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel depicting a totalitarian society under constant surveillance.',
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A classic novel tackling racial injustice in the American South.',
    },
  ];

  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>Recommended for You</h2>
      <ul style={styles.list}>
        {recommendedItems.map((item) => (
          <li key={item.id} style={styles.item}>
            <h3 style={styles.title}>{item.title}</h3>
            <p style={styles.author}>By: {item.author}</p>
            <p style={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

// Inline styles
const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f1f2eb', // Alabaster from your palette
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
  },
  heading: {
    fontSize: '1.5rem',
    color: '#566246', // Ebony from your palette
    marginBottom: '10px',
  },
  list: {
    listStyle: 'none',
    padding: '0',
  },
  item: {
    marginBottom: '15px',
    padding: '10px',
    border: '1px solid #d8dad3', // Timberwolf from your palette
    borderRadius: '5px',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#4a4a48', // Davy's Gray from your palette
  },
  author: {
    fontSize: '1rem',
    color: '#566246', // Ebony
  },
  description: {
    fontSize: '0.9rem',
    color: '#4a4a48', // Davy's Gray
  },
};

export default Recommended;
