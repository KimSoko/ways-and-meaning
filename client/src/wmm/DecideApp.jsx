import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../dist/media/choices-2.png';

const DecideApp = () => {
  return (
    <div className="two-col-container">
    <div className="outer-left-container" style={{
      backgroundImage: 'url(' + image + ')',
      backgroundSize: 'cover',
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="left-container">
        <div className="two-col-container">
          <div className="left-container-nested">
            <h1>What Matters Most</h1>
          </div>
          <div className="inline">
            <Link to="/">
              <button className="home-button">home</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="left-container">
        <h3>A decision making app</h3>
        <div className="inner-text">

        </div>
      </div>
    </div>
  </div>
  )
};

export default DecideApp;