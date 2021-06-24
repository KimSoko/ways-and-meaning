import React from 'react';
import { Link } from 'react-router-dom';

const DecideApp = () => {
  return (
    <div className="two-col-container">
      <div className="left-container">
        <div className="two-col-container">
          <div className="left-container-nested">
            <h1>What Matters Most</h1>
          </div>
          <div className="inline">
            <Link to='/'>
              <button className="home-button">home</button>
            </Link>
          </div>
        </div>
        <h3>A decision making app</h3>
      </div>
    </div>
  )
};

export default DecideApp;