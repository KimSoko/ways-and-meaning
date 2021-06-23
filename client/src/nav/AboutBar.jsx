import React from 'react';

const AboutBar = ({ display, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nav-bar about-bar">
      <h4>ABOUT</h4>
      {display === 'about' && (
        <div className="nav-bar-expanded">
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
      )}
    </div>
  )
};

export default AboutBar;