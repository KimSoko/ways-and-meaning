import React from 'react';
import startImage from '../../dist/media/background.png';

const Start = () => {
  return (
    <div className="page-container" style={{
      backgroundImage: 'url(' + startImage + ')',
      backgroundSize: 'cover',
      backgroundPosition: '100%',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="header"  >
        <h1>Ways + Meaning</h1>
      </div>
      <div className="sub-head">

          <h3>Tools for living better</h3>

      </div>
    </div>
  )
};

export default Start;