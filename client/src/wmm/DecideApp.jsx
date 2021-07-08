import React from 'react';
import { Link } from 'react-router-dom';
import DecideTopic from './DecideTopic.jsx';
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
          <h3>A decision making app</h3>
        </div>

        <div className="two-col-container no-top-margin">
          <div className="left-container no-top-margin">
            <div className="inner-text no-top-margin">
              <p>Making major life decisions is hard. This app should help make it a bit easier by helping you to prioritize what matters most.</p>
              <p>To get started...</p>
              <ol>
                <li>Select a topic</li>
                <li>Enter 3-7 criteria you’re considering when making the decision</li>
                <li>For every combination of options, choose one thing that matters most</li>
                <li>Review your results and use them to make smarter decisions</li>
              </ol>
            </div>
          </div>
          <div className="right-container no-top-margin">
            <DecideTopic />
          </div>
        </div>
      </div>
    </div>
  )
};

export default DecideApp;