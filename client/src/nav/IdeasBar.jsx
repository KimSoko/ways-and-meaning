import React from 'react';

const IdeasBar = ({ display, handleMouseEnter, handleMouseLeave }) => {
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nav-bar ideas-bar">
      <h4>IDEAS</h4>
      {display === 'ideas' && (
        <div className="nav-bar-expanded ideas-bar">
          <p>I have a lot of opinions, and I love to write. My ideas are bits of wisdom I wrote that felt should be shared. A few include:</p>
          <ol>
            <li>On Fear and Confidence</li>
            <li>Find Your Focus Already</li>
            <li>The Roadmap: a simple planning tool</li>
            <li>The Purpose Framework</li>
          </ol>
          <button className="ideas-bar-2 center">Read on</button>
        </div>
      )}
    </div>
  )
};

export default IdeasBar;