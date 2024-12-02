import '../styles/Recommended.css';

// Define a type for the recommended item
interface RecommendProps {
  title: string;
  author: string;
  description: string;
}

const Recommended: React.FC<RecommendProps> = ({ title, author, description }) => {
  return (
    <div className="recommended-wrapper">
      <h2 className="recommended-title">Recommended for You</h2>
      <ul className="list">
        <li className="item">
          <h3 className="title">{title}</h3>
          <p className="author">By {author}</p>
          <p className="description">{description}</p>
        </li>
      </ul>
    </div>
  );
};

export default Recommended;



// // Inline styles
// const styles = {
//   container: {
//     padding: '20px',
//     backgroundColor: '#f1f2eb', // Alabaster from your palette
//     borderRadius: '8px',
//     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
//     marginTop: '20px',
//   },
//   heading: {
//     fontSize: '1.5rem',
//     color: '#566246', // Ebony from your palette
//     marginBottom: '10px',
//   },
//   list: {
//     listStyle: 'none',
//     padding: '0',
//   },
//   item: {
//     marginBottom: '15px',
//     padding: '10px',
//     border: '1px solid #d8dad3', // Timberwolf from your palette
//     borderRadius: '5px',
//     backgroundColor: '#ffffff',
//   },
//   title: {
//     fontSize: '1.2rem',
//     fontWeight: 'bold',
//     color: '#4a4a48', // Davy's Gray from your palette
//   },
//   author: {
//     fontSize: '1rem',
//     color: '#566246', // Ebony
//   },
//   description: {
//     fontSize: '0.9rem',
//     color: '#4a4a48', // Davy's Gray
//   },
// };

// export default Recommended;
