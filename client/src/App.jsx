import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Start from './Start.jsx';
import Ideas from './Ideas.jsx';
import About from './About.jsx';

const App = () => {
  const [currentPage, setCurrentPage] = useState('start');

  return (
    <div>
      {currentPage === 'start' && (
      <Start />
      )}
      {currentPage === 'ideas' && (
      <Ideas />
      )}
      {currentPage === 'about' && (
      <About />
      )}
    </div>
  )
};

export default App;