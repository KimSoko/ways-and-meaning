/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const AboutBar = ({ menuDisplay, handleMouseEnter, handleMouseLeave, handleMenuClick }) => {
  return (

    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleMenuClick} className="nav-bar about-bar">
      <h4>ABOUT</h4>
      {menuDisplay === 'about' && (
        <div className="nav-bar-expanded">
          <p>Hi, I'm Kim Soko Schaefer, the human behind this site. You might be wondering why I'm qualified to give you advice on betterr living. The truth is I'm not. No one is. But I've done a lot of things to help me street cred. Notably, I'm a...</p>
          <ol>
            <li>Strategy Consultant</li>
            <li>Software Engineer</li>
            <li>Mom</li>
            <li>Lover of Life</li>
          </ol>
          <p>(and I'm obsessed with brain science and decision making)</p>
          <Link to="/about">
            <button className="about-bar-2 center">Get to know me</button>
          </Link>
        </div>
      )}
    </div>

  )
};

export default AboutBar;