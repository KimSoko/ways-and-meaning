/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const AppBar = ({ menuDisplay, handleMouseEnter, handleMouseLeave, handleMenuClick }) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMenuClick} className="nav-bar app-bar">
      <Link to="/app">
        <h4>WHAT MATTERS MOST APP</h4>
        {menuDisplay === 'app' && (
          <div className="nav-bar-expanded app-bar">
            <p>Making major life decisions is hard. This app should help make it a bit easier by helping you to prioritize what matters most.</p>
            <ol>
              <li>Select a topic</li>
              <li>Enter 3-7 criteria you'd consider when making a decision about that topic</li>
              <li>The app will figure out all possible combinations of your criteria and ask you to choose one of two that matters most</li>
              <li>Review your results and make smarter choices</li>
            </ol>
            <button className="app-bar-2 center">Try it out</button>
          </div>
        )}
      </Link>
    </div>
  )
};

export default AppBar;

// props: handleDisplay
// onClick={handleDisplay}