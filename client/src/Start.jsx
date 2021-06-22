import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Bars from './Bars.jsx';

const Start = () => {
  const options = ['start', 'app', 'toolkit', 'ideas', 'about'];
  const [ display, setDisplay ] = useState(options[0]);

  return (
    <div className="start-page-container">
      <div className="left-container">
        <h1>Ways + Meaning</h1>
        <h3>Tools for living better</h3>
        <div className="start-button-div">
          <button>Click Me</button>
        </div>
      </div>
      <div className="menu-container">
       <Bars display={display}
          setDisplay={setDisplay}/>
      </div>
    </div>
  )
};

export default Start;