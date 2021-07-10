import React from 'react';
import image from '../../dist/media/background.png';

const Start = () => {
  return (
    <div className="two-col-container"  >
      <div className="outer-left-container" style={{
        backgroundImage: 'url(' + image + ')',
        backgroundSize: 'cover',
        backgroundPosition: '100%',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="left-container top-container no-wrap">
          <h1>Ways + Meaning</h1>
          <h3>Tools for living better</h3>
        </div>
      </div>
    </div>
  )
};

export default Start;