import React from 'react';

const AppBar = ({ display }) => {
  return (
    <div className="bar app-bar">
      {display !== 'app' && (
        <div className="nav-bar-div">
          <h4>WHAT MATTERS MOST APP</h4>
        </div>
      )}
      {display === 'app' && (
        <div className="nav-box-div app-bar">
          <h2>WHAT MATTERS MOST APP</h2>
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
    </div>
  )
};

export default AppBar;