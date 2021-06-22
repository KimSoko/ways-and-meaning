import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const AboutBar = ({ display }) => {
  const [expandAbout, setExpandAbout] = useState(false);

  useEffect(() => {
    if (display === 'about') {
      setExpandAbout(true);
    }
  }, [display])

  return (
    <div className="bar about-bar">
      {display !== 'about' && (
        <div className="nav-bar-div">
          <h4>ABOUT</h4>
        </div>
      )}
      {display === 'about' && (
        <CSSTransition in={expandAbout} timeout={500} classNames="box-expanded">
          <div className="nav-box-div">
            <h2>ABOUT</h2>
            <p>Hi, I'm Kim Soko Schaefer, the human behind this site. You might be wondering why I'm qualified to give you advice on betterr living. The truth is I'm not. No one is. But I've done a lot of things to help me street cred. Notably, I'm a...</p>
            <ol>
              <li>Strategy Consultant</li>
              <li>Software Engineer</li>
              <li>Mom</li>
              <li>Lover of Life</li>
            </ol>
            <p>(and I'm obsessed with brain science and decision making)</p>
            <button className="about-bar-2 center">Get to know me</button>
          </div>
        </CSSTransition>
      )}
    </div>
  )
};

export default AboutBar;