import React from 'react';
import ReactDOM from 'react-dom';
import Bars from './Bars.jsx';

const Ideas = () => {
  return (
    <div className="ideas">
      <Bars />
      <main>
        <h1>This is the Ideas Page</h1>
        <div>
          <h3>Idea 1</h3>
          <h3>Idea 2</h3>
          <h3>Idea 3</h3>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  )
};

export default Ideas;