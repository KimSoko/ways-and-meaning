import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Bars from './Bars.jsx';

const Start = () => {
  const options = ['start', 'app', 'toolkit', 'ideas', 'about'];
  const [ index, setIndex ] = useState(0);
  const [ display, setDisplay ] = useState(options[index]);

  const handleDisplay = () => {
    let newIndex = index;
    if (newIndex === options.length - 1) {
      newIndex = 0;
    } else {
      newIndex++;
    }
    setIndex(newIndex)
  }

  useEffect(() => {
    setDisplay(options[index])
  }, [index])

  return (
    <div className="start-page-container">
      <div className="left-container">
        <h1>Ways + Meaning</h1>
        <h3>Tools for living better</h3>
        <div className="start-button-div">
          <button onClick={handleDisplay}>Click Me</button>
        </div>
      </div>
      <div className="menu-container">
       <Bars
         options={options}
         display={display}
         setDisplay={setDisplay}/>
      </div>
    </div>
  )
};

export default Start;