import React from 'react';
import Header from './Components/Header';
import Recommended from './Components/Recommended';
import Footer from './Components/Footer';
import BookList from './Components/BookList';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <p>Welcome to your project, Next Page!</p>
        <Recommended />
      </main>
      <Footer />
    </div>
  );
};

export default App;

