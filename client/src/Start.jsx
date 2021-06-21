import React from 'react';
import ReactDOM from 'react-dom';
import Bars from './Bars.jsx';

const Start = () => {
  return (
    <div className="start-page-container">
      <div className="left-container">
        <h1>Ways + Meaning</h1>
        <h3>Tools for living better</h3>
        <div className="start-button-div">
          <button>Click Me</button>
        </div>
      </div>
      <div className="menu-container">
       <Bars />
      </div>
    </div>
  )
};

export default Start;