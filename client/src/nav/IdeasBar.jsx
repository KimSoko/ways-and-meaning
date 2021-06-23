import React from 'react';

const IdeasBar = ({ display }) => {
  return (
    <div className="nav-bar ideas-bar">
      {display !== 'ideas' && (

          <h4>IDEAS</h4>

      )}
      {display === 'ideas' && (
        <div className="nav-bar ideas-bar">
          <h2>IDEAS</h2>
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